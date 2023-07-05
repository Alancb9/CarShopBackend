import { z } from "zod";

export const taskValidationSchema = z.object({
  titleTask: z.string({
    required_error: "The title is required",
  }), //Validamos que el username sea dato string
  descriptionTask: z.string({
    required_error: "the description must be a text",
  }),
  dateTask: z.string().datetime().optional(), //Validamos que sea una fecha y que sea opcional
});
