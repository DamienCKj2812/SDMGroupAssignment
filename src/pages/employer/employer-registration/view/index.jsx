import { Box, Button, Flex, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const EmployerResgistration = () => {
    const navigate = useNavigate();
    return (
        <Flex id="employer-registration" justify="center">
            <Flex direction="column" gap="7" className="form-container">
                <Heading as="h1">Your employer account</Heading>

                <Box>
                    <Strong>Your details</Strong>

                    <Flex direction="column" className="form-details-container" gap="5">
                        <Flex gap="1" direction="column">
                            <Text as="label">Email</Text>
                            <Text>employer@test.com</Text>
                        </Flex>

                        <Flex gap="1" direction="column">
                            <Text as="label">Given name</Text>
                            <Text as="p" m="0">
                                Enter your real name for your security. This is not displayed on job ads.
                            </Text>
                            <TextField.Root />
                        </Flex>

                        <Flex gap="1" direction="column">
                            <Text as="label">Family name</Text>
                            <TextField.Root />
                        </Flex>
                    </Flex>
                </Box>

                <Box>
                    <Strong>Business details</Strong>

                    <Flex direction="column" className="form-details-container" gap="5">
                        <Flex gap="1" direction="column">
                            <Text as="label">Business name</Text>
                            <Text as="p" m="0">
                                For security purposes, please enter the registered business name.
                            </Text>
                            <TextField.Root />
                        </Flex>

                        <Flex gap="1" direction="column">
                            <Text as="label">Phone number</Text>
                            <Text as="p" m="0">
                                We might need to contact you. This is never shared with candidates.
                            </Text>

                            <Flex gap="3">
                                <TextField.Root />

                                <TextField.Root />
                            </Flex>
                        </Flex>

                        <Flex gap="1" direction="column">
                            <Text as="label">Country</Text>
                            <TextField.Root />
                        </Flex>
                    </Flex>
                </Box>

                <Button onClick={() => navigate("../../employer/dashboard")}>Create new account</Button>
            </Flex>
        </Flex>
    );
};

export default EmployerResgistration;
