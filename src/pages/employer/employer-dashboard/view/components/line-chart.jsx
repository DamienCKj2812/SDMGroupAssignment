import React from "react";
import ReactECharts from "echarts-for-react";
import { SegmentedControl ,Container ,Box, Flex, RadioCards, Text } from "@radix-ui/themes";

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
        name: "No. of Applications",
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

    title: {
        text: "Ben Dover`s Interactions",
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

const pieChart = {
    title: {
        text: "Trending Search of Your Company",
        subtext: new Date().toLocaleString('default', { month: 'long' }),
        left: "center",
    },
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
            radius: [50, 200],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
                borderRadius: 8,
            },
            data: [
                { value: 40, name: "Software Engineer" },
                { value: 38, name: "Data Scientist" },
                { value: 32, name: "DevOps Engineer" },
                { value: 30, name: "Full Stack Developer" },
                { value: 28, name: "Marketing Manager" },
                { value: 26, name: "Product Manager" },
                { value: 22, name: "Software Engineer" },
                { value: 18, name: "UX Designer" },
            ],
        },
    ],
};

const LineChart = () => {
    return <div> 
    <Flex gap="1" mt="9" mx="8" justify="center">
        
        <Flex  direction="column">
            <Box width="600px" height="270px" >
                <ReactECharts option={graphOptions} notMerge={true} lazyUpdate={true} style={{ height: "100%", width: "100%" }} />
            </Box>
            <Box width="600px" height="250px" mt ="9">
                <ReactECharts option={lineChart} notMerge={true} lazyUpdate={true} style={{ height: "100%", width: "100%" }} />
            </Box>    
        </Flex>

        <Box width="800px" height="550px" >
                <ReactECharts option={pieChart} notMerge={true} lazyUpdate={true} style={{ height: "100%", width: "100%" }} />
        </Box>
        
    </Flex></div>;
   
};

export default LineChart;
