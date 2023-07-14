import { z } from 'zod';

const valueSchema = z.object({
    base: z.string({ invalid_type_error: 'O valor "De:" deve ser uma moeda valida.' })
        .nonempty('Insira a moeda que sera convertido.')
        .refine((item) => {
            let test = Number(item);
            return isNaN(test) ? true : false;
        }, 'Insira uma moeda valida no campo "De:".')
        .refine((item) => !item ? false : true, 'Campo "De:" não informado.'),

    end: z.string({ invalid_type_error: 'O valor "Para:" deve ser uma moeda valida.' })
        .nonempty('Insira para qual moeda quer converter.')
        .refine((item) => {
            let test = Number(item);
            return isNaN(test) ? true : false;
        }, 'Insira uma moeda valida no campo "Para".')
        .refine((item) => !item ? false : true, 'Campo "Para:" não informado.'),


    value: z.number({ invalid_type_error: 'Campo "Valor:" precisa ser numeros.' })
        .positive('O valor a converter deve ser maior que 0.')
        .refine((item) => !item ? false : true, 'Valor a converter não informado.'),
}).superRefine((arg, ctx) => {

    if (arg.base === arg.end) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Moedas iguais não podem ser convertidas.'
        });
    };
});


export const runValidations = (base: string, end: string, value: string) => {

    const numberValid = currencyFormat(value);
    const result = valueSchema.safeParse({ base, end, value: numberValid });

    const responseSchema: Record<string, any> = {

        validate: true,
        base: {
            response: true,
            error: ''
        },
        end: {
            response: true,
            error: ''
        },
        value: {
            response: true,
            error: ''
        },
        differentCoins: {
            response: true,
            error: ''
        },
    };

    if (result.success) {
        return responseSchema;
    }
    else {
        result.error.format((error) => {

            const path = error.path[0];
            if (path) {
                responseSchema[path] = {
                    response: false,
                    error: error.message
                };
            }
            else {
                responseSchema.differentCoins = {
                    response: false,
                    error: error.message
                };
            };
        });

        responseSchema.validate = false;
        return responseSchema;
    };
};

export function currencyFormat(value: string): number | null {
    let number = Number(value.replaceAll('.', '').replace(',', '.'));
    if (isNaN(number)) {
        return null;
    }
    else {
        return number;
    };
};