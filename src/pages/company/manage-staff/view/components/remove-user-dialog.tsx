import { Button, Dialog, Flex } from "@radix-ui/themes";
import React from "react";

const RemoveUserDialog = ({ children, user }: { children: React.ReactNode; user: string }) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Confirm Removal of {user}</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Are you certain you want to remove {user}? This action is permanent and cannot be reversed.
                </Dialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button color="ruby">Remove {user}</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default RemoveUserDialog;
