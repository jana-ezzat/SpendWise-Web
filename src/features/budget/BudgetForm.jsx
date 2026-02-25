import React from "react";
import { Save } from "lucide-react";

function BudgetForm() {
  return (
    <div className="bg-white shadow-lg p-6 rounded-xl mb-6 w-full">
      <h3 className="text-lg font-bold text-rose-800 mb-3">
        Set Monthly Budget
      </h3>
      <label
        htmlFor="budget"
        className="text-gray-600 font-medium text-sm p-1">
        Budget Amount
      </label>
      <div className="flex gap-3 items-center mt-1">
        <div className="flex items-center border border-pink-200 rounded-xl px-4 py-2.5 flex-1">
          <span className="text-rose-800 font-bold mr-2">$</span>
          <input
            type="number"
            id="budget"
            defaultValue={5000}
            className="outline-none border-none w-full text-gray-700 bg-transparent"
          />
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-500 text-white px-6 py-2.5 rounded-xl font-semibold whitespace-nowrap cursor-pointer hover:shadow-md transition">
          <Save size={16} />
          Save Budget
        </button>
      </div>
    </div>
  );
}

export default BudgetForm;
