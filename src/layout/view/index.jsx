import { Box, ScrollArea } from "@radix-ui/themes";
import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import LayoutHeader from "./components/header";

const MainLayout = () => {
    return (
        <Box>
            <LayoutHeader />
            <ScrollArea style={{ height: "calc(100vh - 60px)" }}>
                <Box my="7">
                    <Outlet />
                </Box>
            </ScrollArea>
        </Box>
    );
};

export default MainLayout;
