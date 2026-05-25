import Layout from '../components/Layout'
import { useAuth } from '../shared/AuthContext'
import Link from 'next/link'

export default function ParentDashboard() {
  const { user } = useAuth()
  
  if (!user || user.role !== 'Parent') {
    return (
      <Layout>
         <div className="pt-32 pb-16 px-4 flex items-center justify-center min-h-[70vh]">
          <div className="glass-card p-10 text-center">
            <h2 className="text-xl text-white mb-2">Access Denied</h2>
            <p className="text-[#B0B3B8]">Parent access required.</p>
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
              <h1 className="text-3xl font-poppins font-bold text-white mb-2">Parent Portal</h1>
              <p className="text-[#B0B3B8]">Monitor progress, manage subscriptions, and support your learners.</p>
            </div>
            <div>
              <span className="px-3 py-1 bg-[rgba(212,160,23,0.1)] text-tp-gold text-xs rounded-full border border-tp-gold/30">
                Premium Family Plan
              </span>
            </div>
          </div>

          <h2 className="text-xl font-poppins text-white border-b border-[rgba(255,255,255,0.1)] pb-2">My Learners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Learner 1 */}
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24 text-tp-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-tp-blue/20 rounded-full flex items-center justify-center text-xl font-bold text-tp-blue">A</div>
                  <div>
                    <h3 className="font-semibold text-white">Amani</h3>
                    <div className="text-xs text-[#B0B3B8]">Grade 6</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span>Weekly Goal</span><span className="text-tp-green">80%</span></div>
                    <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-1.5"><div className="bg-tp-green h-1.5 rounded-full" style={{ width: '80%' }}></div></div>
                  </div>
                  <div className="p-3 bg-[rgba(0,230,77,0.05)] border-l-2 border-tp-green rounded-r text-sm">
                    <span className="text-tp-green font-semibold block mb-1">Recent Milestone:</span>
                    Mastered "Fractions & Decimals". <span className="text-white hover:underline cursor-pointer text-xs ml-1">View Certificate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Learner 2 */}
            <div className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24 text-tp-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-tp-gold/20 rounded-full flex items-center justify-center text-xl font-bold text-tp-gold">K</div>
                  <div>
                    <h3 className="font-semibold text-white">Kiptoo</h3>
                    <div className="text-xs text-[#B0B3B8]">Grade 3</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span>Weekly Goal</span><span className="text-tp-gold">45%</span></div>
                    <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-1.5"><div className="bg-tp-gold h-1.5 rounded-full" style={{ width: '45%' }}></div></div>
                  </div>
                  <div className="p-3 bg-[rgba(212,160,23,0.05)] border-l-2 border-tp-gold rounded-r text-sm">
                    <span className="text-tp-gold font-semibold block mb-1">Action Required:</span>
                    Struggling with Swahili comprehension. <Link href="/assessments"><span className="text-white hover:underline cursor-pointer text-xs ml-1">Assign Practice</span></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Add Learner */}
            <div className="glass-card p-6 flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity border-dashed border-2 border-[rgba(255,255,255,0.1)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#B0B3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </div>
              <div className="font-semibold text-white">Add Learner Profile</div>
              <div className="text-xs text-[#B0B3B8] mt-1">1 slot available on current plan</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-[rgba(255,255,255,0.1)]">
            <div className="glass-card p-6">
              <h2 className="text-lg font-poppins text-white mb-4">Subscription Billing</h2>
              <div className="mb-4">
                <div className="text-3xl font-poppins text-white">KES 1,500 <span className="text-sm text-[#B0B3B8] font-normal">/ term</span></div>
                <div className="text-sm text-[#B0B3B8] mt-1">Next billing date: 15 Jan 2024</div>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-tp-blue text-white rounded text-sm font-semibold hover:bg-opacity-80 transition-all">Manage Plan</button>
                <button className="px-4 py-2 bg-[rgba(255,255,255,0.05)] text-white border border-[rgba(255,255,255,0.1)] rounded text-sm hover:bg-[rgba(255,255,255,0.1)] transition-all">Payment History</button>
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-lg font-poppins text-white mb-4">Messages from TusoBot</h2>
              <div className="space-y-3">
                <div className="p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-lg flex gap-3">
                  <div className="mt-1"><span className="text-xl">🤖</span></div>
                  <div>
                    <div className="text-sm font-semibold text-white">Great news!</div>
                    <div className="text-xs text-[#B0B3B8]">Amani reached a 7-day streak today! Let's celebrate. 🎉</div>
                    <div className="text-xs text-[#B0B3B8] mt-1 opacity-50">2 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}