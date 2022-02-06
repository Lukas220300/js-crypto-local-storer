import {DBSchema} from "idb";
import {KeyWithMaterial} from "../../interfaces/KeyWithMaterial";

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
        } | JsonWebKey,
    },
    ECDH_PUBLIC_KEYS: {
        key: string,
        value: JsonWebKey,
    },
    RSA_PRIVATE_KEYS: {
        key: string,
        value: string | JsonWebKey | KeyWithMaterial,
    },
    RSA_PUBLIC_KEYS: {
        key: string,
        value: JsonWebKey,
    },
    AES_KEYS: {
        key: string,
        value: {
            material: Uint8Array,
            key: string,
        } | string | JsonWebKey,
    },
}