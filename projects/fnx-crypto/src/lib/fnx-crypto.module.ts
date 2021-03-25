import { ModuleWithProviders, NgModule } from '@angular/core';

import { FnxCryptoConfig } from './configs/fnx-crypto.config';
import { FNX_CRYPTO_CONFIG } from './configs/fnx-crypto.config.token';

/**
 * FnxCrypto Module
 */
@NgModule()
export class FnxCryptoModule {
    /**
     * Provide a singleton instance of module
     *
     * @returns ModuleWithProviders<FnxCryptoModule> Module with providers the FnxCryptoModule
     */
    public static forRoot(fnxCryptoConfig: FnxCryptoConfig): ModuleWithProviders<FnxCryptoModule> {
        return {
            ngModule: FnxCryptoModule,
            providers: [
                {
                    provide: FNX_CRYPTO_CONFIG,
                    useValue: fnxCryptoConfig
                }
            ]
        };
    }
}
