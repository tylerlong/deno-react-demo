import { serveDir } from "https://deno.land/std@0.192.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.192.0/http/server.ts";

const port = 8000;
const folderToServe = "./public"; // Change this to the folder you want to serve

serve((req) => serveDir(req, { fsRoot: folderToServe }), { port });

console.log(`Serving ${folderToServe} at http://localhost:${port}`);
