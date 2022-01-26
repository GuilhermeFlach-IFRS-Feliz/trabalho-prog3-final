import { Router } from "express";
import users from "./users";
import ideas from "./ideas";
import votes from "./votes";

const router = Router();

router.use("/users", users);
router.use("/ideas", ideas);
router.use("/votes", votes);

export default router;
