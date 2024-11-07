import { Avatar, Box, Button, Dialog, Flex, SegmentedControl, Strong, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { jobList } from "../../../../../_common/data/job-list";
import { ICompany, IJob } from "../../../../../_common/interface";
import Loader from "../../../../../_common/components/loader";
import { companyList } from "../../../../../_common/data/company-list";
import "./style.css";
import EmployerAbout from "./components/employer-about";
import EmployerJobs from "./components/employer-jobs";
import EmployerReviews from "./components/employer-reviews";
import { bannedEmployer } from "../../data/employer-account-status-data";

const EmployersDetails = () => {
    const location = useLocation();
    const [jobs, setJobs] = useState<IJob[]>();
    const [companyDetail, setCompanyDetail] = useState<ICompany>();
    const { companyId } = useParams();
    const [category, setCategory] = useState("About");

    useEffect(() => {
        const { defaultCategory } = location.state || {};
        if (defaultCategory) {
            setCategory(defaultCategory);
        } else {
            setCategory("About");
        }
    }, [location.state]);

    function generateStar(rating: number) {
        return Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon icon={faStar} key={index} style={{ color: index + 1 < rating ? "orange" : "lightgray" }} />
        ));
    }

    useEffect(() => {
        if (companyId) {
            setJobs(jobList.filter((j) => j.companyId == +companyId));
            setCompanyDetail(companyList.find((c) => +companyId == c.companyId));
        }
    }, [companyId]);

    if (!jobs || !companyDetail) {
        return (
            <Flex align="center" justify="center">
                <Loader />
            </Flex>
        );
    }

    return (
        <Flex direction="column" id="employer-details" align="center">
            <Flex maxWidth="1000px" width="100%" direction="column" gap="5">
                <Box style={{ backgroundImage: `url(${companyDetail.img.background})` }} className="company-background" />
                <Box>
                    <Avatar src={companyDetail.img.icon} fallback={companyDetail.name[0]} style={{ height: "100px", width: "100px" }} />
                </Box>
                <Flex justify="between" align="center">
                    <Box>
                        <Strong style={{ fontWeight: "500", fontSize: "20px" }}>
                            {companyDetail.name}{" "}
                            {bannedEmployer.includes(companyDetail.companyId) && (
                                <Text color="tomato" style={{ fontWeight: "500" }}>
                                    (Banned)
                                </Text>
                            )}
                        </Strong>
                        <Flex align="center" gap="1">
                            {generateStar(
                                companyDetail.reviews.feedbacksRating.reduce((acc, curr) => acc + curr, 0) /
                                    companyDetail.reviews.feedbacksRating.length
                            )}

                            <Text as="p" m="0" ml="2">
                                {(
                                    companyDetail.reviews.feedbacksRating.reduce((acc, curr) => acc + curr, 0) /
                                    companyDetail.reviews.feedbacksRating.length
                                ).toFixed(1)}{" "}
                                total rating from{" "}
                                <Text style={{ textDecoration: "underline" }} className="cursor">
                                    {companyDetail.reviews.feedbacksRating.length} reviews
                                </Text>
                            </Text>
                        </Flex>
                    </Box>

                    {bannedEmployer.includes(companyDetail.companyId) ? (
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button color="green">Unban this employer</Button>
                            </Dialog.Trigger>

                            <Dialog.Content maxWidth="450px">
                                <Dialog.Title>Are you sure you want to unban this employer?</Dialog.Title>
                                <Dialog.Description size="2" mb="4">
                                    Unbanning this employer will restore their ability to post job ads and interact with candidates. Please confirm
                                    your decision and, if necessary, provide a reason for unbanning.
                                </Dialog.Description>

                                <Flex direction="column" gap="3">
                                    <Text as="label">Reason for unbanning</Text>
                                    <textarea id="unban-reason" placeholder="Enter reason here"></textarea>
                                </Flex>

                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">
                                            Cancel
                                        </Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button color="green">Unban</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    ) : (
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button color="tomato">Ban this employer</Button>
                            </Dialog.Trigger>

                            <Dialog.Content maxWidth="450px">
                                <Dialog.Title>Are you sure you want to ban this employer?</Dialog.Title>
                                <Dialog.Description size="2" mb="4">
                                    Banning this employer will prevent them from posting new job ads or interacting with candidates. This action is
                                    permanent and cannot be undone. Please confirm your decision and provide a reason for banning.
                                </Dialog.Description>

                                <Flex direction="column" gap="3">
                                    <Text as="label">Reason for banning</Text>
                                    <textarea id="ban-reason" placeholder="Enter reason here"></textarea>
                                </Flex>

                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">
                                            Cancel
                                        </Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button color="tomato">Ban</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    )}
                </Flex>
                <SegmentedControl.Root defaultValue={category} onValueChange={setCategory}>
                    {["About", "Jobs", "Reviews"].map((s) => {
                        return (
                            <SegmentedControl.Item value={s} key={s}>
                                {s == "Jobs" && jobs.length} {s}
                            </SegmentedControl.Item>
                        );
                    })}
                </SegmentedControl.Root>

                <Box mt="5">
                    {category == "About" && <EmployerAbout companyDetail={companyDetail} jobs={jobs} />}
                    {category == "Jobs" && <EmployerJobs companyDetail={companyDetail} jobs={jobs} />}
                    {category == "Reviews" && <EmployerReviews companyDetail={companyDetail} jobs={jobs} />}
                </Box>
            </Flex>
        </Flex>
    );
};

export default EmployersDetails;
