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
    personalSummary:
        "Enthusiastic and dedicated recent graduate with a passion for software development and a strong foundation in front-end technologies. Known for a detail-oriented approach and collaborative spirit, I am eager to apply my skills in a dynamic team to create impactful solutions. Looking forward to contributing my skills in JavaScript, React, and UX design while continually learning and growing in the tech industry.",
    role: [
        {
            jobTitle: "Doctor",
            companyName: "Joemom",
            started: { month: "Apr", year: "2021" },
            ended: { month: "Oct", year: "2022" },
            stillInRole: true,
            description: "Best doctor in the world",
        },
        {
            jobTitle: "Astronaut",
            companyName: "Blungs",
            started: { month: "Apr", year: "2022" },
            ended: { month: "Oct", year: "2023" },
            stillInRole: false,
            description: "Best astronaut in the world",
        },
        {
            jobTitle: "Plumber",
            companyName: "TwoStreet",
            started: { month: "Apr", year: "2024" },
            ended: { month: "Oct", year: "2024" },
            stillInRole: true,
            description: "Best plumber in the world",
        },
    ],
    education: [
        {
            courseOrQualification: "Art history",
            institution: "brasser university",
            finished: "2020",
            courseHighlights:
                "Explore foundational techniques in drawing, painting, and sculpture to develop your unique artistic style. Experiment with a variety of materials and mediums, including charcoal, watercolor, clay, and digital tools, to broaden your creative expression. Learn from accomplished artists and art historians who provide insights into both classical and contemporary art practices.",
        },
    ],
    license: [
        {
            licenseName: "Driver License",
            issuingOrganisation: "Fake Taxi",
            issue: {
                month: "Jan",
                year: "2023",
            },
            expiryDate: {
                month: "Dec",
                year: "2024",
            },
            description: "Best taxi driver",
        },
    ],
    skills: ["Emotional Intelligence", "Physical Expressiveness", "Versatility and Range", "Focus and Discipline"],
    languages: ["English", "German"],
};
