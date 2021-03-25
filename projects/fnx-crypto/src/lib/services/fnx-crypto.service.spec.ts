import { TestBed } from '@angular/core/testing';

import { FnxCryptoService } from './fnx-crypto.service';

describe('FnxCryptoService', () => {
    const dontNeedRoads = `Roads? Where We're Going We Don't Need Roads`;

    let fnxCryptoService: FnxCryptoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FnxCryptoService]
        });

        fnxCryptoService = new FnxCryptoService({ secretKey: 'lANQBCf8TdBWhMHJm-IBlQ' });
    });

    describe('Constructor:', () => {
        it('should create a instance', () => {
            expect(fnxCryptoService).toBeTruthy();
        });

        it('should not be created an instance with null parameter', () => {
            expect(() => fnxCryptoService = new FnxCryptoService(null)).toThrow();
        });

        it('should not be created an instance with undefined parameter', () => {
            expect(() => fnxCryptoService = new FnxCryptoService(undefined)).toThrow();
        });

        it('should not be created an instance with config property secret key null', () => {
            expect(() => fnxCryptoService = new FnxCryptoService({ secretKey:  null })).toThrow();
        });

        it('should not be created an instance with config property secret key undefined', () => {
            expect(() => fnxCryptoService = new FnxCryptoService({ secretKey: undefined })).toThrow();
        });
    });

    describe('Methods:', () => {
        it(`should encrypt a text with value '${dontNeedRoads}'`, () => {
            spyOn(fnxCryptoService, 'encrypt').and.callThrough();

            const encryptedValue = fnxCryptoService.encrypt(dontNeedRoads);

            expect(fnxCryptoService.encrypt).toHaveBeenCalledTimes(1);
            expect(dontNeedRoads).not.toBe(encryptedValue);
            expect(encryptedValue).toMatch('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$');
        });

        it(`should decrypted a value and obtained the text '${dontNeedRoads}'`, () => {
            spyOn(fnxCryptoService, 'decrypt').and.callThrough();
            const encryptedValue =
                'U2FsdGVkX1+HPC4KY6T9tY5dFnqc9sEVcuTXizTEfdZzdZsOq9d708EzDT0SDtepcExTy3N3BeBxaf8YpQe1Kw==';

            const decryptedValue = fnxCryptoService.decrypt(encryptedValue);

            expect(fnxCryptoService.decrypt).toHaveBeenCalledTimes(1);
            expect(encryptedValue).not.toBe(decryptedValue);
            expect(decryptedValue).toBe(dontNeedRoads);
        });
    });
});
