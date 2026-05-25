import React, { useEffect, useState } from 'react'
import { deviceFingerprint } from '../utils/device'
import { FREE_TRIAL_KEY, FREE_TRIAL_ENABLED_KEY } from '../shared/config'

function todayKey(fp: string){
  const d = new Date()
  const y = d.getFullYear(); const m = d.getMonth()+1; const day = d.getDate()
  return `${FREE_TRIAL_KEY}::${fp}::${y}-${m}-${day}`
}

export default function FreeTrialPopup(){
  const [visible, setVisible] = useState(false)
  const [used, setUsed] = useState(false)
  const [enabled, setEnabled] = useState(true)

  useEffect(()=>{
    const e = localStorage.getItem(FREE_TRIAL_ENABLED_KEY)
    setEnabled(e !== 'false')
  }, [])

  useEffect(()=>{
    if (!enabled) return
    const fp = deviceFingerprint()
    const key = todayKey(fp)
    const usedToday = !!localStorage.getItem(key)
    setUsed(usedToday)

    const onScroll = () => {
      if (window.scrollY > (document.body.scrollHeight * 0.4)) setVisible(true)
    }

    const timer = window.setTimeout(()=> setVisible(true), 6000)
    window.addEventListener('scroll', onScroll)
    return ()=>{
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [enabled])

  const startTrial = () => {
    const fp = deviceFingerprint()
    const key = todayKey(fp)
    localStorage.setItem(key, JSON.stringify({ ts: Date.now() }))
    // simple analytics increment
    const cntKey = `${FREE_TRIAL_KEY}::count`
    const c = Number(localStorage.getItem(cntKey) || '0') + 1
    localStorage.setItem(cntKey, String(c))
    setUsed(true)
    setVisible(false)
    alert("Starting free sample assessment (UI only). Good luck!")
  }

  if (!enabled) return null
  if (!visible) return null
  if (used) return (
    <div className="fixed bottom-6 right-6 max-w-sm glass-card p-6 animate-slide-up z-50">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="text-4xl">🎉</div>
        <div>
          <h3 className="text-xl font-poppins font-bold text-white">Daily Sample Used!</h3>
          <p className="text-[#B0B3B8] font-inter text-sm mb-4">Want full access to all assessments? Subscribe from KES 250/month.</p>
        </div>
        <div className="flex w-full gap-3">
          <button className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-[#0A0A0F] font-bold shadow-[0_0_15px_rgba(212,160,23,0.3)] hover:scale-[1.02] transition-transform">Choose a Plan</button>
          <button onClick={()=>setVisible(false)} className="px-4 py-3 rounded-lg border border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-colors">Close</button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-[#0A0A0F]/80 backdrop-blur-sm" onClick={()=>setVisible(false)} />
      <div className="glass-card p-8 z-10 max-w-[400px] w-full text-center border-t-4 border-t-[#00E64D] animate-fade-in">
        <div className="w-20 h-20 mx-auto bg-[#0A1628] rounded-full border border-[#00E64D]/50 flex items-center justify-center text-4xl mb-4 shadow-[0_0_20px_rgba(0,230,77,0.2)]">
          🐰
        </div>
        <div className="text-[#00E64D] font-poppins font-bold text-xs tracking-widest uppercase mb-1">FREE DAILY SAMPLE</div>
        <h3 className="text-2xl font-poppins font-bold text-white mb-2">Grade 5 Maths</h3>
        <p className="text-[#B0B3B8] font-inter text-sm mb-6 leading-relaxed">
          "Try today's free Grade 5 Maths challenge!" <br/><span className="text-[#0066FF] font-medium">— TusoBot</span>
        </p>
        
        <div className="w-full space-y-3">
          <button onClick={startTrial} className="w-full py-4 rounded-xl bg-[#00E64D] text-[#0A0A0F] font-bold text-lg hover:shadow-[0_0_20px_rgba(0,230,77,0.5)] transition-all">
            Start Free Trial
          </button>
          <button onClick={()=>setVisible(false)} className="text-sm font-inter text-[#B0B3B8] hover:text-white transition-colors mt-2 pb-2">
            No thanks
          </button>
        </div>
      </div>
    </div>
  )
}
