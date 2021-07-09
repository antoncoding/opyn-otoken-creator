import { task, } from "hardhat/config";
import BigNumber from 'bignumber.js'
import "@nomiclabs/hardhat-waffle";

import { networkToFactory } from './config'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("createCall", "Create an call option")
  .addParam('asset', 'Asset you wanna create call option for, will also be the collateral asset.', 'UNI')
  .addParam('strikePrice', 'Human readable strike price in USD')
  .addParam('expiry', 'expiry timestamp')
  
  .setAction(async ({asset, strikePrice: strikePriceHumanReadable, expiry}, hre) => {

  const network = hre.network.name as 'mainnet' | 'kovan'

  const factory = await hre.ethers.getContractAt('IOptionFactory', networkToFactory[network])

  const assetAddress = await factory.tokens(asset)
  const assetToken = await hre.ethers.getContractAt('IERC20WithDetail', assetAddress)
  const assetDecimals = parseInt(await assetToken.decimals())
  
  const collateralExp = - assetDecimals

  // for call option, underlying should always be USDC.
  const underlying = 'USDC'
  const underlyingDecimals = 6
  const underlyingExp = - underlyingDecimals
  const oTokenExchangeExp = underlyingExp

  // hard code strikeExp to be -14
  const strikeExp = -14
  const strikePrice = new BigNumber(1e8).div(strikePriceHumanReadable).integerValue().toString()

  console.log(`Creating new ${asset} $${strikePriceHumanReadable} call option on ${network} network... 🧁`)
  
  const tx = await factory.createOptionContract(
    asset, // collateral
    collateralExp,
    underlying,
    underlyingExp,
    oTokenExchangeExp,
    strikePrice,
    strikeExp,
    asset, // strike
    expiry,
    expiry
  )

  console.log(`New otoken created! Tx: ${tx.hash} 🍜.`)
  console.log(`Please contact Opyn team to setup the token symbol & name to start using the new contract 🍨 `)
});
