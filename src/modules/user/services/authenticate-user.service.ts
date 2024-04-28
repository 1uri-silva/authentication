import bcrypt from "bcryptjs";

import { authenticate } from "@/app/middlewares/authentication/repository/authenticate-jwt-repository";
import { BadRequest } from "@/app/utils/bad-request";
import type { IUserRepositories } from "../repositories/user-repositories";

export class AuthenticateUserService {
	private userRepository;
	constructor(userRepository: IUserRepositories) {
		this.userRepository = userRepository;
	}

	async authenticate(email: string, password: string) {
		const user = await this.userRepository.findByEmail(email);

		if (!user) {
			throw new BadRequest("email/password doe's not match");
		}
		const result = await bcrypt.compare(password, user.password);

		if (!result) {
			throw new BadRequest("email/password doe's not match");
		}

		const token = authenticate.authenticate(
			JSON.stringify({ email: user.email, id: user.id }),
		);

		return { token };
	}
}
