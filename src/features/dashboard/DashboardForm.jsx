import React, { useRef, useState } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup } from "@/components/ui/field"
import {FieldLabel } from "@/components/ui/field"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function DashboardForm({setTransactions,setBudgetLeft}) {
  var amountRef = useRef(null)
  var dateRef = useRef(null)
  var noteRef = useRef(null)
  var categoryRef = useRef("")

  function handleCategoryChange(value) {
    categoryRef.current = value
  }

  function handleSubmit(event) {
    event.preventDefault()

    var amount = amountRef.current.value
    var date = dateRef.current.value
    var note = noteRef.current.value
    var category = categoryRef.current

    var newTransaction = {
      id: Date.now(),
      amount: amount,
      category: category,
      date: date,
      note: note ? note : "no note"
    }

    setTransactions(function (prev) {
      return [newTransaction].concat(prev)
    })



 


    amountRef.current.value = ""
    dateRef.current.value = ""
    noteRef.current.value = ""
    categoryRef.current = ""

   


  }



  return <>
      <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-linear-to-r from-pink-400 to-rose-500 text-white  hover:text-white hover:cursor-pointer" variant="outline">+ Quick Add</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
      <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-pink-900 font-bold text-xl">Add Expense</DialogTitle>
            
          </DialogHeader>
          <FieldGroup>
          <Field>
            <Label htmlFor="username-1">Amount*</Label>
          <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" type="number" ref={amountRef}/>
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
            </Field>

             <Field>
            <FieldLabel htmlFor="form-country">Category*</FieldLabel>
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger id="form-country" >
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Food">Food</SelectItem>
                <SelectItem value="Transport">Transport</SelectItem>
                <SelectItem value="Shopping">Shopping</SelectItem>
                <SelectItem value="Entertainment">Entertainment</SelectItem>
                <SelectItem value="Bills">Bills</SelectItem>

              </SelectContent>
            </Select>
          </Field>



            <Field>
              <Label htmlFor="username-1">Date*</Label>
              <Input id="username-1" name="username" type="date" ref={dateRef} />
            </Field>
            <Field>
              <Label htmlFor="username-1">Note (optional)</Label>
              <InputGroup>
        <InputGroupTextarea placeholder="Add a note...." ref={noteRef} />
        <InputGroupAddon align="block-end">
        </InputGroupAddon>
      </InputGroup>
            </Field>
          </FieldGroup>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit" className="bg-linear-to-r from-pink-400 to-rose-500">Save changes</Button>
          </DialogFooter>
      </form>
        </DialogContent>
     </Dialog>
    </div>
  </>
}
