# FnxStorage Service

A service library for save data in browser storage in your angular project.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Installing

In your Angular project run

```typescript
npm i --save @fnx-components/storage
```

## Getting Started

After installing it you need to inject the most appropriate service in your controller

Services available:

| Name                     | Import                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------ |
| FnxSessionStorageService |  import { FnxSessionStorageService } from '@fnx-components/session-storage.service'; |

```typescript
...
import { FnxSessionStorageService } from '@fnx-components/session-storage.service';

constructor(
    ...
    private readonly fnxSessionStorageService: FnxSessionStorageService
) { }
```

then you can start save your datas

```typescript
// Your data
const martinSeamusMcflyData = { name: 'Martin Seamus McFly ', age: '17', gender: 'Male', job: 'Student' };

// Save data
this.fnxSessionStorageService.setItem(JSON.stringify(martinSeamusMcflyData), 'secretKey');

// Retrieve saved data
const savedData = JSON.parse(this.fnxSessionStorageService.getItem('secretKey'));

// Remove data
this.fnxSessionStorageService.removeItem('secretKey');
```
