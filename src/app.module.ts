import { Inject, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { PostsModule } from "./posts/posts.module";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagsModule } from "./tags/tags.module";
import { MetaOptionsModule } from "./meta-options/meta-options.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import appConfig from "./config/app.config";
import databaseConfig from "./config/database.config";
import environmentValidation from "./config/environment.validation";

const ENV = process.env.NODE_ENV;
console.log("ENV:", ENV);
console.log("ENV:", ENV.trim());
@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: ".env.development",
      envFilePath: [!ENV ? ".env" : `.env.${ENV}`.trim()],
      load: [appConfig, databaseConfig],
      validationSchema: environmentValidation,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        //entities: [User],
        synchronize: configService.get("database.synchronize"),
        port: configService.get("database.port"),
        username: configService.get("database.user"),
        password: configService.get("database.password"),
        host: configService.get("database.host"),
        autoLoadEntities: configService.get("database.autoLoadEntities"),
        database: configService.get("database.name"),
      }),
    }),
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  /** */
  constructor() {
    console.log("Database Host:", process.env.DATABASE_HOST);
    console.log("Database Port:", process.env.DATABASE_PORT);
    console.log("Database Username:", process.env.DATABASE_NAME);
    console.log("Database Name:", process.env.DATABASE_USER);
    console.log("Database Name:", process.env.DATABASE_PASSWORD);

    if (process.env.NODE_ENV !== "production") {
      console.log("Database Host:", process.env.DATABASE_HOST);
      console.log("Database Port:", process.env.DATABASE_PORT);
      console.log("Database Username:", process.env.DATABASE_NAME);
      console.log("Database Name:", process.env.DATABASE_USER);
      console.log("Database Name:", process.env.DATABASE_PASSWORD);
    }
  }
}
