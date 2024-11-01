import { IApplicantSetting } from "../interface";

export const applicantSetting: IApplicantSetting = {
    userId: 999,
    personalDetails: {
        firstName: "Mike",
        lastName: "Oxmaul",
        homeLocation: "No. 25, Jalan Taman Jaya, Taman Desa, 58100 Kuala Lumpur, Malaysia | 2. Lot 8, Level 2, Suria",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQessajFGlfsaMHQPc5N_NLTpyQecw-1ZVlbg&s",
        banner: "https://t3.ftcdn.net/jpg/02/97/91/38/360_F_297913876_pxLCVBrLEyznyqdHvNpKmNRPvYWoqlEW.jpg",
        phoneNumber: "010-0000-1111",
    },
    personalSummary: "",
    role: [
        {
            jobTitle: "Doctor",
            companyName: "Joemom",
            started: "Apr 2021",
            ended: "Oct 2022",
            stillInRole: false,
            description: "Best doctor in the world",
        },
        {
            jobTitle: "Astronaut",
            companyName: "Blungs",
            started: "Apr 2024",
            ended: "Oct 2025",
            stillInRole: false,
            description: "Best astronaut in the world",
        },
        {
            jobTitle: "Plumber",
            companyName: "TwoStreet",
            started: "Apr 2025",
            ended: "Oct 2026",
            stillInRole: false,
            description: "Best plumber in the world",
        },
    ],
    education: {
        courseOrQualification: "Art history",
        institution: "brasser university",
        qualificationComplete: true,
        finished: "2020",
        courseHighlights:
            "Explore foundational techniques in drawing, painting, and sculpture to develop your unique artistic style. Experiment with a variety of materials and mediums, including charcoal, watercolor, clay, and digital tools, to broaden your creative expression. Learn from accomplished artists and art historians who provide insights into both classical and contemporary art practices.",
    },
    license: {
        licenseName: "Driver License",
        issuingOrganisation: "Fake Taxi",
        issue: {
            month: "Jan",
            year: "2023",
        },
        exipiryDate: {
            month: "Dec",
            year: "2024",
        },
        description: "",
    },
    skills: ["Emotional Intelligence", "Physical Expressiveness", "Versatility and Range", "Focus and Discipline"],
    addLanguage: "English, German",
};
