
import React, { useEffect, useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ButtonConnectWallet, CardProduct } from "../components";
import { Fauna } from '../../src/lib';
const fauna = new Fauna();

export default function Home() {
    const [walletAddress, setWalletAddress] = useState('Not Connected');

    useEffect( async () => {
        // console.log('listStoresEntries ', fauna.listStoresEntries())
    }, []);

    return (
        <Box sx={{ flexGrow: 0, flexDirection: "row-reverse" }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {"Cryptocommerce"}
                    </Typography>
                    <div>
                        <ButtonConnectWallet />
                    </div>
                </Toolbar>
            </AppBar>
            <CardProduct props={'TESTE'} />
        </Box>
    );
}