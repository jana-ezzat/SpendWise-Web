import React, { useState } from "react";
import CategoriesHeader from "./components/CategoriesHeader";
import CategoryCard from "./components/CategoryCard";

function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Food" },
    { id: 2, name: "Transport" },
    { id: 3, name: "Shopping" },
    { id: 4, name: "Entertainment" },
    { id: 5, name: "Bills" },
  ]);

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="bg-rose-50 min-h-screen">
      <CategoriesHeader total={categories.length} />

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;