import Layout from '../components/Layout'
import { PRICING } from '../shared/config'

export default function Pricing(){
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-3xl font-poppins">Subscription Plans</h2>
        <p className="text-[#B0B3B8] mt-2">All pricing shown is UI-only and configurable in the app settings.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="glass-card p-6">
            <div className="text-sm text-[#B0B3B8]">Learner Plan</div>
            <div className="text-2xl font-poppins">KES {PRICING.learnerMonthly}/month</div>
            <div className="mt-4 text-sm text-[#B0B3B8]">Access to lesson notes, quizzes & live classes (pending subscription)</div>
            <button className="mt-6 px-4 py-2 rounded bg-[#00E64D] text-black">Choose Plan</button>
          </div>

          <div className="glass-card p-6 border-2 border-[#D4A017]">
            <div className="text-sm text-[#B0B3B8]">Parent Plan</div>
            <div className="text-2xl font-poppins">KES {PRICING.parentMonthly}/month</div>
            <div className="mt-4 text-sm text-[#B0B3B8]">Manage up to 3 learner profiles and access progress reports</div>
            <button className="mt-6 px-4 py-2 rounded bg-gradient-to-r from-[#D4A017] to-[#FFD700] text-black">Choose Plan</button>
          </div>

          <div className="glass-card p-6">
            <div className="text-sm text-[#B0B3B8]">Assessments Add-on</div>
            <div className="text-2xl font-poppins">KES {PRICING.assessmentsAddonMonthly}/month</div>
            <div className="mt-4 text-sm text-[#B0B3B8]">Standalone for Teachers or add-on for Learners/Parents</div>
            <button className="mt-6 px-4 py-2 rounded border border-[#0066FF] text-white">Add Assessments</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
