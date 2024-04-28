import { z } from "zod";

export const envSchema = z
	.object({
		KEY_JWT_SECRET: z.string(),
		SERVER_PORT: z.number(),
		DATABASE_URL: z.string(),

		POSTGRES_DB: z.string(),
		POSTGRES_USER: z.string(),
		POSTGRES_PASSWORD: z.string(),
	})
	.parse(process.env);

