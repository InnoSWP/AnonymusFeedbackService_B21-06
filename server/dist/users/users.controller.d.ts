import { UsersService } from './users.service';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: LoginUserDto): Promise<import("./user.model").User>;
    getAll(): Promise<import("./user.model").User[]>;
}
