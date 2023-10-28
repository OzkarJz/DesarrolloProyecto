import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ClientModule, AuthModule, MongooseModule.forRoot('mongodb+srv://oscar:1234@proyectoserver.kpkdwic.mongodb.net/')],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
