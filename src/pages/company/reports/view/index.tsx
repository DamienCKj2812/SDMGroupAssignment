import { Box, Button, Flex, Heading, Select, Table, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import "./style.css";
import moment from "moment/moment";
import getFirstSevenDaysOfWeek from "../../../../_common/functions/get-first-seven-days-of-week";
import getAllDaysOfMonth from "../../../../_common/functions/get-days-of-month";

const Reports = () => {
    const [filterType, setFilterType] = useState("Last 7 days");

    const tableHeader = filterType === "Last 7 days" ? [...getFirstSevenDaysOfWeek()] : [...getAllDaysOfMonth()];
    const tableContent =
        filterType === "Last 7 days"
            ? Array.from({ length: 7 }, () => Math.floor(Math.random() * (1500 - 800 + 1)) + 800)
            : Array.from({ length: 30 }, () => Math.floor(Math.random() * (1500 - 800 + 1)) + 800);

    const totalCount = tableContent.reduce((a, b) => a + b, 0);
    return (
        <Flex id="reports" justify="center">
            <Flex direction="column" gap="6" width="1200px">
                <Flex align="center" gap="2">
                    <Text>Filter by: </Text>
                    <Select.Root defaultValue="Last 7 days" onValueChange={setFilterType}>
                        <Select.Trigger />
                        <Select.Content>
                            {["Last 7 days", "Last Month"].map((s) => {
                                return (
                                    <Select.Item value={s} key={s}>
                                        {s}
                                    </Select.Item>
                                );
                            })}
                        </Select.Content>
                    </Select.Root>
                </Flex>

                <Flex className="card" direction="column" gap="4">
                    <Heading as="h1" m="0">
                        New application report in {filterType}
                    </Heading>

                    <Table.Root layout="auto">
                        <Table.Header>
                            <Table.Row>
                                {[...tableHeader, "Total"].map((h) => {
                                    return <Table.ColumnHeaderCell key={h}>{h}</Table.ColumnHeaderCell>;
                                })}
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                {[...tableContent, totalCount].map((v) => {
                                    return <Table.Cell key={v}>{v}</Table.Cell>;
                                })}
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Button ml="auto" className="export-csv">
                        Export as CSV
                    </Button>
                </Flex>

                <Text as="label" align="center">
                    All reports generated at {moment().format("MMMM Do YYYY, h:mm:ss a")}
                </Text>
            </Flex>
        </Flex>
    );
};

export default Reports;
