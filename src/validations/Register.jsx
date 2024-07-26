import { z } from "zod";

const schema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name at least 3 characters long" })
      .max(15, { message: "Name can be maximum of 15 characters" }),
    phone: z
      .string()
      .regex(/^\d+$/, { message: "Phone must contain only numbers (0-9)" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  })
  .refine((data) => !data.password || data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password doesn't match",
  });

export default schema;
