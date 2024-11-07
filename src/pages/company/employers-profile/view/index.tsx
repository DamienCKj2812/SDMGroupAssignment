import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Dialog, Flex, Grid, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import "./style.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ICompany, IJob } from "../../../../_common/interface";
import { companyList } from "../../../../_common/data/company-list";
import { jobList } from "../../../../_common/data/job-list";
import { bannedEmployer } from "../data/employer-account-status-data";

const EmployersProfile = () => {
    const [filterKeyword, setFilterKeyword] = useState("");
    const [filteredCompanyList, setFilterCompanyList] = useState<ICompany[]>(companyList);
    const navigate = useNavigate();

    useEffect(() => {
        if (!filterKeyword) {
            setFilterCompanyList(companyList);
        }
        setFilterCompanyList(companyList.filter((c) => c.name.toLowerCase().includes(filterKeyword.toLowerCase())));
    }, [filterKeyword]);

    return (
        <Flex id="employers-profile" justify="center">
            <Flex direction="column" gap="6" width="1200px">
                <Box width="400px">
                    <Text as="p" m="0">
                        Filter employers profile by employer name:
                    </Text>
                    <TextField.Root onChange={(e) => setFilterKeyword(e.target.value)} />
                </Box>
                <Grid columns="3" gap="4">
                    {filteredCompanyList.length > 0 ? (
                        filteredCompanyList.map((c) => {
                            const jobs = jobList.filter((j) => c.companyId == j.companyId);
                            const latestJobAd = jobs.reduce<IJob | null>((acc, curr) => {
                                return acc === null || curr.postedFrom > acc.postedFrom ? curr : acc;
                            }, null);

                            if (!jobs) return <></>;
                            return (
                                <Flex direction="column" key={c.companyId} className="company-card">
                                    <Box>
                                        <Flex
                                            style={{
                                                background: `url('${c.img.background}')`,
                                                backgroundSize: "cover", // Ensures the background covers the entire container
                                                height: "100px", // Adjust as needed
                                                width: "100%", // Adjust as needed
                                                borderRadius: "10px",
                                            }}
                                        />

                                        <Avatar
                                            src={c.img.icon}
                                            fallback={c.name[0]}
                                            style={{ height: "70px", width: "70px", margin: "-40px 10px 0px 10px" }}
                                        />
                                    </Box>

                                    <Flex direction="column" gap="2" p="4">
                                        <Heading as="h1" m="0" wrap="nowrap">
                                            {c.name} {bannedEmployer.includes(c.companyId) && <Text color="tomato" style={{fontWeight: "500"}}>(Banned)</Text>}
                                        </Heading>

                                        <Strong>{jobs.length} jobs ads</Strong>

                                        <Text>Latest Ad {moment.unix(latestJobAd?.postedFrom || 0).fromNow()}</Text>

                                        <Flex mt="6" gap="3">
                                            <Button className="button" onClick={() => navigate(`/employer-profile/${c.companyId}`)}>
                                                See more
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            );
                        })
                    ) : (
                        <Text>Oops, no job ad matching the resulting</Text>
                    )}
                </Grid>
            </Flex>
        </Flex>
    );
};

export default EmployersProfile;
