import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';


// getUsers not used for this app but could be useful for future projects
// or for admin users
export const getUsers = async (req, res) => {
    console.log("getUsers");

    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "failed to get users"});
    }
};

export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await prisma.user.findUnique({
            where:  {id}
        });
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "failed to get user"});
    }
};

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userID

    const {password, avatar, ...inputs} = req.body;

    if (id !== tokenUserId) { 
        return res.status(403).json({message: "Not Authorized"});
    }

    let updatedPassword = null; 
    try {

        if(password){
            updatedPassword = await bcrypt.hash(password, 10); 
        }

        const updatedUser = await prisma.user.update({
            where: {id},
            data: {
                ...inputs,
                ...(updatedPassword && {password: updatedPassword}), // if updatedPassword is not null, add password to data
                ...(avatar && {avatar}),
            }
        })

        const {password: userPassword, ...userInfo} = updatedUser;

        res.status(200).json(userInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "failed to update user"});
    }
};

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userID

    if (id !== tokenUserId) { 
        return res.status(403).json({message: "Not Authorized"});
    }

    try {
        await prisma.user.delete({
            where: {id}
        })
        res.status(200).json({message: "user deleted"});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "failed to delete user"});
    }
};