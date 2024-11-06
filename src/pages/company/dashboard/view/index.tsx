import React from "react";
import "./style.css";
import { Box, Flex, Grid, Heading, Table, Text } from "@radix-ui/themes";
import ReactECharts from "echarts-for-react";
import { companyDashboardData } from "../data/dashboard-data";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { userRoleState } from "../../../../_common/state";

const Dashboard = () => {
    const [userRole] = useRecoilState(userRoleState);
    return (
        <Flex id="dashboard" justify="center">
            <Flex direction="column" gap="6" width="1200px">
                {userRole == "manager" && (
                    <>
                        <Flex className="card" height="600px">
                            <ReactECharts
                                option={companyDashboardData.recruitmentPerformance}
                                notMerge={true}
                                lazyUpdate={true}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </Flex>
                        <Flex className="card" height="600px">
                            <ReactECharts
                                option={companyDashboardData.weeklyCollectedServiceFees}
                                notMerge={true}
                                lazyUpdate={true}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </Flex>
                    </>
                )}
                <Grid columns="2" gap="2">
                    <Flex className="card" height="400px">
                        <ReactECharts
                            option={companyDashboardData.newApplicantOptions}
                            notMerge={true}
                            lazyUpdate={true}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </Flex>
                    <Flex direction="column" gap="2">
                        <Flex className="card" justify="center" align="center" height="100%">
                            <Heading as="h1" m="0">
                                <Text style={{ color: "lime" }} size="8">
                                    46% <FontAwesomeIcon icon={faArrowUp} />{" "}
                                    <Text as="label">
                                        ({companyDashboardData.newApplicantOptions.series[0].data.reduce((acc, curr) => acc + curr, 0)})
                                    </Text>
                                </Text>{" "}
                                than last week
                            </Heading>
                        </Flex>
                        <Flex className="card" justify="center" height="100%" align="center">
                            <Table.Root>
                                <Table.Header>
                                    <Table.Row>
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Total"].map((h) => {
                                            return <Table.ColumnHeaderCell key={h}>{h}</Table.ColumnHeaderCell>;
                                        })}
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        {[820, 932, 901, 934, 1290, 1330, 1320, 7527].map((v) => {
                                            return <Table.Cell key={v}>{v}</Table.Cell>;
                                        })}
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>
                        </Flex>
                    </Flex>
                </Grid>

                <Grid columns="2" gap="2">
                    <Flex direction="column" gap="2">
                        <Flex className="card" justify="center" align="center" height="100%">
                            <Heading as="h1" m="0">
                                <Text style={{ color: "tomato" }} size="8">
                                    14% <FontAwesomeIcon icon={faArrowDown} />{" "}
                                    <Text as="label">
                                        ({companyDashboardData.newJobVacanciesOptions.series[0].data.reduce((acc, curr) => acc + curr, 0)})
                                    </Text>
                                </Text>{" "}
                                than last week
                            </Heading>
                        </Flex>
                        <Flex className="card" justify="center" height="100%" align="center">
                            <Table.Root>
                                <Table.Header>
                                    <Table.Row>
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Total"].map((h) => {
                                            return <Table.ColumnHeaderCell key={h}>{h}</Table.ColumnHeaderCell>;
                                        })}
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        {[300, 432, 901, 334, 190, 1230, 920, 4307].map((v) => {
                                            return <Table.Cell key={v}>{v}</Table.Cell>;
                                        })}
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>
                        </Flex>
                    </Flex>
                    <Flex className="card" height="400px">
                        <ReactECharts
                            option={companyDashboardData.newJobVacanciesOptions}
                            notMerge={true}
                            lazyUpdate={true}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </Flex>
                </Grid>

                <Flex className="card" height="400px">
                    <ReactECharts
                        option={companyDashboardData.top10IndustriesOptions}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: "100%", width: "100%" }}
                    />
                </Flex>

                <Flex className="card" height="400px">
                    <ReactECharts
                        option={companyDashboardData.top10CompaniesOptions}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: "100%", width: "100%" }}
                    />
                </Flex>

                <Flex className="card" height="400px">
                    <ReactECharts
                        option={companyDashboardData.top10SkillsOptions}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: "100%", width: "100%" }}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Dashboard;
