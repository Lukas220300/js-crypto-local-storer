# js-crypto-local-storer

### methods
- remove all data

### tables
- pbkdf
  - key: uuid
  - value: pbkdf-Key as jwk (plaintext) 
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
  - value: key as jwk (encrypted)