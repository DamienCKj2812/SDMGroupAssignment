import React, { useEffect, useState } from "react";
import { Flex, Grid, Table, Text, TextField } from "@radix-ui/themes";
import "./style.css";
import { applicantSetting } from "../../../../_common/data/setting-list";
import { IApplicantSetting } from "../../../../_common/interface";
import { useNavigate } from "react-router-dom";

const ApplicantsList = () => {
    const [filter, setFilter] = useState("");
    const [applicants, setApplicants] = useState<IApplicantSetting[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (filter == "") {
            setApplicants(applicantSetting);
        } else {
            setApplicants(
                applicantSetting.filter(
                    (a) =>
                        a.personalDetails.firstName.toLowerCase().includes(filter.toLowerCase()) ||
                        a.personalDetails.lastName.toLowerCase().includes(filter.toLowerCase()) ||
                        a.personalDetails.phoneNumber.toLowerCase().includes(filter.toLowerCase())
                )
            );
        }
    }, [filter]);

    return (
        <Flex id="applicants-list" justify="center">
            <Flex direction="column" gap="3" width="1200px">
                <Flex align="center" gap="2">
                    Filter:{" "}
                    <TextField.Root placeholder="ID, First Name, Last Name, Email or Phone Number" onChange={(e) => setFilter(e.target.value)} />
                </Flex>

                <Text as="p" m="0">
                    {applicantSetting.length} applicant show in the result
                </Text>

                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            {["User ID", "First Name", "Last Name", "Email", "Phone Number"].map((h) => {
                                return <Table.ColumnHeaderCell key={h}>{h}</Table.ColumnHeaderCell>;
                            })}
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {applicants.length > 0 ? (
                            applicants.map((a) => {
                                return (
                                    <Table.Row key={a.userId} onClick={() => navigate(`${a.userId}`)}>
                                        <Table.Cell>{a.userId}</Table.Cell>
                                        <Table.Cell>{a.personalDetails.firstName}</Table.Cell>
                                        <Table.Cell>{a.personalDetails.lastName}</Table.Cell>
                                        <Table.Cell>{`${a.personalDetails.firstName}${a.personalDetails.lastName}@test.com`}</Table.Cell>
                                        <Table.Cell>{a.personalDetails.phoneNumber}</Table.Cell>
                                    </Table.Row>
                                );
                            })
                        ) : (
                            <Table.Row>
                                <Table.Cell colSpan={5} align="center">
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

export default ApplicantsList;
