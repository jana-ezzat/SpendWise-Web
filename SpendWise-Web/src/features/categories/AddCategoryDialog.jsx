import React, { useState } from "react";

function AddCategoryDialog({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("");

  const icons = ["🍔", "🚗", "🛍️", "🎬", "💡", "🏠", "💊", "📚"];

  const handleAdd = () => {
    if (!name || !selectedIcon) return;

    const newCategory = {
      id: Date.now(),
      name,
      icon: selectedIcon,
    };

    onAdd(newCategory);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Category</h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Category Name</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 outline-none focus:ring-2 focus:ring-rose-400"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2">Choose Icon</label>
          <div className="grid grid-cols-4 gap-3">
            {icons.map((icon) => (
              <button
                key={icon}
                onClick={() => setSelectedIcon(icon)}
                className={`text-2xl p-2 rounded-lg border 
                  ${selectedIcon === icon
                    ? "bg-rose-100 border-rose-400"
                    : "hover:bg-gray-100"
                  }`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-lg bg-rose-500 text-white hover:bg-rose-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCategoryDialog;