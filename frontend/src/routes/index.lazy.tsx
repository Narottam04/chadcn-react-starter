import { CreateNewCard, ProcessCard } from "@/components/lvl1Components/Cards";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="">
      <h1 className="text-lg font-semibold md:text-2xl mb-8">
        Create Or Edit New Process
      </h1>
      <div className="flex gap-4 flex-wrap">
        <CreateNewCard />
        <ProcessCard processName="How to ask out a gurl!" date="04-05-2002" />
        <ProcessCard processName="Simpmaxxing Process" date="04-05-2002" />
        <ProcessCard
          processName="How to be a sigma and increase aura Process"
          date="04-05-2002"
        />
        <ProcessCard processName="Simpmaxxing Process" date="04-05-2002" />
      </div>
    </div>
  );
}
