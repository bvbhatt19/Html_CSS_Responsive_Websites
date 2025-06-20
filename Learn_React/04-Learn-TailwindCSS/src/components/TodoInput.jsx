import React from "react";

function TodoInput({ value, onChange, onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 w-full max-w-md"
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a task"
        className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;
