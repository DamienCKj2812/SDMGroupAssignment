import { IApplicantSetting } from "../interface";

export const applicantSetting: IApplicantSetting[] = [
    {
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
            {
                courseOrQualification: "Computer Science",
                institution: "Greenfield Institute of Technology",
                finished: "2022",
                courseHighlights:
                    "Develop programming skills in languages such as Python, Java, and C++. Gain experience in software engineering, data structures, algorithms, and artificial intelligence. Participate in hands-on projects and internships that prepare you for real-world challenges in the tech industry.",
            },

            {
                courseOrQualification: "Business Administration",
                institution: "Lakeside Business School",
                finished: "2019",
                courseHighlights:
                    "Learn essential business concepts in finance, marketing, and operations. Focus on leadership skills, strategic thinking, and ethical decision-making. Engage in case studies, group projects, and presentations to build a strong foundation in management and entrepreneurship.",
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
    },
    {
        userId: 1000,
        personalDetails: {
            firstName: "Ah",
            lastName: "Beng",
            homeLocation: "123 Oak Avenue, Boston, MA 02118, USA",
            profileImage:
                "data:image/jpeg;base64,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",
            banner: "",
            phoneNumber: "415-555-0421",
        },
        personalSummary:
            "Creative marketing professional with a strong background in digital advertising, content creation, and strategic brand management. Passionate about storytelling and building meaningful connections with customers. Proven ability to generate innovative solutions to elevate brand presence across digital platforms.",
        role: [
            {
                jobTitle: "Marketing Manager",
                companyName: "Creative Solutions",
                started: { month: "Jun", year: "2022" },
                ended: { month: "Present", year: "2024" },
                stillInRole: true,
                description: "Leading innovative marketing campaigns and brand initiatives.",
            },
            {
                jobTitle: "Social Media Specialist",
                companyName: "Brand Co.",
                started: { month: "Jan", year: "2020" },
                ended: { month: "May", year: "2022" },
                stillInRole: false,
                description: "Managed social media presence and content strategy.",
            },
        ],
        education: [
            {
                courseOrQualification: "Digital Marketing",
                institution: "Harvard University",
                finished: "2021",
                courseHighlights:
                    "Learned digital marketing strategies, social media optimization, SEO, and PPC advertising techniques to help businesses grow in a digital world. Worked on real-life case studies and hands-on projects to implement marketing strategies effectively.",
            },
            {
                courseOrQualification: "Computer Science",
                institution: "Greenfield Institute of Technology",
                finished: "2022",
                courseHighlights:
                    "Develop programming skills in languages such as Python, Java, and C++. Gain experience in software engineering, data structures, algorithms, and artificial intelligence. Participate in hands-on projects and internships that prepare you for real-world challenges in the tech industry.",
            },

            {
                courseOrQualification: "Business Administration",
                institution: "Lakeside Business School",
                finished: "2019",
                courseHighlights:
                    "Learn essential business concepts in finance, marketing, and operations. Focus on leadership skills, strategic thinking, and ethical decision-making. Engage in case studies, group projects, and presentations to build a strong foundation in management and entrepreneurship.",
            },
        ],
        license: [
            {
                licenseName: "Google Ads Certification",
                issuingOrganisation: "Google",
                issue: {
                    month: "Mar",
                    year: "2023",
                },
                expiryDate: {
                    month: "Mar",
                    year: "2025",
                },
                description: "Certified in Google Ads Campaigns and digital marketing strategies.",
            },
        ],
        skills: ["Content Strategy", "Brand Management", "SEO", "Paid Media Campaigns", "Marketing Analytics"],
        languages: ["English", "Spanish"],
    },
    {
        userId: 1001,
        personalDetails: {
            firstName: "Honey",
            lastName: "Small",
            homeLocation: "456 Maple Street, Sydney, Australia",
            profileImage:
                "data:image/jpeg;base64,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",
            banner: "",
            phoneNumber: "02-5555-7890",
        },
        personalSummary:
            "Experienced software engineer with a passion for developing high-quality applications. Skilled in multiple programming languages, including Python, Java, and JavaScript. Adept at agile methodologies and delivering results in fast-paced environments. Strong communication and leadership skills with a focus on team collaboration.",
        role: [
            {
                jobTitle: "Software Engineer",
                companyName: "Tech Innovations",
                started: { month: "Jul", year: "2021" },
                ended: { month: "Present", year: "2024" },
                stillInRole: true,
                description: "Developing scalable software solutions for clients across various industries.",
            },
            {
                jobTitle: "Junior Developer",
                companyName: "CodeX Solutions",
                started: { month: "Sep", year: "2019" },
                ended: { month: "Jun", year: "2021" },
                stillInRole: false,
                description: "Worked on backend development and participated in code reviews.",
            },
        ],
        education: [
            {
                courseOrQualification: "Computer Science",
                institution: "University of Sydney",
                finished: "2019",
                courseHighlights:
                    "Focused on algorithms, data structures, and software engineering principles. Gained hands-on experience building applications and participated in coding competitions.",
            },
            {
                courseOrQualification: "Computer Science",
                institution: "Greenfield Institute of Technology",
                finished: "2022",
                courseHighlights:
                    "Develop programming skills in languages such as Python, Java, and C++. Gain experience in software engineering, data structures, algorithms, and artificial intelligence. Participate in hands-on projects and internships that prepare you for real-world challenges in the tech industry.",
            },

            {
                courseOrQualification: "Business Administration",
                institution: "Lakeside Business School",
                finished: "2019",
                courseHighlights:
                    "Learn essential business concepts in finance, marketing, and operations. Focus on leadership skills, strategic thinking, and ethical decision-making. Engage in case studies, group projects, and presentations to build a strong foundation in management and entrepreneurship.",
            },
        ],
        license: [],
        skills: ["Python", "Java", "JavaScript", "Agile Methodology", "Software Architecture"],
        languages: ["English", "Mandarin"],
    },
];
