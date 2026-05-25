import React, { ReactNode } from 'react'
import Link from 'next/link'
import TusoBot from './TusoBot'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0F] font-inter text-white flex flex-col">
      <header className="w-full bg-[#0A0A0F]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[rgba(0,102,255,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0d2a4a] border border-[#0066FF]/50 flex items-center justify-center text-white font-poppins font-bold shadow-[0_0_10px_rgba(0,102,255,0.2)]">
              TP
            </div>
            <div>
              <h1 className="text-white font-poppins font-bold text-xl tracking-wide">Tusome<span className="text-[#00E64D]">Plus</span></h1>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/login" className="text-sm px-6 py-2 rounded-lg bg-[#00E64D] text-[#0A0A0F] font-poppins font-bold shadow-[0_0_15px_rgba(0,230,77,0.3)] hover:shadow-[0_0_25px_rgba(0,230,77,0.6)] transition-all">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="py-8 bg-[#0A0A0F] border-t border-[rgba(0,102,255,0.2)] mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#B0B3B8] font-inter text-sm">&copy; 2026 TUSOMEPLUS</div>
          <div className="flex gap-6 text-[#B0B3B8] font-inter text-sm">
            <Link href="/about" className="hover:text-[#00E64D] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#00E64D] transition-colors">Contact</Link>
            <Link href="/terms" className="hover:text-[#00E64D] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
      <TusoBot />
    </div>
  )
}
