import React from 'react'

export default function DashboardRecentTransactions() {
  return <>
  
    <div className='bg-white rounded-xl shadow-lg p-5'>
      <h3 className='text-2xl text-pink-900 font-bold text-start mb-3'>Recent transactions</h3>
      <div className="flex justify-between bg-pink-200 rounded-xl p-4">
        <div className='flex gap-3'>
          <div className='bg-pink-900 py-3 px-5 rounded-xl'>
          <p className='text-white font-bold text-2xl'>F</p>
        </div>
        <div>
          <p className='font-bold text-start'>Transport</p>
          <p className='text-muted-foreground text-start'>no note</p>
        </div>
        </div>
        <div>
          <p className='text-pink-900 font-bold'>$12554</p>
          <p className='text-muted-foreground'>June 1</p>

        </div>
      </div>
      
      </div>  

  </>
}
