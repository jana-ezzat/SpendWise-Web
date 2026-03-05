import React from "react";
import { Button } from "@/components/ui/button";

function CategoriesHeader({ total, onOpen }) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-rose-800 mb-1">
            Categories
          </h2>
          <p className="text-sm text-gray-500">
            Organize your expenses by category
          </p>
        </div>

        <Button
          onClick={onOpen}
          className="bg-rose-500 hover:bg-rose-600 text-white rounded-lg px-4 py-2"
        >
          + Add Category
        </Button>
      </div>

      {/* Stats Card */}
      <div className="bg-gradient-to-r from-pink-400 to-rose-600 text-white rounded-2xl p-6 shadow-md flex justify-between">
        <div>
          <p className="text-sm opacity-90">Total Categories</p>
          <h3 className="text-3xl font-bold mt-2">{total}</h3>
        </div>

        <div className="text-right">
          <p className="text-sm opacity-90">Active Categories</p>
          <h3 className="text-3xl font-bold mt-2">0</h3>
        </div>
      </div>
    </div>
  );
}

export default CategoriesHeader;