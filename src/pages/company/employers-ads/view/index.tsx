import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Dialog, Flex, Grid, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import { jobList } from "../../../../_common/data/job-list";
import { companyList } from "../../../../_common/data/company-list";
import "./style.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { IJob } from "../../../../_common/interface";

const EmployerAds = () => {
    const [filterKeyword, setFilterKeyword] = useState("");
    const [filteredJobList, setFilterJobList] = useState<IJob[]>(jobList);
    const navigate = useNavigate();

    useEffect(() => {
        if (!filterKeyword) {
            setFilterJobList(jobList);
        }
        setFilterJobList(jobList.filter((j) => j.position.toLowerCase().includes(filterKeyword.toLowerCase())));
    }, [filterKeyword]);

    return (
        <Flex id="employer-ads" justify="center">
            <Flex direction="column" gap="6" width="1200px">
                <Box width="400px">
                    <Text as="p" m="0">
                        Filter ads by job position:
                    </Text>
                    <TextField.Root onChange={(e) => setFilterKeyword(e.target.value)} />
                </Box>
                <Grid columns="3" gap="4">
                    {filteredJobList.length > 0 ? (filteredJobList.map((j) => {
                        const company = companyList.find((c) => c.companyId == j.companyId);
                        if (!company) return <></>;
                        return (
                            <Flex direction="column" key={j.jobId} className="job-card">
                                <Box>
                                    <Flex
                                        style={{
                                            background: `url('${company.img.background}')`,
                                            backgroundSize: "cover", // Ensures the background covers the entire container
                                            height: "100px", // Adjust as needed
                                            width: "100%", // Adjust as needed
                                            borderRadius: "10px",
                                        }}
                                    />

                                    <Avatar
                                        src={company.img.icon}
                                        fallback={j.position[0]}
                                        style={{ height: "70px", width: "70px", margin: "-40px 10px 0px 10px" }}
                                    />
                                </Box>

                                <Flex direction="column" gap="2" p="4">
                                    <Heading as="h1" m="0" wrap="nowrap">
                                        {j.position}
                                    </Heading>
                                    <Strong>{company.name}</Strong>
                                    <Text as="p">{j.salary}</Text>
                                    <Text as="p">{j.type}</Text>
                                    <Text as="p">Posted {moment.unix(j.postedFrom).fromNow()}</Text>

                                    <Flex mt="6" gap="3">
                                        <Button className="button" onClick={() => navigate(`/employer-ads/${j.jobId}`)}>
                                            See more
                                        </Button>

                                        <Dialog.Root>
                                            <Dialog.Trigger>
                                                <Button className="danger button">Remove</Button>
                                            </Dialog.Trigger>

                                            <Dialog.Content maxWidth="450px">
                                                <Dialog.Title>Remove Vacancy</Dialog.Title>
                                                <Dialog.Description size="2" mb="4">
                                                    Are you sure you want to remove this vacancy? You will need to provide a reason for the employer.
                                                </Dialog.Description>

                                                <Flex direction="column" gap="4">
                                                    <Text as="p">Please provide the reason for removing this vacancy:</Text>
                                                    <textarea placeholder="Type your reason here..." />
                                                </Flex>

                                                <Flex gap="3" mt="4" justify="end">
                                                    <Dialog.Close>
                                                        <Button variant="soft" color="gray">
                                                            Cancel
                                                        </Button>
                                                    </Dialog.Close>
                                                    <Dialog.Close>
                                                        <Button color="tomato">Remove</Button>
                                                    </Dialog.Close>
                                                </Flex>
                                            </Dialog.Content>
                                        </Dialog.Root>
                                    </Flex>
                                </Flex>
                            </Flex>
                        );
                    })) : (
                        <Text>
                            Oops, no job ad matching the resulting
                        </Text>
                    )}
                </Grid>
            </Flex>
        </Flex>
    );
};

export default EmployerAds;
