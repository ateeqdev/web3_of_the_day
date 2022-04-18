import Head from "next/head";
import { Contract, provider, utils } from "ethers";
import React, { useEffect, useState, useRef } from "react";
import Web3Modal from "web3modal";
import { abi, NFT_CONTRACT_ADDRESS } from "./constants";
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
    const provider = web3ModalRef.current.connect();
    const web3provider = new providers.Web3Provider(provider);

    const { chainId } = await web3provider.getNetwork();
    if (chainId !== 4) {
      window.alert("Change the network to Rinkeby");
      throw new Error("Change network to Rinkeby");
    }

    if (needSigner) {
      const signer = web3provider.getSigner();
      return signer;
    }

    return web3provider;
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

    } catch (err) {
      console.error(err);
    }
  }

  const checkIfPresaleStarted = async () => {
    try {

    } catch (err) {
      console.error(err);
    }
  }

  const checkIfPresaleEnded = async () => {
    try {

    } catch (err) {
      console.error(err);
    }
  }

  const startPresale = async () => {
    try {

    } catch (err) {
      console.error(err);
    }
  }

  const presaleMint = async () => {
    try {

    } catch (err) {
      console.error(err);
    }
  }

  const publicMint = async () => {
    try {

    } catch (err) {
      console.error(err);
    }
  }

  const getTokenIdsMinted = async () => {
    try {

    } catch (err) {
      console.error(err);
    }
  }

  useEffect (() => {

  });

  const renderButton = async () => {
    try {

    } catch (err) {
      console.error(err);
    }
  }
}
