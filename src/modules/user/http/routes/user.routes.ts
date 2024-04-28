import { authenticate } from "@/app/middlewares/authentication/repository/authenticate-jwt-repository";
import type { FastifyInstance } from "fastify";
import { userController } from "../controllers/user.contoller";

async function userRoutes(app: FastifyInstance) {
	app.post("/user/new", userController.create);
	app.post("/user/authenticate", userController.index);
	app.get(
		"/user/list",
		{ preHandler: [authenticate.verifyAuthenticated] },
		userController.show,
	);
}

export { userRoutes };
