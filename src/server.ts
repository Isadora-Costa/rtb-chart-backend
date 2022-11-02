import "reflect-metadata"
import express, { NextFunction, Request, Response, } from "express"
import "express-async-errors"
import swaggerUi from "swagger-ui-express"
import { AppDataSource } from "./database/data-source"
import "./shared/container"
import { AppError } from "./errors/app.error"
import { router } from "./routes"
import openapi from "./docs/swagger.json"
import dotenv  from 'dotenv'
import cors from 'cors'

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!")
}).catch((err) => {
  console.error("Error during Data Source initialization:", err)
})

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Controll-Allow-Methods", "GET, PUT, DELETE, PATCH, POST");
  res.header("Access-Controll-Allow-Methods", "X-PINGOTHER, Content-Type, Thorization");
  app.use(cors());
  next();
})

app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapi))
app.use(router)
app.use(async (err: Error, _request: Request, _response: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return _response.status(err.statusCode).json({
      message: err.message
    })
  }

  return _response.status(500).json({
    status: "error",
    message: `Internal server error: ${err.message}`
  })
})

app.listen(3333, () => console.log("Server is runing on port: 3333"))