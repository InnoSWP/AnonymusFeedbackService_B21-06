import { User } from './user.model';
import { RolesService } from '../roles/roles.service';
import { LoginUserDto } from "./dto/login-user.dto";
export declare class UsersService {
    private userRepository;
    private rolesService;
    constructor(userRepository: typeof User, rolesService: RolesService);
    createUser(dto: LoginUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
}
