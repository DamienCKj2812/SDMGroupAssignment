import { Avatar, Box, Button, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICompany, IJob } from "../../../../_common/interface";
import { jobList } from "../../../../_common/data/job-list";
import { companyList } from "../../../../_common/data/company-list";
import "./style.css";
import Loader from "../../../../_common/components/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faChevronRight,
    faCircle,
    faClock,
    faFileShield,
    faLocationDot,
    faMoneyBill,
    faStar,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const JobDetails = () => {
    const [jobDetail, setJobDetail] = useState<IJob>();
    const [companyDetail, setCompanyDetail] = useState<ICompany>();
    const { jobId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (jobId) {
            const selectedJob = jobList.find((j) => j.jobId == +jobId);
            setCompanyDetail(selectedJob && companyList.find((c) => selectedJob.companyId == c.companyId));
            setJobDetail(selectedJob);
        }
    }, [jobId]);

    if (!jobDetail || !companyDetail)
        return (
            <Flex align="center" justify="center">
                <Loader />
            </Flex>
        );
    return (
        <Flex direction="column" id="job-details" align="center">
            <Box maxWidth="1000px" width="100%">
                <Box style={{ backgroundImage: `url(${companyDetail.img.background})` }} className="company-background" />

                <Flex direction="column" gap="9" mx="8" my="6" className="company-details">
                    <Flex direction="column" gap="2">
                        <img
                            src={companyDetail.img.icon}
                            alt={companyDetail.name}
                            style={{ width: "100px", height: "100px", borderRadius: "7px", marginBottom: "15px" }}
                        />

                        <Heading as="h1" m="0">
                            {jobDetail.position}
                        </Heading>

                        <Flex align="center" gap="3">
                            <Text as="p" m="0">
                                {companyDetail.name}
                            </Text>
                            <FontAwesomeIcon icon={faFileShield} />

                            <Flex align="center" gap="1">
                                <FontAwesomeIcon icon={faStar} color="orange" />
                                <Text as="p" m="0">
                                    {(
                                        companyDetail.reviews.feedbacksRating.reduce((acc, curr) => acc + curr, 0) /
                                        companyDetail.reviews.feedbacksRating.length
                                    ).toFixed(1)}
                                </Text>
                            </Flex>

                            <Text
                                as="p"
                                m="0"
                                style={{ textDecoration: "underline" }}
                                className="pointer"
                                onClick={() =>
                                    navigate(`../applicant/company/${companyDetail.companyId}`, {
                                        state: { defaultCategory: "Reviews" },
                                    })
                                }
                            >
                                {companyDetail.reviews.feedbacksRating.length} reviews
                            </Text>

                            <Text
                                as="p"
                                m="0"
                                style={{ textDecoration: "underline" }}
                                className="pointer"
                                onClick={() =>
                                    navigate(`../applicant/company/${companyDetail.companyId}`, {
                                        state: { defaultCategory: "Jobs" },
                                    })
                                }
                            >
                                View all jobs ({jobList.filter((j) => j.companyId == companyDetail.companyId).length || 0})
                            </Text>
                        </Flex>

                        <Flex direction="column" gap="2" m="2" className="job-details-container-1">
                            <Flex align="center" gap="3">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <Text as="label">{companyDetail.about.primaryLocation}</Text>
                            </Flex>
                            <Flex align="center" gap="3">
                                <FontAwesomeIcon icon={faBuilding} />
                                <Text as="label">{companyDetail.about.industry}</Text>
                            </Flex>
                            <Flex align="center" gap="3">
                                <FontAwesomeIcon icon={faClock} />
                                <Text as="label">{jobDetail.type}</Text>
                            </Flex>
                            <Flex align="center" gap="3">
                                <FontAwesomeIcon icon={faMoneyBill} />
                                <Text as="label">{jobDetail.salary}</Text>
                            </Flex>
                        </Flex>

                        <Text as="label">Posted 69 days ago</Text>

                        <Flex gap="2" mt="3">
                            <Button>Apply now</Button>
                            <Button variant="surface">Save</Button>
                        </Flex>
                    </Flex>

                    <Flex direction="column" gap="6" className="job-details-container-2">
                        <Flex direction="column" gap="3">
                            <Strong>Job Description:</Strong>
                            <Flex direction="column" gap="1">
                                {jobDetail.responsibilities.map((r) => {
                                    return (
                                        <Flex gap="4" key={r}>
                                            <FontAwesomeIcon icon={faCircle} />
                                            <Text as="p" m="0">
                                                {r}
                                            </Text>
                                        </Flex>
                                    );
                                })}
                            </Flex>
                        </Flex>

                        <Flex direction="column" gap="3">
                            <Strong>Job Requirements:</Strong>
                            <Flex direction="column" gap="1">
                                {jobDetail.requirements.map((r) => {
                                    return (
                                        <Flex gap="4" key={r}>
                                            <FontAwesomeIcon icon={faCircle} />
                                            <Text as="p" m="0">
                                                {r}
                                            </Text>
                                        </Flex>
                                    );
                                })}
                            </Flex>
                        </Flex>
                    </Flex>

                    <Box className="job-details-container-3">
                        <Heading as="h1" m="0" mb="3">
                            Employer questions
                        </Heading>
                        <Text as="p" m="0" mb="1">
                            Your application will include the following questions:
                        </Text>

                        {jobDetail.employerQuestions.map((r) => {
                            return (
                                <Flex gap="4" key={r}>
                                    <FontAwesomeIcon icon={faCircle} />
                                    <Text as="p" m="0">
                                        {r}
                                    </Text>
                                </Flex>
                            );
                        })}
                    </Box>

                    <Box>
                        <Heading as="h1" m="0" mb="3">
                            Company profile
                        </Heading>

                        <Flex className="company-profile-container" direction="column" gap="4">
                            <Avatar src={companyDetail.img.icon} fallback={companyDetail.name[0]} style={{ height: "60px", width: "60px" }} />

                            <Box>
                                <Flex gap="2" align="center">
                                    <Heading as="h1" m="0">
                                        {companyDetail.name}
                                    </Heading>
                                    <FontAwesomeIcon icon={faFileShield} style={{ height: "20px", width: "20px" }} />
                                </Flex>

                                <Flex align="center" gap="2" mt="2">
                                    <FontAwesomeIcon icon={faStar} color="orange" />
                                    <Text as="p" m="0">
                                        {(
                                            companyDetail.reviews.feedbacksRating.reduce((acc, curr) => acc + curr, 0) /
                                            companyDetail.reviews.feedbacksRating.length
                                        ).toFixed(1)}
                                    </Text>
                                    <Text>·</Text>
                                    <Text as="p" style={{ textDecoration: "underline" }} className="cursor">
                                        {companyDetail.reviews.feedbacksRating.length} reviews
                                    </Text>
                                </Flex>
                            </Box>

                            <Flex direction="column" gap="1">
                                <Flex align="center" gap="2">
                                    <FontAwesomeIcon icon={faBuilding} style={{ height: "15px", width: "15px" }} />
                                    <Text as="p" m="0" style={{ textTransform: "capitalize" }}>
                                        {companyDetail.about.industry}
                                    </Text>
                                </Flex>
                                <Flex align="center" gap="2">
                                    <FontAwesomeIcon icon={faUserGroup} style={{ height: "15px", width: "15px" }} />
                                    <Text as="p" m="0">
                                        {companyDetail.about.companySize} employees
                                    </Text>
                                </Flex>
                            </Flex>

                            <Text as="p" m="2">
                                {companyDetail.about.story}
                            </Text>

                            <Button
                                style={{ width: "fit-content" }}
                                variant="outline"
                                onClick={() => navigate(`../applicant/company/${companyDetail.companyId}`)}
                            >
                                More about this company
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default JobDetails;
