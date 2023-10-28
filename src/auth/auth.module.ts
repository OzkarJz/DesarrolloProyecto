import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  JwtModule.register({
    global: true,
    secret: 'MyPasswordSecret@123982981983',
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
