import express from "express";

import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get("/status", async (req, res) => {
    // Simple status system to check if the server is running
    res.status(200).json("Server is running.")
    console.log("Server is running.")
    
});


// USER
    // Create user
    app.post("/users/create", async (req, res) => {
        try {
            const { username, email, password } = req.body;
            const user = await prisma.user.create({
                data : {
                    username : username,
                    email : email,
                    password : password,
                }
            });

            // Return the created user
            res.status(200).json(user);
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    });

    // Read user
    app.get("/users/find/:id", async (req, res) => {
        try {
            const id = Number(req.params.id);
            const selectedUser = await prisma.user.findUnique({
                where : {
                    id : id
                }
            });

            // Return the selected user
            res.status(200).json(selectedUser)
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    })

    // Update user
    app.put("/users/:id", async (req, res) => {
        try {
            const id = Number(req.params.id);
            const { email, password } = req.body;
            const updatedUser = await prisma.user.update({
                where : {
                    id : id
                }, 
                data : {
                    email : email,
                    password : password,
                }
            });

            // Return the updated user
            res.status(200).json(updatedUser);
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    });

    // Delete user
    app.delete("/users/:id", async (req, res) => {
        try {
            const id  = Number(req.params.id);
            const deletedUser = await prisma.user.delete({
                where : {
                    id : id
                }
            });

            // Return the deleted user
            res.status(200).json(deletedUser);
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    });

    // List all users
    app.get("/users/list", async (req, res) => {
        try {
            const userList = await prisma.user.findMany();

            console.table(userList);
            // Return the selected user
            res.status(200).json(userList)
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    });

// IDEA
    // Create Idea
    app.post("/ideas/create", async (req, res) => {
        try {
            const { title, text, userId} = req.body;
            const idea = await prisma.idea.create({
                data : {
                    title : title,
                    text : text,
                    userId : Number(userId)
                }
            });
    
            // Return the created idea
            res.status(200).json(idea);
            
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
        
    });

    // Read idea
    app.get("/ideas/find/:id", async (req, res) => {
        try {
            const id = Number(req.params.id);
            const selectedIdea = await prisma.idea.findUnique({
                where : {
                    id : id
                }
            });

            // Return the selected user
            res.status(200).json(selectedIdea)
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    })

    // Delete idea
    app.delete("/ideas/:id", async (req, res) => {
        try {
            const id  = Number(req.params.id);
            const deletedIdea = await prisma.idea.delete({
                where : {
                    id : id
                }
            });

            // Return the deleted user
            res.status(200).json(deletedIdea);
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    });

    // list all ideas (sort by popularity)
    app.get("/ideas/best", async (req, res) => {
        try {
            const ideasList = await prisma.idea.findMany({


            });

            console.table(ideasList);
            // Return the selected user
            res.status(200).json(ideasList);
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    });

    // list all ideas (sort by date)
    app.get("/ideas/lastest", async (req, res) => {
        try {
            const ideasList = await prisma.idea.findMany({
                orderBy : [
                    {
                        date : "desc"
                    }
                ]

            });

            console.table(ideasList);
            // Return the selected user
            res.status(200).json(ideasList);
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    });

    // list all ideas (sort by popularity)
    app.get("/ideas/worst", async (req, res) => {
        try {
            const ideasList = await prisma.idea.findMany({
                // orderBy : [
                    
                // ],
                include : {
                    votes : true
                }

            });

            console.table(ideasList);
            // Return the selected user
            res.status(200).json(ideasList);
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }
    });


// Votes
    // Cast vote (Create if not exists)
    app.post("/votes/cast", async (req, res) => {
        try {    
            const {userId, ideaId, voteType} = req.body;

            const castVote = await prisma.vote.upsert({
                where : {
                    voteId : {
                        userId : Number(userId),
                        ideaId : Number(ideaId)
                    }
                    
                },

                update : {
                    voteType : Boolean(voteType)
                },

                create : {
                    userId : Number(userId),
                    ideaId : Number(ideaId),
                    voteType : Boolean(voteType)
                }
                
            });

            res.status(200).json(castVote)
        } catch (e) {
            res.status(400).json("Erro!");
            console.log(e);
        }

    });


app.listen(3001, () => {
    console.log("------------ SERVER RUNNING ON PORT 3001 ------------")
})