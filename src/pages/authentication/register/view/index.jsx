import React from "react";
import "./style.css";
import { useRecoilState } from "recoil";
import { userRoleState } from "../../../../_common/state";
import EmployerRegister from "./components/employer-register";
import ApplicantRegister from "./components/applicant-register";

const Register = () => {
    const [currentUserRole] = useRecoilState(userRoleState);

    if (currentUserRole == "applicant") return <ApplicantRegister />;
    if (currentUserRole == "employer") return <EmployerRegister />;
};

export default Register;
