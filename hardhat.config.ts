import '@nomiclabs/hardhat-waffle';

import * as fs from 'fs';
import * as dotenv from 'dotenv'

import './tasks/createOToken'

dotenv.config()

const mnemonic = fs.existsSync('.secret')
  ? fs
      .readFileSync('.secret')
      .toString()
      .trim()
  : "test test test test test test test test test test test junk"

const infuraKey = process.env.INFURA_KEY

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

export default {
  networks: {
    hardhat: {},
    ropsten: {
      url: `https://ropsten.infura.io/v3/${infuraKey}`,
      accounts: {
        mnemonic: mnemonic,
      },
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraKey}`,
      accounts: {
        mnemonic: mnemonic,
      },
    },
  },
  solidity: '0.7.3',
  settings: {
    optimizer: {
      enabled: true,
      runs: 5,
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  }
};
