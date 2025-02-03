import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthenticationModule } from './authentication/authentication.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}.lebne.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`),
    AuthenticationModule,
    AccountsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
