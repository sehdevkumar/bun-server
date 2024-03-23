import { db } from "./server-connection/connection";
import { createUserView } from "./view";

const bunEntry = ()=> {
  const bun = Bun.serve({
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === "/") return new Response("Home page!");
      if (url.pathname === "/postUser") {
        return createUserView(req);
      }
      return new Response("404!");
    },
  });
  const users =  db.query("SELECT * FROM users");
  console.log("Server is running 👉 on Port", bun.port,users.all());
}    

export {bunEntry}
