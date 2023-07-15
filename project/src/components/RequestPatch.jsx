




// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import ABI from './ABI';
// import Address from './Address';

// const PatchForm = () => {
//   const [selectedBugs, setSelectedBugs] = useState([]);
//   const [patchId, setPatchId] = useState('');
//   const [patchDescription, setPatchDescription] = useState('');
//   const [version, setVersion] = useState('');

//   const [account, setAccount] = useState('');
//   const [contractdata, setContractdata] = useState({});
//   const [data, setData] = useState([]);
//   const [sortAscending, setSortAscending] = useState(true); // Added sorting state

//   useEffect(() => {
//     let { ethereum } = window;

//     async function Connection() {
//       let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
//       setAccount(accounts[0]);
//       const web3 = new Web3(window.ethereum);

//       let contract = new web3.eth.Contract(ABI, Address);

//       setContractdata(contract);

//       let bugsData = await contract.methods.getBugs().call();
//       setData(bugsData);

//       console.log(bugsData);
//     }

//     Connection();

//     console.log('connection');
//   }, []);

//   const handleBugSelection = (bugId) => {
//     if (selectedBugs.includes(bugId)) {
//       setSelectedBugs(selectedBugs.filter((bug) => bug !== bugId));
//     } else {
//       setSelectedBugs([...selectedBugs, bugId]);
//     }
//   };

