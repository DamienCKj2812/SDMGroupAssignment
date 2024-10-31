export interface IUser {
    userId: number;
    username: string;
    emailAddress: string;
    password: string;
}

export interface IJob {
    jobId: number;
    name: string;
    about: {
        industry: string;
        companySize: string;
        primaryLocation: string;
        spcialities: string;
        story: string;
    };
    reviews: {
        feedbacks: number[];
        recommended: {
            value: number;
            reason: string;
        };
    };
}

export interface IReview {
    userId: number;
    roleInCompany: string;
    title: string;
    goodThings: string;
    challenges: string;
    rating: number;
}
