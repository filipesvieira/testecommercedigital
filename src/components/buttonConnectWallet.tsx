import React, { useEffect, useState } from 'react';
import { Button } from "reactstrap";
import { useAppContext, localStorage } from './hooks';
import Web3 from 'web3';

declare global {
    interface Window {
        ethereum: any,
        web3: any
    }
}

let LocalStorage = new localStorage({});

export default function ButtonConnectWallet() {
    // const { stateApp, actionsApp } = useAppContext();
    const [walletAddress, setWalletAddress] = useState('Not Connected');

    useEffect(() => {
        //Verifica o que tem dentro do localStorage
        LocalStorage.getItemLocalStorage("walletAddress").then((value) => {
            if (!value) {
                // console.log("User not connected METAMASK");
                setWalletAddress("Not Connected");
            } else {
                // console.log("User is connected METAMASK");
                setWalletAddress(value);
                loadWeb3();
            }
        });
        window.ethereum.on("accountsChanged", async () => {
            const { ethereum } = window;
            const web3 = new Web3(ethereum);
            var accounts = await web3.eth.getAccounts();
            if (accounts && accounts.length > 0) {
                // console.log("User is connected METAMASK");
            } else {
                // console.log("User not connected METAMASK");
                setWalletAddress("Not Connected");
                LocalStorage.clearLocalStorage();
            }
        });
    }, []);

    const loadWeb3 = async () => {
        const {ethereum} = window;
        if (typeof ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            LocalStorage.clearLocalStorage();
            setWalletAddress('Not Connected');
        }
        if (ethereum) {
            const web3 = new Web3(ethereum);
            await ethereum.enable();
            var accounts = await web3.eth.getAccounts();
            var addressValue = accounts[0];
            setWalletAddress(addressValue);
            await LocalStorage.setItemLocalStorage('walletAddress', addressValue);
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    const handleClick = async (e, path) => {
        loadWeb3()
    };

    return (
        <>
            <Button onClick={(e) => handleClick(e, "")} color="primary" type="button">
                {walletAddress}
            </Button>
        </>
    );
}