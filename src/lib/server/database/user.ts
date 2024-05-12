import { initMongoDB } from "../config/mongo";

type Entry = {
	name: string;
	phone: string;
	ign?: string;
}

const addEntry = async (entry:Entry) => {
	const client = await initMongoDB();
	await client.db('giveaway').collection('4k-giveaway').insertOne({...entry, type:"entry", _ts: new Date().getTime()});
}

export { 
	addEntry,
}

export type {
	Entry,
}