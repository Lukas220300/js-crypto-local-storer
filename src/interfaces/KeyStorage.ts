import {KeyTypes} from "../enums/KeyTypes";
import {KeyWithMaterial} from "./KeyWithMaterial";


export interface KeyStorage {
    saveAsymmetricKey(keyType: KeyTypes.ECDH_PRIVATE_KEY | KeyTypes.ECDH_PUBLIC_KEY | KeyTypes.RSA_PRIVATE_KEY | KeyTypes.RSA_PUBLIC_KEY, identifier:string, key:string|JsonWebKey|KeyWithMaterial): Promise<string>
    savePBKDFKey(keyType: KeyTypes.PBKDF2_KEY, identifier:string, key:JsonWebKey, salt: Uint8Array): Promise<string>
    saveAESKey(keyType: KeyTypes.AES_KEY, identifier:string, key:string, iv: Uint8Array): Promise<string>

    getKey(keyType: KeyTypes.ECDH_PRIVATE_KEY | KeyTypes.ECDH_PUBLIC_KEY | KeyTypes.RSA_PRIVATE_KEY | KeyTypes.RSA_PUBLIC_KEY | KeyTypes.PBKDF2_KEY | KeyTypes.AES_KEY, identifier: string): Promise<string|JsonWebKey|KeyWithMaterial>
}