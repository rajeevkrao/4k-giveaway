import { ServerApiVersion, MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI!;

let cache: any = null;

// Codes till here are executed once irrespective of n(n>0) numbers of imports to this file
// Why? - Because nodejs caches modules in memory. So whenever other files import this file, they get the same instance of cache

export const initMongoDB = async () => {
	if (!cache)
		// @ts-expect-error - ts error from mongodb driver
		cache = new MongoClient(uri, { serverApi: ServerApiVersion.v1 }); 
	if (!cache?.topology) await cache.connect();
	return cache as MongoClient;
};

export const closeDB = async () => {
	await cache?.close();
	console.log('Client Closed');
};