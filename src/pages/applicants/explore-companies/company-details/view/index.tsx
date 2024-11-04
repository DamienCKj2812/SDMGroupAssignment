import { Avatar, Box, Button, Flex, SegmentedControl, Strong, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faStar } from "@fortawesome/free-solid-svg-icons";
import { jobList } from "../../../../../_common/data/job-list";
import { ICompany, IJob } from "../../../../../_common/interface";
import Loader from "../../../../../_common/components/loader";
import { companyList } from "../../../../../_common/data/company-list";
import "./style.css";
import CompanyAbout from "./components/company-about";
import CompanyJobs from "./components/company-jobs";
import CompanyReviews from "./components/company-reviews";

const CompanyDetails = () => {
    const location = useLocation();
    const [jobs, setJobs] = useState<IJob[]>();
    const [companyDetail, setCompanyDetail] = useState<ICompany>();
    const { companyId } = useParams();
    const [category, setCategory] = useState("About");
    const navigate = useNavigate();

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
        <Flex direction="column" id="company-details" align="center">
            <Flex maxWidth="1000px" width="100%" direction="column" gap="5">
                <Box style={{ backgroundImage: `url(${companyDetail.img.background})` }} className="company-background" />
                <Box>
                    <Avatar src={companyDetail.img.icon} fallback={companyDetail.name[0]} style={{ height: "100px", width: "100px" }} />
                </Box>
                <Flex justify="between" align="center">
                    <Box>
                        <Strong style={{ textDecoration: "underline", fontWeight: "500", fontSize: "20px" }}>{companyDetail.name}</Strong>
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

                    <Button onClick={() => navigate(`../applicant/review-company/${companyDetail.companyId}`)}>
                        <FontAwesomeIcon icon={faPen} style={{ marginRight: "5px" }} />
                        <Text as="p" m="0">
                            Write a review
                        </Text>
                    </Button>
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
                    {category == "About" && <CompanyAbout companyDetail={companyDetail} jobs={jobs} />}
                    {category == "Jobs" && <CompanyJobs companyDetail={companyDetail} jobs={jobs} />}
                    {category == "Reviews" && <CompanyReviews companyDetail={companyDetail} jobs={jobs} />}
                </Box>
            </Flex>
        </Flex>
    );
};

export default CompanyDetails;
