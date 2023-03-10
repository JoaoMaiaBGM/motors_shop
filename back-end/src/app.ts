import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { mainRoutes } from "./routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

const app = express();
const swaggerFile = require("../src/swagger/swagger_output.json");

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.connect("localhost:3000");

mainRoutes(app);

export default app;
