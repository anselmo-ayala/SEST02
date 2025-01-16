import { useState, useEffect } from "react";

function UseEffect() {
  // state: refers to data/information about a component that often change while you are using the component.
  // state variables: todos, inputValue
  // useState(): return an array with 2 elements.
  // 1. state variable
  // 2. function to update the state variable
  // Syntax:
  // const [state variable, function to update the state variable] = useState(initial value)
  // Convention: nakasanayan
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  // useEffect - allow us to perform side effects.
  // State changes can often result to side effects.
  // Syntax: useEffect(() => {}, [])
  // useEffect(() => {}) - Run after re-render.

  useEffect(() => {
    // Perform the side effect.
    console.log("Component mounts.");

    return () => {
      console.log("Component unmounts.");
    };
  }, [count]);

  const increment = () => {
    setCount(() => count + 1);
  };

  const decrement = () => {
    setCount2(() => count2 - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseEffect;
