import { ModuleWithProviders, NgModule } from '@angular/core';

import { FnxCryptoConfig } from './configs/fnx-crypto.config';
import { FNX_CRYPTO_CONFIG } from './configs/fnx-crypto.config.token';

@NgModule({
    declarations: [],
    imports: [],
    exports: []
})
export class FnxCryptoModule {
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
