import { TestBed } from '@angular/core/testing';

import { FnxCryptoService } from './fnx-crypto.service';

describe('FnxCryptoService', () => {
    let fnxCryptoService: FnxCryptoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FnxCryptoService]
        });

        fnxCryptoService = new FnxCryptoService({ cryptoSecretKey: 'lANQBCf8TdBWhMHJm-IBlQ' });
    });

    describe('Constructor:', () => {
        it('Deve ser criada uma instância', () => {
            expect(fnxCryptoService).toBeTruthy();
        });
    });

    describe('Methods:', () => {
        it('Deve ser realizado a criptografia de um valor', () => {
            spyOn(fnxCryptoService, 'criptografar').and.callThrough();
            const valor = `Roads? Where We're Going We Don't Need Roads`;

            const valorCriptografado = fnxCryptoService.criptografar(valor);

            expect(fnxCryptoService.criptografar).toHaveBeenCalledTimes(1);
            expect(valor).not.toBe(valorCriptografado);
            expect(valorCriptografado).toMatch('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$');
        });

        it('Deve ser realizado a descriptografia de um valor criptografado', () => {
            spyOn(fnxCryptoService, 'descriptografar').and.callThrough();
            const valorCriptografado =
                'U2FsdGVkX1+HPC4KY6T9tY5dFnqc9sEVcuTXizTEfdZzdZsOq9d708EzDT0SDtepcExTy3N3BeBxaf8YpQe1Kw==';

            const valorDescriptografado = fnxCryptoService.descriptografar(valorCriptografado);

            expect(fnxCryptoService.descriptografar).toHaveBeenCalledTimes(1);
            expect(valorCriptografado).not.toBe(valorDescriptografado);
            expect(valorDescriptografado).toBe(`Roads? Where We're Going We Don't Need Roads`);
        });
    });
});
