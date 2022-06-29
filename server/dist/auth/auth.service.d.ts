import { User } from 'src/users/user.model';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/login-user.dto';
export declare class AuthService {
    private userRepository;
    private usersService;
    private jwtService;
    constructor(userRepository: typeof User, usersService: UsersService, jwtService: JwtService);
    login(dto: LoginUserDto): Promise<{
        token: string;
    }>;
    registration(dto: LoginUserDto): Promise<{
        token: string;
    }>;
    isTokenValid(token: string): Promise<{
        isAuth: boolean;
    }>;
    private generateToken;
    private validateUser;
}
