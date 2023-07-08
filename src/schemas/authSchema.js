import { z } from "zod";

//Esquema para validar el registro con la libreria zod
export const recordValidationSchema = z.object({
  username: z.string({
    required_error: "required data", //Mensaje de error
  }), //Validamos que el username sea dato string
  email: z
    .string({
      required_error: "required data",
    })
    .email({
      message: "the email is wrong",
    }), //Validamos que el email tenga el formato correspondiente
  password: z
    .string({
      required_error: "required data",
    })
    .min(7, {
      message: "The password must have a minimum of 7 characters.",
    })
    .regex(/\d/, {
      message: "the password must contain at least one number",
    })
    // .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    //   message: "password must contain at least one special character",
    // }),
});

//Esquema para validar el login con la libreria zod
export const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: "required data",
    })
    .email({
      message: "the email is wrong",
    }), //Validamos que el email tenga el formato correspondiente
  password: z
    .string({
      required_error: "required data",
    })
    .min(7, {
      message: "The password must have a minimum of 7 characters.",
    })
    // .regex(/\d/, {
    //   message: "the password must contain at least one number",
    // })
    // .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    //   message: "password must contain at least one special character",
    // }),
});
