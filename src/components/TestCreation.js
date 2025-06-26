import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  FileText,
  Plus,
  Save,
  Eye,
  Settings,
  Users,
  Clock,
  Target,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertTriangle,
  Info,
  X,
  Building,
  Briefcase,
  GraduationCap,
  Code,
  Brain,
  Globe,
  Search,
  Filter,
  Star,
  Download,
  Upload,
  Edit,
  Trash2,
  Copy,
  Share2,
  BookOpen,
  Award,
  Zap,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Video,
  Camera,
  Mic,
  Shield,
  Lock,
  Database,
  Server,
  Cloud,
  Monitor,
  Smartphone,
  Tablet,
  Wifi,
  Signal,
  Battery,
  Volume2,
  RefreshCw,
  MoreHorizontal,
  Home,
  Navigation,
  Compass,
  Map,
  Flag,
  Bookmark,
  MessageSquare,
  Bell,
  User,
  LogOut,
  Moon,
  Sun,
  Menu,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  Maximize2,
  Minimize2,
  Play,
  Pause,
  Square,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Grid,
  List,
  Layers,
  Package,
  Folder,
  File,
  Image,
  Music,
  Film,
  Archive,
  Paperclip,
  Link,
  ExternalLink,
  Hash,
  AtSign,
  Percent,
  DollarSign,
  Euro,
  PoundSterling,
  Yen,
  Bitcoin,
  CreditCard,
  ShoppingCart,
  Gift,
  Heart,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Coffee,
  Lightbulb,
  Flame,
  Snowflake,
  Umbrella,
  CloudRain,
  Sun as SunIcon,
  Moon as MoonIcon,
  Star as StarIcon,
  Sparkles,
} from "lucide-react";

