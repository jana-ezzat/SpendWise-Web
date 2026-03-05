import DashboardForm from '@/features/dashboard/DashboardForm'
import DashboardProgress from '@/features/dashboard/DashboardProgress'
import DashboardRecentTransactions from '@/features/dashboard/DashboardRecentTransactions'
import DashboardUpperPart from '@/features/dashboard/DashboardUpperPart'
import React, { useEffect } from 'react'
import { useState } from 'react'


export default function Dashboard() {


  const [budget, setBudget] = useState(20000)
  const [budgetLeft, setBudgetLeft] = useState(20000)
  const [transactions, setTransactions] = useState([])
  const [transactionsCount, setTransactionsCount] = useState(20000)
  const [totalSpent, setTotalSpent] = useState(0)


useEffect(() => {
  const total = transactions.reduce((acc, trans) => acc + Number(trans.amount), 0);
  setTotalSpent(total);

  setBudgetLeft(budget - total);

  setTransactionsCount(transactions.length);
}, [transactions, budget]); 


const spentPercentage = budget > 0 ? (totalSpent / budget) * 100 : 0;

  return <>
  <div className='flex flex-col gap-6 bg-rose-50 p-5'>
      <div className='flex justify-between items-center'>

     <div>
       <h2 className=' text-4xl text-rose-800 text-start font-bold'>Dashboard</h2>
    <p className='text-start text-muted-foreground text-lg'>welcome back here is your spending overview</p>
     </div>
<DashboardForm setTransactions={setTransactions} setBudgetLeft={setBudgetLeft} />
      </div>


<DashboardUpperPart budget={budget} setBudget={setBudget} budgetLeft={budgetLeft} setBudgetLeft={setBudgetLeft} transactions={transactions} setTransactions={setTransactions} transactionsCount={transactionsCount} setTransactionsCount={setTransactionsCount} totalSpent={totalSpent} setTotalSpent={setTotalSpent}/>
    


<DashboardProgress totalSpent={totalSpent} budget={budget} percentage={spentPercentage}/>



<DashboardRecentTransactions transactions={transactions}/>







    </div>
  </>
}
