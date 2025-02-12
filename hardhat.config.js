require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
// var initHre = require("./hardhat/hardhat").initHre;

const INFURA_PROJECT_ID = "719d739434254b88ac95d53e2b6ac997";
/**
 * @type import('hardhat/config').HardhatUserConfig
 *
 * */
module.exports = {
    networks: {

        hardhat: {
            loggingEnabled: true,
            allowUnlimitedContractSize: true
        },

        axon_test: {
            url: 'http://127.0.0.1:8000',
            accounts: {
                mnemonic: "test test test test test test test test test test test junk",
                path: "m/44'/60'/0'/0",
                initialIndex: 0,
                count: 20,
                passphrase: "",
            },
        },
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
            accounts: {
                mnemonic: "test test test test test test test test test test test junk",
                path: "m/44'/60'/0'/0",
                initialIndex: 0,
                count: 20,
                passphrase: "",
            },

            // gas: 1_000_000_000_000_001, // Infura seems to cap it at 19981536.
            // gasPrice: 1
        },
    },
    //bsc_test
    // defaultNetwork:"axon_test",
    // defaultNetwork: "gw_alphanet_v1", //gw_local_kit_net_v1 gw_testnet_v11
    // defaultNetwork: "rinkeby",
    // defaultNetwork: "gw_local_kit_net_v1",
    
    solidity: {
        version: "0.8.19",
            settings: {
              viaIR: true,
              optimizer: {
                enabled: true,
                details: {
                  yulDetails: {
                    optimizerSteps: "u",
                  },
                },
              },
            },
            allowUnlimitedContractSize :true
          },
    mocha: {
        /** Reporter name or constructor. */
        reporter: "mochawesome"
        // timeout: 5000000,
        // /** Reporter settings object. */
        // reporterOptions: {
        //     output: "test-results-1.json"
        // },
        // reporterOptions: {
        //     reportFilename: "[status]_[datetime]-[name]-report",
        //     timestamp: "longDate"
        // }
        // mochawesome:{
        //     reporterOptions: {
        //         reportFilename: "[status]_[datetime]-[name]-report",
        //         timestamp: "longDate"
        //     }
        // }

    }
};