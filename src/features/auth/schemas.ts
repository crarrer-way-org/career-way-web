import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Minimum of 8 characters required"),
});
