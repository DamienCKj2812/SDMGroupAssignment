export function generateReportGraphData(
    xAxis: string[],
    yAxis: number[],
    chartType: "line" | "bar",
    lineColor: string = "rgba(180, 180, 180, 0.5)", // Default line color
    itemColor: string = "#FFFFFF" // Default bar/item color
) {
    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: chartType === "bar" ? "shadow" : "line", // Shadow for bar, line for line chart
            },
        },
        xAxis: {
            type: "category",
            data: xAxis,
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: yAxis,
                type: chartType === "bar" ? "bar" : "line",
                showBackground: true,
                backgroundStyle: {
                    color: "rgba(180, 180, 180, 0.2)",
                },
                itemStyle: {
                    color: itemColor, // Sets color of bars/points
                },
                ...(chartType === "line" && {
                    lineStyle: {
                        color: lineColor, // Sets color of the line
                    },
                }),
            },
        ],
    };
}

function generateSingleSeries(
    yAxis: number[],
    chartType: "line" | "bar",
    baseColor: string,
    name: string
) {
    return {
        name,
        data: yAxis,
        type: chartType,
        showBackground: true,
        backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
        },
        itemStyle: {
            color: chartType === "bar" ? baseColor : `${baseColor}B3`, // For bars, use full color; for line, use with opacity
        },
        ...(chartType === "line" && {
            lineStyle: {
                color: `${baseColor}80`, // Line color with opacity
            },
        }),
    };
}

export function generateReportGraphDataWithMultipleSeries(
    xAxis: string[],
    yAxisSeries: number[][], // Array of yAxis datasets, one per series
    chartType: "line" | "bar",
    seriesNames: string[] // Array of names for each series
) {
    const defaultColors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6"]; // Default color palette
    const series = yAxisSeries.map((yAxis, index) =>
        generateSingleSeries(
            yAxis,
            chartType,
            defaultColors[index % defaultColors.length], // Cycle through default colors
            seriesNames[index] || `Series ${index + 1}` // Default name if not provided
        )
    );

    return {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: chartType === "bar" ? "shadow" : "line", // Shadow for bar, line for line chart
            },
        },
        xAxis: {
            type: "category",
            data: xAxis,
        },
        yAxis: {
            type: "value",
        },
        series,
        legend: {
            data: seriesNames, // Display series names in the legend
        },
    };
}

