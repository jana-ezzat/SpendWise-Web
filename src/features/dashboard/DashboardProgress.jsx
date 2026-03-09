import React from 'react'
import { Field, FieldGroup } from "@/components/ui/field"
import {FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

export default function DashboardProgress({budget,totalSpent,percentage}) {
  return <>
  <div className='bg-white rounded-xl shadow-lg p-5 gap-5 flex flex-col items-start'>
        <div className='w-full'>
          <Field className="w-full ">
      <FieldLabel htmlFor="progress-upload">
        <span className='text-pink-900 text-2xl font-bold'>Budget progress</span>
        <span className="ml-auto">{percentage}%</span>
      </FieldLabel>
      <Progress value={percentage} id="progress-upload" className="bg-rose-50" />
    </Field>
        </div>
<div className="flex justify-between w-full">
  <p className='text-muted-foreground'>${totalSpent} spent</p>
  <p className='text-muted-foreground'>${budget} budget</p>

</div>
      </div>
  </>
}
