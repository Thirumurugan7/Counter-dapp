import Web3 from "web3";

import abi from "./abi.json";

import { ethers } from "ethers";

const isBrowser = () => typeof window !== "undefined";

const { ethereum } = isBrowser();

if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}

const contractAddress = "0x1B1228206B715Ac195630E040Be6eb371922a2B9";

export const increment = async () => {
  //provider, signer and contract instance
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer); //contract addresss, abi of the contract, signer
  const tx = await contract.increment();
  await tx.wait();
  return await contract.getCounter();
};
export const decrement = async () => {
  //provider, signer and contract instance
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer); //contract addresss, abi of the contract, signer
  const tx = await contract.decrement();
  await tx.wait();
  return await contract.getCounter();
};

export const getCounter = async () => {
  //provider, signer and contract instance
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer); //contract addresss, abi of the contract, signer
  return await contract.getCounter();
};
