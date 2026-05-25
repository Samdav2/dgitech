import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import RoleSelector from '../components/RoleSelector'
import { useAuth } from '../shared/AuthContext'
import { useRouter } from 'next/router'
import FreeTrialPopup from '../components/FreeTrialPopup'
import Link from 'next/link'

export default function LoginPage(){
  const { login } = useAuth()
  const router = useRouter()
  const [role, setRole] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (router.query.role) {
      const qRole = Array.isArray(router.query.role) ? router.query.role[0] : router.query.role
      const match = ['Admin', 'TusoTeacher', 'Teacher', 'Learner', 'Parent'].find(r => r.toLowerCase() === qRole.toLowerCase())
      if(match) setRole(match)
    }
  }, [router.query.role])

  const handleSelect = (r: string) => setRole(r)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!role) return alert('Please select a role first to continue.')
    // Authentication system basic structure: Email + Password login, Role-based access
    login(email || `${role.toLowerCase()}@example.com`, role as any)
    
    const routes: Record<string, string> = {
      Admin: '/admin-control',
      TusoTeacher: '/tuso-teacher-dashboard',
      Teacher: '/teacher-dashboard',
      Learner: '/learner-dashboard',
      Parent: '/parent-dashboard'
    }
    router.push(routes[role] || '/')
  }

  return (
    <Layout>
      <FreeTrialPopup />
      <div className="max-w-4xl mx-auto py-16 px-6 font-inter text-center">
        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-4">Welcome to Tusome<span className="text-[#00E64D]">Plus</span></h2>
        <p className="text-[#B0B3B8] mb-12 text-lg">Select your role to access your dashboard.</p>

        <RoleSelector onSelect={handleSelect} selectedRole={role} />

        {role && (
          <form onSubmit={handleSubmit} className="mt-12 max-w-md mx-auto glass-card p-8 text-left animate-slide-up">
            <h3 className="text-2xl font-poppins font-semibold text-white mb-6 text-center">Log in as {role}</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#B0B3B8] mb-1">Email Address</label>
                <input 
                  type="email"
                  value={email} 
                  required
                  onChange={(e)=>setEmail(e.target.value)} 
                  placeholder="you@example.com" 
                  className="w-full p-4 rounded-xl bg-[#0A1628] border border-[#0066FF]/30 text-white focus:outline-none focus:border-[#00E64D] focus:ring-1 focus:ring-[#00E64D] transition-all" 
                />
              </div>

              <div>
                <label className="block text-sm text-[#B0B3B8] mb-1">Password</label>
                <input 
                  type="password"
                  value={password}
                  required
                  onChange={(e)=>setPassword(e.target.value)}
                  placeholder="Enter your password" 
                  className="w-full p-4 rounded-xl bg-[#0A1628] border border-[#0066FF]/30 text-white focus:outline-none focus:border-[#00E64D] focus:ring-1 focus:ring-[#00E64D] transition-all" 
                />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-4 rounded-xl bg-[#00E64D] text-[#0A0A0F] font-bold text-lg hover:shadow-[0_0_20px_rgba(0,230,77,0.5)] transition-all">
                  Sign In
                </button>
              </div>
            </div>
            
            <p className="text-[#B0B3B8] text-sm text-center mt-6">
              Don't have an account? <Link href="#" className="text-[#0066FF] hover:text-[#00E64D] transition-colors">Sign up here</Link>
            </p>
          </form>
        )}
      </div>
    </Layout>
  )
}
