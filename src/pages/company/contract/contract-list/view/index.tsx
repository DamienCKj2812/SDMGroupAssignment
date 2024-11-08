import React, { useEffect, useState } from "react";
import { Box, Button, Dialog, Flex, Select, Strong, Table, Text, TextField } from "@radix-ui/themes";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { contractData } from "../../../../../_common/data/contract-data";
import { companyList } from "../../../../../_common/data/company-list";
import moment from "moment";
import { IContract } from "../../../../../_common/interface";
import RemoveContractDialog from "./components/remove-contract-dialog";

const ContractList = () => {
    const navigate = useNavigate();
    const [filterType, setFilterType] = useState("All");
    const [contracts, setContracts] = useState<IContract[]>(contractData);
    const [employer, setEmployer] = useState("");
    const [applicant, setApplicant] = useState("");

    useEffect(() => {
        setContracts(() => {
            if (filterType === "All") {
                return contractData;
            }
            return contractData.filter((c) => c.status === filterType);
        });
    }, [filterType]);

    return (
        <Flex id="contract-list" justify="center">
            <Flex direction="column" gap="3" width="1200px">
                <Flex justify="between" align="center">
                    <Box>
                        <Flex align="center" gap="2">
                            <Text as="p" m="0">
                                Filter by status:
                            </Text>
                            <Select.Root value={filterType} onValueChange={setFilterType}>
                                <Select.Trigger />
                                <Select.Content>
                                    {["All", "Under Review", "Signed", "Terminated"].map((o) => {
                                        return (
                                            <Select.Item value={o} key={o}>
                                                {o}
                                            </Select.Item>
                                        );
                                    })}
                                </Select.Content>
                            </Select.Root>
                        </Flex>

                        <Text as="p" m="0" mt="3">
                            {contracts.length} contracts show in the result
                        </Text>
                    </Box>

                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button>Create new contract</Button>
                        </Dialog.Trigger>

                        <Dialog.Content maxWidth="450px">
                            <Dialog.Title>New Contract For Employer and Applicant</Dialog.Title>
                            <Dialog.Description size="2" mb="4">
                                Make sure the information of the <Strong>employer</Strong> and <Strong>applicant</Strong> is correct
                            </Dialog.Description>

                            <Flex direction="column" gap="3">
                                <Box>
                                    <Text as="p" m="0" mb="1">
                                        Employer:
                                    </Text>
                                    <TextField.Root onChange={(e) => setEmployer(e.target.value)} />
                                </Box>

                                <Box>
                                    <Text as="p" m="0" mb="1">
                                        Applicant:
                                    </Text>
                                    <TextField.Root onChange={(e) => setApplicant(e.target.value)} />
                                </Box>
                            </Flex>

                            <Flex gap="3" mt="4" justify="end">
                                <Dialog.Close>
                                    <Button variant="soft" color="gray">
                                        Cancel
                                    </Button>
                                </Dialog.Close>
                                <Dialog.Close>
                                    <Button onClick={() => navigate("/create-contract", { state: { employer, applicant } })}>Confirm</Button>
                                </Dialog.Close>
                            </Flex>
                        </Dialog.Content>
                    </Dialog.Root>
                </Flex>

                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            {["Contract ID", "Applicant", "Company", "Last Update", "Status", "Actions"].map((h) => {
                                return <Table.ColumnHeaderCell key={h}>{h}</Table.ColumnHeaderCell>;
                            })}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {contracts.length > 0 ? (
                            contracts.map((a) => {
                                const company = companyList.find((c) => c.companyId === a.companyId);
                                return (
                                    <Table.Row key={a.id}>
                                        <Table.Cell>{a.id}</Table.Cell>
                                        <Table.Cell>{a.applicant.username}</Table.Cell>
                                        <Table.Cell>{company?.name}</Table.Cell>
                                        <Table.Cell>{moment.unix(a.lastUpdate).fromNow()}</Table.Cell>
                                        <Table.Cell>
                                            <Text color={a.status == "Signed" ? "green" : a.status == "Terminated" ? "tomato" : "yellow"}>
                                                {a.status}
                                            </Text>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Flex gap="2">
                                                <Button disabled={a.status == "Terminated"} onClick={() => navigate(`../contract-details/${a.id}`)}>
                                                    Edit
                                                </Button>

                                                <RemoveContractDialog>
                                                    <Button color="tomato" disabled={a.status != "Terminated"}>
                                                        Remove
                                                    </Button>
                                                </RemoveContractDialog>
                                            </Flex>
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={6} align="center">
                                    No result
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table.Root>
            </Flex>
        </Flex>
    );
};

export default ContractList;
