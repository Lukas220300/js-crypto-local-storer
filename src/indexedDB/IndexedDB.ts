import {KeyStorage} from "../interfaces/KeyStorage";
import {IDBPDatabase} from "idb/build/entry";
import {StorageSchema} from "./schemas/StorageSchema";

export class IndexedDB<Schema> implements KeyStorage {

    constructor(protected readonly indexedDb: IDBPDatabase<StorageSchema>) {
    }



}