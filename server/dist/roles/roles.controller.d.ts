import { CreateRoleDto } from './dto/createRole.dto';
import { RolesService } from './roles.service';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(dto: CreateRoleDto): Promise<import("./role.module").Role>;
    getByValue(name: string): Promise<import("./role.module").Role>;
}
