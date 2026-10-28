import { json } from "./shared.mjs";
export default async req=>{if(req.method!=="POST")return json({error:"Method not allowed"},405,{allow:"POST"});return json({ok:true},200,{"set-cookie":"chath_admin=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0"})};
