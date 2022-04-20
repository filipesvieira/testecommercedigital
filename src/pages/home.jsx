
import React, { useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { ButtonConnectWallet } from "../components"

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #258 30%, #290955 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(245, 229, 39, .5)",
        color: "white",
        height: 48,
        padding: "0 30px",
    },
});

export default function Home() {
    const classes = useStyles();
    const [walletAddress, setWalletAddress] = useState('Not Connected');

    return (
        <Box sx={{ flexGrow: 0, flexDirection: "row-reverse" }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {"TESTE SUBINDO VERCEL"}
                    </Typography>
                    {/* <div>
                        <Button onClick={(e) => handleClick(e, '')} className={classes.root} variant="contained">
                            {walletAddress}
                        </Button>
                    </div> */}
                    <div>
                        <ButtonConnectWallet />
                    </div>
                </Toolbar>
            </AppBar>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/images/cards/contemplative.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}