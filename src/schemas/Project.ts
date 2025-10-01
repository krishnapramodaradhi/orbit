import z from "zod";

export const ProjectSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  endDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    })
    .optional(),
  status: z.enum(["Not Started", "In Progress", "Completed", "On Hold"]),
  owner: z.string().min(1, "Owner name is required"),
});

export type Project = z.infer<typeof ProjectSchema>;
