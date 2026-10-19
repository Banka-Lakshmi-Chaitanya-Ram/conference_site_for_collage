/**
 * ICVLIC Conference Central Configuration
 * 
 * Source: https://icvlic.vuaiadoption.xyz/
 * International Conference on Vision, Language and Intelligent Computing (ICVLIC)
 * Organized by Dept. of AIML, VFSTR
 * Vignan's Foundation for Science, Technology and Research (Deemed to be University)
 * Vadlamudi, Guntur, Andhra Pradesh, India
 * 
 * Single source of truth for all conference metadata, tracks, committees,
 * deadlines, registration policies, and venue details.
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
  number: string;
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
  status: string;
  description?: string;
  members?: CommitteeMember[];
}

export interface RegistrationCategory {
  category: string;
  fee: string;
}

export interface SubmissionWorkflowStep {
  stage: string;
  detail: string;
}

export interface ConferenceConfig {
  conference: {
    acronym: string;
    shortName: string;
    fullName: string;
    tagline: string;
    themeLine: string;
    statusBadge: string;
    organizingUnit: string;
    location: string;
    quickFacts: {
      edition: string;
      dates: string;
      venue: string;
      submissionDeadline: string;
    };
    branding: {
      universityLogo: string;
      heroImage: string;
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
    };
    about: {
      heading: string;
      body: string;
      objectivesHeading: string;
      objectives: string[];
      whyConference: {
        heading: string;
        items: Array<{ title: string; description: string }>;
      };
    };
  };
  university: {
    name: string;
    shortName: string;
    organizingDept: string;
    location: string;
    heading: string;
    body: string;
    campusPhotoNote: string;
    websiteUrl: string;
  };
  deadlines: DeadlineItem[];
  callForPapers: {
    title: string;
    intro: string;
    tracksIntro: string;
    tracks: ResearchTrack[];
    policiesHeading: string;
    policies: {
      originality: string;
      peerReview: string;
      researchEthics: string;
    };
    publicationNote: string;
    submissionPortalNote: string;
  };
  submissionGuidelines: {
    title: string;
    requirementsHeading: string;
    requirements: string[];
    workflowHeading: string;
    workflow: SubmissionWorkflowStep[];
  };
  speakers: Speaker[];
  committees: CommitteeCategory[];
  registration: {
    intro: string;
    status: string;
    categories: RegistrationCategory[];
  };
  publication: {
    heading: string;
    subheading: string;
    body: string;
  };
  venue: {
    title: string;
    hostingInstitution: string;
    organizingDepartment: string;
    location: string;
    campusAddress: string;
    mapUrl: string;
    travelNote: string;
  };
  contact: {
    heading: string;
    organizingCommittee: string;
    institution: string;
    address: string;
    officialEmail: string;
    contactPersons: string;
  };
  privacyPolicy: {
    title: string;
    text: string;
  };
  footer: {
    brand: string;
    fullName: string;
    tagline: string;
    organizedBy: string;
    copyright: string;
  };
}

export const getAssetUrl = (path: string): string => {
  const rawBase = import.meta.env.BASE_URL || './';
  const base = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return base ? `${base}/${cleanPath}` : `/${cleanPath}`;
};

export const conferenceConfig: ConferenceConfig = {
  conference: {
    acronym: "ICVLIC",
    shortName: "ICVLIC.",
    fullName: "International Conference on Vision, Language and Intelligent Computing (ICVLIC)",
    tagline: "Connecting Vision, Language and Intelligence for a Smarter Future",
    themeLine: "AI Innovation • Multimodal Intelligence • Next-Generation Computing",
    statusBadge: "To be announced",
    organizingUnit: "Dept. of AIML, VFSTR",
    location: "Vadlamudi, Guntur, Andhra Pradesh, India",
    quickFacts: {
      edition: "To be announced",
      dates: "To be announced",
      venue: "To be announced",
      submissionDeadline: "To be announced"
    },
    branding: {
      universityLogo: getAssetUrl("assets/branding/vignan-logo.png"),
      heroImage: getAssetUrl("assets/hero-ai-BraBLwT5.jpg"),
      conferenceLogo: ""
    },
    dates: {
      displayDates: "To be announced",
      isConfirmed: false
    },
    portals: {
      submissionUrl: "#",
      submissionStatus: "upcoming",
      registrationUrl: "#registration",
      registrationStatus: "upcoming"
    },
    about: {
      heading: "Advancing the Frontiers of Intelligent Computing",
      body: "ICVLIC brings together researchers, academicians, industry experts and technology innovators to explore the convergence of visual intelligence, language understanding, multimodal learning and computational intelligence — the building blocks of next-generation intelligent systems.",
      objectivesHeading: "Objectives of ICVLIC",
      objectives: [
        "Promote high-quality research in computer vision, language technologies, and intelligent computing.",
        "Encourage interdisciplinary research integrating AI, machine learning, deep learning, and multimodal systems.",
        "Provide a platform for researchers to present original research findings and innovative applications.",
        "Strengthen collaboration among universities, research institutions, and industry.",
        "Address challenges related to AI reliability, interpretability, security, privacy, and ethical deployment."
      ],
      whyConference: {
        heading: "A focused forum for multimodal and intelligent computing research",
        items: [
          {
            title: "Interdisciplinary AI research",
            description: "Vision, language and computational intelligence in one technical programme."
          },
          {
            title: "Research and industry collaboration",
            description: "A forum where academic findings meet practical deployment."
          },
          {
            title: "Responsible and explainable AI",
            description: "Emphasis on reliable, interpretable and human-centric systems."
          },
          {
            title: "Real-world intelligent applications",
            description: "Healthcare, smart cities, cybersecurity, robotics and beyond."
          },
          {
            title: "International academic exchange",
            description: "Open to researchers and practitioners from every country."
          }
        ]
      }
    }
  },

  university: {
    name: "Vignan's Foundation for Science, Technology and Research (Deemed to be University)",
    shortName: "VFSTR",
    organizingDept: "Dept. of AIML, VFSTR",
    location: "Vadlamudi, Guntur, Andhra Pradesh, India",
    heading: "About VFSTR and the Department of AIML",
    body: "ICVLIC is organized by the Dept. of AIML, VFSTR. The official institutional profile will be published here.",
    campusPhotoNote: "Authentic VFSTR campus photograph (to be supplied by organizers)",
    websiteUrl: "https://www.vignan.ac.in"
  },

  deadlines: [
    {
      id: "paper-submission-deadline",
      label: "Paper Submission Deadline",
      date: "To be announced",
      isConfirmed: false,
      status: "tba"
    },
    {
      id: "acceptance-notification",
      label: "Acceptance Notification",
      date: "To be announced",
      isConfirmed: false,
      status: "tba"
    },
    {
      id: "camera-ready-submission",
      label: "Camera-Ready Submission",
      date: "To be announced",
      isConfirmed: false,
      status: "tba"
    },
    {
      id: "registration-deadline",
      label: "Registration Deadline",
      date: "To be announced",
      isConfirmed: false,
      status: "tba"
    },
    {
      id: "conference-dates",
      label: "Conference Dates",
      date: "To be announced",
      isConfirmed: false,
      status: "tba"
    }
  ],

  callForPapers: {
    title: "Call for Papers – ICVLIC",
    intro: "Researchers, faculty members, Ph.D. scholars, postgraduate students, industry professionals, and technology innovators are invited to submit original research contributions related to the conference's published technical tracks.",
    tracksIntro: "Original research is invited across the following technical tracks. Track numbering follows the organizers' official structure.",
    tracks: [
      {
        id: "track-1",
        number: "Track 1",
        title: "Computer Vision and Visual Intelligence",
        description: "Methods that let machines perceive, interpret and reason about images, video and 3D scenes.",
        topics: [
          "Image processing, segmentation, and enhancement",
          "Object detection, recognition, and tracking",
          "Video analytics and action recognition",
          "Medical imaging and remote sensing",
          "3D vision, visual perception, and scene understanding"
        ]
      },
      {
        id: "track-2",
        number: "Track 2",
        title: "Natural Language Processing and Language Intelligence",
        description: "Models and systems that understand, generate and translate human language and speech.",
        topics: [
          "Large language models (LLMs) and generative AI",
          "Machine translation and multilingual computing",
          "Sentiment analysis and text classification",
          "Information retrieval, summarization, and question answering",
          "Conversational AI and speech-language technologies"
        ]
      },
      {
        id: "track-4",
        number: "Track 4",
        title: "Intelligent Computing and AI Algorithms",
        description: "Learning, optimisation and trustworthy algorithms that form the foundations of intelligent systems.",
        topics: [
          "Machine learning and deep learning",
          "Reinforcement learning and evolutionary computing",
          "Explainable and trustworthy AI",
          "Optimization algorithms and predictive analytics",
          "Federated learning, edge AI, and distributed intelligence"
        ]
      },
      {
        id: "track-5",
        number: "Track 5",
        title: "Intelligent Applications and Emerging Technologies",
        description: "Real-world deployment of AI across health, cities, industry, security and autonomous systems.",
        topics: [
          "AI in healthcare, education, and agriculture",
          "Robotics, autonomous systems, and intelligent transportation",
          "Smart cities and Internet of Things",
          "AI-enabled cybersecurity and privacy",
          "Cloud computing, digital twins, and industrial AI"
        ]
      }
    ],
    policiesHeading: "Originality, review and ethics",
    policies: {
      originality: "Submissions must be original, unpublished work not under consideration for publication elsewhere.",
      peerReview: "Every submission undergoes a defined peer-review process. Review model details will be announced.",
      researchEthics: "Authors must disclose relevant conflicts of interest and comply with research ethics requirements."
    },
    publicationNote: "Publication and proceedings arrangements are subject to confirmation and completion of the relevant agreements and approvals. Further information will be announced on the official conference website.",
    submissionPortalNote: "Submission Portal – To Be Announced"
  },

  submissionGuidelines: {
    title: "Submission Guidelines",
    requirementsHeading: "Requirements for all submissions",
    requirements: [
      "Papers must present original research and must not be under consideration for publication elsewhere.",
      "All submissions will undergo a defined peer-review process.",
      "Papers must follow the prescribed conference template and submission guidelines.",
      "Authors must disclose relevant conflicts of interest and comply with research ethics requirements.",
      "Accepted papers must satisfy the conference's final submission and presentation requirements.",
      "Publication arrangements will be announced only after the relevant agreements and approvals are secured."
    ],
    workflowHeading: "From manuscript to presentation",
    workflow: [
      {
        stage: "Manuscript preparation",
        detail: "Template, page limit and formatting rules pending confirmation. To be announced."
      },
      {
        stage: "Submission process",
        detail: "Submission platform pending confirmation. To be announced."
      },
      {
        stage: "Peer-review process",
        detail: "Review model and acceptance criteria pending confirmation. To be announced."
      },
      {
        stage: "Publication ethics",
        detail: "Authors must disclose conflicts of interest and comply with research ethics requirements. Plagiarism and duplicate submission are not permitted."
      },
      {
        stage: "Camera-ready submission",
        detail: "Final manuscript requirements pending confirmation. To be announced."
      },
      {
        stage: "Presentation requirements",
        detail: "Presentation format and duration pending confirmation. To be announced."
      },
      {
        stage: "Publication and Proceedings",
        detail: "Publication and proceedings arrangements are subject to confirmation and completion of the relevant agreements and approvals. Further information will be announced on the official conference website."
      }
    ]
  },

  speakers: [
    {
      id: "keynote-1",
      name: "To be announced",
      role: "Keynote 1",
      institution: "Name, institution, talk title and biography will appear once confirmed.",
      isKeynote: true
    },
    {
      id: "keynote-2",
      name: "To be announced",
      role: "Keynote 2",
      institution: "Name, institution, talk title and biography will appear once confirmed.",
      isKeynote: true
    },
    {
      id: "keynote-3",
      name: "To be announced",
      role: "Keynote 3",
      institution: "Name, institution, talk title and biography will appear once confirmed.",
      isKeynote: true
    }
  ],

  committees: [
    {
      id: "chief-patron",
      title: "Chief Patron",
      status: "Pending — Details will be announced"
    },
    {
      id: "patrons",
      title: "Patrons",
      status: "Pending — Details will be announced"
    },
    {
      id: "general-chairs",
      title: "General Chairs",
      status: "Pending — Details will be announced"
    },
    {
      id: "conference-chairs",
      title: "Conference Chairs",
      status: "Pending — Details will be announced"
    },
    {
      id: "organizing-chairs",
      title: "Organizing Chairs",
      status: "Pending — Details will be announced"
    },
    {
      id: "technical-program-chairs",
      title: "Technical Program Chairs",
      status: "Pending — Details will be announced"
    },
    {
      id: "publication-chairs",
      title: "Publication Chairs",
      status: "Pending — Details will be announced"
    },
    {
      id: "international-advisory-committee",
      title: "International Advisory Committee",
      status: "Pending — Details will be announced"
    },
    {
      id: "technical-program-committee",
      title: "Technical Program Committee",
      status: "Pending — Details will be announced"
    },
    {
      id: "organizing-committee",
      title: "Organizing Committee",
      status: "Pending — Details will be announced"
    }
  ],

  registration: {
    intro: "Registration fees, deadlines, payment instructions and policies will be published once confirmed.",
    status: "Pending. Online registration and payment will open after the registration policy is approved.",
    categories: [
      {
        category: "Faculty / Academicians",
        fee: "To be announced"
      },
      {
        category: "Research Scholars",
        fee: "To be announced"
      },
      {
        category: "Students",
        fee: "To be announced"
      },
      {
        category: "Industry Participants",
        fee: "To be announced"
      },
      {
        category: "International Participants",
        fee: "To be announced"
      }
    ]
  },

  publication: {
    heading: "Publication and Proceedings",
    subheading: "Transparent publication arrangements",
    body: "Publication and proceedings arrangements are subject to confirmation and completion of the relevant agreements and approvals. Further information will be announced on the official conference website."
  },

  venue: {
    title: "Hosted at VFSTR, India",
    hostingInstitution: "Vignan's Foundation for Science, Technology and Research (Deemed to be University)",
    organizingDepartment: "Dept. of AIML, VFSTR",
    location: "Vadlamudi, Guntur, Andhra Pradesh, India",
    campusAddress: "To be announced",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Vadlamudi%2C%20Guntur",
    travelNote: "Pending. Travel and accommodation information will be published by the organizers."
  },

  contact: {
    heading: "Get in touch",
    organizingCommittee: "Dept. of AIML, VFSTR",
    institution: "Vignan's Foundation for Science, Technology and Research (Deemed to be University)",
    address: "Vadlamudi, Guntur, Andhra Pradesh, India",
    officialEmail: "To be announced",
    contactPersons: "Pending. Details will be announced."
  },

  privacyPolicy: {
    title: "Privacy Policy",
    text: "This website provides information about ICVLIC. It does not currently collect personal data through forms or payments.\n\nWhen submission, registration or contact features are launched, this policy will be updated to describe what information is collected, how it is used, and how it is protected."
  },

  footer: {
    brand: "ICVLIC.",
    fullName: "International Conference on Vision, Language and Intelligent Computing",
    tagline: "Connecting Vision, Language and Intelligence for a Smarter Future",
    organizedBy: "Organized by Dept. of AIML, VFSTR, Vadlamudi, Guntur, Andhra Pradesh, India.",
    copyright: "© 2026 Dept. of AIML, VFSTR, VFSTR. All rights reserved."
  }
};
