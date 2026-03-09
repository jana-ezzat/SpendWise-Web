import React from "react";

function BudgetProgress({ budget = 5000, spent = 0 }) {
  const remaining = budget - spent;
  const percentage = Math.round((spent / budget) * 100);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const rows = [
    { label: "Budget", value: `$${budget.toFixed(2)}`, color: "text-gray-800" },
    { label: "Spent", value: `$${spent.toFixed(2)}`, color: "text-rose-500" },
    {
      label: "Remaining",
      value: `$${remaining.toFixed(2)}`,
      color: "text-green-500",
    },
  ];

  return (
    <div className="bg-white shadow-lg p-6 rounded-xl w-full">
      <h3 className="text-lg font-bold text-rose-800 mb-6">Budget Progress</h3>
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          <svg width="192" height="192" viewBox="0 0 192 192">
            <circle
              cx="96"
              cy="96"
              r={radius}
              fill="none"
              stroke="#fce4ec"
              strokeWidth="18"
            />
            <circle
              cx="96"
              cy="96"
              r={radius}
              fill="none"
              stroke="#f06292"
              strokeWidth="18"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 96 96)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-rose-600">{`${percentage}%`}</span>
            <span className="text-sm font-medium text-gray-500">of budget spent</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex justify-between items-center bg-rose-50 rounded-lg px-4 py-3">
            <span className="text-sm text-gray-500 font-medium">
              {row.label}
            </span>
            <span className={`text-sm font-semibold ${row.color}`}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetProgress;
