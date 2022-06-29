import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginUserDto): Promise<void>;
    registration(dto: CreateUserDto): Promise<{
        token: string;
    }>;
}
