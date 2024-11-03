import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dialog, Flex, Heading, Strong, Text, TextField } from "@radix-ui/themes";
import React from "react";

const ApplicantResume = () => {
    return (
        <Flex id="applicant-resume" direction="column">
            <Heading as="h1" m="0">
                Resumé
            </Heading>
            <Flex className="input-container" direction="column" gap="5">
                <Text>Upload a resumé for easy applying and access no matter where you are.</Text>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button style={{ width: "fit-content" }}>Add resumé</Button>
                    </Dialog.Trigger>

                    <Dialog.Content id="applicant-resume-dialog">
                        <Dialog.Title as="h1">Add resumé</Dialog.Title>

                        <Dialog.Description mb="5">
                            <Text as="label">Add up to 10 resumés. Accepted file types: doc, docx and pdf (2MB limit).</Text>
                        </Dialog.Description>

                        <Flex direction="column" gap="5">
                            <Flex direction="column" gap="3" className="add-resume-input-container">
                                <FontAwesomeIcon icon={faFile} style={{ height: "50px" }} />

                                <Text as="label" align="center">
                                    To add a resumé, drag and drop here or simply browse for a file.
                                </Text>
                                <Button>Browse</Button>
                            </Flex>
                            <Text as="label">
                                Stay safe. Don't include sensitive personal information such as identity documents, health, race, religion or
                                financial data.
                            </Text>

                            <Flex gap="3">
                                <Button type="submit">Done</Button>
                            </Flex>
                        </Flex>
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>
        </Flex>
    );
};

export default ApplicantResume;
