import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
    console.log("Get all posts");

    try {
        const posts = await prisma.post.findMany()
        
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get all post"})
    }
};

export const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await prisma.post.findUnique({
            where: {id}
        })
        
        res.status(200).json(post)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to get post"})
    }
};

export const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userID;

    try {
        const newPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenUserId,
                postDetail: {
                    create: body.postDetail
                }
            }
        })

        res.status(200).json(newPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to add new post"})
    }
};

export const updatePost = async (req, res) => {
    console.log("Updates post");

    try {
        
        res.status(200).json()
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to update post"})
    }
};

export const deletePost = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userID;

    try {
        const post = await prisma.post.findUnique({
            where: {id}
        })

        if (post.userId !== tokenUserId) {
            return res.status(403).json({ message: "Not Authorized"})
        }

        await prisma.post.delete({
            where: {id}
        })

        res.status(200).json({ message: "Post deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Failed to delete post"})
    }
};