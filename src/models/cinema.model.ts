import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Base } from "./base.model";

@Schema({ timestamps: true, versionKey: false })
export class Cinema extends Base {
  _id: string;

  @Prop({ type: mongoose.Schema.Types.String })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String })
  description: string;

  @Prop({ type: mongoose.Schema.Types.String })
  address: string;

  @Prop({ type: mongoose.Schema.Types.Number })
  phone: number;

  @Prop({ type: mongoose.Schema.Types.String })
  openingTime: string;

  @Prop({ type: mongoose.Schema.Types.String })
  closingTime: string;

  @Prop()
  imageUrl: string;
}

export const CinemaSchema =
  SchemaFactory.createForClass(Cinema);
