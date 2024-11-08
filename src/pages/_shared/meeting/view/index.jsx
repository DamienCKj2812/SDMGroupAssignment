import React from "react";
import { useParams } from "react-router-dom";
import { Flex, Box , Button} from "@radix-ui/themes";
import "@schedule-x/theme-default/dist/index.css";
import "./style.css";

const Meeting = () => {
    const { meetingId } = useParams();
    
    // Initialize the calendar with configuration
    

    return (
        <>
          
            <div>Meeting ID: {meetingId}</div>
            <Box className="panel">
            <Flex gap="5">
                <Box className="camera"><img src="src/_common/assets/gus.jpeg"></img></Box>
                <Box className="camera2"><img src=""></img></Box>
            </Flex>

            <Flex className="button-panel">
                <Button>here</Button>
            </Flex>
           </Box>
        </>
    );
};

export default Meeting;

