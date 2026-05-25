import React from 'react'
import { useAuth } from './AuthContext'
import Link from 'next/link'

export default function SubscriptionGuard({ children, requireAssessments = false }: { children: React.ReactNode; requireAssessments?: boolean }){
  const { user } = useAuth()

  if(!user) return (
    <div className="p-12 max-w-xl mx-auto mt-12 glass-card text-center border-l-4 border-l-[#0066FF]">
      <h3 className="text-2xl font-poppins font-bold text-white mb-4">Authentication Required</h3>
      <p className="text-[#B0B3B8] font-inter mb-6">Please log in to your account to access this content.</p>
      <Link href="/login" className="px-6 py-3 bg-[#0066FF] hover:bg-[#00E64D] hover:text-[#0A0A0F] text-white rounded-lg font-bold transition-colors inline-block">
        Go to Login
      </Link>
    </div>
  )

  const sub = user.subscription
  const active = sub && sub.status === 'active'

  if(!active) return (
    <div className="p-12 max-w-xl mx-auto mt-12 glass-card text-center border-l-4 border-l-[#D4A017] shadow-[0_0_30px_rgba(212,160,23,0.1)]">
      <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-[#D4A017] flex items-center justify-center text-3xl mx-auto mb-4 border border-[#D4A017]/30">⚠️</div>
      <h3 className="text-2xl font-poppins font-bold text-white mb-4">Subscription Expired</h3>
      <p className="text-[#B0B3B8] font-inter mb-6">Your access has expired. Please renew your subscription to unlock lessons, videos, and quizzes.</p>
      <button className="px-6 py-3 bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-[#0A0A0F] font-bold rounded-lg hover:scale-105 transition-transform">
        Renew Subscription
      </button>
    </div>
  )

  if(requireAssessments && sub?.assessmentsAddOn !== 'active'){
    return (
      <div className="p-12 max-w-xl mx-auto mt-12 glass-card text-center border-l-4 border-l-[#0066FF]">
        <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-[#0066FF] flex items-center justify-center text-3xl mx-auto mb-4 border border-[#0066FF]/30">📊</div>
        <h3 className="text-2xl font-poppins font-bold text-white mb-4">Assessments Add-on Required</h3>
        <p className="text-[#B0B3B8] font-inter mb-6">This section is a premium add-on. Subscribe to ASSESSMENTS to unlock weekly, monthly, and terminology tests.</p>
        <button className="px-6 py-3 border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white font-bold rounded-lg transition-colors">
          Add Assessments
        </button>
      </div>
    )
  }

  return <>{children}</>
}
