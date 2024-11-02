import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { applicantSetting } from "../../../../_common/data/setting-list";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState } from "../../../../_common/state";
import { Box, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import ApplicantProfileBanner from "./components/applicant-profile-banner";
import ApplicantPersonalSummary from "./components/applicant-personal-summary";
import ApplicantCareerHistory from "./components/applicant-career-history";
import ApplicantEducation from "./components/applicant-education";
import ApplicantLicenseAndCertificants from "./components/applicant-licences_and_certifications";
import ApplicantSkills from "./components/applicant-skills";
import ApplicantLanguage from "./components/applicant-language";
import ApplicantResume from "./components/applicant-resume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const ApplicantProfile = () => {
    const [currentUser] = useRecoilState(currentLoggedInUserState);
    const applicantPersonalSummaryRef = useRef(null);
    const applicantCareerHistoryRef = useRef(null);
    const applicantEducationRef = useRef(null);
    const applicantLicenseAndCertificantsRef = useRef(null);
    const applicantSkillsRef = useRef(null);
    const applicantLanguageRef = useRef(null);
    const applicantResumeRef = useRef(null);

    function scrollToSection(sectionRef) {
        const container = document.querySelector(".details-container");
        if (container && sectionRef.current) {
            sectionRef.current.scrollIntoView({
                behavior: "smooth",
                inline: "start",
            });
        }
    }

    return (
        <Box id="applicant-profile" minHeight="100vh">
            <ApplicantProfileBanner currentUser={currentUser} settings={applicantSetting} />

            <Flex justify="between" m="9" gap="9">
                <Flex gap="9" direction="column" className="details-container" maxWidth="700px" flexGrow="1">
                    <Box ref={applicantPersonalSummaryRef} style={{ scrollMarginTop: "20px" }}>
                        <ApplicantPersonalSummary />
                    </Box>
                    <Box ref={applicantCareerHistoryRef} style={{ scrollMarginTop: "20px" }}>
                        <ApplicantCareerHistory />
                    </Box>
                    <Box ref={applicantEducationRef} style={{ scrollMarginTop: "20px" }}>
                        <ApplicantEducation />
                    </Box>
                    <Box ref={applicantLicenseAndCertificantsRef} style={{ scrollMarginTop: "20px" }}>
                        <ApplicantLicenseAndCertificants />
                    </Box>
                    <Box ref={applicantSkillsRef} style={{ scrollMarginTop: "20px" }}>
                        <ApplicantSkills />
                    </Box>
                    <Box ref={applicantLanguageRef} style={{ scrollMarginTop: "20px" }}>
                        <ApplicantLanguage />
                    </Box>
                    <Box ref={applicantResumeRef} style={{ scrollMarginTop: "20px" }}>
                        <ApplicantResume />
                    </Box>
                </Flex>

                <Box className="all-details-navigation">
                    <Heading as="h1" m="0">
                        Check List
                    </Heading>

                    <Flex direction="column" position="sticky" flexGrow="1" gap="3" className="content-container">
                        <Strong>Profiles with details are more likely to be selected.</Strong>
                        {[
                            { name: "personalSummary", label: "Personal Summary", ref: applicantPersonalSummaryRef },
                            { name: "careerHistory", label: "Career History", ref: applicantCareerHistoryRef },
                            { name: "education", label: "Education", ref: applicantEducationRef },
                            { name: "license", label: "License", ref: applicantLicenseAndCertificantsRef },
                            { name: "skills", label: "Skills", ref: applicantSkillsRef },
                            { name: "languages", label: "Languages", ref: applicantLanguageRef },
                            { name: "resume", label: "Resume", ref: applicantResumeRef },
                        ].map((o) => {
                            return (
                                <Flex
                                    align="center"
                                    gap="3"
                                    key={o.name}
                                    className="content"
                                    onClick={() => {
                                        scrollToSection(o.ref);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                    <Text as="p" m="0">
                                        {o.label}
                                    </Text>
                                </Flex>
                            );
                        })}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default ApplicantProfile;
