import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
    console.log("Get all posts");

    res.status(200).json
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get all post"})
    }
};

export const getPost = async (req, res) => {
    console.log("Get this post");

    res.status(200).json
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get post"})
    }
};

export const addPost = async (req, res) => {
    console.log("New post");

    res.status(200).json
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to add new post"})
    }
};

export const updatePost = async (req, res) => {
    console.log("Updates post");

    res.status(200).json
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update post"})
    }
};

export const deletePost = async (req, res) => {
    console.log("Deleted post");

    res.status(200).json
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to delete post"})
    }
};