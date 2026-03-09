import { Calendar, LucideArrowUpDown, Wallet } from 'lucide-react'
import React from 'react'

export default function DashboardUpperPart({budget,budgetLeft,transactions,transactionsCount,setTotalSpent,totalSpent}) {
  
  return <>
  <div className='grid grid-cols-3 gap-6 mt-5 '>
      <div className='bg-white rounded-xl shadow-lg p-5 gap-3  flex flex-col items-start'>
        <div className='flex justify-between w-full'>
          <div className='p-3 bg-linear-to-r from-pink-400 to-rose-400 rounded-xl'>

          <LucideArrowUpDown className=' text-white'/>
          </div>
          <p className='text-pink-400'>This month</p>
        </div>
        <p className='text-muted-foreground'>total spent</p>
        <h3 className='text-2xl font-bold text-pink-900'>${totalSpent}
        </h3>
      </div>
       <div className='bg-white rounded-xl shadow-lg p-5 gap-3 flex flex-col items-start'>
        <div className='flex justify-between w-full'>
          <div className='p-3 bg-linear-to-r from-pink-600 to-rose-700 rounded-xl'>

          <Wallet className=' text-white'/>
          </div>
          <p className='text-pink-400'>Remaining</p>
        </div>
        <p className='text-muted-foreground'>Budget left</p>
        <h3 className='text-2xl font-bold text-green-500'>${budgetLeft}
        </h3>
      </div>
       <div className='bg-white rounded-xl shadow-lg p-5 gap-3 flex flex-col items-start'>
        <div className='flex justify-between w-full'>
          <div className='p-3 bg-linear-to-r from-pink-400 to-rose-400 rounded-xl'>

          <Calendar className=' text-white'/>
          </div>
          <p className='text-pink-400'>Count</p>
        </div>
        <p className='text-muted-foreground'>Transactions</p>
        <h3 className='text-2xl font-bold text-pink-900'>{transactions.length}
        </h3>
      </div>

    </div>
  </>
}
