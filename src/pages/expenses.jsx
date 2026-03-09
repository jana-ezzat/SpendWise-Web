import { useState } from "react";
import Header from "@/features/expenses/header.jsx";
import Filter from "@/features/expenses/filter.jsx";
import Card from "@/features/expenses/card.jsx";
import ExpenseTable from "@/features/expenses/expensetable.jsx";
import AddExpenses from "@/features/expenses/addexpenses.jsx";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
      <div className="flex-1 p-8">
        <Header openModal={() => setIsOpen(true)} />
        <Filter />

        <Card expenses={expenses} />

        <ExpenseTable expenses={expenses} />

        {isOpen && (
          <AddExpenses
            closeModal={() => setIsOpen(false)}
            addExpense={addExpense}
          />
        )}
      </div>
    
  );
}

export default Expenses;