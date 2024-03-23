import { db } from "./server-connection/connection";

function createUserView(req: Request) {
     db.exec(`
  INSERT INTO users (name, email) VALUES ("Alice2", "alice2@example.com");
`);
  return new Response("I am now happy");
}




export {createUserView}