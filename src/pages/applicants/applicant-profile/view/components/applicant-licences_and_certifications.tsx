import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Dialog, Flex, Heading, Select, Strong, Text, TextField, Tooltip } from "@radix-ui/themes";
import React, { useState } from "react";
import { applicantSetting } from "../../../../../_common/data/setting-list";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { monthList, yearList } from "../../../../../_common/data/date-data";
import ToastPopover from "../../../../../_common/components/toast-popover";

const ApplicantLicenseAndCertificants = () => {
    const { register, handleSubmit, control, watch, reset, getValues } = useForm({
        defaultValues: applicantSetting[0],
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "license",
    });
    const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);
    const [openToast, setOpenToast] = useState(false);

    const licenses = watch("license");

    const onSubmit = (data) => {
        console.log("Form data:", data);
    };

    const handleManualSave = () => {
        const formData = getValues();
        console.log("Manually saving data:", formData);
        setOpenToast(true);
        setOpenDialogIndex(null);
    };

    return (
        <Box id="applicant-license-and-certificants">
            <Heading as="h1" m="0">
                Licences & certifications
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => {
                    const license = licenses[index] || {};

                    return (
                        <Flex justify="between" className="input-container" key={field.id}>
                            {!license.licenseName &&
                            !license.issuingOrganisation &&
                            !license.issue.month &&
                            !license.issue.year &&
                            !license.expiryDate.month &&
                            !license.expiryDate.year &&
                            !license.description ? (
                                <Text as="p" m="0" mt="2">
                                    Update your license or certification
                                </Text>
                            ) : (
                                <Flex direction="column" gap="1" className="added-contents">
                                    {license.licenseName && (
                                        <Heading as="h1" m="0">
                                            {license.licenseName}
                                        </Heading>
                                    )}
                                    {license.issuingOrganisation && (
                                        <Text as="p" m="0">
                                            {license.issuingOrganisation}
                                        </Text>
                                    )}
                                    {license.issue && license.expiryDate && (
                                        <Text as="label" m="0">
                                            {license.issue.month} {license.issue.year} - {license.expiryDate.month} {license.expiryDate.year}
                                        </Text>
                                    )}
                                    {license.description && (
                                        <Text as="p" m="0">
                                            {license.description}
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
                                <Dialog.Content id="applicant-license-and-certificants-dialog">
                                    <Dialog.Title as="h1">Add licence or certification</Dialog.Title>

                                    <Dialog.Description mb="5">
                                        <Text as="label">Showcase your licences, certificates, memberships and accreditations.</Text>
                                    </Dialog.Description>

                                    <Flex direction="column" gap="5">
                                        <Flex direction="column" gap="2">
                                            <Strong>License name</Strong>
                                            <TextField.Root placeholder="e.g. Drivers License" {...register(`license.${index}.licenseName`)} />
                                        </Flex>

                                        <Flex direction="column" gap="2">
                                            <Strong>Issuing organisation</Strong>
                                            <TextField.Root placeholder="Institution" {...register(`license.${index}.issuingOrganisation`)} />
                                        </Flex>

                                        <Flex direction="column" gap="2">
                                            <Strong>Issue date</Strong>
                                            <Flex gap="2">
                                                <Controller
                                                    control={control}
                                                    name={`license.${index}.issue.month`}
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
                                                    name={`license.${index}.issue.year`}
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
                                            <Strong>Expiry date</Strong>
                                            <Flex gap="2" align="center">
                                                <Controller
                                                    control={control}
                                                    name={`license.${index}.expiryDate.month`}
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
                                                    name={`license.${index}.expiryDate.year`}
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
                                            <Strong>Description</Strong>
                                            <Text as="label" mb="3">
                                                Briefly describe this credential - you can also add a type or URL if applicable.
                                            </Text>
                                            <textarea placeholder="Describe your license here" {...register(`license.${index}.description`)} />
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
                                                Remove License
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
                            licenseName: "",
                            issuingOrganisation: "",
                            issue: {
                                month: "",
                                year: "",
                            },
                            expiryDate: {
                                month: "",
                                year: "",
                            },
                            description: "",
                        })
                    }
                >
                    Add license or certification
                </Button>
            </form>

            <ToastPopover openToast={openToast} setOpenToast={setOpenToast} status="success">
                <Text>License / certifications updated</Text>
            </ToastPopover>
        </Box>
    );
};

export default ApplicantLicenseAndCertificants;
