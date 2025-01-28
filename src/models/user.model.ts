import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "./base.model";

export enum UserRoleEnum {
  admin = "admin",
  user = "user"
}

export enum GenderEnum {
  male = "Male",
  female = "Female",
}
@Schema({ timestamps: true, versionKey: false })
export class User extends Base {
  _id?: string;

  @Prop({ type: String, required: true, unique: true })
  username: string;

  @Prop({ type: String, required: true })
  firstname: string;

  @Prop({ type: String, required: true })
  lastname: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, required: true, unique: true })
  email: string;

  @Prop({
    type: String,
    enum: UserRoleEnum,
    required: true,
    default: UserRoleEnum.user
  })
  role?: UserRoleEnum;

  @Prop({ type: String })
  profileImage?: string;

  @Prop({ type: Boolean, required: true, default: false })
  activated?: boolean;

  @Prop({ type: String, default: "" })
  quote?: string;

  @Prop({
    type: String,
    enum: GenderEnum,
  })
  gender?: GenderEnum;

  @Prop({ type: String, default: "" })
  birthday?: string;
}

export const UserSchema =
  SchemaFactory.createForClass(User);
