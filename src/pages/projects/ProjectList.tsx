import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";
import DataTable from "@/components/shared/DataTable";
import { projectColumns as columns } from "@/components/projects/Columns";
import { projects } from "@/data/project";

const ProjectList = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between pb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Projects</h1>
          <small className="text-slate-500">
            Create a new project or manage an existing one
          </small>
        </div>
        <Button variant="default" className="cursor-pointer">
          <BadgePlus className="h-5 w-5" />
          <span>New Project</span>
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={projects}
        type="Projects"
        filterColumn="name"
      />
    </div>
  );
};

export default ProjectList;
