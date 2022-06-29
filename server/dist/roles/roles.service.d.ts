import { CreateRoleDto } from './dto/createRole.dto';
import { Role } from './role.module';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    createRole(dto: CreateRoleDto): Promise<Role>;
    getRoleByValue(name: string): Promise<Role>;
}
