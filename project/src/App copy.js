import React from 'react';
import Web3 from 'web3';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import RequestPatch from './components/RequestPatch';
import Deploy from './components/Deploy';
import KnownBugs from './components/KnownBugs';
import Requests from './components/Requests';
import Download from './components/Download';
import Notifications from './components/Notifications';
import BugReport from './components/BugReport';

const AdminComponent = () => {
  return (
    <div>
      <h1>Welcome, Admin!</h1>
      {/* ... */}
    </div>
  );
};

const UserComponent = () => {
  return (
    <div>
      <h1>Welcome, User!</h1>
      {/* ... */}
    </div>
  );
};

const QCComponent = () => {
  return (
    <div>
      <h1>Welcome, QC!</h1>
      {/* ... */}
    </div>
  );
};

const DeveloperComponent = () => {
  return (
    <div>
      <h1>Welcome, Developer!</h1>
      {/* ... */}
    </div>
  );
};

const LabellerComponent = () => {
  return (
    <div>
      <h1>Welcome, Labeller!</h1>
      {/* ... */}
    </div>
  );
};

let account;
    const connectMetamask = async () => {
        if (window.ethereum !== undefined) {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            account = accounts[0];
            alert(account);
        }
    }

    const connectContract = async () => {
        const ABI = [
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "i",
                "type": "uint256"
              }
            ],
            "name": "fixbug",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "i",
                "type": "uint256"
              }
            ],
            "name": "putApproved",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "n",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "d",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "p",
                "type": "uint256"
              }
            ],
            "name": "putBug",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "i",
                "type": "uint256"
              }
            ],
            "name": "putDeployed",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "v",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "n",
                "type": "string"
              },
              {
                "internalType": "uint256[]",
                "name": "b",
                "type": "uint256[]"
              },
              {
                "internalType": "string",
                "name": "d",
                "type": "string"
              }
            ],
            "name": "putPatchRequest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "i",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "cid",
                "type": "string"
              }
            ],
            "name": "putUpload",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "Approved",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "version",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256[]",
                    "name": "bugids",
                    "type": "uint256[]"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  }
                ],
                "internalType": "struct requestPatch.Patch",
                "name": "patch",
                "type": "tuple"
              },
              {
                "internalType": "string",
                "name": "cid",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "approvedCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "bugCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "Buglist",
            "outputs": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "priority",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isfixed",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "Deployed",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "version",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256[]",
                    "name": "bugids",
                    "type": "uint256[]"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  }
                ],
                "internalType": "struct requestPatch.Patch",
                "name": "patch",
                "type": "tuple"
              },
              {
                "internalType": "string",
                "name": "cid",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "deployedCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getApproved",
            "outputs": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "string",
                        "name": "version",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                      },
                      {
                        "internalType": "uint256[]",
                        "name": "bugids",
                        "type": "uint256[]"
                      },
                      {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                      }
                    ],
                    "internalType": "struct requestPatch.Patch",
                    "name": "patch",
                    "type": "tuple"
                  },
                  {
                    "internalType": "string",
                    "name": "cid",
                    "type": "string"
                  }
                ],
                "internalType": "struct requestPatch.Upload[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "i",
                "type": "uint256"
              }
            ],
            "name": "getBug",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "priority",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "isfixed",
                    "type": "bool"
                  }
                ],
                "internalType": "struct requestPatch.Bug",
                "name": "",
                "type": "tuple"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getBugs",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "priority",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "isfixed",
                    "type": "bool"
                  }
                ],
                "internalType": "struct requestPatch.Bug[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getDeployed",
            "outputs": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "string",
                        "name": "version",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                      },
                      {
                        "internalType": "uint256[]",
                        "name": "bugids",
                        "type": "uint256[]"
                      },
                      {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                      }
                    ],
                    "internalType": "struct requestPatch.Patch",
                    "name": "patch",
                    "type": "tuple"
                  },
                  {
                    "internalType": "string",
                    "name": "cid",
                    "type": "string"
                  }
                ],
                "internalType": "struct requestPatch.Upload[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "i",
                "type": "uint256"
              }
            ],
            "name": "getPatchRequest",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "version",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256[]",
                    "name": "bugids",
                    "type": "uint256[]"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  }
                ],
                "internalType": "struct requestPatch.Patch",
                "name": "",
                "type": "tuple"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getPatchRequests",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "version",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256[]",
                    "name": "bugids",
                    "type": "uint256[]"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  }
                ],
                "internalType": "struct requestPatch.Patch[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "i",
                "type": "uint256"
              }
            ],
            "name": "getUpload",
            "outputs": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "string",
                        "name": "version",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                      },
                      {
                        "internalType": "uint256[]",
                        "name": "bugids",
                        "type": "uint256[]"
                      },
                      {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                      }
                    ],
                    "internalType": "struct requestPatch.Patch",
                    "name": "patch",
                    "type": "tuple"
                  },
                  {
                    "internalType": "string",
                    "name": "cid",
                    "type": "string"
                  }
                ],
                "internalType": "struct requestPatch.Upload",
                "name": "",
                "type": "tuple"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "getUploads",
            "outputs": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "string",
                        "name": "version",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                      },
                      {
                        "internalType": "uint256[]",
                        "name": "bugids",
                        "type": "uint256[]"
                      },
                      {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                      }
                    ],
                    "internalType": "struct requestPatch.Patch",
                    "name": "patch",
                    "type": "tuple"
                  },
                  {
                    "internalType": "string",
                    "name": "cid",
                    "type": "string"
                  }
                ],
                "internalType": "struct requestPatch.Upload[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "patchCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "Patches",
            "outputs": [
              {
                "internalType": "string",
                "name": "version",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "uploadCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "Uploads",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "version",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256[]",
                    "name": "bugids",
                    "type": "uint256[]"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  }
                ],
                "internalType": "struct requestPatch.Patch",
                "name": "patch",
                "type": "tuple"
              },
              {
                "internalType": "string",
                "name": "cid",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ];
        const address = "0x9d2C75D7225Cb142c7aAC8877FEbD866F1A2cB37";

        if (window.ethereum !== undefined) {
            try {
                await window.ethereum.enable();
                window.web3 = new Web3(window.ethereum);
                window.contract = new window.web3.eth.Contract(ABI, address);
              alert("Connected to smart contract");
            } catch (error) {
                console.error(error);
            }
        }
    }
    export const submitBug = async (n,d,p) => {
      try {
          await window.contract.methods.putBug(n,d,p).send({ from: account });
          
      } catch (error) {
          console.error(error);
      }
    }
    export const getBugsFromContract = async () => {
      try {
        const bugList = window.contract.methods.bugCount().call();
        console.log(bugList);
      } catch (error) {
        console.error(error);
      }
    };


