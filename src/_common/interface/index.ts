export interface IUser {
    userId: number;
    username: string;
    emailAddress: string;
    password: string;
}

export interface ICompany {
    companyId: number;
    name: string;
    img: {
        icon: string;
        background: string;
    };
    about: {
        industry: string;
        companySize: string;
        primaryLocation: string;
        story: string;
    };
    reviews: {
        feedbacksRating: number[];
        recommended: {
            value: number;
            reason: string;
        }[];
    };
}

export interface IJob {
    jobId: number;
    companyId: number;
    position: string;
    salary: string;
    type: "Contract/Temp" | "Full time";
    postedFrom: number;
    objectives: string;
    responsibilities: string[];
    requirements: string[];
    employerQuestions: string[];
}

export interface IReview {
    userId: number;
    roleInCompany: string;
    title: string;
    goodThings: string;
    challenges: string;
    rating: number;
}
