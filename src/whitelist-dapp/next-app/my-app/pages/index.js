import Head from 'next/head'
import Image from 'next/image'
import { providers, Contract } from "ethers"
import { useState } from 'react/cjs/react.production.min'
import {WHITELIST_CONTRACT_ADDRESS, abi} from "./contracts"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [joinedWhitelist, setJoinedWhitelist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numberOfWhitelisted, setNumberOfWhitelisted] = useState(0);
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {

    const provider = await web3ModalRef.connect();
    const web3Provider = await providers.web3Provider(provider);

    const chainId = await web3Provider.getNetwork();

    if(chainId !== 4) {
      window.alert("Change the network to Rinkeby");
      throw new Error("Change the network to Rinkeby");
    }

    if(needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }

    return web3Provider;
  };

  const addAddressToWhitelist = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract (
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        signer
      );
      const tx = await whitelistContract.addAddressToWhitelist();
      setLoading(true);
      await tx.load();
      setLoading(false);
      await getNmberOfWhitelisted();
      setJoinedWhitelist(true);
    }
    catch (error) {
      console.error(error);
    }
  };

  const getNumberOfWhitelisted = async () => {
    try {
      const provider = await getProviderOrSigner(false);
      const whiteListContract = new Contract (
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        provider
      );
      const _numberOfWhitelisted = await whiteListContract.numAddressesWhitelisted();
      setNumberOfWhitelisted(_numberOfWhitelisted);
    }
    catch (error) {
      console.error(error);
    }
  };

  const checkIfAddressInWhitelist = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract (
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        signer
      );
      const address = await signer.getAddress();
      const _joinedWhitelist = await whitelistContract.whiteListedAddresses (address);
      setJoinedWhitelist(_joinedWhitelist);
    }
    catch (error) {
      console.error(error);
    }
  }

  const connectWallet = async () => {
    try {
      await getProviderOrSigner (false);
      setWalletConnected(true);
      checkIfAddressInWhitelist();
      getNumberOfWhitelisted();
    } catch (error) {
      console.error(error);
    }
  }
}
