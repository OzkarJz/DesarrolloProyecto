import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(@InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService) { }

  create(createAuthDto: CreateAuthDto) {

    const { password, ...userDTO } = createAuthDto;  //desestructuracion de objetos

    const createUser = new this.userModel({ isDeleted: false, password: bcrypt.hashSync(password, 10), ...userDTO });

    return createUser.save();
  }

  findAll() {
    return this.userModel.find({ isDeleted: false }).exec();
  }

  findOne(id: string) {
    const user = this.userModel.findById(id)

    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exist`);
    }

    return user;
  }

  update(id: string, updateAuthDto: UpdateAuthDto) {
    console.log(id)
    console.log(updateAuthDto)
    return this.userModel.updateOne({ _id: id }, {
      $set: updateAuthDto
    });
  }

  remove(id: string) {
    return this.userModel.updateOne({ _id: id }, {
      $set: { isDeleted: true }
    });
  }

  async login(loginAuthDto: LoginAuthDto) {
    const user = await this.userModel.findOne({ user: loginAuthDto.user })

    console.log(user)

    if (!user)
      throw new UnauthorizedException('Credential are not valid')

    if (!bcrypt.compareSync(loginAuthDto.password, user.password))
      throw new UnauthorizedException('Credential are not valid')

    const payload = { sub: user.id, username: user.user };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };

  }
}
