import React, { useState } from 'react'
import Layout from '../components/Layout'
import SubscriptionGuard from '../shared/SubscriptionGuard'
import clsx from 'clsx'

const CBC_CURRICULUM = [
  {
    category: "Pre-Primary",
    grades: ["PP1", "PP2"],
    subjects: [
      "Language Activities",
      "Mathematical Activities",
      "Environmental Activities",
      "Psychomotor & Creative Activities",
      "Religious Education Activities (CRE / IRE / HRE)"
    ]
  },
  {
    category: "Lower Primary",
    grades: ["Grade 1", "Grade 2", "Grade 3"],
    subjects: [
      "Literacy (English)",
      "Kiswahili Language Activities",
      "Mathematical Activities",
      "Environmental Activities",
      "Creative Arts & Sports",
      "Religious Education (CRE / IRE / HRE)"
    ]
  },
  {
    category: "Upper Primary",
    grades: ["Grade 4", "Grade 5", "Grade 6"],
    subjects: [
      "English",
      "Kiswahili",
      "Mathematics",
      "Integrated Science",
      "Social Studies",
      "Religious Education (CRE / IRE / HRE)",
      "Creative Arts & Sports",
      "Agriculture & Nutrition"
    ]
  },
  {
    category: "Junior Secondary",
    grades: ["Grade 7", "Grade 8", "Grade 9"],
    subjects: [
      "English",
      "Kiswahili",
      "Mathematics",
      "Integrated Science",
      "Social Studies",
      "Religious Education (CRE / IRE / HRE)",
      "Creative Arts",
      "Physical Education & Health",
      "Agriculture & Nutrition",
      "Pre-Technical Studies",
      "Business Studies",
      "Computer Science"
    ]
  }
]

export default function Lessons(){
  const [selectedCategory, setSelectedCategory] = useState(CBC_CURRICULUM[2]) // Default Upper Primary
  const [selectedGrade, setSelectedGrade] = useState("Grade 5")

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-6">
        <SubscriptionGuard>
          
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-4">Lessons & <span className="text-[#00E64D]">Learning Areas</span></h2>
            <p className="text-[#B0B3B8] font-inter text-lg">Browse official CBC-aligned content covering PP1 through Grade 9.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-poppins font-bold text-white mb-4 border-b border-[#0066FF]/30 pb-2">Select Level</h3>
                <div className="space-y-2">
                  {CBC_CURRICULUM.map(cat => (
                    <button 
                      key={cat.category}
                      onClick={() => { setSelectedCategory(cat); setSelectedGrade(cat.grades[0]); }}
                      className={clsx(
                        "w-full text-left px-4 py-3 rounded-lg font-inter text-sm transition-all",
                        selectedCategory.category === cat.category 
                          ? "bg-[#0066FF]/20 border border-[#0066FF] text-white shadow-[0_0_15px_rgba(0,102,255,0.2)]"
                          : "text-[#B0B3B8] hover:bg-[#0A1628] hover:text-white"
                      )}
                    >
                      {cat.category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                 <h3 className="text-lg font-poppins font-bold text-white mb-4 border-b border-[#00E64D]/30 pb-2">Select Grade</h3>
                 <div className="flex flex-wrap gap-2">
                   {selectedCategory.grades.map(grade => (
                     <button
                       key={grade}
                       onClick={() => setSelectedGrade(grade)}
                       className={clsx(
                         "px-4 py-2 rounded-lg font-inter text-sm font-semibold transition-all",
                         selectedGrade === grade
                           ? "bg-[#00E64D] text-[#0A0A0F] shadow-[0_0_15px_rgba(0,230,77,0.4)]"
                           : "bg-[#0A1628] text-[#B0B3B8] border border-[rgba(0,102,255,0.2)] hover:border-[#00E64D]/50 hover:text-white"
                       )}
                     >
                       {grade}
                     </button>
                   ))}
                 </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
               <div className="flex items-center justify-between mb-6">
                 <h3 className="text-2xl font-poppins font-bold text-white">{selectedGrade} <span className="text-[#0066FF] font-normal">— {selectedCategory.category}</span></h3>
                 <div className="text-sm px-4 py-1 rounded-full bg-[#00E64D]/10 text-[#00E64D] border border-[#00E64D]/30">
                   {selectedCategory.subjects.length} Learning Areas
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {selectedCategory.subjects.map(subject => (
                   <div key={subject} className="glass-card p-6 flex flex-col group cursor-pointer hover:border-[#00E64D]/50 hover:shadow-[0_0_20px_rgba(0,230,77,0.15)] transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#0A1628] border border-[#0066FF]/30 flex items-center justify-center text-xl shadow-[0_0_10px_rgba(0,102,255,0.1)] group-hover:bg-[#00E64D]/20 group-hover:border-[#00E64D]/50 transition-colors">
                          📚
                        </div>
                        <span className="text-xs text-[#0066FF] font-semibold tracking-wider font-inter">CBC ALIGNED</span>
                      </div>
                      <h4 className="text-lg font-poppins font-semibold text-white mb-2">{subject}</h4>
                      <p className="text-sm font-inter text-[#B0B3B8] flex-1">Structured notes, interactive quizzes, and foundational strands.</p>
                      
                      <button className="mt-6 w-full py-2.5 rounded-lg border border-[rgba(0,102,255,0.3)] text-white font-inter text-sm hover:border-[#00E64D] hover:text-[#00E64D] transition-colors">
                        View Strands →
                      </button>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </SubscriptionGuard>
      </div>
    </Layout>
  )
}
