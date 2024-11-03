import React from "react";
import { ICompany, IJob } from "../../../../../../_common/interface";
import { Avatar, Flex, Heading, Strong, Text } from "@radix-ui/themes";
import "../style.css";

const CompanyAbout = ({ companyDetail, jobs }: { companyDetail: ICompany; jobs: IJob[] }) => {
    return (
        <Flex id="company-about" direction="column" gap="6">
            <Heading as="h1" m="0">
                {companyDetail.name} overview
            </Heading>

            <Flex direction="column" gap="2">
                <Flex>
                    <Strong style={{ width: "250px" }}>Website</Strong>
                    <Strong>{companyDetail.name}</Strong>
                </Flex>
                <Flex>
                    <Strong style={{ width: "250px" }}>Industry</Strong>
                    <Text as="p" m="0">
                        {companyDetail.about.industry}
                    </Text>
                </Flex>
                <Flex>
                    <Strong style={{ width: "250px" }}>Company size</Strong>
                    <Text as="p" m="0">
                        {companyDetail.about.companySize} employees
                    </Text>
                </Flex>
                <Flex>
                    <Strong style={{ width: "250px" }}>Primary location</Strong>
                    <Text as="p" m="0">
                        {companyDetail.about.primaryLocation}
                    </Text>
                </Flex>
            </Flex>

            <Text as="p" m="0">
                {companyDetail.about.story}
            </Text>

            <Flex direction="column" gap="2">
                <Heading as="h1" m="0">
                    {companyDetail.name} photos
                </Heading>

                <Flex gap="1">
                    {[
                        {
                            label: "image-1",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZpMiCZrSXtUeRfPLnWBA3GATZXKXYhDG7Q&s",
                        },
                        {
                            label: "image-2",
                            image: "https://media.makeameme.org/created/streets-she-belongs.jpg",
                        },
                        {
                            label: "image-3",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOeqCdH2zIUt9H9LsJxUJTxtPymZMoENMNQ&s",
                        },
                        {
                            label: "image-4",
                            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02nyHU7xEraWVEjLHHf7YNZJ5GUYT93Te7g&s",
                        },
                        {
                            label: "image-5",
                            image: " https://i.scdn.co/image/ab67616d00001e0252bf7b0987ece8d75b317ced",
                        },
                    ].map((l) => {
                        return <Avatar src={l.image} fallback={l.label} style={{ height: "200px", width: "200px" }} />;
                    })}
                </Flex>
            </Flex>

            <Text as="label">
                Find out more about working at {companyDetail.name}. Read company reviews from real employees, explore life and culture and view all
                open jobs.
            </Text>
        </Flex>
    );
};

export default CompanyAbout;
