import { bunEntry } from "./app/entry";
import { connectionDB } from "./app/server-connection/connection";
import { initDB } from "./app/server-connection/initDB";


// init datebase
initDB()

// server entry point
bunEntry()