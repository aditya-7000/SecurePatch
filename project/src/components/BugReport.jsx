

// // import React, { useState,useEffect } from 'react';
// // import ABI from './ABI';
// // import Web3 from 'web3';
// // import Address from './Address';

// // const BugReport = () => {
// //   let [account, setAccount] = useState("");
// //   let [contractdata, setContractdata] = useState({});
// //     // let { ethereum } = window;

// //     useEffect(() => {
// //       let { ethereum } = window; 
// //       async function Connection() {
// //             let accounts = await ethereum.request({ method: "eth_requestAccounts" });
// //             setAccount(accounts[0]);
// //             const web3 = new Web3(window.ethereum);
// //             // const Address = "0x44eFE5c193069719c4fcD5c2A2017993cEF8e6F7";
// //             let contract = new web3.eth.Contract(ABI, Address);
// //             setContractdata(contract);
// //             //Write the code here for calling your data
// //         }
// //         Connection();
// //         console.log("connection")
// //     }, []);

// //     const submitBug = async (name,desc,priority) => {
// //       try {
// //           await contractdata.methods.putBug(name,desc,priority).send({ from: account });
          
// //       } catch (error) {
// //           console.error(error);
// //       }
// //     }

// //   const [bugName, setBugName] = useState('');
// //   const [bugDescription, setBugDescription] = useState('');
// //   const [priority, setPriority] = useState(3);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const bug = {
// //       bugName,
// //       bugDescription,
// //       priority,
// //     };
// //     console.log(bug.bugName,bug.bugDescription,bug.priority);
// //     submitBug(bug.bugName,bug.bugDescription,bug.priority);
// //     // console.log(bugString);
// //     // console.log(getBugsFromContract())

// //   };

// //   return (
// //     <>
// //     <div className='container-fluid'>
// //     <div className="container mt-4">
// //       <h1>Report a Bug</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="mb-3">
// //           <label htmlFor="bugName" className="form-label">Bug Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="bugName"
// //             value={bugName}
// //             onChange={(e) => setBugName(e.target.value)}
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="bugDescription" className="form-label">Bug Description:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="bugDescription"
// //             value={bugDescription}
// //             onChange={(e) => setBugDescription(e.target.value)}
// //           />
// //         </div>
// //         <div className="mb-3">
// //           <label htmlFor="priority" className="form-label">Priority:</label>
// //           <select
// //             className="form-select"
// //             id="priority"
// //             value={priority}
// //             onChange={(e) => setPriority(Number(e.target.value))}
// //           >
// //             <option value={1}>1</option>
// //             <option value={2}>2</option>
// //             <option value={3}>3</option>
// //           </select>
// //         </div>
// //         <button type="submit" className="btn btn-secondary">Submit</button>
// //       </form>
// //       </div>
      
// //     </div></>
// //   );
// // };

// // export default BugReport;

// import React, { useState, useEffect } from 'react';
// import ABI from './ABI';
// import Web3 from 'web3';
// import Address from './Address';

// const BugReport = () => {
//   let [account, setAccount] = useState('');
//   let [contractdata, setContractdata] = useState({});
//   let [transactionHash, setTransactionHash] = useState('');

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
//   }, []);

//   const submitBug = async (name, desc, priority) => {
//     try {
//       const result = await contractdata.methods.putBug(name, desc, priority).send({ from: account });
//       setTransactionHash(result.transactionHash);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const [bugName, setBugName] = useState('');
//   const [bugDescription, setBugDescription] = useState('');
//   const [priority, setPriority] = useState(3);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const bug = {
//       bugName,
//       bugDescription,
//       priority,
//     };
//     submitBug(bug.bugName, bug.bugDescription, bug.priority);
//   };

//   return (
//     <>
//       <div className='container-fluid'>
//         <div className="container mt-4">
//           <h1>Report a Bug</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="bugName" className="form-label">Bug Name:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="bugName"
//                 value={bugName}
//                 onChange={(e) => setBugName(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="bugDescription" className="form-label">Bug Description:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="bugDescription"
//                 value={bugDescription}
//                 onChange={(e) => setBugDescription(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="priority" className="form-label">Priority:</label>
//               <select
//                 className="form-select"
//                 id="priority"
//                 value={priority}
//                 onChange={(e) => setPriority(Number(e.target.value))}
//               >
//                 <option value={1}>1</option>
//                 <option value={2}>2</option>
//                 <option value={3}>3</option>
//               </select>
//             </div>
//             <button type="submit" className="btn btn-secondary">Submit</button>
//           </form>
//         </div>
//         {transactionHash && (
//           <div className="container mt-4">
//             <h2>Transaction Hash:</h2>
//             <p>{transactionHash}</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BugReport;

import React, { useState, useEffect } from 'react';
import ABI from './ABI';
import Web3 from 'web3';
import Address from './Address';

const BugReport = () => {
  let [account, setAccount] = useState('');
  let [contractdata, setContractdata] = useState({});
  let [transactionHash, setTransactionHash] = useState('');
  let [transactionStatus, setTransactionStatus] = useState('');

  useEffect(() => {
    let { ethereum } = window;
    async function Connection() {
      let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      const web3 = new Web3(window.ethereum);
      let contract = new web3.eth.Contract(ABI, Address);
      setContractdata(contract);
    }
    Connection();
    setTransactionStatus('No transaction ongoing.');
  }, []);

  const submitBug = async (name, desc, priority) => {
    try {
      setTransactionStatus('Processing...');
      const result = await contractdata.methods.putBug(name, desc, priority).send({ from: account });
      setTransactionHash(result.transactionHash);
      setTransactionStatus('Transaction Complete');
    } catch (error) {
      console.error(error);
      setTransactionStatus('Transaction Failed');
    }
  };

  const [bugName, setBugName] = useState('');
  const [bugDescription, setBugDescription] = useState('');
  const [priority, setPriority] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bug = {
      bugName,
      bugDescription,
      priority,
    };
    submitBug(bug.bugName, bug.bugDescription, bug.priority);
  };

  return (
    <>
      <div className='container-fluid'>
        <div className="container mt-4">
          <h1>Report a Bug</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="bugName" className="form-label">Bug Name:</label>
              <input
                type="text"
                className="form-control"
                id="bugName"
                value={bugName}
                onChange={(e) => setBugName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bugDescription" className="form-label">Bug Description:</label>
              <input
                type="text"
                className="form-control"
                id="bugDescription"
                value={bugDescription}
                onChange={(e) => setBugDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="priority" className="form-label">Priority:</label>
              <select
                className="form-select"
                id="priority"
                value={priority}
                onChange={(e) => setPriority(Number(e.target.value))}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <button type="submit" className="btn btn-secondary">Submit</button>
          </form>
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

export default BugReport;
