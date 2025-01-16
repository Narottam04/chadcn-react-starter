import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CreateNewCard() {
  return (
    <Card className="w-[350px] h-[200px] border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors duration-300">
      <Button
        variant="ghost"
        className="w-full h-full flex flex-col items-center justify-center text-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
      >
        <Plus size={48} />
        <span className="mt-2 text-lg font-semibold">Create New Process</span>
      </Button>
    </Card>
  );
}

interface ProcessCardProps {
  processName: string;
  date: string;
}

export function ProcessCard({ processName, date }: ProcessCardProps) {
  return (
    <Card className="w-[350px] h-[200px] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
      <div className="flex-grow" />
      <div>
        <h3 className="text-xl  font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {processName}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{date}</p>
      </div>
    </Card>
  );
}
