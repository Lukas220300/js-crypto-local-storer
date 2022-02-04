import {DBSchema} from "idb";

export interface StorageSchema extends DBSchema {
    PBKDF_KEYS: {
        key: string,
        value: {
            salt: Uint8Array,
            key: JsonWebKey,
        },
    },
    ECDH_PRIVATE_KEYS: {
        key: string,
        value: {
            material: Uint8Array,
            key: string,
        },
    },
    ECDH_PUBLIC_KEYS: {
        key: string,
        value: JsonWebKey,
    },
    RSA_PRIVATE_KEYS: {
        key: string,
        value: string,
    },
    RSA_PUBLIC_KEYS: {
        key: string,
        value: JsonWebKey,
    },
    AES_KEYS: {
        key: string,
        value: {
            iv: Uint8Array,
            key: string,
        },
    },
}