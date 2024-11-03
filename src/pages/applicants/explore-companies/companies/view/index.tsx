import { Avatar, Box, Flex, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { companyList } from "../../../../../_common/data/company-list";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { jobList } from "../../../../../_common/data/job-list";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ICompany } from "../../../../../_common/interface";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const Companies = () => {
    const [filterKeyword, setFilterKeyword] = useState("");
    const [filteredCompanies, setFilteredCompanies] = useState<ICompany[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const sections = document.querySelectorAll(".company-detail-card");
        const scrollArea = document.querySelector("#layout-scroll-area"); // Replace with your ScrollArea ID or class

        sections.forEach((s, i) => {
            gsap.fromTo(
                s,
                { x: i % 2 == 0 ? "-100%" : "100%", opacity: 0 }, // Start position and opacity
                {
                    x: "0%", // End position
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: s,
                        start: "start center+=200",
                        end: "start bottom",
                        scroller: scrollArea, // Add this line
                        scrub: 1,
                    },
                }
            );
        });

        return () => {
            // Clean up ScrollTriggers
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [filteredCompanies]);

    useEffect(() => {
        if (!filterKeyword) {
            setFilteredCompanies(companyList);
        } else {
            setFilteredCompanies(companyList.filter((c) => c.name.toLowerCase().includes(filterKeyword.toLowerCase())));
        }
    }, [filterKeyword]);

    return (
        <Flex id="companies" justify="center">
            <Flex width="1100px" direction="column" gap="6">
                <Flex justify="between" align="center">
                    <Box>
                        <Heading as="h1" m="0">
                            Explore companies
                        </Heading>
                        <Text as="p" m="0">
                            Learn about new jobs, reviews, company culture, perks and benefits.
                        </Text>
                    </Box>

                    <Box style={{ maxWidth: "300px", width: "100%" }}>
                        <Text as="p" m="0">
                            Filter company:
                        </Text>
                        <TextField.Root onChange={(e) => setFilterKeyword(e.target.value)} />
                    </Box>
                </Flex>

                <Text as="p" m="0" style={{ fontSize: "20px" }}>
                    Total of {filteredCompanies.length} companies
                </Text>

                <Flex direction="column" gap="4">
                    {filteredCompanies.map((c) => {
                        const jobs = jobList.filter((j) => j.companyId == c.companyId);
                        return (
                            <Flex
                                key={c.companyId}
                                className="company-detail-card"
                                align="center"
                                onClick={() => navigate(`../applicant/company/${c.companyId}`)}
                            >
                                <Flex direction="column" gap="4" width="600px">
                                    <Avatar src={c.img.icon} fallback={c.name} style={{ width: "70px", height: "70px" }} />

                                    <Strong>{c.name}</Strong>

                                    <Flex align="center" gap="1">
                                        <FontAwesomeIcon icon={faStar} color="orange" />
                                        <Text as="p" m="0">
                                            {(
                                                c.reviews.feedbacksRating.reduce((acc, curr) => acc + curr, 0) / c.reviews.feedbacksRating.length
                                            ).toFixed(1)}{" "}
                                            - {c.reviews.feedbacksRating.length} Reviews
                                        </Text>
                                    </Flex>

                                    <Text as="p" m="0" className="jobs-available-container">
                                        {jobs.length} Jobs available
                                    </Text>
                                </Flex>

                                <Flex direction="column" gap="1">
                                    <Flex align="center">
                                        <Strong style={{ width: "150px" }}>Industry</Strong>
                                        <Text as="p" m="0">
                                            {c.about.industry}
                                        </Text>
                                    </Flex>
                                    <Flex align="center">
                                        <Strong style={{ width: "150px" }}>Company size</Strong>
                                        <Text as="p" m="0">
                                            {c.about.companySize} employees
                                        </Text>
                                    </Flex>
                                    <Flex align="center">
                                        <Strong style={{ width: "150px" }}>Primary location</Strong>
                                        <Text as="p" m="0">
                                            {c.about.primaryLocation}
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        );
                    })}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Companies;
