import { taskColumns as columns } from "@/components/tasks/Columns";
import DataTable from "@/components/shared/DataTable";
import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";
import { tasks } from "@/data/task";

const TaskList = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between pb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Tasks</h1>
          <small className="text-slate-500">
            Create and Manage your tasks and track progress
          </small>
        </div>
        <Button variant="default" className="cursor-pointer">
          <BadgePlus className="h-5 w-5" />
          <span>New Task</span>
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={tasks}
        type="Tasks"
        filterColumn="title"
      />
    </div>
  );
};

export default TaskList;
