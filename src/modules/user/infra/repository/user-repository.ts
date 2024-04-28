import { connectionPrisma } from "@/app/connections/prisma";

import type { Users as User } from "@prisma/client";
import type { IUserRepositories } from "../../repositories/user-repositories";

class UserRepository implements IUserRepositories {
	private connectionPrisma;
	constructor() {
		this.connectionPrisma = connectionPrisma;
	}

	async create({ email, id, password }: User): Promise<User> {
		const user = await this.connectionPrisma.users.create({
			data: {
				email,
				id,
				password,
			},
		});

		return user;
	}

	async findByEmail(email: string): Promise<User | null> {
		const user = await this.connectionPrisma.users.findUnique({
			where: { email },
		});

		return user;
	}

	async findByAllUsers(): Promise<User[]> {
		const user = await this.connectionPrisma.users.findMany();
		
		return user;
	}
}

export const userRepository = new UserRepository();
