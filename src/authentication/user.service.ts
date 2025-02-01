import { Injectable, NotFoundException } from "@nestjs/common";
import { BaseService } from "../generics/services/base.service";
import { User } from "src/Models/user.model";
import { SoftDeleteModel } from "soft-delete-plugin-mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Injectable()
export class UserService extends BaseService<User> {
  constructor(@InjectModel(User.name) model: SoftDeleteModel<User & Document>) {
    super(model);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.model.findOne({ email }).exec();
    if (!user) throw new NotFoundException("User not found By email");
    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.model.findOne({ username }).exec();
    if (!user) throw new NotFoundException("User not found By email");
    return user;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const user: User = await this.model.findOne({ email }).exec();
    return user != null;
  }

  async existsByUsername(username: string): Promise<boolean> {
    const user: User = await this.model.findOne({ username }).exec();
    return user != null;
  }
}
