import React from "react";
import { Flex, Box, Button, Grid } from "@radix-ui/themes";
import "@schedule-x/theme-default/dist/index.css";
import "./style.css";
import { IoMic, IoVideocam, IoShare, IoCall, IoCog } from "react-icons/io5";

const styles = {
    buttons: {
        justifyContent: "center",
        margin: "0 auto",
        marginTop: "40px",
        display: "flex",
        gap: "15px",
    },
    normalIconButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",
        height: "60px",
        backgroundColor: "#7b7878",
        color: "white",
        borderRadius: "50%",
        fontSize: "24px",
        fontWeight: "bold",
        border: "none",
        transition: "transform 0.2s, background-color 0.2s",
    },
    disconnectButton: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "60px",
        height: "60px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        border: "none",
        transition: "transform 0.2s, background-color 0.2s",
    },
    hoverEffect: {
        "&:hover": {
            backgroundColor: "darkred",
            transform: "scale(1.1)",
        },
    },
};

const Meeting = () => {
    return (
        <Flex direction="column" className="panel" position="relative">
            <Grid gap="5" columns="2">
                <Box className="camera" />
                <Box className="camera2" />
            </Grid>

            <Flex style={styles.buttons} position="absolute" inset="0" top="500px">
                <Button style={{ ...styles.normalIconButton, ...styles.hoverEffect }}>
                    <IoMic size={30} />
                </Button>
                <Button style={{ ...styles.normalIconButton, ...styles.hoverEffect }}>
                    <IoVideocam size={30} />
                </Button>
                <Button style={{ ...styles.normalIconButton, ...styles.hoverEffect }}>
                    <IoShare size={30} />
                </Button>
                <Button style={{ ...styles.normalIconButton, ...styles.hoverEffect }}>
                    <IoCog size={30} />
                </Button>
                <Button style={{ ...styles.disconnectButton, ...styles.hoverEffect }}>
                    <IoCall size={30} />
                </Button>
            </Flex>
        </Flex>
    );
};

export default Meeting;
