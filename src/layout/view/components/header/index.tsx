import React from "react";
import EmployerGuestHeader from "./employer-guest-header";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState, userRoleState } from "../../../../_common/state";
import ApplicantGuestHeader from "./applicant-guest-header";
import EmployerHeader from "./employer-header";
import ApplicantHeader from "./applicant-header";

const LayoutHeader = () => {
    const [currentUserRole] = useRecoilState(userRoleState);
    const [currentUser] = useRecoilState(currentLoggedInUserState);

    if (currentUser) {
        if (currentUserRole == "employer") return <EmployerHeader />;
        if (currentUserRole == "applicant") return <ApplicantHeader />;
    }

    if (currentUserRole == "employer") return <EmployerGuestHeader />;
    if (currentUserRole == "applicant") return <ApplicantGuestHeader />;
};

export default LayoutHeader;
