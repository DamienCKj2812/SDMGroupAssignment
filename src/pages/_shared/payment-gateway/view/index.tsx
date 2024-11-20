import { Box, Button, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import React from "react";
import "./style.css";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCcAmazonPay,
    faCcAmex,
    faCcApplePay,
    faCcDinersClub,
    faCcDiscover,
    faCcJcb,
    faCcMastercard,
    faCcPaypal,
    faCcStripe,
    faCcVisa,
} from "@fortawesome/free-brands-svg-icons";

const PaymentGateway = () => {
    return (
        <Flex id="payment-gateway">
            <Flex gap="3" flexGrow="1" justify="center">
                <Flex className="payment-container" direction="column" gap="4">
                    <Heading as="h1" m="0">
                        Card Details
                    </Heading>

                    <Flex gap="4">
                        <TextField.Root placeholder="First name" style={{ width: "100%" }} />
                        <TextField.Root placeholder="Last name" style={{ width: "100%" }} />
                    </Flex>
                    <Flex gap="4">
                        <TextField.Root placeholder="Card number" style={{ width: "100%" }} />
                        <TextField.Root placeholder="CVV" style={{ width: "200px" }}>
                            <TextField.Slot side="left">
                                <FontAwesomeIcon icon={faCreditCard} />
                            </TextField.Slot>
                        </TextField.Root>
                    </Flex>

                    <Flex>
                        <Flex gap="2" width="300px" align="center" wrap="wrap">
                            {[
                                faCcMastercard,
                                faCcVisa,
                                faCcStripe,
                                faCcPaypal,
                                faCcJcb,
                                faCcDiscover,
                                faCcApplePay,
                                faCcAmazonPay,
                                faCcDinersClub,
                                faCcAmex,
                            ].map((c, i) => {
                                return <FontAwesomeIcon icon={c} key={i} style={{ height: "30px", width: "fit-content" }} />;
                            })}
                        </Flex>
                    </Flex>

                    <Button color="gray">Submit payment</Button>
                </Flex>

                <Flex className="payment-details" direction="column" gap="6">
                    <Heading as="h1" m="0">
                        Summary
                    </Heading>
                    <Flex direction="column" gap="2">
                        {[
                            {
                                details: "Contract details (Fake Taxi)",
                                amount: 20,
                            },
                            {
                                details: "Contract details (Aquaman)",
                                amount: 20,
                            },
                        ].map((p) => {
                            return (
                                <Flex justify="between">
                                    <Text as="label">{p.details}</Text>

                                    <Text as="label">RM {p.amount}</Text>
                                </Flex>
                            );
                        })}
                    </Flex>

                    <Flex justify="between" style={{ borderTop: "1px solid white" }}>
                        <Text as="p" m="0" mt="2">
                            Total amount
                        </Text>

                        <Text as="p" m="0">
                            RM 40
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default PaymentGateway;
