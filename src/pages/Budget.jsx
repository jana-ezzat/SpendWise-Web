import React from "react";
import BudgetHeader from "@/features/budget/BudgetHeader";
import BudgetForm from "@/features/budget/BudgetForm";
import BudgetProgress from "@/features/budget/BudgetProgress";
import StatCard from "@/components/ui/StatCard";
import { DollarSign, TrendingUp } from "lucide-react";
import BudgetBanner from "@/features/budget/BudgetBanner";

function Budget() {
  return (
    <div className="w-full min-h-screen bg-rose-50 p-6">
      <BudgetHeader />
      <BudgetForm />

      <div className="flex gap-6 items-start">
        <div className="flex-1">
          <BudgetProgress />
        </div>

        <div className="flex flex-col gap-4 w-150">
          <StatCard
            title="Daily Average"
            value="$0.00"
            subtitle="Spent per day this month"
            icon={<DollarSign size={18} className="text-white" />}
            gradient="bg-gradient-to-r from-pink-400 to-rose-400"
          />
          <StatCard
            title="Projected Total"
            value="$0.00"
            subtitle="Estimated end of month"
            icon={<TrendingUp size={18} className="text-white" />}
            gradient="bg-gradient-to-r from-pink-600 to-rose-700"
          />
        </div>
      </div>
      <BudgetBanner />
    </div>
  );
}

export default Budget;
