import React, { useState } from "react";
import "./style.css";
import { Avatar, Badge, Flex, Heading, Select, Strong, Text } from "@radix-ui/themes";
import { appliedJobs, IAppliedJob } from "../data/applied-jobs-data";
import { jobList } from "../../../../_common/data/job-list";
import { companyList } from "../../../../_common/data/company-list";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

// Helper function to sort applied jobs
function sortAppliedJob(jobs: IAppliedJob[], sortBy: string) {
    if (sortBy) {
        jobs.sort((a, b) => {
            switch (sortBy) {
                case "latest update":
                    return b.lastUpdate - a.lastUpdate;
                case "earliest update":
                    return a.lastUpdate - b.lastUpdate;
                case "latest applied":
                    return b.dateApplied - a.dateApplied;
                case "earliest applied":
                    return a.dateApplied - b.dateApplied;
                case "status":
                    const statusOrder: { [key: string]: number } = {
                        Approved: 1,
                        Rejected: 2,
                        "Waiting for response": 3,
                    };
                    return statusOrder[a.status] - statusOrder[b.status];
                default:
                    return 0;
            }
        });
    }
    return jobs; // Return the sorted array here
}

const AppliedJobs = () => {
    const navigate = useNavigate();
    const [hoverJob, setHoverJob] = useState<number | null>(null);
    const [sortBy, setSortBy] = useState("latest");
    const [filterBy, setFilterBy] = useState("all");

    function filterAppliedJob() {
        if (filterBy === "all") {
            return appliedJobs;
        }
        return appliedJobs.filter((j) => j.status === filterBy);
    }

    // Get filtered jobs
    const filteredJobs = filterAppliedJob();
    // Sort the filtered jobs
    const sortedJobs = sortAppliedJob(filteredJobs, sortBy);

    return (
        <Flex justify="center" id="applied-jobs">
            <Flex direction="column" gap="4" width="1000px">
                <Flex gap="4" align="center">
                    <Flex align="center" gap="2">
                        Sort by
                        <Select.Root defaultValue="latest update" onValueChange={setSortBy}>
                            <Select.Trigger />
                            <Select.Content>
                                {["latest update", "earliest update", "latest applied", "earliest applied", "status"].map((s) => {
                                    return (
                                        <Select.Item value={s} key={s}>
                                            {s}
                                        </Select.Item>
                                    );
                                })}
                            </Select.Content>
                        </Select.Root>
                    </Flex>
                    <Flex align="center" gap="2">
                        Filter by
                        <Select.Root defaultValue="all" onValueChange={setFilterBy}>
                            <Select.Trigger />
                            <Select.Content>
                                {["all", "Approved", "Rejected", "Waiting for response"].map((f, i) => {
                                    const data = ["all", "approved", "rejected", "waiting for response"];
                                    return (
                                        <Select.Item value={f} key={f}>
                                            {data[i]}
                                        </Select.Item>
                                    );
                                })}
                            </Select.Content>
                        </Select.Root>
                    </Flex>
                </Flex>
                <Text as="p" m="0">
                    Applied jobs: {appliedJobs.length}
                </Text>
                <Flex direction="column" gap="2">
                    {sortedJobs.map((j) => {
                        const job = jobList.find((o) => o.jobId === j.jobId);
                        const company = companyList.find((c) => c.companyId === job?.companyId);

                        if (job && company) {
                            return (
                                <Flex
                                    key={j.id}
                                    className="applied-job-card"
                                    gap="6"
                                    align="center"
                                    onClick={() => navigate(`../applicant/job/${j.jobId}`)}
                                    onMouseEnter={() => setHoverJob(j.id)}
                                    onMouseLeave={() => setHoverJob(null)}
                                >
                                    <Avatar src={company?.img.icon} fallback={company?.name || ""} style={{ width: "80px", height: "80px" }} />
                                    <Flex direction="column" gap="2">
                                        <Heading as="h1" m="0">
                                            {job.position}
                                        </Heading>
                                        <Strong>{company.name}</Strong>
                                        <Text as="p" m="0">
                                            Date applied: {moment.unix(j.dateApplied).format("Do MMMM")}
                                        </Text>
                                    </Flex>
                                    <Flex direction="column" gap="2" ml="auto" width="180px">
                                        <Badge
                                            color={j.status === "Approved" ? "green" : j.status === "Rejected" ? "red" : "orange"}
                                            className="badge"
                                            variant={hoverJob === j.jobId ? "solid" : "soft"}
                                        >
                                            {j.status}
                                        </Badge>
                                        <Text wrap="nowrap" as="p">
                                            Last update: {moment.unix(j.lastUpdate).format("Do MMMM")}
                                        </Text>
                                    </Flex>
                                </Flex>
                            );
                        }
                    })}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default AppliedJobs;
