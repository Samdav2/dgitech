import Layout from '../components/Layout'
import { useAuth } from '../shared/AuthContext'
import Link from 'next/link'

export default function TeacherDashboard() {
  const { user } = useAuth()
  
  if (!user || user.role !== 'Teacher') {
    return (
      <Layout>
         <div className="pt-32 pb-16 px-4 flex items-center justify-center min-h-[70vh]">
          <div className="glass-card p-10 text-center">
            <h2 className="text-xl text-white mb-2">Access Denied</h2>
            <p className="text-[#B0B3B8]">Teacher access required.</p>
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
              <h1 className="text-3xl font-poppins font-bold text-white mb-2">Teacher Hub</h1>
              <p className="text-[#B0B3B8]">Access professional development, track CEUs, and manage purchased resources.</p>
            </div>
            <div>
              <Link href="/lessons">
                <button className="px-6 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition-all">
                  Browse Marketplace
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6">
              <h2 className="text-lg font-poppins text-white mb-4">Professional Development</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-semibold text-white text-sm">CBC Implementation Strategies</div>
                    <span className="text-xs text-tp-gold">2 CEUs</span>
                  </div>
                  <div className="w-full bg-[rgba(255,255,255,0.1)] rounded-full h-1.5 mb-2">
                    <div className="bg-tp-gold h-1.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <div className="text-xs text-[#B0B3B8]">45% Completed</div>
                </div>
                <div className="p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-semibold text-white text-sm">Inclusive Classroom Management</div>
                    <span className="text-xs text-tp-green flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Completed
                    </span>
                  </div>
                  <div className="text-xs text-[#B0B3B8]">Certificate earned on Oct 12</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-lg font-poppins text-white mb-4">Purchased Resources</h2>
              <div className="space-y-3">
                {[
                  { title: 'Grade 5 Maths Term 1 Notes', author: 'Jane M.' },
                  { title: 'Interactive Science Quizzes', author: 'Peter K.' },
                  { title: 'Competency Based Assessments', author: 'TusomePlus Official' }
                ].map((r, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded hover:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer">
                    <div>
                      <div className="text-sm font-semibold text-white">{r.title}</div>
                      <div className="text-xs text-[#B0B3B8]">By {r.author}</div>
                    </div>
                    <svg className="w-4 h-4 text-tp-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-lg font-poppins text-white mb-4">Live Masterclasses</h2>
              <div className="p-4 border-l-4 border-tp-gold bg-[rgba(212,160,23,0.05)] rounded-r-lg mb-4">
                 <div className="font-semibold text-white text-sm mb-1">Integrating AI in High School Science</div>
                 <div className="text-xs text-[#B0B3B8]">Today, 6:00 PM • Hosted by Dr. Ouko</div>
                 <button className="mt-3 w-full py-1.5 bg-tp-gold text-black text-xs font-semibold rounded">Join Session</button>
              </div>
              <div className="text-center p-4">
                <Link href="/lessons">
                  <span className="text-sm text-tp-blue hover:underline cursor-pointer">View full calendar</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}