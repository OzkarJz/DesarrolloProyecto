import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop()
    id: string;
    @Prop()
    email: string;
    @Prop()
    password: string;
    @Prop()
    user: string;
    @Prop()
    name: string;
    @Prop()
    roles: string[];
    @Prop()
    isActive: boolean;
    @Prop()
    isDeleted: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);