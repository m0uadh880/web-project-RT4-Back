import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Base } from "./base.model";
import { Cinema } from "./cinema.model";

@Schema({ timestamps: true, versionKey: false })
export class MoviePlanning extends Base {
  _id: string;

  @Prop({ type: mongoose.Schema.Types.Date })
  start: Date;

  @Prop({ type: mongoose.Schema.Types.Date })
  end: Date;

  @Prop({ type: mongoose.Schema.Types.Number })
  movieId: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Cinema" })
  cinema: Cinema;
}

export const MoviePlanningSchema =SchemaFactory.createForClass(MoviePlanning);
