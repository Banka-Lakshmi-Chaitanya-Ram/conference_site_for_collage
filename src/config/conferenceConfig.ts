/**
 * ICVLIC Conference Central Configuration
 * 
 * Vignan's Foundation for Science, Technology & Research (Deemed to be University)
 * 
 * This file serves as the single source of truth for all conference metadata,
 * committee rosters, submission deadlines, registration fees, and campus venue information.
 * Any update made here immediately propagates across the entire site without code changes.
 */

export interface DeadlineItem {
  id: string;
  label: string;
  date: string;
  isConfirmed: boolean;
  status?: 'upcoming' | 'open' | 'extended' | 'passed' | 'tba';
  note?: string;
}

export interface ResearchTrack {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  institution: string;
  photo?: string;
  talkTitle?: string;
  abstract?: string;
  bio?: string;
  isKeynote?: boolean;
}

export interface CommitteeMember {
  name: string;
  role?: string;
  department?: string;
  institution: string;
}

export interface CommitteeCategory {
  id: string;
  title: string;
  description?: string;
  members: CommitteeMember[];
}

export interface ScheduleSession {
  time: string;
  title: string;
  description?: string;
  speaker?: string;
  chair?: string;
  location: string;
  type: 'keynote' | 'oral' | 'inauguration' | 'break' | 'workshop' | 'panel' | 'valedictory';
}

export interface ScheduleDay {
  dayId: string;
  dayNumber: number;
  dateLabel: string;
  title: string;
  sessions: ScheduleSession[];
}

export interface RegistrationTier {
  category: string;
  earlyFee: string;
  regularFee: string;
  currency: string;
  notes?: string;
}

export interface ConferenceConfig {
  conference: {
    acronym: string;
    fullName: string;
    theme: string;
    edition?: string;
    statusBadge: string;
    overview: string[];
    objectives: string[];
    intendedAudience: string[];
    organizingUnit: string;
    branding: {
      universityLogo: string;
      universityFullLogo: string;
      conferenceLogo?: string;
    };
    dates: {
      displayDates: string;
      isConfirmed: boolean;
    };
    portals: {
      submissionUrl: string;
      submissionStatus: 'active' | 'upcoming' | 'closed';
      registrationUrl: string;
      registrationStatus: 'active' | 'upcoming' | 'closed';
      templateDownloadUrl?: string;
      copyrightDownloadUrl?: string;
    };
  };
  university: {
    name: string;
    shortName: string;
    status: string;
    tagline: string;
    establishedNote: string;
    websiteUrl: string;
    campusMainPhoto: string;
    campusBuildingPhoto: string;
    overview: string[];
    highlights: Array<{ label: string; value: string }>;
    locationSummary: string;
  };
  deadlines: DeadlineItem[];
  callForPapers: {
    intro: string;
    guidelines: string[];
    plagiarismPolicy: string;
    reviewPolicy: string;
    publicationNote: string;
    tracks: ResearchTrack[];
  };
  speakers: Speaker[];
  committees: CommitteeCategory[];
  program: {
    isPublished: boolean;
    announcementNote: string;
    days: ScheduleDay[];
  };
  registration: {
    currency: string;
    inclusions: string[];
    instructions: string[];
    tiers: RegistrationTier[];
    note: string;
  };
  venue: {
    title: string;
    institution: string;
    auditorium?: string;
    address: {
      street: string;
      locality: string;
      city: string;
      district: string;
      state: string;
      pincode: string;
      country: string;
    };
    transportation: Array<{
      mode: string;
      title: string;
      description: string;
      distance: string;
    }>;
    accommodationNote: string;
    mapEmbedUrl?: string;
  };
  contact: {
    primaryEmail: string;
    secondaryEmail?: string;
    phone?: string;
    convenorName?: string;
    officeLocation: string;
    workingHours: string;
  };
}

