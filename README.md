# oToken Creator script

Hardhat script to help you create call option with opyn v1.
Opyn v1 was design for put options, it can also be used to deploy calls, but they need be deployed as "reversed puts", which can be a little bit tricky. We create this script to help make the process easier.

## Install

```shell
npm install
```

## Setup environment

* Update `.env` file to export `INFURA_KEY`.
* Add a `.secret` file containing mnemonic to deploy otoken

## Deploy a call option

See parameter descriptions with the following command

```shell
npx hardhat createCall --help
```

### Example

```shell
npx hardhat createCall --asset ETH --strike-price 32 --expiry 1638345600 --network mainnet
```