



import React, { useState, useEffect} from 'react';
import ABI from './ABI';
import Web3 from 'web3';
import $ from 'jquery';
import 'datatables.net';
import Address from './Address';

const Dashboard = () => {
    const [account, setAccount] = useState('');
    const [contractdata, setContractdata] = useState({});
    const [data, setData] = useState([]);
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

            let data = await contract.methods.getUploads().call();
            setData(data.map((item) => ({ ...item, link: null })).reverse());

            console.log(data);

            $(function () {
                $('#patchtable').DataTable();
            });


        }

        Connection();
        setTransactionStatus('No transaction ongoing.');

        console.log('connection');
    }, []);


    const handleApprove = async (index) => {
        try{
        setTransactionStatus('Processing...');
        let result =await contractdata.methods.putApproved(index).send({ from: account });
        
        document.getElementById(index).innerHTML="Approved";
        setTransactionHash(result.transactionHash);
      setTransactionStatus('Transaction Complete');
        }catch(error){
            console.error(error);
            setTransactionStatus('Transaction Failed');
        }
    };
    const handleDeny = async (index) => {
        try{
        setTransactionStatus('Processing...');
        let result=await contractdata.methods.putDenied(index).send({ from: account });
        document.getElementById(index).innerHTML="Denied";
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
                <h1 className="mt-3">Dashboard</h1>
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
                                    <th>Uploaded at</th>
                                    <th>Bug IDs</th>
                                    <th>Description</th>
                                    <th>Download Link</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.patch.version}</td>
                                        <td>{item.patch.name}</td>
                                        <td>{item.datetime}</td>
                                        <td>{item.patch.bugids.toString()}</td>
                                        <td>{item.patch.description}</td>
                                        <td><a href={`https://dweb.link/ipfs/${item.cid}`} target="_blank">{`dweb.link/ipfs/${item.cid}`}</a></td>

                                        <td id={data.length-index-1}>
                                            {item.actioncomplete ?  (
                                                <p>{item.status}</p>
                                            ):(
                                                <>
                                                    <button className='btn btn-primary' onClick={() => handleApprove(data.length-index-1)}>Approve</button>
                                                    <button className='btn btn-secondary' onClick={() => handleDeny(data.length-index-1)}>Deny</button>
                                                   
                                                </>
                                            ) }

                                        </td>
                                    </tr>
                                ))}
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

export default Dashboard;

