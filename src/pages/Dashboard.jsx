import DashboardForm from '@/features/dashboard/DashboardForm'
import DashboardProgress from '@/features/dashboard/DashboardProgress'
import DashboardRecentTransactions from '@/features/dashboard/DashboardRecentTransactions'
import DashboardUpperPart from '@/features/dashboard/DashboardUpperPart'
import React from 'react'
import { useState } from 'react'


export default function Dashboard() {
  return <>
  <div className='flex flex-col gap-6 bg-rose-50 p-5'>
      <div className='flex justify-between items-center'>

     <div>
       <h2 className=' text-4xl text-rose-800 text-start font-bold'>Dashboard</h2>
    <p className='text-start text-muted-foreground text-lg'>welcome back here is your spending overview</p>
     </div>
<DashboardForm/>
      </div>


<DashboardUpperPart/>
    


<DashboardProgress/>



<DashboardRecentTransactions/>







    </div>
  </>
}
