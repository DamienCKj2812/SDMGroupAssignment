import React from "react";
import "./style.css";
import { applicantSetting } from "../../../../_common/data/setting-list";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState } from "../../../../_common/state";
import { Box, Flex } from "@radix-ui/themes";
import ApplicantProfileBanner from "./components/applicant-profile-banner";
import ApplicantPersonalSummary from "./components/applicant-personal-summary";
import ApplicantCareerHistory from "./components/applicant-career-history";
import ApplicantEducation from "./components/applicant-education";
import ApplicantLicenseAndCertificants from "./components/applicant-licences_and_certifications";
import ApplicantSkills from "./components/applicant-skills";
import ApplicantLanguage from "./components/applicant-language";
import ApplicantResume from "./components/applicant-resume";

const ApplicantProfile = () => {
    const [currentUser] = useRecoilState(currentLoggedInUserState);

    return (
        <Box id="applicant-profile">
            <ApplicantProfileBanner currentUser={currentUser} settings={applicantSetting} />

            <Flex m="9" gap="9" direction="column" className="details-container">
                <ApplicantPersonalSummary />
                <ApplicantCareerHistory />
                <ApplicantEducation />
                <ApplicantLicenseAndCertificants />
                <ApplicantSkills />
                <ApplicantLanguage />
                <ApplicantResume />
            </Flex>
        </Box>
    );
};

export default ApplicantProfile;
