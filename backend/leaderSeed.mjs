import connectDB from "./config/db.js";
import Leader from "./models/leader.js";

const leaders = [
    {
        name: "Shri Raj Nath Singh",
        photo: "/images/leaders/rajnath.jpg",
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
        photo: "/images/leaders/amit_shah.avif",
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
        photo: "/images/leaders/gadkari.jpg",
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
        photo: "/images/leaders/nadda.jpg",
        category: "Cabinet Minister",
        designation: [
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
                title: "Bharatiya Janata Party",
                url: "https://www.bjp.org/"
            }
        ]
    },

    {
        name: "Shri Shivraj Singh Chouhan",
        photo: "/images/leaders/shivraj.jpg",
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
        name: "Smt. Nirmala Sitharaman",
        photo: "/images/leaders/nirmala.jpg",
        category: "Cabinet Minister",
        designation: [
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
                title: "Bharatiya Janata Party",
                url: "https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Dr. Subrahmanyam Jaishankar",
        photo: "/images/leaders/jaishankar.jpg",
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
                title: "Bharatiya Janata Party",
                url: "https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Shri Manohar Lal",
        photo: "/images/leaders/manohar.jpg",
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
                title: "Bharatiya Janata Party",
                url: "https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Shri H.D. Kumaraswamy",
        photo: "/images/leaders/kumarswamy.jpg",
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
                title: "Bharatiya Janata Party",
                url: "https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Shri Piyush Goyal",
        photo: "/images/leaders/piyush.jpg",
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
                title: "Bharatiya Janata Party",
                url: "https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Shri Jitan Ram Manjhi",
        photo: "/images/leaders/manjhi.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Micro, Small and Medium Enterprises"
        ],
        party: "Hindustani Awam Morcha (Secular)",
        constituency: "Gaya",
        state: "Bihar",
        education: [
            "B.A. (Hons.) (History)",
            "Educated at Gaya College, Magadh University, Bodhgaya (Bihar)"
        ],

        dateOfBirth: new Date("1944-10-06"),

        responsibilities: [
            "Formulating Policies to Boost Growth of Micro, Small, and Medium Enterprises",
            "Enhancing Credit Flow and Access to Capital for MSMEs & Rural Artisans",
            "Overseeing Technology Upgradation and Digital Transformation in Small Industries",
            "Implementing the Prime Minister’s Employment Generation Programme (PMEGP)",
            "Promoting Khadi, Village Industries, and Coir Sector Development Schemes",
            "Driving Skill Development and Entrepreneurship Training Initiatives Nationwide",
            "Expanding Global Market Access, Competitiveness, and Exports for Indian MSMEs",
            "Supervising Cluster Development Programmes for Traditional Crafts and Industry Hubs",
            "Ensuring Sustainable Practices, Green Energy, and Zero Defect Zero Effect (ZED) Certification",
            "Regulating Delayed Payments Frameworks to Ensure Financial Liquidity for MSMEs",
            "Promoting Financial Inclusion and Institutional Support for Aspiring Rural Entrepreneurs",
            "Coordinating Infrastructure Development for MSME Parks and Industrial Zones"
        ],

        previousPositions: [
            "1968-1980: Clerk, Posts and Telegraphs Department",
            "1980: Entered active politics and joined the Indian National Congress (I.N.C.)",
            "1980-1990: Member, Bihar Legislative Assembly (First elected from Fatehpur constituency)",
            "1983-1985: Minister of State, Welfare, Government of Bihar",
            "1985-1988: Minister of State, Parliamentary Affairs, Government of Bihar",
            "1988-1990: Minister of State, Education, Government of Bihar",
            "1990: Joined the Janata Dal",
            "1990-1996: Member, Bihar Legislative Assembly",
            "1996: Switched allegiance to the Rashtriya Janata Dal (R.J.D.)",
            "1996-2005: Member, Bihar Legislative Assembly",
            "1998-2000: Minister of State, Welfare, Government of Bihar",
            "2000-2005: Cabinet Minister, Education, Government of Bihar",
            "2005: Joined the Janata Dal (United) [JD(U)]",
            "2008-2014: Cabinet Minister, Scheduled Castes & Scheduled Tribes Welfare, Government of Bihar",
            "2014-2015: 23rd Chief Minister of Bihar",
            "2015: Founded the Hindustani Awam Morcha (Secular) [HAM-S]",
            "2015-2024: Member, Bihar Legislative Assembly (Elected from Makhdumpur/Imamganj)",
            "2020: Served as the Pro-tem Speaker of the Bihar Legislative Assembly",
            "2024: Elected to the 18th Lok Sabha from Gaya constituency (First-ever term in Parliament)",
            "2024: Union Cabinet Minister of Micro, Small and Medium Enterprises"
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
                title: "Bharatiya Janata Party",
                url: "https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Shri Rajiv Ranjan Singh alias Lalan Singh",
        photo: "/images/leaders/alias.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Panchayati Raj",
            "Minister of Fisheries, Animal Husbandry and Dairying"
        ],
        party: "Janata Dal (United)",
        constituency: "Munger",
        state: "Bihar",
        education: [
            "B.A. (Hons.) (History)",
            "Educated at T.N.B. College, Bhagalpur University, Bihar"
        ],

        dateOfBirth: new Date("1955-01-24"),

        responsibilities: [
            "Formulating Local Governance Policies and strengthening Panchayati Raj Institutions alongside digital initiatives like SAMARTH",
            "Managing performance-based grants, rural infrastructure, and fisheries modernization",
            "Supervising veterinary diagnostics, livestock identification via Pashu Aadhaar, and dairy governance portals",
            "Enforcing transparency and capacity building across rural action and artificial insemination networks"
        ],

        previousPositions: [
            "2000-2004: Elected to Rajya Sabha",
            "2004: Member, Standing Committee on Petroleum and Chemicals; Member, Committee on Subordinate Legislation; Member, Consultative Committee for the Ministry of Coal; Elected to 14th Lok Sabha2004",
            "2007-2009: Member, Committee on Petroleum and Natural Gas; Member, Committee on Public Undertakings",
            "2008: Member, Committee on Public Accounts",
            "2009: Re-elected to 15th Lok Sabha; Member, Committee on Public Undertakings; Member, Committee on Coal and Steel; Member, Committee of Privileges",
            "2010: Member, Committee on Public Undertakings",
            "2014-2019: Member, Bihar Legislative Assembly",
            "2019: Minister, Government of Bihar; Re-elected to 17th Lok Sabha; Member, Business Advisory Committee; Member, Committee on Public Accounts; Member, Standing Committee on Energy; Member, Joint Committee on the Personal Data Protection Bill; Member, General Purposes Committee, Lok Sabha; ",
            "2020-2022: Chairperson, Standing Committee on Energy",
            "2022: Member, Consultative Committee, Ministry of Petroleum and Natural Gas; Chairperson, Standing Committee on Housing and Urban Affairs",
            "2024: Elected to 18th Lok SabhaJune 2024; Union Cabinet Minister of Panchayati Raj; and Minister of Fisheries, Animal Husbandry and Dairying"
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
                title: "Bharatiya Janata Party",
                url: "https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Shri Sarbananda Sonowal",
        photo: "/images/leaders/sonowal.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Ports, Shipping and Waterways"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Dibrugarh",
        state: "Assam",
        education: [
            "B.A., LL.B., B.C.J.",
            "Educated at D.H.S.K. College, Dibrugarh University and G.U. Law College, Gauhati University"
        ],

        dateOfBirth: new Date("1962-10-31"),

        responsibilities: [
            "Formulating policies and infrastructure development for Ports, Shipping, and Inland Waterways",
            "Overseeing the Sagarmala Programme and maritime trade competitiveness",
            "Driving green shipping initiatives, national waterways development, and seafarer welfare"
        ],

        previousPositions: [
            "2001-2004: Member, Assam Legislative Assembly",
            "2004: Elected to 14th Lok Sabha",
            "2006: Member, Committee on Commerce; Member, Consultative Committee, Ministry of Home Affairs",
            "2014: Re-elected to 16th Lok Sabha (2nd term)",
            "2014: Union Minister of State (Independent Charge) Ministry of Skill Development, Entrepreneurship, Youth Affairs and Sports",
            "2014-2016: Union Minister of State (Independent Charge) Ministry of Youth Affairs and Sports",
            "2016: Resigned",
            "2016-2021: Chief Minister of Assam",
            "2021: Union Minister for Ports ,Shipping & Waterways and Ayush; Member, Assam Legislative Assembly(2nd term); Elected to Raya Sabha;",
            "2024: Elected to 18th Lok Sabha; Union Cabinet Minister of Ports, Shipping and Waterways",

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
                title: "Bharatiya Janata Party",
                url: "https://www.bjp.org/"
            }
        ]
    },
    {
        name: "Dr. Virendra Kumar",
        photo: "/images/leaders/virendra-kumar.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Social Justice and Empowerment"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Tikamgarh (SC)",
        state: "Madhya Pradesh",

        education: [
            "M.A. (Economics)",
            "Ph.D. (Child Labour)",
            "Educated at Dr. Harisingh Gaur University, Sagar, Madhya Pradesh"
        ],

        dateOfBirth: new Date("1954-02-27"),

        responsibilities: [
            "Social Justice and Empowerment",
            "Welfare and empowerment of Scheduled Castes",
            "Welfare of Other Backward Classes",
            "Empowerment of Persons with Disabilities",
            "Welfare of Senior Citizens",
            "Social and economic empowerment of disadvantaged communities"
        ],

        previousPositions: [
            "1977-79: Convenor, Akhil Bharatiya Vidyarthi Parishad (A.B.V.P.), District Sagar, Madhya Pradesh",
            "1979-82: Divisional Organising Secretary, A.B.V.P., Rewa, Madhya Pradesh",
            "1982-84: General-Secretary, Bharatiya Janata Yuva Morcha (B.J.Y.M.), District Sagar, Madhya Pradesh",
            "1987: Convenor, Bajrang Dal, District Sagar, Madhya Pradesh",
            "1991: Secretary, Bharatiya Janata Party (B.J.P.), District Sagar, Madhya Pradesh",
            "1994: State Representative, B.J.P., Madhya Pradesh",
            "1996: Elected to 11th Lok Sabha",
            "1996-97: Member, Standing Committee on Labour and Welfare; Member, Consultative Committee, Ministry of Health and Family Welfare",
            "1998: Re-elected to 12th Lok Sabha (2nd term)",
            "1998-99: Member, Standing Committee on Labour and Welfare; Member, Joint Committee on Offices of Profit; Member, Consultative Committee, Ministry of Health and Family Welfare",
            "2009-2014: Deputy Whip in Lok Sabha (BJP)",
            "2010: Member, Committee on the Welfare of Scheduled Castes and Scheduled Tribes",
            "2014: Re-elected to 16th Lok Sabha (6th term)",
            "2014-2019: Member, Committee on Welfare of Scheduled Castes and Scheduled Tribes",
            "2014-2016: Chairperson, Standing Committee on Labour",
            "2014: Member, Consultative Committee, Ministry of Health and Family Welfare",
            "2015-2019: Member, General Purposes Committee",
            "2016-2017: Chairperson, Standing Committee on Energy",
            "2017-2019: Union Minister of State, Ministry of Women and Child Development; and Ministry of Minority Affairs",
            "2019: Re-elected to 17th Lok Sabha (7th term)",
            "2019: Speaker Pro-tem",
            "2019 onwards: Member, Standing Committee on Labour",
            "2019 onwards: Member, Indian Council of World Affairs (ICWA)",
            "2019 onwards: Chairperson, Committee on Petitions",
            "2019 onwards: Member, General Purposes Committee, Lok Sabha",
            "2019 onwards: Member, Consultative Committee, Ministry of Women and Child Development",
            "2021 onwards: Union Cabinet Minister, Ministry of Social Justice and Empowerment",
            "2024: Elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Social Justice and Empowerment"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            },
            {
                title: "Department of Empowerment of Persons with Disabilities",
                url: "https://depwd.gov.in/en/dr-virendra-kumar/"
            }
        ]
    },
    {
        name: "Shri Kinjarapu Rammohan Naidu",
        photo: "/images/leaders/rammohan-naidu.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Civil Aviation"
        ],
        party: "Telugu Desam Party",
        constituency: "Srikakulam",
        state: "Andhra Pradesh",

        education: [
            "B.S. (Electrical Engineering)",
            "M.B.A.",
            "Educated at Long Island University, New York and Purdue University, Indiana, USA"
        ],

        dateOfBirth: new Date("1987-12-18"),

        responsibilities: [
            "Civil Aviation Policy",
            "Airports and Airport Infrastructure",
            "Airline Operations",
            "Passenger Air Connectivity",
            "Air Safety and Regulation",
            "Regional Air Connectivity",
            "Development of the Civil Aviation Sector"
        ],

        previousPositions: [
            "2014: Elected to 16th Lok Sabha",
            "2014-2019: Member, Standing Committee on Home Affairs",
            "2014-2019: Member, Committee on Welfare of Other Backward Classes",
            "2017-2019: Member, Standing Committee on Railways",
            "2019: Re-elected to 17th Lok Sabha",
            "2019-2020: Member, Standing Committee on Rural Development",
            "2020 onwards: Member, Standing Committee on Agriculture, Animal Husbandry and Food Processing",
            "2020 onwards: Member, Committee on Public Undertakings",
            "2024: Re-elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Civil Aviation"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Pralhad Joshi",
        photo: "/images/leaders/parlhad-joshi.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Consumer Affairs, Food and Public Distribution",
            "Minister of New and Renewable Energy"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Dharwad",
        state: "Karnataka",

        education: [
            "B.A.",
            "Educated at K.S. Arts College, Hubli and Karnataka University, Dharwad"
        ],

        dateOfBirth: new Date("1962-11-27"),

        responsibilities: [
            "Consumer Affairs",
            "Food and Public Distribution",
            "Food Security",
            "Consumer Protection",
            "New and Renewable Energy",
            "Renewable Energy Development",
            "Promotion of Clean Energy"
        ],

        previousPositions: [
            "1995-1998: President, B.J.P., Dharwad District",
            "1998-2003: General Secretary, B.J.P., Dharwad District",
            "2004: Elected to 14th Lok Sabha",
            "2006-2013: General Secretary, B.J.P., Karnataka State Unit",
            "2009: Re-elected to 15th Lok Sabha",
            "2013 onwards: President, B.J.P., Karnataka State Unit",
            "2014: Re-elected to 16th Lok Sabha",
            "2014-2019: Chairperson, Standing Committee on Petroleum and Natural Gas",
            "2019: Re-elected to 17th Lok Sabha",
            "2019-2024: Union Cabinet Minister of Parliamentary Affairs, Coal and Mines",
            "2024: Re-elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Consumer Affairs, Food and Public Distribution; and New and Renewable Energy"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Jual Oram",
        photo: "/images/leaders/jual-oram.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Tribal Affairs"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Sundargarh",
        state: "Odisha",

        education: [
            "Diploma in Electrical Engineering",
            "Educated at Utkalmani Gopabandhu Institute of Engineering, Rourkela, Odisha"
        ],

        dateOfBirth: new Date("1961-03-22"),

        responsibilities: [
            "Tribal Welfare and Development",
            "Protection of Tribal Rights",
            "Tribal Education",
            "Tribal Healthcare",
            "Livelihood Development",
            "Development of Tribal Areas",
            "Implementation of Tribal Welfare Schemes"
        ],

        previousPositions: [
            "1990: Elected to Odisha Legislative Assembly",
            "1998: Elected to 12th Lok Sabha",
            "1998-1999: Member, Committee on Official Language",
            "1999: Re-elected to 13th Lok Sabha",
            "1999-2004: Union Minister of State, Ministry of Tribal Affairs",
            "2004: Elected to 14th Lok Sabha",
            "2004: President, B.J.P., Odisha State",
            "2006: National Vice-President, B.J.P.",
            "2009: President, B.J.P., Odisha State",
            "2012: National Vice-President and Member, Central Election Committee, B.J.P.",
            "2014: Re-elected to 16th Lok Sabha",
            "2014-2019: Union Cabinet Minister of Tribal Affairs",
            "2019: Re-elected to 17th Lok Sabha",
            "2019: Chairperson, Standing Committee on Defence",
            "2024: Re-elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Tribal Affairs"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Giriraj Singh",
        photo: "/images/leaders/giriraj-singh.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Textiles"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Begusarai",
        state: "Bihar",

        education: [
            "Graduate",
            "Educated at Magadh University"
        ],

        dateOfBirth: new Date("1952-09-08"),

        responsibilities: [
            "Textile Industry Development",
            "Handloom and Handicrafts",
            "Textile Manufacturing",
            "Promotion of Textile Exports",
            "Support for Textile Workers",
            "Development of Technical Textiles",
            "Promotion of Traditional Textile Industries"
        ],

        previousPositions: [
            "2002-2014: Member, Bihar Legislative Council",
            "2008-2010: Cooperative Minister, Government of Bihar",
            "2010-2013: Minister, Animal Husbandry and Fisheries Resource Development, Government of Bihar",
            "2014: Elected to 16th Lok Sabha",
            "2014-2017: Union Minister of State, Ministry of Micro, Small and Medium Enterprises",
            "2017-2019: Union Minister of State (Independent Charge), Ministry of Micro, Small and Medium Enterprises",
            "2019: Re-elected to 17th Lok Sabha",
            "2019-2021: Union Cabinet Minister, Ministry of Fisheries, Animal Husbandry and Dairying",
            "2021-2024: Union Cabinet Minister, Ministry of Rural Development and Ministry of Panchayati Raj",
            "2024: Re-elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Textiles"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Ashwini Vaishnaw",
        photo: "/images/leaders/ashwini-vaishaw.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Railways",
            "Minister of Information and Broadcasting",
            "Minister of Electronics and Information Technology"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Rajya Sabha, Odisha",
        state: "Odisha",

        education: [
            "B.E. (Electronics and Telecommunications)",
            "M.Tech.",
            "M.B.A.",
            "Educated at M.B.M. Engineering College, Jodhpur; IIT Kanpur; and Wharton School, University of Pennsylvania"
        ],

        dateOfBirth: new Date("1970-07-18"),

        responsibilities: [
            "Railway Infrastructure and Operations",
            "Railway Modernisation",
            "Information and Broadcasting",
            "Broadcasting Policy",
            "Digital Media and Information Technology",
            "Digital Governance",
            "Electronics Manufacturing",
            "Information Technology Development",
            "Digital Infrastructure"
        ],

        previousPositions: [
            "2019: Elected to Rajya Sabha",
            "2019-2021: Member, Committee on Science and Technology, Environment, Forests and Climate Change",
            "2019-2021: Member, Committee on Petitions",
            "2020-2021: Member, Committee on Rules",
            "2021-2024: Union Cabinet Minister of Railways, Communications and Electronics and Information Technology",
            "2024: Re-elected to Rajya Sabha",
            "2024-present: Union Cabinet Minister of Railways, Information and Broadcasting, and Electronics and Information Technology"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Jyotiraditya M. Scindia",
        photo: "/images/leaders/jyotiraditya-scindia.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Communications",
            "Minister of Development of North Eastern Region"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Guna",
        state: "Madhya Pradesh",

        education: [
            "B.A.",
            "M.B.A.",
            "Educated at Doon School, Dehradun, Harvard University and Stanford University, USA"
        ],

        dateOfBirth: new Date("1971-01-01"),

        responsibilities: [
            "Telecommunications Policy",
            "Digital Connectivity",
            "Telecom Infrastructure",
            "Postal Services",
            "Development of North Eastern States",
            "North Eastern Infrastructure",
            "Economic Development of the North Eastern Region",
            "Promotion of Investment in the North East"
        ],

        previousPositions: [
            "2002: Elected to 13th Lok Sabha",
            "2004: Re-elected to 14th Lok Sabha",
            "2006-2009: Minister of State, Ministry of Communications and Information Technology",
            "2009: Re-elected to 15th Lok Sabha",
            "2009-2012: Minister of State, Ministry of Commerce and Industry",
            "2012-2014: Minister of State (Independent Charge), Ministry of Power",
            "2014: Re-elected to 16th Lok Sabha",
            "2020: Elected to Rajya Sabha",
            "2021-2022: Union Cabinet Minister of Civil Aviation",
            "2022-2024: Union Minister of Steel",
            "2024: Elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Communications and Development of North Eastern Region"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Bhupender Yadav",
        photo: "/images/leaders/bhupender-yadav.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Environment, Forest and Climate Change"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Alwar",
        state: "Rajasthan",

        education: [
            "B.A.",
            "LL.B.",
            "Educated at Government College, Ajmer, Rajasthan"
        ],

        dateOfBirth: new Date("1969-06-30"),

        responsibilities: [
            "Environmental Protection",
            "Forest Conservation",
            "Climate Change Policy",
            "Wildlife Conservation",
            "Biodiversity Protection",
            "Pollution Control",
            "Environmental Regulation",
            "Sustainable Development"
        ],

        previousPositions: [
            "2012: Elected to Rajya Sabha",
            "2012-2021: Member of various Parliamentary Committees",
            "2015: Chairman, Select Committee on the Mines and Minerals Amendment Bill",
            "2016: Chairman, Joint Committee on the Insolvency and Bankruptcy Code",
            "2017: Chairman, Committee on the Constitution Amendment Bill",
            "2017-2018: Chairman, Joint Committee on the Financial Resolution and Deposit Insurance Bill",
            "2018: Re-elected to Rajya Sabha",
            "2019-2021: Chairman, Committee on Personnel, Public Grievances, Law and Justice",
            "2021-2024: Union Cabinet Minister of Environment, Forest and Climate Change; and Labour and Employment",
            "2024: Elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Environment, Forest and Climate Change"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Gajendra Singh Shekhawat",
        photo: "/images/leaders/gajendra-singh-shekhawat.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Culture",
            "Minister of Tourism"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Jodhpur",
        state: "Rajasthan",

        education: [
            "M.A. (Philosophy)",
            "Educated at Jai Narain Vyas University, Jodhpur, Rajasthan"
        ],

        dateOfBirth: new Date("1967-10-03"),

        responsibilities: [
            "Promotion of Indian Culture",
            "Protection of Cultural Heritage",
            "Museums and Heritage Institutions",
            "Archaeological and Cultural Conservation",
            "Tourism Development",
            "Promotion of Domestic Tourism",
            "International Tourism Promotion",
            "Tourism Infrastructure"
        ],

        previousPositions: [
            "2014: Elected to 16th Lok Sabha",
            "2014-2017: Member, Standing Committee on Finance",
            "2017-2019: Union Minister of State, Ministry of Agriculture and Farmers Welfare",
            "2019: Re-elected to 17th Lok Sabha",
            "2019-2024: Union Cabinet Minister of Jal Shakti",
            "2024: Re-elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Culture and Tourism"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Smt. Annpurna Devi",
        photo: "/images/leaders/annapurna-devi.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Women and Child Development"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Kodarma",
        state: "Jharkhand",

        education: [
            "Post Graduate",
            "Educated at Ranchi University, Jharkhand"
        ],

        dateOfBirth: new Date("1970-02-02"),

        responsibilities: [
            "Women Empowerment",
            "Child Welfare",
            "Child Protection",
            "Nutrition and Early Childhood Development",
            "Women and Child Safety",
            "Support for Women and Children",
            "Implementation of Women and Child Welfare Schemes"
        ],

        previousPositions: [
            "1998-2000: Member, Bihar Legislative Assembly",
            "2000-2005: Member, Bihar/Jharkhand Legislative Assembly",
            "2000: Minister of State, Ministry of Mines and Geology, Government of Bihar",
            "2005-2014: Member, Jharkhand Legislative Assembly",
            "2005-2009: Chairperson, Committee on Women and Child Welfare, Jharkhand Legislative Assembly",
            "2012-2014: Cabinet Minister, Government of Jharkhand",
            "2019: Elected to 17th Lok Sabha",
            "2021-2024: Union Minister of State, Ministry of Education",
            "2024: Elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Women and Child Development"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Kiren Rijiju",
        photo: "/images/leaders/kiren-rijiju.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Parliamentary Affairs",
            "Minister of Minority Affairs"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Arunachal West",
        state: "Arunachal Pradesh",

        education: [
            "B.A.",
            "LL.B.",
            "Educated at Hansraj College and Campus Law Centre, University of Delhi"
        ],

        dateOfBirth: new Date("1971-11-19"),

        responsibilities: [
            "Coordination of Parliamentary Business",
            "Government-Legislature Coordination",
            "Parliamentary Affairs",
            "Minority Welfare",
            "Educational and Economic Empowerment of Minorities",
            "Minority Community Development",
            "Implementation of Minority Welfare Schemes"
        ],

        previousPositions: [
            "2004: Elected to 14th Lok Sabha",
            "2007: Member, Standing Committee on Energy",
            "2014: Re-elected to 16th Lok Sabha",
            "2014-2019: Union Minister of State, Home Affairs",
            "2019: Re-elected to 17th Lok Sabha",
            "2019-2021: Union Minister of State (Independent Charge), Youth Affairs and Sports; and Minister of State, Minority Affairs",
            "2021-2023: Union Cabinet Minister of Law and Justice",
            "2023-2024: Union Minister of Earth Sciences",
            "2024: Elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Parliamentary Affairs and Minority Affairs"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Hardeep Singh Puri",
        photo: "/images/leaders/hardeep-singh-puri.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Petroleum and Natural Gas"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Rajya Sabha, Uttar Pradesh",
        state: "Uttar Pradesh",

        education: [
            "B.A. (History)",
            "M.A. (History)",
            "Educated at Hindu College, University of Delhi"
        ],

        dateOfBirth: new Date("1952-02-15"),

        responsibilities: [
            "Petroleum Policy",
            "Natural Gas Sector",
            "Oil and Gas Exploration",
            "Fuel Supply and Distribution",
            "Petroleum Pricing and Regulation",
            "Energy Security",
            "Refining and Petroleum Infrastructure",
            "Promotion of Cleaner Fuels"
        ],

        previousPositions: [
            "1974: Joined Indian Foreign Service",
            "1994-1997: Joint Secretary, Ministry of External Affairs",
            "1997-1999: Joint Secretary, Ministry of Defence",
            "1999-2002: Joint Secretary, Ministry of External Affairs",
            "2002-2005: Ambassador and Permanent Representative of India to the United Nations",
            "2009-2013: Permanent Representative of India to the United Nations",
            "2013: Retired from Indian Foreign Service",
            "2017: Appointed Minister of State for Housing and Urban Affairs",
            "2018: Elected to Rajya Sabha",
            "2019-2021: Minister of State (Independent Charge), Civil Aviation",
            "2021-2024: Union Cabinet Minister of Petroleum and Natural Gas; and Housing and Urban Affairs",
            "2024: Re-elected to Rajya Sabha",
            "2024-present: Union Cabinet Minister of Petroleum and Natural Gas"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Dr. Mansukh Mandaviya",
        photo: "/images/leaders/mansukh-mandaviya.png",
        category: "Cabinet Minister",
        designation: [
            "Minister of Labour and Employment",
            "Minister of Youth Affairs and Sports"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Porbandar",
        state: "Gujarat",

        education: [
            "Ph.D.",
            "Educated at Maharaja Krishnakumarsinhji Bhavnagar University, Gujarat"
        ],

        dateOfBirth: new Date("1972-06-01"),

        responsibilities: [
            "Labour Policy",
            "Employment Generation",
            "Workers' Welfare",
            "Labour Rights and Social Security",
            "Youth Development",
            "Youth Employment and Skills",
            "Sports Development",
            "Sports Infrastructure",
            "Promotion of Sports and Physical Activity"
        ],

        previousPositions: [
            "2002-2007: Member, Gujarat Legislative Assembly",
            "2011-2012: Chairman, Gujarat Agro Industries Corporation",
            "2012: Elected to Rajya Sabha",
            "2015-2016: Member, Committee on Chemicals and Fertilizers",
            "2016-2019: Minister of State in various Union Ministries",
            "2018: Re-elected to Rajya Sabha",
            "2019-2021: Minister of State (Independent Charge), Ministry of Ports, Shipping and Waterways",
            "2021-2024: Union Cabinet Minister of Health and Family Welfare; and Chemicals and Fertilizers",
            "2024: Elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Labour and Employment; and Youth Affairs and Sports"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri G. Kishan Reddy",
        photo: "/images/leaders/g-kishan-reddy.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Coal",
            "Minister of Mines"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Secunderabad",
        state: "Telangana",

        education: [
            "Diploma in Tool Engineering",
            "Educated at Central Institute of Tool Engineering, Balanagar, Hyderabad"
        ],

        dateOfBirth: new Date("1960-06-15"),

        responsibilities: [
            "Coal Production and Supply",
            "Coal Sector Development",
            "Mining Policy",
            "Mineral Exploration",
            "Mineral Resource Management",
            "Mining Sector Regulation",
            "Development of Mineral Industries",
            "Support for Energy Security"
        ],

        previousPositions: [
            "2004: Elected to Andhra Pradesh Legislative Assembly",
            "2009: Re-elected to Andhra Pradesh Legislative Assembly",
            "2014: Elected to 16th Lok Sabha",
            "2018: President, Telangana State B.J.P.",
            "2019: Re-elected to 17th Lok Sabha",
            "2019-2021: Union Minister of State, Home Affairs",
            "2021-2024: Union Cabinet Minister of Culture, Tourism and Development of North Eastern Region",
            "2024: Elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Coal and Mines"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            }
        ]
    },

    {
        name: "Shri Chirag Paswan",
        photo: "/images/leaders/chirag-paswan.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Food Processing Industries"
        ],
        party: "Lok Janshakti Party (Ram Vilas)",
        constituency: "Hajipur",
        state: "Bihar",

        education: [
            "B.Tech. (Computer Science)"
        ],

        dateOfBirth: new Date("1982-10-31"),

        responsibilities: [
            "Food Processing Industry Development",
            "Food Processing Infrastructure",
            "Value Addition in Agriculture",
            "Food Processing Technology",
            "Cold Chain Development",
            "Food Preservation",
            "Promotion of Food Processing Enterprises",
            "Employment Generation in Food Processing"
        ],

        previousPositions: [
            "2014: Elected to 16th Lok Sabha",
            "2014-2019: Member, Standing Committee on Health and Family Welfare",
            "2015-2019: Member, various Parliamentary Committees",
            "2019: Re-elected to 17th Lok Sabha",
            "2019-2020: Member, Standing Committee on Personnel, Public Grievances, Law and Justice",
            "2019 onwards: Member, General Purposes Committee, Lok Sabha",
            "2020 onwards: Member, Standing Committee on Industry",
            "2024: Elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Food Processing Industries"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
            },
        ]
    },

    {
        name: "Shri Chandrakant Raghunath Patil",
        photo: "/images/leaders/chandrakant-patil.jpg",
        category: "Cabinet Minister",
        designation: [
            "Minister of Jal Shakti"
        ],
        party: "Bharatiya Janata Party",
        constituency: "Navsari",
        state: "Gujarat",

        education: [
            "I.T.I.",
            "Educated at Industrial Training Institute, Surat"
        ],

        dateOfBirth: new Date("1955-03-16"),

        responsibilities: [
            "Water Resources Management",
            "Drinking Water Supply",
            "Water Conservation",
            "River Development",
            "Irrigation",
            "Groundwater Management",
            "Clean Drinking Water Initiatives",
            "Water Security",
            "Jal Jeevan Mission"
        ],

        previousPositions: [
            "2010: Elected to Lok Sabha",
            "2014: Re-elected to Lok Sabha",
            "2019: Re-elected to 17th Lok Sabha",
            "2019-2024: President, Bharatiya Janata Party, Gujarat",
            "2019-2024: Member of various Parliamentary Committees",
            "2024: Re-elected to 18th Lok Sabha",
            "2024-present: Union Cabinet Minister of Jal Shakti"
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
                title: "Digital Sansad",
                url: "https://sansad.in/ls/members/biography/515?from=members"
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