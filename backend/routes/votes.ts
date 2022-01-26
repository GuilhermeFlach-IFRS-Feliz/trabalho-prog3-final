import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();

const prisma = new PrismaClient();

// Cast vote (Create if not exists)
router.post("/cast", async (req, res) => {
  try {
    const { userId, ideaId, voteType } = req.body;

    const castVote = await prisma.vote.upsert({
      where: {
        voteId: {
          userId: Number(userId),
          ideaId: Number(ideaId),
        },
      },

      update: {
        voteType: Boolean(voteType),
      },

      create: {
        userId: Number(userId),
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

export default router;
