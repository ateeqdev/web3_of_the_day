import Head from "next/head";
import { Contract, providers, utils } from "ethers";
import React, { useEffect, useState, useRef } from "react";
import Web3Modal from "web3modal";
import { abi, NFT_CONTRACT_ADDRESS } from "../constants";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [presaleStarted, setPresaleStarted] = useState(false);
  const [presaleEnded, setPresaleEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [tokenIdsMinted, setTokenIdsMinted] = useState("0");
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      window.alert("Change the network to Rinkeby");
      throw new Error("Change network to Rinkeby");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  };


  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  }

  const getOwner = async () => {
    try {
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      const _owner = await nftContract.owner();
      const signer = await getProviderOrSigner(true);
      const address = await signer.getAddress();
      console.log(_owner);
      if(address.toLowerCase() == _owner.toLowerCase())
        setIsOwner(true);
    } catch (err) {
      console.error(err);
    }
  }


  const checkIfPresaleStarted = async () => {
    try {
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      const _preSaleStarted = await nftContract.presaleStarted();
      if(!_preSaleStarted)
        await getOwner();
      setPresaleStarted(_preSaleStarted);
      return _preSaleStarted;
    } catch (err) {
      console.error(err);
    }
  }


  const checkIfPresaleEnded = async () => {
    try {
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      const _preSaleEnded = await nftContract.presaleEnded();
      const hasEnded = _preSaleEnded.lt(Math.floor(Date.now() / 1000)) ? true : false;
      setPresaleEnded(hasEnded);
      return hasEnded;
    } catch (err) {
      console.error(err);
      return false;
    }
  }


  const startPresale = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      const transaction = await nftContract.startPresale();
      setLoading(true);
      await transaction.wait();
      setLoading(false);
      await checkIfPresaleStarted();
    } catch (err) {
      console.error(err);
    }
  }

  const presaleMint = async () => {
    try {
      const signer = getProviderOrSigner(true);
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      const transaction = await nftContract.presaleMint({value: utils.parseEther("0.01")});
      setLoading(true);
      await transaction.wait();
      setLoading(false);
      alert("Congratulations on securing NFT in presale");
    } catch (err) {
      console.error(err);
    }
  }

  const publicMint = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      const transaction = await nftContract.mint({value: utils.parseEther("0.01")});
      setLoading(true);
      await transaction.wait();
      setLoading(false);
      alert("Congratulations on minting NFT");
    } catch (err) {
      console.error(err);
    }
  }

  const getTokenIdsMinted = async () => {
    try {
      const provider = await getProviderOrSigner();
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      const _tokenIds = await nftContract.tokenIds();
      setTokenIdsMinted(_tokenIds.toString());
    } catch (err) {
      console.error(err);
    }
  }


  useEffect (() => {
    if(!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "rinkeby",
        providerOptions: {},
        disableInjectedProvider: false
      });
      connectWallet();
      const _preSaleStarted = checkIfPresaleStarted();
      _preSaleStarted && checkIfPresaleEnded();

      getTokenIdsMinted();

      const presaleEndedInterval = setInterval( async () => {
        const _preSaleStarted = await checkIfPresaleStarted();
        if(_preSaleStarted) {
          const _preSaleEnded = await checkIfPresaleEnded();
          if(_preSaleEnded)
            clearInterval(presaleEndedInterval);
        }
      }, 5 * 1000);

      setInterval(async () => {
        await getTokenIdsMinted();
      }, 5 * 1000);
    }
  }, [walletConnected]);


  const renderButton = () => {
    try {
      if(!walletConnected)
        return (
          <button onClick={connectWallet} className={styles.button} >Connect your Wallet</button>
        );
      if(loading)
        return (
          <button className={styles.button} >Loading...</button>
        );
      if(!presaleStarted && isOwner)
        return (
          <button onClick={startPresale} className={styles.button} >Start Presale</button>
        );
      if(!presaleStarted)
        return (
          <button className={styles.button} >Presale is not started yet </button>
        );
      if(presaleStarted && !presaleEnded)
        return (
          <button className={styles.button} >Presale Mint </button>
        );
      if(presaleStarted && presaleEnded)
        return (
          <button className={styles.button} >Public Mint </button>
        );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Head>
        <title>Ateeq's NFTs</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <div className={styles.description}>
          {tokenIdsMinted}/20 have been minted so far
        </div>
        {renderButton()}
      </div>
    </div>
  )
}
