import { Box, Button, Flex, Grid, Heading, Strong, Text, TextField, Select} from "@radix-ui/themes";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { companyList } from "../../../../../_common/data/company-list";
import { useNavigate } from "react-router-dom";
import { jobList } from "../../../../../_common/data/job-list";
import AutoScroll from "embla-carousel-auto-scroll";
import { quickSearchClassificationData } from "../../data/quick-search-data";
import { quickSearchCitiesData } from "../../data/major";
import { quickSearchOtherData } from "../../data/other";

const ApplicantHomePage = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll({ playOnInit: true, stopOnInteraction: false })]);
    const navigate = useNavigate();

    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    return (
        <Flex id="applicant-home-page" direction="column" gap="9">
            <Box className="search-panel">
                <Flex justify="center" align="center" gap="">
                    <h2>Enter keywords to find job</h2>
                </Flex>
                <Flex justify="center" align="center" gap="5" mt="3">
                    <TextField.Root className="custom-textfield" placeholder="Enter Keyword" />
                    <Select.Root defaultValue="apple">
	<Select.Trigger/>
	<Select.Content>
		<Select.Group>
			<Select.Label>Fruits</Select.Label>
			<Select.Item value="orange">Orange</Select.Item>
			<Select.Item value="apple">Apple</Select.Item>
			<Select.Item value="grape" disabled>
				Grape
			</Select.Item>
		</Select.Group>
	
	</Select.Content>
</Select.Root>
                    <TextField.Root className="custom-textfield" placeholder="Enter City" />
                    <Button>Seek</Button>
                </Flex>
            </Box>
            <Box className="signin">
                <Flex>
                    <Button mt="5" onClick={() => navigate("/login")}>
                        Sign in
                    </Button>
                    <Button mt="5">Register</Button>
                </Flex>
                <Text>Sign in to manage your Profile, save searches and view your recommended jobs.</Text>
            </Box>

            <Flex direction="column" gap="6" className="find-your-next-employer">
                <Box>
                    <Heading as="h1" m="0">
                        Find your next employer
                    </Heading>
                    <Text as="label">
                        Explore company profiles to find the right workplace for you. Learn about jobs, reviews, company culture, perks and benefits.
                    </Text>
                </Box>

                <Box className="embla" ref={emblaRef}>
                    <Box className="embla__container">
                        {chunkArray(companyList, 4).map((company, i) => {
                            return (
                                <Grid
                                    className="embla__slide"
                                    key={`job-${i}`}
                                    gap="3"
                                    justify="between"
                                    columns="4"
                                    rows="repeat(1, auto)"
                                    width="auto"
                                >
                                    {company.map((c) => {
                                        return (
                                            <Flex
                                                key={c.companyId}
                                                className="company-container"
                                                direction="column"
                                                onClick={() => navigate("/login")}
                                            >
                                                <img src={c.img.icon} alt={c.name} />
                                                <Text as="p" m="0" mt="3">
                                                    {c.name}
                                                </Text>

                                                <Text as="label" mt="auto">
                                                    {jobList.filter((j) => j.companyId == c.companyId).length || 0} Jobs
                                                </Text>
                                            </Flex>
                                        );
                                    })}
                                </Grid>
                            );
                        })}
                    </Box>
                </Box>

                <Button onClick={() => navigate("/login")}>Log in to explore more</Button>
            </Flex>

            <Flex className="two-cards" gap="5">
                <Box className="card">
                    <Box className="img-size">
                        <img src=""></img>
                    </Box>

                    <h2>New job opportunities</h2>
                    <Button>Find out more</Button>
                </Box>

                <Box className="card2">
                    <Box className="img-size">
                        <img src=""></img>
                    </Box>
                    <h2>Great job here</h2>
                    <Button>Best you find</Button>
                </Box>
            </Flex>

            <Box>
                <Flex direction="column">
                    <Flex className="quick-search" gap="5">
                        <Text as="p" m="0" wrap="nowrap">
                            Classification
                        </Text>
                        <Flex gap="4" wrap="wrap" className="data">
                            {quickSearchClassificationData.map((category, index) => {
                                return (
                                    <Text key={category} style={{ textDecoration: "underline" }}>
                                        {category} {quickSearchClassificationData.length - 1 == index ? "" : ""}
                                    </Text>
                                );
                            })}
                        </Flex>
                    </Flex>
                    <Flex className="quick-search" gap="7">
                    <Text as="p" m="0" wrap="nowrap">
                            Most Cities
                        </Text>
                        <Flex gap="4" wrap="wrap" className="data">
                            {quickSearchCitiesData.map((category, index) => {
                                return (
                                    <Text key={category} style={{ textDecoration: "underline" }}>
                                        {category} {quickSearchCitiesData.length - 1 == index ? "" : ""}
                                    </Text>
                                );
                            })}
                        </Flex>
                    </Flex>
                    <Flex className="quick-search" gap="9">
                    <Text as="p" m="0" wrap="nowrap">
                           Other
                        </Text>
                        <Flex gap="4" wrap="wrap" className="data">
                            {quickSearchOtherData.map((category, index) => {
                                return (
                                    <Text key={category} style={{ textDecoration: "underline" }}>
                                        {category} {quickSearchOtherData.length - 1 == index ? "" : ""}
                                    </Text>
                                );
                            })}
                        </Flex>
                    </Flex>
                </Flex>
            </Box>

            <Grid gap="4" justify="between" columns="4">
                <Flex direction="column" gap="3">
                    <Strong>Job seekers</Strong>
                    {[
                        "Job search",
                        "Profile",
                        "Recommended jobs",
                        "Saved searches",
                        "Saved jobs",
                        "Job applications",
                        "Career advice",
                        "Explore careers",
                        "Explore salaries",
                        "Explore companies",
                    ].map((t) => {
                        return <Text key={t}>{t}</Text>;
                    })}
                </Flex>
                <Flex direction="column" gap="3">
                    <Strong>Employers</Strong>
                    {[
                        "Register for free",
                        "Post a job ad",
                        "Products & prices",
                        "Customer service",
                        "Hiring advice",
                        "Market insights",
                        "Recruitment software partners",
                    ].map((t) => {
                        return <Text key={t}>{t}</Text>;
                    })}
                </Flex>
                <Flex direction="column" gap="3">
                    <Strong>About us</Strong>
                    {["About us", "Newsroom", "Investors", "Careers", "Sidekicker", "GO1", "FutureLearn", "JobAdder"].map((t) => {
                        return <Text key={t}>{t}</Text>;
                    })}
                </Flex>
                <Flex direction="column" gap="3">
                    <Strong>Contact</Strong>
                    {["Help centre", "Contact us", "Product & tech blog", "Facebook", "Instagram", "Twitter", "YouTube"].map((t) => {
                        return <Text key={t}>{t}</Text>;
                    })}
                </Flex>
            </Grid>
        </Flex>
    );
};

export default ApplicantHomePage;
