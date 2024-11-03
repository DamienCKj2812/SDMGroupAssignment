import React from "react";
import { useParams } from "react-router-dom";

const Meeting = () => {
    const { meetingId } = useParams();

    return <div>Meeting ID : {meetingId}</div>;
};

export default Meeting;
