import React from "react";
import "./style.css";
import { useRecoilState } from "recoil";
import { userRoleState } from "../../../../_common/state";
import { Avatar, Box, Button, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import { companyList } from "../../../../_common/data/company-list";
import { useNavigate } from "react-router-dom";
import { applicantSetting } from "../../../../_common/data/setting-list";

const ContractStatus = () => {
    const [userRole] = useRecoilState(userRoleState);
    const navigate = useNavigate();

    return (
        <Flex justify="center" id="contract-status">
            <Flex direction="column" gap="3" width="1000px">
                <Heading as="h1" m="0">
                    Contract Status
                </Heading>

                {userRole == "applicant" && (
                    <>
                        {companyList.slice(10).map((c) => {
                            return (
                                <Flex className="contract-container" key={c.companyId} gap="2" align="center">
                                    <Avatar src={c.img.icon} fallback={c.name} className="avatar" />

                                    <Box>
                                        <Strong> Congratulations to {c.name} and you on successfully signing the contract</Strong>
                                    </Box>

                                    <Button color="green" ml="auto" onClick={() => navigate("/payment-gateway")}>
                                        Proceed to next step
                                    </Button>
                                </Flex>
                            );
                        })}
                    </>
                )}

                {userRole == "employer" && (
                    <>
                        {applicantSetting.slice(1).map((c) => {
                            return (
                                <Flex className="contract-container" key={c.userId} gap="2" align="center">
                                    <Avatar src={c.personalDetails.profileImage} fallback={c.personalDetails.firstName} className="avatar" />

                                    <Box>
                                        <Strong>
                                            Congratulations to {c.personalDetails.firstName} {c.personalDetails.lastName} and you on successfully
                                            signing the contract
                                        </Strong>
                                    </Box>

                                    <Button color="green" ml="auto" onClick={() => navigate("/payment-gateway")}>
                                        Proceed to next step
                                    </Button>
                                </Flex>
                            );
                        })}
                    </>
                )}
            </Flex>
        </Flex>
    );
};

export default ContractStatus;
