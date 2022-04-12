// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IWhitelist.sol";

contract Ateeq is ERC721Enumerable, Ownable {

    string _baseTokenURI;

    uint256 price = 0.01 ether;

    bool public _paused;

    uint256 public maxTokenIds = 20;

    uint256 public tokenIds;

    IWhitelist whitelist;

    bool public presaleStarted;

    uint256 public presaleEnded;

    modifier onlyWhenPaused {
        require(!_paused, "Sale is paused, try again later");
    }

    constructor (string memory baseURI, address whitelistContract) ERC721 ("Ateeq", "AT") {
        _baseTokenURI = baseURI;
        whitelist = IWhitelist(whitelistContract);
    }

    function startPreSale () public onlyOwner {
        presaleStarted = true;
        presaleEnded = block.timestamp + 5 minutes;
    }

    function presaleMint () public payable onlyWhenPaused  {
        require(presaleStarted && block.timestamp < presaleEnded, "Presale is not running");
        require(whitelist.whitelistAddresses(msg.sender), "You are not whitelisted");
        require(tokenIds < maxTokenIds, "Maximum tokens supplied");
        require(msg.value >= price, "Ether sent is not correct");
        tokenIds += 1;
        _safeMint (msg.sender, tokenIds);
    }
}
