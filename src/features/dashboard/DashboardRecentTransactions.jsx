import React from 'react'

export default function DashboardRecentTransactions({transactions}) {
  return <>
  
 <div className='bg-white rounded-xl shadow-lg p-5'>
      <h3 className='text-2xl text-pink-900 font-bold text-start mb-3'>
        Recent transactions
      </h3>

      {transactions.map(function (transaction) {
        return (
          <div
            key={transaction.id}
            className="flex justify-between bg-pink-200 rounded-xl p-4 mb-3"
          >
            <div className='flex gap-3'>
              <div className='bg-pink-900 py-3 px-5 rounded-xl'>
                <p className='text-white font-bold text-2xl'>
                  {transaction.category.charAt(0)}
                </p>
              </div>

              <div>
                <p className='font-bold text-start'>{transaction.category}</p>
                <p className='text-muted-foreground text-start'>
                  {transaction.note}
                </p>
              </div>
            </div>

            <div>
              <p className='text-pink-900 font-bold'>
                ${transaction.amount}
              </p>
              <p className='text-muted-foreground'>
                {transaction.date}
              </p>
            </div>
          </div>
        )
      })}

    </div> 

  </>
}
