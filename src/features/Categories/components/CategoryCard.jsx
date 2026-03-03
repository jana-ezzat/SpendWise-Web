import React, { useState } from "react";
import { Trash2 } from "lucide-react";

function CategoryCard({ category, onDelete }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 transition-all relative hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Delete Icon */}
      {hovered && (
        <button
          onClick={() => onDelete(category.id)}
          className="absolute top-4 right-4 text-rose-500 hover:text-rose-700 transition"
        >
          <Trash2 size={18} />
        </button>
      )}

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-400 to-rose-500 flex items-center justify-center text-white font-bold text-lg mb-4">
        {category.name.charAt(0)}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {category.name}
      </h3>

      <div className="text-sm text-gray-500 flex justify-between">
        <span>Expenses</span>
        <span>0</span>
      </div>

      <div className="text-sm flex justify-between mt-2">
        <span className="text-gray-500">Total</span>
        <span className="text-rose-500 font-semibold">$0.00</span>
      </div>

      <div className="h-2 bg-gray-100 rounded-full mt-4"></div>
    </div>
  );
}

export default CategoryCard;