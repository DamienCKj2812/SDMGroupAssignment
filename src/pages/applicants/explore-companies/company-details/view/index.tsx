import { Avatar, Box, Button, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faChevronRight,
    faCircle,
    faClock,
    faFileShield,
    faLocationDot,
    faMoneyBill,
    faPen,
    faStar,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { jobList } from "../../../../../_common/data/job-list";
import { ICompany, IJob } from "../../../../../_common/interface";
import Loader from "../../../../../_common/components/loader";
import { companyList } from "../../../../../_common/data/company-list";
import "./style.css";

const CompanyDetails = () => {
    const [jobs, setJobs] = useState<IJob[]>();
    const [companyDetail, setCompanyDetail] = useState<ICompany>();
    const { companyId } = useParams();

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
            <Box maxWidth="1000px" width="100%">
                <Box style={{ backgroundImage: `url(${companyDetail.img.background})` }} className="company-background" />

                <Box>
                    <Avatar
                        src={companyDetail.img.icon}
                        fallback={companyDetail.name[0]}
                        style={{ height: "130px", width: "130px", margin: "10px 0px" }}
                    />
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

                    <Button>
                        <FontAwesomeIcon icon={faPen} style={{ marginRight: "5px" }} />
                        <Text as="p" m="0">
                            Write a review
                        </Text>
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};

export default CompanyDetails;
