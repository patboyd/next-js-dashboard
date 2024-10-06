import { env } from 'process';
import pg from 'pg'

const { Client } = pg

let client:pg.Client;

export async function getClient():Promise<pg.Client> {

    if(client) return client;
    client = new Client(env.POSTGRES_URL)
    await client.connect();
    return client
}

export async function cleanup():Promise<void> {
    if(client) client.end();    
}