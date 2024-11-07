import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Dialog, Flex, Heading, Select, Strong, Text, TextField, Tooltip } from "@radix-ui/themes";
import React, { useState } from "react";
import { applicantSetting } from "../../../../../_common/data/setting-list";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yearList } from "../../../../../_common/data/date-data";
import ToastPopover from "../../../../../_common/components/toast-popover";

const ApplicantEducation = () => {
    const { register, handleSubmit, getValues, control, watch, reset } = useForm({
        defaultValues: applicantSetting[0],
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "education",
    });
    const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);
    const [openToast, setOpenToast] = useState(false);

    const educations = watch("education");

    const handleManualSave = () => {
        const formData = getValues();
        console.log("Manually saving data:", formData);
        setOpenToast(true);
        setOpenDialogIndex(null);
    };

    const onSubmit = (data) => {
        console.log("Form data:", data);
    };

    return (
        <Box id="applicant-education">
            <Heading as="h1" m="0">
                Education
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => {
                    const education = educations[index] || {};

                    return (
                        <Flex justify="between" className="input-container" key={field.id}>
                            {!education.courseOrQualification && !education.institution && !education.finished && !education.courseHighlights ? (
                                <Text as="p" m="0" mt="2">
                                    Upload Education
                                </Text>
                            ) : (
                                <Flex direction="column" gap="1" className="added-contents">
                                    {education.courseOrQualification && (
                                        <Heading as="h1" m="0">
                                            {education.courseOrQualification}
                                        </Heading>
                                    )}
                                    {education.institution && (
                                        <Text as="p" m="0">
                                            {education.institution}
                                        </Text>
                                    )}
                                    {education.finished && (
                                        <Text as="label" m="0">
                                            {education.finished}
                                        </Text>
                                    )}
                                    {education.courseHighlights && (
                                        <Text as="p" m="0">
                                            {education.courseHighlights}
                                        </Text>
                                    )}
                                </Flex>
                            )}

                            <Tooltip content="Edit career history">
                                <Box className="edit-container" onClick={() => setOpenDialogIndex(index)}>
                                    <FontAwesomeIcon icon={faPen} />
                                </Box>
                            </Tooltip>

                            <Dialog.Root onOpenChange={(open) => setOpenDialogIndex(open ? index : null)} open={openDialogIndex === index}>
                                <Dialog.Content id="applicant-education-dialog">
                                    <Dialog.Title as="h1" mb="5">
                                        Edit education
                                    </Dialog.Title>

                                    <Flex direction="column" gap="5">
                                        <Flex direction="column" gap="2">
                                            <Strong>Course or qualification</Strong>
                                            <TextField.Root
                                                placeholder="Course or qualification"
                                                {...register(`education.${index}.courseOrQualification`)}
                                            />
                                        </Flex>

                                        <Flex direction="column" gap="2">
                                            <Strong>Institution</Strong>
                                            <TextField.Root placeholder="Institution" {...register(`education.${index}.institution`)} />
                                        </Flex>

                                        <Flex direction="column" gap="2">
                                            <Strong>Finished</Strong>
                                            <Flex gap="2" align="center">
                                                <Controller
                                                    control={control}
                                                    name={`education.${index}.finished`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <Select.Root defaultValue={value} onValueChange={onChange}>
                                                            <Select.Trigger value={value} />
                                                            <Select.Content>
                                                                {yearList.map((y) => (
                                                                    <Select.Item key={y} value={y}>
                                                                        {y}
                                                                    </Select.Item>
                                                                ))}
                                                            </Select.Content>
                                                        </Select.Root>
                                                    )}
                                                />
                                            </Flex>
                                        </Flex>

                                        <Flex direction="column">
                                            <Strong>Course highlights</Strong>
                                            <Text as="label" mb="3">
                                                Add activities, projects, awards or achievements during your study.
                                            </Text>
                                            <textarea
                                                placeholder="Describe your education here"
                                                {...register(`education.${index}.courseHighlights`)}
                                            />
                                        </Flex>

                                        <Text as="label">
                                            Stay safe. Don't include sensitive personal information such as identity documents, health, race, religion
                                            or financial data.
                                        </Text>

                                        <Flex gap="3">
                                            <Button type="submit" onClick={() => handleManualSave()}>
                                                Save
                                            </Button>

                                            <Button
                                                variant="soft"
                                                onClick={() => {
                                                    reset(applicantSetting[0]), setOpenDialogIndex(null);
                                                }}
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                ml="auto"
                                                color="tomato"
                                                onClick={() => {
                                                    remove(index);
                                                    setOpenDialogIndex(null);
                                                }}
                                            >
                                                Remove Education
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </Dialog.Content>
                            </Dialog.Root>
                        </Flex>
                    );
                })}

                <Button
                    mt="4"
                    onClick={() =>
                        append({
                            courseOrQualification: "",
                            institution: "",
                            finished: "",
                            courseHighlights: "",
                        })
                    }
                >
                    Add New Education
                </Button>
            </form>

            <ToastPopover openToast={openToast} setOpenToast={setOpenToast} status="success">
                <Text>Education updated</Text>
            </ToastPopover>
        </Box>
    );
};

export default ApplicantEducation;
