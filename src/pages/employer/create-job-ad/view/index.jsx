import { Box, Button, Flex, Heading, Strong, Text, TextField, TextArea, Select } from "@radix-ui/themes";
import React,  { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { suggestedSkillData } from "src/pages/applicants/applicant-profile/data/suggested-data";

import { applicantSetting } from "./src/_common/data/setting-list.ts";
import { useForm, Controller } from "react-hook-form";

const CreateJobAd = () => {
    
    const navigate = useNavigate();
    const { handleSubmit, control, watch, reset, getValues } = useForm({
        defaultValues: applicantSetting[0],
    });
    const [newSkill, setNewSkill] = useState("");
    const [openToast, setOpenToast] = useState(false);

    const skills = watch("skills");

    const onSubmit = (data) => {
        console.log("Form data:", data);
    };

    const handleManualSave = () => {
        const formData = getValues();
        console.log("Manually saving data:", formData);
        setOpenToast(true);
    };


  return (
    <Box width = "100%">    
        <Flex id="company-profile" justify="center">
            <Flex direction="column" gap="4" className="form-container">
                <Heading as="h1">Create a New Job Ad</Heading>
                <Strong>Job details</Strong>
                <Box>
                    
                    <Flex direction="column" className="form-details-container" gap="5">
                        <Flex gap="1" direction="column">
                            <Text as="label">Position name</Text>
                            <TextField.Root />
                        </Flex>

                        <Flex gap="1" direction="column">
                            <Text as="label">Job Description</Text>
                            <TextArea size="2" placeholder="Tell the people what the job is doing..." />
                        </Flex>
                        <Flex gap="1" direction="column">
                            <Text as="label">Salary</Text>
                            <TextField.Root   placeholder= "How much you pay for a month"/>
                        </Flex>
                        <Flex gap="1" direction="column">
                            <Text as="label">Mode</Text>
                            <Select.Root size="2" defaultValue="Full_Time">
                                <Select.Trigger variant="classic" />
                                <Select.Content>
                                    <Select.Item value="Full_Time">Full Time</Select.Item>
                                    <Select.Item value="Part_Time">Part Time</Select.Item>
                                    <Select.Item value="Internship">Internship</Select.Item>
                                </Select.Content>
                            </Select.Root>
                        </Flex>
                        <Flex gap="1" direction="column">
                            <Text as="label">Location</Text>
                            <TextField.Root placeholder="Search for your location" size="2">
                                <TextField.Slot side="right">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </TextField.Slot>
                            </TextField.Root>
                        </Flex>
                    </Flex>
                </Box>

                <Box mt = "5">
                    <Strong>Job requirements</Strong>

                    <Flex direction="column" className="form-details-container" gap="5">
                        <Flex gap="1" direction="column">
                            <Text as="label">Skills equired</Text>
                            <TextArea size="2" placeholder="The skills you are looking for..." />
                        </Flex>

                        <Flex gap="1" direction="column">
                            <Text as="label" size = "3"><Strong>Employer Questions</Strong></Text>
                            <Text as="p" m="0">
                                List the questions you want to ask from the applicants.
                            </Text>
                            <TextArea size="2" placeholder="What questions do you want to ask..." />
                        </Flex>
                    </Flex>
                </Box>

                <Flex direction="column" gap="5">
                            <Controller
                                name="skills"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <>
                                            <Flex direction="column" gap="2">
                                                <Strong>Add new skill</Strong>
                                                <Flex gap="3">
                                                    <TextField.Root onChange={(e) => setNewSkill(e.target.value)} value={newSkill} />
                                                    <Button
                                                        onClick={() => {
                                                            if (newSkill) {
                                                                field.onChange([...field.value, newSkill]);
                                                                setNewSkill("");
                                                            }
                                                        }}
                                                    >
                                                        Add
                                                    </Button>
                                                </Flex>
                                                <Text as="label">Click add or press enter</Text>
                                            </Flex>

                                            <Flex direction="column" gap="2">
                                                <Strong>Suggested skills based on your career history</Strong>
                                                <Flex gap="4" wrap="wrap">
                                                    {suggestedSkillData
                                                        .filter((s) => !field.value.includes(s))
                                                        .slice(0, 6)
                                                        .map((s) => {
                                                            return (
                                                                <Flex
                                                                    key={s}
                                                                    align="center"
                                                                    gap="4"
                                                                    onClick={() => field.onChange([...field.value, s])}
                                                                    className="suggested-skill-container"
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
                                                <Strong>Added skills</Strong>
                                                <Flex gap="2" wrap="wrap">
                                                    {field.value.map((s) => {
                                                        return (
                                                            <Flex
                                                                key={s}
                                                                align="center"
                                                                gap="4"
                                                                onClick={() => field.onChange(field.value.filter((f) => f != s))}
                                                                className="added-skill-container"
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
                        </Flex>
                
                <Flex gap="4">
                    <Button variant="outline">Save as Draft</Button>

                </Flex>

                <Button onClick={() => navigate("../../employer/dashboard")}>Publish New Job</Button>
            </Flex>
        </Flex>
    </Box>
  );
};

export default CreateJobAd