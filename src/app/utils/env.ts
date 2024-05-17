import { z } from "zod";

export const envSchema = z
	.object({
		KEY_JWT_SECRET: z.string(),
		SERVER_PORT: z.number().default(3000),
		DATABASE_URL: z.string(),

		POSTGRES_DB: z.string(),
		POSTGRES_USER: z.string(),
		POSTGRES_PASSWORD: z.string(),
	})
	.parse(process.env);
