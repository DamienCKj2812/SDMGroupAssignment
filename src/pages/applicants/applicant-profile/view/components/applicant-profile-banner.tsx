import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Box, Button, Dialog, Flex, Grid, Heading, Text, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { applicantSetting } from "../../../../../_common/data/setting-list";
import ToastPopover from "../../../../../_common/components/toast-popover";

const ApplicantProfileBanner = ({ currentUser, settings }) => {
    const { register, handleSubmit, watch, reset } = useForm({
        defaultValues: applicantSetting,
    });
    const [openToast, setOpenToast] = useState(false);

    const homeLocation = watch("personalDetails.homeLocation");
    const firstName = watch("personalDetails.firstName");
    const lastName = watch("personalDetails.lastName");
    const profileImage = watch("personalDetails.profileImage");
    const phoneNumber = watch("personalDetails.phoneNumber");

    const onSubmit = (data) => {
        console.log("Form data:", data);
        setOpenToast(true);
    };

    return (
        <>
            <Flex
                id="applicant-profile-banner"
                style={{
                    backgroundImage: `url(${
                        settings?.backgroundImage || "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png"
                    })`,
                }}
                gap="4"
                align="center"
                justify="between"
            >
                <Flex direction="column" gap="5">
                    <Heading as="h1" m="0">
                        {firstName} {lastName}
                    </Heading>

                    <Box ml="2">
                        <Flex align="center" gap="2">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <Text> {phoneNumber}</Text>
                        </Flex>
                        <Flex width="90%" gap="3">
                            <FontAwesomeIcon icon={faLocationDot} style={{ paddingTop: "5px" }} />
                            <Text wrap="wrap">{homeLocation}</Text>
                        </Flex>
                        <Flex align="center" gap="2">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <Text>{currentUser.emailAddress}</Text>
                        </Flex>
                    </Box>

                    <Flex gap="3">
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>Edit</Button>
                            </Dialog.Trigger>

                            <Dialog.Content id="edit-profile-setting-dialog">
                                <Dialog.Title as="h1" mb="5">
                                    Edit personal details
                                </Dialog.Title>
                                <Dialog.Description>
                                    <></>
                                </Dialog.Description>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Flex direction="column" gap="5">
                                        <Grid columns="2" gap="6">
                                            <Flex gap="2" direction="column">
                                                <Text>First name</Text>
                                                <TextField.Root {...register("personalDetails.firstName")} />
                                            </Flex>
                                            <Flex gap="2" direction="column">
                                                <Text>Last name</Text>
                                                <TextField.Root {...register("personalDetails.lastName")} />
                                            </Flex>
                                        </Grid>
                                        <Flex gap="2" direction="column">
                                            <Text>Home Location</Text>
                                            <TextField.Root placeholder="Enter district or town" {...register("personalDetails.homeLocation")} />
                                        </Flex>

                                        <Flex gap="2" direction="column">
                                            <Text>Phone number (recommended)</Text>
                                            <TextField.Root {...register("personalDetails.phoneNumber")} />
                                        </Flex>

                                        <Flex gap="2" direction="column">
                                            <Text>Email address</Text>
                                            <Flex>
                                                <Text>{currentUser.emailAddress}</Text>
                                            </Flex>
                                        </Flex>

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

                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>Share</Button>
                            </Dialog.Trigger>

                            <Dialog.Content maxWidth="400px">
                                <Dialog.Title>Create a shareable link</Dialog.Title>
                                <Dialog.Description mb="4">
                                    <Text as="p" m="0">
                                        Once you create this link, others can view and reshare your shared profile whenever you have this feature
                                        switched on.
                                    </Text>
                                </Dialog.Description>

                                <Text as="p" m="0">
                                    Switch off at any time by managing your visibility in Settings. Learn more
                                </Text>

                                <Flex mt="6">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray" style={{ width: "100%" }}>
                                            Share
                                        </Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                </Flex>

                <Avatar src={profileImage || ""} fallback={currentUser.username[0]} style={{ height: "200px", width: "200px" }} radius="medium" />
            </Flex>

            <ToastPopover openToast={openToast} setOpenToast={setOpenToast} status="success">
                <Text>Personal details update successfully</Text>
            </ToastPopover>
        </>
    );
};

export default ApplicantProfileBanner;
