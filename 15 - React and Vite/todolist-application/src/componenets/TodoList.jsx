import { useState } from "react";
import "../App.css";

function TodoList() {
  // [] - todo Array
  // ['Todo1', 'Todo2', 'Todo3']
  // useState()
  // [element1, element2]
  // element1 - current state of the value
  // element2 - function that updates the value of element1

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // todos = []
  // inputValue = "Todo1"

  const addTodo = () => {
    const cleanedInputValue = inputValue.trim();
    if (cleanedInputValue) {
      // 1. Using push
      // todos.push(inputValue);
      // setTodos([...todos]);
      const newTodoObject = {
        text: cleanedInputValue,
        completed: false,
      };
      // 2. Using spread operator
      setTodos([...todos, newTodoObject]);
      setInputValue("");
      // N: We need to pass a new array whenever we want to update.
    }
  };

  // {} - JavaScript Code (Code Block)
  // () - JavaScript XML (Combination of JavaScript and HTML)

  const deleteTodo = (index) => {
    // .filter(): create a new array with elements that passed the test condition.
    // Syntax: .filter((currentElement, currentElementIndex) => {})
    // _ as a paramater name, it means you didn't use that paramater.
    const updatedTodos = todos.filter(
      (_, currentTodoIndex) => currentTodoIndex !== index
    );
    setTodos(updatedTodos);
  };
  // Old: ["Todo 1", "Todo 2"]
  // Index: 1
  // New: ["Todo 1"]

  /*
    .map(): create a new array by applying a function to each element of the original array
    Syntax: .map((currentElement, currentElementIndex) => {})
  */

  const toggleTodoCompletion = (index) => {
    const updatedTodos = todos.map((currentTodoObject, currentTodoIndex) => {
      if (currentTodoIndex === index) {
        const newTodoObject = {
          ...currentTodoObject,
          completed: !currentTodoObject.completed,
        };
        return newTodoObject;
      } else {
        return currentTodoObject;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={inputValue}
        onChange={(event) => {
          console.log(event.target.value);
          setInputValue(event.target.value);
        }}
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((currentTodoObject, currentTodoObjectIndex) => (
          <li key={currentTodoObjectIndex}>
            <input
              type="checkbox"
              checked={currentTodoObject.completed}
              onChange={() => toggleTodoCompletion(currentTodoObjectIndex)}
            />
            {currentTodoObject.text}
            <button
              className="delete-btn"
              onClick={() => deleteTodo(currentTodoObjectIndex)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
