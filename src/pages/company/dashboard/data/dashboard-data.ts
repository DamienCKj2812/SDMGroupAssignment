export const companyDashboardData = {
    recruitmentPerformance: {
        title: {
            text: "Recruitment Performance",
            textStyle: {
                color: "#ffffff", // Title color
                fontSize: 16,
                fontWeight: "bold",
            },
        },
        legend: {
            data: ["Target Performance", "Actual Performance"],
            textStyle: {
                color: "#dbdee1",
                borderColor: "#ffffff", // Legend text color
            },
        },
        radar: {
            indicator: [
                { name: "Candidate Quality", max: 10 },
                { name: "Applications Rejected", max: 100 },
                { name: "Applications Approved", max: 100 },
                { name: "Hiring Period (Days)", max: 60 },
                { name: "Time to Hire (Days)", max: 60 },
                { name: "Contracts Signed", max: 50 },
            ],
        },
        series: [
            {
                name: "Target vs Actual Performance",
                type: "radar",
                data: [
                    {
                        value: [8, 30, 70, 45, 30, 40],
                        name: "Target Performance",
                    },
                    {
                        value: [7, 50, 60, 55, 40, 35],
                        name: "Actual Performance",
                    },
                ],
            },
        ],
    },
    weeklyCollectedServiceFees: {
        title: {
            text: "Revenue From Each Service Over the Week",
            left: "left", // Position the title in the center
            top: "top", // Position the title at the top
            textStyle: {
                color: "#dbdee1",
                fontSize: 16, // Customize font size, style, etc.
                fontWeight: "bold",
            },
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#6a7985",
                },
            },
        },
        legend: {
            data: ["Service Fees", "Employer Ads"], // Names of the series
            left: "center", // Position the legend in the center
            top: "top", // Position the legend at the top
            textStyle: {
                color: "#dbdee1",
                borderColor: "#ffffff", // Legend text color
            },
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
            },
        ],
        yAxis: [
            {
                type: "value",
                name: "Revenue (RM)", // Label for y-axis
                axisLabel: {
                    formatter: "{value}", // Format the axis label as needed
                },
            },
        ],
        grid: {
            top: "14%",
            left: "8%",
            right: "8%",
        },
        series: [
            {
                name: "Service Fees",
                type: "line",
                stack: "Total",
                areaStyle: {
                    color: "rgba(255, 255, 255, 0.5)", // White area color with some transparency
                },
                emphasis: {
                    focus: "series",
                },
                data: [1500, 2000, 1800, 2200, 3000, 2500, 3000],
            },
            {
                name: "Employer Ads",
                type: "line",
                stack: "Total",
                areaStyle: {
                    color: "rgba(128, 128, 128, 0.5)", // Grey area color with some transparency
                },
                emphasis: {
                    focus: "series",
                },
                data: [1000, 1500, 1300, 1800, 2200, 2800, 2900],
            },
        ],
    },

    newApplicantOptions: {
        title: {
            text: "New Applicants Over the Week",
            textStyle: {
                color: "#dbdee1",
                fontSize: 16, // Customize font size, style, etc.
                fontWeight: "bold",
            },
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: "line",
                areaStyle: {
                    color: "rgba(255, 255, 255, 0.3)", // Area under the line
                },
                itemStyle: {
                    color: "#ffffff", // Line color
                },
                lineStyle: {
                    color: "#ffffff", // Line color
                    width: 2, // Thickness of the line
                },
            },
        ],
    },
    newJobVacanciesOptions: {
        title: {
            text: "New Job Vacancies Per Week",
            right: "right",
            textStyle: {
                color: "#dbdee1",
                fontSize: 16, // Customize font size, style, etc.
                fontWeight: "bold",
            },
        },
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisLabel: {
                color: "#dbdee1",
            },
        },
        yAxis: {
            type: "value",
            axisLabel: {
                color: "#dbdee1",
            },
        },
        series: [
            {
                data: [300, 432, 901, 334, 190, 1230, 920],
                type: "bar",
                barWidth: "60%", // Customize bar width
                itemStyle: {
                    color: "rgba(255, 255, 255, 0.3)", // Fill color of the bars
                    borderColor: "#ffffff", // Outline color of the bars
                    borderWidth: 1, // Width of the outline
                },
                emphasis: {
                    itemStyle: {
                        color: "rgba(255, 255, 255, 0.5)", // Color when bar is highlighted
                        borderColor: "#ffffff",
                        borderWidth: 2,
                    },
                },
            },
        ],
    },
    top10IndustriesOptions: {
        title: {
            text: "Top 10 Most Popular Industries",
            textStyle: {
                color: "#ffffff", // Title color
                fontSize: 16,
                fontWeight: "bold",
            },
        },
        tooltip: {
            trigger: "item",
        },
        series: [
            {
                name: "Industries",
                type: "pie",
                radius: ["50%", "70%"], // Donut effect
                color: [
                    "#ffffff",
                    "#e0e0e0",
                    "#c0c0c0",
                    "#a0a0a0",
                    "#808080",
                    "#606060",
                    "#404040",
                    "#303030", // Brightened from #202020
                    "#2a2a2a", // Brightened from #1a1a1a
                    "#181818",
                ],
                data: [
                    { value: 235, name: "Technology" },
                    { value: 210, name: "Healthcare" },
                    { value: 150, name: "Finance" },
                    { value: 130, name: "Education" },
                    { value: 80, name: "Manufacturing" },
                    { value: 70, name: "Retail" },
                    { value: 60, name: "Transportation" },
                    { value: 50, name: "Construction" },
                    { value: 40, name: "Hospitality" },
                    { value: 30, name: "Energy" },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
        backgroundColor: "#000000", // Background color for the chart
    },
    top10CompaniesOptions: {
        title: {
            text: "Top 10 Most Popular Companies",
            textStyle: {
                color: "#ffffff", // Title color
                fontSize: 16,
                fontWeight: "bold",
            },
        },
        tooltip: {
            trigger: "item",
        },
        series: [
            {
                name: "Companies",
                type: "pie",
                radius: ["50%", "70%"], // Donut effect
                color: [
                    "#ffffff",
                    "#e0e0e0",
                    "#c0c0c0",
                    "#a0a0a0",
                    "#808080",
                    "#606060",
                    "#404040",
                    "#303030", // Brightened from #202020
                    "#2a2a2a", // Brightened from #1a1a1a
                    "#181818",
                ],
                data: [
                    { value: 300, name: "Apple" },
                    { value: 280, name: "Microsoft" },
                    { value: 250, name: "Amazon" },
                    { value: 230, name: "Google" },
                    { value: 210, name: "Facebook" },
                    { value: 200, name: "Tesla" },
                    { value: 190, name: "Berkshire Hathaway" },
                    { value: 180, name: "Samsung" },
                    { value: 170, name: "Tencent" },
                    { value: 160, name: "Alibaba" },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
        backgroundColor: "#000000", // Background color for the chart
    },
    top10SkillsOptions: {
        title: {
            text: "Top 10 Most Demanded Skills",
            textStyle: {
                color: "#ffffff", // Title color
                fontSize: 16,
                fontWeight: "bold",
            },
        },
        tooltip: {
            trigger: "item",
        },
        series: [
            {
                name: "Skills",
                type: "pie",
                radius: ["50%", "70%"], // Donut effect
                color: ["#ffffff", "#e0e0e0", "#c0c0c0", "#a0a0a0", "#808080", "#606060", "#404040", "#303030", "#2a2a2a", "#181818"],
                data: [
                    { value: 400, name: "Data Analysis" },
                    { value: 380, name: "Cloud Computing" },
                    { value: 350, name: "Cybersecurity" },
                    { value: 340, name: "Machine Learning" },
                    { value: 320, name: "Project Management" },
                    { value: 310, name: "Digital Marketing" },
                    { value: 290, name: "Programming (Python)" },
                    { value: 280, name: "Web Development" },
                    { value: 270, name: "SQL" },
                    { value: 260, name: "Blockchain" },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
        backgroundColor: "#000000", // Background color for the chart
    },
};
