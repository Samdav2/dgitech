import React, { useState } from 'react'
import Layout from '../components/Layout'
import WhatsAppButton from '../components/WhatsAppButton'
import { CONTACT_SUBMISSIONS_KEY } from '../shared/config'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('General Enquiry')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (message.length < 20) {
      setStatus('Message must be at least 20 characters')
      setStatusType('error')
      return
    }
    
    if (!name || !email) {
      setStatus('Please fill in all required fields')
      setStatusType('error')
      return
    }

    try {
      const submissions = JSON.parse(localStorage.getItem(CONTACT_SUBMISSIONS_KEY) || '[]')
      submissions.push({ name, email, subject, message, ts: Date.now() })
      localStorage.setItem(CONTACT_SUBMISSIONS_KEY, JSON.stringify(submissions))
      setStatus('Successfully submitted. We will respond within 48 hours.')
      setStatusType('success')
      setName(''); setEmail(''); setMessage(''); setSubject('General Enquiry')
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
      setStatusType('error')
    }
  }

  return (
    <Layout>
      <div className="pt-32 pb-24 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">Contact & Support</h1>
            <p className="text-[#B0B3B8] text-lg font-inter">We're here to help learners, parents, and educators succeed. Choose how you want to reach out to us below.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            
            {/* Contact Form */}
            <div className="lg:col-span-3 glass-card p-8 rounded-2xl border border-[rgba(0,102,255,0.2)]">
              <h2 className="text-2xl font-poppins font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={submit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#B0B3B8] mb-2 font-inter">Full Name *</label>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e)=>setName(e.target.value)} 
                      className="w-full bg-[#0A1628] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 text-white focus:outline-none focus:border-[#0066FF] transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#B0B3B8] mb-2 font-inter">Email Address *</label>
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e)=>setEmail(e.target.value)} 
                      className="w-full bg-[#0A1628] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 text-white focus:outline-none focus:border-[#0066FF] transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#B0B3B8] mb-2 font-inter">Subject *</label>
                  <div className="relative">
                    <select 
                      value={subject} 
                      onChange={(e)=>setSubject(e.target.value)} 
                      className="w-full bg-[#0A1628] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 text-white focus:outline-none focus:border-[#0066FF] transition-colors appearance-none cursor-pointer"
                    >
                      <option>General Enquiry</option>
                      <option>TusoTeacher Application</option>
                      <option>Billing & Subscription</option>
                      <option>Technical Support</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#B0B3B8]">▼</div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#B0B3B8] mb-2 font-inter">Message *</label>
                  <textarea 
                    value={message} 
                    onChange={(e)=>setMessage(e.target.value)} 
                    className="w-full bg-[#0A1628] border border-[rgba(255,255,255,0.1)] rounded-lg p-4 text-white focus:outline-none focus:border-[#0066FF] transition-colors resize-none" 
                    rows={5}
                    placeholder="How can we help you today? (Min. 20 characters)"
                  ></textarea>
                </div>

                {status && (
                  <div className={`p-4 rounded-lg font-inter text-sm ${statusType === 'error' ? 'bg-[rgba(255,0,0,0.1)] border border-red-500/30 text-red-400' : 'bg-[rgba(0,230,77,0.1)] border border-tp-green/30 text-tp-green'}`}>
                    {status}
                  </div>
                )}

                <div>
                  <button type="submit" className="px-8 py-3 rounded-lg bg-[#0066FF] text-white font-poppins font-bold hover:shadow-[0_0_20px_rgba(0,102,255,0.5)] transition-all flex items-center justify-center gap-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right Information Cards */}
            <div className="lg:col-span-2 space-y-6">
              
              <div className="glass-card p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-full bg-[rgba(0,102,255,0.1)] flex items-center justify-center text-2xl">✉️</div>
                   <div>
                     <h3 className="font-poppins font-semibold text-white mb-1">Support Email</h3>
                     <a href="mailto:support@tusomeplus.com" className="text-[#0066FF] hover:underline font-inter block mb-2">support@tusomeplus.com</a>
                     <p className="text-xs text-[#B0B3B8] font-inter leading-relaxed">
                       Best for formal complaints, billing disputes, teacher applications, and content takedowns.
                       <br/><span className="text-white mt-1 block">Response within 48h (business days).</span>
                     </p>
                   </div>
                 </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 relative overflow-hidden group">
                 <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500 -translate-x-4 -translate-y-4">
                   <svg className="w-24 h-24 text-[#25D366] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.482-1.459-1.655-1.757-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.98 1.005-3.645-.235-.373a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.882-9.883 9.882m8.413-18.297A11.815 11.815 0 0012.05.005C5.46.005.105 5.361.103 11.95c-.001 2.1.549 4.148 1.593 5.952L0 24l6.253-1.64a11.88 11.88 0 005.793 1.498h.005c6.589 0 11.346-5.358 11.348-11.951a11.812 11.812 0 00-3.479-8.406"/></svg>
                 </div>
                 <div className="relative z-10">
                   <h3 className="font-poppins font-semibold text-white mb-2">WhatsApp Business</h3>
                   <p className="text-sm text-[#B0B3B8] font-inter mb-4">
                     Quick support for subscriptions, onboarding, password resets, and quick questions.
                   </p>
                   <div className="mb-4">
                     <span className="bg-[#25D366] text-black px-2 py-0.5 rounded text-xs font-bold font-inter tracking-wide uppercase">We reply within 24 hours</span>
                   </div>
                   <WhatsAppButton inline={true} />
                 </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
                 <h3 className="font-poppins font-semibold text-white mb-3">Headquarters</h3>
                 <div className="text-sm text-[#B0B3B8] space-y-2 font-inter">
                   <p>TusomePlus Education Ltd</p>
                   <p>P.O. Box 12345 - 00100</p>
                   <p>Nairobi, Kenya</p>
                 </div>
                 <hr className="border-[rgba(255,255,255,0.1)] my-4" />
                 <h3 className="font-poppins font-semibold text-white mb-3 flex items-center gap-2"><span className="text-tp-green">🕒</span> Business Hours</h3>
                 <div className="text-sm text-[#B0B3B8] space-y-1 font-inter">
                   <p className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white">8:00 AM - 5:00 PM (EAT)</span></p>
                   <p className="flex justify-between"><span>Saturday:</span> <span className="text-white">9:00 AM - 1:00 PM (EAT)</span></p>
                   <p className="flex justify-between"><span>Sunday:</span> <span className="text-[#B0B3B8]">Closed</span></p>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Floating global WhatsApp Button for the bottom right corner (persists) */}
      <WhatsAppButton />
    </Layout>
  )
}