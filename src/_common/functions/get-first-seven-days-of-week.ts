import moment from "moment";

const getFirstSevenDaysOfWeek = (): string[] => {
    // Explicitly type the return value as a string array
    const startOfWeek = moment().startOf("week"); // Adjust with .startOf("isoWeek") if your week starts on Monday
    const days: string[] = []; // Explicitly type the array as a string array

    for (let i = 0; i < 7; i++) {
        days.push(startOfWeek.clone().add(i, "days").format("MMMM Do")); // e.g., "Monday, November 6th"
    }

    return days;
};

export default getFirstSevenDaysOfWeek;
