import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button, Flex, Grid, Heading } from "@radix-ui/themes";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CreateContract = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const location = useLocation();

    return (
        <Flex id="create-contract" justify="center">
            <Flex width="1200px" direction="column" gap="3">
                <Heading as="h1" m="0">
                    For Applicant: {location.state.applicant} and Employer: {location.state.employer}
                </Heading>
                <Grid columns="4" gap="9">
                    <Flex className="contract-avatar add-new" justify="center" align="center" onClick={() => fileInputRef.current?.click()}>
                        <FontAwesomeIcon icon={faPlus} style={{ height: "40px", width: "40px" }} />

                        {/* Hidden file input */}
                        <input type="file" ref={fileInputRef} style={{ display: "none" }} />
                    </Flex>
                </Grid>

                <Flex gap="3" mt="9">
                    <Button>
                        Send to {location.state.applicant} and {location.state.employer}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default CreateContract;
