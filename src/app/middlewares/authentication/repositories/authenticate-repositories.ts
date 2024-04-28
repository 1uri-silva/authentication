import type {
	DoneFuncWithErrOrRes,
	FastifyReply,
	FastifyRequest,
} from "fastify";

export interface AuthenticateRepository {
	authenticate(payload: string): string;
	verifyAuthenticated(
		request: FastifyRequest,
		reply: FastifyReply,
		done: DoneFuncWithErrOrRes,
	): void;
}
