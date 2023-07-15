
import React, { useState, useEffect } from 'react';
import ABI from './ABI';
import Web3 from 'web3';
import $ from 'jquery';
import 'datatables.net';
import Address from './Address';

const KnownBugs = () => {
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

      let bugsData = await contract.methods.getBugs().call();
      setData(bugsData);

      console.log(bugsData);

      $(function () {
        $('#bugtable').DataTable();
      });

    

    }

    Connection();

    console.log('connection');
  }, []);

  return (
    <>
    <div className='container-fluid'>
        <div className='container'>
        <h1 className='mt-3'>Known Bugs</h1>
    <div className="table-responsive mt-2" >
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table id="bugtable" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Bug ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Fix status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{Number(item.id)}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.priority.toString()}</td>
                <td>{item.isfixed ? 'Fixed' : 'Pending'}</td>
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

export default KnownBugs;
