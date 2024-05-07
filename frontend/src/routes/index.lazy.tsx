import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="">
      <h1 className="text-lg font-semibold md:text-2xl mb-8">
        Welcome To Dashboard
      </h1>
    </div>
  );
}
