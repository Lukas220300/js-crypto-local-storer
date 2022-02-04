# js-crypto-local-storer

### methods
- remove all data

### tables
- pbkdf (PBKDF_KEYS)
  - key: uuid : string
  - value: object
    - salt : Uint8Array
    - pbkdf-Key as jwk (plaintext) 
- ecdhPrivateKeys (ECDH_PRIVATE_KEYS)
  - key: user identifier string
  - value: key as jwk (encrypted) string
- ecdhPublicKeys (ECDH_PUBLIC_KEYS)
  - key: user identifier string
  - value: key as jwk (plaintext) string
- asymmetricPrivateKeys (RSA_PRIVATE_KEYS)
  - key: user identifier string
  - value: key as jwk (encrypted) string
- asymmetricPublicKeys (RSA_PUBLIC_KEYS)
  - key: user identifier string
  - value: key as jwk (plaintext) string
- aesKeys (AES_KEYS)
  - key: identifier uuid string
  - value: object
    - iv : Uint8Array
    - key as jwk (encrypted) string