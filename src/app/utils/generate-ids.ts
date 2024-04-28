export function generateTimestampBasedID() {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const alphabetLength = alphabet.length;

	const timestamp = new Date().getTime();

	const randomNumber = Math.floor(Math.random() * 10000);

	const randomChar = alphabet.charAt(
		Math.floor(Math.random() * alphabetLength),
	);

	const id = `${timestamp.toString()}-${randomNumber.toString()}-${randomChar}`;

	return id;
}
