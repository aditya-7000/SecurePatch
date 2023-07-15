
import React, { useState, useEffect } from 'react';
import ABI from './ABI';
import Web3 from 'web3';
import Address from './Address';

const Deploy = () => {
  const [account, setAccount] = useState('');
  const [contractdata, setContractdata] = useState({});
  const [data, setData] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let { ethereum } = window;

    async function fetchData() {
      try {
        let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        const web3 = new Web3(window.ethereum);

        let contract = new web3.eth.Contract(ABI, Address);
        setContractdata(contract);

        let fetchedData = await contract.methods.getDeployed().call();
        let reversedData = [...fetchedData].reverse();
        setData(reversedData);

        console.log(reversedData);
      } catch (error) {
        setError('Error fetching data');
        console.error(error);
      }
    }

    fetchData();
    
    console.log('connection');
  }, []);

  const handleAccordionClick = (version) => {
    setSelectedVersion(version === selectedVersion ? '' : version);
  };

  return (
    <>
    <div className="container-fluid">
      <div className="container">
        <h1 className="mt-3">Downloads</h1>
        {error ? (
          <p className="text-danger">Error: {error}</p>
        ) : (
          <>
            {data.length === 0 ? (
              <p>Loading...</p>
            ) : (
              <div className="accordion" id="patchAccordion">
                {data.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading-${index}`}>
                      <button
                        className={`accordion-button ${selectedVersion === item.version ? 'active' : ''}`}
                        type="button"
                        onClick={() => handleAccordionClick(item.version)}
                      >
                        {index==0?"(Latest Release) ":""}
                        Version 
                        {" "+item.version}
                      </button>
                    </h2>
                    {selectedVersion === item.version && (
                      <div id={`collapse-${index}`} className="accordion-collapse collapse show" aria-labelledby={`heading-${index}`}>
                        <div className="accordion-body">
                          <p>
                            Download link: <a href={`https://dweb.link/ipfs/${item.cid}`}>{`https://dweb.link/ipfs/${item.cid}`}</a>
                          </p>
                          <p>Patch Notes: {item.patchnotes}</p>
                          <p>Uploaded at: {item.datetime}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default Deploy;
