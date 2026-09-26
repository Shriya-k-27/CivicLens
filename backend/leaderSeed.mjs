import connectDB from "./config/db.js";
import Leader from "./models/leader.js";

const leaders = [
    {
        name: "Shri Raj Nath Singh",
        photo: "",
        category: "Cabinet Minister",
        designation: ["Minister of Defence"],
        party: "Bharatiya Janata Party",
        constituency: "Lucknow",
        state: "Uttar Pradesh",

        education: [
            "M.Sc. Physics",
            "Educated at Gorakhpur University,Gorakhpur, Uttar Pradesh"
        ],

        dateOfBirth: new Date("1951-07-10"),

        responsibilities: [
            "Ministry of Defence"
        ],

        previousPositions: [
            "1977-1979 and 2001-2002: Member, Uttar Pradesh Legislative Assembly (Three Terms)",
            "1988-1994: Member, Uttar Pradesh Legislative Council",
            "1991-1992: Minister, Education, Govt. of Uttar Pradesh",
            "1994-2000, 2000-2000, 2002 - 2008: Member, Rajya Sabha (Three Terms)",
            "1999-2000: Union Cabinet Minister, Ministry of Surface Transport",
            "2000-2002: Chief Minister, Govt. of Uttar Pradesh",
            "2003-2004: Union Cabinet Minister, Ministry of Agriculture and Food Processing",
            "2005-2009: National President, Bharatiya Janata Party (BJP)",
            "2009: Elected to 15th Lok Sabha; Member, Committee on Ethics",
            "2014: Re-elected to 16th Lok Sabha (2nd term)",
            "2014-2019: Union Cabinet Minister, Ministry of Home Affairs",
            "2014: Member, Committee on Installation of Portraits/Statues of National Leaders and Parliamentarians in Parliament House Complex",
            "2019: Re-elected to 17th Lok Sabha (3rd term); Union Cabinet Minister, Ministry of Defence",
            "2024: Elected to 18th Lok Sabha; Union Cabinet Minister, Ministry of Defence"
        ],

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
        name: "Shri Amit Shah",
        photo: "",
        category: "Cabinet Minister",
        designation: [
            "Minister of Home Affairs",
            "Minister of Cooperation"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Gandhinagar",
        state: "Gujarat",

        education: [
            "S.Y. B.Sc.",
            "Educated at Gujarat University, Ahmedabad"
        ],

        dateOfBirth: new Date("1964-10-22"),

        responsibilities: [
            "Ministry of Home Affairs",
            "Ministry of Cooperation"
        ],

        previousPositions: [
            "1997-2017: Member, Gujarat Legislative Assembly (Four Terms)",
            "2002-2010: Minister of State, Department of Home, Government of Gujarat (Two Terms)",
            "2017-2019: Member, Rajya Sabha",
            "2019: Elected to 17th Lok Sabha; Union Cabinet Minister, Ministry of Home Affairs",
            "2021: Union Cabinet Minister, Ministry of Cooperation",
            "2024: Elected to 18th Lok Sabha; Union Cabinet Minister of Home Affairs; and Minister of Cooperation"
        ],

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
        name: "Shri Nitin Jairam Gadkari",
        photo: "",
        category: "Cabinet Minister",
        designation: ["Minister of Road Transport and Highways"],
        party: "Bharatiya Janata Party",
        constituency: "Nagpur",
        state: "Maharashtra",

        education: [
            "B.Com., LL.B.",
            "G.S. Commerce College, Nagpur",
            "University and University College of Law, Main Branch, Nagpur"
        ],

        dateOfBirth: new Date("1957-05-27"),

        responsibilities: [
            "Ministry of Road Transport and Highways"
        ],

        previousPositions: [
            "1989-2014: Member, Maharashtra Legislative Council",
            "1995-1999: P.W.D. Minister, Government of Maharashtra",
            "1999-2005: Leader of Opposition, Maharashtra Legislative Council",
            "2014-2019: Union Cabinet Minister, Road Transport and Highways; and Shipping 27 May 2014 - 25 May 2019",
            "2014-2014: Union Cabinet Minister, Rural Development; Panchayati Raj and Drinking Water and Sanitation (Additional Charge)4 June 2014 - 9 Nov. 2014",
            "2017-2019: Union Cabinet Minister, Water Resources, River Development and Ganga Rejuvenation",
            "2019-2021: Union Cabinet Minister, Ministry of Micro, Small and Medium Enterprises30 May 2019 - 7 July 2021",
            "2019-now: Union Cabinet Minister, Ministry of Road Transport ",
        ],

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
        name: "Shri Jagat Praksh Nadda",
        photo: "",
        category: "Cabinet Minister",
        designation:[
            "Leader of the house in Rajya Sabha",
            "Ministry of Health and Family Welfare",
            "Ministry of Chemicals and Fertilizers"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Gujarat",
        state: "Gujarat",

        education: ["B.A., LL.B. Educated at St. Xaviers School, Patna",
        "Patna College",
        "Patna University and Himachal Pradesh University, Shimla"
    ],

        dateOfBirth: new Date("1960-12-02"),

        responsibilities: [
            "Ministry of Health and Family Welfare",
            "Ministry of Chemicals and Fertilizers",
            "Leader of the House (Rajya Sabha)"
        ],

        previousPositions: [
            "1993-2012: Member, Himachal Pradesh Legislative Assembly (three terms)",
            "1994-1998: Leader, Bharatiya Janata Party Group, Himachal Pradesh Legislative Assembly",
            "1998-2003: Cabinet Minister, Health and Family Welfare and Parliamentary Affairs, Government of Himachal Pradesh",
            "2009-2010: Cabinet Minister, Forest, Science and Technology and Parliamentary Affairs, Election and Law and Legal Remembrance, Government of Himachal Pradesh",
            "2012: Member, Committee on Transport, Tourism and Culture",
            "2012-2014: Member, Court of the University of Delhi",
            "2012-2014: Member, Committee on Health and Family Welfare",
            "2013-2014: Member, Committee of Privileges",
            "2014-2014: Member, Business Advisory Committee; Member, Select Committee on the Insurance Laws (Amendment) Bill, 2008; Chairman, Committee on Human Resource Development",
            "2014-2019: Union Minister of Health and Family Welfare",
            "2019-2020: Member, Consultative Committee for the Ministry of Defence",
            "2024-current: Minister of Health and Family Welfare; and Minister of Chemicals and Fertilizers; Leader of the House, Rajya Sabha; Member, General Purposes Committee"
        ],

        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            },
            {
                title:"Bharatiya Janata Party",
                url:"https://www.bjp.org/"
            }
        ]
    },
    
    {
        name: "Shri Shivraj Singh Chouhan",
        photo: "",
        category: "Cabinet Minister",
        designation: [
            "Minister of Agriculture and Farmers Welfare",
            "Minister of Rural Development"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Vidisha",
        state: "Madhya Pradesh",
        education: [
            "M.A. (Philosophy) (Gold Medalist)",
            "Educated at Bhopal University, Bhopal (Madhya Pradesh)"
        ],

        dateOfBirth: new Date("1959-03-05"),

        responsibilities: [
            "Enhancing Crop Yields",
            "Lowering Production Overhead",
            "Securing Fair Pricing fro agriculture produce",
            "Managing Agricultural Risk",
            "Promoting Value Addition",
            "Driving Digital Agriculture",
            "Scaling Sustainable Farming",
            "Expanding Rural Infrastructure",
            "Supervising Employment Schemes",
            "Empowering Rural Women",
            "Advancing Rural Skill Training",
            "Enforcing Financial Accountability",
            "Directing Climate & Monsoon Contingencies"
        ],

        previousPositions: [
            "1977: Swayamsewak, Rashtriya Swayamsewak Sangh (R.S.S.)",
            "1977-78: Organising-Secretary, Akhil Bharatiya Vidyarathi Parishad (A.B.V.P.)",
            "1978-80: Joint-Secretary, A.B.V.P., Madhya Pradesh",
            "1980-82: General-Secretary, A.B.V.P., Madhya Pradesh",
            "1982-83: Member, National Executive, A.B.V.P.",
            "1984-85: Joint-Secretary, Bharatiya Janata Yuva Morcha, Madhya Pradesh",
            "1985-88: General Secretary, Yuva Morcha, B.J.P., Madhya Pradesh",
            "1988-91: President, Yuva Morcha, B.J.P., Madhya Pradesh",
            "1990-1991: Member, Madhya Pradesh Legislative Assembly",
            "1991: Elected to 10th Lok Sabha",
            "1991-92: Convenor, Akhil Bharatiya Keshariya Vahin",
            "1992: General-Secretary, All India Bharatiya Janata Yuva Morcha",
            "1992-94: General-Secretary, B.J.P., Madhya Pradesh",
            "1992-96: Member, Consultative Committee, Ministry of Human Resource Development",
            "1993-96: Member, Committee on Labour and Welfare",
            "1994-96: Member, Hindi Salahkar Samiti",
            "1995-96: Member, Committee on Absence of Members from the Sittings of the House",
            "1996: Re-elected to 11th Lok Sabha (2nd term)",
            "1996-97: Member, Committee on Urban and Rural Development",
            "1997-98: Member, Committee on Urban and Rural Development; Member, Consultative Committee, Ministry of Human Resource Development",
            "1998: Re-elected to 12th Lok Sabha (3rd term); General-Secretary, B.J.P., Madhya Pradesh",
            "1998-99: Member, Committee on Estimates",
            "1999: Re-elected to 13th Lok Sabha (4th term); Member, Consultative Committee, Ministry of Human Resource Development; Member, Committee on Urban and Rural Development and its Sub-Committee-II on Ministry of Rural Areas & Employment",
            "1999-2000: Member, Committee on Agriculture",
            "1999-2001: Member, Committee on Public Undertakings",
            "2000-2003: National President, Bharatiya Janata Yuva Morcha; National Secretary, BJP; Chairman, House Committee (Lok Sabha)",
            "2000-2004: Member, Consultative Committee, Ministry of Communications",
            "2004: Re-elected to 14th Lok Sabha( 5th term)",
            "2005: Secretary, Central Election Committee, BJP; President, Madhya Pradesh, BJP; Member, Committee on Ethics; Secretary, Parliamentary Board, BJP; National General Secretary, BJP; Member, Joint Committee on Offices of Profit; Member, Committee on Agriculture",
            "2024: Elected to 18th Lok Sabha; Union Cabinet Minister of Agriculture and Farmers Welfare; Minister of Rural Development"
        ],

        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            },
            {
                title: "sansad",
                url: "https://sansad.in/ls/members/in-council-of-ministers"
            }
        ]
    },
    {
        name:"Smt. Nirmala Sitharaman",
        photo: "",
        category: "Cabinet Minister",
        designation:[
            "Ministery of Finance",
            "Ministry of Corporate Affairs"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Rajya Sabha (Bengaluru Jayanagar Voter Registration)",
        state: "Karnataka",

        education: [
        "M.A. (Economics), M.Phil,",
        "Educated at Seethalakshmi Ramaswamy College, Tiruchirappalli, Tamil Nadu and Jawaharlal Nehru University, New Delhi"
    ],

        dateOfBirth: new Date("1959-08-18"),

        responsibilities: [
            "Fiscal Policy and Union Budget",
            "Taxation and Revenue Governance",
            "Banking and Financial Inclusion",
            "Foreign Investments & Capital Markets",
            "Macroeconomic Stability",
            "Corporate Governance Enforcement",
            "Ease of Doing Business",
            "Insolvency and Bankruptcy Management",
            "Competition Regulation"
        ],

        previousPositions: [
            "2003-2005: Member, National Commission for Women",
            "May 2014 - Nov 2014: Minister of State in the Ministry of Finance and Minister of State in the Ministry of Corporate Affairs",
            "2014-2017: Minister of State (Independent Charge) of the Ministry of Commerce and Industry",
            "2014: Elected to Rajya Sabha (resigned w.e.f. 17 June 2016)",
            "2016: Elected to Rajya Sabha (second term)",
            "2017-2019: Minister of Defence",
            "2022: Re-elected to Rajya Sabha (third term)",
            "2019 - current: Minister of Finance; and Minister of Corporate Affairs"
        ],

        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            },
            {
                title:"Bharatiya Janata Party",
                url:"https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Dr. Subrahmanyam Jaishankar",
        photo: "",
        category: "Cabinet Minister",
        designation: [
            "Minister of External Affairs"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Rajya Sabha (New Delhi Voter Registration)",
        state: "Gujarat",
        education: [
            "B.Sc. (Chemistry) (St. Stephen's College, Delhi)",
            "M.A. (Political Science) (Jawaharlal Nehru University, New Delhi)",
            "M.Phil. (International Relations) (Jawaharlal Nehru University, New Delhi)",
            "Ph.D. (International Relations - Specialisation in Nuclear Diplomacy) (Jawaharlal Nehru University, New Delhi)"
        ],

        dateOfBirth: new Date("1955-01-09"),

        responsibilities: [
            "Formulating and Executing India's Foreign Policy",
            "Managing Diplomatic Relations with Foreign Nations & Multilateral Bodies",
            "Safeguarding the Rights and Welfare of Indian Citizens Abroad (Diaspora Matters)",
            "Advancing India's Economic Diplomacy, Trade, and Global Commercial Interests",
            "Leading Negotiations for International Treaties, Accords, and Strategic Partnerships",
            "Representing India at Global Forums (United Nations, BRICS, SCO, G20)",
            "Overseeing the Administration of India's Embassies, High Commissions, and Consulates Worldwide",
            "Managing Passport, Visa, and Consular Service Frameworks",
            "Directing Neighborhood First Policy and Act East Strategic Frameworks",
            "Coordinating Cross-Border Development Projects and International Humanitarian Aid",
            "Supervising the Cadre Allocation and Operations of the Indian Foreign Service (IFS)",
            "Mitigating Global and Geopolitical Border Security Risks through Strategic Diplomacy"
        ],

        previousPositions: [
            "1977: Joined the Indian Foreign Service (I.F.S.)",
            "1979-1981: Third Secretary and Second Secretary, Embassy of India, Moscow",
            "1981-1985: Undersecretary, Americas Division, Ministry of External Affairs (M.E.A.)",
            "1985-1988: First Secretary, Indian Embassy, Washington D.C.",
            "1988-1990: First Secretary and Political Adviser to the Indian Peacekeeping Force (I.P.K.F.), Sri Lanka",
            "1990-1993: Counsellor (Commercial), Indian Mission, Budapest",
            "1993-1996: Director (East Europe), M.E.A.; Press Secretary & Speechwriter for the President of India",
            "1996-2000: Deputy Chief of Mission, Embassy of India, Tokyo",
            "2000-2004: Ambassador of India to the Czech Republic",
            "2004-2007: Joint Secretary (Americas), Ministry of External Affairs",
            "2007-2009: High Commissioner of India to Singapore",
            "2009-2013: Ambassador of India to China",
            "2013-2015: Ambassador of India to the United States",
            "2015-2018: Foreign Secretary of India",
            "2018-2019: President, Global Corporate Affairs, Tata Sons Private Limited",
            "2019: Conferred with the Padma Shri (Civil Service)",
            "2019: Sworn in as Union Cabinet Minister of External Affairs",
            "2019: Elected as Member of Parliament, Rajya Sabha (Gujarat) (1st term)",
            "2023: Re-elected uncontested as Member of Parliament, Rajya Sabha (Gujarat) (2nd term)",
            "2024: Union Cabinet Minister of External Affairs (Re-appointed in Modi 3.0 Ministry)"
        ],
        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            },
            {
                title:"Bharatiya Janata Party",
                url:"https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Shri Manohar Lal",
        photo: "",
        category: "Cabinet Minister",
        designation: [
            "Minister of Housing and Urban Affairs",
            "Minister of Power"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Karnal",
        state: "Haryana",
        education: [
            "B.A. (Bachelor of Arts)",
            "Educated at Pandit Neki Ram Sharma Government College, Rohtak and Delhi University, Delhi"
        ],

        dateOfBirth: new Date("1954-05-05"),

        responsibilities: [
            "Formulating Urban Development Policies and Smart Cities Mission Schemes",
            "Managing National Urban Housing Initiatives and Pradhan Mantri Awas Yojana (Urban)",
            "Overseeing Urban Transit Infrastructure projects including Metro Rail Networks",
            "Implementing Swachh Bharat Mission (Urban) and Amrut Schemes nationwide",
            "Supervising National Power Grid Stability and Interstate Power Transmission Networks",
            "Driving Renewable Energy Integration and Power Sector Capacity Additions",
            "Mitigating Peak Electricity Demand and Coal Supply Shortages for Thermal Plants",
            "Regulating Financial Turnaround of State Electricity Distribution Companies (DISCOMs)",
            "Promoting E-governance, Smart Metering, and Energy Efficiency Technologies",
            "Advancing Bilateral Energy and Hydropower Cooperation with Neighboring Nations",
            "Formulating Sustainable Urban Planning and Real Estate Regulation (RERA) Frameworks",
            "Coordinating Grid Security and Battery Energy Storage Systems (BESS) Expansion"
        ],

        previousPositions: [
            "1977: Joined the Rashtriya Swayamsevak Sangh (R.S.S.) as a Swayamsevak",
            "1980-1994: Served as a full-time Pracharak (worker) for the R.S.S.",
            "1994: Transferred to the Bharatiya Janata Party (B.J.P.), Organising Secretary, Haryana",
            "2000-2014: Played a vital organizational role as BJP's Election Campaign strategist",
            "2014: Elected to the Haryana Legislative Assembly from Karnal constituency",
            "2014-2019: Sworn in as the 10th Chief Minister of Haryana (1st term)",
            "2019: Re-elected to the Haryana Legislative Assembly from Karnal constituency",
            "2019-2024: Sworn in as the Chief Minister of Haryana (2nd term)",
            "2024: Resigned from the post of Chief Minister and Member of Legislative Assembly, Haryana",
            "2024: Elected to the 18th Lok Sabha from Karnal constituency",
            "2024: Union Cabinet Minister of Housing and Urban Affairs; and Minister of Power"
        ],
        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            },
            {
                title:"Bharatiya Janata Party",
                url:"https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Shri H.D. Kumaraswamy",
        photo: "",
        category: "Cabinet Minister",
        designation: [
            "Minister of Heavy Industries",
            "Minister of Steel"
        ],
        party: "Janata Dal (Secular)",
        constituency: "Mandya",
        state: "Karnataka",
        education: [
            "B.Sc. (Bachelor of Science)",
            "Educated at National College, Basavanagudi, Bengaluru, Karnataka"
        ],

        dateOfBirth: new Date("1959-12-16"),

        responsibilities: [
            "Promoting Indigenous Manufacturing and Automotive Innovation via Heavy Industries",
            "Formulating Policy Frameworks for the Development of Central Public Sector Enterprises (CPSEs)",
            "Overseeing National Capital Goods Sector Strategies and Infrastructure Upgrades",
            "Driving Domestic Steel Production and Steel Sector Contribution to National GDP",
            "Administering Performance and Operational Turnaround of State-Owned Heavy Engineering Firms",
            "Supervising National Automotive Testing Agencies and Electric Vehicle (FAME/EMPS) Schemes",
            "Ensuring Raw Material Security, including Iron Ore Allocation for Domestic Steel Producers",
            "Promoting Sustainable Green Steel Technologies and Decarbonisation Initiatives",
            "Coordinating Industry-Academia Collaborations for Advanced Engineering & Technology",
            "Managing Strategic Upgrades and Modernisation Plans for Public Steel Plants (SAIL, RINL)",
            "Advancing Financial Ecosystems and Budgetary Allocations for Testing Infrastructure",
            "Formulating Trade Policies to Protect and Boost Domestic Steel and Heavy Equipment Sectors"
        ],

        previousPositions: [
            "1996: Elected to the 11th Lok Sabha from Kanakapura constituency",
            "2004: Elected to the Karnataka Legislative Assembly from Ramanagara constituency",
            "2006-2007: Sworn in as the 18th Chief Minister of Karnataka (1st term)",
            "2008: Re-elected to the Karnataka Legislative Assembly from Ramanagara constituency",
            "2009: Elected to the 15th Lok Sabha from Bangalore Rural constituency (2nd term)",
            "2013: Re-elected to the Karnataka Legislative Assembly from Ramanagara constituency; Leader of Opposition, Karnataka Legislative Assembly",
            "2014: Appointed State President of Janata Dal (Secular), Karnataka",
            "2018: Re-elected to the Karnataka Legislative Assembly from Ramanagara and Channapatna constituencies",
            "2018-2019: Sworn in as the Chief Minister of Karnataka (2nd term)",
            "2023: Re-elected to the Karnataka Legislative Assembly from Channapatna constituency",
            "2024: Elected to the 18th Lok Sabha from Mandya constituency (3rd term)",
            "2024: Union Cabinet Minister of Heavy Industries; and Minister of Steel"
        ],
        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            },
            {
                title:"Bharatiya Janata Party",
                url:"https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Shri Piyush Goyal",
        photo: "",
        category: "Cabinet Minister",
        designation: [
            "Minister of Commerce and Industry"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Mumbai North",
        state: "Maharashtra",
        education: [
            "B.Com. (Bachelor of Commerce) (H.R. College of Commerce and Economics, Mumbai)",
            "LL.B. (Bachelor of Laws) (Government Law College, Mumbai)",
            "Chartered Accountant (All India 2nd Rank Holder, ICAI)"
        ],

        dateOfBirth: new Date("1964-06-13"),

        responsibilities: [
            "Formulating and Executing Foreign Trade Policies (FTP) to Boost Exports",
            "Promoting Domestic Industrial Growth, Manufacturing, and Ease of Doing Business",
            "Attracting and Regulating Foreign Direct Investment (FDI) Inflows across Sectors",
            "Leading Bilateral and Multilateral Free Trade Agreement (FTA) Negotiations",
            "Spearheading Startup India, Make in India, and Production Linked Incentive (PLI) Schemes",
            "Managing Intellectual Property Rights (IPR) Frameworks, Patents, and Trademarks",
            "Enhancing National Logistics Efficiency through the PM GatiShakti National Master Plan",
            "Overseeing Export Promotion Councils, SEZs, and Industrial Corridor Developments",
            "Representing India at International Trade Platforms including the WTO",
            "Driving Digital Transformation and Modernisation of Commerce Infrastructure",
            "Coordinating State-Level Investment Promotion and Local Industrial Clusters",
            "Enforcing Anti-Dumping and Trade Remedial Measures to Protect Domestic Industries"
        ],

        previousPositions: [
            "2001-2004: Director, State Bank of India; Member, Task Force for Interlinking of Rivers",
            "2002-2004: Director, Bank of Baroda",
            "2010: National Treasurer, Bharatiya Janata Party (B.J.P.)",
            "2010: Elected as Member of Parliament, Rajya Sabha (Maharashtra) (1st term)",
            "2014-2017: Minister of State (Independent Charge), Ministry of Power; Coal; and New & Renewable Energy",
            "2016: Re-elected as Member of Parliament, Rajya Sabha (Maharashtra) (2nd term)",
            "2017-2019: Union Cabinet Minister of Railways",
            "2017-2018: Union Cabinet Minister of Coal",
            "2018-2019: Union Cabinet Minister of Finance and Corporate Affairs (Additional Charge)",
            "2019-2021: Union Cabinet Minister of Railways",
            "2019-2024: Union Cabinet Minister of Consumer Affairs, Food and Public Distribution",
            "2019-Present: Union Cabinet Minister of Commerce and Industry",
            "2021-2024: Leader of the House, Rajya Sabha",
            "2021-2024: Union Cabinet Minister of Textiles",
            "2022: Re-elected as Member of Parliament, Rajya Sabha (Maharashtra) (3rd term)",
            "2024: Elected to the 18th Lok Sabha from Mumbai North constituency",
            "2024: Union Cabinet Minister of Commerce and Industry (Re-appointed)"
        ],
        sourceLinks: [
            {
                title: "PM India",
                url: "https://www.pmindia.gov.in/en/"
            },
            {
                title: "National Portal of India",
                url: "https://www.india.gov.in/"
            },
            {
                title:"Bharatiya Janata Party",
                url:"https://www.bjp.org/"
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