import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();

const prisma = new PrismaClient();

// Create Idea
router.post("/create", async (req, res) => {
  try {
    const { title, text, userId } = req.body;
    const idea = await prisma.idea.create({
      data: {
        title: title,
        text: text,
        userId: Number(userId),
      },
    });

    // Return the created idea
    res.status(200).json(idea);
  } catch (e) {
    res.status(400).json("Erro!");
    console.log(e);
  }
});

// Read idea
router.get("/find/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const selectedIdea = await prisma.idea.findUnique({
      where: {
        id: id,
      },
      include: {
        votes: {
          where : {
            userId : Number(req.signedCookies.userId)
          }
        }
      },
    });

    // Return the selected user
    res.status(200).json(selectedIdea);
  } catch (e) {
    res.status(400).json("Erro!");
    console.log(e);
  }
});

// Delete idea
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deletedIdea = await prisma.idea.delete({
      where: {
        id: id,
      },
    });

    // Return the deleted user
    res.status(200).json(deletedIdea);
  } catch (e) {
    res.status(400).json("Erro!");
    console.log(e);
  }
});

// list all ideas (sort by popularity)
router.get("/best", async (req, res) => {
  try {
    const ideasList = await prisma.idea.findMany({
      include: {
        votes: {
          where : {
            userId : Number(req.signedCookies.userId)
          }
        }
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

// list all ideas (sort by date)
router.get("/latest", async (req, res) => {
  try {
    const ideasList = await prisma.idea.findMany({
      orderBy: {
        date: "desc",
      },
      include: {
        votes: {
          where : {
            userId : Number(req.signedCookies.userId)
          }
        }
      },
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
router.get("/worst", async (req, res) => {
  try {
    const ideasList = await prisma.idea.findMany({
      include: {
        votes: {
          where : {
            userId : Number(req.signedCookies.userId)
          }
        }
      },
    });

    console.table(ideasList);
    // Return the selected user
    res.status(200).json(ideasList);
  } catch (e) {
    res.status(400).json("Erro!");
    console.log(e);
  }
});

export default router;