export default function TestCreation() {
  // State Management
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showQuestionBank, setShowQuestionBank] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [aiRecommendations, setAiRecommendations] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [saveStatus, setSaveStatus] = useState("");
  const [previewMode, setPreviewMode] = useState("desktop");
  const [currentTime] = useState(new Date().toISOString());

  const [formData, setFormData] = useState({
    basicInfo: {
      title: "",
      description: "",
      industry: "",
      department: "",
      position: "",
      company: "",
      targetCompanies: [],
      jobLevel: "",
      location: "",
      remoteWork: false,
      urgency: "normal",
      tags: [],
      createdBy: "Mohamedelammari",
      createdAt: currentTime,
      lastModified: currentTime,
    },
    positionDetails: {
      experienceLevel: "",
      skillsRequired: [],
      responsibilities: [],
      qualifications: [],
      salaryRange: "",
      workLocation: "",
      employmentType: "",
      teamSize: "",
      reportingTo: "",
      travelRequired: false,
      securityClearance: false,
      languageRequirements: [],
      certifications: [],
      preferredBackground: [],
      companySpecific: {
        culture: "",
        values: [],
        workStyle: "",
        benefits: [],
      },
    },
    assessmentConfig: {
      duration: 60,
      questionCount: 20,
      passingScore: 70,
      allowRetakes: false,
      maxAttempts: 1,
      timePerQuestion: 3,
      randomizeQuestions: true,
      showProgress: true,
      allowPause: false,
      autoSubmit: true,
      questionTypes: {
        multipleChoice: { enabled: true, weight: 40, count: 8 },
        coding: { enabled: true, weight: 30, count: 6 },
        caseStudy: { enabled: true, weight: 20, count: 4 },
        video: { enabled: false, weight: 10, count: 2 },
      },
      difficulty: {
        beginner: 20,
        intermediate: 50,
        advanced: 25,
        expert: 5,
      },
      adaptiveTesting: false,
      aiPowered: true,
      customInstructions: "",
      feedbackLevel: "detailed",
    },
    questions: [],
    questionFilters: {
      industry: "",
      skill: "",
      difficulty: "",
      type: "",
      company: "",
      recentlyUsed: false,
      validated: true,
      customTags: [],
    },
    settings: {
      securityLevel: "medium",
      proctoringEnabled: true,
      recordSession: false,
      requireWebcam: true,
      requireMicrophone: false,
      preventTabSwitching: true,
      preventCopyPaste: true,
      preventPrintScreen: true,
      fullScreenMode: true,
      browserLockdown: false,
      allowCalculator: false,
      allowNotepad: false,
      ipRestriction: false,
      timeZoneRestriction: false,
      deviceRestriction: false,
      networkMonitoring: true,
      behaviorAnalysis: true,
      plagiarismDetection: true,
      aiMonitoring: {
        faceDetection: true,
        eyeTracking: false,
        voiceAnalysis: false,
        emotionDetection: false,
        suspiciousActivity: true,
      },
      notifications: {
        emailCandidate: true,
        emailRecruiter: true,
        smsReminder: false,
        slackIntegration: false,
        webhookUrl: "",
      },
    },
    scheduling: {
      availableFrom: "",
      availableTo: "",
      timeZone: "UTC",
      schedulingType: "open",
      inviteOnly: false,
      maxParticipants: 100,
      waitingRoom: false,
      autoStart: true,
      gracePeriod: 10,
      lateSubmissionWindow: 5,
    },
    collaboration: {
      sharedWith: [],
      permissions: {
        view: [],
        edit: [],
        admin: ["Mohamedelammari"],
      },
      comments: [],
      reviewers: [],
      approvalRequired: false,
      versionControl: true,
    },
    analytics: {
      trackingEnabled: true,
      detailedAnalytics: true,
      benchmarking: true,
      reportGeneration: true,
      realTimeMonitoring: true,
      candidateJourney: true,
      performanceMetrics: true,
      customKPIs: [],
    },
    branding: {
      companyLogo: "",
      colorScheme: "default",
      customCSS: "",
      welcomeMessage: "",
      completionMessage: "",
      footerText: "",
      termsAndConditions: "",
      privacyPolicy: "",
    },
  });

  // Complex data structures
  const industries = {
    technology: {
      name: "Technology",
      icon: "💻",
      description:
        "Software development, IT services, and technology companies",
      departments: {
        engineering: {
          name: "Engineering",
          positions: [
            "Software Engineer",
            "Senior Software Engineer",
            "Lead Software Engineer",
            "Principal Software Engineer",
            "Staff Software Engineer",
            "DevOps Engineer",
            "Site Reliability Engineer",
            "Platform Engineer",
            "Cloud Engineer",
            "Security Engineer",
            "Data Engineer",
            "ML Engineer",
            "AI Engineer",
            "Mobile Developer",
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
            "Embedded Systems Engineer",
            "Game Developer",
          ],
          skills: [
            "Programming",
            "System Design",
            "Problem Solving",
            "Algorithm Design",
            "Code Review",
            "Git",
            "CI/CD",
            "Testing",
          ],
          companies: [
            "Google",
            "Apple",
            "Microsoft",
            "Amazon",
            "Meta",
            "Netflix",
            "Uber",
            "Spotify",
            "Airbnb",
            "Tesla",
          ],
        },
        product: {
          name: "Product Management",
          positions: [
            "Product Manager",
            "Senior Product Manager",
            "Principal Product Manager",
            "Director of Product",
            "VP of Product",
            "Chief Product Officer",
            "Product Owner",
            "Technical Product Manager",
            "Growth Product Manager",
            "Platform Product Manager",
            "AI Product Manager",
            "Mobile Product Manager",
          ],
          skills: [
            "Product Strategy",
            "Market Analysis",
            "User Research",
            "Roadmap Planning",
            "Stakeholder Management",
            "Analytics",
            "A/B Testing",
          ],
          companies: [
            "Google",
            "Apple",
            "Microsoft",
            "Amazon",
            "Meta",
            "Slack",
            "Notion",
            "Figma",
            "Stripe",
            "Square",
          ],
        },
        design: {
          name: "Design",
          positions: [
            "UX Designer",
            "UI Designer",
            "Product Designer",
            "Senior Product Designer",
            "Design Lead",
            "Principal Designer",
            "Design Director",
            "VP of Design",
            "Chief Design Officer",
            "User Researcher",
            "Design Systems Designer",
            "Visual Designer",
            "Interaction Designer",
            "Service Designer",
          ],
          skills: [
            "UI/UX Design",
            "User Research",
            "Prototyping",
            "Design Systems",
            "Visual Design",
            "Figma",
            "Sketch",
            "Adobe Creative Suite",
          ],
          companies: [
            "Apple",
            "Google",
            "Airbnb",
            "Uber",
            "Netflix",
            "Spotify",
            "Adobe",
            "Figma",
            "Canva",
            "Dribbble",
          ],
        },
        data: {
          name: "Data Science",
          positions: [
            "Data Scientist",
            "Senior Data Scientist",
            "Principal Data Scientist",
            "Data Analyst",
            "Business Intelligence Analyst",
            "Data Engineer",
            "ML Engineer",
            "AI Research Scientist",
            "Quantitative Analyst",
            "Data Science Manager",
            "Head of Data Science",
            "Chief Data Officer",
          ],
          skills: [
            "Data Analysis",
            "Machine Learning",
            "Statistics",
            "Python",
            "R",
            "SQL",
            "Data Visualization",
            "Big Data",
          ],
          companies: [
            "Google",
            "Meta",
            "Netflix",
            "Uber",
            "LinkedIn",
            "Twitter",
            "Palantir",
            "DataBricks",
            "Snowflake",
            "Tableau",
          ],
        },
      },
    },
    finance: {
      name: "Financial Services",
      icon: "🏦",
      description: "Banking, investment, insurance, and financial technology",
      departments: {
        "investment-banking": {
          name: "Investment Banking",
          positions: [
            "Investment Banking Analyst",
            "Investment Banking Associate",
            "Vice President",
            "Director",
            "Managing Director",
            "Financial Analyst",
            "Portfolio Manager",
            "Investment Advisor",
            "Equity Research Analyst",
            "Fixed Income Analyst",
            "Derivatives Trader",
            "Risk Manager",
            "Compliance Officer",
          ],
          skills: [
            "Financial Modeling",
            "Valuation",
            "Excel",
            "PowerPoint",
            "Financial Analysis",
            "M&A",
            "Capital Markets",
            "Risk Management",
          ],
          companies: [
            "Goldman Sachs",
            "Morgan Stanley",
            "JP Morgan Chase",
            "Bank of America",
            "Citigroup",
            "Deutsche Bank",
            "Credit Suisse",
            "UBS",
            "Barclays",
            "Wells Fargo",
            "HSBC",
            "BNP Paribas",
            "Societe Generale",
          ],
        },
        consulting: {
          name: "Management Consulting",
          positions: [
            "Business Analyst",
            "Consultant",
            "Senior Consultant",
            "Manager",
            "Senior Manager",
            "Principal",
            "Partner",
            "Strategy Consultant",
            "Management Consultant",
            "Operations Consultant",
            "Technology Consultant",
            "Digital Transformation Consultant",
            "Change Management Consultant",
          ],
          skills: [
            "Problem Solving",
            "Strategic Thinking",
            "Excel",
            "PowerPoint",
            "Client Management",
            "Data Analysis",
            "Process Improvement",
          ],
          companies: [
            "McKinsey & Company",
            "Boston Consulting Group",
            "Bain & Company",
            "Deloitte Consulting",
            "PwC Strategy&",
            "EY-Parthenon",
            "KPMG Advisory",
            "Accenture Strategy",
            "Oliver Wyman",
            "A.T. Kearney",
            "Roland Berger",
          ],
        },
        audit: {
          name: "Audit & Assurance",
          positions: [
            "Staff Auditor",
            "Senior Auditor",
            "Audit Manager",
            "Senior Manager",
            "Partner",
            "Risk Analyst",
            "Compliance Officer",
            "Internal Auditor",
            "External Auditor",
            "SOX Auditor",
            "IT Auditor",
            "Forensic Accountant",
          ],
          skills: [
            "Auditing",
            "Risk Assessment",
            "Compliance",
            "Financial Reporting",
            "Excel",
            "SAP",
            "Data Analytics",
            "Regulatory Knowledge",
          ],
          companies: [
            "PricewaterhouseCoopers (PwC)",
            "Deloitte",
            "Ernst & Young (EY)",
            "KPMG",
            "Grant Thornton",
            "BDO",
            "RSM",
            "Crowe",
            "Baker Tilly",
            "CliftonLarsonAllen",
            "Marcum",
            "PKF O'Connor Davies",
          ],
        },
        fintech: {
          name: "Financial Technology",
          positions: [
            "Product Manager",
            "Software Engineer",
            "Data Scientist",
            "Risk Analyst",
            "Compliance Manager",
            "Business Development",
            "Sales Engineer",
            "Customer Success Manager",
            "Marketing Manager",
            "Operations Manager",
          ],
          skills: [
            "Financial Modeling",
            "Technology Integration",
            "Product Development",
            "Data Analytics",
            "Compliance",
            "API Development",
          ],
          companies: [
            "Stripe",
            "Square",
            "PayPal",
            "Robinhood",
            "Coinbase",
            "Plaid",
            "Affirm",
            "SoFi",
            "Chime",
            "Klarna",
          ],
        },
      },
    },
    healthcare: {
      name: "Healthcare",
      icon: "🏥",
      description:
        "Medical institutions, pharmaceutical companies, and health services",
      departments: {
        clinical: {
          name: "Clinical Operations",
          positions: [
            "Clinical Research Associate",
            "Clinical Data Manager",
            "Biostatistician",
            "Medical Affairs Manager",
            "Clinical Operations Manager",
            "Regulatory Affairs",
            "Clinical Trial Manager",
            "Principal Investigator",
            "Study Coordinator",
          ],
          skills: [
            "Patient Care",
            "Clinical Protocols",
            "Medical Knowledge",
            "Communication",
            "Emergency Response",
            "GCP",
            "Regulatory",
          ],
          companies: [
            "Pfizer",
            "Johnson & Johnson",
            "Roche",
            "Novartis",
            "Merck",
            "AbbVie",
            "Bristol Myers Squibb",
            "Amgen",
          ],
        },
        administration: {
          name: "Healthcare Administration",
          positions: [
            "Healthcare Administrator",
            "Operations Manager",
            "Quality Manager",
            "Compliance Officer",
            "Revenue Cycle Manager",
            "Health Information Manager",
            "Patient Services Manager",
            "Clinical Manager",
          ],
          skills: [
            "Healthcare Management",
            "Regulatory Compliance",
            "Budget Management",
            "Policy Development",
            "Quality Assurance",
          ],
          companies: [
            "Kaiser Permanente",
            "Mayo Clinic",
            "Cleveland Clinic",
            "Johns Hopkins",
            "Partners HealthCare",
          ],
        },
        research: {
          name: "Medical Research",
          positions: [
            "Research Scientist",
            "Principal Investigator",
            "Research Associate",
            "Clinical Research Coordinator",
            "Biostatistician",
            "Epidemiologist",
            "Medical Writer",
            "Regulatory Affairs Specialist",
          ],
          skills: [
            "Research Methodology",
            "Data Analysis",
            "Clinical Trials",
            "Scientific Writing",
            "Regulatory Affairs",
            "Statistics",
          ],
          companies: [
            "NIH",
            "CDC",
            "FDA",
            "Genentech",
            "Gilead Sciences",
            "Biogen",
            "Moderna",
            "BioNTech",
          ],
        },
      },
    },
    education: {
      name: "Education",
      icon: "🎓",
      description:
        "Educational institutions, training organizations, and EdTech companies",
      departments: {
        academic: {
          name: "Academic Affairs",
          positions: [
            "Professor",
            "Associate Professor",
            "Assistant Professor",
            "Lecturer",
            "Research Fellow",
            "Academic Coordinator",
            "Curriculum Developer",
            "Instructional Designer",
            "Academic Advisor",
          ],
          skills: [
            "Curriculum Development",
            "Teaching Methods",
            "Assessment Design",
            "Educational Technology",
            "Student Engagement",
          ],
          companies: [
            "Harvard University",
            "MIT",
            "Stanford University",
            "Yale University",
            "Princeton University",
          ],
        },
        administration: {
          name: "Educational Administration",
          positions: [
            "Dean",
            "Associate Dean",
            "Department Head",
            "Academic Director",
            "Registrar",
            "Student Services Director",
            "Admissions Director",
            "Financial Aid Director",
            "Student Life Director",
          ],
          skills: [
            "Educational Leadership",
            "Budget Management",
            "Policy Development",
            "Staff Management",
            "Strategic Planning",
          ],
          companies: [
            "University of California",
            "New York University",
            "University of Pennsylvania",
            "Duke University",
          ],
        },
        technology: {
          name: "Educational Technology",
          positions: [
            "EdTech Product Manager",
            "Learning Experience Designer",
            "Educational Software Developer",
            "Digital Learning Specialist",
            "E-Learning Coordinator",
            "Technology Integration Specialist",
            "Online Course Developer",
            "Learning Analytics Specialist",
          ],
          skills: [
            "Learning Management Systems",
            "Educational Software",
            "Digital Content",
            "Technology Integration",
            "User Experience",
          ],
          companies: [
            "Coursera",
            "Udemy",
            "Khan Academy",
            "Blackboard",
            "Canvas",
            "Pearson",
            "McGraw-Hill",
            "Cengage",
          ],
        },
      },
    },
    retail: {
      name: "Retail & E-commerce",
      icon: "🛍️",
      description: "Retail stores, e-commerce platforms, and consumer goods",
      departments: {
        operations: {
          name: "Retail Operations",
          positions: [
            "Store Manager",
            "Assistant Manager",
            "Department Manager",
            "Shift Supervisor",
            "Operations Manager",
            "District Manager",
            "Regional Manager",
            "Loss Prevention",
            "Inventory Manager",
            "Supply Chain Coordinator",
          ],
          skills: [
            "Inventory Management",
            "Customer Service",
            "Sales Techniques",
            "Visual Merchandising",
            "Supply Chain",
            "POS Systems",
          ],
          companies: [
            "Walmart",
            "Amazon",
            "Target",
            "Costco",
            "Home Depot",
            "Best Buy",
            "Macy's",
            "Nordstrom",
          ],
        },
        ecommerce: {
          name: "E-commerce",
          positions: [
            "E-commerce Manager",
            "Digital Marketing Manager",
            "Online Merchandiser",
            "E-commerce Analyst",
            "Conversion Rate Optimizer",
            "Customer Experience Manager",
            "Platform Manager",
            "Growth Manager",
          ],
          skills: [
            "Digital Marketing",
            "Online Sales",
            "Customer Analytics",
            "Platform Management",
            "Conversion Optimization",
            "SEO/SEM",
          ],
          companies: [
            "Amazon",
            "eBay",
            "Shopify",
            "Etsy",
            "Wayfair",
            "Overstock",
            "Zappos",
            "Chewy",
          ],
        },
        merchandising: {
          name: "Merchandising",
          positions: [
            "Merchandiser",
            "Senior Merchandiser",
            "Merchandising Manager",
            "Category Manager",
            "Buyer",
            "Senior Buyer",
            "Planning Manager",
            "Allocation Analyst",
            "Pricing Analyst",
          ],
          skills: [
            "Product Selection",
            "Market Trends",
            "Pricing Strategy",
            "Vendor Relations",
            "Category Management",
            "Forecasting",
          ],
          companies: [
            "Nordstrom",
            "Macy's",
            "Target",
            "Walmart",
            "H&M",
            "Zara",
            "Gap Inc.",
            "TJX Companies",
          ],
        },
      },
    },
    manufacturing: {
      name: "Manufacturing",
      icon: "🏭",
      description:
        "Manufacturing plants, industrial companies, and production facilities",
      departments: {
        production: {
          name: "Production Management",
          positions: [
            "Production Manager",
            "Manufacturing Engineer",
            "Plant Manager",
            "Operations Manager",
            "Production Supervisor",
            "Shift Manager",
            "Quality Control Manager",
            "Maintenance Manager",
            "Safety Manager",
          ],
          skills: [
            "Production Planning",
            "Quality Control",
            "Process Optimization",
            "Safety Management",
            "Equipment Maintenance",
            "Lean Manufacturing",
          ],
          companies: [
            "General Electric",
            "Boeing",
            "Ford",
            "General Motors",
            "Caterpillar",
            "3M",
            "Honeywell",
            "Siemens",
          ],
        },
        quality: {
          name: "Quality Assurance",
          positions: [
            "Quality Manager",
            "Quality Engineer",
            "Quality Control Inspector",
            "Quality Assurance Specialist",
            "Six Sigma Black Belt",
            "Process Improvement Manager",
            "Compliance Manager",
            "Validation Engineer",
          ],
          skills: [
            "Quality Standards",
            "Testing Procedures",
            "Compliance",
            "Process Improvement",
            "Documentation",
            "Statistical Analysis",
          ],
          companies: [
            "Toyota",
            "Honda",
            "BMW",
            "Mercedes-Benz",
            "Tesla",
            "Apple",
            "Samsung",
            "Intel",
          ],
        },
        engineering: {
          name: "Manufacturing Engineering",
          positions: [
            "Manufacturing Engineer",
            "Process Engineer",
            "Industrial Engineer",
            "Automation Engineer",
            "Mechanical Engineer",
            "Electrical Engineer",
            "Controls Engineer",
            "Project Engineer",
            "Design Engineer",
          ],
          skills: [
            "Process Engineering",
            "Automation",
            "Technical Design",
            "Problem Solving",
            "Project Management",
            "CAD Software",
          ],
          companies: [
            "Lockheed Martin",
            "Raytheon",
            "Northrop Grumman",
            "Bosch",
            "ABB",
            "Schneider Electric",
            "Emerson",
          ],
        },
      },
    },
  };

  const questionTypes = {
    "multiple-choice": {
      name: "Multiple Choice",
      description: "Single or multiple correct answers",
      timeAllocation: 2,
      icon: "CheckCircle",
      difficulty: ["Easy", "Medium", "Hard"],
      settings: {
        randomizeOptions: true,
        showExplanation: true,
        allowPartialCredit: false,
        negativeMarking: false,
      },
    },
    "case-study": {
      name: "Case Study",
      description: "Real-world scenario analysis",
      timeAllocation: 15,
      icon: "FileText",
      difficulty: ["Medium", "Hard", "Expert"],
      settings: {
        wordLimit: 500,
        rubricScoring: true,
        peerReview: false,
        aiAssisted: true,
      },
    },
    coding: {
      name: "Coding Challenge",
      description: "Programming and technical skills",
      timeAllocation: 30,
      icon: "Code",
      difficulty: ["Easy", "Medium", "Hard", "Expert"],
      settings: {
        languageOptions: [
          "JavaScript",
          "Python",
          "Java",
          "C++",
          "C#",
          "Go",
          "Rust",
        ],
        testCases: true,
        codeExecution: true,
        memoryLimit: "128MB",
        timeLimit: "5s",
      },
    },
    video: {
      name: "Video Response",
      description: "Recorded video answers",
      timeAllocation: 5,
      icon: "Video",
      difficulty: ["Easy", "Medium"],
      settings: {
        maxDuration: 120,
        retakes: 3,
        transcription: true,
        aiAnalysis: true,
      },
    },
    essay: {
      name: "Written Essay",
      description: "Long-form written responses",
      timeAllocation: 20,
      icon: "Edit",
      difficulty: ["Medium", "Hard"],
      settings: {
        wordLimit: 1000,
        plagiarismCheck: true,
        grammarCheck: true,
        aiScoring: true,
      },
    },
    simulation: {
      name: "Interactive Simulation",
      description: "Hands-on practical exercises",
      timeAllocation: 25,
      icon: "Monitor",
      difficulty: ["Medium", "Hard", "Expert"],
      settings: {
        environmentType: "browser",
        dataAccess: false,
        collaboration: false,
        recordActions: true,
      },
    },
  };

  const skillCategories = {
    technical: {
      name: "Technical Skills",
      icon: "Settings",
      description: "Job-specific technical competencies",
      skills: [
        "Programming",
        "System Design",
        "Database Management",
        "Cloud Computing",
        "DevOps",
        "Security",
        "AI/ML",
        "Data Analysis",
      ],
    },
    cognitive: {
      name: "Cognitive Abilities",
      icon: "Brain",
      description: "Mental processes and reasoning",
      skills: [
        "Problem Solving",
        "Critical Thinking",
        "Analytical Reasoning",
        "Pattern Recognition",
        "Memory",
        "Processing Speed",
      ],
    },
    behavioral: {
      name: "Behavioral Traits",
      icon: "Users",
      description: "Personality and work style",
      skills: [
        "Leadership",
        "Communication",
        "Teamwork",
        "Adaptability",
        "Initiative",
        "Emotional Intelligence",
        "Stress Management",
      ],
    },
    domain: {
      name: "Domain Knowledge",
      icon: "GraduationCap",
      description: "Industry-specific expertise",
      skills: [
        "Industry Knowledge",
        "Regulatory Compliance",
        "Best Practices",
        "Market Understanding",
        "Business Acumen",
      ],
    },
    language: {
      name: "Language Skills",
      icon: "Globe",
      description: "Communication and language proficiency",
      skills: [
        "English Proficiency",
        "Technical Writing",
        "Presentation Skills",
        "Cross-cultural Communication",
        "Translation",
      ],
    },
    software: {
      name: "Software Proficiency",
      icon: "Monitor",
      description: "Specific software and tool expertise",
      skills: [
        "Microsoft Office",
        "Google Workspace",
        "Adobe Creative Suite",
        "Salesforce",
        "SAP",
        "Tableau",
        "Power BI",
      ],
    },
  };

  const steps = [
    {
      id: 0,
      name: "Basic Information",
      icon: FileText,
      description: "Assessment title, industry, and position details",
    },
    {
      id: 1,
      name: "Position Details",
      icon: Briefcase,
      description: "Job requirements and company-specific needs",
    },
    {
      id: 2,
      name: "Assessment Configuration",
      icon: Settings,
      description: "Duration, scoring, and question types",
    },
    {
      id: 3,
      name: "Question Selection",
      icon: Brain,
      description: "AI-powered question recommendation and selection",
    },
    {
      id: 4,
      name: "Security & Proctoring",
      icon: Shield,
      description: "Security settings and monitoring options",
    },
    {
      id: 5,
      name: "Advanced Settings",
      icon: Zap,
      description: "Scheduling, collaboration, and integrations",
    },
    {
      id: 6,
      name: "Review & Publish",
      icon: Check,
      description: "Final review and assessment publication",
    },
  ];

  // Effects and callbacks
  useEffect(() => {
    // Auto-save functionality
    const autoSaveTimer = setInterval(() => {
      if (formData.basicInfo.title) {
        saveProgress();
      }
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(autoSaveTimer);
  }, [formData]);

  useEffect(() => {
    // Generate AI recommendations when position details change
    if (
      formData.basicInfo.position &&
      formData.positionDetails.experienceLevel
    ) {
      generateAIRecommendations();
    }
  }, [formData.basicInfo.position, formData.positionDetails.experienceLevel]);

  useEffect(() => {
    // Validate current step
    validateCurrentStep();
  }, [currentStep, formData]);

  const validateCurrentStep = useCallback(() => {
    const errors = {};

    switch (currentStep) {
      case 0: // Basic Information
        if (!formData.basicInfo.title.trim())
          errors.title = "Title is required";
        if (!formData.basicInfo.industry)
          errors.industry = "Industry is required";
        if (!formData.basicInfo.department)
          errors.department = "Department is required";
        if (!formData.basicInfo.position)
          errors.position = "Position is required";
        break;

      case 1: // Position Details
        if (!formData.positionDetails.experienceLevel)
          errors.experienceLevel = "Experience level is required";
        if (formData.positionDetails.skillsRequired.length === 0)
          errors.skillsRequired = "At least one skill is required";
        break;

      case 2: // Assessment Configuration
        if (formData.assessmentConfig.duration < 15)
          errors.duration = "Minimum duration is 15 minutes";
        if (formData.assessmentConfig.questionCount < 5)
          errors.questionCount = "Minimum 5 questions required";
        if (formData.assessmentConfig.passingScore < 50)
          errors.passingScore = "Minimum passing score is 50%";
        break;

      case 3: // Question Selection
        if (selectedQuestions.length === 0)
          errors.questions = "At least one question must be selected";
        break;

      default:
        break;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  }, [currentStep, formData, selectedQuestions]);

  const saveProgress = useCallback(async () => {
    setSaveStatus("saving");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Update last modified timestamp
    setFormData((prev) => ({
      ...prev,
      basicInfo: {
        ...prev.basicInfo,
        lastModified: new Date().toISOString(),
      },
    }));

    setSaveStatus("saved");
    setTimeout(() => setSaveStatus(""), 3000);
  }, [formData]);

  const generateAIRecommendations = useCallback(async () => {
    setIsLoading(true);

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const recommendations = [
      {
        type: "question",
        title: "Add JavaScript Fundamentals",
        description:
          "Based on the position requirements, JavaScript knowledge is essential",
        priority: "high",
        action: "add_questions",
        data: { skill: "JavaScript", count: 3 },
      },
      {
        type: "duration",
        title: "Increase Assessment Duration",
        description:
          "For senior positions, consider 90-120 minutes for comprehensive evaluation",
        priority: "medium",
        action: "update_duration",
        data: { suggestedDuration: 90 },
      },
      {
        type: "security",
        title: "Enable Advanced Proctoring",
        description:
          "For high-level positions, enhanced security monitoring is recommended",
        priority: "medium",
        action: "update_security",
        data: { securityLevel: "strict" },
      },
    ];

    setAiRecommendations(recommendations);
    setIsLoading(false);
  }, [formData.basicInfo.position, formData.positionDetails.experienceLevel]);

  const handleNext = async () => {
    if (!validateCurrentStep()) {
      return;
    }

    if (currentStep < steps.length - 1) {
      setIsLoading(true);

      // Simulate processing/validation
      await new Promise((resolve) => setTimeout(resolve, 500));

      setCurrentStep(currentStep + 1);
      setIsLoading(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  const handleQuestionSelect = (question) => {
    setSelectedQuestions((prev) => {
      const exists = prev.find((q) => q.id === question.id);
      if (exists) {
        return prev.filter((q) => q.id !== question.id);
      }
      return [...prev, question];
    });
  };

  const generateSampleQuestions = useMemo(() => {
    const baseQuestions = [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is the primary benefit of using React hooks?",
        difficulty: "Intermediate",
        timeLimit: 3,
        skill: "React",
        industry: "technology",
        validated: true,
        usageCount: 1247,
        successRate: 68.5,
        options: [
          "Better performance optimization",
          "Simpler state management in functional components",
          "Automatic code splitting",
          "Built-in SEO optimization",
        ],
        correctAnswer: "Simpler state management in functional components",
        explanation:
          "React hooks allow you to use state and other React features in functional components, making code more readable and easier to test.",
      },
      {
        id: 2,
        type: "coding",
        question:
          "Implement a function to find the longest palindromic substring in a given string.",
        difficulty: "Advanced",
        timeLimit: 25,
        skill: "Algorithm Design",
        industry: "technology",
        validated: true,
        usageCount: 892,
        successRate: 42.3,
        starterCode: {
          javascript:
            "function longestPalindrome(s) {\n  // Your implementation here\n  return '';\n}",
          python:
            "def longest_palindrome(s):\n    # Your implementation here\n    return ''",
          java: 'public String longestPalindrome(String s) {\n    // Your implementation here\n    return "";\n}',
        },
        testCases: [
          { input: "babad", output: "bab" },
          { input: "cbbd", output: "bb" },
          { input: "a", output: "a" },
        ],
      },
      {
        id: 3,
        type: "case-study",
        question:
          "You're tasked with designing a microservices architecture for a high-traffic e-commerce platform. Describe your approach, including service decomposition, data management, and scalability considerations.",
        difficulty: "Expert",
        timeLimit: 20,
        skill: "System Design",
        industry: "technology",
        validated: true,
        usageCount: 456,
        successRate: 35.7,
        context:
          "The platform handles 10M+ daily active users, processes 100K+ orders per day, and needs 99.9% uptime.",
        rubric: [
          {
            criteria: "Service Decomposition",
            weight: 25,
            description: "Clear separation of concerns and bounded contexts",
          },
          {
            criteria: "Data Management",
            weight: 25,
            description: "Database per service, event sourcing, CQRS",
          },
          {
            criteria: "Scalability",
            weight: 25,
            description:
              "Horizontal scaling, load balancing, caching strategies",
          },
          {
            criteria: "Reliability",
            weight: 25,
            description: "Circuit breakers, retry mechanisms, monitoring",
          },
        ],
      },
      {
        id: 4,
        type: "video",
        question:
          "Explain how you would approach resolving a critical production bug that's affecting customer transactions. Walk through your debugging process and communication strategy.",
        difficulty: "Intermediate",
        timeLimit: 5,
        skill: "Problem Solving",
        industry: "technology",
        validated: true,
        usageCount: 678,
        successRate: 71.2,
        maxDuration: 180,
        evaluationCriteria: [
          "Clear communication",
          "Systematic approach",
          "Stakeholder awareness",
          "Technical competence",
        ],
      },
      {
        id: 5,
        type: "multiple-choice",
        question:
          "In investment banking, what is the primary purpose of a DCF (Discounted Cash Flow) model?",
        difficulty: "Intermediate",
        timeLimit: 3,
        skill: "Financial Modeling",
        industry: "finance",
        validated: true,
        usageCount: 2156,
        successRate: 76.8,
        options: [
          "To calculate historical performance",
          "To determine intrinsic value of a company",
          "To assess market sentiment",
          "To analyze competitor positioning",
        ],
        correctAnswer: "To determine intrinsic value of a company",
        explanation:
          "DCF models estimate the intrinsic value of a company by projecting future cash flows and discounting them to present value.",
      },
      {
        id: 6,
        type: "case-study",
        question:
          "A client wants to acquire a competitor in a different geographic market. As their advisor, outline your M&A strategy, including valuation approach, due diligence priorities, and risk assessment.",
        difficulty: "Expert",
        timeLimit: 25,
        skill: "M&A Advisory",
        industry: "finance",
        validated: true,
        usageCount: 234,
        successRate: 28.4,
        context:
          "Target company: $500M revenue, operates in emerging markets, different regulatory environment",
        rubric: [
          {
            criteria: "Strategic Rationale",
            weight: 20,
            description: "Clear value proposition and synergies",
          },
          {
            criteria: "Valuation Method",
            weight: 25,
            description: "Appropriate valuation techniques and multiples",
          },
          {
            criteria: "Due Diligence",
            weight: 25,
            description: "Comprehensive risk identification and mitigation",
          },
          {
            criteria: "Deal Structure",
            weight: 30,
            description: "Optimal transaction structure and financing",
          },
        ],
      },
    ];

    // Filter questions based on current form data
    return baseQuestions.filter((q) => {
      if (
        formData.basicInfo.industry &&
        q.industry !== formData.basicInfo.industry
      )
        return false;
      if (
        formData.questionFilters.type &&
        q.type !== formData.questionFilters.type
      )
        return false;
      if (
        formData.questionFilters.difficulty &&
        q.difficulty !== formData.questionFilters.difficulty
      )
        return false;
      if (
        formData.questionFilters.skill &&
        q.skill !== formData.questionFilters.skill
      )
        return false;
      return true;
    });
  }, [formData.basicInfo.industry, formData.questionFilters]);

  const getSkillsForPosition = useCallback((position) => {
    const skillSets = {
      "Software Engineer": [
        "React",
        "JavaScript",
        "Node.js",
        "Python",
        "SQL",
        "Git",
        "APIs",
        "Testing",
        "Algorithm Design",
        "System Design",
      ],
      "Senior Software Engineer": [
        "React",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Python",
        "SQL",
        "Git",
        "APIs",
        "Testing",
        "Algorithm Design",
        "System Design",
        "Architecture",
        "Mentoring",
      ],
      "Data Scientist": [
        "Python",
        "R",
        "Machine Learning",
        "Statistics",
        "SQL",
        "Data Visualization",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
      ],
      "Product Manager": [
        "Product Strategy",
        "User Research",
        "Analytics",
        "Roadmap Planning",
        "Stakeholder Management",
        "Agile",
        "A/B Testing",
        "Market Analysis",
      ],
      "Investment Banker": [
        "Financial Modeling",
        "Valuation",
        "Excel",
        "PowerPoint",
        "Financial Analysis",
        "M&A",
        "Capital Markets",
        "Risk Management",
      ],
      "Management Consultant": [
        "Problem Solving",
        "Strategic Thinking",
        "Excel",
        "PowerPoint",
        "Client Management",
        "Data Analysis",
        "Process Improvement",
      ],
      "UX Designer": [
        "User Research",
        "Prototyping",
        "Figma",
        "Sketch",
        "Design Systems",
        "Usability Testing",
        "Information Architecture",
        "Visual Design",
      ],
    };
    return (
      skillSets[position] || [
        "Communication",
        "Problem Solving",
        "Teamwork",
        "Leadership",
        "Analytical Thinking",
      ]
    );
  }, []);

  const renderProgressIndicator = () => (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === index;
        const isCompleted = currentStep > index;
        const isAccessible = index <= currentStep;

        return (
          <div key={step.id} className="flex items-center group">
            <div
              className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white scale-110 shadow-lg"
                  : isCompleted
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : isAccessible
                  ? "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
              onClick={() => isAccessible && setCurrentStep(index)}
            >
              {isCompleted ? (
                <Check className="w-6 h-6" />
              ) : (
                <Icon className="w-6 h-6" />
              )}

              {isActive && (
                <div className="absolute -inset-2 bg-blue-600/20 rounded-full animate-pulse"></div>
              )}
            </div>

            <div className="ml-3 hidden lg:block">
              <div
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : isCompleted
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                Step {index + 1}
              </div>
              <div
                className={`text-xs transition-colors ${
                  isActive ? "text-blue-500" : "text-gray-400"
                }`}
              >
                {step.name}
              </div>
            </div>

            {/* Tooltip for mobile */}
            <div className="lg:hidden absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              {step.name}
            </div>

            {index < steps.length - 1 && (
              <div
                className={`mx-4 h-0.5 w-12 xl:w-20 transition-colors ${
                  isCompleted ? "bg-green-600" : "bg-gray-200"
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );

  const renderValidationErrors = () => {
    if (Object.keys(validationErrors).length === 0) return null;

    return (
      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
        <div className="flex items-start">
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-red-900 mb-2">
              Please fix the following errors:
            </h4>
            <ul className="space-y-1">
              {Object.entries(validationErrors).map(([field, error]) => (
                <li key={field} className="text-red-700 text-sm">
                  • {error}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const renderAIRecommendations = () => {
    if (aiRecommendations.length === 0) return null;

    return (
      <div className="mb-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <Zap className="w-5 h-5 text-purple-600 mr-2" />
            <h4 className="font-semibold text-purple-900">
              AI Recommendations
            </h4>
          </div>
          <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
            {aiRecommendations.length} suggestions
          </span>
        </div>

        <div className="space-y-3">
          {aiRecommendations.map((rec, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between p-3 bg-white/70 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h5 className="font-medium text-gray-900">{rec.title}</h5>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      rec.priority === "high"
                        ? "bg-red-100 text-red-700"
                        : rec.priority === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {rec.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{rec.description}</p>
              </div>
              <button
                onClick={() => {
                  // Apply recommendation
                  if (rec.action === "update_duration") {
                    updateFormData("assessmentConfig", {
                      duration: rec.data.suggestedDuration,
                    });
                  } else if (rec.action === "update_security") {
                    updateFormData("settings", {
                      securityLevel: rec.data.securityLevel,
                    });
                  }
                }}
                className="ml-4 px-3 py-1 bg-purple-600 text-white text-xs rounded-lg hover:bg-purple-700 transition-colors"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Basic Information
        return (
          <div className="space-y-6">
            {renderValidationErrors()}
            {renderAIRecommendations()}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Assessment Title *
                  </label>
                  <input
                    type="text"
                    value={formData.basicInfo.title}
                    onChange={(e) =>
                      updateFormData("basicInfo", { title: e.target.value })
                    }
                    placeholder="e.g., Senior React Developer Technical Assessment"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      validationErrors.title
                        ? "border-red-300 focus:border-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    }`}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Choose a clear, descriptive title that reflects the role and
                    assessment scope
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.basicInfo.description}
                    onChange={(e) =>
                      updateFormData("basicInfo", {
                        description: e.target.value,
                      })
                    }
                    placeholder="Brief description of the assessment objectives, target skills, and what candidates can expect..."
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>
                      Provide context to help candidates prepare effectively
                    </span>
                    <span>{formData.basicInfo.description.length}/500</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Information
                  </label>
                  <input
                    type="text"
                    value={formData.basicInfo.company}
                    onChange={(e) =>
                      updateFormData("basicInfo", { company: e.target.value })
                    }
                    placeholder="Company name (optional)"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Assessment Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.basicInfo.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center"
                      >
                        {tag}
                        <button
                          onClick={() => {
                            const newTags = formData.basicInfo.tags.filter(
                              (_, i) => i !== idx
                            );
                            updateFormData("basicInfo", { tags: newTags });
                          }}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Add tags (press Enter to add)"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && e.target.value.trim()) {
                        const newTags = [
                          ...formData.basicInfo.tags,
                          e.target.value.trim(),
                        ];
                        updateFormData("basicInfo", { tags: newTags });
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      value={formData.basicInfo.industry}
                      onChange={(e) =>
                        updateFormData("basicInfo", {
                          industry: e.target.value,
                          department: "",
                          position: "",
                          targetCompanies: [],
                        })
                      }
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        validationErrors.industry
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                      required
                    >
                      <option value="">Select Industry</option>
                      {Object.entries(industries).map(([key, industry]) => (
                        <option key={key} value={key}>
                          {industry.icon} {industry.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      value={formData.basicInfo.department}
                      onChange={(e) =>
                        updateFormData("basicInfo", {
                          department: e.target.value,
                          position: "",
                          targetCompanies: [],
                        })
                      }
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        validationErrors.department
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                      required
                      disabled={!formData.basicInfo.industry}
                    >
                      <option value="">Select Department</option>
                      {formData.basicInfo.industry &&
                        Object.entries(
                          industries[formData.basicInfo.industry].departments
                        ).map(([key, dept]) => (
                          <option key={key} value={key}>
                            {dept.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Position *
                    </label>
                    <select
                      value={formData.basicInfo.position}
                      onChange={(e) =>
                        updateFormData("basicInfo", {
                          position: e.target.value,
                        })
                      }
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                        validationErrors.position
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                      required
                      disabled={!formData.basicInfo.department}
                    >
                      <option value="">Select Position</option>
                      {formData.basicInfo.industry &&
                        formData.basicInfo.department &&
                        industries[formData.basicInfo.industry].departments[
                          formData.basicInfo.department
                        ].positions.map((position) => (
                          <option key={position} value={position}>
                            {position}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Level
                    </label>
                    <select
                      value={formData.basicInfo.jobLevel}
                      onChange={(e) =>
                        updateFormData("basicInfo", {
                          jobLevel: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select Level</option>
                      <option value="entry">Entry Level</option>
                      <option value="junior">Junior</option>
                      <option value="mid">Mid Level</option>
                      <option value="senior">Senior</option>
                      <option value="lead">Lead/Principal</option>
                      <option value="director">Director</option>
                      <option value="vp">VP/Executive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      value={formData.basicInfo.urgency}
                      onChange={(e) =>
                        updateFormData("basicInfo", { urgency: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="low">Low Priority</option>
                      <option value="normal">Normal</option>
                      <option value="high">High Priority</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location & Remote Work
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={formData.basicInfo.location}
                      onChange={(e) =>
                        updateFormData("basicInfo", {
                          location: e.target.value,
                        })
                      }
                      placeholder="e.g., San Francisco, CA or Global"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.basicInfo.remoteWork}
                        onChange={(e) =>
                          updateFormData("basicInfo", {
                            remoteWork: e.target.checked,
                          })
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Remote work available
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Industry-specific company targeting */}
            {formData.basicInfo.industry &&
              formData.basicInfo.department &&
              industries[formData.basicInfo.industry].departments[
                formData.basicInfo.department
              ].companies && (
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Building className="w-5 h-5 mr-2" />
                    Target Companies (Optional)
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Select specific companies to tailor assessment questions and
                    benchmarks
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {industries[formData.basicInfo.industry].departments[
                      formData.basicInfo.department
                    ].companies.map((company) => (
                      <label
                        key={company}
                        className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-white cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.basicInfo.targetCompanies.includes(
                            company
                          )}
                          onChange={(e) => {
                            const companies = e.target.checked
                              ? [...formData.basicInfo.targetCompanies, company]
                              : formData.basicInfo.targetCompanies.filter(
                                  (c) => c !== company
                                );
                            updateFormData("basicInfo", {
                              targetCompanies: companies,
                            });
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 font-medium">
                          {company}
                        </span>
                      </label>
                    ))}
                  </div>
                  {formData.basicInfo.targetCompanies.length > 0 && (
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <Info className="w-4 h-4 inline mr-1" />
                        Assessment will include company-specific scenarios and
                        industry benchmarks for:{" "}
                        {formData.basicInfo.targetCompanies.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              )}
          </div>
        );

      case 1: // Position Details - COMPLETE VERSION
        return (
          <div className="space-y-6">
            {renderValidationErrors()}
            {renderAIRecommendations()}

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">
                    Position Details Configuration
                  </h4>
                  <p className="text-blue-700 text-sm">
                    Define specific requirements for{" "}
                    <strong>
                      {formData.basicInfo.position || "this position"}
                    </strong>{" "}
                    to create targeted assessment questions. The more detailed
                    your requirements, the better our AI can recommend relevant
                    questions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Basic Requirements */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Basic Requirements
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Experience Level *
                      </label>
                      <select
                        value={formData.positionDetails.experienceLevel}
                        onChange={(e) =>
                          updateFormData("positionDetails", {
                            experienceLevel: e.target.value,
                          })
                        }
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                          validationErrors.experienceLevel
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-blue-500"
                        }`}
                        required
                      >
                        <option value="">Select Experience Level</option>
                        <option value="entry">Entry Level (0-2 years)</option>
                        <option value="junior">Junior (2-4 years)</option>
                        <option value="mid">Mid Level (4-7 years)</option>
                        <option value="senior">
                          Senior Level (7-12 years)
                        </option>
                        <option value="principal">
                          Principal/Lead (12+ years)
                        </option>
                        <option value="executive">Executive (15+ years)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Employment Type
                        </label>
                        <select
                          value={formData.positionDetails.employmentType}
                          onChange={(e) =>
                            updateFormData("positionDetails", {
                              employmentType: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="">Select Type</option>
                          <option value="full-time">Full-time</option>
                          <option value="part-time">Part-time</option>
                          <option value="contract">Contract</option>
                          <option value="contract-to-hire">
                            Contract-to-hire
                          </option>
                          <option value="intern">Internship</option>
                          <option value="freelance">Freelance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Team Size
                        </label>
                        <select
                          value={formData.positionDetails.teamSize}
                          onChange={(e) =>
                            updateFormData("positionDetails", {
                              teamSize: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="">Select Team Size</option>
                          <option value="individual">
                            Individual Contributor
                          </option>
                          <option value="small">Small Team (2-5 people)</option>
                          <option value="medium">
                            Medium Team (6-15 people)
                          </option>
                          <option value="large">Large Team (16+ people)</option>
                          <option value="multiple">Multiple Teams</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Reporting Structure
                      </label>
                      <input
                        type="text"
                        value={formData.positionDetails.reportingTo}
                        onChange={(e) =>
                          updateFormData("positionDetails", {
                            reportingTo: e.target.value,
                          })
                        }
                        placeholder="e.g., Engineering Manager, Director of Product"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Salary Range (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.positionDetails.salaryRange}
                        onChange={(e) =>
                          updateFormData("positionDetails", {
                            salaryRange: e.target.value,
                          })
                        }
                        placeholder="e.g., $120,000 - $180,000"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.positionDetails.travelRequired}
                            onChange={(e) =>
                              updateFormData("positionDetails", {
                                travelRequired: e.target.checked,
                              })
                            }
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">
                            Travel Required
                          </span>
                        </label>

                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.positionDetails.securityClearance}
                            onChange={(e) =>
                              updateFormData("positionDetails", {
                                securityClearance: e.target.checked,
                              })
                            }
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">
                            Security Clearance Required
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Skills Section */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Key Skills Required *
                  </h3>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {getSkillsForPosition(formData.basicInfo.position).map(
                        (skill) => (
                          <label
                            key={skill}
                            className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <input
                              type="checkbox"
                              checked={formData.positionDetails.skillsRequired.includes(
                                skill
                              )}
                              onChange={(e) => {
                                const skills = e.target.checked
                                  ? [
                                      ...formData.positionDetails
                                        .skillsRequired,
                                      skill,
                                    ]
                                  : formData.positionDetails.skillsRequired.filter(
                                      (s) => s !== skill
                                    );
                                updateFormData("positionDetails", {
                                  skillsRequired: skills,
                                });
                              }}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">
                              {skill}
                            </span>
                          </label>
                        )
                      )}
                    </div>

                    {validationErrors.skillsRequired && (
                      <p className="text-red-600 text-sm flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        {validationErrors.skillsRequired}
                      </p>
                    )}

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-700">
                        <Info className="w-4 h-4 inline mr-1" />
                        Selected skills:{" "}
                        {formData.positionDetails.skillsRequired.length}. These
                        will be used to generate targeted assessment questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Detailed Requirements */}
              <div className="space-y-6">
                {/* Responsibilities */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Key Responsibilities
                  </h3>

                  <textarea
                    value={formData.positionDetails.responsibilities.join("\n")}
                    onChange={(e) =>
                      updateFormData("positionDetails", {
                        responsibilities: e.target.value
                          .split("\n")
                          .filter((r) => r.trim()),
                      })
                    }
                    placeholder="• Lead development of new features and products&#10;• Collaborate with cross-functional teams including Product, Design, and QA&#10;• Mentor junior developers and conduct code reviews&#10;• Participate in technical architecture decisions&#10;• Ensure code quality and best practices"
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter each responsibility on a new line. These will help
                    generate relevant scenario-based questions.
                  </p>
                </div>

                {/* Qualifications */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Required Qualifications
                  </h3>

                  <textarea
                    value={formData.positionDetails.qualifications.join("\n")}
                    onChange={(e) =>
                      updateFormData("positionDetails", {
                        qualifications: e.target.value
                          .split("\n")
                          .filter((q) => q.trim()),
                      })
                    }
                    placeholder="• Bachelor's degree in Computer Science or related field&#10;• 5+ years of experience in full-stack development&#10;• Strong proficiency in React, Node.js, and modern JavaScript&#10;• Experience with cloud platforms (AWS, GCP, or Azure)&#10;• Excellent problem-solving and communication skills"
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Language Requirements */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Language Requirements
                  </h3>

                  <div className="space-y-3">
                    {[
                      "English",
                      "Spanish",
                      "French",
                      "German",
                      "Chinese",
                      "Japanese",
                      "Portuguese",
                    ].map((language) => (
                      <div
                        key={language}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                      >
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={formData.positionDetails.languageRequirements.some(
                              (lr) => lr.language === language
                            )}
                            onChange={(e) => {
                              const languages = e.target.checked
                                ? [
                                    ...formData.positionDetails
                                      .languageRequirements,
                                    { language, level: "conversational" },
                                  ]
                                : formData.positionDetails.languageRequirements.filter(
                                    (lr) => lr.language !== language
                                  );
                              updateFormData("positionDetails", {
                                languageRequirements: languages,
                              });
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">
                            {language}
                          </span>
                        </label>

                        {formData.positionDetails.languageRequirements.some(
                          (lr) => lr.language === language
                        ) && (
                          <select
                            value={
                              formData.positionDetails.languageRequirements.find(
                                (lr) => lr.language === language
                              )?.level || "conversational"
                            }
                            onChange={(e) => {
                              const languages =
                                formData.positionDetails.languageRequirements.map(
                                  (lr) =>
                                    lr.language === language
                                      ? { ...lr, level: e.target.value }
                                      : lr
                                );
                              updateFormData("positionDetails", {
                                languageRequirements: languages,
                              });
                            }}
                            className="text-sm border border-gray-300 rounded px-2 py-1"
                          >
                            <option value="basic">Basic</option>
                            <option value="conversational">
                              Conversational
                            </option>
                            <option value="professional">Professional</option>
                            <option value="native">Native</option>
                          </select>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Preferred Certifications
                  </h3>

                  <div className="space-y-2">
                    {getCertificationsForPosition(
                      formData.basicInfo.position
                    ).map((cert) => (
                      <label
                        key={cert}
                        className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.positionDetails.certifications.includes(
                            cert
                          )}
                          onChange={(e) => {
                            const certs = e.target.checked
                              ? [
                                  ...formData.positionDetails.certifications,
                                  cert,
                                ]
                              : formData.positionDetails.certifications.filter(
                                  (c) => c !== cert
                                );
                            updateFormData("positionDetails", {
                              certifications: certs,
                            });
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Company-Specific Section for Finance */}
            {formData.basicInfo.industry === "finance" && (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Financial Services Specific Requirements
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Target Companies (Optional)
                    </label>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {industries[formData.basicInfo.industry].departments[
                        formData.basicInfo.department
                      ]?.companies?.map((company) => (
                        <label
                          key={company}
                          className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-white cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.basicInfo.targetCompanies.includes(
                              company
                            )}
                            onChange={(e) => {
                              const companies = e.target.checked
                                ? [
                                    ...formData.basicInfo.targetCompanies,
                                    company,
                                  ]
                                : formData.basicInfo.targetCompanies.filter(
                                    (c) => c !== company
                                  );
                              updateFormData("basicInfo", {
                                targetCompanies: companies,
                              });
                            }}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700 font-medium">
                            {company}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Regulatory Requirements
                    </label>
                    <div className="space-y-2">
                      {[
                        "FINRA Series 7",
                        "FINRA Series 63",
                        "CFA Charter",
                        "FRM Certification",
                        "CAIA Charter",
                        "SOX Compliance",
                      ].map((req) => (
                        <label
                          key={req}
                          className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-white cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{req}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {formData.basicInfo.targetCompanies.length > 0 && (
                  <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <Info className="w-4 h-4 inline mr-1" />
                      Assessment will include company-specific scenarios and
                      case studies from:{" "}
                      <strong>
                        {formData.basicInfo.targetCompanies.join(", ")}
                      </strong>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Company Culture and Values */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                Company Culture & Values (Optional)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Culture
                  </label>
                  <textarea
                    value={formData.positionDetails.companySpecific.culture}
                    onChange={(e) =>
                      updateFormData("positionDetails", {
                        companySpecific: {
                          ...formData.positionDetails.companySpecific,
                          culture: e.target.value,
                        },
                      })
                    }
                    placeholder="Describe your company culture, work environment, and team dynamics..."
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Core Values
                  </label>
                  <div className="space-y-2">
                    {[
                      "Innovation",
                      "Integrity",
                      "Collaboration",
                      "Excellence",
                      "Customer Focus",
                      "Diversity & Inclusion",
                      "Continuous Learning",
                      "Accountability",
                    ].map((value) => (
                      <label
                        key={value}
                        className="flex items-center space-x-2 p-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.positionDetails.companySpecific.values.includes(
                            value
                          )}
                          onChange={(e) => {
                            const values = e.target.checked
                              ? [
                                  ...formData.positionDetails.companySpecific
                                    .values,
                                  value,
                                ]
                              : formData.positionDetails.companySpecific.values.filter(
                                  (v) => v !== value
                                );
                            updateFormData("positionDetails", {
                              companySpecific: {
                                ...formData.positionDetails.companySpecific,
                                values,
                              },
                            });
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{value}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2: // Assessment Configuration
        return (
          <div className="space-y-6">
            {renderValidationErrors()}
            {renderAIRecommendations()}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Basic Configuration */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Timing & Scoring
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Duration (minutes) *
                      </label>
                      <input
                        type="number"
                        value={formData.assessmentConfig.duration}
                        onChange={(e) =>
                          updateFormData("assessmentConfig", {
                            duration: parseInt(e.target.value) || 60,
                          })
                        }
                        min="15"
                        max="300"
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                          validationErrors.duration
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-blue-500"
                        }`}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        15-300 minutes
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Number of Questions *
                      </label>
                      <input
                        type="number"
                        value={formData.assessmentConfig.questionCount}
                        onChange={(e) =>
                          updateFormData("assessmentConfig", {
                            questionCount: parseInt(e.target.value) || 20,
                          })
                        }
                        min="5"
                        max="100"
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                          validationErrors.questionCount
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-blue-500"
                        }`}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        5-100 questions
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Passing Score (%) *
                      </label>
                      <input
                        type="number"
                        value={formData.assessmentConfig.passingScore}
                        onChange={(e) =>
                          updateFormData("assessmentConfig", {
                            passingScore: parseInt(e.target.value) || 70,
                          })
                        }
                        min="50"
                        max="100"
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                          validationErrors.passingScore
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-blue-500"
                        }`}
                      />
                      <p className="text-xs text-gray-500 mt-1">50-100%</p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Max Attempts
                      </label>
                      <select
                        value={formData.assessmentConfig.maxAttempts}
                        onChange={(e) =>
                          updateFormData("assessmentConfig", {
                            maxAttempts: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value={1}>1 Attempt</option>
                        <option value={2}>2 Attempts</option>
                        <option value={3}>3 Attempts</option>
                        <option value={99}>Unlimited</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Question Types Configuration */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Question Types & Distribution
                  </h3>

                  <div className="space-y-4">
                    {Object.entries(
                      formData.assessmentConfig.questionTypes
                    ).map(([type, config]) => (
                      <div
                        key={type}
                        className="p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <label className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              checked={config.enabled}
                              onChange={(e) => {
                                updateFormData("assessmentConfig", {
                                  questionTypes: {
                                    ...formData.assessmentConfig.questionTypes,
                                    [type]: {
                                      ...config,
                                      enabled: e.target.checked,
                                    },
                                  },
                                });
                              }}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="font-medium text-gray-900 capitalize">
                              {type.replace(/([A-Z])/g, " $1").trim()}
                            </span>
                          </label>
                          <span className="text-sm text-gray-500">
                            {
                              questionTypes[
                                type.replace(/([A-Z])/g, "-$1").toLowerCase()
                              ]?.description
                            }
                          </span>
                        </div>

                        {config.enabled && (
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-medium text-gray-600 mb-1">
                                Count
                              </label>
                              <input
                                type="number"
                                value={config.count}
                                onChange={(e) => {
                                  updateFormData("assessmentConfig", {
                                    questionTypes: {
                                      ...formData.assessmentConfig
                                        .questionTypes,
                                      [type]: {
                                        ...config,
                                        count: parseInt(e.target.value) || 0,
                                      },
                                    },
                                  });
                                }}
                                min="0"
                                max="50"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-600 mb-1">
                                Weight (%)
                              </label>
                              <input
                                type="number"
                                value={config.weight}
                                onChange={(e) => {
                                  updateFormData("assessmentConfig", {
                                    questionTypes: {
                                      ...formData.assessmentConfig
                                        .questionTypes,
                                      [type]: {
                                        ...config,
                                        weight: parseInt(e.target.value) || 0,
                                      },
                                    },
                                  });
                                }}
                                min="0"
                                max="100"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <Info className="w-4 h-4 inline mr-1" />
                      Total questions:{" "}
                      {Object.values(
                        formData.assessmentConfig.questionTypes
                      ).reduce(
                        (sum, config) =>
                          sum + (config.enabled ? config.count : 0),
                        0
                      )}{" "}
                      | Total weight:{" "}
                      {Object.values(
                        formData.assessmentConfig.questionTypes
                      ).reduce(
                        (sum, config) =>
                          sum + (config.enabled ? config.weight : 0),
                        0
                      )}
                      %
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Advanced Configuration */}
              <div className="space-y-6">
                {/* Difficulty Distribution */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Difficulty Distribution
                  </h3>

                  <div className="space-y-4">
                    {Object.entries(formData.assessmentConfig.difficulty).map(
                      ([level, percentage]) => (
                        <div key={level} className="space-y-2">
                          <div className="flex justify-between">
                            <label className="text-sm font-medium text-gray-700 capitalize">
                              {level}
                            </label>
                            <span className="text-sm text-gray-500">
                              {percentage}%
                            </span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={percentage}
                            onChange={(e) => {
                              updateFormData("assessmentConfig", {
                                difficulty: {
                                  ...formData.assessmentConfig.difficulty,
                                  [level]: parseInt(e.target.value),
                                },
                              });
                            }}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Total:{" "}
                      {Object.values(
                        formData.assessmentConfig.difficulty
                      ).reduce((sum, val) => sum + val, 0)}
                      %
                      {Object.values(
                        formData.assessmentConfig.difficulty
                      ).reduce((sum, val) => sum + val, 0) !== 100 && (
                        <span className="text-red-600 ml-2">
                          ⚠ Should equal 100%
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Assessment Options */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Assessment Options
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        key: "randomizeQuestions",
                        label: "Randomize Questions",
                        description:
                          "Questions appear in random order for each candidate",
                        recommended: true,
                      },
                      {
                        key: "showProgress",
                        label: "Show Progress",
                        description: "Display progress bar to candidates",
                        recommended: true,
                      },
                      {
                        key: "allowPause",
                        label: "Allow Pause",
                        description:
                          "Candidates can pause and resume the assessment",
                        recommended: false,
                      },
                      {
                        key: "autoSubmit",
                        label: "Auto Submit",
                        description: "Automatically submit when time expires",
                        recommended: true,
                      },
                      {
                        key: "adaptiveTesting",
                        label: "Adaptive Testing",
                        description:
                          "AI adjusts difficulty based on performance",
                        recommended: false,
                        premium: true,
                      },
                      {
                        key: "aiPowered",
                        label: "AI-Powered Insights",
                        description: "Generate detailed performance insights",
                        recommended: true,
                        premium: true,
                      },
                    ].map((option) => (
                      <div
                        key={option.key}
                        className="flex items-start space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={formData.assessmentConfig[option.key]}
                          onChange={(e) =>
                            updateFormData("assessmentConfig", {
                              [option.key]: e.target.checked,
                            })
                          }
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <label className="font-medium text-gray-900">
                              {option.label}
                            </label>
                            {option.recommended && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                Recommended
                              </span>
                            )}
                            {option.premium && (
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                Premium
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feedback Settings */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Feedback & Results
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Feedback Level
                      </label>
                      <select
                        value={formData.assessmentConfig.feedbackLevel}
                        onChange={(e) =>
                          updateFormData("assessmentConfig", {
                            feedbackLevel: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="none">No Feedback</option>
                        <option value="basic">Basic (Score Only)</option>
                        <option value="detailed">
                          Detailed (Score + Analysis)
                        </option>
                        <option value="comprehensive">
                          Comprehensive (Full Report)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Custom Instructions
                      </label>
                      <textarea
                        value={formData.assessmentConfig.customInstructions}
                        onChange={(e) =>
                          updateFormData("assessmentConfig", {
                            customInstructions: e.target.value,
                          })
                        }
                        placeholder="Additional instructions for candidates (e.g., specific tools to use, code style preferences, etc.)"
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment Preview */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Assessment Preview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Duration & Questions
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      • Total Time: {formData.assessmentConfig.duration} minutes
                    </li>
                    <li>
                      • Questions: {formData.assessmentConfig.questionCount}
                    </li>
                    <li>
                      • Avg Time per Question:{" "}
                      {Math.round(
                        formData.assessmentConfig.duration /
                          formData.assessmentConfig.questionCount
                      )}{" "}
                      min
                    </li>
                    <li>
                      • Passing Score: {formData.assessmentConfig.passingScore}%
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Question Types
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {Object.entries(formData.assessmentConfig.questionTypes)
                      .filter(([, config]) => config.enabled)
                      .map(([type, config]) => (
                        <li key={type}>
                          • {type.replace(/([A-Z])/g, " $1").trim()}:{" "}
                          {config.count} ({config.weight}%)
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Difficulty Mix
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {Object.entries(formData.assessmentConfig.difficulty).map(
                      ([level, percentage]) => (
                        <li key={level} className="capitalize">
                          • {level}: {percentage}%
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // Question Selection - Enhanced with filters
        return (
          <div className="space-y-6">
            {renderValidationErrors()}

            {/* Question Bank Header */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Database className="w-6 h-6 mr-2" />
                    AI-Powered Question Selection
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Based on your requirements, we've curated{" "}
                    {generateSampleQuestions.length} relevant questions from our
                    database of 50,000+ validated questions.
                  </p>
                </div>
                <button
                  onClick={() => setShowQuestionBank(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Browse All Questions
                </button>
              </div>

              {/* Question Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Filter by Type
                  </label>
                  <select
                    value={formData.questionFilters.type}
                    onChange={(e) =>
                      updateFormData("questionFilters", {
                        type: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="">All Types</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="coding">Coding</option>
                    <option value="case-study">Case Study</option>
                    <option value="video">Video Response</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Filter by Difficulty
                  </label>
                  <select
                    value={formData.questionFilters.difficulty}
                    onChange={(e) =>
                      updateFormData("questionFilters", {
                        difficulty: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="">All Difficulties</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Filter by Skill
                  </label>
                  <select
                    value={formData.questionFilters.skill}
                    onChange={(e) =>
                      updateFormData("questionFilters", {
                        skill: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="">All Skills</option>
                    {getSkillsForPosition(formData.basicInfo.position).map(
                      (skill) => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Specific
                  </label>
                  <select
                    value={formData.questionFilters.company}
                    onChange={(e) =>
                      updateFormData("questionFilters", {
                        company: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="">All Companies</option>
                    {formData.basicInfo.targetCompanies.map((company) => (
                      <option key={company} value={company}>
                        {company}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Selection Summary */}
              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-blue-900">
                    Selected: {selectedQuestions.length} /{" "}
                    {formData.assessmentConfig.questionCount} questions
                  </span>
                  <div className="w-32 bg-blue-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (selectedQuestions.length /
                            formData.assessmentConfig.questionCount) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedQuestions([])}
                    className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => {
                      // Auto-select recommended questions
                      const recommended = generateSampleQuestions.slice(
                        0,
                        formData.assessmentConfig.questionCount
                      );
                      setSelectedQuestions(recommended);
                    }}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Auto-Select
                  </button>
                </div>
              </div>
            </div>

            {/* Question Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {generateSampleQuestions.map((question) => (
                <div
                  key={question.id}
                  className={`border-2 rounded-xl p-6 transition-all duration-200 cursor-pointer ${
                    selectedQuestions.find((q) => q.id === question.id)
                      ? "border-blue-500 bg-blue-50 shadow-lg"
                      : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                  onClick={() => handleQuestionSelect(question)}
                >
                  {/* Question Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          question.type === "coding"
                            ? "bg-purple-100 text-purple-800"
                            : question.type === "multiple-choice"
                            ? "bg-blue-100 text-blue-800"
                            : question.type === "case-study"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {question.type.replace("-", " ").toUpperCase()}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          question.difficulty === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : question.difficulty === "Intermediate"
                            ? "bg-yellow-100 text-yellow-700"
                            : question.difficulty === "Advanced"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {question.difficulty}
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={
                        selectedQuestions.find((q) => q.id === question.id)
                          ? true
                          : false
                      }
                      onChange={() => handleQuestionSelect(question)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>

                  {/* Question Content */}
                  <h4 className="font-medium text-gray-900 mb-3 line-clamp-2">
                    {question.question}
                  </h4>

                  {/* Question Details */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Skill: {question.skill}</span>
                      <span>{question.timeLimit} min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>
                        Used: {question.usageCount.toLocaleString()} times
                      </span>
                      <span className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-500 mr-1" />
                        {question.successRate}% success
                      </span>
                    </div>
                    {question.validated && (
                      <div className="flex items-center text-green-600">
                        <Check className="w-3 h-3 mr-1" />
                        Expert Validated
                      </div>
                    )}
                  </div>

                  {/* Question Preview */}
                  {question.type === "multiple-choice" && question.options && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">
                        Sample options:
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {question.options.slice(0, 2).map((option, idx) => (
                          <li key={idx}>• {option}</li>
                        ))}
                        {question.options.length > 2 && (
                          <li className="text-gray-500">
                            ... and {question.options.length - 2} more
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {question.type === "coding" && question.starterCode && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">
                        Languages available:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {Object.keys(question.starterCode).map((lang) => (
                          <span
                            key={lang}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {question.type === "case-study" && question.rubric && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs text-gray-500 mb-2">
                        Evaluation criteria:
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {question.rubric.slice(0, 2).map((criteria, idx) => (
                          <li key={idx}>
                            • {criteria.criteria} ({criteria.weight}%)
                          </li>
                        ))}
                        {question.rubric.length > 2 && (
                          <li className="text-gray-500">
                            ... and {question.rubric.length - 2} more
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3 border-t border-gray-200 flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Preview question functionality
                        alert("Question preview functionality");
                      }}
                      className="flex-1 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
                    >
                      <Eye className="w-3 h-3 mr-1 inline" />
                      Preview
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Edit question functionality
                        alert("Question edit functionality");
                      }}
                      className="flex-1 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors"
                    >
                      <Edit className="w-3 h-3 mr-1 inline" />
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {generateSampleQuestions.length === 0 && (
              <div className="text-center py-12">
                <Database className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or browse the complete question
                  bank.
                </p>
                <button
                  onClick={() => setShowQuestionBank(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Browse Question Bank
                </button>
              </div>
            )}

            {/* AI Recommendations Panel */}
            {selectedQuestions.length > 0 && (
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-purple-600" />
                  AI Assessment Analysis
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Skill Coverage
                    </h4>
                    <div className="space-y-2">
                      {getSkillsForPosition(formData.basicInfo.position)
                        .slice(0, 4)
                        .map((skill) => {
                          const coverage = selectedQuestions.filter(
                            (q) => q.skill === skill
                          ).length;
                          return (
                            <div
                              key={skill}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-gray-600">{skill}</span>
                              <span
                                className={
                                  coverage > 0
                                    ? "text-green-600"
                                    : "text-red-600"
                                }
                              >
                                {coverage} questions
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Difficulty Balance
                    </h4>
                    <div className="space-y-2">
                      {["Beginner", "Intermediate", "Advanced", "Expert"].map(
                        (level) => {
                          const count = selectedQuestions.filter(
                            (q) => q.difficulty === level
                          ).length;
                          const percentage =
                            selectedQuestions.length > 0
                              ? Math.round(
                                  (count / selectedQuestions.length) * 100
                                )
                              : 0;
                          return (
                            <div
                              key={level}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-gray-600">{level}</span>
                              <span className="text-gray-900">
                                {count} ({percentage}%)
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Assessment Quality
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Avg Success Rate</span>
                        <span className="text-gray-900">
                          {selectedQuestions.length > 0
                            ? Math.round(
                                selectedQuestions.reduce(
                                  (sum, q) => sum + q.successRate,
                                  0
                                ) / selectedQuestions.length
                              )
                            : 0}
                          %
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Usage</span>
                        <span className="text-gray-900">
                          {selectedQuestions
                            .reduce((sum, q) => sum + q.usageCount, 0)
                            .toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          Validated Questions
                        </span>
                        <span className="text-gray-900">
                          {selectedQuestions.filter((q) => q.validated).length}{" "}
                          / {selectedQuestions.length}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Est. Duration</span>
                        <span className="text-gray-900">
                          {selectedQuestions.reduce(
                            (sum, q) => sum + q.timeLimit,
                            0
                          )}{" "}
                          min
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedQuestions.length <
                  formData.assessmentConfig.questionCount && (
                  <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <AlertTriangle className="w-4 h-4 inline mr-1" />
                      You need{" "}
                      {formData.assessmentConfig.questionCount -
                        selectedQuestions.length}{" "}
                      more questions to complete your assessment.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 4: // Security & Proctoring - Enhanced
        return (
          <div className="space-y-6">
            {renderValidationErrors()}
            {renderAIRecommendations()}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Security Level */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Security Level Configuration
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        value: "basic",
                        label: "Basic Security",
                        description:
                          "Standard monitoring with basic integrity checks",
                        features: [
                          "Time tracking",
                          "Basic tab monitoring",
                          "Simple reporting",
                        ],
                        recommended:
                          "Entry-level positions, low-stakes assessments",
                      },
                      {
                        value: "medium",
                        label: "Enhanced Security",
                        description:
                          "Comprehensive monitoring with AI-powered detection",
                        features: [
                          "Advanced proctoring",
                          "Face detection",
                          "Behavior analysis",
                          "Real-time alerts",
                        ],
                        recommended:
                          "Professional roles, technical assessments",
                      },
                      {
                        value: "strict",
                        label: "Maximum Security",
                        description:
                          "Enterprise-grade security with full monitoring",
                        features: [
                          "Live proctoring",
                          "Biometric verification",
                          "Full session recording",
                          "Advanced analytics",
                        ],
                        recommended:
                          "Senior positions, sensitive roles, compliance requirements",
                      },
                    ].map((level) => (
                      <div
                        key={level.value}
                        className={`p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          formData.settings.securityLevel === level.value
                            ? "border-blue-500 bg-blue-50 shadow-lg"
                            : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                        }`}
                        onClick={() =>
                          updateFormData("settings", {
                            securityLevel: level.value,
                          })
                        }
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {level.label}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {level.description}
                            </p>
                          </div>
                          <input
                            type="radio"
                            name="securityLevel"
                            value={level.value}
                            checked={
                              formData.settings.securityLevel === level.value
                            }
                            onChange={(e) =>
                              updateFormData("settings", {
                                securityLevel: e.target.value,
                              })
                            }
                            className="mt-1 text-blue-600 focus:ring-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs font-medium text-gray-700">
                            Key Features:
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {level.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <Check className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs text-gray-500 mt-2">
                            <strong>Best for:</strong> {level.recommended}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Monitoring Settings */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    AI Monitoring & Detection
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        key: "faceDetection",
                        label: "Face Detection",
                        description:
                          "Ensure candidate remains visible throughout assessment",
                        premium: false,
                      },
                      {
                        key: "eyeTracking",
                        label: "Eye Tracking Analysis",
                        description:
                          "Monitor eye movement patterns for attention and focus",
                        premium: true,
                      },
                      {
                        key: "voiceAnalysis",
                        label: "Voice Pattern Analysis",
                        description:
                          "Detect multiple speakers or coaching attempts",
                        premium: true,
                      },
                      {
                        key: "emotionDetection",
                        label: "Emotion Recognition",
                        description:
                          "Analyze facial expressions for stress and confidence levels",
                        premium: true,
                      },
                      {
                        key: "suspiciousActivity",
                        label: "Suspicious Activity Detection",
                        description:
                          "AI-powered detection of unusual behavior patterns",
                        premium: false,
                      },
                    ].map((setting) => (
                      <div
                        key={setting.key}
                        className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg"
                      >
                        <input
                          type="checkbox"
                          checked={formData.settings.aiMonitoring[setting.key]}
                          onChange={(e) =>
                            updateFormData("settings", {
                              aiMonitoring: {
                                ...formData.settings.aiMonitoring,
                                [setting.key]: e.target.checked,
                              },
                            })
                          }
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          disabled={
                            setting.premium &&
                            formData.settings.securityLevel === "basic"
                          }
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <label className="font-medium text-gray-900">
                              {setting.label}
                            </label>
                            {setting.premium && (
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                Premium
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {setting.description}
                          </p>
                          {setting.premium &&
                            formData.settings.securityLevel === "basic" && (
                              <p className="text-xs text-yellow-600 mt-1">
                                Requires Enhanced or Maximum security level
                              </p>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Security Features */}
              <div className="space-y-6">
                {/* Browser & System Security */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Monitor className="w-5 h-5 mr-2" />
                    Browser & System Security
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        key: "requireWebcam",
                        label: "Require Webcam",
                        description:
                          "Mandatory webcam for identity verification and monitoring",
                        recommended: true,
                      },
                      {
                        key: "requireMicrophone",
                        label: "Require Microphone",
                        description:
                          "Enable audio monitoring and voice commands",
                        recommended: false,
                      },
                      {
                        key: "preventTabSwitching",
                        label: "Prevent Tab Switching",
                        description:
                          "Block attempts to navigate away from assessment",
                        recommended: true,
                      },
                      {
                        key: "preventCopyPaste",
                        label: "Disable Copy/Paste",
                        description:
                          "Prevent copying questions or pasting answers",
                        recommended: true,
                      },
                      {
                        key: "preventPrintScreen",
                        label: "Block Screenshots",
                        description:
                          "Disable print screen and screenshot functionality",
                        recommended: true,
                      },
                      {
                        key: "fullScreenMode",
                        label: "Force Full Screen",
                        description: "Lock assessment in full-screen mode",
                        recommended: true,
                      },
                      {
                        key: "browserLockdown",
                        label: "Browser Lockdown",
                        description:
                          "Comprehensive browser restriction and monitoring",
                        recommended: false,
                        premium: true,
                      },
                    ].map((setting) => (
                      <div
                        key={setting.key}
                        className="flex items-start space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={formData.settings[setting.key]}
                          onChange={(e) =>
                            updateFormData("settings", {
                              [setting.key]: e.target.checked,
                            })
                          }
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <label className="font-medium text-gray-900">
                              {setting.label}
                            </label>
                            {setting.recommended && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                Recommended
                              </span>
                            )}
                            {setting.premium && (
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                Premium
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {setting.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessment Tools */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Allowed Assessment Tools
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        key: "allowCalculator",
                        label: "Calculator",
                        description:
                          "Built-in calculator for mathematical assessments",
                      },
                      {
                        key: "allowNotepad",
                        label: "Digital Notepad",
                        description: "Scratch pad for notes and calculations",
                      },
                    ].map((tool) => (
                      <div
                        key={tool.key}
                        className="flex items-start space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={formData.settings[tool.key]}
                          onChange={(e) =>
                            updateFormData("settings", {
                              [tool.key]: e.target.checked,
                            })
                          }
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <label className="font-medium text-gray-900">
                            {tool.label}
                          </label>
                          <p className="text-sm text-gray-600">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Security */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Advanced Security Options
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        key: "ipRestriction",
                        label: "IP Address Restriction",
                        description:
                          "Limit access to specific IP addresses or ranges",
                      },
                      {
                        key: "timeZoneRestriction",
                        label: "Time Zone Validation",
                        description:
                          "Verify candidate location based on time zone",
                      },
                      {
                        key: "deviceRestriction",
                        label: "Device Fingerprinting",
                        description: "Track and restrict specific devices",
                      },
                      {
                        key: "networkMonitoring",
                        label: "Network Monitoring",
                        description:
                          "Monitor network activity for suspicious connections",
                      },
                      {
                        key: "behaviorAnalysis",
                        label: "Behavior Pattern Analysis",
                        description:
                          "AI analysis of typing patterns and interaction behavior",
                      },
                      {
                        key: "plagiarismDetection",
                        label: "Real-time Plagiarism Detection",
                        description:
                          "Check answers against known sources and databases",
                      },
                    ].map((option) => (
                      <div
                        key={option.key}
                        className="flex items-start space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={formData.settings[option.key]}
                          onChange={(e) =>
                            updateFormData("settings", {
                              [option.key]: e.target.checked,
                            })
                          }
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <label className="font-medium text-gray-900">
                            {option.label}
                          </label>
                          <p className="text-sm text-gray-600">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Security Notifications
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        key: "emailCandidate",
                        label: "Email Candidate",
                        description:
                          "Send assessment instructions and results to candidate",
                      },
                      {
                        key: "emailRecruiter",
                        label: "Email Recruiter",
                        description:
                          "Notify recruiters of assessment completion and incidents",
                      },
                      {
                        key: "smsReminder",
                        label: "SMS Reminders",
                        description:
                          "Send SMS reminders for scheduled assessments",
                      },
                      {
                        key: "slackIntegration",
                        label: "Slack Integration",
                        description: "Send notifications to Slack channels",
                      },
                    ].map((notification) => (
                      <div
                        key={notification.key}
                        className="flex items-start space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={
                            formData.settings.notifications[notification.key]
                          }
                          onChange={(e) =>
                            updateFormData("settings", {
                              notifications: {
                                ...formData.settings.notifications,
                                [notification.key]: e.target.checked,
                              },
                            })
                          }
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <label className="font-medium text-gray-900">
                            {notification.label}
                          </label>
                          <p className="text-sm text-gray-600">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    {formData.settings.notifications.slackIntegration && (
                      <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Webhook URL
                        </label>
                        <input
                          type="url"
                          value={formData.settings.notifications.webhookUrl}
                          onChange={(e) =>
                            updateFormData("settings", {
                              notifications: {
                                ...formData.settings.notifications,
                                webhookUrl: e.target.value,
                              },
                            })
                          }
                          placeholder="https://hooks.slack.com/services/..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Security Summary */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-red-600" />
                Security Configuration Summary
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Security Level
                  </h4>
                  <p className="text-sm text-gray-600 capitalize mb-2">
                    {formData.settings.securityLevel} Security
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          formData.settings.proctoringEnabled
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <span
                        className={
                          formData.settings.proctoringEnabled
                            ? "text-green-700"
                            : "text-gray-500"
                        }
                      >
                        Live Proctoring{" "}
                        {formData.settings.proctoringEnabled
                          ? "Enabled"
                          : "Disabled"}
                      </span>
                    </div>
                    <div className="flex items-center text-xs">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          formData.settings.recordSession
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <span
                        className={
                          formData.settings.recordSession
                            ? "text-green-700"
                            : "text-gray-500"
                        }
                      >
                        Session Recording{" "}
                        {formData.settings.recordSession
                          ? "Enabled"
                          : "Disabled"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    AI Monitoring
                  </h4>
                  <div className="space-y-1">
                    {Object.entries(formData.settings.aiMonitoring).map(
                      ([key, enabled]) => (
                        <div key={key} className="flex items-center text-xs">
                          <div
                            className={`w-2 h-2 rounded-full mr-2 ${
                              enabled ? "bg-green-500" : "bg-gray-300"
                            }`}
                          ></div>
                          <span
                            className={
                              enabled ? "text-green-700" : "text-gray-500"
                            }
                          >
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}{" "}
                            {enabled ? "✓" : "✗"}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Browser Security
                  </h4>
                  <div className="space-y-1">
                    {[
                      { key: "preventTabSwitching", label: "Tab Control" },
                      { key: "preventCopyPaste", label: "Copy/Paste Block" },
                      { key: "fullScreenMode", label: "Full Screen Lock" },
                      { key: "plagiarismDetection", label: "Plagiarism Check" },
                    ].map(({ key, label }) => (
                      <div key={key} className="flex items-center text-xs">
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            formData.settings[key]
                              ? "bg-green-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span
                          className={
                            formData.settings[key]
                              ? "text-green-700"
                              : "text-gray-500"
                          }
                        >
                          {label} {formData.settings[key] ? "✓" : "✗"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {formData.settings.securityLevel === "basic" && (
                <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <AlertTriangle className="w-4 h-4 inline mr-1" />
                    Consider upgrading to Enhanced or Maximum security for
                    sensitive positions or compliance requirements.
                  </p>
                </div>
              )}
            </div>
          </div>
        );

      case 5: // Advanced Settings - Scheduling, Collaboration, Analytics
        return (
          <div className="space-y-6">
            {renderValidationErrors()}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Scheduling & Access */}
              <div className="space-y-6">
                {/* Scheduling Settings */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Scheduling & Availability
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Scheduling Type
                      </label>
                      <select
                        value={formData.scheduling.schedulingType}
                        onChange={(e) =>
                          updateFormData("scheduling", {
                            schedulingType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="open">
                          Open Access - Candidates can start anytime
                        </option>
                        <option value="scheduled">
                          Scheduled Sessions - Specific time slots
                        </option>
                        <option value="invite-only">
                          Invite Only - Manual candidate invitation
                        </option>
                        <option value="group">
                          Group Assessment - Multiple candidates simultaneously
                        </option>
                      </select>
                    </div>

                    {formData.scheduling.schedulingType !== "open" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Available From
                          </label>
                          <input
                            type="datetime-local"
                            value={formData.scheduling.availableFrom}
                            onChange={(e) =>
                              updateFormData("scheduling", {
                                availableFrom: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Available Until
                          </label>
                          <input
                            type="datetime-local"
                            value={formData.scheduling.availableTo}
                            onChange={(e) =>
                              updateFormData("scheduling", {
                                availableTo: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Time Zone
                        </label>
                        <select
                          value={formData.scheduling.timeZone}
                          onChange={(e) =>
                            updateFormData("scheduling", {
                              timeZone: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="UTC">
                            UTC (Coordinated Universal Time)
                          </option>
                          <option value="America/New_York">
                            Eastern Time (ET)
                          </option>
                          <option value="America/Chicago">
                            Central Time (CT)
                          </option>
                          <option value="America/Denver">
                            Mountain Time (MT)
                          </option>
                          <option value="America/Los_Angeles">
                            Pacific Time (PT)
                          </option>
                          <option value="Europe/London">London (GMT)</option>
                          <option value="Europe/Berlin">Berlin (CET)</option>
                          <option value="Asia/Tokyo">Tokyo (JST)</option>
                          <option value="Asia/Shanghai">Shanghai (CST)</option>
                          <option value="Australia/Sydney">
                            Sydney (AEST)
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Max Participants
                        </label>
                        <input
                          type="number"
                          value={formData.scheduling.maxParticipants}
                          onChange={(e) =>
                            updateFormData("scheduling", {
                              maxParticipants: parseInt(e.target.value) || 100,
                            })
                          }
                          min="1"
                          max="1000"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Grace Period (minutes)
                        </label>
                        <input
                          type="number"
                          value={formData.scheduling.gracePeriod}
                          onChange={(e) =>
                            updateFormData("scheduling", {
                              gracePeriod: parseInt(e.target.value) || 10,
                            })
                          }
                          min="0"
                          max="60"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Additional time allowed after scheduled start
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Late Submission Window (minutes)
                        </label>
                        <input
                          type="number"
                          value={formData.scheduling.lateSubmissionWindow}
                          onChange={(e) =>
                            updateFormData("scheduling", {
                              lateSubmissionWindow:
                                parseInt(e.target.value) || 5,
                            })
                          }
                          min="0"
                          max="30"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Extra time for technical issues
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          key: "waitingRoom",
                          label: "Virtual Waiting Room",
                          description:
                            "Hold candidates before assessment starts",
                        },
                        {
                          key: "autoStart",
                          label: "Auto-start Assessment",
                          description: "Begin automatically at scheduled time",
                        },
                      ].map((option) => (
                        <label
                          key={option.key}
                          className="flex items-start space-x-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.scheduling[option.key]}
                            onChange={(e) =>
                              updateFormData("scheduling", {
                                [option.key]: e.target.checked,
                              })
                            }
                            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <div>
                            <div className="font-medium text-gray-900">
                              {option.label}
                            </div>
                            <div className="text-sm text-gray-600">
                              {option.description}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Collaboration Settings */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Team Collaboration
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Assessment Administrators
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <User className="w-5 h-5 text-blue-600" />
                          <div className="flex-1">
                            <span className="font-medium text-blue-900">
                              Mohamedelammari
                            </span>
                            <span className="text-sm text-blue-600 ml-2">
                              (Owner)
                            </span>
                          </div>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            Admin
                          </span>
                        </div>

                        {formData.collaboration.sharedWith.map((user, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg"
                          >
                            <User className="w-5 h-5 text-gray-400" />
                            <div className="flex-1">
                              <span className="font-medium text-gray-900">
                                {user.email}
                              </span>
                            </div>
                            <select
                              value={user.role}
                              onChange={(e) => {
                                const updatedUsers =
                                  formData.collaboration.sharedWith.map(
                                    (u, i) =>
                                      i === idx
                                        ? { ...u, role: e.target.value }
                                        : u
                                  );
                                updateFormData("collaboration", {
                                  sharedWith: updatedUsers,
                                });
                              }}
                              className="text-xs border border-gray-300 rounded px-2 py-1"
                            >
                              <option value="view">Viewer</option>
                              <option value="edit">Editor</option>
                              <option value="admin">Admin</option>
                            </select>
                            <button
                              onClick={() => {
                                const updatedUsers =
                                  formData.collaboration.sharedWith.filter(
                                    (_, i) => i !== idx
                                  );
                                updateFormData("collaboration", {
                                  sharedWith: updatedUsers,
                                });
                              }}
                              className="text-red-600 hover:text-red-800"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}

                        <div className="flex space-x-2">
                          <input
                            type="email"
                            placeholder="Add team member by email"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                            onKeyPress={(e) => {
                              if (e.key === "Enter" && e.target.value.trim()) {
                                const newUser = {
                                  email: e.target.value.trim(),
                                  role: "view",
                                };
                                updateFormData("collaboration", {
                                  sharedWith: [
                                    ...formData.collaboration.sharedWith,
                                    newUser,
                                  ],
                                });
                                e.target.value = "";
                              }
                            }}
                          />
                          <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          key: "approvalRequired",
                          label: "Require Approval Before Publishing",
                          description:
                            "Assessment must be approved by admin before going live",
                        },
                        {
                          key: "versionControl",
                          label: "Enable Version Control",
                          description:
                            "Track changes and maintain assessment history",
                        },
                      ].map((option) => (
                        <label
                          key={option.key}
                          className="flex items-start space-x-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.collaboration[option.key]}
                            onChange={(e) =>
                              updateFormData("collaboration", {
                                [option.key]: e.target.checked,
                              })
                            }
                            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <div>
                            <div className="font-medium text-gray-900">
                              {option.label}
                            </div>
                            <div className="text-sm text-gray-600">
                              {option.description}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Analytics & Branding */}
              <div className="space-y-6">
                {/* Analytics Settings */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Analytics & Reporting
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        key: "trackingEnabled",
                        label: "Enable Analytics Tracking",
                        description:
                          "Collect assessment performance data and metrics",
                        recommended: true,
                      },
                      {
                        key: "detailedAnalytics",
                        label: "Detailed Performance Analytics",
                        description:
                          "Track question-level performance and time spent",
                        recommended: true,
                      },
                      {
                        key: "benchmarking",
                        label: "Industry Benchmarking",
                        description:
                          "Compare results against industry standards",
                        recommended: true,
                      },
                      {
                        key: "reportGeneration",
                        label: "Automated Report Generation",
                        description: "Generate PDF reports for stakeholders",
                        recommended: false,
                      },
                      {
                        key: "realTimeMonitoring",
                        label: "Real-time Monitoring Dashboard",
                        description: "Live view of ongoing assessments",
                        recommended: false,
                      },
                      {
                        key: "candidateJourney",
                        label: "Candidate Journey Tracking",
                        description:
                          "Track candidate experience and satisfaction",
                        recommended: true,
                      },
                      {
                        key: "performanceMetrics",
                        label: "Advanced Performance Metrics",
                        description: "AI-powered insights and recommendations",
                        premium: true,
                      },
                    ].map((option) => (
                      <div
                        key={option.key}
                        className="flex items-start space-x-3"
                      >
                        <input
                          type="checkbox"
                          checked={formData.analytics[option.key]}
                          onChange={(e) =>
                            updateFormData("analytics", {
                              [option.key]: e.target.checked,
                            })
                          }
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <label className="font-medium text-gray-900">
                              {option.label}
                            </label>
                            {option.recommended && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                Recommended
                              </span>
                            )}
                            {option.premium && (
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                Premium
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Custom KPIs (Key Performance Indicators)
                      </label>
                      <div className="space-y-2">
                        {formData.analytics.customKPIs.map((kpi, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="text"
                              value={kpi}
                              onChange={(e) => {
                                const updatedKPIs =
                                  formData.analytics.customKPIs.map((k, i) =>
                                    i === idx ? e.target.value : k
                                  );
                                updateFormData("analytics", {
                                  customKPIs: updatedKPIs,
                                });
                              }}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                              placeholder="e.g., Time to complete coding questions"
                            />
                            <button
                              onClick={() => {
                                const updatedKPIs =
                                  formData.analytics.customKPIs.filter(
                                    (_, i) => i !== idx
                                  );
                                updateFormData("analytics", {
                                  customKPIs: updatedKPIs,
                                });
                              }}
                              className="text-red-600 hover:text-red-800"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => {
                            updateFormData("analytics", {
                              customKPIs: [
                                ...formData.analytics.customKPIs,
                                "",
                              ],
                            });
                          }}
                          className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
                        >
                          + Add Custom KPI
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branding Settings */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Branding & Customization
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Logo
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 mb-2">
                          Drag and drop your logo here, or click to browse
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              // Handle file upload
                              updateFormData("branding", {
                                companyLogo: file.name,
                              });
                            }
                          }}
                        />
                        <button
                          onClick={() =>
                            document.querySelector('input[type="file"]').click()
                          }
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Upload Logo
                        </button>
                        <p className="text-xs text-gray-400 mt-2">
                          PNG, JPG up to 2MB. Recommended: 200x60px
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Color Scheme
                      </label>
                      <select
                        value={formData.branding.colorScheme}
                        onChange={(e) =>
                          updateFormData("branding", {
                            colorScheme: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="default">Default (Blue)</option>
                        <option value="corporate">Corporate (Gray/Navy)</option>
                        <option value="modern">Modern (Teal/Purple)</option>
                        <option value="warm">Warm (Orange/Red)</option>
                        <option value="minimal">Minimal (Black/White)</option>
                        <option value="custom">Custom Colors</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Welcome Message
                      </label>
                      <textarea
                        value={formData.branding.welcomeMessage}
                        onChange={(e) =>
                          updateFormData("branding", {
                            welcomeMessage: e.target.value,
                          })
                        }
                        placeholder="Welcome to our assessment. Please read the instructions carefully..."
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Completion Message
                      </label>
                      <textarea
                        value={formData.branding.completionMessage}
                        onChange={(e) =>
                          updateFormData("branding", {
                            completionMessage: e.target.value,
                          })
                        }
                        placeholder="Thank you for completing the assessment. We will review your responses..."
                        rows="3"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Footer Text
                      </label>
                      <input
                        type="text"
                        value={formData.branding.footerText}
                        onChange={(e) =>
                          updateFormData("branding", {
                            footerText: e.target.value,
                          })
                        }
                        placeholder="© 2025 Your Company Name. All rights reserved."
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Preview */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-green-600" />
                Integration & Automation Preview
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-gray-900 mb-2">Scheduling</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Type: {formData.scheduling.schedulingType}</li>
                    <li>• Time Zone: {formData.scheduling.timeZone}</li>
                    <li>
                      • Max Participants: {formData.scheduling.maxParticipants}
                    </li>
                    <li>
                      • Auto-start:{" "}
                      {formData.scheduling.autoStart ? "Yes" : "No"}
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Collaboration
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      • Team Members:{" "}
                      {formData.collaboration.sharedWith.length + 1}
                    </li>
                    <li>
                      • Approval Required:{" "}
                      {formData.collaboration.approvalRequired ? "Yes" : "No"}
                    </li>
                    <li>
                      • Version Control:{" "}
                      {formData.collaboration.versionControl ? "Yes" : "No"}
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-gray-900 mb-2">Analytics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      • Tracking:{" "}
                      {formData.analytics.trackingEnabled
                        ? "Enabled"
                        : "Disabled"}
                    </li>
                    <li>
                      • Benchmarking:{" "}
                      {formData.analytics.benchmarking ? "Yes" : "No"}
                    </li>
                    <li>
                      • Real-time:{" "}
                      {formData.analytics.realTimeMonitoring ? "Yes" : "No"}
                    </li>
                    <li>
                      • Custom KPIs:{" "}
                      {
                        formData.analytics.customKPIs.filter((k) => k.trim())
                          .length
                      }
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-medium text-gray-900 mb-2">Branding</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      • Logo:{" "}
                      {formData.branding.companyLogo ? "Uploaded" : "Default"}
                    </li>
                    <li>• Color Scheme: {formData.branding.colorScheme}</li>
                    <li>
                      • Custom Messages:{" "}
                      {formData.branding.welcomeMessage &&
                      formData.branding.completionMessage
                        ? "Yes"
                        : "No"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 6: // Review & Publish - Final step with comprehensive summary
        return (
          <div className="space-y-6">
            {renderValidationErrors()}

            {/* Assessment Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {formData.basicInfo.title}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {formData.basicInfo.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Assessment ID</div>
                  <div className="text-lg font-mono text-gray-900">
                    ASS_{Date.now()}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm font-medium">
                        Duration
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formData.assessmentConfig.duration}min
                      </p>
                    </div>
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm font-medium">
                        Questions
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {selectedQuestions.length}
                      </p>
                    </div>
                    <Brain className="w-8 h-8 text-green-600" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm font-medium">
                        Passing Score
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {formData.assessmentConfig.passingScore}%
                      </p>
                    </div>
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm font-medium">
                        Security Level
                      </p>
                      <p className="text-lg font-bold text-gray-900 capitalize">
                        {formData.settings.securityLevel}
                      </p>
                    </div>
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Configuration Review */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Assessment Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Industry:</span>
                    <span className="font-medium">
                      {industries[formData.basicInfo.industry]?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Department:</span>
                    <span className="font-medium">
                      {
                        industries[formData.basicInfo.industry]?.departments[
                          formData.basicInfo.department
                        ]?.name
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Position:</span>
                    <span className="font-medium">
                      {formData.basicInfo.position}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience Level:</span>
                    <span className="font-medium capitalize">
                      {formData.positionDetails.experienceLevel}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employment Type:</span>
                    <span className="font-medium capitalize">
                      {formData.positionDetails.employmentType ||
                        "Not specified"}
                    </span>
                  </div>
                  {formData.basicInfo.targetCompanies.length > 0 && (
                    <div>
                      <span className="text-gray-600">Target Companies:</span>
                      <div className="mt-1">
                        {formData.basicInfo.targetCompanies.map(
                          (company, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mt-1"
                            >
                              {company}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Question Distribution */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  Question Distribution
                </h3>
                <div className="space-y-3">
                  {Object.entries(formData.assessmentConfig.questionTypes)
                    .filter(([, config]) => config.enabled && config.count > 0)
                    .map(([type, config]) => (
                      <div
                        key={type}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              type === "multipleChoice"
                                ? "bg-blue-500"
                                : type === "coding"
                                ? "bg-purple-500"
                                : type === "caseStudy"
                                ? "bg-green-500"
                                : "bg-orange-500"
                            }`}
                          ></div>
                          <span className="text-sm font-medium capitalize">
                            {type.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {config.count} questions ({config.weight}%)
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Difficulty Distribution
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(formData.assessmentConfig.difficulty).map(
                      ([level, percentage]) => (
                        <div
                          key={level}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-gray-600 capitalize">
                            {level}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  level === "beginner"
                                    ? "bg-green-500"
                                    : level === "intermediate"
                                    ? "bg-yellow-500"
                                    : level === "advanced"
                                    ? "bg-orange-500"
                                    : "bg-red-500"
                                }`}
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">
                              {percentage}%
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Security Configuration */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security & Monitoring
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Security Level:</span>
                    <span className="font-medium capitalize">
                      {formData.settings.securityLevel}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Live Proctoring:</span>
                    <span
                      className={`font-medium ${
                        formData.settings.proctoringEnabled
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formData.settings.proctoringEnabled
                        ? "Enabled"
                        : "Disabled"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Session Recording:</span>
                    <span
                      className={`font-medium ${
                        formData.settings.recordSession
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formData.settings.recordSession ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Tab Switching Prevention:
                    </span>
                    <span
                      className={`font-medium ${
                        formData.settings.preventTabSwitching
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formData.settings.preventTabSwitching
                        ? "Enabled"
                        : "Disabled"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Plagiarism Detection:</span>
                    <span
                      className={`font-medium ${
                        formData.settings.plagiarismDetection
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {formData.settings.plagiarismDetection
                        ? "Enabled"
                        : "Disabled"}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">
                    AI Monitoring Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(formData.settings.aiMonitoring).map(
                      ([key, enabled]) => (
                        <div key={key} className="flex items-center space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              enabled ? "bg-green-500" : "bg-gray-300"
                            }`}
                          ></div>
                          <span
                            className={`text-xs ${
                              enabled ? "text-green-700" : "text-gray-500"
                            }`}
                          >
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Scheduling & Access */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Scheduling & Access
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Scheduling Type:</span>
                    <span className="font-medium capitalize">
                      {formData.scheduling.schedulingType.replace("-", " ")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Zone:</span>
                    <span className="font-medium">
                      {formData.scheduling.timeZone}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Participants:</span>
                    <span className="font-medium">
                      {formData.scheduling.maxParticipants}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Grace Period:</span>
                    <span className="font-medium">
                      {formData.scheduling.gracePeriod} minutes
                    </span>
                  </div>
                  {formData.scheduling.availableFrom && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Available From:</span>
                      <span className="font-medium">
                        {new Date(
                          formData.scheduling.availableFrom
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}
                  {formData.scheduling.availableTo && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Available Until:</span>
                      <span className="font-medium">
                        {new Date(
                          formData.scheduling.availableTo
                        ).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Skills Assessment */}
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Skills Being Assessed
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {formData.positionDetails.skillsRequired.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 p-3 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {selectedQuestions.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">
                    Question Coverage Analysis
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formData.positionDetails.skillsRequired.map((skill) => {
                      const questionsForSkill = selectedQuestions.filter(
                        (q) => q.skill === skill
                      );
                      const coverage = questionsForSkill.length;
                      const percentage =
                        selectedQuestions.length > 0
                          ? Math.round(
                              (coverage / selectedQuestions.length) * 100
                            )
                          : 0;

                      return (
                        <div
                          key={skill}
                          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                        >
                          <div>
                            <span className="text-sm font-medium text-gray-900">
                              {skill}
                            </span>
                            <div className="text-xs text-gray-500">
                              {coverage} questions ({percentage}%)
                            </div>
                          </div>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              coverage === 0
                                ? "bg-red-100 text-red-700"
                                : coverage < 2
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {coverage}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Ready to Publish Actions */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Publish Assessment
                </h3>
                <p className="text-gray-600">
                  Your assessment has been configured and is ready to go live.
                  Choose how you'd like to proceed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-green-200 text-center">
                  <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Preview Assessment
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Test the complete candidate experience with a live demo
                  </p>
                  <button
                    onClick={() => setShowPreview(true)}
                    className="w-full px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Launch Preview
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-green-200 text-center">
                  <Save className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Save as Draft
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Save your progress and continue editing later
                  </p>
                  <button
                    onClick={async () => {
                      await saveProgress();
                      alert("Assessment saved as draft successfully!");
                    }}
                    className="w-full px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    Save Draft
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-green-200 text-center">
                  <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Publish & Share
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Make assessment live and start inviting candidates
                  </p>
                  <button
                    onClick={() => {
                      // Validate final assessment
                      if (
                        selectedQuestions.length <
                        formData.assessmentConfig.questionCount
                      ) {
                        alert(
                          `Please select ${formData.assessmentConfig.questionCount} questions before publishing.`
                        );
                        return;
                      }

                      // Show publish confirmation
                      if (
                        window.confirm(
                          "Are you sure you want to publish this assessment? It will become available to candidates immediately."
                        )
                      ) {
                        setShowPreview(true);
                        alert(
                          "Assessment published successfully! You can now share it with candidates."
                        );
                      }
                    }}
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Publish Now
                  </button>
                </div>
              </div>

              {/* Final Checklist */}
              <div className="bg-white p-6 rounded-xl border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-600" />
                  Pre-Publication Checklist
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      check:
                        formData.basicInfo.title &&
                        formData.basicInfo.industry &&
                        formData.basicInfo.position,
                      label: "Basic information completed",
                      description:
                        "Title, industry, department, and position are specified",
                    },
                    {
                      check:
                        formData.positionDetails.experienceLevel &&
                        formData.positionDetails.skillsRequired.length > 0,
                      label: "Position requirements defined",
                      description:
                        "Experience level and required skills are set",
                    },
                    {
                      check:
                        formData.assessmentConfig.duration >= 15 &&
                        formData.assessmentConfig.questionCount >= 5,
                      label: "Assessment configuration valid",
                      description:
                        "Duration and question count meet minimum requirements",
                    },
                    {
                      check:
                        selectedQuestions.length >=
                        formData.assessmentConfig.questionCount,
                      label: "Sufficient questions selected",
                      description: `${selectedQuestions.length}/${formData.assessmentConfig.questionCount} questions selected`,
                    },
                    {
                      check:
                        formData.settings.securityLevel &&
                        (formData.settings.proctoringEnabled ||
                          formData.settings.securityLevel === "basic"),
                      label: "Security settings configured",
                      description:
                        "Appropriate security level and monitoring options selected",
                    },
                    {
                      check:
                        formData.scheduling.timeZone &&
                        formData.scheduling.maxParticipants > 0,
                      label: "Scheduling parameters set",
                      description:
                        "Time zone and participant limits configured",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          item.check
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.check ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3" />
                        )}
                      </div>
                      <div>
                        <div
                          className={`font-medium ${
                            item.check ? "text-green-900" : "text-red-900"
                          }`}
                        >
                          {item.label}
                        </div>
                        <div
                          className={`text-sm ${
                            item.check ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Helper function to get certifications for position
  const getCertificationsForPosition = useCallback((position) => {
    const certificationSets = {
      "Software Engineer": [
        "AWS Certified Developer",
        "Google Cloud Professional",
        "Microsoft Azure Developer",
        "Certified Kubernetes Administrator",
        "Docker Certified Associate",
      ],
      "Data Scientist": [
        "AWS Certified Machine Learning",
        "Google Cloud ML Engineer",
        "Microsoft Azure Data Scientist",
        "Certified Analytics Professional",
        "Tableau Desktop Certified",
      ],
      "Product Manager": [
        "Certified Scrum Product Owner",
        "Product Management Certificate",
        "Google Analytics Certified",
        "Pragmatic Marketing Certified",
        "Product School Certificate",
      ],
      "Investment Banker": [
        "CFA Charter",
        "FINRA Series 7",
        "FINRA Series 63",
        "Financial Risk Manager (FRM)",
        "Chartered Financial Analyst",
      ],
      "Management Consultant": [
        "PMP Certification",
        "Six Sigma Black Belt",
        "Certified Management Consultant",
        "Change Management Certification",
        "Business Analysis Certification",
      ],
      "UX Designer": [
        "Google UX Design Certificate",
        "Adobe Certified Expert",
        "Nielsen Norman Group UX Certificate",
        "Interaction Design Foundation Certificate",
        "HFI Certified Usability Analyst",
      ],
    };
    return (
      certificationSets[position] || [
        "Industry Certification",
        "Professional License",
        "Technical Certification",
      ]
    );
  }, []);

  return (
    <div className="space-y-6">
      {/* Header with Save Status */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-gray-200/50">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-professional rounded-2xl flex items-center justify-center shadow-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Test Creation Wizard
              </h1>
              <p className="text-gray-600 text-lg">
                Create comprehensive assessments with AI assistance
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {saveStatus && (
              <div
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                  saveStatus === "saving"
                    ? "bg-yellow-100 text-yellow-700"
                    : saveStatus === "saved"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {saveStatus === "saving" ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : saveStatus === "saved" ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <AlertTriangle className="w-4 h-4" />
                )}
                <span className="text-sm font-medium capitalize">
                  {saveStatus}
                </span>
              </div>
            )}
            <div className="text-right text-sm text-gray-500">
              <div>
                Created:{" "}
                {new Date(formData.basicInfo.createdAt).toLocaleDateString()}
              </div>
              <div>
                Modified:{" "}
                {new Date(formData.basicInfo.lastModified).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        {renderProgressIndicator()}
      </div>

      {/* Step Content */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-gray-200/50">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {steps[currentStep].name}
          </h2>
          <p className="text-gray-600">{steps[currentStep].description}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="min-h-[600px]">{renderStepContent()}</div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-xl font-semibold transition-colors flex items-center ${
              currentStep === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-500">
              Step {currentStep + 1} of {steps.length}
            </div>
            <button
              onClick={saveProgress}
              className="px-4 py-2 text-sm border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Save className="w-4 h-4 mr-1 inline" />
              Save Progress
            </button>
          </div>

          <button
            onClick={handleNext}
            disabled={isLoading || currentStep === steps.length - 1}
            className={`px-6 py-3 rounded-xl font-semibold transition-colors flex items-center ${
              currentStep === steps.length - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : Object.keys(validationErrors).length > 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                {currentStep === steps.length - 1 ? "Complete" : "Next"}
                {currentStep !== steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 ml-2" />
                )}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Assessment Preview Modal */}
      {showPreview && (
        <AssessmentPreview
          assessment={generatePreview()}
          formData={formData}
          selectedQuestions={selectedQuestions}
          onClose={() => setShowPreview(false)}
        />
      )}

      {/* Question Bank Modal */}
      {showQuestionBank && (
        <QuestionBankModal
          onClose={() => setShowQuestionBank(false)}
          onSelectQuestions={(questions) => {
            setSelectedQuestions(questions);
            setShowQuestionBank(false);
          }}
          currentSelection={selectedQuestions}
          filters={formData.questionFilters}
          maxQuestions={formData.assessmentConfig.questionCount}
        />
      )}
    </div>
  );
}

// Enhanced Assessment Preview Component with full functionality
const AssessmentPreview = ({
  assessment,
  formData,
  selectedQuestions,
  onClose,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(assessment.duration * 60);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [proctoringAlerts, setProctoringAlerts] = useState([]);
  const [sessionRecording, setSessionRecording] = useState(
    formData.settings.recordSession
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate proctoring alerts
  useEffect(() => {
    if (formData.settings.proctoringEnabled) {
      const alertTimer = setInterval(() => {
        if (Math.random() < 0.1) {
          // 10% chance of alert every 5 seconds
          const alerts = [
            "Face detection: Please ensure your face is clearly visible",
            "Tab switching detected: Please stay on the assessment page",
            "Multiple faces detected: Ensure you're alone during the assessment",
            "Audio anomaly: Background conversation detected",
          ];
          const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
          setProctoringAlerts((prev) => [
            ...prev,
            {
              id: Date.now(),
              message: randomAlert,
              timestamp: new Date().toLocaleTimeString(),
              severity: Math.random() < 0.3 ? "high" : "medium",
            },
          ]);
        }
      }, 5000);

      return () => clearInterval(alertTimer);
    }
  }, [formData.settings.proctoringEnabled]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleAutoSubmit = () => {
    if (!isSubmitted) {
      setIsSubmitted(true);
      setTimeout(() => setShowResults(true), 1000);
    }
  };

  const handleSubmit = () => {
    if (
      window.confirm(
        "Are you sure you want to submit your assessment? You cannot change your answers after submission."
      )
    ) {
      setIsSubmitted(true);
      setTimeout(() => setShowResults(true), 1000);
    }
  };

  const calculateResults = () => {
    const totalQuestions =
      selectedQuestions.length || assessment.sampleQuestions.length;
    const answeredQuestions = Object.keys(answers).length;
    const completionRate = Math.round(
      (answeredQuestions / totalQuestions) * 100
    );

    // Simulate scoring based on question types and answers
    let totalScore = 0;
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question =
        selectedQuestions.find((q) => q.id == questionId) ||
        assessment.sampleQuestions.find((q) => q.id == questionId);
      if (question) {
        if (
          question.type === "multiple-choice" &&
          question.correctAnswer === answer
        ) {
          totalScore += 100;
        } else if (question.type === "coding" && answer && answer.length > 50) {
          totalScore += 75; // Assume partial credit for code attempts
        } else if (
          question.type === "case-study" &&
          answer &&
          answer.length > 100
        ) {
          totalScore += 80; // Assume good case study response
        } else if (question.type === "video" && answer) {
          totalScore += 85; // Assume video response provided
        }
      }
    });

    const averageScore =
      answeredQuestions > 0 ? Math.round(totalScore / answeredQuestions) : 0;
    const passed = averageScore >= formData.assessmentConfig.passingScore;

    return {
      totalQuestions,
      answeredQuestions,
      completionRate,
      averageScore,
      passed,
      timeSpent: assessment.duration * 60 - timeRemaining,
      proctoringIncidents: proctoringAlerts.length,
    };
  };

  const currentQuestion =
    selectedQuestions[currentQuestionIndex] ||
    assessment.sampleQuestions[currentQuestionIndex];

  if (showResults) {
    const results = calculateResults();
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Results Header */}
          <div
            className={`p-8 text-white rounded-t-3xl ${
              results.passed
                ? "bg-gradient-to-r from-green-500 to-green-600"
                : "bg-gradient-to-r from-red-500 to-red-600"
            }`}
          >
            <div className="text-center">
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  results.passed ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {results.passed ? (
                  <Check className="w-10 h-10 text-green-600" />
                ) : (
                  <X className="w-10 h-10 text-red-600" />
                )}
              </div>
              <h2 className="text-3xl font-bold mb-2">Assessment Complete</h2>
              <p className="text-lg opacity-90">
                {results.passed
                  ? "Congratulations! You have passed the assessment."
                  : "Assessment completed. Results are being reviewed."}
              </p>
            </div>
          </div>

          {/* Results Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-3xl font-bold text-blue-600">
                  {results.averageScore}%
                </div>
                <div className="text-blue-800 font-medium">Overall Score</div>
                <div className="text-sm text-blue-600">
                  Required: {formData.assessmentConfig.passingScore}%
                </div>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-3xl font-bold text-green-600">
                  {results.completionRate}%
                </div>
                <div className="text-green-800 font-medium">
                  Completion Rate
                </div>
                <div className="text-sm text-green-600">
                  {results.answeredQuestions}/{results.totalQuestions} questions
                </div>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-3xl font-bold text-purple-600">
                  {formatTime(results.timeSpent)}
                </div>
                <div className="text-purple-800 font-medium">Time Spent</div>
                <div className="text-sm text-purple-600">
                  of {assessment.duration} minutes
                </div>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-3xl font-bold text-orange-600">
                  {results.proctoringIncidents}
                </div>
                <div className="text-orange-800 font-medium">
                  Security Events
                </div>
                <div className="text-sm text-orange-600">Proctoring alerts</div>
              </div>
            </div>

            {/* Detailed Performance */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Performance Breakdown
              </h3>
              <div className="space-y-4">
                {Object.entries(formData.assessmentConfig.questionTypes)
                  .filter(([, config]) => config.enabled)
                  .map(([type, config]) => {
                    const typeQuestions = selectedQuestions.filter(
                      (q) =>
                        q.type === type.replace(/([A-Z])/g, "-$1").toLowerCase()
                    );
                    const typeAnswered = typeQuestions.filter(
                      (q) => answers[q.id]
                    ).length;
                    const typeScore =
                      typeQuestions.length > 0
                        ? Math.round(
                            (typeAnswered / typeQuestions.length) * 100
                          )
                        : 0;

                    return (
                      <div
                        key={type}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <span className="font-medium capitalize">
                            {type.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="text-sm text-gray-500 ml-2">
                            ({typeQuestions.length} questions)
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${typeScore}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">
                            {typeScore}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Proctoring Summary */}
            {formData.settings.proctoringEnabled &&
              proctoringAlerts.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-yellow-600" />
                    Security Monitoring Summary
                  </h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {proctoringAlerts.map((alert, idx) => (
                      <div
                        key={alert.id}
                        className="flex items-start space-x-3 text-sm"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            alert.severity === "high"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                          }`}
                        ></div>
                        <div>
                          <span className="text-gray-600">
                            {alert.timestamp}
                          </span>
                          <span className="text-gray-800 ml-2">
                            {alert.message}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* Next Steps */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                What Happens Next?
              </h3>
              <ul className="text-blue-800 space-y-2">
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-blue-600" />
                  Your responses have been automatically saved and submitted
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-blue-600" />
                  Our team will review your assessment within 2-3 business days
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-blue-600" />
                  You'll receive detailed feedback via email
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 mr-2 text-blue-600" />
                  If successful, we'll schedule a follow-up interview
                </li>
              </ul>
            </div>
          </div>

          {/* Results Footer */}
          <div className="bg-gray-50 px-8 py-6 rounded-b-3xl flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Assessment ID: {assessment.id} | Completed on{" "}
              {new Date().toLocaleDateString()}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  // Download results functionality
                  alert(
                    "Results download will be available in the full version"
                  );
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4 mr-2 inline" />
                Download Results
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-lg">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <RefreshCw className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Processing Your Assessment
          </h3>
          <p className="text-gray-600">
            Please wait while we process your responses and generate your
            results...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-professional text-white p-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{assessment.title}</h2>
              <p className="text-blue-100">
                Live Assessment Demo - {formData.basicInfo.position}
              </p>
            </div>
            <div className="text-right">
              <div
                className={`text-2xl font-bold ${
                  timeRemaining < 300 ? "text-red-200" : ""
                }`}
              >
                {formatTime(timeRemaining)}
              </div>
              <div className="text-blue-100 text-sm">Time Remaining</div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm">
              Question {currentQuestionIndex + 1} of{" "}
              {selectedQuestions.length || assessment.sampleQuestions.length}
            </div>
            <div className="flex items-center space-x-4">
              {sessionRecording && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Recording</span>
                </div>
              )}
              {formData.settings.proctoringEnabled && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Monitored</span>
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-blue-700 rounded-full h-2">
            <div
              className="bg-blue-300 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) /
                    (selectedQuestions.length ||
                      assessment.sampleQuestions.length)) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Proctoring Alerts */}
        {proctoringAlerts.length > 0 && (
          <div className="bg-yellow-50 border-b border-yellow-200 p-3">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-800">
                Latest Alert:{" "}
                {proctoringAlerts[proctoringAlerts.length - 1]?.message}
              </span>
              <button
                onClick={() => setProctoringAlerts((prev) => prev.slice(0, -1))}
                className="ml-auto text-yellow-600 hover:text-yellow-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Question Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    currentQuestion.type === "coding"
                      ? "bg-purple-100 text-purple-800"
                      : currentQuestion.type === "multiple-choice"
                      ? "bg-blue-100 text-blue-800"
                      : currentQuestion.type === "case-study"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {currentQuestion.type.replace("-", " ").toUpperCase()}
                </span>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Difficulty: {currentQuestion.difficulty}</span>
                  <span>Time Limit: {currentQuestion.timeLimit} minutes</span>
                  <span>Skill: {currentQuestion.skill}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {currentQuestion.question}
              </h3>

              {currentQuestion.context && (
                <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Context:</h4>
                  <p className="text-blue-800 text-sm">
                    {currentQuestion.context}
                  </p>
                </div>
              )}
            </div>

            {/* Question Type Specific Content */}
            {currentQuestion.type === "multiple-choice" && (
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="radio"
                      name={`question_${currentQuestionIndex}`}
                      value={option}
                      checked={answers[currentQuestion.id] === option}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [currentQuestion.id]: e.target.value,
                        }))
                      }
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-900">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {currentQuestion.type === "coding" && (
              <div className="space-y-4">
                <div className="bg-gray-900 rounded-xl p-4 text-green-400 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-2 text-gray-400">
                      Code Editor - JavaScript
                    </span>
                  </div>
                  <textarea
                    value={
                      answers[currentQuestion.id] ||
                      currentQuestion.starterCode?.javascript ||
                      "// Your code here"
                    }
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        [currentQuestion.id]: e.target.value,
                      }))
                    }
                    className="w-full h-64 bg-transparent text-green-400 resize-none focus:outline-none"
                    spellCheck="false"
                  />
                </div>

                {currentQuestion.testCases && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Test Cases:
                    </h4>
                    <div className="space-y-2">
                      {currentQuestion.testCases
                        .slice(0, 2)
                        .map((testCase, idx) => (
                          <div key={idx} className="text-sm font-mono">
                            <span className="text-gray-600">Input: </span>
                            <span className="text-gray-900">
                              {JSON.stringify(testCase.input)}
                            </span>
                            <span className="text-gray-600 ml-4">
                              Expected:{" "}
                            </span>
                            <span className="text-gray-900">
                              {JSON.stringify(testCase.output)}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentQuestion.type === "case-study" && (
              <div className="space-y-4">
                <textarea
                  placeholder="Provide your detailed analysis and recommendations..."
                  rows="12"
                  value={answers[currentQuestion.id] || ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [currentQuestion.id]: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    Consider all aspects: strategy, implementation, risks, and
                    expected outcomes
                  </span>
                  <span>
                    {(answers[currentQuestion.id] || "").length}/2000 characters
                  </span>
                </div>

                {currentQuestion.rubric && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-2">
                      Evaluation Criteria:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {currentQuestion.rubric.map((criteria, idx) => (
                        <div key={idx} className="text-sm">
                          <span className="font-medium text-green-800">
                            {criteria.criteria}
                          </span>
                          <span className="text-green-600 ml-2">
                            ({criteria.weight}%)
                          </span>
                          <p className="text-green-700 text-xs mt-1">
                            {criteria.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentQuestion.type === "video" && (
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-xl p-8 text-center">
                  <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="font-medium text-gray-900 mb-2">
                    Video Response Required
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Record a {currentQuestion.maxDuration || 120}-second video
                    response to this question
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center">
                      <Video className="w-5 h-5 mr-2" />
                      Start Recording
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Test Camera
                    </button>
                  </div>
                </div>

                {currentQuestion.evaluationCriteria && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-medium text-orange-900 mb-2">
                      What we're looking for:
                    </h4>
                    <ul className="text-orange-800 text-sm space-y-1">
                      {currentQuestion.evaluationCriteria.map(
                        (criteria, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="w-3 h-3 mr-2 text-orange-600" />
                            {criteria}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gray-50 px-8 py-6 flex items-center justify-between border-t border-gray-200 flex-shrink-0">
          <button
            onClick={() =>
              setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))
            }
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center ${
              currentQuestionIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </button>

          <div className="flex items-center space-x-2">
            {(selectedQuestions.length > 0
              ? selectedQuestions
              : assessment.sampleQuestions
            ).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  idx === currentQuestionIndex
                    ? "bg-blue-600 text-white"
                    : answers[_.id]
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div className="flex space-x-3">
            {currentQuestionIndex ===
            (selectedQuestions.length || assessment.sampleQuestions.length) -
              1 ? (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center"
              >
                <Check className="w-4 h-4 mr-2" />
                Submit Assessment
              </button>
            ) : (
              <button
                onClick={() =>
                  setCurrentQuestionIndex(
                    Math.min(
                      (selectedQuestions.length ||
                        assessment.sampleQuestions.length) - 1,
                      currentQuestionIndex + 1
                    )
                  )
                }
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                Next Question
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Exit Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Question Bank Modal Component
const QuestionBankModal = ({
  onClose,
  onSelectQuestions,
  currentSelection,
  filters,
  maxQuestions,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [localFilters, setLocalFilters] = useState(filters);
  const [selectedQuestions, setSelectedQuestions] = useState(currentSelection);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 12;

  // Extended question database
  const allQuestions = [
    // Add all previous questions plus many more...
    // This would be populated from your question database
  ];

  const filteredQuestions = allQuestions.filter((question) => {
    if (
      searchTerm &&
      !question.question.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    if (localFilters.type && question.type !== localFilters.type) return false;
    if (
      localFilters.difficulty &&
      question.difficulty !== localFilters.difficulty
    )
      return false;
    if (localFilters.skill && question.skill !== localFilters.skill)
      return false;
    return true;
  });

  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  const paginatedQuestions = filteredQuestions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Question Bank</h2>
              <p className="text-purple-100">
                Browse and select from our comprehensive question database
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-purple-100">
                Selected: {selectedQuestions.length}/{maxQuestions}
              </span>
              <button
                onClick={onClose}
                className="text-white hover:text-purple-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <select
              value={localFilters.type}
              onChange={(e) =>
                setLocalFilters((prev) => ({ ...prev, type: e.target.value }))
              }
              className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">All Types</option>
              <option value="multiple-choice">Multiple Choice</option>
              <option value="coding">Coding</option>
              <option value="case-study">Case Study</option>
              <option value="video">Video Response</option>
            </select>
            <select
              value={localFilters.difficulty}
              onChange={(e) =>
                setLocalFilters((prev) => ({
                  ...prev,
                  difficulty: e.target.value,
                }))
              }
              className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            <select
              value={localFilters.skill}
              onChange={(e) =>
                setLocalFilters((prev) => ({ ...prev, skill: e.target.value }))
              }
              className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">All Skills</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="React">React</option>
              <option value="System Design">System Design</option>
              <option value="Financial Modeling">Financial Modeling</option>
            </select>
          </div>
        </div>

        {/* Question Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedQuestions.map((question) => (
              <div
                key={question.id}
                className={`border-2 rounded-xl p-6 transition-all duration-200 cursor-pointer ${
                  selectedQuestions.find((q) => q.id === question.id)
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                }`}
                onClick={() => {
                  const isSelected = selectedQuestions.find(
                    (q) => q.id === question.id
                  );
                  if (isSelected) {
                    setSelectedQuestions((prev) =>
                      prev.filter((q) => q.id !== question.id)
                    );
                  } else if (selectedQuestions.length < maxQuestions) {
                    setSelectedQuestions((prev) => [...prev, question]);
                  }
                }}
              >
                {/* Question card content similar to main component */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        question.type === "coding"
                          ? "bg-purple-100 text-purple-800"
                          : question.type === "multiple-choice"
                          ? "bg-blue-100 text-blue-800"
                          : question.type === "case-study"
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {question.type.replace("-", " ").toUpperCase()}
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={
                      selectedQuestions.find((q) => q.id === question.id)
                        ? true
                        : false
                    }
                    onChange={() => {}}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                <h4 className="font-medium text-gray-900 mb-3 line-clamp-2">
                  {question.question}
                </h4>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Skill: {question.skill}</span>
                    <span>{question.timeLimit} min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Difficulty: {question.difficulty}</span>
                    <span className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      {question.successRate}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {paginatedQuestions.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No questions found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing {startIndex + 1} to{" "}
                {Math.min(
                  startIndex + questionsPerPage,
                  filteredQuestions.length
                )}{" "}
                of {filteredQuestions.length} questions
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  {currentPage}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {selectedQuestions.length} of {maxQuestions} questions selected
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => onSelectQuestions(selectedQuestions)}
              disabled={selectedQuestions.length === 0}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Select Questions ({selectedQuestions.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
