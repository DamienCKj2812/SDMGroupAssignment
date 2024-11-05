import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Dialog, Flex, Grid, Heading, Strong, Text, TextField, Tooltip } from "@radix-ui/themes";
import React, { useState } from "react";
import { applicantSetting } from "../../../../../_common/data/setting-list";
import { useForm } from "react-hook-form";
import ToastPopover from "../../../../../_common/components/toast-popover";

const ApplicantPersonalSummary = () => {
    const { register, handleSubmit, watch, reset } = useForm({
        defaultValues: applicantSetting,
    });
    const [openToast, setOpenToast] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const personalSummary = watch("personalSummary");

    const onSubmit = (data) => {
        console.log("Form data:", data);
        setOpenToast(true);
    };

    return (
        <Box id="applicant-personal-summary">
            <Heading as="h1" m="0">
                Personal summary
            </Heading>

            <Flex justify="between" className="input-container">
                <Text as="p" m="0">
                    {personalSummary || "Upload your personal summary"}
                </Text>

                <Tooltip content="Edit summary">
                    <Box className="edit-container" onClick={() => setOpenDialog(true)}>
                        <FontAwesomeIcon icon={faPen} />
                    </Box>
                </Tooltip>

                <Dialog.Root onOpenChange={setOpenDialog} open={openDialog}>
                    <Dialog.Content id="applicant-personal-summary-dialog">
                        <Dialog.Title as="h1" mb="5">
                            Edit personal summary
                        </Dialog.Title>
                        <Dialog.Description>
                            <></>
                        </Dialog.Description>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex direction="column" gap="5">
                                <Flex direction="column" gap="2">
                                    <Strong>Summary</Strong>
                                    <Text as="label">Highlight your unique experiences, ambitions and strengths.</Text>
                                    <textarea placeholder="Your personal summary here...." {...register("personalSummary")} />
                                </Flex>

                                <Text as="label">
                                    Stay safe. Don't include sensitive personal information such as identity documents, health, race, religion or
                                    financial data.
                                </Text>

                                <Flex gap="3">
                                    <Dialog.Close>
                                        <Button type="submit">Save</Button>
                                    </Dialog.Close>

                                    <Dialog.Close>
                                        <Button variant="soft" onClick={() => reset(applicantSetting)}>
                                            Cancel
                                        </Button>
                                    </Dialog.Close>
                                </Flex>
                            </Flex>
                        </form>
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>

            <ToastPopover openToast={openToast} setOpenToast={setOpenToast} status="success">
                <Text>Personal summaru updated</Text>
            </ToastPopover>
        </Box>
    );
};

export default ApplicantPersonalSummary;
