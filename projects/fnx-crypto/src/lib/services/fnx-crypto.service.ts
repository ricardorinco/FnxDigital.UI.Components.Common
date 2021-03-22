import * as CryptoJS from 'crypto-js';

import { Inject, Injectable } from '@angular/core';

import { FnxCryptoConfig } from './../configs/fnx-crypto.config';
import { FNX_CRYPTO_CONFIG } from './../configs/fnx-crypto.config.token';

@Injectable({ providedIn: 'root' })
export class FnxCryptoService {
    /**
     * Construtor da classe
     */
    constructor(@Inject(FNX_CRYPTO_CONFIG) private readonly fnxCryptoConfig: FnxCryptoConfig) {}

    /**
     * Criptografa um valor
     *
     * @param valor Valor a ser criptografado
     * @returns string Valor criptografado
     */
    public criptografar(valor: string): string {
        return CryptoJS.AES.encrypt(valor, this.fnxCryptoConfig.cryptoSecretKey).toString();
    }

    /**
     * Descriptografar um valor
     *
     * @param valor Valor a ser descriptografado
     * @returns string Valor descriptografado
     */
    public descriptografar(valor: string): string {
        return CryptoJS.AES.decrypt(valor, this.fnxCryptoConfig.cryptoSecretKey).toString(CryptoJS.enc.Utf8);
    }
}
