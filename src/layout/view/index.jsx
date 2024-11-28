import { Box, ScrollArea, Text } from "@radix-ui/themes";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import LayoutHeader from "./components/header";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState, userRoleState } from "../../_common/state";

const pathWithNoMargin = ["/home", "/login", "/register", "/employer/company-profile", "/applicant/job-search", "/meeting/schedule-meeting"];

const MainLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUser] = useRecoilState(currentLoggedInUserState);
    const [userRole] = useRecoilState(userRoleState);

    if (location.pathname.includes("/company-login")) return <Outlet />;

    return (
        <Box>
            <Box>
                <LayoutHeader />
            </Box>
            <ScrollArea
                style={{ height: "calc(100vh - 60px)" }}
                id="layout-scroll-area"
                className={`${userRole == "admin" || userRole == "manager" || userRole == "staff" ? "dark-theme-layout" : ""} `}
            >
                <Box style={{ margin: pathWithNoMargin.includes(location.pathname) ? "" : "50px 0px" }}>
                    <Outlet />
                </Box>
                {!currentUser && (
                    <Box id="company-entry">
                        <Text as="p" m="0" onClick={() => navigate(`../company-login`)}>
                            Magic right here
                        </Text>
                    </Box>
                )}
            </ScrollArea>
        </Box>
    );
};

export default MainLayout;
