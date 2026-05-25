import { useState } from 'react';
import Layout from '../components/Layout';

export default function TeacherOnboarding() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-16 px-4 flex items-center justify-center">
          <div className="glass-card max-w-lg w-full p-8 text-center border-tp-green">
            <div className="w-16 h-16 bg-[rgba(0,230,77,0.1)] rounded-full flex items-center justify-center mx-auto mb-6 text-tp-green">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-2xl font-poppins text-white mb-4">Application Submitted!</h2>
            <p className="text-[#B0B3B8] mb-6">Your TusoTeacher application has been securely submitted. Our Admin team will review your details (including TSC verification) and get back to you shortly.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
             <h1 className="text-3xl md:text-4xl font-poppins text-white font-bold mb-4">TusoTeacher Onboarding</h1>
             <p className="text-[#B0B3B8]">Complete your professional profile to join the TusomePlus premium teaching network.</p>
          </div>

          <form className="glass-card p-8 space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            
            {/* Verification */}
            <section>
              <h3 className="text-xl text-tp-blue font-poppins font-semibold mb-4 border-b border-[rgba(0,102,255,0.2)] pb-2">1. Personal Verification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-[#B0B3B8]">National ID — Front Image</label>
                  <input type="file" required className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[rgba(0,102,255,0.2)] file:text-white hover:file:bg-[rgba(0,102,255,0.4)] transition-all cursor-pointer" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#B0B3B8]">National ID — Back Image</label>
                  <input type="file" required className="w-full bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[rgba(0,102,255,0.2)] file:text-white hover:file:bg-[rgba(0,102,255,0.4)] transition-all cursor-pointer" />
                </div>
              </div>
            </section>

            {/* Professional Details */}
            <section>
              <h3 className="text-xl text-tp-blue font-poppins font-semibold mb-4 border-b border-[rgba(0,102,255,0.2)] pb-2">2. Professional Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                  <label className="text-sm text-[#B0B3B8]">TSC Number</label>
                  <input type="text" required placeholder="e.g. 123456" className="w-full bg-[#0A0A0F] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tp-green focus:shadow-[0_0_10px_rgba(0,230,77,0.2)] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#B0B3B8]">Years of Experience</label>
                  <input type="number" required min="1" placeholder="e.g. 5" className="w-full bg-[#0A0A0F] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tp-green focus:shadow-[0_0_10px_rgba(0,230,77,0.2)] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#B0B3B8]">Level of Education</label>
                  <select required className="w-full bg-[#0A0A0F] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tp-green focus:shadow-[0_0_10px_rgba(0,230,77,0.2)] transition-all">
                    <option value="">Select Level</option>
                    <option value="P1 Teacher">P1 Teacher</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor Degree">Bachelor Degree</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#B0B3B8]">Area of Specialisation</label>
                  <input type="text" required placeholder="e.g. Upper Primary, Mathematics" className="w-full bg-[#0A0A0F] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tp-green focus:shadow-[0_0_10px_rgba(0,230,77,0.2)] transition-all" />
                </div>
              </div>
            </section>

             {/* Profile Description */}
             <section>
              <h3 className="text-xl text-tp-blue font-poppins font-semibold mb-4 border-b border-[rgba(0,102,255,0.2)] pb-2">3. Profile Description</h3>
              <div className="space-y-4">
                 <div className="space-y-2">
                  <label className="text-sm text-[#B0B3B8]">Brief Academic Background</label>
                  <textarea required rows={3} placeholder="Where and what you studied..." className="w-full bg-[#0A0A0F] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tp-green focus:shadow-[0_0_10px_rgba(0,230,77,0.2)] transition-all"></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#B0B3B8]">Professional Journey</label>
                  <textarea required rows={3} placeholder="Experience, achievements, teaching focus..." className="w-full bg-[#0A0A0F] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tp-green focus:shadow-[0_0_10px_rgba(0,230,77,0.2)] transition-all"></textarea>
                </div>
              </div>
            </section>

            {/* Payment Setup */}
            <section>
              <h3 className="text-xl text-tp-blue font-poppins font-semibold mb-4 border-b border-[rgba(0,102,255,0.2)] pb-2">4. Payment Setup</h3>
              <div className="space-y-2">
                  <label className="text-sm text-[#B0B3B8]">M-Pesa Number (For receiving earnings)</label>
                  <input type="tel" required placeholder="e.g. 0712345678" className="w-full bg-[#0A0A0F] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tp-green focus:shadow-[0_0_10px_rgba(0,230,77,0.2)] transition-all" />
              </div>
            </section>

            {/* Terms and Conditions */}
            <section className="bg-[rgba(10,22,40,0.8)] p-6 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" required checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-5 h-5 rounded border-[rgba(255,255,255,0.3)] bg-tp-bg text-tp-green focus:ring-tp-green focus:ring-opacity-50" />
                <span className="text-sm text-[#B0B3B8]">
                  I have read and agree to the <span className="text-tp-blue hover:underline">Platform Policies</span>, including content ownership, royalty payouts, and the strict zero-plagiarism policy. I understand all uploads undergo Admin review before publication.
                </span>
              </label>
            </section>

            <button type="submit" disabled={!agreed} className={`w-full py-4 rounded-lg font-poppins font-semibold text-lg transition-all ${agreed ? 'bg-tp-green text-black hover:bg-[#00cc44] hover:shadow-[0_0_20px_rgba(0,230,77,0.4)]' : 'bg-[#1A1A24] text-[#666] cursor-not-allowed'}`}>
              Submit Application
            </button>

          </form>
        </div>
      </div>
    </Layout>
  );
}
