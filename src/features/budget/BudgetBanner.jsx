import { TrendingUp } from "lucide-react";
import React from "react";

function BudgetBanner() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-5 w-full mt-6 flex items-center gap-4">
      <div className="bg-green-500 rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
        <TrendingUp size={18} className="text-white" />
      </div>
      <div>
        <p className="text-green-800 font-bold text-sm mb-1">Great Job!</p>
        <p className="text-green-700 text-sm">
          You're managing your budget well. Keep tracking your expenses to stay
          on target!
        </p>
      </div>
    </div>
  );
}

export default BudgetBanner;
