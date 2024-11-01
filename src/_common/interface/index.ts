export interface IUser {
    userId: number;
    username: string;
    emailAddress: string;
    password: string;
}

export interface IApplicantSetting {
    userId: number;
    personalDetails: {
        firstName: string;
        lastName: string;
        homeLocation: string;
        profileImage: string;
        banner: string;
        phoneNumber: string;
    };
    personalSummary: string | null;
    role: {
        jobTitle: string;
        companyName: string;
        started: string;
        ended: string;
        stillInRole: boolean;
        description: string;
    }[];
    education: {
        courseOrQualification: string;
        institution: string;
        qualificationComplete: boolean;
        finished: string;
        courseHighlights: string;
    } | null;
    license: {
        licenseName: string;
        issuingOrganisation: string;
        issue: {
            month: string;
            year: string;
        };
        exipiryDate: {
            month: string;
            year: string;
        };
        description: string;
    } | null;
    skills: string[];
    addLanguage: string;
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
