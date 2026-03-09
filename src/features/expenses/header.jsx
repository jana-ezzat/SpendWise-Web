function Header({ openModal }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-rose-800 mb-1">Expenses</h2>
        <p className="text-gray-500">Manage all your transactions</p>
      </div>

      <button
        onClick={openModal}
        className="bg-pink-500 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-600"
      >
        + Add Expense
      </button>
    </div>
  );
}

export default Header;