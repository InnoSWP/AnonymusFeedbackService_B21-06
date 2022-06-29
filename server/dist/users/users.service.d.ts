import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
export declare class UsersService {
    private userRepository;
    private rolesService;
    constructor(userRepository: typeof User, rolesService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
}
