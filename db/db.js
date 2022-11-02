import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
const adapter = new JSONFile('./db/db.json');
const db = new Low(adapter)

export async function getMyDb(){
    await db.read()
    return db
}