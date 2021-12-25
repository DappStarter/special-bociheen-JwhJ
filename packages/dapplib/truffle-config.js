require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth meadow unaware harvest drip flock tail'; 
let testAccounts = [
"0x36045943f522243110fbfe7b4742c91934d525365d8e9d48ca3d61701b1b4551",
"0x4565c4dc33479f75bc193d1b8dc0a97a542569ea2948e1ccb82c9a3ef0459942",
"0x0fea20bd5593ec690ba902049a36e173bf6d6f2b0da52181ebb16caa8b0d5451",
"0xa9c9c89979dba349df0091a32f35c1fc2e4d585838d86319915f7c4b3b9ee1c6",
"0x38f578d9d2010f78b8245e7ae9923f9c60d8b3dde4be9df703fa8009b8910194",
"0x3d52baf5d1441f998134f48d668d48f6224d2093cd6cb40b2a2b9f3b339bb1fd",
"0x21ec951dd02186e85f40b34429244dff1dfb1f0e8a1df486e249b6c7a1ea75f0",
"0xfdde08623ad2e50bc2e5eeca10acf9b7b1b69fa629b3724e0edddd75cbc52304",
"0xef1d8ef2e70513472edb583c83facc15772ba98ce21ff2c923e7ea92bbf7a371",
"0x6db69fed4e4e1a83e885c0e3e9ff171d06f4ca1714a25219833cbd17c327f544"
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
            version: '^0.8.0'
        }
    }
};

