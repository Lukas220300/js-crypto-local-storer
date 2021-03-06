import {StorageBuilder} from "../interfaces/StorageBuilder";
import {openDB, IDBPDatabase, IDBPTransaction, StoreNames} from "idb";
import {StorageSchema} from "../indexedDB/schemas/StorageSchema";
import {IndexedDB} from "../indexedDB/IndexedDB";
import {KeyStorage} from "../interfaces/KeyStorage";
import {KeyTypes} from "../enums/KeyTypes";

export default class IndexedDBBuilder implements StorageBuilder {

    // @ts-ignore
    async buildStorage(storageName: string, storageVersion: number, terminatedCallback: Function): Promise<KeyStorage> {
        const dataBase = await openDB<StorageSchema>(storageName, storageVersion, {
            upgrade(database: IDBPDatabase<StorageSchema>, oldVersion: number, newVersion: number | null, transaction: IDBPTransaction<StorageSchema, StoreNames<StorageSchema>[], "versionchange">) {
                // pbkdf
                database.createObjectStore(KeyTypes.PBKDF2_KEY)
                // ecdhPrivateKeys
                database.createObjectStore(KeyTypes.ECDH_PRIVATE_KEY)
                // ecdhPublicKeys
                database.createObjectStore(KeyTypes.ECDH_PUBLIC_KEY)
                // asymmetricPrivateKeys
                database.createObjectStore(KeyTypes.RSA_PRIVATE_KEY)
                // asymmetricPublicKeys
                database.createObjectStore(KeyTypes.RSA_PUBLIC_KEY)
                // aesKeys
                database.createObjectStore(KeyTypes.AES_KEY)
            },
            blocked() {
                console.log('dd466409-8e13-43df-b039-1e6ad5528121 :: blocked')
            },
            blocking() {
                console.log('4147a0d4-c951-4ad9-bf4a-9bb63ee0ac8b :: blocking')
            },
            terminated() {
                console.debug('28069a30-b3f2-4e2f-ba2c-f6e0c85f4654 :: terminated')
                terminatedCallback()
            }
        })

        return new IndexedDB(dataBase)
    }

}