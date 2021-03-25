import { inject, TestBed } from '@angular/core/testing';

import { FnxCryptoModule } from './fnx-crypto.module';

import { FnxCryptoService } from './services/fnx-crypto.service';

describe('FnxCryptoModule', () => {
    describe('Configuration', () => {
        describe('should configured with secret key', () => {
            beforeEach(() => {
                TestBed.configureTestingModule({
                    imports: [FnxCryptoModule.forRoot({ secretKey: 'lANQBCf8TdBWhMHJm' })]
                });
            });

            it('should create a FnxCryptoService', inject([FnxCryptoModule], (fnxCryptoService: FnxCryptoService) =>
                expect(fnxCryptoService).toBeTruthy()
            ));
        });
    });
});
