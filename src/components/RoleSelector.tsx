import React from 'react'
import clsx from 'clsx'

const roles = [
  { name: 'Admin', icon: '🛡️' },
  { name: 'TusoTeacher', icon: '📝' },
  { name: 'Teacher', icon: '👨‍🏫' },
  { name: 'Learner', icon: '🎓' },
  { name: 'Parent', icon: '👪' }
]

export default function RoleSelector({ onSelect, selectedRole }: { onSelect: (role: string) => void, selectedRole?: string | null }){
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {roles.map(r => {
        const isSelected = selectedRole === r.name;
        return (
          <button 
            key={r.name} 
            onClick={() => onSelect(r.name)} 
            className={clsx(
              "w-40 glass-card p-6 flex flex-col items-center gap-4 transition-all duration-300",
              isSelected 
                ? "border-[#00E64D] scale-105 shadow-[0_0_25px_rgba(0,230,77,0.3)] bg-[rgba(0,230,77,0.05)]" 
                : "hover:border-[#0066FF] hover:scale-105 hover:shadow-[0_0_20px_rgba(0,102,255,0.2)]"
            )}
          >
            <div className={clsx(
              "w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-colors duration-300",
              isSelected ? "bg-[#00E64D]/20 shadow-[0_0_15px_rgba(0,230,77,0.4)]" : "bg-[#0A1628]"
            )}>
              {r.icon}
            </div>
            <div className={clsx("font-poppins font-semibold", isSelected ? "text-[#00E64D]" : "text-white")}>
              {r.name}
            </div>
          </button>
        )
      })}
    </div>
  )
}
