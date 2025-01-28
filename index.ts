import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";

//Configuration the .env file
dotenv.config();

//Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
    //In principle a Hello World
    res.send("Hola Bruno estoy ejecuntando un servidor local");
});

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})
