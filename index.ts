import dotenv from "dotenv";
import server from './src/server'
import * as process from "node:process";
import {LogError, LogSuccess} from "./src/utils/logger";

//Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000;

<<<<<<< HEAD
app.get("/", (req: Request, res: Response) => {
    //In principle a Hello World
    res.send("Hola Bruno estoy ejecuntando un servidor local. KIERO LEXEEEEE");
=======
server.listen(port, () => {
    LogSuccess(`Server started in http://localhost:${port}/api`);
>>>>>>> 9430f505962ae26ce5c0e87388adb2231d8c3a7e
});

server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`);
});