import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

import { networkToFactory } from './config'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("create", "Create an oToken")
  .addParam('underlying', 'Underlying asset symbol', 'WETH')
  .addParam('strike', 'Strike asset symbol', 'USDC')
  .addParam('collateral', 'Underlying asset symbol', 'WETH')
  .addParam('strikePrice', 'Human readable strike price, for example 1000')
  .addParam('type', 'Call or put', 'call')
  
  .setAction(async ({underlying, strike}, hre) => {

  console.log(`strike`, strike)
  console.log(`underlying`, underlying)

  const network = hre.network.name as 'mainnet' | 'kovan'

  const factory = await hre.ethers.getContractAt('IOptionFactory', networkToFactory[network])
  
});