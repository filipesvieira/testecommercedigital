import React, { useEffect } from 'react';
import { Card } from 'reactstrap';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import { useAppContext, localStorage } from './hooks';
// import Image from 'next/image';

let LocalStorage = new localStorage({});

interface Props {
    data: string
}

export default function CardItem(props: Props) {

    useEffect(() => {
        LocalStorage.getItemLocalStorage("walletAddress").then((value) => {
            if (!value) {
                console.log("User not connected METAMASK");
                // setWalletAddress("Not Connected");
            } else {
                console.log("User is connected METAMASK");
                // setWalletAddress(value);
                // loadWeb3();
            }
        });
    }, [])
    

    return (
        <>
            <Card sx={{ maxWidth: 100 }}>
                <CardActionArea onClick={() => console.log("CardActionArea clicked")}>
                    {/* <CardMedia
                        component="img"
                        height="470"
                        image="/images/cards/contemplative.jpg"
                        alt="green iguana"
                    /> */}
                    {/* <img
                        height="450"
                        src="/images/cards/contemplative.jpg"
                        alt="green iguana"
                    /> */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "red",
                        }}
                    >
                        <img
                            src="/images/cards/contemplative.jpg"
                            alt="My Image"
                            width={550}
                            height={450}
                        />
                    </div>
                    <CardContent>
                        <Typography align="center" gutterBottom variant="h5" component="div">
                            TESTE2
                        </Typography>
                        <Typography align="center" component="div" gutterBottom variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}