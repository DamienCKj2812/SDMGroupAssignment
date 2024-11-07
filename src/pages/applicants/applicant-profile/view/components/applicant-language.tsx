import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dialog, Flex, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { applicantSetting } from "../../../../../_common/data/setting-list";
import { useForm, Controller } from "react-hook-form";
import { suggestedLanguagesData } from "../../data/suggested-data";
import ToastPopover from "../../../../../_common/components/toast-popover";

const ApplicantLanguage = () => {
    const { handleSubmit, control, watch, reset, getValues } = useForm({
        defaultValues: applicantSetting[0],
    });
    const [newLanguage, setNewLanguage] = useState("");
    const [openToast, setOpenToast] = useState(false);

    const languages = watch("languages");

    const onSubmit = (data) => {
        console.log("Form data:", data);
    };

    const handleManualSave = () => {
        const formData = getValues();
        console.log("Manually saving data:", formData);
        setOpenToast(true);
    };

    return (
        <Flex id="applicant-languages" direction="column" gap="3">
            <Heading as="h1" m="0">
                Languages
            </Heading>

            <Flex gap="2" wrap="wrap" maxWidth="700px" width="100%">
                {languages.map((s) => {
                    return (
                        <Text as="p" m="0" key={s} className="added-language-container">
                            {s}
                        </Text>
                    );
                })}
            </Flex>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button>Add language</Button>
                    </Dialog.Trigger>

                    <Dialog.Content id="applicant-languages-dialog">
                        <Dialog.Title as="h1">Edit languages</Dialog.Title>

                        <Dialog.Description mb="5">
                            <Text as="label">Help employers find you by showcasing all of your languages.</Text>
                        </Dialog.Description>

                        <Flex direction="column" gap="5">
                            <Controller
                                name="languages"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <>
                                            <Flex direction="column" gap="2">
                                                <Strong>Add new language</Strong>
                                                <Flex gap="3">
                                                    <TextField.Root onChange={(e) => setNewLanguage(e.target.value)} />
                                                    <Button
                                                        onClick={() => {
                                                            if (newLanguage) {
                                                                field.onChange([...field.value, newLanguage]);
                                                            }
                                                        }}
                                                    >
                                                        Add
                                                    </Button>
                                                </Flex>
                                                <Text as="label">Click add or press enter</Text>
                                            </Flex>

                                            <Flex direction="column" gap="2">
                                                <Strong>Suggested languages based on your career history</Strong>
                                                <Flex gap="4" wrap="wrap">
                                                    {suggestedLanguagesData
                                                        .filter((s) => !field.value.includes(s))
                                                        .slice(0, 6)
                                                        .map((s) => {
                                                            return (
                                                                <Flex
                                                                    key={s}
                                                                    align="center"
                                                                    gap="4"
                                                                    onClick={() => field.onChange([...field.value, s])}
                                                                    className="suggested-language-container"
                                                                >
                                                                    <Text as="p" m="0">
                                                                        {s}
                                                                    </Text>
                                                                    <FontAwesomeIcon icon={faPlus} />
                                                                </Flex>
                                                            );
                                                        })}
                                                </Flex>
                                            </Flex>

                                            <Flex direction="column" gap="2">
                                                <Strong>Added languages</Strong>
                                                <Flex gap="2" wrap="wrap">
                                                    {field.value.map((s) => {
                                                        return (
                                                            <Flex
                                                                key={s}
                                                                align="center"
                                                                gap="4"
                                                                onClick={() => field.onChange(field.value.filter((f) => f != s))}
                                                                className="added-language-container"
                                                            >
                                                                <Text as="p" m="0">
                                                                    {s}
                                                                </Text>
                                                                <FontAwesomeIcon icon={faXmark} />
                                                            </Flex>
                                                        );
                                                    })}
                                                </Flex>
                                            </Flex>
                                        </>
                                    );
                                }}
                            />

                            <Text as="label">
                                Stay safe. Don't include sensitive personal information such as identity documents, health, race, religion or
                                financial data.
                            </Text>

                            <Flex gap="3">
                                <Dialog.Close>
                                    <Button type="submit" onClick={() => handleManualSave()}>
                                        Save
                                    </Button>
                                </Dialog.Close>

                                <Button
                                    variant="soft"
                                    onClick={() => {
                                        reset(applicantSetting[0]);
                                    }}
                                >
                                    Cancel
                                </Button>
                            </Flex>
                        </Flex>
                    </Dialog.Content>
                </Dialog.Root>
            </form>

            <ToastPopover openToast={openToast} setOpenToast={setOpenToast} status="success">
                <Text>Languages updated</Text>
            </ToastPopover>
        </Flex>
    );
};

export default ApplicantLanguage;
