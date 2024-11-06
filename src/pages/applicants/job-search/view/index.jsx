import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Heading, Popover, ScrollArea, Strong, Text, TextField } from "@radix-ui/themes";
import { companyList } from "../../../../_common/data/company-list";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { industryData } from "../../../../_common/data/industry-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { jobList } from "../../../../_common/data/job-list";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const JobSearch = () => {
    const [filterIndustries, setFilterindustries] = useState([]);
    const jobSearchRef = useRef(null);
    const [jobs, setJobs] = useState([]);
    const [filterKeyword, setFilterKeyword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (filterKeyword) {
            const filteredJobs = jobList.filter((j) => j.position.toLowerCase().includes(filterKeyword.toLowerCase()));
            console.log(filteredJobs);
            setJobs(filteredJobs);
        } else if (filterIndustries.length > 0) {
            const companyIds = companyList.filter((c) => filterIndustries.includes(c.about.industry)).map((c) => c.companyId);
            const filteredJobs = jobList.filter((j) => companyIds.includes(j.companyId));
            setJobs(filteredJobs);
        } else {
            // Default jobs if no filters are set
            setJobs(jobList);
        }
    }, [filterKeyword, filterIndustries]);

    useEffect(() => {
        const sections = document.querySelectorAll(".company-details-container");
        const scrollArea = document.querySelector("#layout-scroll-area"); // Replace with your ScrollArea ID or class

        sections.forEach((s) => {
            gsap.fromTo(
                s,
                { x: "-100%", opacity: 0 }, // Start position and opacity
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
    }, [jobs]);

    return (
        <Box id="job-search" ref={jobSearchRef}>
            <Flex align="center" justify="center" className="filter-area">
                <Flex align="center" gap="2">
                    <TextField.Root placeholder="Enter Keywords" onChange={(e) => setFilterKeyword(e.target.value)} value={filterKeyword} />
                    <Popover.Root>
                        <Popover.Trigger>
                            <Flex justify="between" className="search-container" align="center">
                                <ScrollArea style={{ paddingTop: "8px" }}>
                                    <Text as="p" m="0" ml="2">
                                        {filterIndustries.length > 0
                                            ? filterIndustries.map((f, i) => (
                                                  <Text as="span" key={i}>
                                                      {f}
                                                      {filterIndustries.length - 1 !== i && ", "}
                                                  </Text>
                                              ))
                                            : "No Industry Selected"}
                                    </Text>
                                </ScrollArea>
                            </Flex>
                        </Popover.Trigger>
                        <Popover.Content id="industry-options-popover" container={jobSearchRef.current}>
                            <Flex direction="column">
                                {industryData.map((d) => {
                                    const selected = filterIndustries.includes(d);
                                    const companys = companyList.filter((c) => c.about.industry == d);
                                    return (
                                        <Flex
                                            align="center"
                                            key={d}
                                            gap="2"
                                            className={`option ${selected ? "selected" : ""}`}
                                            onClick={() => {
                                                setFilterindustries((prev) => {
                                                    if (prev.includes(d)) {
                                                        return prev.filter((p) => !p.includes(d));
                                                    }
                                                    return [...prev, d];
                                                });
                                            }}
                                        >
                                            <Box width="30px" pl="3">
                                                {selected && <FontAwesomeIcon icon={faCheck} />}
                                            </Box>
                                            <Text>{d}</Text>
                                            <Text as="p" m="0" ml="auto" mr="4">
                                                {companys.length}
                                            </Text>
                                        </Flex>
                                    );
                                })}
                            </Flex>
                        </Popover.Content>
                    </Popover.Root>
                    <Flex betwen></Flex>
                </Flex>
            </Flex>
            <Flex direction="column" gap="4" maxWidth="700px" flexGrow="1" style={{ margin: "70px 150px" }}>
                <Box mb="2">
                    <Heading as="h1" m="0" mb="2">
                        Recommended for you
                    </Heading>

                    <Text as="label">Based on your profile, job views and applications.</Text>
                </Box>
                {jobs.map((j) => {
                    const company = companyList.find((c) => c.companyId == j.companyId);
                    if (!company) return <></>;
                    return (
                        <Flex
                            key={j.jobId}
                            justify="between"
                            align="center"
                            className="company-details-container"
                            onClick={() => navigate(`../applicant/job/${j.jobId}`)}
                        >
                            <Flex direction="column" gap="1">
                                <Strong>{j.position}</Strong>
                                <Text as="p" m="0">
                                    {company.name}
                                </Text>
                                <Text as="p" m="0">
                                    {company.about.primaryLocation}
                                </Text>
                                <Text as="p" m="0" className="sm">
                                    69 days ago
                                </Text>
                            </Flex>

                            <img src={company.img.icon} alt={j.position} />
                        </Flex>
                    );
                })}
            </Flex>
        </Box>
    );
};

export default JobSearch;
