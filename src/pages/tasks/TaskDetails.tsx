import StatusBadge from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { projects } from "@/data/project";
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
  const project = projects.find(
    (project) => project.id === Number(params.projectId)
  );
  return { project, task };
};

const TaskDetails = () => {
  const { project, task } = useLoaderData<ReturnType<typeof loader>>();
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-end gap-2 m-0">
          <h1 className="font-bold text-5xl">{task?.title}</h1>
          <StatusBadge status={task?.status || "unknown"} />
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
          <CardTitle className="font-semibold text-xl">Task Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 grid grid-cols-3">
          {task &&
            (Object.keys(task) as Array<keyof typeof task>).map((key) => {
              let data = task[key];
              if (key === "dueDate") {
                data = dateFormatter(data as string);
              }
              return (
                <div className="mt-6">
                  <p className="text-muted-foreground capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  {data}
                </div>
              );
            })}
        </CardContent>
        <h2 className="px-6 pt-6 text-xl font-semibold">Project Details</h2>
        <CardContent className="grid grid-cols-3">
          {project &&
            (Object.keys(project) as Array<keyof typeof project>).map((key) => {
              let data = project[key];
              if (key === "startDate" || key === "endDate") {
                data = dateFormatter(data as string);
              }
              return (
                <div className="mt-6">
                  <p className="text-muted-foreground capitalize">{key}</p>
                  {data}
                </div>
              );
            })}
        </CardContent>
        <div className="mt-6 p-6 flex flex-col gap-3">
          <p className="text-xl font-semibold">Comments</p>
          <Textarea placeholder="Add a comment" />
        </div>
      </Card>
    </div>
  );
};

export default TaskDetails;
