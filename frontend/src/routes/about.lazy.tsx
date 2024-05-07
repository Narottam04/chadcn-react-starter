import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">About Page</h1>
    </div>
  );
}
