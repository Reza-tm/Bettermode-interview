import { Router } from "express";
import { authRouter } from "@/api/auth/routes.ts";

// We can read api route from filename
const router = Router();

router.use("/auth", authRouter);

export default router;
