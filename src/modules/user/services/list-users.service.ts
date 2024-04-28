import type { IUserRepositories } from "../repositories/user-repositories";

export class ListUsersService {
	private userRepository;
	constructor(userRepository: IUserRepositories) {
		this.userRepository = userRepository;
	}

	async list() {
		const users = await this.userRepository.findByAllUsers();

		return { users };
	}
}
