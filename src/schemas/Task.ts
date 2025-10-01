import { z } from "zod";

export const TaskSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1, "Task title is required"),
  description: z.string().min(1, "Description is required"),
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  status: z.enum(["Not Started", "In Progress", "Completed", "Blocked"]),
  assignee: z.string().min(1, "Assignee name is required"),
  priority: z.enum(["Low", "Medium", "High", "Critical"]),
  category: z.enum(["Feature", "Bug", "Improvement", "Documentation"]),
  projectId: z.number().int().positive(),
});

export type Task = z.infer<typeof TaskSchema>;
