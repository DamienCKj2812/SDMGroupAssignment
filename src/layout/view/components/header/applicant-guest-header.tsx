import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import { pagesOptions } from "../../../data/pages-options";
import "../../style.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { userRoleState } from "../../../../_common/state";

const ApplicantGuestHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [, setCurrentRole] = useRecoilState(userRoleState);

    return (
        <Flex justify="between" align="center" id="layout-header">
            <Heading mr="6" onClick={() =>  navigate("/")} style={{cursor: "pointer"}}>Job Finder</Heading>

            <Flex align="center">
                <Flex gap="5" className="page-options">
                    {pagesOptions.applicantGuest.map((g) => {
                        return (
                            <Box key={g.id} onClick={() => navigate(g.path)} className={`option ${location.pathname == g.path ? "selected" : ""}`}>
                                <Text>{g.label}</Text>
                            </Box>
                        );
                    })}
                </Flex>
            </Flex>

            <Flex align="center" gap="5">
                <Button variant="outline" onClick={() => navigate("login")}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    Sign in
                </Button>
                <Button variant="outline" onClick={() => navigate("register")}>
                    <FontAwesomeIcon icon={faUserPlus} />
                    Register
                </Button>

                <Text
                    className="text-link"
                    onClick={() => {
                        setCurrentRole("employer");
                    }}
                >
                    Employer site
                </Text>
            </Flex>
        </Flex>
    );
};

export default ApplicantGuestHeader;
