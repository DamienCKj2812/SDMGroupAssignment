import React from "react";
import { Box, Button, Checkbox, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import "../style.css";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState, userRoleState } from "../../../../../_common/state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { employerList } from "../../../../../_common/data/users-list";

const EmployerRegister = () => {
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
        <Flex justify="center" align="center" id="employer-register" direction="column" flexGrow="1">
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

                <Flex direction="column" className="register-container">
                    <Heading as="h1" m="0" mb="3">
                        Register as an employer
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
                                    By registering, you agree to the Privacy Policy and consent to receive marketing messages from us. You can opt out
                                    at any time via the unsubscribe links or as detailed in the Privacy Policy.
                                </Text>
                            </Flex>

                            <Button mt="3" type="submit">
                                Register employer account
                            </Button>
                            <Text as="p" m="0">
                                Already have an account?{" "}
                                <Text className="text-link" onClick={() => navigate("/login")}>
                                    Sign in
                                </Text>
                            </Text>
                        </Flex>
                    </form>
                </Flex>
            </Box>
        </Flex>
    );
};

export default EmployerRegister;
