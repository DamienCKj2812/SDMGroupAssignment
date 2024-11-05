import { Box, ScrollArea, Text } from "@radix-ui/themes";
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import LayoutHeader from "./components/header";

const MainLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname.includes("/company-login")) return <Outlet />;

    return (
        <Box>
            <Box>
                <LayoutHeader />
            </Box>
            <ScrollArea style={{ height: "calc(100vh - 60px)" }} id="layout-scroll-area">
                <Box>
                    <Outlet />

                    <Box id="company-entry">
                        <Text as="p" m="0" onClick={() => navigate(`../company-login`)}>
                            Magic right here
                        </Text>
                    </Box>
                </Box>
            </ScrollArea>
        </Box>
    );
};

export default MainLayout;
