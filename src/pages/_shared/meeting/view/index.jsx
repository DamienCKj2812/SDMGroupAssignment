import React from "react";
import { useParams } from "react-router-dom";
import { Flex, Box , Button} from "@radix-ui/themes";
import "@schedule-x/theme-default/dist/index.css";
import "./style.css";
import { IoMic, IoVideocam, IoShare, IoCall, IoCog } from 'react-icons/io5';

const styles = {
    buttons: {
      justifyContent: "center",
      margin: "0 auto",
      marginTop: "40px",
      display: "flex",
      gap: "15px"
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
        transform: "scale(1.1)"
      }
    }
  };
  
  const Meeting = () => {
    const { meetingId } = useParams();
  
    return (
      <>
        <div>Meeting ID: {meetingId}</div>
        <Box className="panel">
          <Flex gap="5">
            <Box className="camera"></Box>
            <Box className="camera2"></Box>
          </Flex>
  
          <Flex style={styles.buttons}>
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
        </Box>
      </>
    );
  };
  
  export default Meeting;

