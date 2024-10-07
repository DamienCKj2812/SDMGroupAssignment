import React from "react";
import "./style.css";
import { useRecoilState } from "recoil";
import { userRoleState } from "../../../../_common/state";
import Employerlogin from "./components/employer-login";
import Applicantlogin from "./components/applicant-login";

const Login = () => {
    const [currentUserRole] = useRecoilState(userRoleState);

    if (currentUserRole == "applicant") return <Applicantlogin />;
    if (currentUserRole == "employer") return <Employerlogin />;
};

export default Login;
