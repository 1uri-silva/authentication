import { z } from "zod";

const userSchema = z.object({
	password: z.string(),
	email: z.string().email(),
});

type UserSchemaRequest = z.infer<typeof userSchema>;

export { userSchema, type UserSchemaRequest };
