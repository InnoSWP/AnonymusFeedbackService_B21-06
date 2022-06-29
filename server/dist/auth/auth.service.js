"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("../users/user.model");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(userRepository, usersService, jwtService) {
        this.userRepository = userRepository;
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async login(dto) {
    }
    async registration(dto) {
        const candidate = await this.usersService.getUserByEmail(dto.email);
        if (candidate) {
            throw new common_1.HttpException('Пользователя с таким email существует', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.usersService.createUser(Object.assign(Object.assign({}, dto), { password: hashPassword }));
        return this.generateToken(user);
    }
    async generateToken(user) {
        const payload = {
            login: user.login,
            email: user.email,
            id: user.id,
            roles: user.roles,
        };
        return { token: this.jwtService.sign(payload) };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map