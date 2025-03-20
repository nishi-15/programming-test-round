import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../modules/Users';

export const register = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, role });
    await user.save();
    res.json({ message: 'User registered' });
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            res.status(400).json({ message: 'User not found' });
            return;
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            'ab4c4967d67bfa695709a2408322b021fa8779126b1288f07899f5a0415fbb11',
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};