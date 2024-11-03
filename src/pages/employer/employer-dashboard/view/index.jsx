import React from "react";
import "./style.css";
import { Text } from "@radix-ui/themes";
import Dashboard from "./components/dashboard";

const EmployerDashboard = () => {
    return (
        <div>
            <Text>Employer Dashboard</Text>
            <Dashboard /> {/* Render the Dashboard component here */}
        </div>
    );
};

export default EmployerDashboard;