//   const handleSortBugs = () => {
//     const sortedData = [...data].sort((a, b) =>
//       sortAscending ? Number(a.priority) - Number(b.priority) : Number(b.priority) - Number(a.priority)
//     );
//     setData(sortedData);
//     setSortAscending(!sortAscending); // Toggle the sorting state
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const patch = {
//       selectedBugs,
//       patchId,
//       patchDescription,
//       version,
//     };
//     console.log(patch);

//     const currentDateTime = new Date();
//     const formattedDateTime = currentDateTime.toLocaleString();

//     try {
//       await contractdata.methods.putPatchRequest(version, patchId, selectedBugs, patchDescription, formattedDateTime).send({ from: account });
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   return (
//     <>
//     <div className='container-fluid'>
//     <div className="container mt-4">
//       <h1>Request a Patch</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Select Bugs:</label>
//           <div className="accordion" id="bugsAccordion">
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button "
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#bugsCollapse"
//                   aria-expanded="true"
//                   aria-controls="bugsCollapse"
//                 >
//                   All Bugs
//                 </button>
//               </h2>
//               <div
//                 id="bugsCollapse"
//                 className="accordion-collapse collapse show"
//                 aria-labelledby="bugsHeading"
//                 data-bs-parent="#bugsAccordion"
//               >
//                 <div className="accordion-body">
//                   <button
//                     type="button"
//                     className={`btn btn-secondary mb-3${sortAscending ? '' : ' active'}`} // Add 'active' class if sorting is active
//                     onClick={handleSortBugs}
//                   >
//                     Sort Bugs by Priority
//                   </button>
//                   {/* {data.map((bug, index) => {
//                     const bugId = `${Number(bug.id)}`;
//                     return (
//                       <div className="form-check" key={bugId}>
//                         <input
//                           type="checkbox"
//                           className="form-check-input"
//                           id={bugId}
//                           checked={selectedBugs.includes(bugId)}
//                           onChange={() => handleBugSelection(bugId)}
//                         />
//                         <label
//                           htmlFor={bugId}
//                           className="form-check-label"
//                           title={`Description: ${bug.description}, Priority: ${bug.priority}`}
//                         >
//                           {bug.id.toString() + ' - ' + bug.name}
//                         </label>
//                       </div>
//                     );
//                   })} */}
//                   {data
//                     .filter((bug) => !bug.isfixed) // Filter bugs where isfixed is false
//                     .map((bug, index) => {
//                       const bugId = `${Number(bug.id)}`;

//                       return (
//                         <div className="form-check" key={bugId}>
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id={bugId}
//                             checked={selectedBugs.includes(bugId)}
//                             onChange={() => handleBugSelection(bugId)}
//                           />
//                           <label
//                             htmlFor={bugId}
//                             className="form-check-label"
//                             title={`Description: ${bug.description}, Priority: ${bug.priority}`}
//                           >
//                             {bug.id.toString() + ' - ' + bug.name}
//                           </label>
//                         </div>
//                       );
//                     })}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="patchId">Patch ID:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="patchId"
//             value={patchId}
//             onChange={(e) => setPatchId(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="patchDescription">Patch Description:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="patchDescription"
//             value={patchDescription}
//             onChange={(e) => setPatchDescription(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="version">For Version:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="version"
//             value={version}
//             onChange={(e) => setVersion(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-secondary">
//           Submit
//         </button>
//       </form>
//     </div>
//     </div>
//     </>
//   );
// };

// export default PatchForm;






import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import ABI from './ABI';
import Address from './Address';

const PatchForm = () => {
  const [selectedBugs, setSelectedBugs] = useState([]);
  const [patchId, setPatchId] = useState('');
  const [patchDescription, setPatchDescription] = useState('');
  const [version, setVersion] = useState('');

  const [account, setAccount] = useState('');
  const [contractdata, setContractdata] = useState({});
  const [data, setData] = useState([]);
  const [sortAscending, setSortAscending] = useState(true); // Added sorting state
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

      let bugsData = await contract.methods.getBugs().call();
      setData(bugsData);

      console.log(bugsData);
    }

    Connection();
    setTransactionStatus('No transaction ongoing.');

    console.log('connection');
  }, []);

  const handleBugSelection = (bugId) => {
    if (selectedBugs.includes(bugId)) {
      setSelectedBugs(selectedBugs.filter((bug) => bug !== bugId));
    } else {
      setSelectedBugs([...selectedBugs, bugId]);
    }
  };

  const handleSortBugs = () => {
    const sortedData = [...data].sort((a, b) =>
      sortAscending ? Number(a.priority) - Number(b.priority) : Number(b.priority) - Number(a.priority)
    );
    setData(sortedData);
    setSortAscending(!sortAscending); // Toggle the sorting state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const patch = {
      selectedBugs,
      patchId,
      patchDescription,
      version,
    };
    console.log(patch);

    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();

    try {
      setTransactionStatus('Processing...');
      const result =await contractdata.methods.putPatchRequest(version, patchId, selectedBugs, patchDescription, formattedDateTime).send({ from: account });
      
      setTransactionHash(result.transactionHash);
      setTransactionStatus('Transaction Complete');
    } catch (error) {
      setTransactionStatus('Transaction Failed');
      console.error(error);
    }
  };


  return (
    <>
    <div className='container-fluid'>
    <div className="container mt-4">
      <h1>Request a Patch</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Select Bugs:</label>
          <div className="accordion" id="bugsAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#bugsCollapse"
                  aria-expanded="true"
                  aria-controls="bugsCollapse"
                >
                  All Bugs
                </button>
              </h2>
              <div
                id="bugsCollapse"
                className="accordion-collapse collapse show"
                aria-labelledby="bugsHeading"
                data-bs-parent="#bugsAccordion"
              >
                <div className="accordion-body">
                  <button
                    type="button"
                    className={`btn btn-secondary mb-3${sortAscending ? '' : ' active'}`} // Add 'active' class if sorting is active
                    onClick={handleSortBugs}
                  >
                    Sort Bugs by Priority
                  </button>
                  {/* {data.map((bug, index) => {
                    const bugId = `${Number(bug.id)}`;
                    return (
                      <div className="form-check" key={bugId}>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id={bugId}
                          checked={selectedBugs.includes(bugId)}
                          onChange={() => handleBugSelection(bugId)}
                        />
                        <label
                          htmlFor={bugId}
                          className="form-check-label"
                          title={`Description: ${bug.description}, Priority: ${bug.priority}`}
                        >
                          {bug.id.toString() + ' - ' + bug.name}
                        </label>
                      </div>
                    );
                  })} */}
                  {data
                    .filter((bug) => !bug.isfixed) // Filter bugs where isfixed is false
                    .map((bug, index) => {
                      const bugId = `${Number(bug.id)}`;

                      return (
                        <div className="form-check" key={bugId}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={bugId}
                            checked={selectedBugs.includes(bugId)}
                            onChange={() => handleBugSelection(bugId)}
                          />
                          <label
                            htmlFor={bugId}
                            className="form-check-label"
                            title={`Description: ${bug.description}, Priority: ${bug.priority}`}
                          >
                            {bug.id.toString() + ' - ' + bug.name}
                          </label>
                        </div>
                      );
                    })}

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="patchId">Patch ID:</label>
          <input
            type="text"
            className="form-control"
            id="patchId"
            value={patchId}
            onChange={(e) => setPatchId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="patchDescription">Patch Description:</label>
          <input
            type="text"
            className="form-control"
            id="patchDescription"
            value={patchDescription}
            onChange={(e) => setPatchDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="version">For Version:</label>
          <input
            type="text"
            className="form-control"
            id="version"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
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

export default PatchForm;