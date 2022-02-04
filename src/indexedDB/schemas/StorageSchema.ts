import {DBSchema} from "idb";

export interface StorageSchema extends DBSchema {
    pbkdf: {
        key: string,
        value: {
            salt: Uint8Array,
            key: JsonWebKey,
        },
    },
    ecdhPrivateKeys: {
        key: string,
        value: string,
    },
    ecdhPublicKeys: {
        key: string,
        value: JsonWebKey,
    },
    asymmetricPrivateKeys: {
        key: string,
        value: string,
    },
    asymmetricPublicKeys: {
        key: string,
        value: JsonWebKey,
    },
    aesKeys: {
        key: string,
        value: {
            iv: Uint8Array,
            key: string,
        },
    },
}