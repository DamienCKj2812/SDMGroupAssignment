import { IUser } from "../interface";

export const applicantList: IUser[] = [
    {
        userId: 999,
        username: "Mike oxmaul",
        emailAddress: "applicant@test.com",
        password: "test123",
        role: "applicant",
    },
];

export const employerList: IUser[] = [
    {
        userId: 911,
        username: "Ben Dover",
        emailAddress: "employer@test.com",
        password: "test123",
        role: "employer",
    },
];

export const companyUser: IUser[] = [
    {
        userId: 50,
        username: "staff",
        emailAddress: "staff@test.com",
        password: "test123",
        role: "staff",
    },
    {
        userId: 96,
        username: "manager",
        emailAddress: "manager@test.com",
        password: "test123",
        role: "manager",
    },
];
