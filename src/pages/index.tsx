import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FreeTrialPopup from '../components/FreeTrialPopup'
import WhatsAppButton from '../components/WhatsAppButton'
import Link from 'next/link'

export default function Home(){
  return (
    <Layout>
      <Hero />
      <FreeTrialPopup />

      {/* 3.2 Features Section */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto border-t-[1px] border-[rgba(0,102,255,0.2)]">
        <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-center mb-12 text-white">Platform <span className="text-[#00E64D]">Features</span></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Lesson Notes', icon: '📝', desc: 'Comprehensive, CBC-aligned notes' },
            { title: 'Quizzes', icon: '❓', desc: 'Interactive topic quizzes' },
            { title: 'Assessments', icon: '📊', desc: 'Termly premium evaluations' },
            { title: 'Live Classes', icon: '🎥', desc: 'Learn directly from experts' }
          ].map((feat, i) => (
            <div key={i} className="glass-card p-8 flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-full bg-[#0A1628] flex items-center justify-center text-3xl mb-6 shadow-[0_0_15px_rgba(0,102,255,0.2)] group-hover:shadow-[0_0_20px_rgba(0,230,77,0.4)] transition-all">
                {feat.icon}
              </div>
              <h4 className="text-xl font-poppins font-semibold text-white mb-2">{feat.title}</h4>
              <p className="text-[#B0B3B8] font-inter text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3.3 Learning Flow Section */}
      <section className="py-20 bg-[#0A1628] px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-center mb-16 text-white">Structured <span className="text-[#0066FF]">Learning Path</span></h3>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
            {['Grade', 'Learning Area', 'Strand/Substrand', 'Quiz', 'Assessment'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="glass-card px-6 py-4 flex-1 text-center w-full lg:w-auto relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/0 to-[#00E64D]/0 group-hover:from-[#0066FF]/10 group-hover:to-[#00E64D]/10 rounded-2xl transition-colors"></div>
                  <span className="font-poppins font-medium text-white relative z-10">{step}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="text-[#00E64D] text-2xl rotate-90 lg:rotate-0">➔</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3.4 Role Preview Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-center mb-12 text-white">Choose Your <span className="text-[#00E64D]">Path</span></h3>
        <div className="flex flex-wrap justify-center gap-6">
          {['Admin', 'TusoTeacher', 'Teacher', 'Learner', 'Parent'].map((role) => (
            <Link key={role} href={`/login?role=${role.toLowerCase()}`} className="glass-card px-8 py-6 w-48 text-center hover:border-[#00E64D] hover:shadow-[0_0_20px_rgba(0,230,77,0.3)] transition-all">
              <h4 className="text-lg font-poppins font-semibold text-white">{role}</h4>
            </Link>
          ))}
        </div>
      </section>

      {/* 3.5 Pricing Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t-[1px] border-[rgba(0,102,255,0.2)]">
        <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-center mb-16 text-white">Invest in <span className="text-[#D4A017]">Excellence</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          <div className="glass-card p-8 text-center hover:-translate-y-2 transition-transform">
            <h4 className="text-xl font-poppins font-bold text-white mb-2">Learner Plan</h4>
            <div className="text-3xl font-poppins font-bold text-[#00E64D] mb-6">KES 250<span className="text-lg text-[#B0B3B8] font-normal">/mo</span></div>
            <ul className="text-left space-y-3 mb-8 text-[#B0B3B8] font-inter text-sm">
              <li>✓ Single learner profile</li>
              <li>✓ Full PP1 to Grade 9 access</li>
              <li>✓ Quizzes & analytics</li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-[#00E64D] text-[#00E64D] hover:bg-[#00E64D] hover:text-[#0A0A0F] font-bold transition-colors">Start Learning</button>
          </div>

          <div className="glass-card p-8 text-center border-[#D4A017]/50 shadow-[0_0_30px_rgba(212,160,23,0.15)] transform scale-105 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-[#0A0A0F] font-bold px-4 py-1 rounded-full text-xs">RECOMMENDED</div>
            <h4 className="text-xl font-poppins font-bold text-white mb-2">Parent Plan</h4>
            <div className="text-3xl font-poppins font-bold text-[#D4A017] mb-6">KES 500<span className="text-lg text-[#B0B3B8] font-normal">/mo</span></div>
            <ul className="text-left space-y-3 mb-8 text-[#B0B3B8] font-inter text-sm">
              <li>✓ Up to 3 learner profiles</li>
              <li>✓ Parent monitoring dashboard</li>
              <li>✓ Detailed progress reports</li>
            </ul>
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-[#0A0A0F] font-bold shadow-[0_0_15px_rgba(212,160,23,0.4)] hover:scale-[1.02] transition-transform">Get Parent Plan</button>
          </div>

          <div className="glass-card p-8 text-center hover:-translate-y-2 transition-transform">
            <h4 className="text-xl font-poppins font-bold text-white mb-2">Assessments Add-on</h4>
            <div className="text-3xl font-poppins font-bold text-[#0066FF] mb-6">KES 400<span className="text-lg text-[#B0B3B8] font-normal">/mo</span></div>
            <ul className="text-left space-y-3 mb-8 text-[#B0B3B8] font-inter text-sm">
              <li>✓ Weekly & Monthly tests</li>
              <li>✓ End of Term assessments</li>
              <li>✓ Standalone for teachers</li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white font-bold transition-colors">Add Assessments</button>
          </div>

        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  )
}
