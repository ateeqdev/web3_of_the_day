# Web3 Of The Day

A fun fact or technical aspect of blockchain a day.

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
