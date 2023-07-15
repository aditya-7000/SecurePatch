

// import React, { useState, useEffect } from 'react';
// import ABI from './ABI';
// import Web3 from 'web3';
// import Address from './Address';

// const Deploy = () => {
//   const [account, setAccount] = useState('');
//   const [contractdata, setContractdata] = useState({});
//   const [data, setData] = useState([]);
//   const [selectedPatch, setSelectedPatch] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let { ethereum } = window;

//     async function fetchData() {
//       try {
//         let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//         setAccount(accounts[0]);
//         const web3 = new Web3(window.ethereum);

//         let contract = new web3.eth.Contract(ABI, Address);
//         setContractdata(contract);

//         let data = await contract.methods.getApproved().call();
//         setData(data.map((item) => ({ ...item, link: null })));

//         console.log(data);
//       } catch (error) {
//         setError('Error fetching data');
//         console.error(error);
//       }
//     }

//     fetchData();

//     console.log('connection');
//   }, []);

//   const handleSelectionChange = (event) => {
//     setSelectedPatch(event.target.value);
//   };

//   return (
//     <div className="container-fluid">
//       <div className="container">
//         <h1 className="mt-3">Deploy</h1>
//         {error ? (
//           <p className="text-danger">Error: {error}</p>
//         ) : (
//           <>
//             <select className="form-select" value={selectedPatch} onChange={handleSelectionChange}>
//               <option value="">Select a patch</option>
//               {data.map((item, index) => (
//                 <option key={index} value={index}>
//                   {item.patch.version} - {item.patch.name}
//                 </option>
//               ))}
//             </select>
//             {selectedPatch !== '' && (
//               <div>
//                 <h2>Selected Patch:</h2>
//                 <p>
//                   Version - {data[selectedPatch]?.patch.version} - {data[selectedPatch]?.patch.name}
//                 </p>
//                 <p>Description: {data[selectedPatch]?.patch.description}</p>
//                 <p>
//                   Download link: <a href={`https://dweb.link/ipfs/${data[selectedPatch]?.cid}`}>{`https://dweb.link/ipfs/${data[selectedPatch]?.cid}`}</a>
//                 </p>
//                 <div className="mb-3">
//                   <label htmlFor="patchNotes" className="form-label">Patch Notes:</label>
//                   <textarea id="patchNotes" className="form-control" rows="4" cols="50" />
//                 </div>
//                 <button
//                   className="btn btn-primary"
//                   onClick={async () => {
//                     try {
                      
//                       await contractdata.methods.putDeployed(selectedPatch,patchnotes, version,datetime).send({ from: account });
//                       console.log('Deployment successful!');
//                       // Add any additional logic or feedback upon successful deployment
//                     } catch (error) {
//                       console.error('Deployment error:', error);
//                       // Handle error during deployment
//                     }
//                   }}
//                 >
//                   Deploy
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Deploy;

import React, { useState, useEffect } from 'react';
import ABI from './ABI';
import Web3 from 'web3';
import Address from './Address';

const Deploy = () => {
  const [account, setAccount] = useState('');
  const [contractdata, setContractdata] = useState({});
  const [data, setData] = useState([]);
  const [selectedPatch, setSelectedPatch] = useState('');
  const [patchNotes, setPatchNotes] = useState('');
  const [version, setVersion] = useState('');
  const [error, setError] = useState(null);
  let [transactionHash, setTransactionHash] = useState('');
  let [transactionStatus, setTransactionStatus] = useState('');

  useEffect(() => {
    let { ethereum } = window;

    async function fetchData() {
      try {
        let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        const web3 = new Web3(window.ethereum);

        let contract = new web3.eth.Contract(ABI, Address);
        setContractdata(contract);

        let data = await contract.methods.getApproved().call();
        setData(data.map((item) => ({ ...item, link: null })));

        console.log(data);
      } catch (error) {
        setError('Error fetching data');
        console.error(error);
        
      }
    }

    fetchData();
    setTransactionStatus('No transaction ongoing.');

    console.log('connection');
  }, []);

  const handleSelectionChange = (event) => {
    setSelectedPatch(event.target.value);
  };

  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <h1 className="mt-3">Deploy</h1>
        {error ? (
          <p className="text-danger">Error: {error}</p>
        ) : (
          <>
            <select className="form-select" value={selectedPatch} onChange={handleSelectionChange}>
              <option value="">Select a patch</option>
              {data.map((item, index) => (
                <option key={index} value={index}>
                  {item.patch.version} - {item.patch.name}
                </option>
              ))}
            </select>
            {selectedPatch !== '' && (
              <div>
                <h2>Selected Patch:</h2>
                <p>
                  Version - {data[selectedPatch]?.patch.version} - {data[selectedPatch]?.patch.name}
                </p>
                <p>Description: {data[selectedPatch]?.patch.description}</p>
                <p>
                  Download link: <a href={`https://dweb.link/ipfs/${data[selectedPatch]?.cid}`}>{`https://dweb.link/ipfs/${data[selectedPatch]?.cid}`}</a>
                </p>
                <div className="mb-3">
                  <label htmlFor="patchNotes" className="form-label">Patch Notes:</label>
                  <textarea
                    id="patchNotes"
                    className="form-control"
                    rows="4"
                    cols="50"
                    value={patchNotes}
                    onChange={(e) => setPatchNotes(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="version" className="form-label">Version:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="version"
                    value={version}
                    onChange={(e) => setVersion(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary"
                  onClick={async () => {
                    try {
                      setTransactionStatus('Processing...');
                      const currentDateTime = new Date();
                      const formattedDateTime = currentDateTime.toLocaleString();
                      // console.log(selectedPatch, patchNotes, version, formattedDateTime);
                      
                      let result=await contractdata.methods.putDeployed(selectedPatch, patchNotes, version, formattedDateTime).send({ from: account });
                      console.log('Deployment successful!');
                      setTransactionHash(result.transactionHash);
                      setTransactionStatus('Transaction Complete');
                      // Add any additional logic or feedback upon successful deployment
                    } catch (error) {
                      console.error('Deployment error:', error);
                      setTransactionStatus('Transaction Failed');
                      // Handle error during deployment
                    }
                  }}
                >
                  Deploy
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <div className="container mt-4">
          <h2>Transaction Status:</h2>
          <p>{transactionStatus}</p>
          {transactionStatus === 'Processing...' && (
            <p>Please wait while the transaction is being processed.</p>
          )}
          {transactionHash && (
            <div>
              <h2>Transaction Hash:</h2>
              <p>{transactionHash}</p>
            </div>
          )}
        </div>
    </div>
    </>
  );
};

export default Deploy;
