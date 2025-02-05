import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthenticationModule } from './authentication/authentication.module';
import { AccountsModule } from './accounts/accounts.module';
import { PlanningModule } from './planning/planning.module';
import { CinemaModule } from "./cinema/cinema.module";
import { MailModule } from "./mail/mail.module";
import { MovieModule } from "./movie/movie.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { MulterModule } from "@nestjs/platform-express";
import { uploadDestination } from "./utilities/upload";
import { HomeModule } from "./home/home.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}.lebne.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
    ),
    AuthenticationModule,
    CinemaModule,
    MailModule,
    MovieModule,
    AccountsModule,
    MulterModule.register({}),
    ServeStaticModule.forRoot({
     rootPath: uploadDestination
    }),
    PlanningModule,
    HomeModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
