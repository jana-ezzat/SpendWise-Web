import React from 'react'
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
export default function DashboardForm() {
  return <>
      <div>
      <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-pink-400 to-rose-500 text-white  hover:text-white hover:cursor-pointer" variant="outline">+ Quick Add</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
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
        <InputGroupInput placeholder="0.00" type="number"/>
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
            </Field>

             <Field>
            <FieldLabel htmlFor="form-country">Category*</FieldLabel>
            <Select>
              <SelectTrigger id="form-country">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">Food</SelectItem>
                <SelectItem value="uk">Transport</SelectItem>
                <SelectItem value="ca">Shopping</SelectItem>
                <SelectItem value="ca">Entertainment</SelectItem>
                <SelectItem value="ca">Bills</SelectItem>

              </SelectContent>
            </Select>
          </Field>



            <Field>
              <Label htmlFor="username-1">Date*</Label>
              <Input id="username-1" name="username" type="date" defaultValue="@peduarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Note (optional)</Label>
              <InputGroup>
        <InputGroupTextarea placeholder="Add a note...." />
        <InputGroupAddon align="block-end">
        </InputGroupAddon>
      </InputGroup>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
              <DialogClose asChild>
            <Button type="submit" className="bg-gradient-to-r from-pink-400 to-rose-500">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
     </Dialog>
    </div>
  </>
}
