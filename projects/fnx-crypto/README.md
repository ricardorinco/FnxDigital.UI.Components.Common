# FnxCrypto Service

A service library for encrypt and decrypt values in your angular project.
This library was generated with [Angular CLI](https://github.com/angular/angular-cli)

## Installing

In your Angular project run

```typescript
npm i --save @fnx-components/crypto
```

## Getting Started

After installing it you need inject the fnxCryptoService in your controller

```typescript
constructor(
    ...
    private readonly fnxCryptoService: FnxCryptoService
) { }
```

then you can start encrypt and decrypt your values

```typescript
// Your secret key
const secretKey = 'lANQBCf8TdBWhMHJm-IBlQ';

// Encrypt value
const encryptedValue = this.fnxCryptoService.encrypt(`Roads? Where We're Going We Don't Need Roads`, secretKey);

// Decrypted value
const encryptedValue = 'U2FsdGVkX1+HPC4KY6T9tY5dFnqc9sEVcuTXizTEfdZzdZsOq9d708EzDT0SDtepcExTy3N3BeBxaf8YpQe1Kw==';
const decryptedValue = this.fnxCryptoService.decrypt(encryptedValue, secretKey);
```
