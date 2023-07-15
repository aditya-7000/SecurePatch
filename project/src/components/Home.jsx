

// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import ABI from './ABI';
// import Address from './Address';

// const Home = (props) => {
//   const [account, setAccount] = useState('');
//   const [contractdata, setContractdata] = useState({});

//   useEffect(() => {
//     let { ethereum } = window;

//     async function Connection() {
//       let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//       setAccount(accounts[0]);
//       const web3 = new Web3(window.ethereum);
//       let contract = new web3.eth.Contract(ABI, Address);
//       setContractdata(contract);
//       // Write the code here for calling your data
//     }

//     Connection();
//     console.log('connection');
//   }, []);

//   return (
//     <>
//     <div className="container-fluid text-center mt-3">
//         <h4>Welcome, {props.usertype}!</h4>
//         <br />
//         <p>Wallet address: {account}</p>
//         {props.usertype === 'user' && <p>A user can download deployed patches.</p>}
//         {props.usertype === 'labeller' && <p>A labeller can report bugs and prioritize them.</p>}
//         {props.usertype === 'qc' && <p>A qc can approve an upload made by a developer.</p>}
//         {props.usertype === 'developer' && (
//           <p>A developer can view patch requests and upload patches to the IPFS.</p>
//         )}
//         {props.usertype === 'admin' && (
//           <p>
//             An admin can create other user accounts.<br /> An admin can request a
//             developer for a patch and deploy an approved patch.<br /> Admin also has QC and
//             Labeller permissions.
//           </p>
//         )}
//         <div classname="container w-30">
//         <div className="card mt-5 ">
//         <div className="card-body">
//           <h5 className="card-title">IMPORTANT</h5>
//           <p className="card-text">Make sure your metamask wallet is connected to the Polygon Mumbai testnet.</p>
//         </div>
//         </div>
//       </div>
//       </div>
      
//     </>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import ABI from './ABI';
// import Address from './Address';

// const Home = (props) => {
//   const [account, setAccount] = useState('');
//   const [contractdata, setContractdata] = useState({});

//   useEffect(() => {
//     let { ethereum } = window;

//     async function Connection() {
//       let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//       setAccount(accounts[0]);
//       const web3 = new Web3(window.ethereum);
//       let contract = new web3.eth.Contract(ABI, Address);
//       setContractdata(contract);
      
//     }

//     Connection();
//     console.log('connection');
//   }, []);

//   return (
//     <>
//       <div className="container-fluid text-center mt-3">
//         <h4>Welcome, {props.usertype}!</h4>
//         <br />
//         <p>Wallet address: {account}</p>
//         {props.usertype === 'user' && <p>A user can download deployed patches.</p>}
//         {props.usertype === 'labeller' && <p>A labeller can report bugs and prioritize them.</p>}
//         {props.usertype === 'qc' && <p>A qc can approve an upload made by a developer.</p>}
//         {props.usertype === 'developer' && (
//           <p>A developer can view patch requests and upload patches to the IPFS.</p>
//         )}
//         {props.usertype === 'admin' && (
//           <p>
//             An admin can create other user accounts.<br /> An admin can request a
//             developer for a patch and deploy an approved patch.<br /> Admin also has QC and
//             Labeller permissions.
//           </p>
//         )}
//         <div className="container">
//           <div className="card mt-5 w-50 mx-auto">
//             <div className="card-body">
//               <h5 className="card-title">IMPORTANT</h5>
//               <p className="card-text">Make sure your MetaMask wallet is connected to the Polygon Mumbai testnet.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import ABI from './ABI';
import Address from './Address';

const Home = (props) => {
  const [account, setAccount] = useState('');
  const [contractdata, setContractdata] = useState({});
  const [contractAddress, setContractAddress] = useState('');

  useEffect(() => {
    let { ethereum } = window;

    async function Connection() {
      let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      const web3 = new Web3(window.ethereum);
      let contract = new web3.eth.Contract(ABI, Address);
      setContractdata(contract);
      setContractAddress(contract.options.address);
      // Write the code here for calling your data
    }

    Connection();
    console.log('connection');
  }, []);

  return (
    <>
      <div className="container-fluid text-center mt-3">
        <h3>Welcome, {props.usertype}!</h3>
        <br />
        {contractAddress && (
        <div className="container-fluid text-center mt-1">
          <p>Contract address : {contractAddress}</p>
        </div>
      )}
        <p>Wallet : {account}</p>
        {props.usertype === 'user' && <p>A user can download deployed patches.</p>}
        {props.usertype === 'labeller' && <p>A labeller can report bugs and prioritize them.</p>}
        {props.usertype === 'qc' && <p>A qc can approve an upload made by a developer.</p>}
        {props.usertype === 'developer' && (
          <p>A developer can view patch requests and upload patches to the IPFS.</p>
        )}
        {props.usertype === 'admin' && (
          <p>
            An admin can create other user accounts.<br /> An admin can request a
            developer for a patch and deploy an approved patch.<br /> Admin also has QC and
            Labeller permissions.
          </p>
        )}
        
        <div className="container">
          <div className="card mt-5 w-50 mx-auto">
            <div className="card-body">
              <h5 className="card-title">IMPORTANT</h5>
              <p className="card-text">Make sure your MetaMask wallet is connected to the Polygon Mumbai testnet.</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
