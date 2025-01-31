import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { User, UserSchema } from "src/Models/user.model";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { UserService } from "./user.service";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: 86400
      }
    }),
  ],
  controllers: [AuthenticationController],
  providers: [
    UserService,
    AuthenticationService,
    JwtStrategy
  ],
  exports: [UserService, AuthenticationService]
})
export class AuthenticationModule {}
