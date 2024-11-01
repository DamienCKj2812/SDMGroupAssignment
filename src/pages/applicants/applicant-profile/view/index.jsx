import React from "react";
import "./style.css";
import { applicantSetting } from "../../../../_common/data/setting-list";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState } from "../../../../_common/state";
import { Flex } from "@radix-ui/themes";
import ApplicantProfileBanner from "./components/applicant-profile-banner";

const ApplicantProfile = () => {
  
    const [currentUser] = useRecoilState(currentLoggedInUserState);

    return (
        <Flex direction="column" gap="9" id="applicant-profile" flexGrow="1">
            <ApplicantProfileBanner currentUser={currentUser} settings={applicantSetting} />
        </Flex>
    );
};

export default ApplicantProfile;
