import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
// import { makeStyles } from '@material-ui/core/styles';
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

export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 0, flexDirection: "row-reverse" }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {"Teste Commit Private Enterprise"}
                    </Typography>
                    <div>
                        <Button className={classes.root} variant="contained">
                            Connect Wallet
                        </Button>
                    </div>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}