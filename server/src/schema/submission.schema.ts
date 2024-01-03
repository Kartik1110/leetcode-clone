import { z } from "zod";

export const SubmissionSchema = z.object({
  problemId: z.string(),
  submission: z.string(),
});

export const SubmissionCreateSchema = z.object({
  body: SubmissionSchema,
});
