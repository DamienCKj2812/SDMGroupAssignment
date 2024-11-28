import { Box, Flex, Button } from "@radix-ui/themes";
import "../style.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const ApplicanntProfile = () => {
    const navigate = useNavigate();
    return (
        <Box id="profile-view">
            <Flex>
                <Box className="panel">
                    <Box className="inside-panel">
                        <Flex justify="space-between">
                            {" "}
                            {/* Use space-between to separate items */}
                            <Flex direction="column" className="words">
                                <Box className="headerName">
                                    <h1>Be seen with a Applicant Finder profile</h1>
                                </Box>
                                <Box className="text1">
                                    An Applicant Finder provides you with a personalised search experience and more relevant job recommendations - so
                                    you can find your job faster.
                                </Box>

                                <Button mt="7" display="inline-flex">
                                    Create Profile
                                </Button>
                            </Flex>
                            <Box className="imagess">
                                <Box className="image-text">Share profile</Box>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>

            <Box className="panel2">
                <h1 className="header1">The career profile to land your next great job</h1>

                <Flex className="words-container">
                    <Box>
                        <Box className="img-size">
                            <img src="src/_common/assets/target.png" className="image-icon"></img>
                        </Box>

                        <h2>Job reccomandations made just for you</h2>
                        <p>Get job recommendations that match your unique skills and experience and fit your industry and salary expectations.</p>
                    </Box>

                    <Box>
                        <Box className="img-size">
                            <img src="src/_common/assets/magnet.png" className="image-icon"></img>
                        </Box>
                        <h2>Let great jobs come to you</h2>
                        <p>
                            Recruiters and employers can view your profile and contact you to discuss new opportunities – even when you’re not
                            looking.
                        </p>
                    </Box>
                </Flex>
                <hr className="line"></hr>
                <h1 className="header1">Stand out to future employers</h1>
                <Flex className="words-container">
                    <Box>
                        <Box className="img-size">
                            <img src="src/_common/assets/manageprofile.png" className="image-icon"></img>
                        </Box>
                        <h2>Manage your profile</h2>
                        <p>Take control of how your profile appears to potential employers via three profile visibility settings.</p>
                        <a href="">
                            <p>Learn about profile visibility</p>
                        </a>
                    </Box>
                    <Box>
                        <Box className="img-size">
                            <img src="src/_common/assets/share-post.png" className="image-icon"></img>
                        </Box>
                        <h2>Share your Jobstreet Profile</h2>
                        <p>Unlock more job opportunities by sharing a summary view of your profile with employers and people in your network.</p>
                        <a href="">
                            <p>Learn about profile visibility</p>
                        </a>
                    </Box>
                </Flex>

                <Box className="hiring-container">
                    <Flex>
                        <h1>Hiring? Your job ad seen by all the right people </h1>
                        <Button mt="5" ml="6" onClick={() => navigate("/home")}>
                            Employer site
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default ApplicanntProfile;