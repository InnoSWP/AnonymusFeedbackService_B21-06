"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UsersModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./user.model");
const user_roles_model_1 = require("../roles/user-roles.model");
const role_model_1 = require("../roles/role.model");
const roles_module_1 = require("../roles/roles.module");
const session_model_1 = require("../session/session.model");
const auth_module_1 = require("../auth/auth.module");
const message_model_1 = require("../message/message.model");
let UsersModule = UsersModule_1 = class UsersModule {
};
UsersModule = UsersModule_1 = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([user_model_1.User, user_roles_model_1.UserRoles, role_model_1.Role, session_model_1.Session, message_model_1.Message]),
            roles_module_1.RolesModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
        exports: [users_service_1.UsersService, UsersModule_1],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map