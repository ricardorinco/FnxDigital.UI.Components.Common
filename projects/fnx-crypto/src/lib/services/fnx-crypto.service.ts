import * as CryptoJS from 'crypto-js';

import { Inject, Injectable } from '@angular/core';

import { FnxCryptoConfig } from './../configs/fnx-crypto.config';
import { FNX_CRYPTO_CONFIG } from './../configs/fnx-crypto.config.token';

/**
 * FnxCrypto Service
 */
@Injectable({ providedIn: 'root' })
export class FnxCryptoService {
    /**
     * Class constructor
     *
     * @fnxCryptoConfig Instance of FnxCryptoConfig
     */
    constructor(@Inject(FNX_CRYPTO_CONFIG) private readonly fnxCryptoConfig: FnxCryptoConfig) {
        if (fnxCryptoConfig === null || fnxCryptoConfig === undefined) {
            throw new Error('FnxCryptoConfig needs to be defined');
        }

        if (fnxCryptoConfig.secretKey === null || fnxCryptoConfig.secretKey === undefined) {
            throw new Error('Secret key needs to be defined');
        }
    }

    /**
     * Encrypt a value using AES algorithm
     *
     * @param value Value to be encrypted
     * @returns string Value encrypted
     */
    public encrypt(value: string): string {
        return CryptoJS.AES.encrypt(value, this.fnxCryptoConfig.secretKey).toString();
    }

    /**
     * Decrypt a value using AES algorithm
     *
     * @param value Value to be decrypted
     * @returns string Value decrypted
     */
    public decrypt(value: string): string {
        return CryptoJS.AES.decrypt(value, this.fnxCryptoConfig.secretKey).toString(CryptoJS.enc.Utf8);
    }
}
