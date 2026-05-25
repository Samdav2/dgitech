import Layout from '../components/Layout'
import { useAuth } from '../shared/AuthContext'
import { useEffect, useState } from 'react'
import { FREE_TRIAL_ENABLED_KEY, FREE_TRIAL_KEY, CONTACT_SUBMISSIONS_KEY } from '../shared/config'

const MOCK_APPLICATIONS = [
  { id: 'APP1', name: 'James Kariuki', tsc: '456789', edu: 'Bachelor Degree', role: 'Upper Primary Math', status: 'PENDING' },
  { id: 'APP2', name: 'Sarah Wanjiku', tsc: '987654', edu: 'Diploma', role: 'Junior Secondary English', status: 'PENDING' },
]

const MOCK_CONTENT = [
  { id: 'C1', author: 'Mark T.', title: 'Grade 4 Math - Mid Term', type: 'Assessment', uploaded: '2 hrs ago', status: 'PENDING' },
  { id: 'C2', author: 'Jane K.', title: 'Grade 3 Integrated Science', type: 'Lesson', uploaded: '1 day ago', status: 'PUBLISHED' },
]

const MOCK_USERS = [
  { id: 'U1', name: 'Mark T.', role: 'TusoTeacher', status: 'ACTIVE' },
  { id: 'U2', name: 'Jane K.', role: 'TusoTeacher', status: 'ACTIVE' },
  { id: 'U3', name: 'Student 1', role: 'Learner', status: 'ACTIVE' },
  { id: 'U4', name: 'Bad Actor', role: 'TusoTeacher', status: 'SUSPENDED' },
]

