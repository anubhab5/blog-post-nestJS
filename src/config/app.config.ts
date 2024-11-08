import { registerAs } from "@nestjs/config";

export default registerAs("appConfig", () => ({
  environment: process.env.NODE_ENV || "development",
}));

// export const appConfig = () => ({
//   environment: process.env.NODE_ENV || "production",
// });
