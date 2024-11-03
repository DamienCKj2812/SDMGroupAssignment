import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Dialog, Flex, Heading, ScrollArea, Select, Strong, Text, TextField, Tooltip } from "@radix-ui/themes";
import React, { useState } from "react";
import { applicantSetting } from "../../../../../_common/data/setting-list";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { monthList, yearList } from "../../../../../_common/data/date-data";

const ApplicantCareerHistory = () => {
    const { register, handleSubmit, control, watch, reset } = useForm({
        defaultValues: applicantSetting,
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "role",
    });
    const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

    const roles = watch("role");

    const onSubmit = (data) => {
        console.log("Form data:", data);
    };

    return (
        <Box id="applicant-career-history">
            <Heading as="h1" m="0">
                Career history
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => {
                    const role = roles[index] || {};

                    return (
                        <Flex justify="between" className="input-container" key={field.id}>
                            {!role.companyName &&
                            !role.jobTitle &&
                            !role.started.month &&
                            !role.started.year &&
                            !role.ended.month &&
                            !role.ended.year &&
                            !role.description ? (
                                <Text as="p" m="0" mt="2">
                                    Upload Career History
                                </Text>
                            ) : (
                                <Flex direction="column" gap="1" className="added-contents">
                                    {role.jobTitle && (
                                        <Heading as="h1" m="0">
                                            {role.jobTitle}
                                        </Heading>
                                    )}
                                    {role.companyName && (
                                        <Text as="p" m="0">
                                            {role.companyName}
                                        </Text>
                                    )}
                                    {role.started && role.ended && (
                                        <Text as="label" m="0">
                                            {role.started.month} {role.started.year} - {role.ended.month} {role.ended.year}
                                        </Text>
                                    )}
                                    {role.description && (
                                        <Text as="p" m="0">
                                            {role.description}
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
                                <Dialog.Content id="applicant-career-history-dialog">
                                    <Dialog.Title as="h1" mb="5">
                                        Edit role
                                    </Dialog.Title>

                                    <Flex direction="column" gap="5">
                                        <Flex direction="column" gap="2">
                                            <Strong>Job Title</Strong>
                                            <TextField.Root placeholder="Job Title" {...register(`role.${index}.jobTitle`)} />
                                        </Flex>

                                        <Flex direction="column" gap="2">
                                            <Strong>Company Name</Strong>
                                            <TextField.Root placeholder="Company Name" {...register(`role.${index}.companyName`)} />
                                        </Flex>

                                        <Flex direction="column" gap="2">
                                            <Strong>Started</Strong>
                                            <Flex gap="2">
                                                <Controller
                                                    control={control}
                                                    name={`role.${index}.started.month`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <Select.Root defaultValue={value} onValueChange={onChange}>
                                                            <Select.Trigger value={value} />
                                                            <Select.Content>
                                                                {monthList.map((m) => (
                                                                    <Select.Item key={m} value={m}>
                                                                        {m}
                                                                    </Select.Item>
                                                                ))}
                                                            </Select.Content>
                                                        </Select.Root>
                                                    )}
                                                />

                                                <Controller
                                                    control={control}
                                                    name={`role.${index}.started.year`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <Select.Root defaultValue={value} onValueChange={onChange}>
                                                            <Select.Trigger value={value} />
                                                            <Select.Content>
                                                                {yearList.map((m) => (
                                                                    <Select.Item key={m} value={m}>
                                                                        {m}
                                                                    </Select.Item>
                                                                ))}
                                                            </Select.Content>
                                                        </Select.Root>
                                                    )}
                                                />
                                            </Flex>
                                        </Flex>

                                        <Flex direction="column" gap="2">
                                            <Strong>Ended</Strong>
                                            <Flex gap="2" align="center">
                                                <Controller
                                                    control={control}
                                                    name={`role.${index}.ended.month`}
                                                    render={({ field: { onChange, value } }) => (
                                                        <Select.Root defaultValue={value} onValueChange={onChange}>
                                                            <Select.Trigger value={value} />
                                                            <Select.Content>
                                                                {monthList.map((m) => (
                                                                    <Select.Item key={m} value={m}>
                                                                        {m}
                                                                    </Select.Item>
                                                                ))}
                                                            </Select.Content>
                                                        </Select.Root>
                                                    )}
                                                />

                                                <Controller
                                                    control={control}
                                                    name={`role.${index}.ended.year`}
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

                                                <Text>Still in role?</Text>
                                                <input type="checkbox" {...register(`role.${index}.stillInRole`)} />
                                            </Flex>
                                        </Flex>

                                        <Flex direction="column">
                                            <Strong>Description</Strong>
                                            <Text as="label" mb="3">
                                                Summarise your responsibilities, skills and achievements.
                                            </Text>
                                            <textarea placeholder="Describe your role here" {...register(`role.${index}.description`)} />
                                        </Flex>

                                        <Text as="label">
                                            Stay safe. Don't include sensitive personal information such as identity documents, health, race, religion
                                            or financial data.
                                        </Text>

                                        <Flex gap="3">
                                            <Button type="submit">Save</Button>

                                            <Button
                                                variant="soft"
                                                onClick={() => {
                                                    reset(applicantSetting), setOpenDialogIndex(null);
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
                                                Remove Role
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
                            jobTitle: "",
                            companyName: "",
                            started: {
                                month: "",
                                year: "",
                            },
                            ended: {
                                month: "",
                                year: "",
                            },
                            stillInRole: false,
                            description: "",
                        })
                    }
                >
                    Add New Role
                </Button>
            </form>
        </Box>
    );
};

export default ApplicantCareerHistory;
