import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Productrouter from "./routes/product.route";
import { AppDataSource } from "./dataSource"; 


// const router= Router();
dotenv.config();
AppDataSource.initialize()
.then(() => {
  console.log('Connected to database')}
).catch((err)=>console.log(err));
// createConnection()
//   .then(() => {
//     console.log('Connected to database');
//   })
//   .catch((error) => {
//     console.log('Error connecting to database:', error);
//   });

const app: Express = express();
app.use(bodyParser.json());
app.use('/product',Productrouter);

const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});