import { z } from "zod";

export const createUserSchema = z.object({
    email: z.email("Invalid email address"),
    name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
    slug: z.string().min(1).max(100).optional(),
});


export const updateUserSchema = createUserSchema.partial()
.refine((data) => (!!(data.email || data.name)) , { message: " At least one field must be provided"}
);




export type CreateUserDto = z.infer<typeof createUserSchema>;
export type UpdateUserDto = z.infer<typeof updateUserSchema>;
