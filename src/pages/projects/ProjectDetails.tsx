import { Button } from "@/components/ui/button";
import { projects } from "@/data/project";
import { useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import { FilePenLine, PlusCircle, Trash } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dateFormatter } from "@/lib/utils";
import DataTable from "@/components/shared/DataTable";
import { taskColumns } from "@/components/tasks/Columns";
import { tasks } from "@/data/task";
import StatusBadge from "@/components/shared/StatusBadge";

export const loader = ({ params }: LoaderFunctionArgs) => {
  const projectDetail = projects.find(
    (project) => project.id === Number(params.projectId)
  );
  const associatedTasks = tasks.filter(
    (task) => task.projectId === Number(params.projectId)
  );
  return { projectDetail, associatedTasks };
};

const ProjectDetails = () => {
  const { projectDetail, associatedTasks } =
    useLoaderData<ReturnType<typeof loader>>();

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between pb-8">
        <div>
          <div className="flex items-end gap-2 m-0">
            <h1 className="font-bold text-5xl">{projectDetail?.name}</h1>
            <StatusBadge status={projectDetail?.status || "unknown"} />
          </div>
          <span className="text-sm text-muted-foreground">
            Owner: {projectDetail?.owner}
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="default">
            <FilePenLine className="h-4 w-4" />
            <span>Edit Project</span>
          </Button>
          <Button variant="destructive">
            <Trash className="h-4 w-4" />
            <span>Delete Project</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="font-semibold text-xl">Details</CardTitle>
            <CardDescription>{projectDetail?.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 grid grid-cols-3">
            <div>
              <p className="text-muted-foreground">Owner</p>
              <p>{projectDetail?.owner}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Start Date</p>
              <p>
                {projectDetail?.startDate
                  ? dateFormatter(projectDetail.startDate)
                  : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">End Date</p>
              <p>
                {projectDetail?.endDate
                  ? dateFormatter(projectDetail.endDate)
                  : "N/A"}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="flex-3">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Tasks</CardTitle>
            <CardDescription>
              List of tasks associated with this project will be displayed here.
            </CardDescription>
            <CardAction>
              <Button variant="default" className="cursor-pointer">
                <PlusCircle className="h-4 w-4" />
                <span>New Task</span>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={taskColumns}
              data={associatedTasks}
              type="Tasks"
              filterColumn="title"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetails;
