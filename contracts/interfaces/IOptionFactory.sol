/**
 *Submitted for verification at Etherscan.io on 2020-03-17
*/

// File: @openzeppelin/contracts/GSN/Context.sol

pragma solidity ^0.7.0;


interface IOptionFactory {
    /**
     * @notice creates a new Option Contract
     * @param _collateralType The collateral asset. Eg. "ETH"
     * @param _collateralExp The number of decimals the collateral asset has
     * @param _underlyingType The underlying asset. Eg. "DAI"
     * @param _underlyingExp The precision of the underlying asset. Eg. (-18 if Dai)
     * @param _oTokenExchangeExp Units of underlying that 1 oToken protects
     * @param _strikePrice The amount of strike asset that will be paid out
     * @param _strikeExp The precision of the strike Price
     * @param _strikeAsset The asset in which the insurance is calculated
     * @param _expiry The time at which the insurance expires
     * @param _windowSize UNIX time. Exercise window is from `expiry - _windowSize` to `expiry`.
     */
    function createOptionsContract(
        string memory _collateralType,
        int32 _collateralExp,
        string memory _underlyingType,
        int32 _underlyingExp,
        int32 _oTokenExchangeExp,
        uint256 _strikePrice,
        int32 _strikeExp,
        string memory _strikeAsset,
        uint256 _expiry,
        uint256 _windowSize
    ) external returns (address);
}