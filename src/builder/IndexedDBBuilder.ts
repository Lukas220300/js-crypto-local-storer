import {StorageBuilder} from "../interfaces/StorageBuilder";
import {openDB, IDBPDatabase, IDBPTransaction, StoreNames} from "idb";
import {StorageSchema} from "../indexedDB/schemas/StorageSchema";
import {IndexedDB} from "../indexedDB/IndexedDB";
import {KeyStorage} from "../interfaces/KeyStorage";

export default class IndexedDBBuilder implements StorageBuilder {

    // @ts-ignore
    async buildStorage(storageName: string, storageVersion: number): Promise<KeyStorage> {

        const dataBase = await openDB<StorageSchema>(storageName, storageVersion, {
            upgrade(database: IDBPDatabase<StorageSchema>, oldVersion: number, newVersion: number | null, transaction: IDBPTransaction<StorageSchema, StoreNames<StorageSchema>[], "versionchange">) {

            },
            blocked() {
            },
            blocking() {
            },
            terminated() {
            }
        })

        return new IndexedDB(dataBase)
    }

}