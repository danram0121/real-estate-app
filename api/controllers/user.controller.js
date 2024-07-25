import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma.js';

export const getUsers = async (req, res) => {
    console.log("getUsers");

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "failed to get users"});
    }
}

export const getUser = async (req, res) => {
    console.log("getUser");

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "failed to get user"});
    }
}

export const updateUser = async (req, res) => {
    console.log("updateUser");

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "failed to update user"});
    }
}

export const deleteUser = async (req, res) => {
    console.log("deleteUser");
    
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "failed to delete user"});
    }
}