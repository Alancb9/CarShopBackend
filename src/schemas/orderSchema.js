import {z} from 'zod';

//Esquema para validar la orden
export const orderValidationSchema = z.object({
    username: z.string({   
        required_error: 'required username',
    }),
    id: z.string({
        required_error: 'required id',
    }),
    state: z.string({
        required_error: 'required state',
    }),
});