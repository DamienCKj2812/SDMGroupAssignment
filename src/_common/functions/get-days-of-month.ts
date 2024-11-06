import moment from "moment";

const getAllDaysOfMonth = (): string[] => {
    const startOfMonth = moment().startOf("month");
    const daysInMonth = startOfMonth.daysInMonth();
    const days: string[] = [];

    for (let i = 0; i < daysInMonth; i++) {
        days.push(startOfMonth.clone().add(i, "days").format("MMMM Do")); // e.g., "November 1st"
    }

    return days;
};

export default getAllDaysOfMonth;
