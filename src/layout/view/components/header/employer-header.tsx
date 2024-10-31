import { Box, Button, Flex, Heading, Popover, Text } from "@radix-ui/themes";
import React from "react";
import { pagesOptions } from "../../../data/pages-options";
import "../../style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState } from "../../../../_common/state";

const EmployerHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useRecoilState(currentLoggedInUserState);

    return (
        <Flex justify="between" align="center" id="layout-header">
            <Heading mr="6">Applicant Finder</Heading>

            <Flex align="center">
                <Flex gap="5" className="page-options">
                    {pagesOptions.employer.map((g) => {
                        return (
                            <Box key={g.id} onClick={() => navigate(g.path)} className={`option ${location.pathname == g.path ? "selected" : ""}`}>
                                <Text>{g.label}</Text>
                            </Box>
                        );
                    })}
                </Flex>
            </Flex>

            <Flex align="center" gap="5">
                <Popover.Root>
                    <Popover.Trigger>
                        <Flex align="center" className="pointer">
                            {currentUser?.username || ""}
                        </Flex>
                    </Popover.Trigger>
                    <Popover.Content width="200px" id="user-option-popover">
                        <Flex direction="column">
                            <Text as="p" m="0" className="option danger" onClick={() => setCurrentUser(null)}>
                                Logout
                            </Text>
                        </Flex>
                    </Popover.Content>
                </Popover.Root>
            </Flex>
        </Flex>
    );
};

export default EmployerHeader;