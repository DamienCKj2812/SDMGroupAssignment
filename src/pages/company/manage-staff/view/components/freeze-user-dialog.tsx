import { Button, Dialog, Flex } from "@radix-ui/themes";
import React from "react";

const FreezeUserDialog = ({ children, user }: { children: React.ReactNode; user: string }) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Confirm Freeze for {user}</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Are you sure you want to freeze {user}'s account? This action will restrict their access but can be undone later.
                </Dialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button>Freeze {user}</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default FreezeUserDialog;
