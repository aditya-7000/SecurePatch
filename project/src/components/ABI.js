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
		"name": "putDenied",
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
				"name": "patchnotes",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "version",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "datetime",
				"type": "string"
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
			},
			{
				"internalType": "string",
				"name": "requesttime",
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
			},
			{
				"internalType": "string",
				"name": "datetime",
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
				"internalType": "uint256",
				"name": "patchindex",
				"type": "uint256"
			},
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
					},
					{
						"internalType": "string",
						"name": "requesttime",
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
			},
			{
				"internalType": "string",
				"name": "datetime",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "actioncomplete",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
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
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
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
				"internalType": "string",
				"name": "version",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "datetime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "patchnotes",
				"type": "string"
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
						"internalType": "uint256",
						"name": "patchindex",
						"type": "uint256"
					},
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
							},
							{
								"internalType": "string",
								"name": "requesttime",
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
					},
					{
						"internalType": "string",
						"name": "datetime",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "actioncomplete",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "status",
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
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
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
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
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
						"internalType": "string",
						"name": "version",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "cid",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "datetime",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "patchnotes",
						"type": "string"
					}
				],
				"internalType": "struct requestPatch.Deploy[]",
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
					},
					{
						"internalType": "string",
						"name": "requesttime",
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
					},
					{
						"internalType": "string",
						"name": "requesttime",
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
						"internalType": "uint256",
						"name": "patchindex",
						"type": "uint256"
					},
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
							},
							{
								"internalType": "string",
								"name": "requesttime",
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
					},
					{
						"internalType": "string",
						"name": "datetime",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "actioncomplete",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "status",
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
						"internalType": "uint256",
						"name": "patchindex",
						"type": "uint256"
					},
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
							},
							{
								"internalType": "string",
								"name": "requesttime",
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
					},
					{
						"internalType": "string",
						"name": "datetime",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "actioncomplete",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "status",
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
			},
			{
				"internalType": "string",
				"name": "requesttime",
				"type": "string"
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
				"internalType": "uint256",
				"name": "patchindex",
				"type": "uint256"
			},
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
					},
					{
						"internalType": "string",
						"name": "requesttime",
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
			},
			{
				"internalType": "string",
				"name": "datetime",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "actioncomplete",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

  export default ABI;