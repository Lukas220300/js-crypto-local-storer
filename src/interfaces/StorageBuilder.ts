import {KeyStorage} from "./KeyStorage";

export interface StorageBuilder {
    buildStorage(storageName: string, storageVersion: number): Promise<KeyStorage>
}