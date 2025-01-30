import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Base } from "../generics/db/base.model";
import { Cinema } from "./cinema.model";
import { IsNotEmpty, IsNumber } from "class-validator";

@Schema({ timestamps: true, versionKey: false })
export class MoviePlanning extends Base {
  _id: string;

  @Prop({ type: mongoose.Schema.Types.Date })
  @IsNotEmpty()
  start: Date;


  @Prop({ type: mongoose.Schema.Types.Date })
  @IsNotEmpty()
  end: Date;

  @Prop({ type: mongoose.Schema.Types.Number })
  @IsNumber()
  @IsNotEmpty()
  movieId: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Cinema" })
  @IsNotEmpty()
  cinema: Cinema;
}

export const MoviePlanningSchema =SchemaFactory.createForClass(MoviePlanning);
