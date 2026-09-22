import connectDB from "./config/db.js";
import Leader from "./models/leader.js";

const leaders = [
    {
        name: "Raj Nath Singh",
        photo: "",
        category: "Cabinet Minister",
        designation: "Minister of Defence",
        party: "Bharatiya Janata Party",
        constituency: "Lucknow",
        state: "Uttar Pradesh",

        education: "Master of Science in Physics",

        dateOfBirth: new Date("1951-07-10"),

        responsibilities: [
            "Ministry of Defence"
        ],

        previousPositions: [
            "Chief Minister of Uttar Pradesh",
            "Union Minister of Home Affairs",
            "Union Minister of Road Transport and Highways"
        ],

        officialGovernmentProfile: "",

        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            }
        ]
    },

    {
        name: "Amit Shah",
        photo: "",
        category: "Cabinet Minister",
        designation: "Minister of Home Affairs; Minister of Cooperation",
        party: "Bharatiya Janata Party",
        constituency: "Gandhinagar",
        state: "Gujarat",

        education: "Bachelor of Science",

        dateOfBirth: new Date("1964-10-22"),

        responsibilities: [
            "Ministry of Home Affairs",
            "Ministry of Cooperation"
        ],

        previousPositions: [
            "Member of Legislative Assembly, Gujarat",
            "President of Bharatiya Janata Party"
        ],

        officialGovernmentProfile: "",

        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            }
        ]
    },

    {
        name: "Nitin Jairam Gadkari",
        photo: "",
        category: "Cabinet Minister",
        designation: "Minister of Road Transport and Highways",
        party: "Bharatiya Janata Party",
        constituency: "Nagpur",
        state: "Maharashtra",

        education: "Bachelor of Commerce; Bachelor of Laws; Diploma in Business Management",

        dateOfBirth: new Date("1957-05-27"),

        responsibilities: [
            "Ministry of Road Transport and Highways"
        ],

        previousPositions: [
            "Member of Maharashtra Legislative Council",
            "President of Maharashtra BJP",
            "President of Bharatiya Janata Party"
        ],

        officialGovernmentProfile: "",

        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            }
        ]
    }
];

const seedLeaders = async () => {
    try {
        await connectDB();

        await Leader.deleteMany();

        await Leader.insertMany(leaders);

        console.log(`${leaders.length} leaders inserted successfully`);

        process.exit(0);

    } catch (error) {
        console.error("Error seeding leaders:", error.message);

        process.exit(1);
    }
};

seedLeaders();