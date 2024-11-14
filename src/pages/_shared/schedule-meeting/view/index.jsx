import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Dialog, TextField } from "@radix-ui/themes";
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek, createViewMonthGrid } from "@schedule-x/calendar";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import "./style.css";

const ScheduleMeeting = () => {
    const navigate = useNavigate(); // Initialize navigate here
    const [meetingCode, setMeetingCode] = useState("");

    // Initialize the calendar with configuration
    const calendar = useCalendarApp({
        views: [createViewMonthGrid(), createViewWeek()],
        events: [
            {
                id: 1,
                title: "Interview Meeting (Meeting Code: 9487)",
                start: "2024-11-15 00:00",
                end: "2024-11-15 02:00",
            },
        ],

        selectedDate: "2024-11-16",
        plugins: [createEventModalPlugin()],
    });

    return (
        <>
            <Flex gap="8" className="test" id="schedule-meeting">
                <Dialog.Root>
                    <Dialog.Trigger>
                        <Button>Join Meeting</Button>
                    </Dialog.Trigger>

                    <Dialog.Content maxWidth="450px">
                        <Dialog.Title>Join Meeting</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                            Join meeting with the code
                        </Dialog.Description>

                        <TextField.Root onChange={(e) => setMeetingCode(e.target.value)}  />

                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                                <Button onClick={() => navigate(`/meeting/meet/${meetingCode}`)}>Join Meeting</Button>
                            </Dialog.Close>
                        </Flex>
                    </Dialog.Content>
                </Dialog.Root>
            </Flex>

            <div id="calendar">
                <ScheduleXCalendar calendarApp={calendar} />
            </div>
        </>
    );
};

export default ScheduleMeeting;
