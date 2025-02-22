import { Injectable } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class JwtService {
	constructor(private readonly jwtService: NestJwtService) {}

	async generateToken(user: User): Promise<string> {
		const payload = {
			sub: user.id,
			phone_number: user.phone_number
		};

		return this.jwtService.signAsync(payload);
	}

	async verifyToken(token: string): Promise<any> {
		try {
			return await this.jwtService.verifyAsync(token);
		} catch (error) {
			return null;
		}
	}
}
