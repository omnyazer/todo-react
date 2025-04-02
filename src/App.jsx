import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./redux/TodoSlice";
import { selectTodos, selectCompletedTodos } from "./redux/Selectors";

const App = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Liste des tâches</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={handleAddTodo}>Ajouter</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.texte}
          </li>
        ))}
      </ul>

      <h2>Tâches terminées</h2>
      <ul>
        {completedTodos.map((todo) => (
          <li key={todo.id}>{todo.texte}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;