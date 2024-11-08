import { Button, Dialog, Flex } from "@radix-ui/themes";
import React from "react";

const RemoveContractDialog = ({ children }: { children: React.ReactNode }) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>{children}</Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Confirm Contract Removal</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Are you sure you want to remove this contract? This action cannot be undone.
                </Dialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button color="red">Remove</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default RemoveContractDialog;
