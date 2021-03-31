import { TestBed } from '@angular/core/testing';

import { FnxSessionStorageService } from './fnx-session-storage.service';

describe('FnxSessionStorageService', () => {
    const martinSeamusMcflyData = { name: 'Martin Seamus McFly ', age: '17', gender: 'Male', job: 'Student' };

    let fnxSessionStorageService: FnxSessionStorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        fnxSessionStorageService = TestBed.inject(FnxSessionStorageService);
    });

    describe('Constructor:', () => {
        it('should create a instance', () => {
            expect(fnxSessionStorageService).toBeTruthy();
        });
    });

    describe('Methods:', () => {
        it('should create a new key with data into session storage', () => {
            spyOn(fnxSessionStorageService, 'setItem').and.callThrough();
            spyOn(fnxSessionStorageService, 'getItem').and.callThrough();

            fnxSessionStorageService.setItem('secretKey', JSON.stringify(martinSeamusMcflyData));
            const savedData = JSON.parse(fnxSessionStorageService.getItem('secretKey'));

            expect(fnxSessionStorageService.setItem).toHaveBeenCalledTimes(1);
            expect(fnxSessionStorageService.getItem).toHaveBeenCalledTimes(1);
            expect(savedData).toEqual(martinSeamusMcflyData);
            expect(savedData).not.toBe(martinSeamusMcflyData);
        });

        it('should update the data in an existing key in session storage', () => {
            spyOn(fnxSessionStorageService, 'setItem').and.callThrough();
            spyOn(fnxSessionStorageService, 'getItem').and.callThrough();

            const martyMcflyData = JSON.parse(fnxSessionStorageService.getItem('secretKey'));
            martyMcflyData.name = 'Marty McFly';

            fnxSessionStorageService.setItem('secretKey', JSON.stringify(martyMcflyData));
            const savedData = JSON.parse(fnxSessionStorageService.getItem('secretKey'));

            expect(fnxSessionStorageService.setItem).toHaveBeenCalledTimes(1);
            expect(fnxSessionStorageService.getItem).toHaveBeenCalledTimes(2);
            expect(savedData).not.toEqual(martinSeamusMcflyData);
            expect(savedData).not.toBe(martyMcflyData);
            expect(savedData).toEqual(martyMcflyData);
        });

        it('should try retrieve data with non existing key in session storage and return undefined', () => {
            spyOn(fnxSessionStorageService, 'getItem').and.callThrough();

            const nullData = fnxSessionStorageService.getItem('secretKey2');

            expect(fnxSessionStorageService.getItem).toHaveBeenCalledTimes(1);
            expect(nullData).toBeNull();
        });

        it('should remove a key in session storage', () => {
            spyOn(fnxSessionStorageService, 'removeItem').and.callThrough();
            spyOn(fnxSessionStorageService, 'getItem').and.callThrough();

            fnxSessionStorageService.removeItem('secretKey');
            const nullData = fnxSessionStorageService.getItem('secretKey');

            expect(fnxSessionStorageService.removeItem).toHaveBeenCalledTimes(1);
            expect(fnxSessionStorageService.getItem).toHaveBeenCalledTimes(1);
            expect(nullData).toBeNull();
        });
    });
});
