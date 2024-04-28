import { app } from "./app/server/server";
import { envSchema } from "./app/utils/env";

app.listen({
	host: "0.0.0.0",
	port: envSchema.SERVER_PORT,
});
