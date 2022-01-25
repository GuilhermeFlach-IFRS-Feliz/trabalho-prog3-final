import express from "express";

import { PrismaClient } from "@prisma/client";
import { UserCreationRequest } from "./types/customRequests";


const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get("/", async (req, res) => {
    res.status(200).json("pong")

    console.log("Server is running.")
    
});

app.post("/user/create", async (req, res) => {
    const { username, email, password } = req.body;
    const user = await prisma.user.create({
        data : {
            username : username,
            email : email,
            password : password,
        }
    });

    res.status(200).json(user);
});

app.post("/user/update/:id", async (req, res) => {
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

    res.status(200).json(updatedUser);
});

app.delete("/user/:id", async (req, res) => {
    const id  = req.params.id;
    const deletedUser = await prisma.user.delete({
        where : {
            id : Number(id)
        }
    });

    res.status(200).json(deletedUser);
});

app.listen(3001, () => {
    console.log("------------ SERVER RUNNING ON PORT 3001 ------------")
})