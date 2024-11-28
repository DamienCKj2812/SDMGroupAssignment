import { Box, Button, Dialog, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import { companyUser } from "../../../../_common/data/users-list";
import { useRecoilState } from "recoil";
import { currentLoggedInUserState } from "../../../../_common/state";
import { useNavigate } from "react-router-dom";

const CompanyLogin = () => {
    const navigate = useNavigate();
    const [, setUser] = useRecoilState(currentLoggedInUserState);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const user = companyUser.find((u) => u.emailAddress === data.email);

        console.log(data)
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
        <Flex id="company-login" justify="center" align="center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction="column" gap="5" className="login-container">
                    <Heading as="h1" m="0">
                        Login for company
                    </Heading>

                    <Box>
                        <Text as="p" m="0" mb="2">
                            Email:
                        </Text>
                        <TextField.Root {...register("email")} />
                        {errors.email && (
                            <Text as="p" color="red" m="0" mt="2">
                                {errors.email.message as string} {/* Cast to string */}
                            </Text>
                        )}
                    </Box>

                    <Box>
                        <Text as="p" m="0" mb="2">
                            Password:
                        </Text>
                        <TextField.Root type="password" {...register("password")} />
                        {errors.password && (
                            <Text as="p" color="red" m="0" mt="2">
                                {errors.password.message as string} {/* Cast to string */}
                            </Text>
                        )}
                    </Box>

                    <Flex direction="column" gap="2" mt="3">
                        <Flex justify="end">
                            <Dialog.Root>
                                <Dialog.Trigger>
                                    <Text as="p" align="right" m="0" className="text-link">
                                        Forgot password?
                                    </Text>
                                </Dialog.Trigger>

                                <Dialog.Content maxWidth="450px">
                                    <Dialog.Title>Forgot Password Instructions</Dialog.Title>
                                    <Dialog.Description size="2" mb="4">
                                        <Flex direction="column" gap="4">
                                            <Text as="p">
                                                We've received a request to reset your password. To proceed with resetting your password, please click
                                                on the link below:
                                            </Text>
                                            <Text as="p" className="text-link">
                                                Reset Your Password
                                            </Text>
                                            <Text as="p">
                                                This link will direct you to a secure page where you can create a new password. If you did not request
                                                a password reset, please disregard this email.
                                            </Text>
                                            <Text as="p">
                                                For security reasons, the link will expire in 24 hours. If you need further assistance, feel free to
                                                contact our support team. Thank you!
                                            </Text>
                                        </Flex>
                                    </Dialog.Description>
                                </Dialog.Content>
                            </Dialog.Root>
                        </Flex>

                        <Button className="login-button" type="submit">
                            Login
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Flex>
    );
};

export default CompanyLogin;
