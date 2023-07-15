

import React, { useState, useEffect, useRef } from 'react';
import ABI from './ABI';
import Web3 from 'web3';
import $ from 'jquery';
import 'datatables.net';
import Address from './Address';
import { Web3Storage } from 'https://cdn.jsdelivr.net/npm/web3.storage/dist/bundle.esm.min.js';

const UploadButton = ({ onClick }) => {
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    const files = fileInputRef.current.files;
    onClick(files);
  };

  return (
    <div>
      <input type="file" ref={fileInputRef} />
      <button className="btn btn-primary" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

const DevPatchRequests = () => {
  
  const [account, setAccount] = useState('');
  const [contractdata, setContractdata] = useState({});
  const [data, setData] = useState([]);
  const [bugdata, setBugdata] = useState([]);
  let [transactionHash, setTransactionHash] = useState('');
  let [transactionStatus, setTransactionStatus] = useState('');
  
  const client = useRef(null);

  useEffect(() => {
    let { ethereum } = window;

    async function Connection() {

      let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      const web3 = new Web3(window.ethereum);

      let contract = new web3.eth.Contract(ABI, Address);

      setContractdata(contract);

      let patchData = await contract.methods.getPatchRequests().call();
      let bugs = await contract.methods.getBugs().call();
      setData(patchData.map((item) => ({ ...item, link: null })).reverse());
      setBugdata(bugs.map((item) => ({ ...item, link: null })));
      console.log(patchData);
      console.log(bugs);

      $(function () {
        $('#patchtable').DataTable();
      });

      console.log('> 📦 creating web3.storage client');
      
      const token = process.env.REACT_APP_WEB3STORAGETOKEN;
      client.current = new Web3Storage({ token });
    }

    Connection();
    setTransactionStatus('No transaction ongoing.');

    console.log('connection');
  }, []);

  const handleUpload = async (item, files, index) => {
    try{
      setTransactionStatus('Processing...');
    console.log('> 🤖 chunking and hashing the files (in your browser!) to calculate the Content ID');
    const cid = await client.current.put(files, {
      onRootCidReady: (localCid) => {
        console.log(`> 🔑 locally calculated Content ID: ${localCid}`);
        console.log('> 📡 sending files to web3.storage');
        const updatedData = data.map((d) => {
          if (d === item) {
            return { ...d, link: `https://dweb.link/ipfs/${localCid}` };
          }
          return d;
        });
        setData(updatedData);
      },
      onStoredChunk: (bytes) => console.log(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`),
    });

    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString();

    let result=await contractdata.methods.putUpload(data.length - index - 1, cid, formattedDateTime).send({ from: account });
    setTransactionHash(result.transactionHash);
      setTransactionStatus('Transaction Complete');
  }catch(error){
    console.error(error);
      setTransactionStatus('Transaction Failed');
  }
  };

  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <h1 className="mt-3">Patch Requests</h1>
        <div className="table-responsive mt-2">
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <table id="patchtable" className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>For Version</th>
                  <th>Name</th>
                  <th>Requested at</th>
                  <th>Bugs to be fixed</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, index) => {
                  // Convert bugids array from BigInt to an array of integers
                  const bugIdsArray = item.bugids.map((bigintValue) => Number(bigintValue));

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.version}</td>
                      <td>{item.name}</td>
                      <td>{item.requesttime}</td>
                      <td>
                        {bugIdsArray.map((element) => (
                          <p key={element}>{bugdata[element - 1].name+" : "+bugdata[element - 1].description+" (priority:"+bugdata[element - 1].priority+")"}</p>

                        ))}
                      </td>
                      <td>{item.description}</td>
                      <td>
                        <UploadButton onClick={(files) => handleUpload(item, files, index)} />
                        {item.link && (
                          <div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                              {item.link}
                            </a>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          )}
        </div>
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

export default DevPatchRequests;
