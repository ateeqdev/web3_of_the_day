import Head from "next/head";
import Image from "next/image";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";
import { WHITELIST_CONTRACT_ADDRESS, abi } from "../constants";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [joinedWhitelist, setJoinedWhitelist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numberOfWhitelisted, setNumberOfWhitelisted] = useState(0);
  const web3ModalRef = useRef();

  console.log(abi);

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();

    if (chainId !== 4) {
      window.alert("Change the network to Rinkeby");
      throw new Error("Change the network to Rinkeby");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  };

  const addAddressToWhitelist = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        signer
      );
      const tx = await whitelistContract.addAddressToWhitelist();
      setLoading(true);
      await tx.wait();
      setLoading(false);
      await getNumberOfWhitelisted();
      setJoinedWhitelist(true);
    } catch (error) {
      console.error(error);
    }
  };

  const getNumberOfWhitelisted = async () => {
    try {
      const provider = await getProviderOrSigner(false);
      const whitelistContract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        provider
      );
      const _numberOfWhitelisted =
        await whitelistContract.numAddressesWhitelisted();
      setNumberOfWhitelisted(_numberOfWhitelisted);
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfAddressInWhitelist = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        signer
      );
      const address = await signer.getAddress();
      const _joinedWhitelist = await whitelistContract.whitelistedAddresses(
        address
      );
      setJoinedWhitelist(_joinedWhitelist);
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner(false);
      setWalletConnected(true);
      checkIfAddressInWhitelist();
      getNumberOfWhitelisted();
    } catch (error) {
      console.error(error);
    }
  };

  const renderButton = () => {
    if (walletConnected) {
      if (joinedWhitelist)
        return <div className={styles.description}>Thanks!</div>;
      else if (loading)
        return <button className={styles.button}>Loading...</button>;
      else
        return (
          <button onClick={addAddressToWhitelist} className={styles.button}>
            Join the Whitelist
          </button>
        );
    } else
      return (
        <button onClick={connectWallet} className={styles.button}>
          Connect your wallet
        </button>
      );
  };

  useEffect(() => {
    if(!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: 'rinkeby',
        providerOptions: {},
        disableInjectedProvider: false
      });
      connectWallet();
    }
  }, [walletConnected]);

  return (
    <div>
      <Head>
        <title>Whitelist Dapp</title>
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Whitelist DApp</h1>
        </div>
        <div className={styles.description}>
          {numberOfWhitelisted} have already joined the whitelist
        </div>
        {renderButton()}
      </div>
    </div>
  )
}
