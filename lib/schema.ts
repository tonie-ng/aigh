import { z } from "zod";

export const FormDataSchema = z.object({
  fullname: z.string().min(1, "full name is required"),
  gender: z.string().min(1, "gender is required"),
  email: z
    .string()
    .min(1, "email is required")
    .email("provide a valid email address"),
  phonenumber: z.coerce.number({
		invalid_type_error: "expected a number"
	}).min(1, "phone number is required"),
  dateofbirth: z.coerce
    .date()
    .max(new Date("2008-01-01"), { message: "must be up to 16" }),
  nationality: z.string().min(1, "nationality is required"),
  university: z.string().min(1, "university is required"),
  course: z.string().min(1, "course of study is required"),
  yearofstudy: z.coerce
    .number()
    .min(1, "year of study is required")
    .max(8, "year of study is too high"),
  employmentstatus: z.string().min(1, "employment status is required"),
  note: z.string(),
});

export type Inputs = z.infer<typeof FormDataSchema>;
