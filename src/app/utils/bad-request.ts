export class BadRequest extends Error {
	private statusCode;
	constructor(message: string, statusCode = 400) {
		super(message);

		this.message = message;
		this.statusCode = statusCode;
	}
}
