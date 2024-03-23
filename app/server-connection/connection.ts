import { Database } from "bun:sqlite";

const connectionDB = ()=> {
    const db = new Database("./app/database/sk.sqlite", { create: true });
    console.log("Connection ❤ With DB ");
    db.close();
} 

export {connectionDB}