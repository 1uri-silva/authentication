import { ZodError, type ZodObject, type ZodRawShape } from "zod";

export function validateSchema<T>(
	schema: ZodObject<ZodRawShape>,
	data: unknown,
) {
	try {
		const schemaValidate = schema.parse(data) as T;

		return schemaValidate;
	} catch (error) {
		const err = error as ZodError;

		throw new ZodError(err.issues);
	}
}
