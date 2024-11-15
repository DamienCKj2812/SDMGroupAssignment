import React from "react";
import { useRecoilState } from "recoil";
import { userRoleState } from "../../../../_common/state";

import EmplolyerProduct from "./component/employer-product-page";
import ApplicanntProfile from "./component/applicant-profile-page";

const Home = () => {
    const [userRole] = useRecoilState(userRoleState);

    if (userRole == "employer") {
        return <EmplolyerProduct />;
    }

    if (userRole == "applicant") {
        return <ApplicanntProfile />;
    }
};

export default Home;