const App = () => {
  
  
  const currentUser = {
    type: 'labeller',
    id: 123,
  };
  connectMetamask();
  connectContract();
  
  // Rest of the code remains the same
  const { type } = currentUser;
  return (
    <div>
      <Navbar type={type}/>
      <Routes>
        <Route path="/*" element={<Navigate to={`/${type}`} replace={true} />} />
        
        <Route path="/admin/*" element={type === 'admin' ? <AdminComponent /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/admin/dashboard" element={type === 'admin' ?  <Dashboard/>: <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/admin/patch-request" element={type === 'admin' ?  <RequestPatch/>: <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/admin/known-bugs" element={type === 'admin' ?  <KnownBugs/>: <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/admin/deploy" element={type === 'admin' ?  <Deploy/>: <Navigate to={`/${type}`} replace={true} />} />

        <Route path="/user/*" element={type === 'user' ? <UserComponent /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/user/download" element={type === 'user' ? <Download /> : <Navigate to={`/${type}`} replace={true} />} />

        <Route path="/developer/*" element={type === 'developer' ? <DeveloperComponent /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/developer/requests" element={type === 'developer' ? <Requests /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/developer/notifications" element={type === 'developer' ? <Notifications /> : <Navigate to={`/${type}`} replace={true} />} />

        <Route path="/qc/*" element={type === 'qc' ? <QCComponent /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/qc/dashboard" element={type === 'qc' ? <Dashboard /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/qc/known-bugs" element={type === 'qc' ? <KnownBugs /> : <Navigate to={`/${type}`} replace={true} />} />

        <Route path="/labeller/*" element={type === 'labeller' ? <LabellerComponent /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/labeller/known-bugs" element={type === 'labeller' ? <KnownBugs /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/labeller/bug-report" element={type === 'labeller' ? <BugReport /> : <Navigate to={`/${type}`} replace={true} />} />
        
      </Routes>
      {/* <Routes>
        <Route path="/*" element={<Navigate to={`/${type}`} replace={true} />} />
        <Route path="/admin/*" element={type === 'admin' ? <AdminComponent /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/user/*" element={type === 'user' ? <UserComponent /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/developer/*" element={type === 'developer' ? <DeveloperComponent /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/qc/*" element={type === 'qc' ? <QCComponent /> : <Navigate to={`/${type}`} replace={true} />} />
        <Route path="/labeller/*" element={type === 'labeller' ? <LabellerComponent /> : <Navigate to={`/${type}`} replace={true} />} />
      </Routes> */}
    </div>
  );
};

export default App;

