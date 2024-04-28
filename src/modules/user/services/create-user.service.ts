import bcrypt from "bcryptjs";

import { BadRequest } from "@/app/utils/bad-request";
import { generateTimestampBasedID } from "@/app/utils/generate-ids";
import type { IUserRepositories } from "../repositories/user-repositories";

export class CreateUserService {
	private userRepository;
	constructor(userRepository: IUserRepositories) {
		this.userRepository = userRepository;
	}

	async create(email: string, password: string) {
		const searchUser = await this.userRepository.findByEmail(email);

		if (searchUser) {
			throw new BadRequest("user already exists");
		}

		const hashPassword = await bcrypt.hash(password, 8);

		const user = await this.userRepository.create({
			email,
			id: generateTimestampBasedID(),
			password: hashPassword,
		});

		return { user };
	}
}
