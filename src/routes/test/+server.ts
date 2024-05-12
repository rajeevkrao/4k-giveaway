import { initMongoDB } from "$lib/server/config/mongo";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async() => {
	const client = await initMongoDB();
	const json = await client.db('giveaway').listCollections().toArray();
	return Response.json(json);
};