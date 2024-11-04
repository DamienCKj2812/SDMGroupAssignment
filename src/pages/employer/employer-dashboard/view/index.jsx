import React from "react";
import "./style.css";
import { Flex } from "@radix-ui/themes";
import ReactECharts from "echarts-for-react";

const graphOptions = {
    title: {
        text: "Job Applications Overview",
        subtext: "Last 7 Days",
        left: "center",
    },
    tooltip: {
        trigger: "axis",
    },
    legend: {
        data: ["Applied", "Interviewed", "Hired"],
        bottom: "10%",
    },
    xAxis: {
        type: "category",
        data: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    },
    yAxis: {
        type: "value",
        name: "Number of Applications",
    },
    series: [
        {
            name: "Applied",
            type: "bar",
            data: [120, 200, 150, 80, 70, 110, 130],
            itemStyle: {
                color: "#5470C6",
            },
        },
        {
            name: "Interviewed",
            type: "bar",
            data: [50, 90, 60, 30, 20, 40, 50],
            itemStyle: {
                color: "#91CC75",
            },
        },
        {
            name: "Hired",
            type: "bar",
            data: [20, 40, 30, 10, 5, 15, 20],
            itemStyle: {
                color: "#FAC858",
            },
        },
    ],
};

const EmployerDashboard = () => {
    return (
        <Flex height="400px" width="400px">
            <ReactECharts option={graphOptions} notMerge={true} lazyUpdate={true} style={{ height: "100%", width: "100%" }} />
        </Flex>
    );
};

export default EmployerDashboard;
