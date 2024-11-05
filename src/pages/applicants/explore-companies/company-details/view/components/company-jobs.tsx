import React, { useEffect, useState } from "react";
import { ICompany, IJob } from "../../../../../../_common/interface";
import { Box, Flex, Grid, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const CompanyJobs = ({ companyDetail, jobs }: { companyDetail: ICompany; jobs: IJob[] }) => {
    const [filteredJobs, setFilteredJobs] = useState<IJob[]>(jobs);
    const [filterKeyword, setFilterKeyword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!filterKeyword) {
            setFilteredJobs(jobs);
        } else {
            setFilteredJobs(() => jobs.filter((j) => j.position.toLowerCase().includes(filterKeyword.toLowerCase())));
        }
    }, [filterKeyword]);

    return (
        <Flex id="company-jobs" direction="column" gap="4">
            <Heading as="h1" m="0">
                {jobs.length} Jobs in {companyDetail.name}
            </Heading>

            <Box>
                <Text as="p" m="0" mb="2">
                    Filter job position
                </Text>
                <TextField.Root placeholder="Job position" value={filterKeyword} onChange={(e) => setFilterKeyword(e.target.value)} />
            </Box>

            {filteredJobs.length > 0 ? (
                <Grid columns="2" gap="4">
                    {filteredJobs.map((j) => {
                        return (
                            <Flex direction="column" gap="3" className="job-card" onClick={() => navigate(`../applicant/job/${j.jobId}`)}>
                                <Strong>{j.position}</Strong>
                                <Text as="p" m="0">
                                    {companyDetail.about.primaryLocation}
                                </Text>
                                <Text as="label" m="0" wrap="wrap">
                                    {j.objectives}
                                </Text>
                                <Text as="label" m="0">
                                    69d ago
                                </Text>
                            </Flex>
                        );
                    })}
                </Grid>
            ) : (
                <Flex justify="center" align="center" style={{ height: "400px" }}>
                    <Text as="label">No Result</Text>
                </Flex>
            )}
        </Flex>
    );
};

export default CompanyJobs;
