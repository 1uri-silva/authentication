import { validateSchema } from "@/app/utils/validate-schema";
import type { FastifyReply, FastifyRequest } from "fastify";
import { userRepository } from "../../infra/repository/user-repository";
import { type UserSchemaRequest, userSchema } from "../../schemas/user-request";
import { AuthenticateUserService } from "../../services/authenticate-user.service";
import { CreateUserService } from "../../services/create-user.service";
import { ListUsersService } from "../../services/list-users.service";

class UserController {
	async create(request: FastifyRequest, reply: FastifyReply) {
		const { email, password } = validateSchema<UserSchemaRequest>(
			userSchema,
			request.body,
		);

		const createUserService = new CreateUserService(userRepository);

		const { user } = await createUserService.create(email, password);

		return reply.status(201).send(user);
	}

	async index(request: FastifyRequest, reply: FastifyReply) {
		const { email, password } = validateSchema<UserSchemaRequest>(
			userSchema,
			request.body,
		);

		const createUserService = new AuthenticateUserService(userRepository);

		const { token } = await createUserService.authenticate(email, password);

		return reply.status(200).send({ token });
	}

	async show(_request: FastifyRequest, reply: FastifyReply) {
		const listUsersServices = new ListUsersService(userRepository);

		const { users } = await listUsersServices.list();

		return reply.status(200).send(users);
	}
}

export const userController = new UserController();
