import React from 'react'

function StatCard({ title, subtitle, value, icon, gradient }) {
  return (
    <div className={`${gradient} text-white shadow-md rounded-xl p-6 w-full`}>
      <div className="flex items-center gap-3 mb-4">
        <div className='bg-white/20 rounded-xl w-10 h-10 flex items-center justify-center'>
        {icon}
        </div>
         <span className="text-base font-semibold">{title}</span>
      </div>
        <p className="text-3xl font-bold mb-1">{value}</p>
        <p className="text-sm text-gray-200">{subtitle}</p>
    </div>
  );
}

export default StatCard
