import { Box, ScrollArea } from "@radix-ui/themes";
import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import LayoutHeader from "./components/header";

const MainLayout = () => {
    return (
        <Box>
            <Box>
                <LayoutHeader />
            </Box>
            <ScrollArea style={{ height: "calc(100vh - 60px)" }} id="layout-scroll-area">
                <Box>
                    <Outlet />
                </Box>
            </ScrollArea>
        </Box>
    );
};

export default MainLayout;
