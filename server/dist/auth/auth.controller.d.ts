import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginUserDto): Promise<{
        token: string;
    }>;
    registration(dto: LoginUserDto): Promise<{
        token: string;
    }>;
    check(req: Request): Promise<{
        isAuth: boolean;
    }>;
}
