import { userRoutes } from "@/modules/user/http/routes/user.routes";
import fastify from "fastify";

export const app = fastify({
	logger: true,
});

app.register(userRoutes);
