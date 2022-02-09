import {KeyStorage} from "../interfaces/KeyStorage";
import {IDBPDatabase} from "idb/build/entry";
import {StorageSchema} from "./schemas/StorageSchema";
import {KeyTypes} from "../enums/KeyTypes";
import {KeyWithMaterial} from "../interfaces/KeyWithMaterial";

export class IndexedDB implements KeyStorage {

    constructor(protected readonly indexedDb: IDBPDatabase<StorageSchema>) {
    }

    saveAESKey(keyType: KeyTypes.AES_KEY, identifier: string, key: string, iv: Uint8Array): Promise<string> {
        return this.indexedDb.put(keyType, {material:iv,key}, identifier)
    }

    saveAsymmetricKey(keyType: KeyTypes.ECDH_PRIVATE_KEY | KeyTypes.ECDH_PUBLIC_KEY | KeyTypes.RSA_PRIVATE_KEY | KeyTypes.RSA_PUBLIC_KEY, identifier: string, key: string | JsonWebKey): Promise<string> {
        return this.indexedDb.put(keyType, key, identifier)
    }

    savePBKDFKey(keyType: KeyTypes.PBKDF2_KEY, identifier: string, key: JsonWebKey, salt: Uint8Array): Promise<string> {
        return this.indexedDb.put(keyType, {salt,key}, identifier)
    }

    getKey(keyType: KeyTypes.ECDH_PRIVATE_KEY | KeyTypes.ECDH_PUBLIC_KEY | KeyTypes.RSA_PRIVATE_KEY | KeyTypes.RSA_PUBLIC_KEY, identifier: string): Promise<string|JsonWebKey|KeyWithMaterial|undefined> {
        return this.indexedDb.get(keyType, identifier)
    }

}