import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();

const prisma = new PrismaClient();

// Cast vote (Create if not exists)
router.post("/cast", async (req, res) => {
  try {
    // TODO: colocar esse check em uma função/arquivo separado
    if (!req.signedCookies.userId) {
      res.status(401).json("Not logged in!");
      return;
    }
    
    const { ideaId, voteType } = req.body;

    const castVote = await prisma.vote.upsert({
      where: {
        voteId: {
          userId: Number(req.signedCookies.userId),
          ideaId: Number(ideaId),
        },
      },

      update: {
        voteType: Boolean(voteType),
      },

      create: {
        userId: Number(req.signedCookies.userId),
        ideaId: Number(ideaId),
        voteType: Boolean(voteType),
      },
    });

    res.status(200).json(castVote);
  } catch (e) {
    res.status(400).json("Erro!");
    console.log(e);
  }
});

// Delete vote
router.delete("/:ideaId", async (req, res) => {
  try {
    // TODO: colocar esse check em uma função/arquivo separado
    if (!req.signedCookies.userId) {
      res.status(401).json("Not logged in!");
      return;
    }

    const {ideaId} = req.params;

    const deletedVote = await prisma.vote.delete({
      where: {
        voteId: {
          userId: Number(req.signedCookies.userId),
          ideaId: Number(ideaId),
        },
      },
    });

    res.status(200).json(deletedVote);
  } catch (e) {
    res.status(400).json("Erro!");
    console.log(e);
  }
});

// List all users
router.get("/list", async (req, res) => {
  try {
    const votesList = await prisma.vote.findMany();

    console.table(votesList);
    // Return the selected user
    res.status(200).json(votesList);
  } catch (e) {
    res.status(400).json("Erro!");
    console.log(e);
  }
});
export default router;
