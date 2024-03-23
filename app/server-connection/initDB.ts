import { connectionDB } from "./connection";
import { createUser } from "./create-tables";


const initDB = ()=> {
    connectionDB();
    createUser()
     
}

export {initDB}
