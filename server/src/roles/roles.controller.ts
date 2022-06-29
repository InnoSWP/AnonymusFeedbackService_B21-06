import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/createRole.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post('/')
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }

  @Get('/:name')
  getByValue(@Param('name') name: string) {
    return this.rolesService.getRoleByValue(name);
  }
}
