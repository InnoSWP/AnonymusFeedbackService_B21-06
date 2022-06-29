import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from 'src/users/user.model';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/login-user.dto';
export declare class AuthService {
    private userRepository;
    private usersService;
    private jwtService;
    constructor(userRepository: typeof User, usersService: UsersService, jwtService: JwtService);
    login(dto: LoginUserDto): Promise<void>;
    registration(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    generateToken(user: User): Promise<{
        token: string;
    }>;
}
