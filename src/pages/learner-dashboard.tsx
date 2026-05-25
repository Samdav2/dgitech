import { useState } from 'react'
import Layout from '../components/Layout'

const MOCK_CERTIFICATES = [
  { id: 'CERT-001', type: 'Topic Mastery Certificate', title: 'Grade 5 Mathematics - Measurement', date: 'May 20, 2026', tier: 'mastery' },
  { id: 'CERT-002', type: 'Quiz Excellence Certificate', title: 'Science Quiz: Human Body (85%)', date: 'May 22, 2026', tier: 'excellence' },
  { id: 'CERT-003', type: 'Quiz Completion Certificate', title: 'Social Studies Quiz (65%)', date: 'May 24, 2026', tier: 'standard' },
]

export default function LearnerDashboard() {
  const [activeTab, setActiveTab] = useState('progress')
  const [selectedCert, setSelectedCert] = useState<any>(null)

  const triggerBot = (message: string, state: string) => {
    window.dispatchEvent(new CustomEvent('tusobot-message', {
      detail: { message, state, popOpen: true }
    }))
  }

  return (
    <Layout>
      <div className="min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-poppins font-bold text-white mb-2">My Learning Dashboard</h1>
              <p className="text-[#B0B3B8]">Track your progress, earn certificates, and master new topics!</p>
            </div>
          </div>

          <div className="flex gap-4 mb-6 border-b border-[rgba(255,255,255,0.1)]">
            <button 
              onClick={() => setActiveTab('progress')}
              className={`pb-3 px-4 font-poppins font-semibold transition-all ${activeTab === 'progress' ? 'text-tp-green border-b-2 border-tp-green' : 'text-[#B0B3B8] hover:text-white'}`}>
              Progress & Milestones
            </button>
            <button 
              onClick={() => setActiveTab('certificates')}
              className={`pb-3 px-4 font-poppins font-semibold transition-all ${activeTab === 'certificates' ? 'text-tp-gold border-b-2 border-tp-gold' : 'text-[#B0B3B8] hover:text-white'}`}>
              My Certificates
              <span className="ml-2 px-2 py-0.5 bg-[rgba(212,160,23,0.1)] text-tp-gold rounded-full text-xs border border-[rgba(212,160,23,0.3)]">3</span>
            </button>
          </div>

          {activeTab === 'progress' && (
            <div className="space-y-6 animate-[fadeIn_0.4s_ease-out]">
              <h2 className="text-xl font-poppins font-semibold text-white mb-4">Simulate TusoBot Nudges</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div onClick={() => triggerBot('Welcome to TusomePlus! Let us start your journey!', 'celebrating')} className="glass-card p-6 cursor-pointer hover:border-tp-green hover:shadow-[0_0_15px_rgba(0,230,77,0.2)] transition-all">
                  <h3 className="font-bold text-white">First Login</h3>
                  <p className="text-sm text-[#B0B3B8] mt-1">Triggers onboarding welcome</p>
                </div>
                <div onClick={() => triggerBot('You just finished your first lesson — that took courage!', 'celebrating')} className="glass-card p-6 cursor-pointer hover:border-tp-green hover:shadow-[0_0_15px_rgba(0,230,77,0.2)] transition-all">
                  <h3 className="font-bold text-white">First Lesson</h3>
                  <p className="text-sm text-[#B0B3B8] mt-1">Triggers lesson completion</p>
                </div>
                <div onClick={() => triggerBot('Incredible work! You are really mastering this topic!', 'celebrating')} className="glass-card p-6 cursor-pointer hover:border-tp-green hover:shadow-[0_0_15px_rgba(0,230,77,0.2)] transition-all">
                  <h3 className="font-bold text-white">Quiz Score {'>'} 80%</h3>
                  <p className="text-sm text-[#B0B3B8] mt-1">Triggers high score praise</p>
                </div>
                <div onClick={() => triggerBot('You went from 60% to 75% — that improvement is everything!', 'celebrating')} className="glass-card p-6 cursor-pointer hover:border-tp-green hover:shadow-[0_0_15px_rgba(0,230,77,0.2)] transition-all">
                  <h3 className="font-bold text-tp-blue">Retake Improvement</h3>
                  <p className="text-sm text-[#B0B3B8] mt-1">Focuses on effort over score</p>
                </div>
                <div onClick={() => triggerBot('Topic complete! You have unlocked the next level!', 'celebrating')} className="glass-card p-6 cursor-pointer hover:border-tp-gold hover:shadow-[0_0_15px_rgba(212,160,23,0.2)] transition-all">
                  <h3 className="font-bold text-tp-gold">Topic Mastered</h3>
                  <p className="text-sm text-[#B0B3B8] mt-1">Unlocks next module</p>
                </div>
                <div onClick={() => triggerBot('5-day streak! Consistency is your superpower!', 'celebrating')} className="glass-card p-6 cursor-pointer hover:border-tp-green hover:shadow-[0_0_15px_rgba(0,230,77,0.2)] transition-all">
                  <h3 className="font-bold text-tp-green">5-Day Streak</h3>
                  <p className="text-sm text-[#B0B3B8] mt-1">Rewards daily logins</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="space-y-6 animate-[fadeIn_0.4s_ease-out]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MOCK_CERTIFICATES.map(cert => (
                  <div key={cert.id} onClick={() => setSelectedCert(cert)} className={`cursor-pointer overflow-hidden rounded-xl border-2 transition-all hover:scale-105 shadow-xl ${
                    cert.tier === 'standard' ? 'bg-[#00E64D]/10 border-[#00E64D]/50 hover:shadow-[0_0_20px_rgba(0,230,77,0.3)]' :
                    cert.tier === 'excellence' ? 'bg-[#D4A017]/10 border-[#D4A017] hover:shadow-[0_0_20px_rgba(212,160,23,0.3)]' :
                    'bg-[#061830] border-[#D4A017] hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]'
                  }`}>
                    <div className="p-6 text-center space-y-3 relative">
                      <div className="font-poppins font-bold text-sm tracking-widest text-[#B0B3B8]">{cert.type.toUpperCase()}</div>
                      <div className={`text-xl font-bold font-poppins ${cert.tier === 'standard' ? 'text-white' : 'text-tp-gold'}`}>{cert.title}</div>
                      <div className="text-sm text-[#B0B3B8]">{cert.date}</div>
                      
                      {/* Mini TusoBot Seal */}
                      <div className="absolute top-2 right-2 w-8 h-8 rounded-full border border-[rgba(255,255,255,0.2)] bg-[#0A0A0F] flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-5 h-5">
                           <circle cx="50" cy="50" r="45" fill="#0A0A0F" />
                           <path d="M 30,20 Q 30,0 40,30" stroke="#00E64D" strokeWidth="6" fill="none" />
                           <path d="M 70,20 Q 70,0 60,30" stroke="#00E64D" strokeWidth="6" fill="none" />
                           <circle cx="38" cy="60" r="4" fill="#00E64D" />
                           <circle cx="62" cy="60" r="4" fill="#00E64D" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificate Modal */}
          {selectedCert && (
            <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden animate-[slideUp_0.3s_ease-out]">
                <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                
                {/* Certificate Rendering Box (A4 Ratio Sim Approx) */}
                <div className={`w-full aspect-[1.414/1] max-h-[85vh] overflow-y-auto p-10 md:p-16 flex flex-col items-center justify-center text-center relative border-[16px] ${
                  selectedCert.tier === 'standard' ? 'bg-white border-[#00E64D]' :
                  selectedCert.tier === 'excellence' ? 'bg-[#fffdf7] border-[#D4A017]' :
                  'bg-[#061830] border-[#D4A017]'
                }`}>
                  
                  {/* Watermark / Background Vector */}
                  <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
                     <svg viewBox="0 0 100 100" className="w-[50%] h-[50%]">
                       <circle cx="50" cy="50" r="45" fill="black" />
                     </svg>
                  </div>

                  <h2 className={`text-4xl md:text-5xl font-poppins font-bold mb-8 ${selectedCert.tier === 'mastery' ? 'text-white' : 'text-black'}`}>
                    Tusome<span className={selectedCert.tier === 'mastery' ? 'text-[#00E64D]' : 'text-[#00E64D]'}>Plus</span>
                  </h2>

                  <div className={`text-xl md:text-2xl font-inter tracking-[0.2em] uppercase mb-4 ${selectedCert.tier === 'mastery' ? 'text-tp-gold' : 'text-[#666]'}`}>
                    {selectedCert.type}
                  </div>

                  <p className={`text-lg italic mb-6 ${selectedCert.tier === 'mastery' ? 'text-[#B0B3B8]' : 'text-[#666]'}`}>This certifies that</p>
                  
                  <h1 className={`text-5xl md:text-6xl font-poppins font-bold border-b pb-4 px-12 mb-6 inline-block mx-auto ${selectedCert.tier === 'mastery' ? 'text-tp-gold border-tp-gold/30' : 'text-black border-black/10'}`}>
                    Student Name
                  </h1>

                  <p className={`text-xl max-w-2xl mx-auto ${selectedCert.tier === 'mastery' ? 'text-white' : 'text-black'}`}>
                    has successfully achieved the required standard in <br/>
                    <strong className="mt-2 block text-2xl">{selectedCert.title}</strong>
                  </p>

                  <div className="mt-auto w-full flex justify-between items-end pt-12">
                    <div className="text-left">
                      <div className={`font-bold font-poppins ${selectedCert.tier === 'mastery' ? 'text-white' : 'text-black'}`}>Date of Completion</div>
                      <div className={`${selectedCert.tier === 'mastery' ? 'text-[#B0B3B8]' : 'text-[#666]'}`}>{selectedCert.date}</div>
                    </div>
                    
                    {/* Fake QR & ID */}
                    <div className={`text-center text-xs font-mono mb-4 ${selectedCert.tier === 'mastery' ? 'text-white/50' : 'text-black/50'}`}>
                      <div className="w-16 h-16 mx-auto mb-2 border border-current p-1 flex flex-wrap gap-0.5 opacity-80">
                        {/* Mock QR dots */}
                        {Array.from({length: 36}).map((_, i) => <div key={i} className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-current' : 'bg-transparent'}`}></div>)}
                      </div>
                      ID: {selectedCert.id}
                    </div>

                    <div className="text-right flex flex-col items-center">
                      <div className="w-40 border-b-2 border-current mb-2 opacity-30"></div>
                      <div className={`font-bold font-poppins ${selectedCert.tier === 'mastery' ? 'text-tp-gold' : 'text-black'}`}>TusomePlus Admin</div>
                      
                      {/* TusoBot Celebrating Graphic on Certificate */}
                      <div className="absolute bottom-16 right-16 w-20 h-20 bg-[#00E64D] rounded-full flex items-center justify-center p-2 shadow-2xl border-4 border-white transform rotate-12 hover:rotate-0 transition-transform">
                        <svg viewBox="0 0 100 100" className="w-14 h-14">
                           <circle cx="50" cy="50" r="45" fill="black" />
                           <path d="M 30,20 Q 30,0 40,30" stroke="#00E64D" strokeWidth="6" fill="none" />
                           <path d="M 70,20 Q 70,0 60,30" stroke="#00E64D" strokeWidth="6" fill="none" />
                           <circle cx="35" cy="50" r="5" fill="#00E64D" />
                           <circle cx="65" cy="50" r="5" fill="#00E64D" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
                
                {/* Actions */}
                <div className="bg-[#f0f0f0] p-4 flex justify-between items-center border-t border-black/10 text-black">
                  <div className="flex items-center gap-2 text-sm text-[#666]">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>Authenticity Verified</span>
                    <span className="px-2">•</span>
                    <span>A4 Print Ready</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded font-poppins font-semibold hover:bg-[#128C7E] transition-all">
                      Share to WhatsApp
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded font-poppins font-semibold hover:bg-black/80 transition-all">
                      Download PDF
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </div>
    </Layout>
  )
}