export const conferenceConfig: ConferenceConfig = {
  conference: {
    acronym: "ICVLIC",
    fullName: "International Conference on VLSI, Learning, Intelligent Systems & Communication (ICVLIC)",
    theme: "Advancing Frontiers in Intelligent Computing, VLSI Architecture & Next-Generation Systems",
    statusBadge: "Call for Papers Open",
    overview: [
      "The International Conference on ICVLIC, hosted by Vignan's Foundation for Science, Technology & Research (Deemed to be University), provides a premier international forum for researchers, academicians, and industry engineers to present state-of-the-art research results and innovative paradigms.",
      "The conference emphasizes rigorous peer review, cross-disciplinary collaboration, and technological breakthroughs across VLSI design, intelligent systems, computational intelligence, communication networks, and emerging engineering applications."
    ],
    objectives: [
      "Foster high-impact scholarly interaction between international researchers, academic faculty, and industry pioneers.",
      "Disseminate novel theoretical discoveries and experimental engineering developments.",
      "Provide a rigorous peer-reviewed platform for research scholars and students to discuss cutting-edge solutions for real-world engineering challenges.",
      "Catalyze collaborative research partnerships and inter-institutional initiatives."
    ],
    intendedAudience: [
      "University Faculty & Academic Researchers",
      "Doctoral & Postgraduate Scholars",
      "Industry Engineers & R&D Technologists",
      "Undergraduate Innovators & Student Researchers"
    ],
    organizingUnit: "Organized by the Department of Electronics and Communication Engineering & Allied Schools",
    branding: {
      universityLogo: "/assets/branding/vfstr-logo.png",
      universityFullLogo: "/assets/branding/vfstr-full-logo.png",
      conferenceLogo: "" // Will display stylish textual ICVLIC branding until custom mark is uploaded
    },
    dates: {
      displayDates: "Dates To Be Announced (Upcoming)",
      isConfirmed: false
    },
    portals: {
      submissionUrl: "https://cmt3.research.microsoft.com", // Configurable Microsoft CMT / EasyChair portal
      submissionStatus: "upcoming",
      registrationUrl: "#registration",
      registrationStatus: "upcoming",
      templateDownloadUrl: "",
      copyrightDownloadUrl: ""
    }
  },

  university: {
    name: "Vignan's Foundation for Science, Technology & Research (Deemed to be University)",
    shortName: "VFSTR",
    status: "Deemed to be University u/s 3 of UGC Act 1956",
    tagline: "Centre of Excellence in Technical & Higher Education",
    establishedNote: "Accredited with NAAC 'A+' Grade | Vadlamudi, Guntur, Andhra Pradesh, India",
    websiteUrl: "https://www.vignan.ac.in",
    campusMainPhoto: "/assets/campus/campus-main.jpg",
    campusBuildingPhoto: "/assets/campus/campus-building.jpg",
    overview: [
      "Vignan's Foundation for Science, Technology & Research (Deemed to be University) is located in Vadlamudi, Guntur district of Andhra Pradesh. The institution is dedicated to providing quality education in engineering, technology, applied sciences, and management.",
      "Surrounded by lush green campus environs, the university boasts modern academic infrastructure, advanced research laboratories, digital libraries, and state-of-the-art convention facilities that host prestigious national and international academic symposiums."
    ],
    highlights: [
      { label: "Institutional Status", value: "Deemed to be University" },
      { label: "NAAC Accreditation", value: "A+ Grade" },
      { label: "Location", value: "Vadlamudi, Guntur District, AP, India" },
      { label: "Campus Setting", value: "Serene 42+ Acre Green Campus" }
    ],
    locationSummary: "Vadlamudi, Guntur - Tenali Road, Andhra Pradesh, India"
  },

  deadlines: [
    {
      id: "submission-open",
      label: "Paper Submission Opens",
      date: "To Be Announced",
      isConfirmed: false,
      status: "tba",
      note: "Online paper submission portal will open upon schedule approval"
    },
    {
      id: "submission-deadline",
      label: "Full Paper Submission Deadline",
      date: "To Be Announced",
      isConfirmed: false,
      status: "tba",
      note: "Strict deadline for regular research articles"
    },
    {
      id: "acceptance-notification",
      label: "Notification of Acceptance",
      date: "To Be Announced",
      isConfirmed: false,
      status: "tba",
      note: "Peer-review outcomes delivered via portal"
    },
    {
      id: "camera-ready",
      label: "Final Camera-Ready Submission",
      date: "To Be Announced",
      isConfirmed: false,
      status: "tba",
      note: "Final manuscript with reviewer corrections & copyright"
    },
    {
      id: "early-registration",
      label: "Early-Bird Registration Deadline",
      date: "To Be Announced",
      isConfirmed: false,
      status: "tba",
      note: "Discounted registration rate for early authors"
    },
    {
      id: "conference-dates",
      label: "Conference Dates",
      date: "To Be Announced",
      isConfirmed: false,
      status: "tba",
      note: "Inaugural and technical presentation sessions"
    }
  ],

  callForPapers: {
    intro: "ICVLIC invites original, high-quality, and previously unpublished research papers in theoretical, experimental, and applied domains. Submissions should demonstrate sound methodology, novel technical contributions, and practical significance.",
    guidelines: [
      "All submitted papers must represent original work that has not been submitted or published elsewhere.",
      "Submissions should be prepared in standard double-column conference format (IEEE / Springer compatible style).",
      "Manuscripts must be submitted in PDF format via the official submission portal.",
      "Maximum paper length is typically 6 pages including figures, tables, and references.",
      "All submissions will undergo a rigorous double-blind peer-review process by the Technical Program Committee."
    ],
    plagiarismPolicy: "The conference strictly adheres to academic integrity standards. Any paper showing significant text overlap or plagiarism will be rejected immediately without review.",
    reviewPolicy: "Each paper is reviewed by at least two independent expert reviewers. Acceptance decisions are made based on novelty, technical depth, empirical validation, and clarity of presentation.",
    publicationNote: "Official proceedings publication and indexing agreements are currently under formal arrangement with premier international academic publisher series. The final indexed proceedings details will be published here upon official confirmation.",
    tracks: [
      {
        id: "track-1",
        title: "Track 1: VLSI Design, Circuits & Embedded Systems",
        description: "Low-power architectures, analog/digital VLSI, FPGA prototyping, and embedded cyber-physical systems.",
        topics: [
          "Low-Power Analog & Mixed-Signal IC Design",
          "Digital VLSI Architectures & System-on-Chip (SoC)",
          "FPGA Prototyping, Synthesis & Reconfigurable Computing",
          "Hardware Security, Cryptography & Fault Tolerance",
          "Embedded Systems, RTOS & Real-Time Sensor Processing",
          "Emerging Semiconductor Devices & MEMS/NEMS"
        ]
      },
      {
        id: "track-2",
        title: "Track 2: Artificial Intelligence & Machine Learning",
        description: "Theoretical frameworks, deep neural architectures, generative models, and computer vision paradigms.",
        topics: [
          "Deep Learning, Representation Learning & Generative Models",
          "Computer Vision, Object Detection & Scene Understanding",
          "Natural Language Processing & Multilingual Systems",
          "Explainable AI (XAI) & Ethical Machine Learning",
          "Reinforcement Learning, Robotics & Autonomous Systems",
          "Biomedical Image Analytics & Computational Biology"
        ]
      },
      {
        id: "track-3",
        title: "Track 3: Intelligent Computing & Data Engineering",
        description: "Cloud, edge, distributed intelligence, big data analytics, and optimization algorithms.",
        topics: [
          "Edge AI, TinyML & Mobile Intelligence",
          "Big Data Analytics, Stream Processing & Data Mining",
          "Evolutionary Computation & Nature-Inspired Optimization",
          "Cloud & High-Performance Distributed Computing",
          "Cognitive Computing & Decision Support Systems",
          "Smart Grid Analytics & Energy-Efficient Computing"
        ]
      },
      {
        id: "track-4",
        title: "Track 4: Next-Generation Communication & IoT",
        description: "Wireless sensor networks, 5G/6G systems, Internet of Things, and vehicular communication.",
        topics: [
          "5G/6G Wireless Networks, MIMO & Beamforming",
          "IoT Architectures, Smart Cities & Industrial Automation",
          "Cognitive Radio, Spectrum Sensing & SDR",
          "Optical & Satellite Communication Systems",
          "Network Security, Privacy & Blockchain for IoT",
          "Vehicular Ad-hoc Networks (VANET) & Intelligent Transport"
        ]
      }
    ]
  },

  speakers: [
    {
      id: "speaker-slot-1",
      name: "Distinguished Keynote Speaker (TBA)",
      role: "Keynote Address",
      institution: "Invited International Scholar",
      talkTitle: "Frontiers in Advanced Computing & Emerging Systems",
      abstract: "Details regarding the keynote lecture will be officially announced following formal confirmation from the speaker.",
      bio: "An internationally acclaimed researcher and educator in emerging engineering sciences.",
      isKeynote: true
    },
    {
      id: "speaker-slot-2",
      name: "Invited Plenary Speaker (TBA)",
      role: "Plenary Address",
      institution: "Leading Research Institution / Industry Leader",
      talkTitle: "Next-Generation Architectures & Technological Innovations",
      abstract: "The plenary session will cover recent breakthrough engineering paradigms and cross-disciplinary applications.",
      bio: "Distinguished academician with profound contributions to industry and research publications.",
      isKeynote: true
    }
  ],

  committees: [
    {
      id: "chief-patron",
      title: "Chief Patron",
      members: [
        {
          name: "Dr. L. Rathaiah",
          role: "Hon'ble Chairman",
          institution: "Vignan Group of Institutions"
        }
      ]
    },
    {
      id: "patrons",
      title: "Patrons",
      members: [
        {
          name: "Dr. P. Nagabhushan",
          role: "Vice Chancellor",
          institution: "Vignan's Foundation for Science, Technology & Research"
        },
        {
          name: "Shri B. Shravan",
          role: "Chief Executive Officer",
          institution: "Vignan Group of Institutions"
        }
      ]
    },
    {
      id: "general-chairs",
      title: "General Chairs",
      members: [
        {
          name: "Prof. / Dr. General Chair (TBA)",
          role: "Dean / Senior Professor",
          department: "School of Computing & Informatics",
          institution: "Vignan's Foundation for Science, Technology & Research"
        }
      ]
    },
    {
      id: "conference-chairs",
      title: "Conference & Organizing Chairs",
      members: [
        {
          name: "Prof. / Dr. Conference Chair (TBA)",
          role: "Head of the Department",
          department: "Department of Electronics and Communication Engineering",
          institution: "Vignan's Foundation for Science, Technology & Research"
        }
      ]
    },
    {
      id: "technical-program-committee",
      title: "Technical Program & Advisory Committee",
      description: "Comprising eminent academicians and reviewers from premier IITs, NITs, and international universities.",
      members: [
        {
          name: "Technical Program Committee (Roster being finalized)",
          role: "Reviewers & Area Chairs",
          institution: "Distinguished National & International Faculty"
        }
      ]
    }
  ],

  program: {
    isPublished: false,
    announcementNote: "The complete technical session schedule will be released after the paper review and camera-ready submission process is concluded.",
    days: [
      {
        dayId: "day-1",
        dayNumber: 1,
        dateLabel: "Day 1 (Inauguration & Technical Tracks)",
        title: "Inauguration, Keynote Speeches & Technical Sessions",
        sessions: [
          {
            time: "09:00 AM - 10:00 AM",
            title: "Registration & Welcome Reception",
            description: "Distribution of delegate kits and badge collection.",
            location: "Convention Foyer, Main Building",
            type: "inauguration"
          },
          {
            time: "10:00 AM - 11:30 AM",
            title: "Inaugural Ceremony & Lighting of the Lamp",
            description: "Opening addresses by University Dignitaries and Chief Guest.",
            location: "Main University Auditorium",
            type: "inauguration"
          },
          {
            time: "11:45 AM - 01:00 PM",
            title: "Keynote Address I",
            description: "Keynote lecture by invited international researcher.",
            speaker: "Invited Keynote Speaker",
            location: "Main University Auditorium",
            type: "keynote"
          },
          {
            time: "02:00 PM - 05:00 PM",
            title: "Parallel Oral Presentation Sessions (Tracks 1 & 2)",
            description: "Peer-reviewed research paper presentations with Q&A.",
            location: "Seminar Halls A & B",
            type: "oral"
          }
        ]
      },
      {
        dayId: "day-2",
        dayNumber: 2,
        dateLabel: "Day 2 (Plenary & Valedictory)",
        title: "Plenary Lectures, Parallel Sessions & Valedictory Ceremony",
        sessions: [
          {
            time: "09:30 AM - 10:45 AM",
            title: "Plenary Address II",
            description: "Plenary talk on contemporary engineering frontiers.",
            speaker: "Invited Plenary Speaker",
            location: "Main University Auditorium",
            type: "keynote"
          },
          {
            time: "11:00 AM - 01:00 PM",
            title: "Parallel Oral Presentation Sessions (Tracks 3 & 4)",
            description: "Paper presentations in parallel tracks evaluated by session chairs.",
            location: "Seminar Halls C & D",
            type: "oral"
          },
          {
            time: "02:30 PM - 04:30 PM",
            title: "Valedictory Ceremony & Best Paper Awards",
            description: "Presentation of best paper awards, certificates, and closing remarks.",
            location: "Main University Auditorium",
            type: "valedictory"
          }
        ]
      }
    ]
  },

  registration: {
    currency: "INR (₹) / USD ($)",
    inclusions: [
      "Access to all technical sessions, keynote lectures, and plenary addresses",
      "Official conference delegate kit and presentation badge",
      "Certificate of paper presentation / participation",
      "Lunch, refreshments, and banquet during conference days",
      "Digital proceedings bundle"
    ],
    instructions: [
      "At least one author of each accepted paper must register at the Author rate to ensure inclusion in the conference proceedings.",
      "Student authors must present a valid student ID card issued by their academic institution during registration.",
      "Registration link and official payment instructions will be activated upon release of acceptance notifications."
    ],
    note: "Official registration fee schedule is provisional and subject to formal ratification by the organizing finance committee.",
    tiers: [
      {
        category: "Faculty / Academician (Author)",
        earlyFee: "₹6,000 / $150",
        regularFee: "₹7,500 / $200",
        currency: "INR / USD",
        notes: "Includes full presentation rights & conference kit"
      },
      {
        category: "Research Scholar / Student (Author)",
        earlyFee: "₹4,500 / $100",
        regularFee: "₹5,500 / $130",
        currency: "INR / USD",
        notes: "Valid student identity proof required"
      },
      {
        category: "Industry Delegate (Author / Attendee)",
        earlyFee: "₹8,000 / $250",
        regularFee: "₹10,000 / $300",
        currency: "INR / USD",
        notes: "Industry & corporate R&D representatives"
      },
      {
        category: "Non-Author Delegate / Attendee",
        earlyFee: "₹2,500 / $60",
        regularFee: "₹3,000 / $80",
        currency: "INR / USD",
        notes: "Session participation & certificate of attendance"
      }
    ]
  },

  venue: {
    title: "Conference Venue",
    institution: "Vignan's Foundation for Science, Technology & Research (Deemed to be University)",
    auditorium: "Main University Convention Centre & Seminar Complex",
    address: {
      street: "Guntur - Tenali Road",
      locality: "Vadlamudi",
      city: "Guntur",
      district: "Guntur District",
      state: "Andhra Pradesh",
      pincode: "522213",
      country: "India"
    },
    transportation: [
      {
        mode: "Air",
        title: "Vijayawada International Airport (VGA)",
        description: "The nearest airport is Vijayawada Airport (Gannavaram), located approximately 55 km from the campus with direct domestic connections.",
        distance: "Approx. 55 km"
      },
      {
        mode: "Rail (Tenali)",
        title: "Tenali Junction Railway Station (TEL)",
        description: "Tenali is a major rail junction on the Howrah-Chennai mainline, well connected to major Indian cities. Auto-rickshaws and buses operate frequently to Vadlamudi.",
        distance: "Approx. 14 km"
      },
      {
        mode: "Rail (Guntur)",
        title: "Guntur Junction Railway Station (GNT)",
        description: "Guntur is another major railway hub with convenient express train connections and regular road transport to Vadlamudi campus.",
        distance: "Approx. 16 km"
      },
      {
        mode: "Road",
        title: "State Highway & Bus Services",
        description: "Frequent Andhra Pradesh State Road Transport Corporation (APSRTC) buses and university transit vehicles ply between Guntur, Tenali, and Vadlamudi.",
        distance: "Direct road access"
      }
    ],
    accommodationNote: "Limited on-campus guest house accommodation may be available for keynote speakers and outstation delegates upon prior request. Several star hotels and budget lodges are available in Guntur and Tenali."
  },

  contact: {
    primaryEmail: "icvlic@vignan.ac.in",
    secondaryEmail: "dean_research@vignan.ac.in",
    phone: "+91 863 2344700 / 701",
    convenorName: "Conference Secretariat, ICVLIC",
    officeLocation: "Department of Electronics & Communication Engineering, Main Academic Block, VFSTR, Vadlamudi, Guntur - 522213",
    workingHours: "Monday to Saturday: 09:00 AM - 05:00 PM IST"
  }
};
