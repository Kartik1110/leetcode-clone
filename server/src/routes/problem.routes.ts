import { Router, Request, Response } from "express";
import { authenticateJwt } from "../middlewares/auth";
import { PrismaClient } from "@prisma/client";

const problemsRouter = Router();
const prisma = new PrismaClient();

/* GET - Problems */
problemsRouter.get(
  "/problems",
  authenticateJwt,
  //   validate(ProblemsSchema),
  async (req: Request, res: Response) => {
    const problemsList = await prisma.problems.findMany();
    if (problemsList.length > 0) {
      res.status(200).json(problemsList);
    } else {
      res.status(404).json({ message: "No problems found" });
    }
  }
);

/* GET - Problems by id */
problemsRouter.get("/problem/:id", authenticateJwt, async (req: Request, res: Response) => {
  const problemId = req.params.id;
  const problem = await prisma.problems.findFirst({ where: { id: problemId } });
  if (!problem) {
    return res.status(404).json({ error: "problem not found" });
  }

  res.status(200).json(problem);
});

/* POST - Submissions */

/* ADMIN - create questions */
// adminRouter.post('/admin/questions')

export default problemsRouter;
