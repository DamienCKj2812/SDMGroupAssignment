import React, { useState } from "react";
import { Box, Button, Dialog, Flex, Heading, Progress, Select, Strong, Text, TextField } from "@radix-ui/themes";
import { ICompany, IJob } from "../../../../../../_common/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../style.css";
import { reviews } from "../../../../../../_common/data/reviews";
import ToastPopover from "../../../../../../_common/components/toast-popover";

const EmployerReviews = ({ companyDetail, jobs }: { companyDetail: ICompany; jobs: IJob[] }) => {
    const [helpfulReviews, setHelpfulReviews] = useState<number[]>([]);
    const [openToast, setOpenToast] = useState(false);

    function generateStar(rating: number) {
        return Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon icon={faStar} key={index} style={{ color: index + 1 < rating ? "orange" : "lightgray" }} />
        ));
    }

    return (
        <Flex id="employer-reviews" direction="column" mb="3" gap="6">
            <Heading as="h1" m="0">
                Reviews of {companyDetail.name}
            </Heading>

            <Flex justify="between" align="center" gap="2" className="review-overview-card">
                <Flex direction="column" gap="2" align="center">
                    <Heading as="h1" m="0">
                        {(companyDetail.reviews.feedbacksRating.reduce((a, b) => a + b, 0) / companyDetail.reviews.feedbacksRating.length).toFixed(1)}
                    </Heading>

                    <Flex gap="1">
                        {generateStar(
                            companyDetail.reviews.feedbacksRating.reduce((acc, curr) => acc + curr, 0) / companyDetail.reviews.feedbacksRating.length
                        )}
                    </Flex>

                    <Text as="p" m="0">
                        <Strong>{companyDetail.reviews.feedbacksRating.length} </Strong>ratings in total
                    </Text>
                </Flex>

                <Flex direction="column" width="200px">
                    {[5, 4, 3, 2, 1].map((r) => {
                        const count = companyDetail.reviews.feedbacksRating.reduce((acc, curr) => (curr === r ? acc + 1 : acc), 0);
                        const percentage = (count / companyDetail.reviews.feedbacksRating.length) * 100;

                        return (
                            <Flex key={r} gap="2" align="center">
                                <Strong>{r}</Strong>
                                <Progress value={percentage} />
                                {count}
                            </Flex>
                        );
                    })}
                </Flex>

                {companyDetail.reviews.recommended.map((r) => {
                    return (
                        <Flex direction="column" gap="2" align="center" width="200px" key={r.value}>
                            <Box height="80px" width="80px">
                                <CircularProgressbar value={r.value} text={`${r.value}%`} strokeWidth={5} />
                            </Box>
                            <Text as="p" m="0" align="center">
                                {r.reason}
                            </Text>
                        </Flex>
                    );
                })}
            </Flex>

            <Box>
                <Text as="p" m="0" mb="3">
                    Showing <Strong>{reviews.length}</Strong> reviews
                </Text>

                <Flex direction="column" gap="3">
                    {reviews.map((r) => {
                        return (
                            <Flex key={r.id} gap="2" className="user-review-card">
                                <Flex direction="column" gap="1" width="200px">
                                    <Flex align="center" gap="2">
                                        <Box>{generateStar(r.rating)}</Box>{" "}
                                        <Text as="p" m="0">
                                            {r.rating.toFixed(1)}
                                        </Text>
                                    </Flex>
                                    <Strong>{r.position}</Strong>
                                    <Text as="label">Sep 2023</Text>
                                </Flex>

                                <Flex direction="column" gap="2" flexGrow="1">
                                    <Heading as="h1" m="0" mb="2">
                                        {r.title}
                                    </Heading>

                                    <Strong>The good things</Strong>
                                    <Text as="p" m="0">
                                        {r.goodThings}
                                    </Text>
                                    <Strong>The challenges</Strong>
                                    <Text as="p" m="0">
                                        {r.challenges}
                                    </Text>

                                    <Flex justify="between" align="center">
                                        <Text>{Math.floor(Math.random() * 69) + 1} users think this is helpful</Text>

                                        <Dialog.Root>
                                            <Dialog.Trigger>
                                                <Button color="red">
                                                    <FontAwesomeIcon icon={faFlag} />2 reported message
                                                </Button>
                                            </Dialog.Trigger>

                                            <Dialog.Content maxWidth="600px">
                                                <Dialog.Title>Help us understand what is happening</Dialog.Title>
                                                <Dialog.Description size="2">
                                                    <></>
                                                </Dialog.Description>

                                                <Flex direction="column" gap="5">
                                                    {[
                                                        {
                                                            id: 1,
                                                            reason: "Offensive language or behavior",
                                                            description:
                                                                "The comment contains derogatory language or insults directed at other users, creating an uncomfortable environment.",
                                                        },
                                                        {
                                                            id: 2,
                                                            reason: "Hate speech or discrimination",
                                                            description:
                                                                "The content includes statements that promote prejudice or hostility towards a specific group based on race, religion, gender, or other characteristics.",
                                                        },
                                                    ].map((r, i) => {
                                                        return (
                                                            <Flex direction="column" gap="1" key={r.id}>
                                                                <Text as="p" m="0">
                                                                    {i + 1}. Reason: <Strong style={{ fontSize: "15px" }}>{r.reason}</Strong>
                                                                </Text>
                                                                <Text as="label" m="0" style={{ marginLeft: "14px" }}>
                                                                    Description: {r.description}
                                                                </Text>
                                                            </Flex>
                                                        );
                                                    })}

                                                    <Flex gap="3" justify="end">
                                                        <Dialog.Close>
                                                            <Button variant="soft" color="gray">
                                                                Cancel
                                                            </Button>
                                                        </Dialog.Close>
                                                        <Dialog.Close>
                                                            <Button color="tomato">Remove this review</Button>
                                                        </Dialog.Close>
                                                    </Flex>
                                                </Flex>
                                            </Dialog.Content>
                                        </Dialog.Root>
                                    </Flex>
                                </Flex>
                            </Flex>
                        );
                    })}
                </Flex>
            </Box>

            <ToastPopover openToast={openToast} setOpenToast={setOpenToast} status="success">
                <Text>Review updated</Text>
            </ToastPopover>
        </Flex>
    );
};

export default EmployerReviews;
