import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // create a new user and save it to the database
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,

        }
    })
    console.log(newUser);
}

export const login = (req, res) => {
    // db operations

}

export const logout = (req, res) => {
    // db operations

}

