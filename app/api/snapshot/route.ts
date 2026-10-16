import { env } from 'cloudflare:workers';
import { api } from '../../../worker/api.mjs';
export const dynamic='force-dynamic';
export async function GET(request:Request){return api(request,env);}
export async function PUT(request:Request){return api(request,env);}
export async function DELETE(request:Request){return api(request,env);}
