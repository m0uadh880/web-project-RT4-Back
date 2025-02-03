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
import { MailModule } from "src/mail/mail.module";
import { EmailConfirmationService } from "./email-confirmation.service";

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
    MailModule
  ],
  controllers: [AuthenticationController],
  providers: [
    UserService,
    AuthenticationService,
    EmailConfirmationService,
    JwtStrategy
  ],
  exports: [UserService, AuthenticationService]
})
export class AuthenticationModule {}
