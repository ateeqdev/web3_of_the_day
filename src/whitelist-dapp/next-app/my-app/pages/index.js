import Head from 'next/head'
import Image from 'next/image'
import { providers, Contract } from "ethers"
import { useState } from 'react/cjs/react.production.min'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [joinedWhitelist, setJoinedWhitelist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numberOfWhitelisted, setNumberOfWhitelisted] = useState(0);
  const web3ModalRef = useRef();

  const getProviderOrSigner = (needSigner = false) => {

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
  }

}
