# js-crypto-local-storer

### methods
- remove all data

### tables
- pbkdf
  - key: uuid
  - value: object
    - salt
    - pbkdf-Key as jwk (plaintext) 
- ecdhPrivateKeys
  - key: user identifier
  - value: key as jwk (encrypted)
- ecdhPublicKeys
  - key: user identifier
  - value: key as jwk (plaintext)
- asymmetricPrivateKeys
  - key: user identifier
  - value: key as jwk (encrypted)
- asymmetricPublicKeys
  - key: user identifier
  - value: key as jwk (plaintext)
- aesKeys
  - key: identifier uuid
  - value: object
    - iv
    - key as jwk (encrypted)