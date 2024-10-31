import React from "react";
import { Box, Button, Dialog, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import "../style.css";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState, userRoleState } from "../../../../../_common/state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { employerList } from "../../../../../_common/data/users-list";

const Employerlogin = () => {
    const navigate = useNavigate();
    const [, setUserRole] = useRecoilState(userRoleState);
    const [, setCurrentUser] = useRecoilState(currentLoggedInUserState);
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const user = employerList.find((u) => u.emailAddress === data.email);

        if (user) {
            if (data.password !== user.password) {
                setError("password", { type: "manual", message: "Password does not match." });
            } else {
                setCurrentUser(user);
                setUserRole("employer");
                navigate("../employer/dashboard");
            }
        } else {
            setError("email", { type: "manual", message: "User not found." });
        }
    };

    return (
        <Flex justify="center" align="center" id="employer-login" direction="column" flexGrow="1">
            <Box>
                <Text
                    as="p"
                    m="0"
                    align="right"
                    className="text-link"
                    onClick={() => {
                        setUserRole("applicant");
                    }}
                >
                    Are you looking for a job?
                </Text>

                <Flex direction="column" className="login-container">
                    <Heading as="h1" m="0" mb="3">
                        Sign in
                    </Heading>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Flex direction="column" gap="6">
                            <Box>
                                <Text as="p" m="0">
                                    Email address
                                </Text>
                                <TextField.Root placeholder="e.g. name@example.com" {...register("email", { required: "Email is required." })} />
                                {errors.email && (
                                    <Text as="p" m="0" className="error-message">
                                        {errors.email.message}
                                    </Text>
                                )}
                            </Box>

                            <Box>
                                <Flex justify="between">
                                    <Text as="p" m="0">
                                        Password
                                    </Text>

                                    <Dialog.Root>
                                        <Dialog.Trigger>
                                            <Text as="p" m="0" className="text-link">
                                                Forgot Password?
                                            </Text>
                                        </Dialog.Trigger>

                                        <Dialog.Content maxWidth="520px" id="forgot-password-dialog">
                                            <Dialog.Title as="h1">Forgot password</Dialog.Title>

                                            <Dialog.Description size="3" mb="4">
                                                Enter your email address below and we will send you a link to reset your password.
                                            </Dialog.Description>

                                            <Flex direction="column" gap="5">
                                                <Box>
                                                    <Text as="p" m="0">
                                                        Email address
                                                    </Text>
                                                    <TextField.Root />
                                                </Box>

                                                <Button>Next</Button>

                                                <Text as="p" m="0">
                                                    If you need additional help, please contact <Text className="text-link">customer service</Text>
                                                </Text>
                                            </Flex>
                                        </Dialog.Content>
                                    </Dialog.Root>
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

                            <Button mt="3" type="submit">
                                Sign in
                            </Button>
                            <Text as="p" m="0">
                                Don&apos;t have an account?{" "}
                                <Text className="text-link" onClick={() => navigate("/register")}>
                                    Register
                                </Text>
                            </Text>
                        </Flex>
                    </form>
                </Flex>
            </Box>
        </Flex>
    );
};

export default Employerlogin;
