import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AddCategoryDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-pink-400 to-rose-500 text-white hover:text-white">
          + Add Category
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-pink-900 font-bold text-xl">
            Add Category
          </DialogTitle>
        </DialogHeader>

        {/* فاضي لحد ما صاحبتك تعمل الفورم */}
        <div className="h-32"></div>
      </DialogContent>
    </Dialog>
  );
}

export default AddCategoryDialog;