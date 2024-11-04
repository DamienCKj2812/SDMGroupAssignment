import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Button, Flex, Heading, Radio, Separator, Text, TextField } from "@radix-ui/themes";
import Loader from "../../../../_common/components/loader";
import { useParams } from "react-router-dom";
import { ICompany, IJob } from "../../../../_common/interface";
import { jobList } from "../../../../_common/data/job-list";
import { companyList } from "../../../../_common/data/company-list";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ReviewCompany = () => {
    const [jobs, setJobs] = useState<IJob[]>();
    const [companyDetail, setCompanyDetail] = useState<ICompany>();
    const { companyId } = useParams();
    const [selectedStar, setSelectedStar] = useState<{ question: string | null; rating: number | null }>({
        question: null,
        rating: null,
    });

    useEffect(() => {
        const progressBar = document.querySelector(".progress-bar");
        const separators = document.querySelectorAll(".separator"); // Select all separator elements

        if (progressBar) {
            const trigger = ScrollTrigger.create({
                trigger: ".wrapper",
                scroller: "#layout-scroll-area",
                start: "top top",
                end: "bottom+=120 bottom",
                pin: ".progress-bar",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress; // Get scroll progress (0 to 1)
                    const redPercent = Math.min(progress, 1); // Ensure it does not exceed 1

                    // Set progress bar background
                    progressBar.style.background = `linear-gradient(to bottom, lime ${redPercent * 100}%, white ${redPercent * 100}%)`;

                    // Update the first separator background color
                    if (redPercent < 0.5) {
                        gsap.to(separators[0], {
                            background: `linear-gradient(to bottom, black ${redPercent * 200}%, grey ${redPercent * 200}%)`,
                            duration: 0.1,
                            overwrite: "auto",
                        });
                    } else {
                        // After halfway, keep the first separator at 100%
                        gsap.to(separators[0], {
                            background: `linear-gradient(to bottom, black 100%, grey 100%)`,
                            duration: 0.1,
                            overwrite: "auto",
                        });
                    }

                    // Update the second separator background color after the first one reaches halfway
                    if (redPercent >= 0.5) {
                        gsap.to(separators[1], {
                            background: `linear-gradient(to bottom, black ${(redPercent - 0.5) * 200}%, grey ${(redPercent - 0.5) * 200}%)`,
                            duration: 0.1,
                            overwrite: "auto",
                        });
                    } else {
                        // Before reaching halfway, keep the second separator transparent
                        gsap.to(separators[1], {
                            background: `linear-gradient(to bottom, grey 0%, grey 100%)`,
                            duration: 0.1,
                            overwrite: "auto",
                        });
                    }
                },
            });

            return () => {
                trigger.kill(); // Cleanup the ScrollTrigger instance
            };
        }
    }, [jobs]);

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
        <Flex id="review-company" direction="column" justify="center" pt="9">
            <Flex justify="center" gap="9">
                <Flex direction="column" gap="9" className="wrapper">
                    <Box className="rate-company" width="700px">
                        <Heading as="h1" m="0" mb="3">
                            Rate {companyDetail.name}
                        </Heading>
                        <Flex direction="column">
                            {[
                                "What opportunities for professional growth are available?",
                                "How well does the company support work-life balance?",
                                "What is the workplace culture like?",
                                "How effective is the management team?",
                                "What benefits and perks are offered to employees?",
                                "How does the company promote diversity and equal opportunity?",
                                "How would you rate your overall experience working here?",
                            ].map((q) => {
                                return (
                                    <Flex align="center" gap="5" key={q} justify="between" className="option">
                                        <Text as="p" m="0">
                                            {q}
                                        </Text>

                                        <Flex align="center" gap="2">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    key={index}
                                                    onMouseEnter={() =>
                                                        setSelectedStar({
                                                            question: q,
                                                            rating: index,
                                                        })
                                                    }
                                                    onMouseLeave={() =>
                                                        setSelectedStar({
                                                            question: null,
                                                            rating: null,
                                                        })
                                                    }
                                                    className={`star ${
                                                        selectedStar.question === q && selectedStar.rating !== null && index <= selectedStar.rating
                                                            ? "selected"
                                                            : ""
                                                    }`}
                                                />
                                            ))}
                                        </Flex>
                                    </Flex>
                                );
                            })}
                        </Flex>
                    </Box>

                    <Flex className="your-experience" width="700px" direction="column" gap="4">
                        <Heading as="h1" m="0">
                            Your experience
                        </Heading>
                        {[
                            {
                                question: "The good things",
                                label: "Describe what you enjoyed most",
                            },
                            {
                                question: "The challenges",
                                label: "Describe what you found difficult",
                            },
                            {
                                question: "Summarise your experience in one sentence",
                                label: "This will be used as the title of your review",
                            },
                        ].map((q) => {
                            return (
                                <Flex direction="column" gap="2" key={q.label} className="option">
                                    <Text as="p" m="0">
                                        {q.question}
                                    </Text>
                                    <textarea />
                                    <Text as="label" m="0">
                                        {q.label}
                                    </Text>
                                </Flex>
                            );
                        })}
                    </Flex>

                    <Flex className="role-details" width="700px" direction="column" gap="3">
                        <Heading as="h1" m="0">
                            Role details to accompany your review
                        </Heading>
                        <Text as="label">
                            If you're concerned that the information below could be identifying, consider using broader terms. For example, use
                            "Marketing Department" instead of "Marketing Assistant."
                        </Text>
                        {[
                            "Job title",
                            "Job location",
                            "When did you work at LYJ Events & Marketing Sdn Bhd? (optional)",
                            "For how long? (optional)",
                        ].map((q) => {
                            return (
                                <Box>
                                    <Text as="p" m="0" mb="2" key={q}>
                                        {q}
                                    </Text>
                                    <TextField.Root />
                                </Box>
                            );
                        })}

                        <Flex direction="column" gap="2">
                            <Text>Work type (optional)</Text>
                            {["Full time", "Part time", "Contract/Temp"].map((q) => {
                                return (
                                    <Flex align="center" gap="2">
                                        <Radio value={q} />
                                        <Text>{q}</Text>
                                    </Flex>
                                );
                            })}
                        </Flex>

                        <Flex gap="2" mt="3">
                            <Button color="green">Submit</Button>
                            <Button variant="outline">Back</Button>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex height="100vh" pt="6">
                    <Flex direction="column" gap="2" width="300px" height="300px" className="progress-bar" justify="between">
                        <Flex align="center">
                            <Text className="split-word">Rate company</Text>
                        </Flex>

                        <Separator orientation="vertical" className="separator" style={{ background: "black", height: "100%", width: "3px" }} />

                        <Flex align="center">
                            <Text>Your experience</Text>
                        </Flex>

                        <Separator orientation="vertical" className="separator" style={{ background: "black", height: "100%", width: "3px" }} />

                        <Flex align="center">
                            <Text>Role details</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Box height="400px">asdasdasd</Box>
        </Flex>
    );
};

export default ReviewCompany;
