import type { ZodSchema } from 'zod';
import type { Request, Response, NextFunction } from 'express';
import { error } from 'console';

export function validate <T>(schema: ZodSchema<T>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const parsed = schema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json ({
                error:'Validation error',
                details: parsed.error.flatten()
            });
        }
        //attach parsed data for controller
        (req as any).data = parsed.data;
        next();
    };
}