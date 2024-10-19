import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // USE GLOBAL VALIDATION PIPE
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // converts incoming requests to the DTO object
    }),
  );

  // Swagger Config
  const config = new DocumentBuilder()
    .setVersion("1.0")
    .setTitle("NestJS Blog app API")
    .setDescription("Use the base API as http://localhost:3000/")
    .setTermsOfService("Terms of Service")
    .setLicense("MIT", "https://opensource.org/licenses/MIT")
    .addServer("http://localhost:3000", "Localhost")
    .build();

  // document object
  const document = SwaggerModule.createDocument(app, config);

  // SwaggerModule.setup("api", app, document);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
