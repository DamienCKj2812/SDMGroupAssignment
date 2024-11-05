import React from "react";
import "./style.css";
import { Box, Flex } from "@radix-ui/themes";
import Dashboard from "./components/dashboard";
import ReactECharts from "echarts-for-react";

function getPastNDays(n) {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < n; i++) {
        const pastDate = new Date(today - 1000 * 60 * 60 * 24 * (n - i));
        dates.push(pastDate.toLocaleDateString());
    }
    return dates;
}

const graphOptions = {
    grid: {
        top: "12%",
        right: "1px",
        bottom: "10%",
        left: "100px",
    },
    title: {
        text: "Job Applications Overview",
        subtext: "Last 7 Days",
        left: "center",
    },
    tooltip: {
        trigger: "axis",
    },
    xAxis: {
        type: "category",
        data: [
            "Software Engineer",
            "Marketing Manager",
            "UX Designer",
            "DevOps Engineer",
            "Full Stack Developer",
            "Data Scientist",
            "Product Manager",
        ],
    },
    yAxis: {
        type: "value",
        name: "Number of Applications",
    },
    series: [
        {
            name: "Applied",
            type: "bar",
            data: [32, 20, 29, 24, 23, 28, 27],
            itemStyle: {
                color: "#1B1212",
            },
        },
        {
            name: "Interviewed",
            type: "bar",
            data: [10, 10, 13, 12, 9, 15, 20],
            itemStyle: {
                color: "#abaa9a",
            },
        },
        {
            name: "Hired",
            type: "bar",
            data: [4, 2, 3, 1, 5, 2, 3],
            itemStyle: {
                color: "#FAC858",
            },
        },
    ],
};

const lineChart = {
    grid: {
        top: "13%",
        right: "1px",
        bottom: "15%",
        left: "100px",
    },
    title: {
        text: "Interactions",
        subtext: "Last 7 Days",
        left: "center",
    },
    xAxis: {
        type: "category",
        data: getPastNDays(7),
    },
    yAxis: {
        type: "value",
        name: "Clicks",
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            itemStyle: {
                color: "#1B1212",
            },
            //smooth: false;
        },
    ],
    tooltip: {
        trigger: "axis",
    },
};

const PieChart = {
    // grid: {
    //     top: '13%',
    //     right: "1px",
    //     bottom: "15%",
    //     left: "10px",
    // },
    title: {},
    legend: {
        top: "bottom",
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    series: [
        {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
                borderRadius: 8,
            },
            data: [
                { value: 40, name: "rose 1" },
                { value: 38, name: "rose 2" },
                { value: 32, name: "rose 3" },
                { value: 30, name: "rose 4" },
                { value: 28, name: "rose 5" },
                { value: 26, name: "rose 6" },
                { value: 22, name: "rose 7" },
                { value: 18, name: "rose 8" },
            ],
        },
    ],
};

const EmployerDashboard = () => {
    return (
        <Flex justify="center" direction="column">
            <Dashboard />
            <Flex gap="1">
                <Box width="40%" height="600px">
                    <Box width="100%" height="270px">
                        <ReactECharts option={graphOptions} notMerge={true} lazyUpdate={true} style={{ height: "250px", width: "110%" }} />
                    </Box>
                    <Box width="100%" height="250px">
                        <ReactECharts option={lineChart} notMerge={true} lazyUpdate={true} style={{ height: "250px", width: "110%" }} />
                    </Box>
                </Box>

                <Box width="100%" height="600px">
                    <ReactECharts option={PieChart} notMerge={true} lazyUpdate={true} style={{ height: "95%", width: "100%" }} />
                </Box>
            </Flex>

            {/* <Box maxWidth="400%">
                    <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "3" }}>
                        <RadioCards.Item value="1">
                            <Flex direction="column" width="100%">
                                <Text weight="bold">8-core CPU</Text>
                                <Text>32 GB RAM</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value="2">
                            <Flex direction="column" width="100%">
                                <Text weight="bold">6-core CPU</Text>
                                <Text>24 GB RAM</Text>
                            </Flex>
                        </RadioCards.Item>
                        <RadioCards.Item value="3">
                            <Flex direction="column" width="100%">
                                <Text weight="bold">4-core CPU</Text>
                                <Text>16 GB RAM</Text>
                            </Flex>
                        </RadioCards.Item>
                    </RadioCards.Root>
                </Box>
             */}
        </Flex>
    );
};

export default EmployerDashboard;
