import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const root=resolve(dirname(fileURLToPath(import.meta.url)),".."),dist=resolve(root,"dist");
if(dirname(dist)!==root)throw new Error("Unexpected output path");
await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});
const excluded=new Set(["dist","node_modules","netlify","scripts",".git",".codex","package.json","package-lock.json","netlify.toml","README.txt",".env",".env.local",".env.production"]);
for(const entry of await readdir(root,{withFileTypes:true})){if(excluded.has(entry.name)||entry.name.startsWith(".env."))continue;await cp(join(root,entry.name),join(dist,entry.name),{recursive:true})}
