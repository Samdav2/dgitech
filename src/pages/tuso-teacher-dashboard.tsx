import Layout from '../components/Layout'
import { useAuth } from '../shared/AuthContext'
import Link from 'next/link'
import { useState } from 'react'

export default function TusoTeacherDashboard() {
  const { user } = useAuth()
  const [balance, setBalance] = useState(1250) // Mock balance
  
  if (!user || user.role !== 'TusoTeacher') {
    return (
      <Layout>
         <div className="pt-32 pb-16 px-4 flex items-center justify-center min-h-[70vh]">
          <div className="glass-card p-10 text-center">
            <h2 className="text-xl text-white mb-2">Access Denied</h2>
            <p className="text-[#B0B3B8]">TusoTeacher access required.</p>
          </div>
         </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-poppins font-bold text-white">My Dashboard</h1>
                <span className="bg-[rgba(0,230,77,0.1)] text-tp-green border border-tp-green/30 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Verified Educator
                </span>
              </div>
              <p className="text-[#B0B3B8]">Welcome back. Track your earnings, manage content, and host live classes.</p>
            </div>
            <div>
              <Link href="/assessments">
                <button className="px-6 py-2 bg-tp-green text-black font-semibold rounded-lg hover:shadow-[0_0_15px_rgba(0,230,77,0.4)] transition-all flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  Upload Content
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 md:col-span-2">
              <h2 className="text-lg font-poppins text-white mb-6">Earnings Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-lg">
                  <div className="text-sm text-[#B0B3B8]">Pending Balance</div>
                  <div className="text-3xl font-poppins text-tp-green mt-1 tracking-wider">KES {balance}</div>
                  <div className="text-xs text-[#B0B3B8] mt-2">from 55% revenue share</div>
                </div>
                <div className="p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-lg">
                  <div className="text-sm text-[#B0B3B8]">Lifetime Earnings</div>
                  <div className="text-3xl font-poppins text-white mt-1 tracking-wider">KES 14,500</div>
                  <div className="text-xs text-tp-blue mt-2 hover:underline cursor-pointer">View Payment History</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between p-4 bg-[#1A1A24] rounded-lg border border-[rgba(0,102,255,0.2)]">
                <div className="text-sm text-[#B0B3B8]">Withdrawal Threshold: KES 500</div>
                <button 
                  disabled={balance < 500} 
                  className={`px-6 py-2 rounded font-poppins font-semibold transition-all ${balance >= 500 ? 'bg-tp-blue text-white hover:shadow-[0_0_15px_rgba(0,102,255,0.4)]' : 'bg-[#333] text-[#666] cursor-not-allowed'}`}
                >
                  Withdraw via M-Pesa
                </button>
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-lg font-poppins text-white mb-4">Profile & Status</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-[#B0B3B8]">M-Pesa Number</div>
                  <div className="text-white flex items-center justify-between">
                    +254 712 345 678
                    <button className="text-xs text-tp-gold hover:underline">Edit</button>
                  </div>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.1)] pt-4">
                   <div className="text-sm text-[#B0B3B8] mb-2">Recent Application Notes</div>
                   <div className="bg-[rgba(0,230,77,0.05)] border-l-2 border-tp-green p-3 text-sm text-[#B0B3B8] italic">
                     "TSC verified. Welcome to the team! - Admin"
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6">
               <h2 className="text-lg font-poppins text-white mb-4">My Uploaded Content</h2>
               <div className="space-y-3">
                 {[
                   { title: 'Grade 5 Mathematics - Unit 2', type: 'Lesson Notes', status: 'Approved', color: 'text-tp-green', bg: 'bg-[rgba(0,230,77,0.1)] border-[rgba(0,230,77,0.2)]' },
                   { title: 'Grade 4 Science - Mid Term', type: 'Assessment', status: 'Pending', color: 'text-tp-gold', bg: 'bg-[rgba(212,160,23,0.1)] border-[rgba(212,160,23,0.2)]' },
                   { title: 'Grade 3 Swahili - Week 1', type: 'Quiz', status: 'Rejected', color: 'text-red-400', bg: 'bg-[rgba(255,0,0,0.1)] border-[rgba(255,0,0,0.2)]', note: 'Please review question 4 formatting.' },
                 ].map((c, i) => (
                   <div key={i} className="p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-semibold text-white">{c.title}</div>
                        <span className={`text-xs px-2 py-0.5 rounded border ${c.color} ${c.bg}`}>{c.status}</span>
                      </div>
                      <div className="text-xs text-[#B0B3B8]">{c.type}</div>
                      {c.note && <div className="mt-2 text-sm text-red-300 italic">Admin Note: {c.note}</div>}
                   </div>
                 ))}
               </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg font-poppins text-white">Live Classes</h2>
                 <button className="text-xs px-3 py-1 bg-tp-blue/20 text-tp-blue rounded hover:bg-tp-blue/40 transition-all">+ Schedule New</button>
              </div>
              <div className="space-y-3">
                 <div className="p-4 border-l-4 border-tp-blue bg-[rgba(0,102,255,0.05)] rounded-r-lg">
                   <div className="font-semibold text-white mb-1">Grade 6 Mathematics Revision</div>
                   <div className="text-sm text-[#B0B3B8]">Tomorrow, 4:00 PM - 5:00 PM • KES 100/session</div>
                 </div>
                 <div className="p-8 text-center border border-dashed border-[rgba(255,255,255,0.1)] rounded-lg">
                   <p className="text-sm text-[#B0B3B8]">No other scheduled classes</p>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}