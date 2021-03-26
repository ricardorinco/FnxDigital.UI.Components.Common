import { getTestBed, TestBed } from '@angular/core/testing';

import { FnxCryptoService } from './fnx-crypto.service';

describe('FnxCryptoService', () => {
    const secretKey = 'lANQBCf8TdBWhMHJm-IBlQ';
    const dontNeedRoads = `Roads? Where We're Going We Don't Need Roads`;
    const docEmmettBrownData = { name: 'Doc. Emmett Brown', age: '35', gender: 'Male', job: 'Scientist' };

    let fnxCryptoService: FnxCryptoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FnxCryptoService]
        });

        fnxCryptoService = getTestBed().inject(FnxCryptoService);
    });

    describe('Constructor:', () => {
        it('should create a instance', () => {
            expect(fnxCryptoService).toBeTruthy();
        });
    });

    describe('Methods:', () => {
        it(`should encrypt a text with value '${dontNeedRoads}'`, () => {
            spyOn(fnxCryptoService, 'encrypt').and.callThrough();

            const encryptedValue = fnxCryptoService.encrypt(dontNeedRoads, secretKey);

            expect(fnxCryptoService.encrypt).toHaveBeenCalledTimes(1);
            expect(dontNeedRoads).not.toEqual(encryptedValue);
            expect(encryptedValue).toMatch('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$');
        });

        it(`should decrypt a value and obtained the text '${dontNeedRoads}'`, () => {
            spyOn(fnxCryptoService, 'decrypt').and.callThrough();
            const encryptedValue =
                'U2FsdGVkX1+HPC4KY6T9tY5dFnqc9sEVcuTXizTEfdZzdZsOq9d708EzDT0SDtepcExTy3N3BeBxaf8YpQe1Kw==';

            const decryptedValue = fnxCryptoService.decrypt(encryptedValue, secretKey);

            expect(fnxCryptoService.decrypt).toHaveBeenCalledTimes(1);
            expect(encryptedValue).not.toEqual(decryptedValue);
            expect(decryptedValue).toBe(dontNeedRoads);
        });

        it(`should encrypt a data object with json format`, () => {
            spyOn(fnxCryptoService, 'encrypt').and.callThrough();

            const encryptedData = fnxCryptoService.encrypt(JSON.stringify(docEmmettBrownData), secretKey);

            expect(fnxCryptoService.encrypt).toHaveBeenCalledTimes(1);
            expect(dontNeedRoads).not.toEqual(encryptedData);
            expect(encryptedData).toMatch('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$');
        });

        it(`should decrypt a json object and obtained the data`, () => {
            spyOn(fnxCryptoService, 'decrypt').and.callThrough();
            const encryptedData =
                'U2FsdGVkX19wMOe9R5ir73HsGuiB9yPis7oo4ioQE6puJSgdNKZOA2b+uad63vki+QY8/YuQq4fHIpckSWy77R1wwHnsplmxIJJCLFnjsYtLQBB4l/BNUwubz35DmOyW';

            const decryptedData = JSON.parse(fnxCryptoService.decrypt(encryptedData, secretKey));

            expect(fnxCryptoService.decrypt).toHaveBeenCalledTimes(1);
            expect(encryptedData).not.toEqual(decryptedData);
            expect(decryptedData).toEqual(docEmmettBrownData);
        });
    });
});
