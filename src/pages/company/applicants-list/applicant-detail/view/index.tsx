import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { applicantSetting } from "../../../../../_common/data/setting-list";
import { IApplicantSetting } from "../../../../../_common/interface";
import { Avatar, Box, Button, Dialog, Flex, Grid, Heading, Strong, Text } from "@radix-ui/themes";
import "./style.css";
import { companyList } from "../../../../../_common/data/company-list";

const ApplicantDetail = () => {
    const { userId } = useParams();
    const [setting, setSetting] = useState<IApplicantSetting>();
    const [suggestedCompany, setSuggestedCompany] = useState<number[]>([]);

    useEffect(() => {
        if (userId) {
            setSetting(applicantSetting.find((a) => a.userId == +userId));
        }
    }, [userId]);

    console.log(suggestedCompany);
    return (
        <Flex justify="center" id="applicant-detail">
            <Flex direction="column" gap="5" width="1200px">
                <Flex justify="between">
                    <Avatar
                        src={setting?.personalDetails.profileImage}
                        fallback={setting?.personalDetails.firstName[0] || ""}
                        style={{ height: "170px", width: "170px" }}
                    />

                    <Flex direction="column" gap="2">
                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button color="tomato">
                                    Ban {setting?.personalDetails.firstName} {setting?.personalDetails.lastName}
                                </Button>
                            </Dialog.Trigger>

                            <Dialog.Content maxWidth="450px">
                                <Dialog.Title>
                                    Ban {setting?.personalDetails.firstName} {setting?.personalDetails.lastName}{" "}
                                </Dialog.Title>
                                <Dialog.Description size="2" mb="4">
                                    Are you sure you want to ban {setting?.personalDetails.firstName} {setting?.personalDetails.lastName} ? Banning
                                    will revoke their access to the platform and prevent them from applying to future positions.
                                </Dialog.Description>

                                <Flex direction="column" gap="2">
                                    <Text as="label">
                                        Reason for banning this {setting?.personalDetails.firstName} {setting?.personalDetails.lastName} :
                                    </Text>
                                    <textarea placeholder="Enter reason here" />
                                </Flex>

                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">
                                            Cancel
                                        </Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button color="tomato">Confirm Ban</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>

                        <Flex direction="column" gap="2"></Flex>

                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>Push company suggestion</Button>
                            </Dialog.Trigger>

                            <Dialog.Content maxWidth="1000px" maxHeight="100vh" id="company-suggestion-dialog">
                                <Dialog.Title>
                                    Push companies to the {setting?.personalDetails.firstName} {setting?.personalDetails.lastName}'s suggestion
                                </Dialog.Title>
                                <Dialog.Description size="2" mb="4">
                                    Select the companies that you believe would be a good match for the applicant based on their skills and
                                    experience. This will help improve the accuracy of the suggestions and provide the applicant with more relevant
                                    opportunities.
                                </Dialog.Description>

                                <Grid columns="3" gap="2">
                                    {companyList.map((c) => {
                                        return (
                                            <Flex
                                                key={c.companyId}
                                                className={`company-card ${suggestedCompany.includes(c.companyId) ? "selected" : ""}`}
                                                gap="4"
                                                align="center"
                                                onClick={() => {
                                                    setSuggestedCompany((prev) => {
                                                        if (prev.includes(c.companyId)) {
                                                            return prev.filter((p) => p != c.companyId);
                                                        }
                                                        return [...prev, c.companyId];
                                                    });
                                                }}
                                            >
                                                <Avatar src={c.img.icon} fallback={c.name[0]} style={{ height: "80px", width: "80px" }} />

                                                <Flex direction="column">
                                                    <Strong>{c.name}</Strong>
                                                    <Text as="p" m="0">
                                                        Industry: {c.about.industry}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        );
                                    })}
                                </Grid>

                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">
                                            Cancel
                                        </Button>
                                    </Dialog.Close>

                                    <Dialog.Close>
                                        <Button disabled={suggestedCompany.length <= 0}>Push {suggestedCompany.length} Company</Button>
                                    </Dialog.Close>
                                </Flex>
                            </Dialog.Content>
                        </Dialog.Root>
                    </Flex>
                </Flex>

                <Grid columns="2" gap="3">
                    <Flex direction="column" gap="2" className="card">
                        <Heading as="h1" m="0">
                            Personal Details
                        </Heading>
                        <Text as="p" m="0">
                            First Name: {setting?.personalDetails.firstName}
                        </Text>
                        <Text as="p" m="0">
                            Last Name: {setting?.personalDetails.lastName}
                        </Text>
                        <Text as="p" m="0">
                            Address: {setting?.personalDetails.homeLocation}
                        </Text>
                        <Text as="p" m="0">
                            Phone Number: {setting?.personalDetails.phoneNumber}
                        </Text>
                    </Flex>

                    <Flex className="card" direction="column" gap="2">
                        <Heading as="h1" m="0">
                            Personal Summary
                        </Heading>
                        <Text as="p" m="0">
                            {setting?.personalSummary}
                        </Text>
                    </Flex>
                </Grid>

                <Flex direction="column" gap="2" className="card">
                    <Heading as="h1" m="0">
                        Career History
                    </Heading>
                    <Grid columns="3" gap="2">
                        {setting?.role.map((r) => {
                            return (
                                <Flex className="card2" key={r.jobTitle} direction="column" gap="2">
                                    <Strong>{r.jobTitle}</Strong>
                                    <Text as="p">Company: {r.companyName}</Text>
                                    <Text as="p">{`Duration: ${r.started.month} ${r.started.year} - ${r.ended.month} ${r.ended.year}`}</Text>
                                    <Text as="p" m="0">
                                        Description: {r.description}
                                    </Text>
                                </Flex>
                            );
                        })}
                    </Grid>
                </Flex>

                <Flex direction="column" gap="2" className="card">
                    <Heading as="h1" m="0">
                        Education
                    </Heading>
                    <Grid columns="3" gap="2">
                        {setting?.education.map((r) => {
                            return (
                                <Flex className="card2" key={r.courseHighlights} direction="column" gap="2">
                                    <Strong>{r.courseOrQualification}</Strong>
                                    <Text as="p">Institution: {r.institution}</Text>
                                    <Text as="p" m="0">
                                        Course Highlights: {r.courseHighlights}
                                    </Text>
                                </Flex>
                            );
                        })}
                    </Grid>
                </Flex>

                <Flex direction="column" gap="2" className="card">
                    <Heading as="h1" m="0">
                        Licences & certifications
                    </Heading>
                    <Grid columns="3" gap="2">
                        {setting?.license.map((r) => {
                            return (
                                <Flex className="card2" key={r.licenseName} direction="column" gap="2">
                                    <Strong>{r.licenseName}</Strong>
                                    <Text as="p">Issuing Organisation: {r.issuingOrganisation}</Text>
                                    <Text as="p">{`Issue Date: ${r.issue.month} ${r.issue.year} `}</Text>
                                    <Text as="p">{`Expiry Date: ${r.expiryDate.month} ${r.expiryDate.year}`}</Text>
                                </Flex>
                            );
                        })}
                    </Grid>
                </Flex>

                <Flex direction="column" gap="2" className="card">
                    <Heading as="h1" m="0">
                        Skills
                    </Heading>
                    <Flex wrap="wrap" gap="2">
                        {setting?.skills.map((s) => {
                            return (
                                <Box key={s} className="card3">
                                    {s}
                                </Box>
                            );
                        })}
                    </Flex>
                </Flex>

                <Flex direction="column" gap="2" className="card">
                    <Heading as="h1" m="0">
                        Languages
                    </Heading>
                    <Flex wrap="wrap" gap="2">
                        {setting?.languages.map((s) => {
                            return (
                                <Box key={s} className="card3">
                                    {s}
                                </Box>
                            );
                        })}
                    </Flex>
                </Flex>

                <Flex direction="column" gap="2" className="card">
                    <Heading as="h1" m="0">
                        Resumé
                    </Heading>
                    <Flex wrap="wrap" gap="2">
                        {[
                            {
                                id: 1,
                                image: "https://www.jobhero.com/resources/wp-content/uploads/2023/07/tutor-template-resume-JH.svg",
                            },
                            {
                                id: 2,
                                image: "https://ceomichaelhr.com/wp-content/uploads/2023/01/14.webp",
                            },
                        ].map((r) => {
                            return (
                                <Box key={r.id}>
                                    <Dialog.Root>
                                        <Dialog.Trigger>
                                            <Avatar
                                                src={r.image}
                                                fallback={r.image[0]}
                                                style={{ width: "150px", height: "150px", cursor: "pointer" }}
                                            />
                                        </Dialog.Trigger>

                                        <Dialog.Content maxWidth="fit-content" maxHeight="100vh">
                                            <Dialog.Title>
                                                <></>
                                            </Dialog.Title>
                                            <Dialog.Description>
                                                <></>
                                            </Dialog.Description>
                                            <img src={r.image} alt="image" />
                                        </Dialog.Content>
                                    </Dialog.Root>
                                </Box>
                            );
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ApplicantDetail;
