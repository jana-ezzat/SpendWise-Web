import React, { useState } from "react";
import CategoriesHeader from "../features/categories/CategoriesHeader";
import CategoryCard from "../features/categories/CategoryCard";
import AddCategoryDialog from "../features/categories/AddCategoryDialog";

function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Food", icon: "🍔" },
    { id: 2, name: "Transport", icon: "🚗" },
    { id: 3, name: "Shopping", icon: "🛍️" },
    { id: 4, name: "Entertainment", icon: "🎬" },
    { id: 5, name: "Bills", icon: "💡" },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="bg-rose-50 min-h-screen">
      <CategoriesHeader
        total={categories.length}
        onOpen={() => setIsOpen(true)}
      />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {isOpen && (
        <AddCategoryDialog
          onClose={() => setIsOpen(false)}
          onAdd={handleAddCategory}
        />
      )}
    </div>
  );
}

export default CategoriesPage;