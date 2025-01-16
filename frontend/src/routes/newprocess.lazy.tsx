import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/newprocess")({
  component: NewProcess,
});

function NewProcess() {
  return (
    <div>
      <h1>New Process</h1>
    </div>
  );
}
