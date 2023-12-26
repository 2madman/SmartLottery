const HDWalletProvider = require('@truffle/hdwallet-provider');

const MNEMONIC = "exchange core undo please surround behave upon angry secret bird cream bachelor"

const PRIVATE_KEY = "48e72f228974353448374f38e654d53ecd7ae6e6a730badb73aa94feb7cee923"

const private_keys = [
  PRIVATE_KEY
]

module.exports = {

  networks: {

    sepolia: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: MNEMONIC
        },
        privateKeys: private_keys,
        numberOfAddresses: 1,
        providerOrUrl: "https://sepolia.infura.io/v3/89930cbfab3e40c4a76f8a1ab466aa8c",
      }),
      network_id: 11155111, // Sepolia's network ID
      port: 8545,
    }
  },
  compilers: {
    solc: {
      version: "^0.8.21",
    }
  },

};
