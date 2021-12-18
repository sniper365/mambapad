import Web3Connect from "web3connect";
import Web3 from 'web3connect'

<Web3Connect.Button
  providerOptions={{
    portis: {
      id: "PORTIS_ID", // required
      network: "mainnet" // optional
    },
    fortmatic: {
      key: "FORTMATIC_KEY", // required
      network: "mainnet" // optional
    }
  }}
  onConnect={(provider) => {
    const web3 = new Web3(provider); // add provider to web3
  }}
  onClose={() => {
    console.log("Web3Connect Modal Closed"); // modal has closed
  }}
/>