import { bunEntry } from "./app/entry";
import { connectionDB } from "./app/server-connection/connection";


// Connection With DB
connectionDB()
// server entry point
bunEntry()