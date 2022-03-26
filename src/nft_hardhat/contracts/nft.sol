// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// AteeqDP is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract AteeqDP is ERC721 {

    constructor() ERC721("AteeqDP", "ADP") {
        // mint an NFT to yourself
        _mint(msg.sender, 1);
    }
}
