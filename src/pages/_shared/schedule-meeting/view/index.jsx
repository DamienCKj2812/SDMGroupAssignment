import React from "react";
import { Button, Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const ScheduleMeeting = () => {
    const navigate = useNavigate();
    return (
        <Flex gap="2">
            <Button onClick={() => navigate(`/meeting/meet/${1}`)}>Meeting 1</Button>
            <Button onClick={() => navigate(`/meeting/meet/${2}`)}>Meeting 2</Button>
        </Flex>
    );
};

export default ScheduleMeeting;
