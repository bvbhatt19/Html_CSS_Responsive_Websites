import React, { useState } from "react";
import TodoInput from "./TodoInput";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const uniqueId = uuidv4();
    setTodos([...todos, { id: uniqueId, text: newTodo }]);
    setNewTodo("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Todo List</h1>
      <TodoInput
        value={newTodo}
        onChange={handleInputChange}
        onAdd={handleAddTodo}
      />
      <ul className="mt-6 w-full max-w-md space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white p-3 rounded shadow"
          >
            <span>{todo.text}</span>
            <button
              onClick={() =>
                setTodos(todos.filter((item) => item.id !== todo.id))
              }
              className="text-red-500 hover:text-red-700"
            >
              <MdDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
