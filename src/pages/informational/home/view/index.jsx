import { Box } from "@radix-ui/themes";
import React from "react";
import { useRecoilState } from "recoil";
import { userRoleState } from "../../../../_common/state";

const Home = () => {
    const [userRole] = useRecoilState(userRoleState);

    if (userRole == "employer") {
        return <Box>Home page for the employee</Box>;
    }

    if (userRole == "applicant") {
        return <Box>Home page for the aplicant</Box>;
    }
};

export default Home;
