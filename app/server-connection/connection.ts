import { Database } from "bun:sqlite";
let db:Database;

const connectionDB = ()=> {
    db = new Database("./app/database/sk.sqlite", { create: true });
    console.log("Connection ❤ With DB ");
    // db.close();
} 

export {connectionDB,db}