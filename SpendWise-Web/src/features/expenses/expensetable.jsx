function ExpenseTable({ expenses }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
        <p className="text-gray-400 text-lg">
          No expenses yet
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <table className="w-full border-collapse">

        <thead className="bg-pink-100">
          <tr className="text-left text-gray-600 text-sm uppercase tracking-wide">
            <th className="p-5">Category</th>
            <th className="p-5">Amount</th>
            <th className="p-5">Date</th>
            <th className="p-5">Note</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-5 font-medium text-gray-800">
                {expense.category}
              </td>

              <td className="p-5 text-pink-600 font-bold">
                ${Number(expense.amount).toFixed(2)}
              </td>

              <td className="p-5 text-gray-600">
                {new Date(expense.date).toDateString()}
              </td>

              <td className="p-5 text-gray-500">
                {expense.note || "-"}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default ExpenseTable;