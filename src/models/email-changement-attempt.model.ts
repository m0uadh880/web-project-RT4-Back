import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Base } from "../generics/db/base.model";
import { softDeletePlugin } from "soft-delete-plugin-mongoose";

@Schema({ timestamps: true, versionKey: false })
export class EmailChangementAttempt extends Base {
  _id?: string;

  @Prop({ type: String, required: true })
  userId: string;

  @Prop({ type: Number, required: true })
  verificationCode: number;

  @Prop({ type: String, required: true })
  newEmail: string;

  constructor() {
    super();
    this.userId = "";
    this.verificationCode = 0;
    this.newEmail = "";
  }
}

export const EmailChangementAttemptSchema = SchemaFactory.createForClass(
  EmailChangementAttempt).plugin(softDeletePlugin);
