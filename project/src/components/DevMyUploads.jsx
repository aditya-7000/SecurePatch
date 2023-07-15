// import React from "react";
// const MyUploads=()=>{
//     return(
//         <h1>Notifications</h1>
//     );
// }
// export default MyUploads




import React, { useState, useEffect } from 'react';
import ABI from './ABI';
import Web3 from 'web3';
import $ from 'jquery';
import 'datatables.net';
import Address from './Address';




const MyUploads = () => {
    const [account, setAccount] = useState('');
    const [contractdata, setContractdata] = useState({});
    const [data, setData] = useState([]);
    

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

        console.log('connection');
    }, []);


    const handleApprove = async (index) => {

        await contractdata.methods.putApproved(index).send({ from: account });
        window.location.reload(true);
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
                                    <th>Version</th>
                                    <th>Name</th>
                                    <th>Uploaded at</th>
                                    
                                    
                                    <th>Download Link</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.patch.version}</td>
                                        <td>{item.patch.name}</td>
                                        <td>{item.datetime}</td>
                                        
                                        
                                        <td><a href={`https://dweb.link/ipfs/${item.cid}`} target="_blank">{`dweb.link/ipfs/${item.cid}`}</a></td>

                                        <td>
                                            {item.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default MyUploads;