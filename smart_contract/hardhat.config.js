require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/UUsV4fP-SvobpyeYb_i4cApYk_GFmD8P',
      accounts: ['e2fc0fa6bdf3536da51b4456542a3bf113a062072c538e36c9032115a446a490'],
    },
  },
};