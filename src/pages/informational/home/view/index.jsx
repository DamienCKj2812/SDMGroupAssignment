import { Box } from "@radix-ui/themes";
import React from "react";
import { useRecoilState } from "recoil";
import { userRoleState } from "../../../../_common/state";
import "./style.css";
import EmplolyerHomePage from "./components/employer-home-page";
import ApplicantHomePage from "./components/applicant-home-page";

const Home = () => {
    const [userRole] = useRecoilState(userRoleState);

    if (userRole == "employer") {
        return <EmplolyerHomePage />;
    }

    if (userRole == "applicant") {
        return <ApplicantHomePage />;
    }
};

export default Home;
