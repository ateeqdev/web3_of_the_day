# Web3 Of The Day

I'm learning blockchain and journal a subset of what I learned in a day here  

#### March 13, 2022 (Day 69): Solidity: assembly  
To directly interact with the EVM, Solidity has a keyword called assembly that can be used to run low level instructions  
Example: mload to load the word located at the given memory address

#### March 12, 2022 (Day 68): Solidity: abi.encode vs abi.encodePacked  
abi.encodePacked returns smallest encoded string  
  - Used when saving space is required given that this will not be used to call contracts
ab.encode returns a 32-bit padded output  
  - Used when to call a contract

#### March 11, 2022 (Day 67): Solidity: Keccak (pronounced “ketchak”)  
Hash function that is better than SHA-1 & SHA-2

#### March 10, 2022 (Day 66): Solidity: Library

To re-use code without state variables, library keyword can be used instead of contract.  
To use library for a data type, the following syntax is used  
using libraryname for datatype  

#### March 9, 2022 (Day 65): Solidity: Try/Catch

Try/catch only works while creating external contract or calling its function  
To make a contract external only, require that it's address is not the default one and not the same as the owner in its constructor  

require(_owner != address(0), "invalid address");
assert(_owner != 0x0000000000000000000000000000000000000001);

#### March 8, 2022 (Day 64): Solidity: DelegateCall

DelegateCall function in a contract (say ContractOne) allows an external contract to make changes to the state of ContractOne.  
It is a dangerous thing to do

#### March 7, 2022 (Day 63): Solidity: ABI

Application Binary Interface (ABI) is the standard way to interact with smart contracts on Ethereum Network.  
It is similar to APIs

#### March 6, 2022 (Day 62): Solidity: Fallback

When Etheres are transfered to a smart contract that doesn't have the receive() function, the fallback function is called.  
It is also called when an external contract calls a non-existing function

#### March 5, 2022 (Day 61): Solidity: Payable

Functions and addresses declared payable can receive ether into the contract.

#### March 4, 2022 (Day 60): Solidity: Override Parent's Function

Functions of parent contracts can be overridden by the functions of the child contracts using virtual keyword  
If a contract is extending and being extended at the same time, it's function can override and be overridden at the same time using both virtual and override keywords

#### March 3, 2022 (Day 59): Solidity: Re-entry Attack

