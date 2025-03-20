import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        res.status(403).json({ message: 'Access Denied' });
        return;
    }

    jwt.verify(token, 'ab4c4967d67bfa695709a2408322b021fa8779126b1288f07899f5a0415fbb11', (err, decodedUser) => {
        if (err) {
            res.status(403).json({ message: 'Invalid Token' });
            return;
        }

        req.user = decodedUser;
        next();
    });
};