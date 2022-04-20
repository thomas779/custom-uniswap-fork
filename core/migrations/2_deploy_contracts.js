const Factory = artifacts.require("UniswapV2Factory.sol");
const TokenA = artifacts.require("TokenA.sol");
const TokenB = artifacts.require("TokenB.sol");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed();

  let tokenA_address, tokenB_address;
  if (network == 'mainnet'){
    tokenA_address == '';
    tokenB_address == '';
  } else {
    await deployer.deploy(TokenA);
    await deployer.deploy(TokenB);
    const tokenA = await TokenA.deployed();
    const tokenB = await TokenB.deployed();
    tokenA_address = tokenA.address;
    tokenB_address = tokenB.address;
    
  }
  await factory.createPair(tokenA_address, tokenB_address);
};
