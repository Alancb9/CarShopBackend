import { z } from "zod";

export const taskValidationSchema = z.object({
  client: z.string({
    required_error: "The name client is required",
  }), //Validamos que el username sea dato string
  email: z.string({
    required_error: "the email is required",
  }),
  carStatus: z.string({
    required_error: "the car status is required",
  }),
  orderDate: z.string({
    required_error: "the order date is required",
  }),
  personalIdentification: z.string({
    required_error: "the personal identification is required",
  }),
  carBrand: z.string({
    required_error: "the car brand is required",
  }),
  carModel: z.string({
    required_error: "the car model is required",
  }),
  tankLevel: z.string({
    required_error: "the tank level is required",
  }),
  contactNumber: z.string({
    required_error: "the contact number is required",
  }),
  plaqueCar: z.string({
    required_error: "the plaque car is required",
  }),
  selectedServices: z.array(z.string()),
  idType: z.string({
    required_error: "the id type is required",
  }),
  dateTask: z.string().datetime().optional(), //Validamos que sea una fecha y que sea opcional
});