Here's how it goes:  
1. A person (let's call it _attacker_) deposits some funds to a Solidity Smart Contract (let's call it _legit_),  
2. _attacker_ sends those funds to a malicious contract (let's call it _vacuum_)  
3. before _legit_ finishes updating the balance of _attacker_, the _vacuum_ again calls the _withdraw_ function of _legit_  
4. _vacuum_ repeats this until the funds of _legit_ are drained (hundreds of millions of dollars have been lost by this hack)  

Function modifiers or locking the execution through a variable can be used to prevent this attack

#### March 2, 2022 (Day 58): Solidity: Function Access Classifiers

public - all can access  
external - Cannot be accessed internally, only externally  
internal - only this contract and contracts deriving from it can access  
private - can be accessed only from this contract  

#### March 1, 2022 (Day 57): Solidity: Gas for Public vs External Functions 

Public functions use more gas than external functions. 

The difference is because in public functions, Solidity immediately copies array arguments to memory, while external functions can read directly from calldata. Memory allocation is expensive, whereas reading from calldata is cheap.

#### Fab 28, 2022 (Day 56): Solidity: Storage vs Memory vs Stack

Storage is persistent, can be accessed after the execution is completed.  
Memory is temporary and relatively cheaper, it can not be accessed after the execution is completed.  
Stack is temporary and almost free, it can only hold a limited amount of data and can not be accessed later  

#### Fab 27, 2022 (Day 55): Fungibility w/ an Anology

Fungibility: Let’s say you’re visiting the bank and happen to have an old but workable dollar bill in your pocket, you do your thing and ask the cashier to provide a fresh note. You provide the old bill and get a fresh one. Both of them had exactly the same value. That is called fungibility.  
NFTs are not like that, they are unique to themselves which means there are no two tokens that are identical.  

#### Fab 26, 2022 (Day 54): Solidity: Pure Functions

Pure functions neither modify the blockchain nor read it  
Modifiers are functions that pre-requisite another function  
P.S. I minted an NFT today. [See here](https://ropsten.etherscan.io/token/0x49d8570c1fa68520a475430b83d1751151681a0b)

#### Fab 25, 2022 (Day 53): Two Types of Gas Limits

gas limit (max amount of gas you're willing to use for your transaction, set by you)  
block gas limit (max amount of gas allowed in a block, set by the network)  

#### Fab 24, 2022 (Day 52): Solidity: Reading and Writing State Variables

To write or update a state variable you need to send a transaction.  
On the other hand, you can read state variables, for free, without any transaction fee.

#### Fab 23, 2022 (Day 51): IPFS

IPFS (short for InterPlanetary File System) is a file storing and sharing system in a decentralized manner.  
It searches files based on the hash of it's content, not their address. 

#### Fab 22, 2022 (Day 50): Social Recovery Wallets

One analysis of the Bitcoin ecosystem suggests that 1500 BTC may be lost every day as much as 20% of the total supply.  

Social recovery system can be a solution that works as follows:  
There is a single "signing key" that can be used to approve transactions  
There is a set of at least 3 (or a much higher number) of "guardians", of which a majority can cooperate to change the signing key of the account.  
[Learn more](https://vitalik.ca/general/2021/01/11/recovery.html)

#### Fab 21, 2022 (Day 49): Leave


#### Fab 20, 2022 (Day 48): Ropsten Testnet

Ropsten Ethereum (or “Ethereum Testnet”) is a test network that allows for blockchain development testing before deployment on Mainnet Ethereum.

#### Fab 19, 2022 (Day 47): Solidity Variables

Local Variables are declared in a function and are not stored on the blockchain  
State Variables are declared outside the function and are stored on the blockchain  
Global variables are injected by the blockchain on runtime. e.g. (block.timestamp: current block timestamp, msg.sender: address of the caller)  
unit8 stands for unsigned integer with value ranging from 0 to 2^8-1  
unit is an alias of uint256 (0 to 2^256 -1)

#### Fab 18, 2022 (Day 46): Remix IDE

Remix IDE is an open source web & Desktop application to write Solidity code.

#### Fab 17, 2022 (Day 45): Danksharding

Danksharding turns Ethereum into a unified settlement and data availability layer.

#### Fab 16, 2022 (Day 44): Layer 1 vs Layer 2

Layer 1 or On-Chain scaling solutions require changes to the underlaying blockchain protocol (e.g. SegWitz/Sharding)
Layer 2 or Off-Chain solutions are addons to the network. Like a P2SH or a Smart Contract that makes the network more scalable (e.g. Payment Channels/Side Chains)

#### Fab 15, 2022 (Day 43): Sharding

Sharding is increasing the blockchain capacity by distributing mining to multiple nodes to work on different blocks.

#### Fab 14, 2022 (Day 42): Raiden Network

Raiden is a smart contract for off-chain scaling. It enables low-fee, and instant ether transfer between nodes. 

#### Fab 13, 2022 (Day 41): Lightning Network Scalability

Lightning network can enable bitcoin to handle 10,000s of transactions per second (tps), the default of which is 3.

#### Fab 12, 2022 (Day 40): Hashed TimeLock Contracts (HTLCs)

Special type of smart contract where receivers have to enter the passphrase and claim the payment.  
If they don't claim within a specified timeframe, they loose the funds.

#### Fab 11, 2022 (Day 39): Why Bitcoin is not mainstream?

It takes almost an hour for a transaction to be verified  
Transaction fee is inconsistent. Ranging from a couple of cents to dozens of dollars

#### Fab 10, 2022 (Day 38): Web3 Unicorns this year

There have been 40 new crypto unicorns this year (in 41 days).  
Investors have poured $30 billion dollars in crypto startups.

#### Fab 9, 2022 (Day 37): BTC: Faster Block Time

With the faster block times, it’s more likely that any given block be orphaned because more people find solutions at the same time.  
As a miner, you’re much better off withholding blocks, and building your own chain, and publishing later.

#### Fab 8, 2022 (Day 36): Mainnet ETH

Mainnet is the primary public Ethereum production blockchain, where actual-value transactions occur on the distributed ledger.  

#### Fab 7, 2022 (Day 35): Sweden, Crypto and Scrap

In Sweden, it is illegal to buy scrap metal, or other waste products through cryptocurrencies.

#### Fab 6, 2022 (Day 34): Vermont Accepts Blockchain Data

Blockchain data is representative of real data and facts, permissible in courts in Vermont.

#### Fab 5, 2022 (Day 33): Stake Grinding Attack

In Proof of Stake, change the block to maximize the chances of being selected as the next validator

#### Fab 4, 2022 (Day 32): Soulbound NFTs

Non-transferable non fungible tokens, which are bound to a person. e.g. Driver's license

#### Fab 3, 2022: PoS: Nothing at Stake Attack

Unlike Proof of Work, Proof of Stake doesn't have a physical scarce resource tied to an eligible node.  
In case of forks, the Proof of Work incentivizes to vote on fork that has the biggest chance to win.  
In Proof of Stake, a node can vote on multiple forks to maximize their profit, resulting in parallel chains of unresolved forks.

#### Fab 2, 2022: Why POS is not mainstream?

POS is disadvantageous in following ways:

1. Rich becomes richer
2. To corrupt the network, merely 33% of voting power is required, whereas PoW needs 51%

#### Fab 1, 2022: RAFT Leader

How to be the leader in RAFT Consensus?  
Be the first one to tell that the leader is offline.

#### Jan 31, 2022: Tendermint's Polka

Tendermint Consensus selects a validator in round robin fashion.  
The validator with most stake is chosen first, then 2nd and son.  
A validator proposes a block gets votes in two phases.  
Pre Commit and Commit, each requiring 2/3 or more votes (called polka)
If a node rejects the proposal or doesn't respond, it's vote is considered nil.  
2/3rd of the votes is called Polka.

#### Jan 30, 2022 (L): Federated Byzantine Agreement (FBA)

Nodes can choose who to trust, enabling system-wide quorums through individual nodes.

#### Jan 29, 2022 (L): Eth Ice Age

Ethereum has a built-in mechanism to increase difficulty so that when Eth 2.0 is launched, everyone is forced to implement that upgrade. The mechanism is called Difficulty Bomb and when it is launched, it will be Ice Age of the nework.

#### Jan 28, 2022: Tendermint's Polka

Tendermint Consensus selects a validator in round robin fashion.  
The validator with most stake is chosen first, then 2nd and son.  
A validator proposes a block gets votes in two phases.  
Pre Commit and Commit, each requiring 2/3 or more votes (called polka)
If a node rejects the proposal or doesn't respond, it's vote is considered nil.  
2/3rd of the votes is called Polka.

#### Jan 27, 2022: Libra CryptoCurrency

Facebook's libra cryptocurrency is based on HotStuff consensus protocol.

#### Jan 26, 2022: Tendermint

Weakly synchronous PBFT consensus protocol  
3 Phases of PBFT  
Propose  
Precommit  
Commit  
Every stage requires 2/3 votes of validators who are chose based on their economic stake in the crypto

#### Jan 25, 2022: Dogecoin: Proof of Burn

More bitcoins you burn, more likely your block will be selected.

#### Jan 24, 2022: Ethereum: Proof of Stake

Anyone can become a validator by submitting 32 ethers.  
When a new block needs to be added, A validator will be randomly selected.  
The other candidates can become attestors. They tell that validator's block looks good to them.  
Once a block has at least 128 attestations, it will be part of the ledger.  
The reward will be shared among validator as well as attestors.

#### Jan 23, 2022: Ethereum: Proof of Stake: Energy Consumption

A single Ethereum transaction consumes equal power as of 140,000 Visa transactions.  
Ethereum is planning to shift from Proof of Work to Proof of Stake in June 2022. That will reduce the energy consumption by 99.95%.

#### Jan 22, 2022: Traditional vs Nakamoto Concensus

Classical literaure consensus: Require explicit votes from nodes  
Nakamoto consensus: Users expend some resource for a chance to make an update to the system

#### Jan 21, 2022: Paxos vs Raft

Paxos is a consensus algorithm. It is hard to understand and later, Raft was proposed.

Paxos vs Raft: Raft only allows servers with up-to-date logs to become leaders, whereas Paxos allows any server to be leader provided it then updates its log to ensure it is up-to-date.

#### Jan 20, 2022: Byzantine Nodes

It is impossible to achieve consensus with just 1/3 of malicious nodes

#### Jan 19, 2022: CAP Theorem of Distributed Systems

Blockchain is a form of distribution system.  
CAP Theorem is the famous Trilemma of distributed systems by Eric Brewer  
C: Consistency, Every node must provide it's most recent state  
A: Availability, Every node has content read & write access  
P: Partition Tolerance, Partition means inability of two or more nodes to communicate with each other

#### Jan 18, 2022: Ethereum Infinity Loops

Can a smart contract jeopardize eth network with an infinite loop?  
Yes, and no
The sender tells what is the maximum he can spend (startgas) and the fee per unit for that(gasprice).  
The upper bound is startgas \* gasprice. This incentivizes miners to execute the code.  
If code gets executed before the upper bound, the remaining ethers are added back to sender's account.  
If the gas is consumed before the execution was finished, the smart contract is halted.  
A sender can jeopardize the network but he must be willing to spend huge amount.

#### Jan 17, 2022: Ethereum Smart Contract Languages

Ethereum Smart Contracts are written in high level programming languages  
The two most active and maintained languages for Ethereum Smart Contracts are:  
Solidity (looks like a mixture of C++ & Javascript)  
Vyper (a relatively newer language)

#### Jan 16, 2022: UTXO: Bitcoin vs Ethereum

Bitcoin is UTXO based, Ethereum is account based. Accounts can be controlled externally (personal or organizational), or by a smart contract

#### Jan 15, 2022

In bitcoin, uncle blocks are created when more than one child blocks are created in parallel from the same block. They are mined at around the same time and compete for the acceptance among the network.

#### Jan 14, 2022

Punitive Forking is censorship of an account by a majority pool (51% mining power).
Feather Forking is using much less than 50% power to convince other miners not to process transaction by a valid account.
Selfish Mining is finding more than one blocks earlier than the rest of the network and keeping them secret until the honest chain has not found equal or more blocks. Releasing after that will make the melicious chain the longest and the honest one as invalidated.

#### Jan 13, 2022

Mining Pools: Pay-per-share schemes will pay you a fixed amount of money for each near-valid block regardless of how much reward the pool makes. There’s no incentive for a miner to actually submit valid blocks
Proportional schemes pay out only when a block is found. The reward of each miner is proportional to the number of shares submitted before the block was found.
Pool hopping: A miner hops to the most profitable pool as they see fit.
Pool Cannibalization: A miner distributes small amounts of their power among pay per share pools, they don't do the work and submit valid blocks but they get rewarded.

#### Jan 12, 2022

Changes to the Bitcoin protocol come in the form of BIPs (Bitcoin Improvement Proposals). The miners vote for a particular bip by referencing it in their block. The first BIP was submitted by Amir Taaki to propose bips.
Soft Fork is compatible with existing protocol. Users who don't accept these changes are still ablet to submit their blocks but cannot avail the new functionality.
This forms two types of voters. Eventually, miners with the latest changes have more chance of getting their blocks accepted over old ones thus forcing them to accept the changes.
Hard Fork is not backward compatible and doesn't accept the way protocol was working previously.

#### Jan 11, 2022

Users don't need to download the entire Bitcoin Blockchain to make a transaction. They can just store headers of each transaction and verify Merkle Root to see if the incoming node has enough funds to spend. This is called SPV (Simple Payment Verification) and is useful for lightweight client such as mobile phones.

#### Jan 10, 2022

Wallets are used to store our private keys. Hot wallets are connected to the internet while cold ones aren't. Brain wallet (cold) hashing 12 words to generate private keys. They are vulnerable to dictionary attack especially if the words are taken from a famous speech or quote. Key stretching is avoiding such attacks by hashing multiple times.

#### Jan 9, 2022

P2PKH: Pay to Public Key Hash. Customer pays to the address of vendor (most commonly used).
P2SH: Pay to Script Hash. Customer pays to the hash of script provided by the vendor (more flexible, introduced in 2012).
P2SH Example:
Multi Sig: M of N signatures are required to withdraw funds from an account.
Benefits:

1. Increases the difficulty of a theft (theif now needs to steal more than one private keys)
2. Losing a private key will not mean losing all funds in the account
3. Approval of majority is required to withdraw the funds (Executives can vote to approve a budget)

#### Jan 8, 2022

OP_RETURN before the output script can halt the transaction and bitcoins in that transaction cannot be spent later on. You can write some words after that as well that are permanently written in history. I believe this is the birthplace of NFTs.

#### Jan 7, 2022

Proof of work is finding a hash vale that is lesser than a target. Mining means trying as many entries as one can to find that hash.

#### Jan 6, 2022

Inputs to the Bitcoin network are cryptographically hashed with SHA-256 and the output is hashed again. This is done to ensure the integrity of data over network.

#### Jan 5, 2022

In January 2018, Coincheck (a cryptocurrency exchange) was hacked and approximately 500 million NEM tokens ($530 million) were stolen

#### Jan 4, 2022

In Q3'17, ICOs (Initial Coin Offerings) raised $1.3 billion in 150 deals compared to $1.4 billion raised in in tech startup investments across 1602 deals
