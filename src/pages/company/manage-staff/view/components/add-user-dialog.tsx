import { Box, Button, Dialog, Flex, Select, Text, TextField } from "@radix-ui/themes";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface AddUserFormValues {
    username: string;
    email: string;
    password: string;
    role: "manager" | "staff";
}

const AddUserDialog = ({ children }: { children: React.ReactNode }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<AddUserFormValues>();

    const onSubmit = (data: AddUserFormValues) => {
        console.log("User Data:", data);
        // Handle form submission logic, e.g., API call to add user
        reset(); // Reset the form after submission
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Create New User</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Fill out the form below to create a new user.
                </Dialog.Description>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex direction="column" gap="3">
                        <Box>
                            <Text as="label" mb="2">
                                Username
                            </Text>
                            <TextField.Root {...register("username", { required: "Username is required" })} />
                        </Box>

                        <Box>
                            <Text as="label" mb="2">
                                Email
                            </Text>
                            <TextField.Root
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                        </Box>

                        <Box>
                            <Text as="label" mb="2">
                                Password
                            </Text>
                            <TextField.Root
                                type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                        </Box>

                        <Box>
                            <Text as="label" mb="2">
                                Role
                            </Text>
                            <Box width="100%">
                                <Controller
                                    name="role"
                                    control={control}
                                    rules={{ required: "Role is required" }}
                                    render={({ field }) => (
                                        <Select.Root defaultValue="staff" {...register("role", { required: "Role is required" })}>
                                            <Select.Trigger style={{ width: "100%" }} />
                                            <Select.Content>
                                                <Select.Group>
                                                    <Select.Item value="staff">Staff</Select.Item>
                                                    <Select.Item value="manager" disabled>
                                                        Manager
                                                    </Select.Item>
                                                </Select.Group>
                                            </Select.Content>
                                        </Select.Root>
                                    )}
                                />
                            </Box>
                        </Box>

                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button type="button" variant="soft" color="gray">
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Button type="submit">Create User</Button>
                        </Flex>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default AddUserDialog;
