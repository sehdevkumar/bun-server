import { db } from "./server-connection/connection";

const bunEntry = ()=> {
    const bun = Bun.serve({
      fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") return new Response("Home page!");
        if (url.pathname === "/blog") return new Response("Blog!");
        return new Response("404!");
      },
    });

    console.log("Server is running 👉 on Port", bun.port);     
}    

export {bunEntry}
