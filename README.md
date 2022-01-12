# Web3 Of The Day

A fun fact or technical aspect of blockchain a day.

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
