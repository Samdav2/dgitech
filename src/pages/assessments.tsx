import React, { useState } from 'react'
import Layout from '../components/Layout'
import SubscriptionGuard from '../shared/SubscriptionGuard'
import { useAuth } from '../shared/AuthContext'
import clsx from 'clsx'

const ASSESSMENT_TYPES = [
  'Weekly Assessment',
  'Monthly Assessment',
  'Start of Term Assessment',
  'Mid-Term Assessment',
  'End of Term Assessment'
]

export default function Assessments(){
  const { user } = useAuth()
  
  const [grade, setGrade] = useState('Grade 5')
  const [subject, setSubject] = useState('Mathematics')
  const [type, setType] = useState('Weekly Assessment')

  if (!user) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-16 px-6 text-center text-[#B0B3B8]">
          <p>Loading user profile...</p>
        </div>
      </Layout>
    )
  }

  // TusoTeacher Upload Dashboard View
  if (user.role === 'TusoTeacher') {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-poppins font-bold text-white">TusoTeacher Dashboard</h2>
              <p className="text-[#00E64D] font-inter mt-1">Dedicated ASSESSMENTS Portal</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Form */}
            <div className="lg:col-span-2 glass-card p-8 border-t-4 border-t-[#0066FF]">
              <h3 className="text-xl font-poppins font-bold text-white mb-6">Upload New Assessment</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#B0B3B8] mb-1">Grade</label>
                    <select value={grade} onChange={e=>setGrade(e.target.value)} className="w-full p-3 rounded-lg bg-[#0A1628] border border-[#0066FF]/30 text-white focus:outline-none focus:border-[#00E64D]">
                      <option>Grade 4</option>
                      <option>Grade 5</option>
                      <option>Grade 6</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#B0B3B8] mb-1">Learning Area</label>
                    <select value={subject} onChange={e=>setSubject(e.target.value)} className="w-full p-3 rounded-lg bg-[#0A1628] border border-[#0066FF]/30 text-white focus:outline-none focus:border-[#00E64D]">
                      <option>Mathematics</option>
                      <option>English</option>
                      <option>Integrated Science</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#B0B3B8] mb-1">Assessment Type</label>
                  <select value={type} onChange={e=>setType(e.target.value)} className="w-full p-3 rounded-lg bg-[#0A1628] border border-[#0066FF]/30 text-white focus:outline-none focus:border-[#00E64D]">
                    {ASSESSMENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#B0B3B8] mb-1">Upload File (PDF/Word)</label>
                  <div className="w-full border-2 border-dashed border-[#0066FF]/30 rounded-lg p-8 text-center bg-[#0A1628]/50 hover:bg-[#0A1628] transition-colors cursor-pointer">
                    <span className="text-3xl mb-2 block">📄</span>
                    <p className="text-[#B0B3B8] font-inter text-sm">Drag and drop file here, or click to browse</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-[rgba(0,102,255,0.2)]">
                  <button type="button" onClick={() => alert('Assessment saved as Draft.')} className="px-6 py-3 rounded-lg border border-[#0066FF] text-white hover:bg-[#0066FF] transition-colors">
                    Save as Draft
                  </button>
                  <button type="submit" onClick={(e) => { e.preventDefault(); alert('Assessment submitted for Admin review.'); }} className="px-6 py-3 rounded-lg bg-[#00E64D] text-[#0A0A0F] font-bold shadow-[0_0_15px_rgba(0,230,77,0.3)] hover:scale-105 transition-transform">
                    Submit for Review
                  </button>
                </div>
              </form>
              <p className="text-xs text-[#B0B3B8] mt-4 flex items-center gap-2">
                <span className="text-[#D4A017]">⚠️</span> No assessment content goes live without Admin approval.
              </p>
            </div>

            {/* Status Tracking */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-poppins font-bold text-white mb-4">My Assessments</h3>
                <div className="space-y-4">
                  
                  <div className="p-3 bg-[#0A1628] rounded-lg border border-[#00E64D]/30 border-l-4 border-l-[#00E64D]">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-semibold text-white">Grade 5 Maths</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#00E64D]/20 text-[#00E64D]">APPROVED</span>
                    </div>
                    <p className="text-[#B0B3B8] text-xs">Mid-Term Assessment</p>
                  </div>
                  
                  <div className="p-3 bg-[#0A1628] rounded-lg border border-[#D4A017]/30 border-l-4 border-l-[#D4A017]">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-semibold text-white">Grade 6 Science</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4A017]/20 text-[#D4A017]">UNDER REVIEW</span>
                    </div>
                    <p className="text-[#B0B3B8] text-xs">End of Term Assessment</p>
                  </div>
                  
                  <div className="p-3 bg-[#0A1628] rounded-lg border border-[#B0B3B8]/30 border-l-4 border-l-[#B0B3B8]">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-semibold text-white">Grade 4 English</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#B0B3B8]/20 text-[#B0B3B8]">DRAFT</span>
                    </div>
                    <p className="text-[#B0B3B8] text-xs">Weekly Assessment</p>
                  </div>
                  
                </div>
              </div>

              <div className="glass-card p-6 border border-[#D4A017]/20 bg-[rgba(212,160,23,0.02)]">
                <h3 className="text-sm font-poppins font-bold text-[#D4A017] mb-2">Earnings Note</h3>
                <p className="text-xs text-[#B0B3B8]">
                  Earnings from ASSESSMENTS content follow the same 55% / 45% revenue split as all other TusoTeacher content. Track all earnings in your main dashboard.
                </p>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    )
  }

  // Learner, Parent, Teacher View
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-12 px-6">
        <SubscriptionGuard requireAssessments>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-4">Premium <span className="text-[#0066FF]">Assessments</span></h2>
            <p className="text-[#B0B3B8] font-inter">
              You have access to the complete premium assessment library. Select an assessment category to begin evaluating progress across PP1 to Grade 9.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ASSESSMENT_TYPES.map((type, idx) => (
              <div key={idx} className="glass-card p-6 hover:shadow-[0_0_20px_rgba(0,102,255,0.2)] hover:border-[#0066FF]/50 transition-all group flex flex-col items-center text-center cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-[#0A1628] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(0,102,255,0.1)]">
                  {idx === 0 ? '📅' : idx === 1 ? '📆' : idx === 2 ? '🏁' : idx === 3 ? '⚖️' : '🏆'}
                </div>
                <h3 className="text-lg font-poppins font-semibold text-white mb-2">{type}</h3>
                <p className="text-xs text-[#B0B3B8] flex-1 mb-4">Regular evaluation material submitted by verified CBC educators.</p>
                <button className="w-full py-2.5 rounded-lg border border-[#00E64D] text-[#00E64D] text-sm font-bold group-hover:bg-[#00E64D] group-hover:text-[#0A0A0F] transition-colors">
                  View Assessments
                </button>
              </div>
            ))}
          </div>
        </SubscriptionGuard>
      </div>
    </Layout>
  )
}
