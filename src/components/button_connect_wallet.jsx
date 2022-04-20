import React, { useEffect, useState } from 'react';
import { Button } from "reactstrap";
import { useAppContext, localStorage } from '../components/hooks/';
import Web3 from 'web3';

function ButtonConnectWallet() {
    const { stateApp, actionsApp } = useAppContext();
    const [walletAddress, setWalletAddress] = useState('Not Connected');

    useEffect( async () => {
        let localStorageE = new localStorage();
        // let walletAddressLocalStorage = null;
        let walletAddressLocalStorage = await localStorageE.getItemLocalStorage('walletAddress');
        // await localStorageE.clearLocalStorage();
        if (walletAddressLocalStorage === undefined || walletAddressLocalStorage === null) {
            setWalletAddress('Not Connected');
        } else {
            console.log('Connected')
            await loadWeb3();
        }
    }, []);

    const loadWeb3 = async () => {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
        }
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            var accounts = await web3.eth.getAccounts();
            var addressValue = accounts[0];
            setWalletAddress(addressValue);
            // actionsApp.setWallet({
            //     'walletAddress': addressValue
            // });
            let localStorageE = new localStorage();
            await localStorageE.setItemLocalStorage('walletAddress', addressValue);
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    const handleClick = (e, path) => {
        loadWeb3();
    };

    return (
        <>
            <Button onClick={(e) => handleClick(e, "")} color="primary" type="button">
                {walletAddress}
            </Button>
        </>
    );
}

export default ButtonConnectWallet;