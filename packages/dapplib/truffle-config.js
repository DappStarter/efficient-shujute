require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn purpose half prize outer truly'; 
let testAccounts = [
"0xa03db028c249446bd7f2d35dfa02588800b074c12da829742a9520ad04f13064",
"0x6a7115ce8e0459c564cde65a69f2e11eb942c21436e09ff2ac5833f857013c75",
"0x5d82fe48dd1c6bb12a2cb60168b9706124706c48b5cc418ef8ef168001e9f8ee",
"0x79cc249bd2b6107448ed1471bcf362b38290688843e6ec73cf6558e9d81778e3",
"0x2215376de96da34e041c552bd64019bef9c20099f5707ea6ec654ef17a22584c",
"0xd37846e746b340ebde8aa7a08d28aff7175336868b7dc035eb12c94892c000b7",
"0x218a3bbf33f8bec9d11ba69ceb15bd1cae690823267192a4a9c97fb3340ab632",
"0x4f7b59449a3f57e20f58ec19f82100c91a19689b6f4867f5e08c86d172b7041e",
"0x0c1b02788e7ea7f6977b5de81ab8812d787689ac003f30edfd1e2831dd4e8c4a",
"0x60ad7b7ff1826451b5a22eb37eb13784f9c872b07ec66db53a6edebf096c710c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
