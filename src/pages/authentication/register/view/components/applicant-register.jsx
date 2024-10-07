import React, { useState } from "react";
import { Box, Button, Checkbox, Flex, Heading, Separator, Text, TextField } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import "../style.css";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState, userRoleState } from "../../../../../_common/state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleIcon from "../../../../../_common/assets/google-icon";
import FacebookIcon from "../../../../../_common/assets/facebook-icon";
import AppleIcon from "../../../../../_common/assets/apple-icon";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { applicantList } from "../../../../../_common/data/users-list";

const ApplicantRegister = () => {
    const navigate = useNavigate();
    const [, setUserRole] = useRecoilState(userRoleState);
    const [, setUser] = useRecoilState(currentLoggedInUserState);
    const [isAppleHover, setIsAppleHover] = useState(false);
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const user = applicantList.find((u) => u.emailAddress === data.email);
        if (user) {
            if (user.password === data.password) {
                setUser(user);
                navigate("../employer/dashboard");
            } else {
                setError("password", {
                    type: "manual",
                    message: "Password does not match.",
                });
            }
        } else {
            setError("email", {
                type: "manual",
                message: "User not found.",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex justify="center" align="center" id="applicant-register" direction="column" flexGrow="1">
                <Box>
                    <Text
                        as="p"
                        m="0"
                        align="right"
                        className="text-link"
                        onClick={() => {
                            setUserRole("employer");
                        }}
                    >
                        Are you an employer?
                    </Text>
                    <Flex direction="column" className="register-container">
                        <Heading as="h1" m="0" mb="3">
                            Register
                        </Heading>

                        <Flex direction="column" gap="6">
                            <Box>
                                <Text as="p" m="0">
                                    Email address
                                </Text>
                                <Box>
                                    <TextField.Root placeholder="e.g. name@example.com" {...register("email", { required: "Email is required." })} />

                                    {errors.email && (
                                        <Text as="p" m="0" className="error-message">
                                            {errors.email.message}
                                        </Text>
                                    )}
                                </Box>
                            </Box>

                            <Box>
                                <Flex justify="between">
                                    <Text as="p" m="0">
                                        Password
                                    </Text>
                                </Flex>
                                <TextField.Root type="password" {...register("password", { required: "Password is required." })}>
                                    <TextField.Slot side="right">
                                        <FontAwesomeIcon icon={faEye} />
                                    </TextField.Slot>
                                </TextField.Root>

                                {errors.password && (
                                    <Text as="p" m="0" className="error-message">
                                        {errors.password.message}
                                    </Text>
                                )}
                            </Box>

                            <Flex gap="2">
                                <Checkbox />
                                <Text as="label" mt="2">
                                    By registering, I agree to the Privacy Policy and consent to the collection, storage and use of my personal data
                                    as described in that policy. I agree to receive marketing messages from Jobstreet and affiliates and understand
                                    that I can opt out at any time via the unsubscribe links or as detailed in the Privacy Policy.
                                </Text>
                            </Flex>

                            <Flex direction="column" gap="4">
                                <Button mt="3" type="submit">
                                    Register
                                </Button>

                                <Flex align="center" justify="between" gap="2">
                                    <Separator style={{ width: "100%", marginTop: "3px" }} />
                                    <Text align="center" as="p" m="0">
                                        or
                                    </Text>
                                    <Separator style={{ width: "100%", marginTop: "3px" }} />
                                </Flex>

                                <Button className="register-with-button">
                                    <Box position="absolute" left="8px" bottom="3px">
                                        <GoogleIcon />
                                    </Box>
                                    Continue with Google
                                </Button>
                                <Button className="register-with-button">
                                    <Box position="absolute" left="2px" top="2px">
                                        <FacebookIcon />
                                    </Box>
                                    Continue with Facebook
                                </Button>
                                <Button
                                    className="register-with-button"
                                    onMouseEnter={() => setIsAppleHover(true)}
                                    onMouseLeave={() => setIsAppleHover(false)}
                                >
                                    <Box position="absolute" left="8px" bottom="3px">
                                        <AppleIcon color={isAppleHover ? "#ffffff" : ""} />
                                    </Box>
                                    Continue with Apple
                                </Button>
                            </Flex>

                            <Text as="p" m="0">
                                Already have an account{" "}
                                <Text className="text-link" onClick={() => navigate("/login")}>
                                    Sign in
                                </Text>
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </form>
    );
};

export default ApplicantRegister;
