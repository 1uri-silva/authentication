import type { Users as User } from "@prisma/client";

export interface IUserRepositories {
	create(user: User): Promise<User>;
	findByAllUsers(): Promise<User[]>;
	findByEmail(email: string): Promise<User | null>;
}
