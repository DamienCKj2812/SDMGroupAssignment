import React from "react";
import { Box, Text, TextField, Button, Flex } from "@radix-ui/themes";
import "../style.css"

const EmplolyerHomePage = () => {
    return (
        <Box id="employer-home-page">
            <Box className="panel">
                <Box className="text1">Finding the right talent just go better with Applicant Finder</Box>
                <Box>
                    Get better talent matches powered by Applicant Finder{" "}
                    <strong>
                        <a href="">Find out whats new</a>
                    </strong>
                </Box>
            </Box>

            <Flex className="panel2">
                <Box className="insidepanel2">
                    <h1>Hire the right people for your business</h1>

                    <p className="job-ads">
                        <strong>Free job</strong> ads for selected rows
                    </p>
                    <Text>
                        <strong>Enter your email</strong>
                    </Text>
                    <Box>
                        <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <TextField.Root mt="2" className="custom-textfield" placeholder="e.g. name@example.com" />
                            <Button mt="2">Register</Button>
                        </Box>
                    </Box>
                    <Text>
                        <p>
                            Need help? Reach out to us on <a href="">WhatsApp</a>
                        </p>
                        <p>
                            Or visit our <a href="">Help Centre</a>
                        </p>
                    </Text>
                </Box>
            </Flex>

            <Box className="panel3">
                <h1 className="header1">We make it quicker and easier to find the right people</h1>

                <Flex className="words-container">
                    <Box>
                        <Box className="img-size">
                            <img src="src/_common/assets/quality.png" className="image-icon"></img>
                        </Box>

                        <h2>1st choice for Malaysian job seekers</h2>
                        <p>Meet job seekers where they prefer to search for jobs</p>
                    </Box>

                    <Box>
                        <Box className="img-size">
                            <img src="src/_common/assets/followers.png" className="image-icon"></img>
                        </Box>
                        <h2>Over 5 million candidate profiles</h2>
                        <p>Reach our large and diverse pool of Malaysian talent for your business</p>
                    </Box>

                    <Box>
                        <Box className="img-size">
                            <img src="src/_common/assets/approved.png" className="image-icon"></img>
                        </Box>
                        <h2>#1 job placements in Malaysia</h2>
                        <p>Highest success rate in matching employers to the right talent</p>
                    </Box>
                </Flex>

                <Button className="middle-button">Create account</Button>

                <hr className="line"></hr>

                <h1 className="header1">Start hiring in 3 simple steps</h1>

                <Flex className="words-container2">
                    <Box className="wrap">
                        <h1 className="number">1</h1>
                        <h2>1st choice for Malaysian job seekers</h2>
                        <p>Meet job seekers where they prefer to search for jobs</p>
                    </Box>

                    <Box className="wrap">
                        <h1 className="number">2</h1>
                        <h2>Over 5 million candidate profiles</h2>
                        <p>Reach our large and diverse pool of Malaysian talent for your business</p>
                    </Box>

                    <Box className="wrap">
                    <h1 className="number">3</h1>
                        <h2>#1 job placements in Malaysia</h2>
                        <p>Highest success rate in matching employers to the right talent</p>
                    </Box>
                </Flex>

                <Button className="middle-button">Create account</Button>

                <hr className="line"></hr>

                <Flex className="two-cards" gap="2">
                <Box className="card">
                    <Box className="img-size">
                        <img src=""></img>
                    </Box>
                    <Flex direction="column">
                    <h2>Boost your hiring with instant candidate recommendations</h2>
                    <Text>Get access to over 4 million searchable profiles when you post a job ad, and we’ll match you with relevant candidates.</Text>
                    <Button mt="3">Find out about talent search</Button>
                    </Flex>
                </Box>

                <Box className="card2">
                    <Box className="img-size">
                        <img src=""></img>
                    </Box>
                    
                </Box>
            </Flex>

            <hr className="line"></hr>

            </Box>
        </Box>
    );
};

export default EmplolyerHomePage;
