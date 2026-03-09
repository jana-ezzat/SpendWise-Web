function Filter() {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4 mb-6">
      <select className="flex-1 border rounded-lg p-2">
        <option>All Categories1</option>
        <option>All Categories2</option>
        <option>All Categories3</option>
      </select>

      <button className="border px-4 py-2 rounded-lg">
        Date 
      </button>

      <button className="border px-4 py-2 rounded-lg">
        Amount
      </button>
    </div>
  );
}

export default Filter;