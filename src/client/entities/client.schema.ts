import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop()
  id: string;

  @Prop()
  nombre: string;

  @Prop()
  direccion: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);