export default function AdminControl(){
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('apps')

  const [apps, setApps] = useState(MOCK_APPLICATIONS)
  const [content, setContent] = useState(MOCK_CONTENT)
  const [users, setUsers] = useState(MOCK_USERS)

  // Legacy Settings States
  const [enabled,setEnabled] = useState(true)
  const [trialCount,setTrialCount] = useState(0)
  const [contacts,setContacts] = useState<any[]>([])

  useEffect(()=>{
    const e = localStorage.getItem(FREE_TRIAL_ENABLED_KEY)
    setEnabled(e !== 'false')
    const c = Number(localStorage.getItem(`${FREE_TRIAL_KEY}::count`) || '0')
    setTrialCount(c)
    const subs = JSON.parse(localStorage.getItem(CONTACT_SUBMISSIONS_KEY) || '[]')
    setContacts(subs)
  }, [])

  if (!user || user.role !== 'Admin') return (
    <Layout>
      <div className="pt-32 pb-16 px-4 flex items-center justify-center min-h-[70vh]">
        <div className="glass-card p-10 max-w-lg text-center border-red-500/30">
          <div className="w-16 h-16 bg-[rgba(255,0,0,0.1)] rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <h2 className="text-2xl font-poppins text-white mb-2">Access Denied</h2>
          <p className="text-[#B0B3B8]">Super Admin role is required to view the management console.</p>
        </div>
      </div>
    </Layout>
  )

  const toggle = ()=>{
    const next = !enabled
    localStorage.setItem(FREE_TRIAL_ENABLED_KEY, String(next))
    setEnabled(next)
  }

  const handleApproveApp = (id: string, action: 'Approve' | 'Reject') => {
    setApps(apps.filter(app => app.id !== id))
  }

  const handleAction = (type: string, id: string, action: string) => {
    if (type === 'content') {
      setContent(content.map(c => c.id === id ? { ...c, status: action } : c))
    }
  }

  return (
    <Layout>
      <div className="min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-poppins font-bold text-white mb-2">Admin Control Center</h1>
              <p className="text-[#B0B3B8]">Manage TusoTeachers, review submitted content, and enforce platform rules.</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => alert('Invite link copied: https://tusomeplus.com/teacher-onboarding')} className="px-6 py-2 bg-[rgba(0,102,255,0.1)] border border-[rgba(0,102,255,0.3)] text-tp-blue rounded-lg hover:bg-[rgba(0,102,255,0.2)] transition-all shadow-[0_0_15px_rgba(0,102,255,0.1)]">
                + Generate Invite Link
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-64 shrink-0">
              <div className="glass-card p-4 space-y-2 lg:sticky lg:top-28">
                <button 
                  onClick={() => setActiveTab('apps')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all font-poppins ${activeTab === 'apps' ? 'bg-[rgba(0,102,255,0.15)] text-white border border-[rgba(0,102,255,0.3)]' : 'text-[#B0B3B8] hover:bg-[rgba(255,255,255,0.05)]'}`}>
                  Teacher Apps
                  {apps.length > 0 && <span className="float-right bg-tp-blue text-white text-xs px-2 py-1 rounded-full mt-0.5">{apps.length}</span>}
                </button>
                <button 
                  onClick={() => setActiveTab('content')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all font-poppins ${activeTab === 'content' ? 'bg-[rgba(0,102,255,0.15)] text-white border border-[rgba(0,102,255,0.3)]' : 'text-[#B0B3B8] hover:bg-[rgba(255,255,255,0.05)]'}`}>
                  Content Review
                  {content.filter(c => c.status === 'PENDING').length > 0 && <span className="float-right bg-tp-gold text-black text-xs px-2 py-1 rounded-full mt-0.5">{content.filter(c => c.status === 'PENDING').length}</span>}
                </button>
                <button 
                  onClick={() => setActiveTab('users')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all font-poppins ${activeTab === 'users' ? 'bg-[rgba(0,102,255,0.15)] text-white border border-[rgba(0,102,255,0.3)]' : 'text-[#B0B3B8] hover:bg-[rgba(255,255,255,0.05)]'}`}>
                  User Management
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all font-poppins ${activeTab === 'settings' ? 'bg-[rgba(0,102,255,0.15)] text-white border border-[rgba(0,102,255,0.3)]' : 'text-[#B0B3B8] hover:bg-[rgba(255,255,255,0.05)]'}`}>
                  Platform Settings
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              
              {/* TEACHER APPS */}
              {activeTab === 'apps' && (
                <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
                  <h2 className="text-xl font-poppins font-semibold text-white mb-4">Pending TusoTeacher Applications</h2>
                  {apps.length === 0 ? (
                    <div className="glass-card p-8 text-center text-[#B0B3B8]">No pending applications.</div>
                  ) : apps.map(app => (
                    <div key={app.id} className="glass-card p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-l-4 border-l-tp-gold">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-white">{app.name}</h3>
                          <span className="bg-[rgba(212,160,23,0.1)] text-tp-gold border border-[rgba(212,160,23,0.3)] text-xs px-2 py-0.5 rounded-full">TSC: {app.tsc}</span>
                        </div>
                        <p className="text-[#B0B3B8] text-sm">{app.edu} • {app.role}</p>
                        <p className="text-xs text-tp-blue mt-2 flex items-center gap-1 cursor-pointer hover:underline">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          View ID & Full Profile
                        </p>
                      </div>
                      <div className="flex gap-2 w-full md:w-auto">
                        <button onClick={() => handleApproveApp(app.id, 'Approve')} className="flex-1 md:flex-none px-4 py-2 bg-[rgba(0,230,77,0.1)] border border-tp-green text-tp-green rounded hover:bg-[rgba(0,230,77,0.2)] transition-all">Approve</button>
                        <button onClick={() => handleApproveApp(app.id, 'Reject')} className="flex-1 md:flex-none px-4 py-2 bg-[rgba(255,0,0,0.1)] border border-red-500 text-red-400 rounded hover:bg-[rgba(255,0,0,0.2)] transition-all">Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CONTENT REVIEW */}
              {activeTab === 'content' && (
                <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
                  <h2 className="text-xl font-poppins font-semibold text-white mb-4">Content Awaiting Moderation</h2>
                  {content.map(c => (
                    <div key={c.id} className={`glass-card p-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-l-4 ${c.status === 'PENDING' ? 'border-l-tp-gold' : c.status === 'PUBLISHED' ? 'border-l-tp-green' : 'border-l-red-500'}`}>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-white">{c.title}</h3>
                          <span className={`border text-xs px-2 py-0.5 rounded-full ${c.status === 'PENDING' ? 'bg-[rgba(212,160,23,0.1)] text-tp-gold border-[rgba(212,160,23,0.3)]' : c.status === 'PUBLISHED' ? 'bg-[rgba(0,230,77,0.1)] text-tp-green border-[rgba(0,230,77,0.3)]' : 'bg-[rgba(255,0,0,0.1)] text-red-400 border-[rgba(255,0,0,0.3)]'}`}>
                            {c.status}
                          </span>
                        </div>
                        <p className="text-[#B0B3B8] text-sm">By {c.author} • {c.type} • Uploaded {c.uploaded}</p>
                      </div>
                      <div className="flex gap-2 w-full md:w-auto">
                        <button className="px-4 py-2 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white rounded hover:bg-[rgba(255,255,255,0.1)] transition-all">Preview</button>
                        {c.status === 'PENDING' && (
                          <>
                            <button onClick={() => handleAction('content', c.id, 'PUBLISHED')} className="px-4 py-2 bg-[rgba(0,230,77,0.1)] border border-tp-green text-tp-green rounded hover:bg-[rgba(0,230,77,0.2)] transition-all">Publish</button>
                            <button onClick={() => handleAction('content', c.id, 'REJECTED')} className="px-4 py-2 bg-[rgba(255,0,0,0.1)] border border-red-500 text-red-400 rounded hover:bg-[rgba(255,0,0,0.2)] transition-all">Reject</button>
                          </>
                        )}
                        {c.status === 'PUBLISHED' && (
                           <button onClick={() => handleAction('content', c.id, 'PENDING')} className="px-4 py-2 bg-[rgba(255,0,0,0.1)] border border-red-500 text-red-400 rounded hover:bg-[rgba(255,0,0,0.2)] transition-all">Unpublish</button>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 p-4 bg-[rgba(255,0,0,0.05)] border border-[rgba(255,0,0,0.2)] rounded-lg flex gap-3 text-red-300 text-sm">
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>IMPORTANT: No content should be published automatically. No content deletion without Admin approval. Teachers cannot delete content themselves.</span>
                  </div>
                </div>
              )}

              {/* USER MANAGEMENT */}
              {activeTab === 'users' && (
                <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
                  <h2 className="text-xl font-poppins font-semibold text-white mb-4">User Roles & Permissions</h2>
                  <div className="glass-card overflow-hidden">
                    <table className="w-full text-left text-sm text-[#B0B3B8]">
                      <thead className="bg-[#0A111A] border-b border-[rgba(255,255,255,0.05)]">
                        <tr>
                          <th className="p-4 font-semibold text-white">User</th>
                          <th className="p-4 font-semibold text-white">Role</th>
                          <th className="p-4 font-semibold text-white">Status</th>
                          <th className="p-4 font-semibold text-white text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
                        {users.map(u => (
                          <tr key={u.id} className="hover:bg-[rgba(255,255,255,0.02)] transition-all">
                            <td className="p-4 font-medium text-white">{u.name}</td>
                            <td className="p-4">
                              <span className="bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded text-xs">{u.role}</span>
                            </td>
                            <td className="p-4">
                              <span className={`flex items-center gap-1.5 ${u.status === 'SUSPENDED' ? 'text-red-400' : 'text-tp-green'}`}>
                                <span className={`w-2 h-2 rounded-full ${u.status === 'SUSPENDED' ? 'bg-red-400' : 'bg-tp-green'}`}></span>
                                {u.status}
                              </span>
                            </td>
                            <td className="p-4 text-right space-x-3">
                              {u.status === 'ACTIVE' && u.role === 'TusoTeacher' ? (
                                <button className="text-red-400 hover:underline">Suspend</button>
                              ) : u.status === 'SUSPENDED' ? (
                                <button className="text-tp-green hover:underline">Restore</button>
                              ) : (
                                <span className="text-[rgba(255,255,255,0.2)]">N/A</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* SETTINGS */}
              {activeTab === 'settings' && (
                <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
                  <h2 className="text-xl font-poppins font-semibold text-white mb-4">Platform Settings</h2>
                  <div className="glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-[#B0B3B8]">Free Daily Assessment Trial</div>
                      <div className="font-semibold text-white font-poppins mt-1">Status: {enabled ? <span className="text-tp-green">Active</span> : <span className="text-red-400">Disabled</span>}</div>
                    </div>
                    <div>
                      <button onClick={toggle} className="px-4 py-2 rounded-lg bg-[rgba(0,102,255,0.1)] border border-[rgba(0,102,255,0.3)] text-tp-blue hover:bg-[rgba(0,102,255,0.2)] transition-all">Toggle Trial</button>
                    </div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-sm text-[#B0B3B8]">Free Trial Attempts Today</div>
                    <div className="text-3xl font-poppins text-white mt-2">{trialCount}</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-sm text-white font-poppins mb-4">Contact Submissions</div>
                    <div>
                      {contacts.length === 0 ? <div className="text-sm text-[#B0B3B8]">No submissions yet</div> : (
                        <ul className="space-y-3">
                          {contacts.map((c, i)=> (
                            <li key={i} className="p-4 bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.05)] rounded-lg">
                              <div className="font-semibold text-tp-blue flex justify-between">
                                <span>{c.subject}</span>
                                <span className="text-[#B0B3B8] text-xs font-normal">Contact Form</span>
                              </div>
                              <div className="text-sm text-white mt-1">{c.name} ({c.email})</div>
                              <div className="text-sm text-[#B0B3B8] mt-2 italic">"{c.message}"</div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}