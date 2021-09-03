import { Component, createSignal } from "solid-js";

export { Counter };

const Counter: Component = () => {
  const [count, setCount] = createSignal(2);
  return (
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((prev) => prev + 1)}>
      Counter {count()}
    </button>
  );
};
