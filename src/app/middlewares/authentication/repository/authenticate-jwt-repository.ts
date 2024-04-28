import jwt, { type JsonWebTokenError, type JwtPayload } from "jsonwebtoken";

import { BadRequest } from "@/app/utils/bad-request";
import type {
	DoneFuncWithErrOrRes,
	FastifyReply,
	FastifyRequest,
} from "fastify";

import { envSchema } from "@/app/utils/env";
import type { AuthenticateRepository } from "../repositories/authenticate-repositories";

class AuthenticateJwtRepository implements AuthenticateRepository {
	authenticate(payload: string): string {
		const token = jwt.sign(payload, envSchema.KEY_JWT_SECRET);

		return token;
	}

	verifyAuthenticated(
		request: FastifyRequest,
		_reply: FastifyReply,
		done: DoneFuncWithErrOrRes,
	) {
		const token = request.headers.authorization;

		if (!token) {
			throw new BadRequest("token is not provider");
		}

		try {
			jwt.verify(token, envSchema.KEY_JWT_SECRET) as JwtPayload;

			done();
		} catch (error) {
			const err = error as JsonWebTokenError;

			throw new BadRequest(err.message, 401);
		}
	}
}

export const authenticate = new AuthenticateJwtRepository();
