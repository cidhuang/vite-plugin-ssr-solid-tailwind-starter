import { Component } from "solid-js";
import "./index.css";

export { Page };

const Page: Component = () => {
  return (
    <>
      <div class="prose">
        <h1>About</h1>
        <p class="p-10">A colored page.</p>
      </div>
      <div class="aspect-w-16 aspect-h-9">
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p class="line-clamp-2">
        Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro ut omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil. Qui voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos quos id ut molestiae fugit.
      </p>
    </>
  );
};
