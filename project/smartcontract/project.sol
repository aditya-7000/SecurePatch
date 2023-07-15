// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract securePatch {
    struct Bug {
        uint id;
        string name;
        string description;
        uint priority;
        bool isfixed;
    }

    struct Patch {
        string version;
        string name;
        uint[] bugids;
        string description;
        string requesttime;
    }

    // a patch request
    struct Upload {
        uint patchindex;
        Patch patch; // index from Patches.
        string cid;
        string datetime;
        bool actioncomplete;
        string status;
    }
    struct Deploy{
        string version;
        
        string cid;
        string datetime;
        string patchnotes;
    
    }
    Bug[] public Buglist;
    uint latestbugid=0;
    
    Patch[] public Patches;
    
    Upload[] public Uploads;
    
    Upload[] public Approved;
    
    Deploy[] public Deployed;
    
    // BUG HANDLING.
    // add a bug to the bug list. takes name, description, and priority as params.
    function incrementbugid()private{
        latestbugid++;
    }
    function putBug(string memory n, string memory d, uint p) public {
        incrementbugid();
        Bug memory temp = Bug(latestbugid,n, d, p, false);
        Buglist.push(temp);
        //bugCount++;
    }

    // return entire buglist
    function getBugs() public view returns (Bug[] memory) {
        return Buglist;
    }

    // return a single bug with index as param.
    // function getBug(uint i) public view returns (Bug memory) {
    //     // require(i < bugCount, "Invalid bug index");
    //     return Buglist[i];
    // }

    // fix a bug on the bug list. takes the index value of the bug as params.
    function fixbug(uint i) public {
        // require(i < bugCount, "Invalid bug index");
        Buglist[i].isfixed = true;
    }

    // PATCH HANDLING
    function putPatchRequest(
        string memory version,
        string memory name,
        uint[] memory bugids, 
        string memory description,
        string memory requesttime
    ) public {
        Patch memory temp = Patch(version, name, bugids, description,requesttime);
        Patches.push(temp);
    }

    function getPatchRequests() public view returns (Patch[] memory) {
        return Patches;
    }

    // function getPatchRequest(uint i) public view returns (Patch memory) {
        
    //     return Patches[i];
    // }

    function putUpload(uint i, string memory cid,string memory datetime) public {
        Upload memory temp = Upload(i,Patches[i], cid,datetime,false,'pending');
        Uploads.push(temp);
    }

    function getUploads() public view returns (Upload[] memory) {
        return Uploads;
    }

    // function getUpload(uint i) public view returns (Upload memory) {
        
    //     return Uploads[i];
    // }

    
    function putApproved(uint i) public {
        Uploads[i].actioncomplete=true;
        Approved.push(Uploads[i]);
        Uploads[i].status='Approved';
        Approved[Approved.length-1].actioncomplete=false;
    }
    function putDenied(uint i)public{
        Uploads[i].actioncomplete=true;
        Uploads[i].status='Denied';
    }
    
    function getApproved() public view returns (Upload[] memory) {
        return Approved;
    }
    
    
    function putDeployed(uint i,string memory patchnotes,string memory version,string memory datetime) public {
        for (uint j = 0; j < Approved[i].patch.bugids.length; j++) {
            // fixbug(Approved[i].patch.bugids[j]);
            fixbug(Approved[i].patch.bugids[j]-1);
        }
        Deploy memory temp= Deploy(version,Approved[i].cid,datetime,patchnotes);
        Deployed.push(temp);
        Approved[i].actioncomplete=true;
    }
    
    function getDeployed() public view returns (Deploy[] memory) {
        return Deployed;
    }
}