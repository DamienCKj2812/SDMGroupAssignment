import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { contractData } from "../../../../../_common/data/contract-data";
import { ICompany, IContract } from "../../../../../_common/interface";
import { Avatar, Box, Button, Dialog, Flex, Grid, Heading, Tooltip } from "@radix-ui/themes";
import { companyList } from "../../../../../_common/data/company-list";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import RemoveContractDialog from "../../contract-list/view/components/remove-contract-dialog";

const ContractDetails = () => {
    const { contractId } = useParams();
    const [contract, setContract] = useState<IContract>();
    const [company, setCompany] = useState<ICompany>();
    const [contractHover, setContractHover] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const file2InputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (contractId) {
            const tempContract = contractData.find((c) => c.id == +contractId);
            setContract(tempContract);
            setCompany(companyList.find((c) => c.companyId == tempContract?.companyId));
        }
    }, [contractId]);
    return (
        <Flex id="contract-details" justify="center">
            <Flex width="1200px" direction="column" gap="3">
                <Heading as="h1" m="0">
                    {contract?.contract.length} contracts for Applicant: {contract?.applicant.username} and Employer: {company?.name}
                </Heading>
                <Grid columns="4" gap="9">
                    {contract?.contract.map((c, i) => {
                        return (
                            <>
                                <Flex
                                    className="contract-avatar"
                                    justify="center"
                                    align="center"
                                    position="relative"
                                    onMouseEnter={() => setContractHover(c)}
                                    onMouseLeave={() => setContractHover(null)}
                                >
                                    {contractHover == c && (
                                        <Flex position="absolute" align="center" gap="4" className="contract-tool-box" justify="center">
                                            <Dialog.Root>
                                                <Dialog.Trigger>
                                                    <Box height="20px" width="20px">
                                                        <Tooltip content="View Contract">
                                                            <FontAwesomeIcon icon={faEye} />
                                                        </Tooltip>
                                                    </Box>
                                                </Dialog.Trigger>

                                                <Dialog.Content maxHeight="100vh">
                                                    <Dialog.Title>
                                                        <></>
                                                    </Dialog.Title>
                                                    <Dialog.Description>
                                                        <></>
                                                    </Dialog.Description>

                                                    <img src={c} alt={c[0]} width="100%" />
                                                </Dialog.Content>
                                            </Dialog.Root>

                                            <Tooltip content="Change Contract">
                                                <FontAwesomeIcon icon={faPen} onClick={() => fileInputRef.current?.click()} />
                                            </Tooltip>

                                            {/* Hidden file input */}
                                            <input type="file" ref={fileInputRef} style={{ display: "none" }} />

                                            <RemoveContractDialog>
                                                <Box height="20px" width="20px">
                                                    <Tooltip content="Remove Contract">
                                                        <FontAwesomeIcon icon={faTrash} className="trash" />
                                                    </Tooltip>
                                                </Box>
                                            </RemoveContractDialog>
                                        </Flex>
                                    )}

                                    <Avatar src={c} fallback={c[0]} className="contract-avatar" style={{ width: "100%", height: "100%" }} />
                                </Flex>

                                {i == contract.contract.length - 1 && (
                                    <Flex
                                        className="contract-avatar add-new"
                                        justify="center"
                                        align="center"
                                        onClick={() => file2InputRef.current?.click()}
                                    >
                                        <FontAwesomeIcon icon={faPlus} style={{ height: "40px", width: "40px" }} />

                                        {/* Hidden file input */}
                                        <input type="file" ref={file2InputRef} style={{ display: "none" }} />
                                    </Flex>
                                )}
                            </>
                        );
                    })}
                </Grid>
            </Flex>
        </Flex>
    );
};

export default ContractDetails;
