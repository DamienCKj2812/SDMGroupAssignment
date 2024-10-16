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
        story: `
        Health Lane Family Pharmacy is a growing chain of pharmacy with more than 30 years of experience! We currently have more than 200 outlets in Klang Valley, Negeri Sembilan, Melaka, Johor, Pahang, Perak, Penang, Sarawak and still expanding.
We believe “GREAT HEALTH BEGINS HERE”, our goal is to establish a long term relationship with our customers, treating them like our family by providing caring advice and recommending wholesome solutions to help them achieve great health.
In order to achieve our goal, we employ a dedicated team of licensed and experienced pharmacists, well trained nutritionists, dietitians and health advisors to provide the best service and consultation to our customers.`;
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
