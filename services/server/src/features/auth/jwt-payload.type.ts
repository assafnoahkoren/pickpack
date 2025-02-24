export type JwtPayload = {
	sub: string;
	phoneNumber: string;
	"https://hasura.io/jwt/claims": Record<string, string | string[] | number>;
}