import { Component } from "solid-js";
import { Counter } from "./Counter";

const Page: Component = () => {
  return (
    <>
      <div class="prose">
        <h1>Welcome</h1>
        This page is: {"{{ test }}"}
        <ul>
          <li>Rendered to HTML.</li>
          <li>
            Interactive. <Counter />
          </li>
        </ul>
      </div>
    </>
  );
};

export { Page };
