import rateLimit from 'express-rate-limit';

export const contactLimiter = rateLimit({
    windowMs: 60  * 1000, // 1 minute
    max: 5, // limit each IP to 5 requests per windowMs
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

