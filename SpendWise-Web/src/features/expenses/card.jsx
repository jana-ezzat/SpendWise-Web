function Card({ expenses }) {
  const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white p-6 rounded-xl shadow mb-6 flex justify-between">
      <div>
        <p className="text-sm">Total Expenses</p>
        <h3 className="text-3xl font-bold">${total.toFixed(2)}</h3>
      </div>

      <div className="text-right">
        <p className="text-sm">Transactions</p>
        <h3 className="text-3xl font-bold">{expenses.length}</h3>
      </div>
    </div>
  );
}

export default Card;