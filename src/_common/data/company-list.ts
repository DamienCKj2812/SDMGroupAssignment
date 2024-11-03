import { ICompany } from "../interface";

export const companyList: ICompany[] = [
    {
        companyId: 0,
        name: "Fake Taxi",
        img: {
            icon: "https://i.pinimg.com/736x/aa/87/8b/aa878b68e73414cf8119848fff62f4d0.jpg",
            background: "https://nypost.com/wp-content/uploads/sites/2/2013/11/djan.jpg?quality=75&strip=all",
        },
        about: {
            industry: "transportation",
            companySize: "100 - 200",
            primaryLocation: "Kuala Lumpur",
            story: "Founded in 1998 by two friends with a single cab and a dream, SwiftRide was born in the bustling streets of Brookdale—a city known for its unpredictable weather and congested roads. The company was initially just a means for its founders, Alex and Sam, to support themselves after losing their jobs at a local factory that had shut down. With one old, yellow sedan, they took turns driving for long hours, quickly becoming popular among locals for their reliable service and willingness to go the extra mile.",
        },
        reviews: {
            feedbacksRating: [5, 5, 5, 5, 5, 5, 5, 1, 2],
            recommended: [
                {
                    value: 69,
                    reason: "Rate salary as high or average",
                },
                {
                    value: 96,
                    reason: "Employees recommend this employer to friends",
                },
            ],
        },
    },
    {
        companyId: 1,
        name: "CloudHopper Airways",
        img: {
            icon: "https://media.istockphoto.com/id/694972110/vector/plane-icon.jpg?s=612x612&w=0&k=20&c=f0yPSxEtZfgJ-y9kMYxbiNu9ArSoGqLd26s9ObEeGdo=",
            background: "https://assets.foxdcg.com/dpp-uploaded/images/tmz-investigates-911-the-fifth-plane/keyart_s1.jpg",
        },
        about: {
            industry: "airline",
            companySize: "911 - 2001",
            primaryLocation: "United state",
            story: "Founded in 2003 by a retired pilot and a travel enthusiast, CloudHopper Airways started with just one secondhand aircraft. They set out to bring affordable and friendly flights to Southeast Asia. Known for their lively in-flight entertainment and an unbreakable commitment to customer satisfaction, CloudHopper now connects over 30 cities with plans to expand even further. With a motto of 'Where the Sky's the Limit,' they aim to make air travel as joyful as a hop in the clouds.",
        },
        reviews: {
            feedbacksRating: [4, 5, 4, 4, 3, 4, 5, 1],
            recommended: [
                {
                    value: 84,
                    reason: "Friendly work environment with travel perks",
                },
                {
                    value: 91,
                    reason: "Employees recommend this company to friends",
                },
            ],
        },
    },
    {
        companyId: 2,
        name: "EcoFuel Innovations",
        img: {
            icon: "https://img.freepik.com/premium-vector/bio-fuel-logo-template-design_316488-300.jpg",
            background: "https://acee.princeton.edu/wp-content/uploads/2023/03/iStock-1392287714_banner-1200x675.jpg",
        },
        about: {
            industry: "energy",
            companySize: "300 - 500",
            primaryLocation: "Berlin, Germany",
            story: "Founded in 2015, EcoFuel Innovations is a clean energy startup that specializes in developing sustainable biofuels. With a mission to reduce carbon emissions in transportation, the company has gained traction across Europe and is working on pilot projects in Asia. EcoFuel is known for its cutting-edge research and commitment to a green future.",
        },
        reviews: {
            feedbacksRating: [5, 4, 4, 5, 3, 4],
            recommended: [
                {
                    value: 78,
                    reason: "Promotes a sustainable work environment",
                },
                {
                    value: 85,
                    reason: "Employees believe in the company mission",
                },
            ],
        },
    },
    {
        companyId: 3,
        name: "ByteTech Solutions",
        img: {
            icon: "https://cdn.dribbble.com/userupload/16577558/file/original-79c301d6a3aaa6c59245108586ee5733.jpg?resize=400x0",
            background:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjO5ueyane7PlRscFKzZSgxr5x6F_cHHxzw&s",
        },
        about: {
            industry: "information technology",
            companySize: "800 - 1500",
            primaryLocation: "San Francisco, CA",
            story: "ByteTech Solutions began as a small web development agency in 2007 and has since grown into a leading provider of cloud-based solutions for businesses worldwide. With a focus on innovation and security, ByteTech serves hundreds of companies and has a reputation for its employee-friendly culture and career growth opportunities.",
        },
        reviews: {
            feedbacksRating: [5, 5, 4, 4, 3],
            recommended: [
                {
                    value: 90,
                    reason: "Excellent work-life balance",
                },
                {
                    value: 88,
                    reason: "Opportunities for professional development",
                },
            ],
        },
    },
    {
        companyId: 4,
        name: "Grove & Grain Organics",
        img: {
            icon: "https://thumbs.dreamstime.com/b/wheat-grain-rice-logo-inspiration-vector-love-nutrition-agriculture-180376630.jpg",
            background:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFe-4-3qDUgn9NLTEdQUv2STYawJkdBPUt5ZE10F3mypr7gn3KX2J7fEmp1yW8SMlrseBeZi7CqmYHca5BHEhqmlEAlYxKjOPcRbsr4T_NY53j_bKq_mgjEMLIWCDDmSd0kELYP-1YSDQ/s512/%25E7%25A8%25BB%25E9%25A6%2599.jpg",
        },
        about: {
            industry: "agriculture",
            companySize: "100 - 250",
            primaryLocation: "Austin, TX",
            story: "Grove & Grain Organics started in 2012 with the goal of providing sustainably sourced organic produce to communities across Texas. With a focus on quality and environmental responsibility, Grove & Grain has become a trusted name for fresh, organic foods, partnering with local farmers and supporting eco-friendly farming practices.",
        },
        reviews: {
            feedbacksRating: [5, 4, 4, 5, 4, 5],
            recommended: [
                {
                    value: 82,
                    reason: "Great mission and purpose-driven work",
                },
                {
                    value: 87,
                    reason: "Friendly and collaborative work culture",
                },
            ],
        },
    },
    {
        companyId: 5,
        name: "PixelVerse Media",
        img: {
            icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/31494.png",
            background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLw06tAH44NeskDh-wR3DaROhMD-xtFBOh1Q&s",
        },
        about: {
            industry: "media and entertainment",
            companySize: "200 - 400",
            primaryLocation: "Toronto, Canada",
            story: "Founded in 2018, PixelVerse Media is a creative agency that focuses on digital storytelling through virtual reality and animation. Known for its high-quality productions and innovative approach, PixelVerse has worked with top brands to create engaging, immersive experiences. The team is young, diverse, and passionate about pushing the boundaries of digital media.",
        },
        reviews: {
            feedbacksRating: [4, 5, 5, 4, 5, 5],
            recommended: [
                {
                    value: 76,
                    reason: "Innovative and creative work environment",
                },
                {
                    value: 89,
                    reason: "High employee satisfaction with projects",
                },
            ],
        },
    },
    {
        companyId: 6,
        name: "AquaPure Systems",
        img: {
            icon: "https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-blue-vector-aqua-text-logo-with-water-wave-png-image_4697672.png",
            background: "https://www.chargerwater.com/wp-content/uploads/2018/05/clean-water.jpg",
        },
        about: {
            industry: "water treatment",
            companySize: "150 - 300",
            primaryLocation: "Mumbai, India",
            story: "Founded in 2005, AquaPure Systems started with a mission to bring clean, safe water to rural and urban areas. With a focus on affordable water treatment technologies, AquaPure has installed filtration systems in over 20 countries and continues to innovate in sustainable water purification.",
        },
        reviews: {
            feedbacksRating: [4, 4, 5, 3, 4, 4],
            recommended: [
                {
                    value: 83,
                    reason: "Meaningful work with environmental impact",
                },
                {
                    value: 78,
                    reason: "Good support for personal growth",
                },
            ],
        },
    },
    {
        companyId: 7,
        name: "BrightMind Education",
        img: {
            icon: "https://media.istockphoto.com/id/1350696625/vector/education-emblem-with-book-and-graduation-cap.jpg?s=612x612&w=0&k=20&c=5jy03wNwUbwz4UmbQkHwpubd5TtNmTVAXeCKVM806Sw=",
            background: "https://www.aspistrategist.org.au/wp-content/uploads/2023/12/GettyImages-1469988132.jpg",
        },
        about: {
            industry: "education technology",
            companySize: "500 - 800",
            primaryLocation: "London, UK",
            story: "BrightMind Education was founded in 2010 with the goal of making learning accessible to everyone. The company offers interactive learning platforms for students from primary to high school, focusing on engagement and individualized learning experiences. They’re known for their supportive work culture and commitment to educational equity.",
        },
        reviews: {
            feedbacksRating: [5, 5, 4, 5, 4, 4],
            recommended: [
                {
                    value: 89,
                    reason: "Positive impact on education",
                },
                {
                    value: 91,
                    reason: "Supportive management and work-life balance",
                },
            ],
        },
    },
    {
        companyId: 8,
        name: "VitalWear Health",
        img: {
            icon: "https://media.istockphoto.com/id/1321617070/vector/health-medical-logo.jpg?s=612x612&w=0&k=20&c=sus8vhG3c__vCdvOBLDhuf2vPUgIAudIAeUBApU_7Ew=",
            background: "https://www.fda.gov/files/styles/main_image_medium/public/COVID%20testing%20policy%20drupal.jpg?itok=vcWyxRzi",
        },
        about: {
            industry: "healthcare technology",
            companySize: "700 - 1200",
            primaryLocation: "San Diego, CA",
            story: "Founded in 2014, VitalWear Health specializes in wearable technology for monitoring and improving patient health. Their products are used by hospitals and healthcare providers worldwide, helping to reduce hospital stays and improve patient outcomes. VitalWear is known for its cutting-edge research and collaborative work environment.",
        },
        reviews: {
            feedbacksRating: [5, 5, 4, 4, 4, 5],
            recommended: [
                {
                    value: 92,
                    reason: "High impact on patient care",
                },
                {
                    value: 85,
                    reason: "Innovative and collaborative culture",
                },
            ],
        },
    },
    {
        companyId: 9,
        name: "EcoPath Adventures",
        img: {
            icon: "https://marketplace.canva.com/EAEaWgugqtE/2/0/1600w/canva-travel-app-or-website-logo-0ow-Kjlwzd8.jpg",
            background: "https://cdn.britannica.com/27/238527-050-BB51367B/flagpoles-world-countries.jpg",
        },
        about: {
            industry: "eco-tourism",
            companySize: "50 - 100",
            primaryLocation: "Cape Town, South Africa",
            story: "Launched in 2018, EcoPath Adventures provides sustainable travel experiences across Africa. With eco-friendly accommodations and guided tours, they aim to raise awareness about conservation and local cultures. EcoPath is popular among adventure-seekers and eco-conscious travelers, with employees who share a passion for nature and sustainability.",
        },
        reviews: {
            feedbacksRating: [5, 4, 5, 4, 3, 5],
            recommended: [
                {
                    value: 80,
                    reason: "Work aligns with environmental values",
                },
                {
                    value: 88,
                    reason: "Flexible work environment with travel opportunities",
                },
            ],
        },
    },
    {
        companyId: 10,
        name: "Nova Robotics",
        img: {
            icon: "https://img.freepik.com/premium-vector/gear-robot-logo_148584-6.jpg",
            background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMG1d-1TYLnZSA94BQEsBExdBqdyk7aH53NA&s",
        },
        about: {
            industry: "robotics and AI",
            companySize: "1000 - 1500",
            primaryLocation: "Tokyo, Japan",
            story: "Founded in 2008, Nova Robotics is a leader in the development of robotics and artificial intelligence solutions for manufacturing and logistics. They’ve earned a reputation for their innovative designs and efficiency in industrial automation. Nova Robotics focuses heavily on research and development, and they attract top engineers and data scientists from around the world.",
        },
        reviews: {
            feedbacksRating: [4, 4, 5, 5, 5, 4],
            recommended: [
                {
                    value: 84,
                    reason: "Challenging projects with career growth potential",
                },
                {
                    value: 86,
                    reason: "High-tech environment and professional development",
                },
            ],
        },
    },
    {
        companyId: 11,
        name: "Verdant Realty",
        img: {
            icon: "https://img.freepik.com/premium-photo/logo-real-estate-houses-with-logo-real-estate-solutions_1191871-99090.jpg?semt=ais_hybrid",
            background: "https://i2-prod.mirror.co.uk/incoming/article32498292.ece/ALTERNATES/s1200b/0_SDC_MDG_CHP_63386JPEG.jpg",
        },
        about: {
            industry: "real estate",
            companySize: "200 - 400",
            primaryLocation: "Sydney, Australia",
            story: "Verdant Realty was established in 2002 with a focus on sustainable housing and eco-friendly real estate. The company works closely with environmental organizations to create green living spaces in urban and suburban areas. Known for their ethical practices and attention to quality, Verdant Realty has become a leader in sustainable development.",
        },
        reviews: {
            feedbacksRating: [4, 5, 4, 4, 3, 4],
            recommended: [
                {
                    value: 81,
                    reason: "Ethical mission with a strong company culture",
                },
                {
                    value: 87,
                    reason: "Good work-life balance and career growth",
                },
            ],
        },
    },
];
