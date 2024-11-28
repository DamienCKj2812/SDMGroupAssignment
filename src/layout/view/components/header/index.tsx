import React from "react";
import EmployerGuestHeader from "./employer-guest-header";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState, userRoleState } from "../../../../_common/state";
import ApplicantGuestHeader from "./applicant-guest-header";
import EmployerHeader from "./employer-header";
import ApplicantHeader from "./applicant-header";
import StaffHeader from "./staff-header";
import ManagerHeader from "./manager-header";
import { useLocation } from "react-router-dom";

const locationNoHeader = ["/payment-gateway"];
const LayoutHeader = () => {
    const [currentUserRole] = useRecoilState(userRoleState);
    const [currentUser] = useRecoilState(currentLoggedInUserState);
    const location = useLocation();

    if (locationNoHeader.includes(location.pathname)) return null;
    
    if (currentUser) {
        if (currentUserRole == "employer") return <EmployerHeader />;
        if (currentUserRole == "applicant") return <ApplicantHeader />;
        if (currentUserRole == "staff") return <StaffHeader />;
        if (currentUserRole == "manager") return <ManagerHeader />;
    }

    if (currentUserRole == "employer") return <EmployerGuestHeader />;
    if (currentUserRole == "applicant") return <ApplicantGuestHeader />;
};

export default LayoutHeader;
