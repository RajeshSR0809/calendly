import  { z } from "zod";



export const createEventTypeSchema = z.object({

    title: z.string().min(1).max(100),
    description: z.string().min(1).max(1000),
    slug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/, 'Slug may only contain lowercase letters, numbers, and hyphens').optional(),
    isActive: z.boolean().default(true),

    durationMinutes: z.number().min(15).max(120).default(30),
    locationType: z.enum(["online", "in-person"]).default("online"),
    locationValue: z.string().optional(),
    bufferBeforMinutes: z.number().min(0).max(120).default(0),
    bufferAfterMinutes: z.number().min(0).max(120).default(0),

});

export const updateEventTypeSchema = createEventTypeSchema.partial();

export type createEventTypeDto = z.infer<typeof createEventTypeSchema>;
export type updateeventTypeDto = z.infer<typeof updateEventTypeSchema>;