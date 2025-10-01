import StatusBadge from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { tasks } from "@/data/task";
import { dateFormatter } from "@/lib/utils";
import { FilePenLine, Trash } from "lucide-react";
import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";

export const loader = ({ params }: LoaderFunctionArgs) => {
  const task = tasks.find(
    (task) =>
      task.projectId === Number(params.projectId) &&
      task.id === Number(params.taskId)
  );
  console.log(task);
  return task;
};

const TaskDetails = () => {
  const taskData = useLoaderData<ReturnType<typeof loader>>();
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-end gap-2 m-0">
          <h1 className="font-bold text-5xl">{taskData?.title}</h1>
          <StatusBadge status={taskData?.status || "unknown"} />
        </div>
        <div className="flex gap-2">
          <Button variant="default">
            <FilePenLine className="h-4 w-4" />
            <span>Edit Task</span>
          </Button>
          <Button variant="destructive">
            <Trash className="h-4 w-4" />
            <span>Delete Task</span>
          </Button>
        </div>
      </div>
      <Card className="gap-0">
        <CardHeader>
          <CardTitle className="font-semibold text-xl">Details</CardTitle>
          <CardDescription>{taskData?.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 grid grid-cols-3">
          <div className="mt-6">
            <p className="text-muted-foreground">Due Date</p>
            {taskData?.dueDate ? dateFormatter(taskData.dueDate) : "N/A"}
          </div>
          <div className="mt-6">
            <p className="text-muted-foreground">Assignee</p>
            <p>{taskData?.assignee}</p>
          </div>
          <div className="mt-6">
            <p className="text-muted-foreground">Priority</p>
            <p>{taskData?.priority}</p>
          </div>
          <div className="mt-6">
            <p className="text-muted-foreground">Category</p>
            <p>{taskData?.category}</p>
          </div>
        </CardContent>
        <div className="mt-6 p-4">
          <p>Comments</p>
          <Input placeholder="Add a comment" />
        </div>
      </Card>
    </div>
  );
};

export default TaskDetails;
