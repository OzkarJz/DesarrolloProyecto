import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    console.log(createAuthDto)
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(id);
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    console.log(updateAuthDto)
    return this.authService.update(id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }

  @Post('/login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    console.log(loginAuthDto)
    return this.authService.login(loginAuthDto);
  }

  @UseGuards(AuthGuard)
  @Get('test')
  getTest(@Request() req) {
    return 'Hola Mundo';
  }
}
