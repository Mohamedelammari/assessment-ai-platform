import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import {
  Database,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  Filter,
  Download,
  Upload,
  Star,
  TrendingUp,
  Users,
  Calendar,
  Tag,
  Building,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Bell,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Copy,
  Share2,
  Bookmark,
  Flag,
  AlertTriangle,
  Info,
  Settings,
  RefreshCw,
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
  Sun,
  Moon,
  Sparkles,
  Zap,
  Target,
  Shield,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  Barcode,
  CameraIcon,
  Mic,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  FastForward,
  Rewind,
  Maximize2,
  Minimize2,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  Cloud,
  Wifi,
  Signal,
  Battery,
  BatteryLow,
  Power,
  PowerOff,
  Cpu,
  HardDrive,
  MemoryStick,
  Router,
  Network,
  Ethernet,
  Bluetooth,
  Usb,
  Hdmi,
  Printer,
  Scanner,
  Mouse,
  Keyboard,
  Headphones,
  Microphone,
  Speaker,
  Camera,
  Video,
  Image as ImageIcon,
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  FilePresentation,
  Save,
  SaveAs,
  Open,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  Archive as ArchiveIcon,
  Package2,
  Box,
  Container,
  Truck,
  Plane,
  Ship,
  Train,
  Car,
  Bike,
  Bus,
  Taxi,
  Fuel,
  Navigation,
  Compass,
  Map,
  MapPin2,
  Route,
  Road,
  Traffic,
  Parking,
  Gas,
  Charging,
  Wrench,
  Hammer,
  Screwdriver,
  Drill,
  Saw,
  Ruler,
  Scissors,
  Brush,
  Palette,
  Pipette,
  Eyedropper,
  ColorWheel,
  Contrast,
  Brightness,
  Sunset,
  Sunrise,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
  Tornado,
  Thermometer,
  Gauge,
  Speedometer,
  Timer,
  Stopwatch,
  AlarmClock,
  Watch,
  Hourglass,
  Calendar2,
  CalendarDays,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarClock,
  CalendarRange,
  Event,
  Appointment,
  Schedule,
  Reminder,
  Notification,
  Alert,
  Warning,
  Error,
  Success,
  Loading,
  Pending,
  Complete,
  Cancel,
  Confirm,
  Approve,
  Reject,
  Accept,
  Decline,
  Submit,
  Send,
  Receive,
  Forward,
  Reply,
  ReplyAll,
  Compose,
  Draft,
  Sent,
  Inbox,
  Outbox,
  Archive2,
  Spam,
  Trash,
  Delete,
  Remove,
  Clear,
  Clean,
  Refresh,
  Reload,
  Reset,
  Restart,
  Update,
  Upgrade,
  Downgrade,
  Install,
  Uninstall,
  Configure,
  Setup,
  Initialize,
  Launch,
  Start,
  Stop,
  Pause2,
  Resume,
  Continue,
  Next,
  Previous,
  First,
  Last,
  Begin,
  End,
  Finish,
  Complete2,
  Done,
  Todo,
  Task,
  Project,
  Goal,
  Mission,
  Vision,
  Strategy,
  Plan,
  Blueprint,
  Design,
  Sketch,
  Draft2,
  Template,
  Sample,
  Example,
  Demo,
  Preview,
  Test,
  Experiment,
  Research,
  Analysis,
  Report,
  Document,
  Certificate,
  Diploma,
  Badge,
  Medal,
  Trophy,
  Crown,
  Winner,
  Champion,
  Leader,
  Expert,
  Professional,
  Master,
  Beginner,
  Intermediate,
  Advanced,
  Senior,
  Junior,
  Intern,
  Student,
  Teacher,
  Professor,
  Instructor,
  Mentor,
  Coach,
  Guide,
  Helper,
  Assistant,
  Support,
  Service,
  Help,
  Question,
  Answer,
  Solution,
  Problem,
  Issue,
  Bug,
  Feature,
  Enhancement,
  Improvement,
  Optimization,
  Performance,
  Speed,
  Fast,
  Slow,
  Quick,
  Rapid,
  Instant,
  Immediate,
  Delay,
  Wait,
  Pause3,
  Hold,
  Freeze,
  Lock2,
  Secure,
} from "lucide-react";

// Custom hooks for enhanced functionality
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
};

const usePagination = (data, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const goToPage = useCallback(
    (page) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    },
    [totalPages]
  );

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const previousPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage,
    previousPage,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
};

export default function ContentManagement() {
  // State management
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useLocalStorage(
    "contentFilters",
    {
      industry: "",
      company: "",
      position: "",
      difficulty: "",
      type: "",
      skill: "",
      validated: true,
      recentlyUsed: false,
      createdBy: "",
      dateRange: "",
      tags: [],
      customTags: [],
      averageTime: "",
      successRate: "",
      usageCount: "",
    }
  );

  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [viewMode, setViewMode] = useLocalStorage("contentViewMode", "grid");
  const [sortBy, setSortBy] = useLocalStorage("contentSortBy", "recent");
  const [itemsPerPage, setItemsPerPage] = useLocalStorage(
    "contentItemsPerPage",
    12
  );
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showQuestionEditor, setShowQuestionEditor] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showAnalyticsPanel, setShowAnalyticsPanel] = useState(false);
  const [showTemplateLibrary, setShowTemplateLibrary] = useState(false);
  const [showCollaborationPanel, setShowCollaborationPanel] = useState(false);
  const [lastSync, setLastSync] = useState(new Date());
  const [syncStatus, setSyncStatus] = useState("synced"); // synced, syncing, error
  const [notifications, setNotifications] = useState([]);
  const [expandedCompanies, setExpandedCompanies] = useState({});
  const [questionStats, setQuestionStats] = useState({});
  const [filterHistory, setFilterHistory] = useState([]);
  const [savedSearches, setSavedSearches] = useLocalStorage(
    "savedSearches",
    []
  );
  const [recentActivity, setRecentActivity] = useState([]);
  const [performanceMetrics, setPerformanceMetrics] = useState({});
  const [collaborators, setCollaborators] = useState([]);
  const [workflowStates, setWorkflowStates] = useState({});
  const [versionHistory, setVersionHistory] = useState([]);
  const [aiSuggestions, setAiSuggestions] = useState([]);

  // Refs
  const searchInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const exportWorkerRef = useRef(null);

  // Debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Industry-specific data with enhanced company information
  const industryData = {
    technology: {
      name: "Technology",
      icon: "💻",
      description:
        "Software development, IT services, and technology companies",
      marketCap: "$15.2T",
      avgSalary: "$145,000",
      growthRate: "18.5%",
      companies: [
        {
          name: "Google",
          tier: "FAANG",
          headcount: "174,000",
          locations: ["Mountain View", "Seattle", "New York", "Austin"],
          techStack: ["Java", "Python", "Go", "JavaScript", "C++"],
          assessmentVolume: 15420,
          avgDifficulty: "Advanced",
          successRate: 12.3,
          industryFocus: ["Search", "Cloud Computing", "AI/ML", "Advertising"],
        },
        {
          name: "Apple",
          tier: "FAANG",
          headcount: "154,000",
          locations: ["Cupertino", "Austin", "Seattle"],
          techStack: ["Swift", "Objective-C", "C++", "JavaScript"],
          assessmentVolume: 12830,
          avgDifficulty: "Advanced",
          successRate: 8.7,
          industryFocus: ["Hardware", "Software", "Services", "Design"],
        },
        {
          name: "Microsoft",
          tier: "FAANG",
          headcount: "221,000",
          locations: ["Redmond", "Seattle", "San Francisco", "Austin"],
          techStack: ["C#", ".NET", "TypeScript", "Azure", "PowerShell"],
          assessmentVolume: 18950,
          avgDifficulty: "Advanced",
          successRate: 15.2,
          industryFocus: [
            "Cloud Computing",
            "Productivity Software",
            "Gaming",
            "AI",
          ],
        },
        {
          name: "Amazon",
          tier: "FAANG",
          headcount: "1,541,000",
          locations: ["Seattle", "Austin", "Boston", "New York"],
          techStack: ["Java", "Python", "AWS", "JavaScript", "Go"],
          assessmentVolume: 35780,
          avgDifficulty: "Advanced",
          successRate: 11.8,
          industryFocus: ["E-commerce", "Cloud Computing", "Logistics", "AI"],
        },
        {
          name: "Meta",
          tier: "FAANG",
          headcount: "86,482",
          locations: ["Menlo Park", "Seattle", "Austin", "New York"],
          techStack: ["React", "PHP", "Python", "JavaScript", "C++"],
          assessmentVolume: 14250,
          avgDifficulty: "Expert",
          successRate: 9.4,
          industryFocus: ["Social Media", "VR/AR", "AI/ML", "Advertising"],
        },
        {
          name: "Netflix",
          tier: "Tier 1",
          headcount: "12,800",
          locations: ["Los Gatos", "Los Angeles", "Amsterdam"],
          techStack: ["Java", "Python", "JavaScript", "Go", "Scala"],
          assessmentVolume: 3420,
          avgDifficulty: "Expert",
          successRate: 7.2,
          industryFocus: [
            "Streaming",
            "Content",
            "Personalization",
            "Global Scale",
          ],
        },
        {
          name: "Uber",
          tier: "Tier 1",
          headcount: "32,800",
          locations: ["San Francisco", "Seattle", "Amsterdam", "Bangalore"],
          techStack: ["Go", "Java", "Python", "React", "Swift"],
          assessmentVolume: 8940,
          avgDifficulty: "Advanced",
          successRate: 14.7,
          industryFocus: [
            "Mobility",
            "Delivery",
            "Freight",
            "Real-time Systems",
          ],
        },
        {
          name: "Spotify",
          tier: "Tier 1",
          headcount: "9,239",
          locations: ["Stockholm", "New York", "London", "Boston"],
          techStack: ["Scala", "Python", "Java", "React", "TypeScript"],
          assessmentVolume: 2180,
          avgDifficulty: "Advanced",
          successRate: 16.3,
          industryFocus: [
            "Music Streaming",
            "Personalization",
            "Audio",
            "Creator Tools",
          ],
        },
      ],
      commonSkills: [
        {
          name: "JavaScript",
          demand: 95,
          avgSalary: "$125,000",
          trend: "stable",
        },
        { name: "Python", demand: 92, avgSalary: "$135,000", trend: "growing" },
        { name: "React", demand: 88, avgSalary: "$130,000", trend: "growing" },
        { name: "Node.js", demand: 85, avgSalary: "$128,000", trend: "stable" },
        {
          name: "System Design",
          demand: 82,
          avgSalary: "$155,000",
          trend: "growing",
        },
        { name: "AWS", demand: 78, avgSalary: "$145,000", trend: "growing" },
        { name: "Docker", demand: 75, avgSalary: "$140,000", trend: "stable" },
        {
          name: "Kubernetes",
          demand: 68,
          avgSalary: "$150,000",
          trend: "growing",
        },
        {
          name: "Machine Learning",
          demand: 65,
          avgSalary: "$165,000",
          trend: "exploding",
        },
        {
          name: "TypeScript",
          demand: 62,
          avgSalary: "$132,000",
          trend: "growing",
        },
      ],
      questionCount: 15420,
      avgDifficulty: "Advanced",
      successRate: 68.5,
      growthMetrics: {
        questionsAdded: 1240,
        companiesActive: 45,
        assessmentsCompleted: 28750,
      },
    },
    finance: {
      name: "Financial Services",
      icon: "🏦",
      description: "Banking, investment, insurance, and financial technology",
      marketCap: "$8.7T",
      avgSalary: "$165,000",
      growthRate: "12.3%",
      companies: [
        {
          name: "Goldman Sachs",
          tier: "Bulge Bracket",
          headcount: "49,100",
          locations: ["New York", "London", "Hong Kong", "Frankfurt"],
          techStack: ["Java", "Python", "C++", "MATLAB", "R"],
          assessmentVolume: 5240,
          avgDifficulty: "Expert",
          successRate: 6.8,
          industryFocus: [
            "Investment Banking",
            "Trading",
            "Asset Management",
            "Risk",
          ],
        },
        {
          name: "Morgan Stanley",
          tier: "Bulge Bracket",
          headcount: "78,000",
          locations: ["New York", "London", "Tokyo", "Mumbai"],
          techStack: ["C#", "Java", "Python", "SQL", "VBA"],
          assessmentVolume: 4890,
          avgDifficulty: "Expert",
          successRate: 7.2,
          industryFocus: [
            "Wealth Management",
            "Investment Banking",
            "Trading",
            "Research",
          ],
        },
        {
          name: "JP Morgan Chase",
          tier: "Bulge Bracket",
          headcount: "288,474",
          locations: ["New York", "London", "Singapore", "Mumbai"],
          techStack: ["Java", "Python", "JavaScript", "C++", "Scala"],
          assessmentVolume: 12340,
          avgDifficulty: "Advanced",
          successRate: 9.1,
          industryFocus: [
            "Commercial Banking",
            "Investment Banking",
            "Asset Management",
            "Payments",
          ],
        },
        {
          name: "BlackRock",
          tier: "Asset Management",
          headcount: "19,800",
          locations: ["New York", "London", "Singapore", "Tokyo"],
          techStack: ["Python", "C++", "Java", "R", "MATLAB"],
          assessmentVolume: 3450,
          avgDifficulty: "Expert",
          successRate: 8.9,
          industryFocus: [
            "Asset Management",
            "ETFs",
            "Risk Management",
            "Technology",
          ],
        },
        {
          name: "Citadel",
          tier: "Hedge Fund",
          headcount: "2,800",
          locations: ["Chicago", "New York", "London", "Hong Kong"],
          techStack: ["C++", "Python", "Java", "MATLAB", "R"],
          assessmentVolume: 890,
          avgDifficulty: "Expert",
          successRate: 4.2,
          industryFocus: [
            "Quantitative Trading",
            "Market Making",
            "Technology",
            "Research",
          ],
        },
        {
          name: "Two Sigma",
          tier: "Quant Fund",
          headcount: "1,800",
          locations: ["New York", "London", "Hong Kong"],
          techStack: ["Python", "C++", "Java", "Scala", "R"],
          assessmentVolume: 670,
          avgDifficulty: "Expert",
          successRate: 3.8,
          industryFocus: [
            "Quantitative Research",
            "Machine Learning",
            "Data Science",
            "Trading",
          ],
        },
      ],
      commonSkills: [
        {
          name: "Financial Modeling",
          demand: 96,
          avgSalary: "$175,000",
          trend: "stable",
        },
        {
          name: "Excel/VBA",
          demand: 94,
          avgSalary: "$145,000",
          trend: "declining",
        },
        { name: "Python", demand: 89, avgSalary: "$165,000", trend: "growing" },
        {
          name: "Risk Management",
          demand: 87,
          avgSalary: "$180,000",
          trend: "stable",
        },
        {
          name: "Derivatives",
          demand: 84,
          avgSalary: "$195,000",
          trend: "stable",
        },
        {
          name: "Fixed Income",
          demand: 81,
          avgSalary: "$185,000",
          trend: "stable",
        },
        {
          name: "Quantitative Analysis",
          demand: 78,
          avgSalary: "$205,000",
          trend: "growing",
        },
        {
          name: "Machine Learning",
          demand: 72,
          avgSalary: "$195,000",
          trend: "exploding",
        },
        { name: "SQL", demand: 69, avgSalary: "$155,000", trend: "stable" },
        {
          name: "Bloomberg Terminal",
          demand: 65,
          avgSalary: "$165,000",
          trend: "declining",
        },
      ],
      questionCount: 8930,
      avgDifficulty: "Expert",
      successRate: 42.3,
      growthMetrics: {
        questionsAdded: 580,
        companiesActive: 28,
        assessmentsCompleted: 15420,
      },
    },
    consulting: {
      name: "Management Consulting",
      icon: "📊",
      description:
        "Strategy consulting, operations improvement, and business transformation",
      marketCap: "$4.2T",
      avgSalary: "$155,000",
      growthRate: "8.7%",
      companies: [
        {
          name: "McKinsey & Company",
          tier: "MBB",
          headcount: "38,000",
          locations: ["New York", "London", "Dubai", "Shanghai"],
          techStack: ["Excel", "PowerPoint", "Python", "R", "Tableau"],
          assessmentVolume: 2840,
          avgDifficulty: "Expert",
          successRate: 8.5,
          industryFocus: [
            "Strategy",
            "Operations",
            "Digital",
            "Implementation",
          ],
        },
        {
          name: "Boston Consulting Group",
          tier: "MBB",
          headcount: "32,000",
          locations: ["Boston", "London", "Munich", "Tokyo"],
          techStack: ["Excel", "PowerPoint", "Python", "Tableau", "Alteryx"],
          assessmentVolume: 2340,
          avgDifficulty: "Expert",
          successRate: 9.2,
          industryFocus: [
            "Strategy",
            "Digital Transformation",
            "People & Organization",
            "Technology",
          ],
        },
        {
          name: "Bain & Company",
          tier: "MBB",
          headcount: "15,000",
          locations: ["Boston", "London", "Singapore", "São Paulo"],
          techStack: ["Excel", "PowerPoint", "Python", "R", "Tableau"],
          assessmentVolume: 1890,
          avgDifficulty: "Expert",
          successRate: 7.8,
          industryFocus: [
            "Strategy",
            "Private Equity",
            "Performance Improvement",
            "M&A",
          ],
        },
        {
          name: "Deloitte Consulting",
          tier: "Big 4",
          headcount: "415,000",
          locations: ["New York", "London", "Mumbai", "Sydney"],
          techStack: ["Excel", "PowerPoint", "Salesforce", "SAP", "Tableau"],
          assessmentVolume: 8940,
          avgDifficulty: "Advanced",
          successRate: 15.7,
          industryFocus: [
            "Technology",
            "Operations",
            "Human Capital",
            "Strategy",
          ],
        },
        {
          name: "PwC Strategy&",
          tier: "Big 4",
          headcount: "364,000",
          locations: ["London", "New York", "Dubai", "Singapore"],
          techStack: ["Excel", "PowerPoint", "Power BI", "Python", "SQL"],
          assessmentVolume: 7820,
          avgDifficulty: "Advanced",
          successRate: 16.3,
          industryFocus: [
            "Strategy",
            "Operations",
            "People & Organization",
            "Technology",
          ],
        },
      ],
      commonSkills: [
        {
          name: "Case Studies",
          demand: 98,
          avgSalary: "$165,000",
          trend: "stable",
        },
        {
          name: "Problem Solving",
          demand: 96,
          avgSalary: "$155,000",
          trend: "stable",
        },
        { name: "Excel", demand: 94, avgSalary: "$145,000", trend: "stable" },
        {
          name: "PowerPoint",
          demand: 92,
          avgSalary: "$140,000",
          trend: "stable",
        },
        {
          name: "Strategic Thinking",
          demand: 89,
          avgSalary: "$175,000",
          trend: "growing",
        },
        {
          name: "Data Analysis",
          demand: 85,
          avgSalary: "$160,000",
          trend: "growing",
        },
        {
          name: "Client Management",
          demand: 82,
          avgSalary: "$170,000",
          trend: "stable",
        },
        {
          name: "Market Research",
          demand: 78,
          avgSalary: "$150,000",
          trend: "stable",
        },
        {
          name: "Process Improvement",
          demand: 75,
          avgSalary: "$155,000",
          trend: "stable",
        },
        {
          name: "Change Management",
          demand: 71,
          avgSalary: "$165,000",
          trend: "growing",
        },
      ],
      questionCount: 6240,
      avgDifficulty: "Expert",
      successRate: 55.7,
      growthMetrics: {
        questionsAdded: 420,
        companiesActive: 18,
        assessmentsCompleted: 9850,
      },
    },
    healthcare: {
      name: "Healthcare & Pharma",
      icon: "🏥",
      description:
        "Medical institutions, pharmaceutical companies, and health services",
      marketCap: "$6.1T",
      avgSalary: "$135,000",
      growthRate: "15.2%",
      companies: [
        {
          name: "Pfizer",
          tier: "Big Pharma",
          headcount: "83,000",
          locations: ["New York", "Groton", "Cambridge", "San Diego"],
          techStack: ["SAS", "R", "Python", "MATLAB", "SQL"],
          assessmentVolume: 3420,
          avgDifficulty: "Advanced",
          successRate: 18.5,
          industryFocus: [
            "Drug Discovery",
            "Clinical Development",
            "Regulatory Affairs",
            "Manufacturing",
          ],
        },
        {
          name: "Johnson & Johnson",
          tier: "Big Pharma",
          headcount: "152,700",
          locations: ["New Brunswick", "Boston", "Basel", "Beijing"],
          techStack: ["SAS", "R", "Python", "Java", "SQL"],
          assessmentVolume: 4890,
          avgDifficulty: "Advanced",
          successRate: 21.3,
          industryFocus: [
            "Pharmaceuticals",
            "Medical Devices",
            "Consumer Health",
            "Digital Health",
          ],
        },
        {
          name: "Roche",
          tier: "Big Pharma",
          headcount: "103,613",
          locations: ["Basel", "San Francisco", "Tokyo", "Shanghai"],
          techStack: ["R", "SAS", "Python", "MATLAB", "SQL"],
          assessmentVolume: 2890,
          avgDifficulty: "Advanced",
          successRate: 19.7,
          industryFocus: [
            "Oncology",
            "Diagnostics",
            "Personalized Medicine",
            "Digital Health",
          ],
        },
        {
          name: "Novartis",
          tier: "Big Pharma",
          headcount: "108,000",
          locations: ["Basel", "Cambridge", "East Hanover", "Hyderabad"],
          techStack: ["R", "SAS", "Python", "MATLAB", "SQL"],
          assessmentVolume: 3240,
          avgDifficulty: "Advanced",
          successRate: 17.8,
          industryFocus: [
            "Innovative Medicines",
            "Sandoz Generics",
            "Digital Therapeutics",
            "Data Science",
          ],
        },
        {
          name: "Mayo Clinic",
          tier: "Healthcare Provider",
          headcount: "73,000",
          locations: ["Rochester", "Phoenix", "Jacksonville", "London"],
          techStack: ["Epic", "Cerner", "Python", "R", "SQL"],
          assessmentVolume: 2140,
          avgDifficulty: "Advanced",
          successRate: 22.4,
          industryFocus: [
            "Patient Care",
            "Medical Research",
            "Education",
            "Digital Health",
          ],
        },
        {
          name: "Kaiser Permanente",
          tier: "Healthcare Provider",
          headcount: "301,000",
          locations: ["Oakland", "Pasadena", "Atlanta", "Denver"],
          techStack: ["Epic", "HealthConnect", "Python", "SQL", "Tableau"],
          assessmentVolume: 5670,
          avgDifficulty: "Intermediate",
          successRate: 28.9,
          industryFocus: [
            "Integrated Care",
            "Population Health",
            "Digital Health",
            "Value-Based Care",
          ],
        },
      ],
      commonSkills: [
        {
          name: "Clinical Knowledge",
          demand: 95,
          avgSalary: "$145,000",
          trend: "stable",
        },
        {
          name: "Regulatory Affairs",
          demand: 89,
          avgSalary: "$155,000",
          trend: "growing",
        },
        {
          name: "Data Analysis",
          demand: 86,
          avgSalary: "$140,000",
          trend: "growing",
        },
        {
          name: "Patient Care",
          demand: 84,
          avgSalary: "$135,000",
          trend: "stable",
        },
        {
          name: "Clinical Research",
          demand: 81,
          avgSalary: "$150,000",
          trend: "growing",
        },
        {
          name: "Biostatistics",
          demand: 77,
          avgSalary: "$160,000",
          trend: "growing",
        },
        {
          name: "Pharmacology",
          demand: 74,
          avgSalary: "$165,000",
          trend: "stable",
        },
        {
          name: "Medical Writing",
          demand: 71,
          avgSalary: "$130,000",
          trend: "stable",
        },
        {
          name: "Quality Assurance",
          demand: 68,
          avgSalary: "$125,000",
          trend: "stable",
        },
        {
          name: "Digital Health",
          demand: 64,
          avgSalary: "$155,000",
          trend: "exploding",
        },
      ],
      questionCount: 4180,
      avgDifficulty: "Advanced",
      successRate: 71.2,
      growthMetrics: {
        questionsAdded: 310,
        companiesActive: 22,
        assessmentsCompleted: 7420,
      },
    },
    education: {
      name: "Education & EdTech",
      icon: "🎓",
      description:
        "Educational institutions, training organizations, and EdTech companies",
      marketCap: "$2.8T",
      avgSalary: "$95,000",
      growthRate: "22.1%",
      companies: [
        {
          name: "Harvard University",
          tier: "Ivy League",
          headcount: "23,000",
          locations: ["Cambridge", "Boston", "Allston"],
          techStack: ["Canvas", "Zoom", "Python", "R", "MATLAB"],
          assessmentVolume: 1240,
          avgDifficulty: "Expert",
          successRate: 15.2,
          industryFocus: [
            "Higher Education",
            "Research",
            "Online Learning",
            "Academic Excellence",
          ],
        },
        {
          name: "MIT",
          tier: "Elite Tech",
          headcount: "13,934",
          locations: ["Cambridge", "Boston"],
          techStack: ["Python", "MATLAB", "R", "C++", "JavaScript"],
          assessmentVolume: 890,
          avgDifficulty: "Expert",
          successRate: 12.8,
          industryFocus: ["Engineering", "Science", "Technology", "Innovation"],
        },
        {
          name: "Coursera",
          tier: "EdTech",
          headcount: "4,800",
          locations: ["Mountain View", "New York", "London", "Toronto"],
          techStack: ["Python", "Scala", "JavaScript", "React", "AWS"],
          assessmentVolume: 2340,
          avgDifficulty: "Advanced",
          successRate: 28.7,
          industryFocus: [
            "Online Learning",
            "Skills Development",
            "Corporate Training",
            "Certificates",
          ],
        },
        {
          name: "Udemy",
          tier: "EdTech",
          headcount: "1,200",
          locations: ["San Francisco", "Denver", "Dublin", "Ankara"],
          techStack: ["Python", "Go", "React", "AWS", "PostgreSQL"],
          assessmentVolume: 1890,
          avgDifficulty: "Intermediate",
          successRate: 35.4,
          industryFocus: [
            "Online Courses",
            "Skill Development",
            "Creator Economy",
            "Marketplace",
          ],
        },
      ],
      commonSkills: [
        {
          name: "Curriculum Development",
          demand: 92,
          avgSalary: "$105,000",
          trend: "growing",
        },
        {
          name: "Teaching Methods",
          demand: 89,
          avgSalary: "$95,000",
          trend: "stable",
        },
        {
          name: "Assessment Design",
          demand: 85,
          avgSalary: "$110,000",
          trend: "growing",
        },
        {
          name: "Educational Technology",
          demand: 82,
          avgSalary: "$120,000",
          trend: "exploding",
        },
        {
          name: "Student Engagement",
          demand: 78,
          avgSalary: "$100,000",
          trend: "growing",
        },
        {
          name: "Learning Analytics",
          demand: 74,
          avgSalary: "$125,000",
          trend: "exploding",
        },
        {
          name: "Instructional Design",
          demand: 71,
          avgSalary: "$115,000",
          trend: "growing",
        },
        {
          name: "Digital Pedagogy",
          demand: 67,
          avgSalary: "$105,000",
          trend: "growing",
        },
        {
          name: "Research Methods",
          demand: 64,
          avgSalary: "$110,000",
          trend: "stable",
        },
        {
          name: "Academic Writing",
          demand: 61,
          avgSalary: "$90,000",
          trend: "stable",
        },
      ],
      questionCount: 3420,
      avgDifficulty: "Intermediate",
      successRate: 78.5,
      growthMetrics: {
        questionsAdded: 280,
        companiesActive: 15,
        assessmentsCompleted: 5670,
      },
    },
  };

  // Enhanced sample questions with comprehensive metadata
  const generateEnhancedQuestionDatabase = () => {
    const baseQuestions = [
      // Technology Questions
      {
        id: 1,
        title: "React State Management in Large-Scale Applications",
        type: "coding",
        industry: "technology",
        companies: ["Meta", "Netflix", "Uber", "Airbnb"],
        difficulty: "Advanced",
        skill: "React",
        subSkills: [
          "State Management",
          "Performance Optimization",
          "Component Architecture",
        ],
        tags: [
          "frontend",
          "react",
          "state-management",
          "redux",
          "context-api",
          "hooks",
        ],
        customTags: ["scalability", "enterprise"],
        createdBy: "Sarah Chen",
        createdAt: "2025-01-15T10:30:00Z",
        lastModified: "2025-01-20T14:22:00Z",
        lastUsed: "2025-01-22T09:15:00Z",
        usageCount: 247,
        successRate: 68.5,
        averageTime: 25,
        validated: true,
        validatedBy: "Senior Engineering Team",
        validationDate: "2025-01-16T11:00:00Z",
        version: "2.1",
        status: "active",
        reviewScore: 4.8,
        feedbackCount: 23,
        description:
          "Design and implement a scalable state management solution for a React application with multiple interconnected components, focusing on performance and maintainability.",
        detailedDescription:
          "This comprehensive coding challenge evaluates the candidate's ability to architect state management in complex React applications. Candidates must demonstrate understanding of various state management patterns, performance implications, and scalability considerations.",
        prerequisites: [
          "React Hooks",
          "Component Lifecycle",
          "JavaScript ES6+",
        ],
        learningObjectives: [
          "Implement efficient state management patterns",
          "Optimize component re-rendering",
          "Design scalable application architecture",
          "Handle complex data flows",
        ],
        testCases: [
          {
            input: "Component tree with 50+ components",
            expected: "Efficient state updates",
          },
          { input: "Concurrent state changes", expected: "No race conditions" },
          { input: "Large dataset updates", expected: "Optimized performance" },
        ],
        rubric: [
          { criteria: "Architecture Design", weight: 30, maxScore: 10 },
          { criteria: "Code Quality", weight: 25, maxScore: 10 },
          { criteria: "Performance Optimization", weight: 25, maxScore: 10 },
          { criteria: "Testing Strategy", weight: 20, maxScore: 10 },
        ],
        estimatedEffort: "2-3 hours",
        sourceCode:
          "// Starter template provided\nimport React from 'react';\n\nconst App = () => {\n  // Implement your solution here\n};",
        relatedQuestions: [2, 15, 28],
        authorNotes: "Focus on real-world scalability scenarios",
        reviewerComments: [
          "Excellent coverage of modern patterns",
          "Consider adding Context API variants",
        ],
        usageAnalytics: {
          byCompany: { Meta: 45, Netflix: 38, Uber: 29 },
          byDifficulty: { Intermediate: 15, Advanced: 85 },
          byOutcome: { passed: 169, failed: 78 },
        },
        aiMetadata: {
          complexity: 0.75,
          requiredKnowledge: ["React", "JavaScript", "Performance"],
          estimatedSolveTime: 25,
          similarityScore: 0.82,
        },
      },
      {
        id: 2,
        title: "Microservices Architecture Design Challenge",
        type: "case-study",
        industry: "technology",
        companies: ["Google", "Amazon", "Microsoft", "Netflix"],
        difficulty: "Expert",
        skill: "System Design",
        subSkills: [
          "Distributed Systems",
          "API Design",
          "Scalability",
          "Reliability",
        ],
        tags: [
          "microservices",
          "system-design",
          "scalability",
          "distributed-systems",
          "api-design",
        ],
        customTags: ["architecture", "enterprise", "cloud-native"],
        createdBy: "Michael Rodriguez",
        createdAt: "2025-01-12T08:45:00Z",
        lastModified: "2025-01-19T16:30:00Z",
        lastUsed: "2025-01-23T11:20:00Z",
        usageCount: 156,
        successRate: 42.3,
        averageTime: 45,
        validated: true,
        validatedBy: "Principal Architecture Team",
        validationDate: "2025-01-13T09:15:00Z",
        version: "3.0",
        status: "active",
        reviewScore: 4.9,
        feedbackCount: 18,
        description:
          "Design a comprehensive microservices architecture for a high-traffic e-commerce platform handling 10M+ daily users with 99.9% uptime requirements.",
        detailedDescription:
          "This expert-level system design challenge requires candidates to architect a complete microservices ecosystem, considering service decomposition, data consistency, communication patterns, and operational concerns.",
        prerequisites: [
          "Distributed Systems",
          "Database Design",
          "Cloud Computing",
          "API Design",
        ],
        learningObjectives: [
          "Design service boundaries and interfaces",
          "Implement data consistency strategies",
          "Plan for scalability and reliability",
          "Address operational concerns",
        ],
        scenario:
          "E-commerce platform with 10M DAU, 100K orders/day, global presence",
        constraints: [
          "99.9% uptime",
          "Peak load 50x normal",
          "Global latency <200ms",
        ],
        rubric: [
          { criteria: "Service Decomposition", weight: 25, maxScore: 10 },
          { criteria: "Data Management", weight: 25, maxScore: 10 },
          { criteria: "Scalability Design", weight: 25, maxScore: 10 },
          { criteria: "Operational Excellence", weight: 25, maxScore: 10 },
        ],
        estimatedEffort: "3-4 hours",
        relatedQuestions: [12, 24, 35],
        authorNotes: "Emphasize real-world trade-offs and constraints",
        reviewerComments: [
          "Comprehensive coverage",
          "Add more operational scenarios",
        ],
        usageAnalytics: {
          byCompany: { Google: 42, Amazon: 38, Microsoft: 35, Netflix: 25 },
          byDifficulty: { Advanced: 20, Expert: 80 },
          byOutcome: { passed: 66, failed: 90 },
        },
        aiMetadata: {
          complexity: 0.95,
          requiredKnowledge: ["System Design", "Distributed Systems", "Cloud"],
          estimatedSolveTime: 45,
          similarityScore: 0.78,
        },
      },
      // Finance Questions
      {
        id: 3,
        title: "Goldman Sachs Trading Algorithm Optimization",
        type: "case-study",
        industry: "finance",
        companies: ["Goldman Sachs", "Morgan Stanley", "Citadel", "Two Sigma"],
        difficulty: "Expert",
        skill: "Algorithmic Trading",
        subSkills: [
          "Market Making",
          "Risk Management",
          "Quantitative Analysis",
          "Performance Optimization",
        ],
        tags: [
          "trading",
          "algorithms",
          "optimization",
          "risk-management",
          "market-making",
        ],
        customTags: ["quantitative", "high-frequency", "bloomberg"],
        createdBy: "Dr. James Patterson",
        createdAt: "2025-01-10T07:30:00Z",
        lastModified: "2025-01-18T13:45:00Z",
        lastUsed: "2025-01-22T15:10:00Z",
        usageCount: 89,
        successRate: 28.1,
        averageTime: 60,
        validated: true,
        validatedBy: "Quantitative Research Team",
        validationDate: "2025-01-11T10:30:00Z",
        version: "1.8",
        status: "active",
        reviewScore: 4.7,
        feedbackCount: 12,
        description:
          "Analyze and optimize a high-frequency trading algorithm for market making in volatile conditions, considering risk management and regulatory constraints.",
        detailedDescription:
          "This expert-level quantitative challenge requires deep understanding of market microstructure, algorithmic trading strategies, and risk management principles in the context of market making operations.",
        prerequisites: [
          "Financial Markets",
          "Statistics",
          "Programming",
          "Risk Management",
        ],
        learningObjectives: [
          "Optimize trading algorithm performance",
          "Implement robust risk controls",
          "Analyze market microstructure effects",
          "Design compliance frameworks",
        ],
        scenario:
          "Market making desk with $500M daily volume, volatile market conditions",
        constraints: [
          "Regulatory compliance",
          "Risk limits",
          "Latency requirements",
        ],
        marketData: "Real market scenarios from 2024 volatility events",
        rubric: [
          { criteria: "Algorithm Design", weight: 30, maxScore: 10 },
          { criteria: "Risk Management", weight: 25, maxScore: 10 },
          { criteria: "Performance Analysis", weight: 25, maxScore: 10 },
          { criteria: "Regulatory Compliance", weight: 20, maxScore: 10 },
        ],
        estimatedEffort: "4-5 hours",
        relatedQuestions: [8, 19, 31],
        authorNotes: "Based on real Goldman Sachs scenarios",
        reviewerComments: ["Highly realistic", "Add more regulatory context"],
        usageAnalytics: {
          byCompany: { "Goldman Sachs": 25, Citadel: 18, "Two Sigma": 15 },
          byDifficulty: { Expert: 100 },
          byOutcome: { passed: 25, failed: 64 },
        },
        aiMetadata: {
          complexity: 0.92,
          requiredKnowledge: ["Finance", "Algorithms", "Statistics"],
          estimatedSolveTime: 60,
          similarityScore: 0.71,
        },
      },
      // Add more questions for each industry...
    ];

    // Generate additional questions programmatically
    const additionalQuestions = [];
    let questionId = 4;

    Object.entries(industryData).forEach(([industryKey, industry]) => {
      industry.companies.forEach((company) => {
        industry.commonSkills.forEach((skill, skillIndex) => {
          if (skillIndex < 3) {
            // Generate 3 questions per company
            const questionTypes = ["multiple-choice", "coding", "case-study"];
            const difficulties = ["Intermediate", "Advanced", "Expert"];

            additionalQuestions.push({
              id: questionId++,
              title: `${company.name} ${skill.name} Assessment`,
              type: questionTypes[skillIndex % 3],
              industry: industryKey,
              companies: [company.name],
              difficulty: difficulties[skillIndex % 3],
              skill: skill.name,
              subSkills: [
                `${skill.name} Application`,
                `${skill.name} Best Practices`,
              ],
              tags: [
                skill.name.toLowerCase().replace(/\s+/g, "-"),
                industryKey,
                company.name.toLowerCase().replace(/\s+/g, "-"),
              ],
              customTags: [company.tier?.toLowerCase() || "standard"],
              createdBy: `Expert Team`,
              createdAt: new Date(
                Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000
              ).toISOString(),
              lastModified: new Date(
                Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000
              ).toISOString(),
              lastUsed: new Date(
                Date.now() - Math.random() * 24 * 60 * 60 * 1000
              ).toISOString(),
              usageCount: Math.floor(Math.random() * 500) + 50,
              successRate: Math.floor(Math.random() * 40) + 30,
              averageTime: Math.floor(Math.random() * 40) + 15,
              validated: Math.random() > 0.1,
              validatedBy: `${company.name} Subject Matter Expert`,
              validationDate: new Date(
                Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000
              ).toISOString(),
              version: `${Math.floor(Math.random() * 3) + 1}.${Math.floor(
                Math.random() * 10
              )}`,
              status: Math.random() > 0.05 ? "active" : "draft",
              reviewScore: Math.round((Math.random() * 2 + 3) * 10) / 10,
              feedbackCount: Math.floor(Math.random() * 50),
              description: `Comprehensive ${skill.name} assessment designed specifically for ${company.name} interview process.`,
              detailedDescription: `This question evaluates candidate proficiency in ${skill.name} within the context of ${company.name}'s specific requirements and industry standards.`,
              prerequisites: [skill.name, `${industryKey} knowledge`],
              learningObjectives: [
                `Master ${skill.name} fundamentals`,
                `Apply knowledge in ${company.name} context`,
                `Demonstrate industry best practices`,
              ],
              estimatedEffort: `${Math.floor(Math.random() * 3) + 1}-${
                Math.floor(Math.random() * 2) + 3
              } hours`,
              relatedQuestions: [],
              authorNotes: `Tailored for ${company.name} requirements`,
              usageAnalytics: {
                byCompany: {
                  [company.name]: Math.floor(Math.random() * 100) + 20,
                },
                byDifficulty: { [difficulties[skillIndex % 3]]: 100 },
                byOutcome: {
                  passed: Math.floor(Math.random() * 200) + 50,
                  failed: Math.floor(Math.random() * 150) + 30,
                },
              },
              aiMetadata: {
                complexity: Math.round(Math.random() * 100) / 100,
                requiredKnowledge: [skill.name, industryKey],
                estimatedSolveTime: Math.floor(Math.random() * 40) + 15,
                similarityScore: Math.round(Math.random() * 100) / 100,
              },
            });
          }
        });
      });
    });

    return [...baseQuestions, ...additionalQuestions];
  };

  const allQuestions = useMemo(() => generateEnhancedQuestionDatabase(), []);

  // Advanced filtering logic
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((question) => {
      // Text search
      if (debouncedSearchTerm) {
        const searchFields = [
          question.title,
          question.description,
          question.detailedDescription,
          question.skill,
          ...question.tags,
          ...question.customTags,
          ...question.subSkills,
          question.createdBy,
        ]
          .join(" ")
          .toLowerCase();

        if (!searchFields.includes(debouncedSearchTerm.toLowerCase())) {
          return false;
        }
      }

      // Industry filter
      if (
        selectedFilters.industry &&
        question.industry !== selectedFilters.industry
      ) {
        return false;
      }

      // Company filter
      if (
        selectedFilters.company &&
        !question.companies.includes(selectedFilters.company)
      ) {
        return false;
      }

      // Difficulty filter
      if (
        selectedFilters.difficulty &&
        question.difficulty !== selectedFilters.difficulty
      ) {
        return false;
      }

      // Type filter
      if (selectedFilters.type && question.type !== selectedFilters.type) {
        return false;
      }

      // Skill filter
      if (selectedFilters.skill && question.skill !== selectedFilters.skill) {
        return false;
      }

      // Validated filter
      if (selectedFilters.validated && !question.validated) {
        return false;
      }

      // Created by filter
      if (
        selectedFilters.createdBy &&
        !question.createdBy
          .toLowerCase()
          .includes(selectedFilters.createdBy.toLowerCase())
      ) {
        return false;
      }

      // Date range filter
      if (selectedFilters.dateRange) {
        const questionDate = new Date(question.createdAt);
        const now = new Date();
        const daysDiff = (now - questionDate) / (1000 * 60 * 60 * 24);

        switch (selectedFilters.dateRange) {
          case "today":
            if (daysDiff > 1) return false;
            break;
          case "week":
            if (daysDiff > 7) return false;
            break;
          case "month":
            if (daysDiff > 30) return false;
            break;
          case "quarter":
            if (daysDiff > 90) return false;
            break;
        }
      }

      // Tags filter
      if (selectedFilters.tags.length > 0) {
        const questionTags = [...question.tags, ...question.customTags];
        if (!selectedFilters.tags.some((tag) => questionTags.includes(tag))) {
          return false;
        }
      }

      // Average time filter
      if (selectedFilters.averageTime) {
        switch (selectedFilters.averageTime) {
          case "quick":
            if (question.averageTime > 15) return false;
            break;
          case "medium":
            if (question.averageTime < 15 || question.averageTime > 45)
              return false;
            break;
          case "long":
            if (question.averageTime < 45) return false;
            break;
        }
      }

      // Success rate filter
      if (selectedFilters.successRate) {
        switch (selectedFilters.successRate) {
          case "low":
            if (question.successRate > 40) return false;
            break;
          case "medium":
            if (question.successRate < 40 || question.successRate > 70)
              return false;
            break;
          case "high":
            if (question.successRate < 70) return false;
            break;
        }
      }

      // Usage count filter
      if (selectedFilters.usageCount) {
        switch (selectedFilters.usageCount) {
          case "low":
            if (question.usageCount > 100) return false;
            break;
          case "medium":
            if (question.usageCount < 100 || question.usageCount > 300)
              return false;
            break;
          case "high":
            if (question.usageCount < 300) return false;
            break;
        }
      }

      // Recently used filter
      if (selectedFilters.recentlyUsed) {
        const lastUsedDate = new Date(question.lastUsed);
        const daysSinceUsed =
          (new Date() - lastUsedDate) / (1000 * 60 * 60 * 24);
        if (daysSinceUsed > 7) return false;
      }

      return true;
    });
  }, [allQuestions, debouncedSearchTerm, selectedFilters]);

  // Advanced sorting logic
  const sortedQuestions = useMemo(() => {
    return [...filteredQuestions].sort((a, b) => {
      switch (sortBy) {
        case "recent":
          return new Date(b.lastUsed) - new Date(a.lastUsed);
        case "created":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "modified":
          return new Date(b.lastModified) - new Date(a.lastModified);
        case "popular":
          return b.usageCount - a.usageCount;
        case "success":
          return b.successRate - a.successRate;
        case "rating":
          return b.reviewScore - a.reviewScore;
        case "difficulty":
          const difficultyOrder = {
            Beginner: 1,
            Intermediate: 2,
            Advanced: 3,
            Expert: 4,
          };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        case "time":
          return a.averageTime - b.averageTime;
        case "alphabetical":
          return a.title.localeCompare(b.title);
        case "company":
          return a.companies[0]?.localeCompare(b.companies[0] || "") || 0;
        case "industry":
          return a.industry.localeCompare(b.industry);
        default:
          return 0;
      }
    });
  }, [filteredQuestions, sortBy]);

  // Pagination
  const {
    currentPage,
    totalPages,
    currentItems: paginatedQuestions,
    goToPage,
    nextPage,
    previousPage,
    hasNextPage,
    hasPreviousPage,
  } = usePagination(sortedQuestions, itemsPerPage);

  // Analytics calculations
  const analytics = useMemo(() => {
    const total = filteredQuestions.length;
    const validated = filteredQuestions.filter((q) => q.validated).length;
    const avgSuccessRate =
      total > 0
        ? filteredQuestions.reduce((sum, q) => sum + q.successRate, 0) / total
        : 0;
    const avgTime =
      total > 0
        ? filteredQuestions.reduce((sum, q) => sum + q.averageTime, 0) / total
        : 0;
    const totalUsage = filteredQuestions.reduce(
      (sum, q) => sum + q.usageCount,
      0
    );

    const byIndustry = {};
    const byDifficulty = {};
    const byType = {};
    const byCompany = {};
    const bySkill = {};

    filteredQuestions.forEach((q) => {
      byIndustry[q.industry] = (byIndustry[q.industry] || 0) + 1;
      byDifficulty[q.difficulty] = (byDifficulty[q.difficulty] || 0) + 1;
      byType[q.type] = (byType[q.type] || 0) + 1;
      bySkill[q.skill] = (bySkill[q.skill] || 0) + 1;
      q.companies.forEach((company) => {
        byCompany[company] = (byCompany[company] || 0) + 1;
      });
    });

    return {
      total,
      validated,
      validationRate: total > 0 ? (validated / total) * 100 : 0,
      avgSuccessRate,
      avgTime,
      totalUsage,
      distributions: {
        byIndustry,
        byDifficulty,
        byType,
        byCompany,
        bySkill,
      },
    };
  }, [filteredQuestions]);

  // Effect hooks for data management
  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setLastSync(new Date());
      // Simulate random notifications
      if (Math.random() < 0.1) {
        const notificationTypes = [
          { type: "success", message: "New question validated successfully" },
          { type: "info", message: "Question usage statistics updated" },
          { type: "warning", message: "Question flagged for review" },
        ];
        const randomNotification =
          notificationTypes[
            Math.floor(Math.random() * notificationTypes.length)
          ];
        setNotifications((prev) => [
          {
            id: Date.now(),
            timestamp: new Date(),
            ...randomNotification,
          },
          ...prev.slice(0, 4),
        ]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Update question statistics
  useEffect(() => {
    const stats = {};
    filteredQuestions.forEach((q) => {
      stats[q.id] = {
        weeklyUsage: Math.floor(Math.random() * 50),
        trendDirection: Math.random() > 0.5 ? "up" : "down",
        recentFeedback: Math.floor(Math.random() * 10),
        avgRating: Math.round((Math.random() * 2 + 3) * 10) / 10,
      };
    });
    setQuestionStats(stats);
  }, [filteredQuestions]);

  // Event handlers
  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      // Add to search history
      if (term.trim() && !filterHistory.includes(term.trim())) {
        setFilterHistory((prev) => [term.trim(), ...prev.slice(0, 9)]);
      }
    },
    [filterHistory]
  );

  const handleFilterChange = useCallback((filterKey, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
    setCurrentPage(1); // Reset to first page when filtering
  }, []);

  const handleBulkAction = useCallback(
    (action) => {
      switch (action) {
        case "delete":
          if (
            window.confirm(
              `Are you sure you want to delete ${selectedQuestions.length} questions?`
            )
          ) {
            console.log("Deleting questions:", selectedQuestions);
            setSelectedQuestions([]);
            setNotifications((prev) => [
              {
                id: Date.now(),
                type: "success",
                message: `${selectedQuestions.length} questions deleted successfully`,
                timestamp: new Date(),
              },
              ...prev,
            ]);
          }
          break;
        case "export":
          console.log("Exporting questions:", selectedQuestions);
          setShowExportModal(true);
          break;
        case "validate":
          console.log("Validating questions:", selectedQuestions);
          setNotifications((prev) => [
            {
              id: Date.now(),
              type: "info",
              message: `${selectedQuestions.length} questions sent for validation`,
              timestamp: new Date(),
            },
            ...prev,
          ]);
          break;
        case "archive":
          console.log("Archiving questions:", selectedQuestions);
          setSelectedQuestions([]);
          break;
      }
    },
    [selectedQuestions]
  );

  const handleQuestionAction = useCallback(
    (questionId, action) => {
      const question = allQuestions.find((q) => q.id === questionId);
      if (!question) return;

      switch (action) {
        case "edit":
          setEditingQuestion(question);
          setShowQuestionEditor(true);
          break;
        case "preview":
          console.log("Previewing question:", question);
          break;
        case "duplicate":
          console.log("Duplicating question:", question);
          break;
        case "delete":
          if (
            window.confirm("Are you sure you want to delete this question?")
          ) {
            console.log("Deleting question:", question);
          }
          break;
        case "flag":
          console.log("Flagging question for review:", question);
          break;
        case "share":
          console.log("Sharing question:", question);
          break;
      }
    },
    [allQuestions]
  );

  const handleQuestionSelect = useCallback((questionId, isSelected) => {
    if (isSelected) {
      setSelectedQuestions((prev) => [...prev, questionId]);
    } else {
      setSelectedQuestions((prev) => prev.filter((id) => id !== questionId));
    }
  }, []);

  const handleSelectAll = useCallback(() => {
    if (selectedQuestions.length === paginatedQuestions.length) {
      setSelectedQuestions([]);
    } else {
      setSelectedQuestions(paginatedQuestions.map((q) => q.id));
    }
  }, [selectedQuestions, paginatedQuestions]);

  const saveSearch = useCallback(
    (name) => {
      const searchConfig = {
        id: Date.now(),
        name: name || `Search ${savedSearches.length + 1}`,
        filters: selectedFilters,
        searchTerm: debouncedSearchTerm,
        sortBy,
        createdAt: new Date().toISOString(),
        resultCount: filteredQuestions.length,
      };
      setSavedSearches((prev) => [searchConfig, ...prev.slice(0, 9)]);
      setNotifications((prev) => [
        {
          id: Date.now(),
          type: "success",
          message: `Search "${searchConfig.name}" saved successfully`,
          timestamp: new Date(),
        },
        ...prev,
      ]);
    },
    [
      selectedFilters,
      debouncedSearchTerm,
      sortBy,
      filteredQuestions.length,
      savedSearches.length,
    ]
  );

  const loadSavedSearch = useCallback((searchConfig) => {
    setSelectedFilters(searchConfig.filters);
    setSearchTerm(searchConfig.searchTerm);
    setSortBy(searchConfig.sortBy);
    setNotifications((prev) => [
      {
        id: Date.now(),
        type: "info",
        message: `Loaded search "${searchConfig.name}"`,
        timestamp: new Date(),
      },
      ...prev,
    ]);
  }, []);

  const exportQuestions = useCallback(
    async (format, questions) => {
      setIsLoading(true);
      try {
        const data = questions || paginatedQuestions;

        switch (format) {
          case "json":
            const jsonData = JSON.stringify(data, null, 2);
            downloadFile(jsonData, "questions.json", "application/json");
            break;
          case "csv":
            const csvData = convertToCSV(data);
            downloadFile(csvData, "questions.csv", "text/csv");
            break;
          case "excel":
            // Simulate Excel export
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Excel export completed");
            break;
          case "pdf":
            // Simulate PDF export
            await new Promise((resolve) => setTimeout(resolve, 3000));
            console.log("PDF export completed");
            break;
        }

        setNotifications((prev) => [
          {
            id: Date.now(),
            type: "success",
            message: `${
              data.length
            } questions exported as ${format.toUpperCase()}`,
            timestamp: new Date(),
          },
          ...prev,
        ]);
      } catch (error) {
        setNotifications((prev) => [
          {
            id: Date.now(),
            type: "error",
            message: `Export failed: ${error.message}`,
            timestamp: new Date(),
          },
          ...prev,
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [paginatedQuestions]
  );

  const importQuestions = useCallback(async (file) => {
    setIsLoading(true);
    try {
      const text = await file.text();
      let importedQuestions = [];

      if (file.type === "application/json") {
        importedQuestions = JSON.parse(text);
      } else if (file.type === "text/csv") {
        importedQuestions = parseCSV(text);
      }

      // Validate imported questions
      const validQuestions = importedQuestions.filter(
        (q) => q.title && q.type && q.skill
      );

      console.log("Importing questions:", validQuestions);

      setNotifications((prev) => [
        {
          id: Date.now(),
          type: "success",
          message: `${validQuestions.length} questions imported successfully`,
          timestamp: new Date(),
        },
        ...prev,
      ]);

      setShowImportModal(false);
    } catch (error) {
      setNotifications((prev) => [
        {
          id: Date.now(),
          type: "error",
          message: `Import failed: ${error.message}`,
          timestamp: new Date(),
        },
        ...prev,
      ]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Utility functions
  const downloadFile = (content, filename, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const convertToCSV = (data) => {
    const headers = [
      "ID",
      "Title",
      "Type",
      "Industry",
      "Companies",
      "Difficulty",
      "Skill",
      "Success Rate",
      "Average Time",
      "Usage Count",
      "Created By",
      "Created At",
    ];
    const rows = data.map((q) => [
      q.id,
      `"${q.title}"`,
      q.type,
      q.industry,
      `"${q.companies.join(", ")}"`,
      q.difficulty,
      q.skill,
      q.successRate,
      q.averageTime,
      q.usageCount,
      q.createdBy,
      q.createdAt,
    ]);

    return [headers, ...rows].map((row) => row.join(",")).join("\n");
  };

  const parseCSV = (text) => {
    const lines = text.split("\n");
    const headers = lines[0].split(",");
    return lines.slice(1).map((line) => {
      const values = line.split(",");
      const obj = {};
      headers.forEach((header, index) => {
        obj[header.toLowerCase().replace(/\s+/g, "")] = values[index];
      });
      return obj;
    });
  };

  const getCurrentUser = () => "Mohamedelammari";

  const getRecommendedQuestions = () => {
    return allQuestions
      .filter((q) => q.validated && q.successRate > 60)
      .sort((a, b) => b.reviewScore - a.reviewScore)
      .slice(0, 5);
  };

  const getTrendingSkills = () => {
    const skillCounts = {};
    allQuestions.forEach((q) => {
      skillCounts[q.skill] = (skillCounts[q.skill] || 0) + 1;
    });

    return Object.entries(skillCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([skill, count]) => ({ skill, count }));
  };

  const getTopPerformers = () => {
    return allQuestions
      .filter((q) => q.usageCount > 100)
      .sort((a, b) => b.successRate - a.successRate)
      .slice(0, 5);
  };

  const getRecentActivity = () => {
    return [
      {
        id: 1,
        type: "created",
        user: "Sarah Chen",
        item: "React Hooks Advanced",
        timestamp: "2 hours ago",
      },
      {
        id: 2,
        type: "validated",
        user: "System",
        item: "Python Data Science",
        timestamp: "4 hours ago",
      },
      {
        id: 3,
        type: "updated",
        user: "Michael Rodriguez",
        item: "System Design Patterns",
        timestamp: "6 hours ago",
      },
      {
        id: 4,
        type: "used",
        user: "Assessment Engine",
        item: "JavaScript Fundamentals",
        timestamp: "8 hours ago",
      },
      {
        id: 5,
        type: "flagged",
        user: "Quality Team",
        item: "SQL Complex Queries",
        timestamp: "12 hours ago",
      },
    ];
  };

  // Component render
  return (
    <div className="space-y-6">
      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg shadow-lg border-l-4 ${
                notification.type === "success"
                  ? "bg-green-50 border-green-500 text-green-800"
                  : notification.type === "error"
                  ? "bg-red-50 border-red-500 text-red-800"
                  : notification.type === "warning"
                  ? "bg-yellow-50 border-yellow-500 text-yellow-800"
                  : "bg-blue-50 border-blue-500 text-blue-800"
              } max-w-sm`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {notification.type === "success" && (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  {notification.type === "error" && (
                    <XCircle className="w-4 h-4" />
                  )}
                  {notification.type === "warning" && (
                    <AlertTriangle className="w-4 h-4" />
                  )}
                  {notification.type === "info" && <Info className="w-4 h-4" />}
                  <span className="text-sm font-medium">
                    {notification.message}
                  </span>
                </div>
                <button
                  onClick={() =>
                    setNotifications((prev) =>
                      prev.filter((n) => n.id !== notification.id)
                    )
                  }
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Header with Enhanced Statistics */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Content Management Hub
              </h1>
              <p className="text-gray-600 text-lg">
                Advanced question bank with AI-powered insights
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    syncStatus === "synced"
                      ? "bg-green-500"
                      : syncStatus === "syncing"
                      ? "bg-yellow-500 animate-pulse"
                      : "bg-red-500"
                  }`}
                ></div>
                <span>Last Sync: {lastSync.toLocaleTimeString()}</span>
              </div>
              <div>Managed by: {getCurrentUser()}</div>
            </div>
            <button
              onClick={() => setShowAnalyticsPanel(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <BarChart3 className="w-4 h-4 mr-2 inline" />
              Analytics
            </button>
          </div>
        </div>

        {/* Enhanced Industry Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {Object.entries(industryData).map(([key, industry]) => (
            <div
              key={key}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-2xl">{industry.icon}</span>
                    <h3 className="font-semibold text-gray-900">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    {industry.questionCount.toLocaleString()} questions
                  </p>
                </div>
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Market Cap:</span>
                  <span className="font-medium text-green-600">
                    {industry.marketCap}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Avg Salary:</span>
                  <span className="font-medium">{industry.avgSalary}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Growth Rate:</span>
                  <span className="font-medium text-blue-600">
                    {industry.growthRate}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Companies:</span>
                  <span className="font-medium">
                    {industry.companies.length}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-medium text-purple-600">
                    {Math.round(industry.successRate)}%
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setExpandedCompanies((prev) => ({
                    ...prev,
                    [key]: !prev[key],
                  }));
                }}
                className="w-full mt-3 text-xs text-blue-600 hover:text-blue-800 flex items-center justify-center"
              >
                {expandedCompanies[key] ? (
                  <ChevronUp className="w-3 h-3 mr-1" />
                ) : (
                  <ChevronDown className="w-3 h-3 mr-1" />
                )}
                {expandedCompanies[key] ? "Hide" : "Show"} Companies
              </button>

              {expandedCompanies[key] && (
                <div className="mt-3 pt-3 border-t border-blue-200 space-y-1">
                  {industry.companies.slice(0, 3).map((company) => (
                    <div
                      key={company.name}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-gray-700">{company.name}</span>
                      <span className="text-gray-500">
                        {company.assessmentVolume}
                      </span>
                    </div>
                  ))}
                  {industry.companies.length > 3 && (
                    <div className="text-xs text-gray-500 text-center">
                      +{industry.companies.length - 3} more companies
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Advanced Search and Filters */}
        <div className="space-y-6">
          {/* Main Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search questions by title, description, skill, tags, or creator..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => handleSearch("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className={`px-4 py-3 rounded-xl font-medium transition-colors flex items-center ${
                  showAdvancedFilters
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {Object.values(selectedFilters).some((v) =>
                  Array.isArray(v)
                    ? v.length > 0
                    : v !== "" && v !== true && v !== false
                ) && (
                  <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                    {
                      Object.entries(selectedFilters).filter(([k, v]) =>
                        Array.isArray(v)
                          ? v.length > 0
                          : (typeof v === "string" && v !== "") ||
                            (typeof v === "boolean" &&
                              k === "validated" &&
                              v === true)
                      ).length
                    }
                  </span>
                )}
              </button>

              <select
                value={viewMode}
                onChange={(e) => setViewMode(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
              >
                <option value="grid">Grid View</option>
                <option value="list">List View</option>
                <option value="table">Table View</option>
                <option value="cards">Card View</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
              >
                <option value="recent">Recently Used</option>
                <option value="created">Recently Created</option>
                <option value="modified">Recently Modified</option>
                <option value="popular">Most Popular</option>
                <option value="success">Highest Success Rate</option>
                <option value="rating">Best Rated</option>
                <option value="difficulty">By Difficulty</option>
                <option value="time">By Duration</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="company">By Company</option>
                <option value="industry">By Industry</option>
              </select>

              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
              >
                <option value="6">6 per page</option>
                <option value="12">12 per page</option>
                <option value="24">24 per page</option>
                <option value="48">48 per page</option>
                <option value="96">96 per page</option>
              </select>

              <button
                onClick={() => setShowQuestionEditor(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-5 h-5 mr-2 inline" />
                Create Question
              </button>
            </div>
          </div>

          {/* Search History and Saved Searches */}
          {(filterHistory.length > 0 || savedSearches.length > 0) && (
            <div className="flex flex-wrap gap-2">
              {filterHistory.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Recent:</span>
                  {filterHistory.slice(0, 3).map((term, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(term)}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              )}

              {savedSearches.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Saved:</span>
                  {savedSearches.slice(0, 3).map((search) => (
                    <button
                      key={search.id}
                      onClick={() => loadSavedSearch(search)}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors flex items-center"
                    >
                      <Bookmark className="w-3 h-3 mr-1" />
                      {search.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Advanced Filters Panel */}
          {showAdvancedFilters && (
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
                <select
                  value={selectedFilters.industry}
                  onChange={(e) =>
                    handleFilterChange("industry", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="">All Industries</option>
                  {Object.entries(industryData).map(([key, industry]) => (
                    <option key={key} value={key}>
                      {industry.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedFilters.company}
                  onChange={(e) =>
                    handleFilterChange("company", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                  disabled={!selectedFilters.industry}
                >
                  <option value="">All Companies</option>
                  {selectedFilters.industry &&
                    industryData[selectedFilters.industry].companies.map(
                      (company) => (
                        <option key={company.name} value={company.name}>
                          {company.name}
                        </option>
                      )
                    )}
                </select>

                <select
                  value={selectedFilters.difficulty}
                  onChange={(e) =>
                    handleFilterChange("difficulty", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="">All Difficulties</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>

                <select
                  value={selectedFilters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="">All Types</option>
                  <option value="multiple-choice">Multiple Choice</option>
                  <option value="coding">Coding</option>
                  <option value="case-study">Case Study</option>
                  <option value="video">Video Response</option>
                  <option value="essay">Essay</option>
                  <option value="presentation">Presentation</option>
                </select>

                <select
                  value={selectedFilters.skill}
                  onChange={(e) => handleFilterChange("skill", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="">All Skills</option>
                  {selectedFilters.industry &&
                    industryData[selectedFilters.industry].commonSkills.map(
                      (skill) => (
                        <option key={skill.name} value={skill.name}>
                          {skill.name}
                        </option>
                      )
                    )}
                </select>

                <select
                  value={selectedFilters.dateRange}
                  onChange={(e) =>
                    handleFilterChange("dateRange", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Created by..."
                  value={selectedFilters.createdBy}
                  onChange={(e) =>
                    handleFilterChange("createdBy", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                />

                <select
                  value={selectedFilters.averageTime}
                  onChange={(e) =>
                    handleFilterChange("averageTime", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="">Any Duration</option>
                  <option value="quick">Quick (≤15 min)</option>
                  <option value="medium">Medium (15-45 min)</option>
                  <option value="long">Long (&gt;45 min)</option>
                </select>

                <select
                  value={selectedFilters.successRate}
                  onChange={(e) =>
                    handleFilterChange("successRate", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="">Any Success Rate</option>
                  <option value="low">Low (≤40%)</option>
                  <option value="medium">Medium (40-70%)</option>
                  <option value="high">High (&gt;70%)</option>
                </select>

                <select
                  value={selectedFilters.usageCount}
                  onChange={(e) =>
                    handleFilterChange("usageCount", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                >
                  <option value="">Any Usage</option>
                  <option value="low">Low (≤100)</option>
                  <option value="medium">Medium (100-300)</option>
                  <option value="high">High (&gt;300)</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedFilters.validated}
                      onChange={(e) =>
                        handleFilterChange("validated", e.target.checked)
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      Validated Only
                    </span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedFilters.recentlyUsed}
                      onChange={(e) =>
                        handleFilterChange("recentlyUsed", e.target.checked)
                      }
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      Recently Used (7 days)
                    </span>
                  </label>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      const searchName = prompt("Enter search name:");
                      if (searchName) saveSearch(searchName);
                    }}
                    className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Bookmark className="w-4 h-4 mr-1 inline" />
                    Save Search
                  </button>
                  <button
                    onClick={() =>
                      setSelectedFilters({
                        industry: "",
                        company: "",
                        position: "",
                        difficulty: "",
                        type: "",
                        skill: "",
                        validated: true,
                        recentlyUsed: false,
                        createdBy: "",
                        dateRange: "",
                        tags: [],
                        customTags: [],
                        averageTime: "",
                        successRate: "",
                        usageCount: "",
                      })
                    }
                    className="px-3 py-1 text-sm text-red-600 hover:text-red-800 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Results Summary and Actions */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center space-x-6">
              <span className="text-sm font-medium text-gray-900">
                {analytics.total.toLocaleString()} questions found
                {analytics.total !== sortedQuestions.length && (
                  <span className="text-blue-600">
                    {" "}
                    • {sortedQuestions.length.toLocaleString()} matching filters
                  </span>
                )}
              </span>

              {selectedQuestions.length > 0 && (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-blue-600 font-medium">
                    {selectedQuestions.length} selected
                  </span>
                  <button
                    onClick={() => setShowBulkActions(!showBulkActions)}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Bulk Actions
                  </button>
                </div>
              )}

              <div className="text-sm text-gray-500">
                {analytics.validationRate.toFixed(1)}% validated • Avg success:{" "}
                {analytics.avgSuccessRate.toFixed(1)}% • Avg time:{" "}
                {analytics.avgTime.toFixed(0)} min
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {showBulkActions && selectedQuestions.length > 0 && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleBulkAction("export")}
                    className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    <Download className="w-3 h-3 mr-1 inline" />
                    Export
                  </button>
                  <button
                    onClick={() => handleBulkAction("validate")}
                    className="px-3 py-1 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
                  >
                    <Check className="w-3 h-3 mr-1 inline" />
                    Validate
                  </button>
                  <button
                    onClick={() => handleBulkAction("archive")}
                    className="px-3 py-1 text-sm bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    <Archive className="w-3 h-3 mr-1 inline" />
                    Archive
                  </button>
                  <button
                    onClick={() => handleBulkAction("delete")}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="w-3 h-3 mr-1 inline" />
                    Delete
                  </button>
                </div>
              )}

              <button
                onClick={() => setShowImportModal(true)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Upload className="w-4 h-4 mr-2 inline" />
                Import
              </button>

              <button
                onClick={() => exportQuestions("json")}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <Download className="w-4 h-4 mr-2 inline" />
                Export All
              </button>

              <button
                onClick={() => setShowTemplateLibrary(true)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
              >
                <Package className="w-4 h-4 mr-2 inline" />
                Templates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with Quick Insights */}
        <div className="space-y-6">
          {/* Quick Analytics */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Quick Insights
            </h3>

            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {analytics.total.toLocaleString()}
                </div>
                <div className="text-sm text-blue-800">Total Questions</div>
              </div>

              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {analytics.validated.toLocaleString()}
                </div>
                <div className="text-sm text-green-800">Validated</div>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {analytics.avgSuccessRate.toFixed(1)}%
                </div>
                <div className="text-sm text-purple-800">Avg Success Rate</div>
              </div>

              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {analytics.totalUsage.toLocaleString()}
                </div>
                <div className="text-sm text-orange-800">Total Usage</div>
              </div>
            </div>
          </div>

          {/* Trending Skills */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Trending Skills
            </h3>

            <div className="space-y-3">
              {getTrendingSkills()
                .slice(0, 8)
                .map((item, index) => (
                  <div
                    key={item.skill}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index < 3
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {item.skill}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{item.count}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Recent Activity
            </h3>

            <div className="space-y-3">
              {getRecentActivity().map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      activity.type === "created"
                        ? "bg-green-100"
                        : activity.type === "validated"
                        ? "bg-blue-100"
                        : activity.type === "updated"
                        ? "bg-yellow-100"
                        : activity.type === "used"
                        ? "bg-purple-100"
                        : "bg-red-100"
                    }`}
                  >
                    {activity.type === "created" && (
                      <Plus className="w-3 h-3 text-green-600" />
                    )}
                    {activity.type === "validated" && (
                      <Check className="w-3 h-3 text-blue-600" />
                    )}
                    {activity.type === "updated" && (
                      <Edit className="w-3 h-3 text-yellow-600" />
                    )}
                    {activity.type === "used" && (
                      <Eye className="w-3 h-3 text-purple-600" />
                    )}
                    {activity.type === "flagged" && (
                      <Flag className="w-3 h-3 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {activity.item}
                    </div>
                    <div className="text-xs text-gray-500">
                      {activity.user} • {activity.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Questions */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Recommended Questions
            </h3>

            <div className="space-y-3">
              {getRecommendedQuestions().map((question) => (
                <div
                  key={question.id}
                  className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                    {question.title}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{question.skill}</span>
                    <span className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      {question.reviewScore}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Questions Display */}
        <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Questions Database
              </h2>
              {selectedQuestions.length > 0 && (
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={
                      selectedQuestions.length === paginatedQuestions.length
                    }
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    Select all on page
                  </span>
                </label>
              )}
            </div>

            <div className="flex items-center space-x-2">
              {isLoading && (
                <div className="flex items-center space-x-2 text-blue-600">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Processing...</span>
                </div>
              )}
            </div>
          </div>

          {/* Questions Display */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedQuestions.map((question) => (
                <EnhancedQuestionCard
                  key={question.id}
                  question={question}
                  isSelected={selectedQuestions.includes(question.id)}
                  onSelect={(isSelected) =>
                    handleQuestionSelect(question.id, isSelected)
                  }
                  onAction={(action) =>
                    handleQuestionAction(question.id, action)
                  }
                  stats={questionStats[question.id]}
                  industryData={industryData}
                />
              ))}
            </div>
          )}

          {viewMode === "list" && (
            <div className="space-y-4">
              {paginatedQuestions.map((question) => (
                <EnhancedQuestionListItem
                  key={question.id}
                  question={question}
                  isSelected={selectedQuestions.includes(question.id)}
                  onSelect={(isSelected) =>
                    handleQuestionSelect(question.id, isSelected)
                  }
                  onAction={(action) =>
                    handleQuestionAction(question.id, action)
                  }
                  stats={questionStats[question.id]}
                  industryData={industryData}
                />
              ))}
            </div>
          )}

          {viewMode === "table" && (
            <EnhancedQuestionTable
              questions={paginatedQuestions}
              selectedQuestions={selectedQuestions}
              onSelect={handleQuestionSelect}
              onAction={handleQuestionAction}
              onSort={setSortBy}
              currentSort={sortBy}
              industryData={industryData}
            />
          )}

          {viewMode === "cards" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedQuestions.map((question) => (
                <DetailedQuestionCard
                  key={question.id}
                  question={question}
                  isSelected={selectedQuestions.includes(question.id)}
                  onSelect={(isSelected) =>
                    handleQuestionSelect(question.id, isSelected)
                  }
                  onAction={(action) =>
                    handleQuestionAction(question.id, action)
                  }
                  stats={questionStats[question.id]}
                  industryData={industryData}
                />
              ))}
            </div>
          )}

          {paginatedQuestions.length === 0 && (
            <div className="text-center py-12">
              <Database className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No questions found
              </h3>
              <p className="text-gray-600 mb-6">
                {Object.values(selectedFilters).some((v) =>
                  Array.isArray(v)
                    ? v.length > 0
                    : v !== "" && v !== true && v !== false
                ) || debouncedSearchTerm
                  ? "Try adjusting your search criteria or filters."
                  : "Get started by creating your first question."}
              </p>
              <div className="flex justify-center space-x-3">
                {(Object.values(selectedFilters).some((v) =>
                  Array.isArray(v)
                    ? v.length > 0
                    : v !== "" && v !== true && v !== false
                ) ||
                  debouncedSearchTerm) && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedFilters({
                        industry: "",
                        company: "",
                        position: "",
                        difficulty: "",
                        type: "",
                        skill: "",
                        validated: true,
                        recentlyUsed: false,
                        createdBy: "",
                        dateRange: "",
                        tags: [],
                        customTags: [],
                        averageTime: "",
                        successRate: "",
                        usageCount: "",
                      });
                    }}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Clear Filters
                  </button>
                )}
                <button
                  onClick={() => setShowQuestionEditor(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-5 h-5 mr-2 inline" />
                  Create Question
                </button>
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(currentPage * itemsPerPage, sortedQuestions.length)}{" "}
                  of {sortedQuestions.length} results
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={previousPage}
                  disabled={!hasPreviousPage}
                  className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 7) {
                      pageNumber = i + 1;
                    } else if (currentPage <= 4) {
                      pageNumber = i + 1;
                    } else if (currentPage >= totalPages - 3) {
                      pageNumber = totalPages - 6 + i;
                    } else {
                      pageNumber = currentPage - 3 + i;
                    }

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => goToPage(pageNumber)}
                        className={`px-3 py-2 rounded-lg transition-colors ${
                          pageNumber === currentPage
                            ? "bg-blue-600 text-white"
                            : "border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={nextPage}
                  disabled={!hasNextPage}
                  className="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modals and Panels */}
      {showQuestionEditor && (
        <QuestionEditor
          question={editingQuestion}
          onClose={() => {
            setShowQuestionEditor(false);
            setEditingQuestion(null);
          }}
          onSave={(questionData) => {
            console.log("Saving question:", questionData);
            setShowQuestionEditor(false);
            setEditingQuestion(null);
            setNotifications((prev) => [
              {
                id: Date.now(),
                type: "success",
                message: editingQuestion
                  ? "Question updated successfully"
                  : "Question created successfully",
                timestamp: new Date(),
              },
              ...prev,
            ]);
          }}
          industryData={industryData}
        />
      )}

      {showImportModal && (
        <ImportModal
          onClose={() => setShowImportModal(false)}
          onImport={importQuestions}
          isLoading={isLoading}
        />
      )}

      {showExportModal && (
        <ExportModal
          questions={
            selectedQuestions.length > 0
              ? allQuestions.filter((q) => selectedQuestions.includes(q.id))
              : sortedQuestions
          }
          onClose={() => setShowExportModal(false)}
          onExport={exportQuestions}
          isLoading={isLoading}
        />
      )}

      {showAnalyticsPanel && (
        <AnalyticsPanel
          analytics={analytics}
          questions={sortedQuestions}
          industryData={industryData}
          onClose={() => setShowAnalyticsPanel(false)}
        />
      )}

      {showTemplateLibrary && (
        <TemplateLibrary
          onClose={() => setShowTemplateLibrary(false)}
          onSelectTemplate={(template) => {
            setEditingQuestion(template);
            setShowQuestionEditor(true);
            setShowTemplateLibrary(false);
          }}
          industryData={industryData}
        />
      )}

      {showCollaborationPanel && (
        <CollaborationPanel
          onClose={() => setShowCollaborationPanel(false)}
          collaborators={collaborators}
          onInvite={(email, role) => {
            console.log("Inviting collaborator:", email, role);
          }}
        />
      )}
    </div>
  );
}

// Enhanced Question Card Component
const EnhancedQuestionCard = ({
  question,
  isSelected,
  onSelect,
  onAction,
  stats,
  industryData,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const getTypeIcon = (type) => {
    switch (type) {
      case "coding":
        return "💻";
      case "multiple-choice":
        return "📝";
      case "case-study":
        return "📊";
      case "video":
        return "🎥";
      case "essay":
        return "✍️";
      case "presentation":
        return "📽️";
      default:
        return "❓";
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Advanced":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "Expert":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getIndustryColor = (industry) => {
    const colors = {
      technology: "bg-blue-100 text-blue-700",
      finance: "bg-green-100 text-green-700",
      consulting: "bg-purple-100 text-purple-700",
      healthcare: "bg-red-100 text-red-700",
      education: "bg-yellow-100 text-yellow-700",
    };
    return colors[industry] || "bg-gray-100 text-gray-700";
  };

  return (
    <div
      className={`relative p-6 border-2 rounded-2xl transition-all duration-200 cursor-pointer group ${
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-lg"
          : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
      }`}
      onClick={() => setShowDetails(!showDetails)}
    >
      {/* Selection Checkbox */}
      <div className="absolute top-4 right-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => {
            e.stopPropagation();
            onSelect(e.target.checked);
          }}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      </div>

      {/* Question Header */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl">{getTypeIcon(question.type)}</span>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(
              question.difficulty
            )}`}
          >
            {question.difficulty}
          </span>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${getIndustryColor(
              question.industry
            )}`}
          >
            {industryData[question.industry]?.name}
          </span>
          {question.validated && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
              ✓ Validated
            </span>
          )}
        </div>

        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {question.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3">
          {question.description}
        </p>
      </div>

      {/* Question Metadata */}
      <div className="space-y-3">
        {/* Skill and Companies */}
        <div>
          <div className="text-sm font-medium text-gray-900 mb-1">
            {question.skill}
          </div>
          <div className="flex flex-wrap gap-1">
            {question.companies.slice(0, 2).map((company) => (
              <span
                key={company}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
              >
                {company}
              </span>
            ))}
            {question.companies.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                +{question.companies.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-gray-500">Success Rate</div>
            <div
              className={`font-semibold ${
                question.successRate >= 70
                  ? "text-green-600"
                  : question.successRate >= 40
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {question.successRate}%
            </div>
          </div>
          <div>
            <div className="text-gray-500">Avg Time</div>
            <div className="font-semibold text-gray-900">
              {question.averageTime} min
            </div>
          </div>
          <div>
            <div className="text-gray-500">Usage</div>
            <div className="font-semibold text-gray-900">
              {question.usageCount}
            </div>
          </div>
          <div>
            <div className="text-gray-500">Rating</div>
            <div className="flex items-center">
              <Star className="w-3 h-3 text-yellow-500 mr-1" />
              <span className="font-semibold text-gray-900">
                {question.reviewScore}
              </span>
            </div>
          </div>
        </div>

        {/* Tags */}
        {question.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {question.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              >
                #{tag}
              </span>
            ))}
            {question.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                +{question.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Creator and Date */}
        <div className="flex justify-between text-xs text-gray-500">
          <span>By {question.createdBy}</span>
          <span>{new Date(question.lastUsed).toLocaleDateString()}</span>
        </div>

        {/* Weekly Stats */}
        {stats && (
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
            <span className="flex items-center">
              <TrendingUp
                className={`w-3 h-3 mr-1 ${
                  stats.trendDirection === "up"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              />
              {stats.weeklyUsage} this week
            </span>
            <span>{stats.recentFeedback} feedback</span>
          </div>
        )}
      </div>

      {/* Expanded Details */}
      {showDetails && (
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              Prerequisites:
            </div>
            <div className="text-xs text-gray-600">
              {question.prerequisites?.join(", ") || "None specified"}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              Sub-skills:
            </div>
            <div className="flex flex-wrap gap-1">
              {question.subSkills?.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              Estimated Effort:
            </div>
            <div className="text-xs text-gray-600">
              {question.estimatedEffort}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              Version:
            </div>
            <div className="text-xs text-gray-600">v{question.version}</div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAction("preview");
          }}
          className="flex-1 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
        >
          <Eye className="w-3 h-3 mr-1 inline" />
          Preview
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAction("edit");
          }}
          className="flex-1 px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded transition-colors"
        >
          <Edit className="w-3 h-3 mr-1 inline" />
          Edit
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAction("duplicate");
          }}
          className="flex-1 px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded transition-colors"
        >
          <Copy className="w-3 h-3 mr-1 inline" />
          Copy
        </button>
        <div className="relative group">
          <button
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors"
          >
            <MoreHorizontal className="w-3 h-3" />
          </button>
          <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
            <div className="py-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAction("share");
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
              >
                <Share2 className="w-3 h-3 mr-2" />
                Share
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAction("flag");
                }}
                className="w-full px-4 py-2 text-left text-sm text-yellow-600 hover:bg-yellow-50 flex items-center"
              >
                <Flag className="w-3 h-3 mr-2" />
                Flag for Review
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(
                    window.location.origin + "/questions/" + question.id
                  );
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
              >
                <Link className="w-3 h-3 mr-2" />
                Copy Link
              </button>
              <div className="border-t border-gray-100 my-1"></div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onAction("delete");
                }}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center"
              >
                <Trash2 className="w-3 h-3 mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Question List Item Component
const EnhancedQuestionListItem = ({
  question,
  isSelected,
  onSelect,
  onAction,
  stats,
  industryData,
}) => {
  const getStatusIndicator = () => {
    if (!question.validated) return { color: "bg-yellow-500", text: "Pending" };
    if (question.successRate < 40)
      return { color: "bg-red-500", text: "Low Success" };
    if (question.usageCount > 300)
      return { color: "bg-green-500", text: "Popular" };
    return { color: "bg-blue-500", text: "Active" };
  };

  const status = getStatusIndicator();

  return (
    <div
      className={`p-6 border-2 rounded-xl transition-all duration-200 cursor-pointer ${
        isSelected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 hover:border-blue-300"
      }`}
      onClick={() => onSelect(!isSelected)}
    >
      <div className="flex items-center space-x-6">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => {
            e.stopPropagation();
            onSelect(e.target.checked);
          }}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />

        {/* Status Indicator */}
        <div className="flex flex-col items-center">
          <div className={`w-3 h-3 ${status.color} rounded-full`}></div>
          <span className="text-xs text-gray-500 mt-1">{status.text}</span>
        </div>

        {/* Question Info */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-1">
              {question.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 text-xs font-medium rounded ${
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
                className={`px-2 py-1 text-xs font-medium rounded ${
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
          </div>

          <div>
            <div className="text-sm font-medium text-gray-900">
              {question.skill}
            </div>
            <div className="text-xs text-gray-500">
              {industryData[question.industry]?.name}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-900">
              {question.usageCount} uses
            </div>
            <div className="text-xs text-gray-500 flex items-center">
              <Star className="w-3 h-3 text-yellow-500 mr-1" />
              {question.successRate}% success
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-900">
              {question.averageTime} min
            </div>
            <div className="text-xs text-gray-500">avg time</div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAction("preview");
              }}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
              title="Preview"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAction("edit");
              }}
              className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
              title="Edit"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAction("duplicate");
              }}
              className="p-2 text-purple-600 hover:bg-purple-50 rounded transition-colors"
              title="Duplicate"
            >
              <Copy className="w-4 h-4" />
            </button>
            <div className="relative group">
              <button
                onClick={(e) => e.stopPropagation()}
                className="p-2 text-gray-600 hover:bg-gray-50 rounded transition-colors"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="py-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAction("share");
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                  >
                    <Share2 className="w-3 h-3 mr-2" />
                    Share
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAction("flag");
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-yellow-600 hover:bg-yellow-50 flex items-center"
                  >
                    <Flag className="w-3 h-3 mr-2" />
                    Flag for Review
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAction("delete");
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center"
                  >
                    <Trash2 className="w-3 h-3 mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly trend indicator */}
      {stats && (
        <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <TrendingUp
                className={`w-3 h-3 mr-1 ${
                  stats.trendDirection === "up"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              />
              {stats.weeklyUsage} uses this week
            </span>
            <span>{stats.recentFeedback} recent feedback</span>
            <span>Rating: {stats.avgRating}/5.0</span>
          </div>
          <span>
            Last used: {new Date(question.lastUsed).toLocaleDateString()}
          </span>
        </div>
      )}
    </div>
  );
};

// Enhanced Question Table Component
const EnhancedQuestionTable = ({
  questions,
  selectedQuestions,
  onSelect,
  onAction,
  onSort,
  currentSort,
  industryData,
}) => {
  const getSortIcon = (column) => {
    if (currentSort === column) {
      return <ChevronUp className="w-4 h-4" />;
    } else if (currentSort === column + "_desc") {
      return <ChevronDown className="w-4 h-4" />;
    }
    return <ArrowUp className="w-4 h-4 opacity-0 group-hover:opacity-50" />;
  };

  const handleSort = (column) => {
    if (currentSort === column) {
      onSort(column + "_desc");
    } else {
      onSort(column);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left">
              <input
                type="checkbox"
                checked={
                  selectedQuestions.length === questions.length &&
                  questions.length > 0
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    questions.forEach((q) => onSelect(q.id, true));
                  } else {
                    questions.forEach((q) => onSelect(q.id, false));
                  }
                }}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </th>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort("title")}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 group"
              >
                <span>Question</span>
                {getSortIcon("title")}
              </button>
            </th>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort("type")}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 group"
              >
                <span>Type</span>
                {getSortIcon("type")}
              </button>
            </th>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort("skill")}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 group"
              >
                <span>Skill</span>
                {getSortIcon("skill")}
              </button>
            </th>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort("difficulty")}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 group"
              >
                <span>Difficulty</span>
                {getSortIcon("difficulty")}
              </button>
            </th>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort("success")}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 group"
              >
                <span>Success Rate</span>
                {getSortIcon("success")}
              </button>
            </th>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort("popular")}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 group"
              >
                <span>Usage</span>
                {getSortIcon("popular")}
              </button>
            </th>
            <th className="px-4 py-3 text-left">
              <button
                onClick={() => handleSort("recent")}
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 group"
              >
                <span>Last Used</span>
                {getSortIcon("recent")}
              </button>
            </th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr
              key={question.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              <td className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={selectedQuestions.includes(question.id)}
                  onChange={(e) => onSelect(question.id, e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </td>
              <td className="px-4 py-3">
                <div>
                  <div className="font-medium text-gray-900 line-clamp-1">
                    {question.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {question.createdBy}
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    question.type === "coding"
                      ? "bg-purple-100 text-purple-800"
                      : question.type === "multiple-choice"
                      ? "bg-blue-100 text-blue-800"
                      : question.type === "case-study"
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {question.type.replace("-", " ")}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm font-medium text-gray-900">
                  {question.skill}
                </div>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded ${
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
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  <span
                    className={`font-medium ${
                      question.successRate >= 70
                        ? "text-green-600"
                        : question.successRate >= 40
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {question.successRate}%
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm font-medium text-gray-900">
                  {question.usageCount}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm text-gray-500">
                  {new Date(question.lastUsed).toLocaleDateString()}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onAction("preview")}
                    className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                    title="Preview"
                  >
                    <Eye className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onAction("edit")}
                    className="p-1 text-green-600 hover:bg-green-50 rounded"
                    title="Edit"
                  >
                    <Edit className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onAction("duplicate")}
                    className="p-1 text-purple-600 hover:bg-purple-50 rounded"
                    title="Duplicate"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Detailed Question Card Component
const DetailedQuestionCard = ({
  question,
  isSelected,
  onSelect,
  onAction,
  stats,
  industryData,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`p-6 border-2 rounded-2xl transition-all duration-200 ${
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-lg"
          : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => onSelect(e.target.checked)}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <div className="text-2xl">
            {question.type === "coding"
              ? "💻"
              : question.type === "multiple-choice"
              ? "📝"
              : question.type === "case-study"
              ? "📊"
              : question.type === "video"
              ? "🎥"
              : "❓"}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {question.validated && (
            <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
              ✓ Validated
            </span>
          )}
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
      </div>

      {/* Title and Description */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {question.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {question.description}
        </p>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-xs text-gray-500 mb-1">Industry & Skill</div>
          <div className="text-sm font-medium text-gray-900">
            {industryData[question.industry]?.name}
          </div>
          <div className="text-sm text-gray-600">{question.skill}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500 mb-1">Companies</div>
          <div className="flex flex-wrap gap-1">
            {question.companies.slice(0, 2).map((company) => (
              <span
                key={company}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
              >
                {company}
              </span>
            ))}
            {question.companies.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                +{question.companies.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="text-center">
          <div
            className={`text-lg font-bold ${
              question.successRate >= 70
                ? "text-green-600"
                : question.successRate >= 40
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {question.successRate}%
          </div>
          <div className="text-xs text-gray-500">Success</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">
            {question.averageTime}m
          </div>
          <div className="text-xs text-gray-500">Avg Time</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">
            {question.usageCount}
          </div>
          <div className="text-xs text-gray-500">Uses</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900 flex items-center justify-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            {question.reviewScore}
          </div>
          <div className="text-xs text-gray-500">Rating</div>
        </div>
      </div>

      {/* Tags */}
      {question.tags.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {question.tags
              .slice(0, expanded ? question.tags.length : 4)
              .map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                >
                  #{tag}
                </span>
              ))}
            {!expanded && question.tags.length > 4 && (
              <button
                onClick={() => setExpanded(true)}
                className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded hover:bg-gray-200"
              >
                +{question.tags.length - 4} more
              </button>
            )}
          </div>
        </div>
      )}

      {/* Expanded Details */}
      {expanded && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg space-y-3">
          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              Author & Version
            </div>
            <div className="text-sm text-gray-600">
              {question.createdBy} • v{question.version}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              Created & Modified
            </div>
            <div className="text-sm text-gray-600">
              {new Date(question.createdAt).toLocaleDateString()} • Modified{" "}
              {new Date(question.lastModified).toLocaleDateString()}
            </div>
          </div>

          {question.prerequisites && (
            <div>
              <div className="text-xs font-medium text-gray-700 mb-1">
                Prerequisites
              </div>
              <div className="text-sm text-gray-600">
                {question.prerequisites.join(", ")}
              </div>
            </div>
          )}

          {question.estimatedEffort && (
            <div>
              <div className="text-xs font-medium text-gray-700 mb-1">
                Estimated Effort
              </div>
              <div className="text-sm text-gray-600">
                {question.estimatedEffort}
              </div>
            </div>
          )}

          {stats && (
            <div>
              <div className="text-xs font-medium text-gray-700 mb-1">
                This Week
              </div>
              <div className="text-sm text-gray-600">
                {stats.weeklyUsage} uses • {stats.recentFeedback} feedback •
                <TrendingUp
                  className={`w-3 h-3 inline ml-1 ${
                    stats.trendDirection === "up"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              Show More
            </>
          )}
        </button>

        <div className="flex space-x-2">
          <button
            onClick={() => onAction("preview")}
            className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors"
          >
            <Eye className="w-3 h-3 mr-1 inline" />
            Preview
          </button>
          <button
            onClick={() => onAction("edit")}
            className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded transition-colors"
          >
            <Edit className="w-3 h-3 mr-1 inline" />
            Edit
          </button>
          <div className="relative group">
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors">
              <MoreHorizontal className="w-3 h-3" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <div className="py-1">
                <button
                  onClick={() => onAction("duplicate")}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                >
                  <Copy className="w-3 h-3 mr-2" />
                  Duplicate
                </button>
                <button
                  onClick={() => onAction("share")}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                >
                  <Share2 className="w-3 h-3 mr-2" />
                  Share
                </button>
                <button
                  onClick={() => onAction("flag")}
                  className="w-full px-4 py-2 text-left text-sm text-yellow-600 hover:bg-yellow-50 flex items-center"
                >
                  <Flag className="w-3 h-3 mr-2" />
                  Flag
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={() => onAction("delete")}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center"
                >
                  <Trash2 className="w-3 h-3 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Question Editor Modal Component
const QuestionEditor = ({ question, onClose, onSave, industryData }) => {
  const [formData, setFormData] = useState({
    title: question?.title || "",
    type: question?.type || "multiple-choice",
    industry: question?.industry || "",
    companies: question?.companies || [],
    difficulty: question?.difficulty || "Intermediate",
    skill: question?.skill || "",
    subSkills: question?.subSkills || [],
    tags: question?.tags || [],
    customTags: question?.customTags || [],
    description: question?.description || "",
    detailedDescription: question?.detailedDescription || "",
    prerequisites: question?.prerequisites || [],
    learningObjectives: question?.learningObjectives || [],
    estimatedEffort: question?.estimatedEffort || "",
    content: question?.content || "",
    options: question?.options || ["", "", "", ""],
    correctAnswer: question?.correctAnswer || "",
    rubric: question?.rubric || [],
    testCases: question?.testCases || [],
    starterCode: question?.starterCode || "",
    authorNotes: question?.authorNotes || "",
    version: question?.version || "1.0",
    status: question?.status || "draft",
  });

  const [activeTab, setActiveTab] = useState("basic");
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleArrayInputChange = (field, index, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayItem = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    // Validation
    if (!formData.title.trim()) {
      alert("Please enter a question title");
      return;
    }
    if (!formData.skill.trim()) {
      alert("Please select a skill");
      return;
    }
    if (!formData.description.trim()) {
      alert("Please enter a description");
      return;
    }

    const questionData = {
      ...formData,
      id: question?.id || Date.now(),
      createdAt: question?.createdAt || new Date().toISOString(),
      lastModified: new Date().toISOString(),
      createdBy: question?.createdBy || "Mohamedelammari",
      validated: question?.validated || false,
      usageCount: question?.usageCount || 0,
      successRate: question?.successRate || 0,
      averageTime: question?.averageTime || 0,
      reviewScore: question?.reviewScore || 0,
      feedbackCount: question?.feedbackCount || 0,
    };

    onSave(questionData);
  };

  const tabs = [
    { id: "basic", name: "Basic Info", icon: FileText },
    { id: "content", name: "Content", icon: Edit },
    { id: "assessment", name: "Assessment", icon: Target },
    { id: "metadata", name: "Metadata", icon: Tag },
    { id: "settings", name: "Settings", icon: Settings },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                {question ? "Edit Question" : "Create New Question"}
              </h2>
              <p className="text-blue-100 mt-1">
                {question
                  ? `Editing "${question.title}"`
                  : "Build a comprehensive assessment question"}
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
              >
                <Eye className="w-4 h-4 mr-2 inline" />
                {isPreviewMode ? "Edit" : "Preview"}
              </button>
              <button
                onClick={onClose}
                className="text-white hover:text-blue-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 px-6">
          <div className="flex space-x-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {!isPreviewMode ? (
            <>
              {/* Basic Info Tab */}
              {activeTab === "basic" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Question Title *
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                          handleInputChange("title", e.target.value)
                        }
                        placeholder="Enter a descriptive question title..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Question Type *
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) =>
                          handleInputChange("type", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="multiple-choice">Multiple Choice</option>
                        <option value="coding">Coding Challenge</option>
                        <option value="case-study">Case Study</option>
                        <option value="video">Video Response</option>
                        <option value="essay">Essay</option>
                        <option value="presentation">Presentation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Industry *
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) =>
                          handleInputChange("industry", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Industry</option>
                        {Object.entries(industryData).map(([key, industry]) => (
                          <option key={key} value={key}>
                            {industry.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Difficulty Level *
                      </label>
                      <select
                        value={formData.difficulty}
                        onChange={(e) =>
                          handleInputChange("difficulty", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Skill *
                      </label>
                      <input
                        type="text"
                        value={formData.skill}
                        onChange={(e) =>
                          handleInputChange("skill", e.target.value)
                        }
                        placeholder="e.g., JavaScript, Financial Modeling, Case Analysis"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Effort
                      </label>
                      <input
                        type="text"
                        value={formData.estimatedEffort}
                        onChange={(e) =>
                          handleInputChange("estimatedEffort", e.target.value)
                        }
                        placeholder="e.g., 30-45 minutes, 1-2 hours"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Question Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      placeholder="Provide a brief overview of what this question assesses..."
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Description
                    </label>
                    <textarea
                      value={formData.detailedDescription}
                      onChange={(e) =>
                        handleInputChange("detailedDescription", e.target.value)
                      }
                      placeholder="Provide comprehensive details about the question objectives, context, and expectations..."
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  {/* Companies Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Companies
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {formData.industry &&
                        industryData[formData.industry]?.companies.map(
                          (company) => (
                            <label
                              key={company.name}
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={formData.companies.includes(
                                  company.name
                                )}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    handleInputChange("companies", [
                                      ...formData.companies,
                                      company.name,
                                    ]);
                                  } else {
                                    handleInputChange(
                                      "companies",
                                      formData.companies.filter(
                                        (c) => c !== company.name
                                      )
                                    );
                                  }
                                }}
                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                              />
                              <span className="text-sm text-gray-700">
                                {company.name}
                              </span>
                            </label>
                          )
                        )}
                    </div>
                  </div>
                </div>
              )}

              {/* Content Tab */}
              {activeTab === "content" && (
                <div className="space-y-6">
                  {formData.type === "multiple-choice" && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Question Content
                      </label>
                      <textarea
                        value={formData.content}
                        onChange={(e) =>
                          handleInputChange("content", e.target.value)
                        }
                        placeholder="Enter the main question text..."
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                      />

                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Answer Options
                        </label>
                        {formData.options.map((option, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 mb-2"
                          >
                            <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium">
                              {String.fromCharCode(65 + index)}
                            </span>
                            <input
                              type="text"
                              value={option}
                              onChange={(e) =>
                                handleArrayInputChange(
                                  "options",
                                  index,
                                  e.target.value
                                )
                              }
                              placeholder={`Option ${String.fromCharCode(
                                65 + index
                              )}`}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <input
                              type="radio"
                              name="correctAnswer"
                              checked={formData.correctAnswer === option}
                              onChange={() =>
                                handleInputChange("correctAnswer", option)
                              }
                              className="text-blue-600 focus:ring-blue-500"
                            />
                          </div>
                        ))}
                        <button
                          onClick={() => addArrayItem("options")}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          + Add Option
                        </button>
                      </div>
                    </div>
                  )}

                  {formData.type === "coding" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Problem Statement
                        </label>
                        <textarea
                          value={formData.content}
                          onChange={(e) =>
                            handleInputChange("content", e.target.value)
                          }
                          placeholder="Describe the coding problem..."
                          rows="6"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Starter Code (Optional)
                        </label>
                        <textarea
                          value={formData.starterCode}
                          onChange={(e) =>
                            handleInputChange("starterCode", e.target.value)
                          }
                          placeholder="// Function template or initial code structure..."
                          rows="6"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none font-mono text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Test Cases
                        </label>
                        {formData.testCases.map((testCase, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-2 gap-3 mb-2"
                          >
                            <input
                              type="text"
                              value={testCase.input || ""}
                              onChange={(e) => {
                                const newTestCases = [...formData.testCases];
                                newTestCases[index] = {
                                  ...testCase,
                                  input: e.target.value,
                                };
                                handleInputChange("testCases", newTestCases);
                              }}
                              placeholder="Input"
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <input
                              type="text"
                              value={testCase.output || ""}
                              onChange={(e) => {
                                const newTestCases = [...formData.testCases];
                                newTestCases[index] = {
                                  ...testCase,
                                  output: e.target.value,
                                };
                                handleInputChange("testCases", newTestCases);
                              }}
                              placeholder="Expected Output"
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        ))}
                        <button
                          onClick={() => addArrayItem("testCases")}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          + Add Test Case
                        </button>
                      </div>
                    </div>
                  )}

                  {formData.type === "case-study" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Case Study Scenario
                        </label>
                        <textarea
                          value={formData.content}
                          onChange={(e) =>
                            handleInputChange("content", e.target.value)
                          }
                          placeholder="Describe the business scenario, context, and situation..."
                          rows="8"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Questions/Tasks
                        </label>
                        <textarea
                          placeholder="What specific questions should candidates address? What analysis should they perform?"
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {formData.type === "video" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Video Question Prompt
                        </label>
                        <textarea
                          value={formData.content}
                          onChange={(e) =>
                            handleInputChange("content", e.target.value)
                          }
                          placeholder="What should candidates address in their video response?"
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Max Duration (seconds)
                          </label>
                          <input
                            type="number"
                            placeholder="120"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preparation Time (seconds)
                          </label>
                          <input
                            type="number"
                            placeholder="30"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Assessment Tab */}
              {activeTab === "assessment" && (
                <div className="space-y-6">
                  {/* Learning Objectives */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Learning Objectives
                    </label>
                    {formData.learningObjectives.map((objective, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 mb-2"
                      >
                        <input
                          type="text"
                          value={objective}
                          onChange={(e) =>
                            handleArrayInputChange(
                              "learningObjectives",
                              index,
                              e.target.value
                            )
                          }
                          placeholder="What should candidates learn or demonstrate?"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button
                          onClick={() =>
                            removeArrayItem("learningObjectives", index)
                          }
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem("learningObjectives")}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Learning Objective
                    </button>
                  </div>

                  {/* Prerequisites */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prerequisites
                    </label>
                    {formData.prerequisites.map((prerequisite, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 mb-2"
                      >
                        <input
                          type="text"
                          value={prerequisite}
                          onChange={(e) =>
                            handleArrayInputChange(
                              "prerequisites",
                              index,
                              e.target.value
                            )
                          }
                          placeholder="Required knowledge or skills"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button
                          onClick={() =>
                            removeArrayItem("prerequisites", index)
                          }
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem("prerequisites")}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Prerequisite
                    </button>
                  </div>

                  {/* Evaluation Rubric */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Evaluation Rubric
                    </label>
                    {formData.rubric.map((criteria, index) => (
                      <div key={index} className="grid grid-cols-3 gap-3 mb-2">
                        <input
                          type="text"
                          value={criteria.criteria || ""}
                          onChange={(e) => {
                            const newRubric = [...formData.rubric];
                            newRubric[index] = {
                              ...criteria,
                              criteria: e.target.value,
                            };
                            handleInputChange("rubric", newRubric);
                          }}
                          placeholder="Evaluation criteria"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <input
                          type="number"
                          value={criteria.weight || ""}
                          onChange={(e) => {
                            const newRubric = [...formData.rubric];
                            newRubric[index] = {
                              ...criteria,
                              weight: parseInt(e.target.value),
                            };
                            handleInputChange("rubric", newRubric);
                          }}
                          placeholder="Weight %"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <input
                          type="number"
                          value={criteria.maxScore || ""}
                          onChange={(e) => {
                            const newRubric = [...formData.rubric];
                            newRubric[index] = {
                              ...criteria,
                              maxScore: parseInt(e.target.value),
                            };
                            handleInputChange("rubric", newRubric);
                          }}
                          placeholder="Max Score"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem("rubric")}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Criteria
                    </button>
                  </div>
                </div>
              )}

              {/* Metadata Tab */}
              {activeTab === "metadata" && (
                <div className="space-y-6">
                  {/* Sub-skills */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sub-skills
                    </label>
                    {formData.subSkills.map((subSkill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 mb-2"
                      >
                        <input
                          type="text"
                          value={subSkill}
                          onChange={(e) =>
                            handleArrayInputChange(
                              "subSkills",
                              index,
                              e.target.value
                            )
                          }
                          placeholder="Specific skill area"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button
                          onClick={() => removeArrayItem("subSkills", index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem("subSkills")}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Sub-skill
                    </button>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    {formData.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 mb-2"
                      >
                        <input
                          type="text"
                          value={tag}
                          onChange={(e) =>
                            handleArrayInputChange(
                              "tags",
                              index,
                              e.target.value
                            )
                          }
                          placeholder="Tag keyword"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button
                          onClick={() => removeArrayItem("tags", index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem("tags")}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Tag
                    </button>
                  </div>

                  {/* Custom Tags */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Custom Tags
                    </label>
                    {formData.customTags.map((tag, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 mb-2"
                      >
                        <input
                          type="text"
                          value={tag}
                          onChange={(e) =>
                            handleArrayInputChange(
                              "customTags",
                              index,
                              e.target.value
                            )
                          }
                          placeholder="Custom classification"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <button
                          onClick={() => removeArrayItem("customTags", index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addArrayItem("customTags")}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Custom Tag
                    </button>
                  </div>

                  {/* Author Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Author Notes
                    </label>
                    <textarea
                      value={formData.authorNotes}
                      onChange={(e) =>
                        handleInputChange("authorNotes", e.target.value)
                      }
                      placeholder="Internal notes for other content creators or reviewers..."
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Version
                      </label>
                      <input
                        type="text"
                        value={formData.version}
                        onChange={(e) =>
                          handleInputChange("version", e.target.value)
                        }
                        placeholder="e.g., 1.0, 2.1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) =>
                          handleInputChange("status", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      >
                        <option value="draft">Draft</option>
                        <option value="review">Under Review</option>
                        <option value="active">Active</option>
                        <option value="archived">Archived</option>
                        <option value="deprecated">Deprecated</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">
                      Validation Settings
                    </h4>

                    <div className="space-y-4">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Require validation before use
                        </span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Allow collaborative editing
                        </span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Track usage analytics
                        </span>
                      </label>

                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">
                          Enable candidate feedback collection
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">
                      Access Control
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Visibility
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                          <option value="public">
                            Public - Available to all users
                          </option>
                          <option value="organization">
                            Organization - Limited to your organization
                          </option>
                          <option value="team">
                            Team - Limited to your team
                          </option>
                          <option value="private">
                            Private - Only you can access
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Usage Rights
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                          <option value="unrestricted">
                            Unrestricted - Can be used freely
                          </option>
                          <option value="attribution">
                            Attribution Required - Must credit author
                          </option>
                          <option value="permission">
                            Permission Required - Must request to use
                          </option>
                          <option value="restricted">
                            Restricted - Internal use only
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <QuestionPreview question={formData} />
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>
              Last saved:{" "}
              {question
                ? new Date(question.lastModified).toLocaleString()
                : "Not saved"}
            </span>
            <span>•</span>
            <span>Created by: {question?.createdBy || "Mohamedelammari"}</span>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Save as draft
                handleSave();
              }}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Save Draft
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {question ? "Update Question" : "Create Question"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Question Preview Component
const QuestionPreview = ({ question }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">
              {question.type === "coding"
                ? "💻"
                : question.type === "multiple-choice"
                ? "📝"
                : question.type === "case-study"
                ? "📊"
                : question.type === "video"
                ? "🎥"
                : "❓"}
            </span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {question.title}
              </h1>
              <div className="flex items-center space-x-2 mt-1">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded ${
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
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-600">{question.skill}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-600">
                  {question.estimatedEffort}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">
            {question.description}
          </p>
          {question.detailedDescription && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-900 text-sm">
                {question.detailedDescription}
              </p>
            </div>
          )}
        </div>

        {question.prerequisites && question.prerequisites.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Prerequisites:
            </h3>
            <div className="flex flex-wrap gap-2">
              {question.prerequisites.map((prerequisite, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                >
                  {prerequisite}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-3">
            Question Content
          </h3>

          {question.type === "multiple-choice" && (
            <div className="space-y-3">
              <p className="text-gray-800">{question.content}</p>
              <div className="space-y-2">
                {question.options?.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-gray-800">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {question.type === "coding" && (
            <div className="space-y-4">
              <p className="text-gray-800">{question.content}</p>
              {question.starterCode && (
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-2 text-gray-400 text-sm">
                      Code Editor
                    </span>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{question.starterCode}</code>
                  </pre>
                </div>
              )}
              {question.testCases && question.testCases.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Test Cases:
                  </h4>
                  <div className="space-y-2">
                    {question.testCases.map((testCase, index) => (
                      <div key={index} className="text-sm font-mono">
                        <span className="text-gray-600">Input: </span>
                        <span className="text-gray-900">{testCase.input}</span>
                        <span className="text-gray-600 ml-4">Expected: </span>
                        <span className="text-gray-900">{testCase.output}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {question.type === "case-study" && (
            <div className="prose max-w-none">
              <p className="text-gray-800 whitespace-pre-wrap">
                {question.content}
              </p>
            </div>
          )}

          {question.type === "video" && (
            <div className="space-y-4">
              <p className="text-gray-800">{question.content}</p>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h4 className="font-medium text-gray-900 mb-2">
                  Video Response Required
                </h4>
                <p className="text-gray-600 text-sm">
                  Candidates will record their response using their camera
                </p>
              </div>
            </div>
          )}
        </div>

        {question.learningObjectives &&
          question.learningObjectives.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Learning Objectives:
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {question.learningObjectives.map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
          )}

        {question.rubric && question.rubric.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Evaluation Criteria:
            </h3>
            <div className="space-y-2">
              {question.rubric.map((criteria, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded"
                >
                  <span className="text-sm text-gray-800">
                    {criteria.criteria}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{criteria.weight}% weight</span>
                    <span>•</span>
                    <span>Max: {criteria.maxScore} pts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(question.tags?.length > 0 || question.customTags?.length > 0) && (
          <div className="flex flex-wrap gap-1">
            {question.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
              >
                #{tag}
              </span>
            ))}
            {question.customTags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Import Modal Component
const ImportModal = ({ onClose, onImport, isLoading }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [importType, setImportType] = useState("json");
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleImport = () => {
    if (selectedFile) {
      onImport(selectedFile);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Import Questions
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Import Format
            </label>
            <select
              value={importType}
              onChange={(e) => setImportType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="json">JSON Format</option>
              <option value="csv">CSV Format</option>
              <option value="excel">Excel Format</option>
            </select>
          </div>

          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept={
                importType === "json"
                  ? ".json"
                  : importType === "csv"
                  ? ".csv"
                  : ".xlsx,.xls"
              }
              onChange={handleFileSelect}
              className="hidden"
            />

            {selectedFile ? (
              <div className="space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <FileCheck className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {selectedFile.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Drop your file here, or{" "}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      browse
                    </button>
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports {importType.toUpperCase()} files up to 10MB
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">
              Import Guidelines:
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Ensure your file follows the required format structure</li>
              <li>
                • Questions must include: title, type, skill, and description
              </li>
              <li>• Invalid entries will be skipped during import</li>
              <li>• Large files may take a few moments to process</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center rounded-b-3xl">
          <div className="text-sm text-gray-600">
            {selectedFile && `Ready to import: ${selectedFile.name}`}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleImport}
              disabled={!selectedFile || isLoading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 inline animate-spin" />
                  Importing...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2 inline" />
                  Import Questions
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export Modal Component
const ExportModal = ({ questions, onClose, onExport, isLoading }) => {
  const [exportFormat, setExportFormat] = useState("json");
  const [exportOptions, setExportOptions] = useState({
    includeMetadata: true,
    includeAnalytics: false,
    includeAnswers: true,
    compressFile: false,
  });

  const handleExport = () => {
    onExport(exportFormat, questions);
  };

  const formatOptions = [
    {
      value: "json",
      label: "JSON",
      description: "Machine-readable format, preserves all data",
    },
    {
      value: "csv",
      label: "CSV",
      description: "Spreadsheet format, basic question data",
    },
    {
      value: "excel",
      label: "Excel",
      description: "Excel workbook with multiple sheets",
    },
    { value: "pdf", label: "PDF", description: "Print-ready document format" },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Export Questions
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            Exporting {questions.length} questions
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Export Format
            </label>
            <div className="space-y-3">
              {formatOptions.map((format) => (
                <label
                  key={format.value}
                  className="flex items-start space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={format.value}
                    checked={exportFormat === format.value}
                    onChange={(e) => setExportFormat(e.target.value)}
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      {format.label}
                    </div>
                    <div className="text-sm text-gray-500">
                      {format.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Export Options
            </label>
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={exportOptions.includeMetadata}
                  onChange={(e) =>
                    setExportOptions((prev) => ({
                      ...prev,
                      includeMetadata: e.target.checked,
                    }))
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Include Metadata
                  </div>
                  <div className="text-xs text-gray-500">
                    Tags, creation dates, authors, etc.
                  </div>
                </div>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={exportOptions.includeAnalytics}
                  onChange={(e) =>
                    setExportOptions((prev) => ({
                      ...prev,
                      includeAnalytics: e.target.checked,
                    }))
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Include Analytics
                  </div>
                  <div className="text-xs text-gray-500">
                    Usage statistics, success rates, performance data
                  </div>
                </div>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={exportOptions.includeAnswers}
                  onChange={(e) =>
                    setExportOptions((prev) => ({
                      ...prev,
                      includeAnswers: e.target.checked,
                    }))
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Include Answers
                  </div>
                  <div className="text-xs text-gray-500">
                    Correct answers and solution explanations
                  </div>
                </div>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={exportOptions.compressFile}
                  onChange={(e) =>
                    setExportOptions((prev) => ({
                      ...prev,
                      compressFile: e.target.checked,
                    }))
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Compress File
                  </div>
                  <div className="text-xs text-gray-500">
                    Create ZIP archive for large exports
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-medium text-green-900 mb-2">Export Summary:</h3>
            <div className="text-sm text-green-800 space-y-1">
              <div>• {questions.length} questions selected</div>
              <div>
                • Format:{" "}
                {formatOptions.find((f) => f.value === exportFormat)?.label}
              </div>
              <div>
                • Estimated file size: {(questions.length * 0.5).toFixed(1)} KB
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center rounded-b-3xl">
          <div className="text-sm text-gray-600">
            Export will begin immediately after confirmation
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleExport}
              disabled={isLoading}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 inline animate-spin" />
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2 inline" />
                  Export Questions
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Analytics Panel Component
const AnalyticsPanel = ({ analytics, questions, industryData, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState("30d");

  const tabs = [
    { id: "overview", name: "Overview", icon: BarChart3 },
    { id: "performance", name: "Performance", icon: TrendingUp },
    { id: "usage", name: "Usage", icon: Activity },
    { id: "quality", name: "Quality", icon: Award },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Analytics Dashboard
              </h2>
              <p className="text-gray-600 mt-1">
                Comprehensive insights into your question bank performance
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200">
          <div className="flex space-x-6 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Total Questions</p>
                      <p className="text-3xl font-bold">
                        {analytics.total.toLocaleString()}
                      </p>
                    </div>
                    <Database className="w-8 h-8 text-blue-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Validated</p>
                      <p className="text-3xl font-bold">
                        {analytics.validationRate.toFixed(1)}%
                      </p>
                    </div>
                    <Check className="w-8 h-8 text-green-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">
                        Avg Success Rate
                      </p>
                      <p className="text-3xl font-bold">
                        {analytics.avgSuccessRate.toFixed(1)}%
                      </p>
                    </div>
                    <Star className="w-8 h-8 text-purple-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Total Usage</p>
                      <p className="text-3xl font-bold">
                        {analytics.totalUsage.toLocaleString()}
                      </p>
                    </div>
                    <Activity className="w-8 h-8 text-orange-200" />
                  </div>
                </div>
              </div>

              {/* Distribution Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Questions by Industry
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(analytics.distributions.byIndustry).map(
                      ([industry, count]) => {
                        const percentage = (count / analytics.total) * 100;
                        return (
                          <div
                            key={industry}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">
                                {industryData[industry]?.icon}
                              </span>
                              <span className="text-sm font-medium text-gray-900">
                                {industryData[industry]?.name}
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-blue-600 h-2 rounded-full"
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600 w-12 text-right">
                                {count}
                              </span>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Questions by Difficulty
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(analytics.distributions.byDifficulty).map(
                      ([difficulty, count]) => {
                        const percentage = (count / analytics.total) * 100;
                        const colors = {
                          Beginner: "bg-green-500",
                          Intermediate: "bg-yellow-500",
                          Advanced: "bg-orange-500",
                          Expert: "bg-red-500",
                        };
                        return (
                          <div
                            key={difficulty}
                            className="flex items-center justify-between"
                          >
                            <span className="text-sm font-medium text-gray-900">
                              {difficulty}
                            </span>
                            <div className="flex items-center space-x-3">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div
                                  className={`${colors[difficulty]} h-2 rounded-full`}
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600 w-12 text-right">
                                {count}
                              </span>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>

              {/* Top Performing Questions */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Top Performing Questions
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-sm font-medium text-gray-700">
                          Question
                        </th>
                        <th className="text-left py-2 text-sm font-medium text-gray-700">
                          Success Rate
                        </th>
                        <th className="text-left py-2 text-sm font-medium text-gray-700">
                          Usage
                        </th>
                        <th className="text-left py-2 text-sm font-medium text-gray-700">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {questions
                        .sort((a, b) => b.successRate - a.successRate)
                        .slice(0, 5)
                        .map((question, index) => (
                          <tr
                            key={question.id}
                            className="border-b border-gray-100"
                          >
                            <td className="py-3">
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                    index === 0
                                      ? "bg-yellow-100 text-yellow-800"
                                      : index === 1
                                      ? "bg-gray-100 text-gray-600"
                                      : index === 2
                                      ? "bg-orange-100 text-orange-600"
                                      : "bg-blue-100 text-blue-600"
                                  }`}
                                >
                                  {index + 1}
                                </span>
                                <div>
                                  <div className="text-sm font-medium text-gray-900 line-clamp-1">
                                    {question.title}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {question.skill}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3">
                              <span className="text-sm font-medium text-green-600">
                                {question.successRate}%
                              </span>
                            </td>
                            <td className="py-3">
                              <span className="text-sm text-gray-900">
                                {question.usageCount}
                              </span>
                            </td>
                            <td className="py-3">
                              <div className="flex items-center">
                                <Star className="w-3 h-3 text-yellow-500 mr-1" />
                                <span className="text-sm text-gray-900">
                                  {question.reviewScore}
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "performance" && (
            <div className="space-y-6">
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Performance Analytics
                </h3>
                <p className="text-gray-600">
                  Detailed performance metrics and trends will be displayed here
                </p>
              </div>
            </div>
          )}

          {activeTab === "usage" && (
            <div className="space-y-6">
              <div className="text-center py-12">
                <Activity className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Usage Analytics
                </h3>
                <p className="text-gray-600">
                  Usage patterns and engagement metrics will be displayed here
                </p>
              </div>
            </div>
          )}

          {activeTab === "quality" && (
            <div className="space-y-6">
              <div className="text-center py-12">
                <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Quality Metrics
                </h3>
                <p className="text-gray-600">
                  Quality assessment and validation metrics will be displayed
                  here
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Data updated: {new Date().toLocaleString()}
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Template Library Component
const TemplateLibrary = ({ onClose, onSelectTemplate, industryData }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const questionTemplates = [
    {
      id: 1,
      name: "Technical Coding Challenge",
      category: "technology",
      type: "coding",
      difficulty: "Advanced",
      description:
        "Comprehensive coding problem with multiple test cases and performance requirements",
      previewContent:
        "Implement an efficient algorithm to solve [problem description]...",
      tags: ["algorithms", "data-structures", "performance"],
      usageCount: 245,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Financial Case Study",
      category: "finance",
      type: "case-study",
      difficulty: "Expert",
      description:
        "Complex financial scenario requiring quantitative analysis and strategic thinking",
      previewContent:
        "You are a portfolio manager at a hedge fund. Analyze the following market scenario...",
      tags: ["portfolio-management", "risk-analysis", "market-strategy"],
      usageCount: 189,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Strategy Consulting Case",
      category: "consulting",
      type: "case-study",
      difficulty: "Expert",
      description:
        "Market entry strategy case with multiple business considerations",
      previewContent:
        "Your client is considering entering a new market. What factors would you analyze?",
      tags: ["market-entry", "strategy", "business-analysis"],
      usageCount: 156,
      rating: 4.9,
    },
    // Add more templates...
  ];

  const categories = [
    { id: "all", name: "All Templates" },
    { id: "technology", name: "Technology" },
    { id: "finance", name: "Finance" },
    { id: "consulting", name: "Consulting" },
    { id: "healthcare", name: "Healthcare" },
  ];

  const filteredTemplates = questionTemplates.filter((template) => {
    if (selectedCategory !== "all" && template.category !== selectedCategory)
      return false;
    if (
      searchTerm &&
      !template.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !template.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Question Templates
              </h2>
              <p className="text-gray-600 mt-1">
                Choose from pre-built templates to accelerate question creation
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-64 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Categories
                </h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Templates Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
                    onClick={() => onSelectTemplate(template)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">
                          {template.category === "technology"
                            ? "💻"
                            : template.category === "finance"
                            ? "💰"
                            : template.category === "consulting"
                            ? "📊"
                            : template.category === "healthcare"
                            ? "🏥"
                            : "📝"}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded ${
                            template.difficulty === "Beginner"
                              ? "bg-green-100 text-green-700"
                              : template.difficulty === "Intermediate"
                              ? "bg-yellow-100 text-yellow-700"
                              : template.difficulty === "Advanced"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {template.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs text-gray-600">
                          {template.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {template.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {template.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{template.usageCount} uses</span>
                        <span
                          className={`px-2 py-1 rounded ${
                            template.type === "coding"
                              ? "bg-purple-100 text-purple-800"
                              : template.type === "case-study"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {template.type.replace("-", " ")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTemplates.length === 0 && (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No templates found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search criteria or browse different
                    categories.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-600">
            {filteredTemplates.length} templates available
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Collaboration Panel Component
const CollaborationPanel = ({ onClose, collaborators, onInvite }) => {
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("editor");
  const [isInviting, setIsInviting] = useState(false);

  const roles = [
    {
      value: "viewer",
      label: "Viewer",
      description: "Can view questions and analytics",
    },
    {
      value: "editor",
      label: "Editor",
      description: "Can create and edit questions",
    },
    {
      value: "admin",
      label: "Admin",
      description: "Full access including user management",
    },
  ];

  const handleInvite = async () => {
    if (!inviteEmail.trim()) return;

    setIsInviting(true);
    try {
      await onInvite(inviteEmail, inviteRole);
      setInviteEmail("");
      setInviteRole("editor");
    } finally {
      setIsInviting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Team Collaboration
              </h2>
              <p className="text-gray-600 mt-1">
                Manage team access and collaborate on question development
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Invite New Collaborator */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Invite Team Member
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <input
                  type="email"
                  placeholder="Enter email address..."
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <select
                value={inviteRole}
                onChange={(e) => setInviteRole(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-gray-600">
                {roles.find((r) => r.value === inviteRole)?.description}
              </div>
              <button
                onClick={handleInvite}
                disabled={!inviteEmail.trim() || isInviting}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isInviting ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 inline animate-spin" />
                    Inviting...
                  </>
                ) : (
                  <>
                    <Users className="w-4 h-4 mr-2 inline" />
                    Send Invite
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Current Collaborators */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Current Team Members
            </h3>

            <div className="space-y-3">
              {/* Current user */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">M</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Mohamedelammari (You)
                    </div>
                    <div className="text-sm text-gray-500">
                      mohamedelammari@example.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    Owner
                  </span>
                  <span className="text-sm text-gray-500">Active</span>
                </div>
              </div>

              {/* Mock collaborators */}
              {[
                {
                  name: "Sarah Chen",
                  email: "sarah.chen@company.com",
                  role: "Admin",
                  status: "Active",
                  avatar: "S",
                },
                {
                  name: "Michael Rodriguez",
                  email: "michael.r@company.com",
                  role: "Editor",
                  status: "Active",
                  avatar: "M",
                },
                {
                  name: "Emma Thompson",
                  email: "emma.t@company.com",
                  role: "Viewer",
                  status: "Pending",
                  avatar: "E",
                },
              ].map((collaborator, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">
                        {collaborator.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {collaborator.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {collaborator.email}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <select
                      defaultValue={collaborator.role.toLowerCase()}
                      className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                    >
                      {roles.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        collaborator.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {collaborator.status}
                    </span>
                    <div className="relative group">
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                      <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <div className="py-1">
                          <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                            View Activity
                          </button>
                          <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                            Change Role
                          </button>
                          <div className="border-t border-gray-100 my-1"></div>
                          <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50">
                            Remove Access
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Activity */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Team Activity
            </h3>

            <div className="space-y-3">
              {[
                {
                  user: "Sarah Chen",
                  action: "created",
                  item: "Advanced React Patterns",
                  time: "2 hours ago",
                  type: "create",
                },
                {
                  user: "Michael Rodriguez",
                  action: "validated",
                  item: "Python Data Structures",
                  time: "4 hours ago",
                  type: "validate",
                },
                {
                  user: "Emma Thompson",
                  action: "reviewed",
                  item: "SQL Query Optimization",
                  time: "6 hours ago",
                  type: "review",
                },
                {
                  user: "Sarah Chen",
                  action: "updated",
                  item: "System Design Fundamentals",
                  time: "8 hours ago",
                  type: "update",
                },
                {
                  user: "Michael Rodriguez",
                  action: "imported",
                  item: "15 new questions",
                  time: "1 day ago",
                  type: "import",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === "create"
                        ? "bg-green-100"
                        : activity.type === "validate"
                        ? "bg-blue-100"
                        : activity.type === "review"
                        ? "bg-yellow-100"
                        : activity.type === "update"
                        ? "bg-purple-100"
                        : "bg-orange-100"
                    }`}
                  >
                    {activity.type === "create" && (
                      <Plus className="w-4 h-4 text-green-600" />
                    )}
                    {activity.type === "validate" && (
                      <Check className="w-4 h-4 text-blue-600" />
                    )}
                    {activity.type === "review" && (
                      <Eye className="w-4 h-4 text-yellow-600" />
                    )}
                    {activity.type === "update" && (
                      <Edit className="w-4 h-4 text-purple-600" />
                    )}
                    {activity.type === "import" && (
                      <Upload className="w-4 h-4 text-orange-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">
                      <span className="font-medium">{activity.user}</span>
                      <span className="mx-1">{activity.action}</span>
                      <span className="font-medium">{activity.item}</span>
                    </div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Settings */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Team Settings
            </h3>

            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Allow team members to invite others
                  </div>
                  <div className="text-sm text-gray-500">
                    Admins and editors can invite new team members
                  </div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Require approval for new questions
                  </div>
                  <div className="text-sm text-gray-500">
                    All new questions must be approved before use
                  </div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Track detailed activity logs
                  </div>
                  <div className="text-sm text-gray-500">
                    Log all user actions for audit purposes
                  </div>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    Email notifications for team activity
                  </div>
                  <div className="text-sm text-gray-500">
                    Send notifications for important team events
                  </div>
                </div>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-600">
            {collaborators?.length || 4} team members • Last activity: 2 hours
            ago
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

// Company-Specific Question Builder Enhanced Component
const CompanySpecificBuilder = ({ industry, company, industryData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCompanyData, setSelectedCompanyData] = useState(null);
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [aiSuggestions, setAiSuggestions] = useState([]);
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    if (company && industryData[industry]) {
      const companyData = industryData[industry].companies.find(
        (c) => c.name === company
      );
      setSelectedCompanyData(companyData);

      // Simulate AI suggestions loading
      if (isExpanded) {
        setLoadingAI(true);
        setTimeout(() => {
          generateAISuggestions(company, industry);
          setLoadingAI(false);
        }, 1500);
      }
    }
  }, [company, industry, isExpanded, industryData]);

  const generateAISuggestions = (companyName, industryType) => {
    const suggestions = [
      {
        id: 1,
        type: "skill-gap",
        title: `${companyName} Technical Stack Assessment`,
        description: `Evaluate candidates on ${companyName}'s specific technology requirements`,
        confidence: 0.92,
        reasoning: `Based on ${companyName}'s recent job postings and technical architecture`,
      },
      {
        id: 2,
        type: "behavioral",
        title: `${companyName} Cultural Fit Evaluation`,
        description: `Assess alignment with ${companyName}'s core values and work culture`,
        confidence: 0.88,
        reasoning: `Derived from ${companyName}'s public culture documentation and employee feedback`,
      },
      {
        id: 3,
        type: "scenario",
        title: `${companyName} Real-world Problem Simulation`,
        description: `Simulate actual challenges faced at ${companyName} in the ${industryType} domain`,
        confidence: 0.95,
        reasoning: `Based on ${companyName}'s recent project announcements and industry challenges`,
      },
    ];
    setAiSuggestions(suggestions);
  };

  const getCompanyInsights = () => {
    if (!selectedCompanyData) return null;

    return {
      hiringTrends: [
        {
          skill: selectedCompanyData.techStack[0],
          growth: "+15%",
          demand: "High",
        },
        {
          skill: selectedCompanyData.techStack[1],
          growth: "+8%",
          demand: "Medium",
        },
        {
          skill: selectedCompanyData.techStack[2],
          growth: "+22%",
          demand: "High",
        },
      ],
      assessmentMetrics: {
        averageDuration:
          company === "Google"
            ? "120 min"
            : company === "Goldman Sachs"
            ? "180 min"
            : "90 min",
        passRate: selectedCompanyData.successRate + "%",
        difficultyDistribution: {
          Advanced: 60,
          Expert: 30,
          Intermediate: 10,
        },
      },
      recentUpdates: [
        `Updated ${selectedCompanyData.techStack[0]} assessment criteria`,
        `Added new ${selectedCompanyData.industryFocus[0]} scenarios`,
        `Increased focus on ${selectedCompanyData.industryFocus[1]} skills`,
      ],
    };
  };

  const insights = getCompanyInsights();

  if (!industry) return null;

  const industryInfo = industryData[industry];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 border-2 border-purple-200 rounded-3xl p-8 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-3xl">{industryInfo.icon}</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {company ? `${company}` : industryInfo.name} AI Question Builder
            </h3>
            <p className="text-gray-600 text-lg">
              Create industry-specific assessment questions with AI assistance
              and real-time insights
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-5 h-5 mr-2 inline" />
              Collapse Builder
            </>
          ) : (
            <>
              <ChevronDown className="w-5 h-5 mr-2 inline" />
              Expand Builder
            </>
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-8 animate-fadeIn">
          {/* Company Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {selectedCompanyData ? (
              <>
                <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">
                    {selectedCompanyData.assessmentVolume.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Total Assessments
                  </div>
                  <div className="text-xs text-green-600 mt-2">
                    +12% this month
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600">
                    {selectedCompanyData.successRate}%
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Success Rate</div>
                  <div className="text-xs text-red-600 mt-2">
                    -2% from last quarter
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-green-200 shadow-lg">
                  <div className="text-3xl font-bold text-green-600">
                    {selectedCompanyData.techStack.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Tech Stack</div>
                  <div className="text-xs text-blue-600 mt-2">
                    Core technologies
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600">
                    {selectedCompanyData.locations.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Global Offices
                  </div>
                  <div className="text-xs text-purple-600 mt-2">
                    Hiring locations
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-6 rounded-2xl border border-purple-200 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600">
                    {industryInfo.questionCount.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Industry Questions
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600">
                    {industryInfo.companies.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Companies</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-green-200 shadow-lg">
                  <div className="text-3xl font-bold text-green-600">
                    {industryInfo.commonSkills.length}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">Core Skills</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600">
                    {Math.round(industryInfo.successRate)}%
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Avg Success Rate
                  </div>
                </div>
              </>
            )}
          </div>

          {/* AI Suggestions Panel */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    AI-Powered Question Suggestions
                  </h4>
                  <p className="text-gray-600">
                    Personalized recommendations based on{" "}
                    {company || industryInfo.name} requirements
                  </p>
                </div>
              </div>
              {loadingAI && (
                <div className="flex items-center space-x-2 text-purple-600">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span className="text-sm">Generating suggestions...</span>
                </div>
              )}
            </div>

            {loadingAI ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-32 rounded-xl mb-4"></div>
                    <div className="bg-gray-200 h-4 rounded mb-2"></div>
                    <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="p-6 border-2 border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                    onClick={() => setActiveTemplate(suggestion)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          suggestion.type === "skill-gap"
                            ? "bg-blue-100"
                            : suggestion.type === "behavioral"
                            ? "bg-green-100"
                            : "bg-purple-100"
                        }`}
                      >
                        {suggestion.type === "skill-gap" && (
                          <Target className="w-6 h-6 text-blue-600" />
                        )}
                        {suggestion.type === "behavioral" && (
                          <Users className="w-6 h-6 text-green-600" />
                        )}
                        {suggestion.type === "scenario" && (
                          <Zap className="w-6 h-6 text-purple-600" />
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700">
                          {Math.round(suggestion.confidence * 100)}% match
                        </span>
                      </div>
                    </div>

                    <h5 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {suggestion.title}
                    </h5>
                    <p className="text-gray-600 text-sm mb-4">
                      {suggestion.description}
                    </p>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs font-medium text-gray-700 mb-1">
                        AI Reasoning:
                      </div>
                      <div className="text-xs text-gray-600">
                        {suggestion.reasoning}
                      </div>
                    </div>

                    <button className="w-full mt-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 opacity-0 group-hover:opacity-100">
                      Generate Question
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Company-Specific Insights */}
          {company && selectedCompanyData && insights && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Hiring Trends */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  {company} Hiring Trends
                </h4>

                <div className="space-y-4">
                  {insights.hiringTrends.map((trend, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
                    >
                      <div>
                        <div className="font-semibold text-gray-900">
                          {trend.skill}
                        </div>
                        <div className="text-sm text-gray-600">
                          Demand: {trend.demand}
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-bold ${
                            trend.growth.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {trend.growth}
                        </div>
                        <div className="text-xs text-gray-500">YoY Growth</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment Analytics */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Assessment Analytics
                </h4>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">
                        {insights.assessmentMetrics.averageDuration}
                      </div>
                      <div className="text-sm text-gray-600">Avg Duration</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">
                        {insights.assessmentMetrics.passRate}
                      </div>
                      <div className="text-sm text-gray-600">Pass Rate</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-3">
                      Difficulty Distribution
                    </div>
                    {Object.entries(
                      insights.assessmentMetrics.difficultyDistribution
                    ).map(([level, percentage]) => (
                      <div
                        key={level}
                        className="flex items-center justify-between mb-2"
                      >
                        <span className="text-sm text-gray-600">{level}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                level === "Expert"
                                  ? "bg-red-500"
                                  : level === "Advanced"
                                  ? "bg-orange-500"
                                  : "bg-yellow-500"
                              }`}
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Question Templates */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Enhanced Question Templates for {company || industryInfo.name}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getAdvancedQuestionTemplates(industry, company).map(
                (template, idx) => (
                  <div
                    key={idx}
                    className="p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 text-xs font-bold rounded-full ${
                          template.type === "coding"
                            ? "bg-purple-100 text-purple-800"
                            : template.type === "case-study"
                            ? "bg-green-100 text-green-800"
                            : template.type === "system-design"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {template.type.replace("-", " ").toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs text-gray-600">
                          {template.rating}
                        </span>
                      </div>
                    </div>

                    <h5 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {template.title}
                    </h5>
                    <p className="text-gray-600 text-sm mb-4">
                      {template.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Difficulty:</span>
                        <span
                          className={`px-2 py-1 rounded ${
                            template.difficulty === "Expert"
                              ? "bg-red-100 text-red-700"
                              : template.difficulty === "Advanced"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {template.difficulty}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-medium">
                          {template.duration} min
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500">Success Rate:</span>
                        <span className="font-medium text-green-600">
                          {template.successRate}%
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100">
                        Use Template
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Recent Updates & Insights */}
          {company && insights && (
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Recent {company} Updates & Insights
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-4">
                    Latest Assessment Updates
                  </h5>
                  <div className="space-y-3">
                    {insights.recentUpdates.map((update, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <div className="text-sm text-gray-700">{update}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-4">
                    Technology Focus Areas
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCompanyData.industryFocus.map((focus, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>

                  <h5 className="font-semibold text-gray-900 mb-4 mt-6">
                    Core Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedCompanyData.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Center */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  Ready to Create Advanced Questions?
                </h4>
                <p className="text-purple-100">
                  Use our AI-powered tools to generate highly targeted
                  assessment questions
                  {company
                    ? ` specifically for ${company}`
                    : ` for the ${industryInfo.name} industry`}
                  .
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  <Zap className="w-5 h-5 mr-2 inline" />
                  Generate with AI
                </button>
                <button className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-xl hover:bg-purple-800 transition-colors">
                  <Plus className="w-5 h-5 mr-2 inline" />
                  Start from Scratch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function for advanced question templates
const getAdvancedQuestionTemplates = (industry, company) => {
  const baseTemplates = {
    technology: [
      {
        type: "coding",
        title: "Distributed System Design Challenge",
        description:
          "Design a scalable microservices architecture for high-traffic applications",
        difficulty: "Expert",
        duration: 90,
        successRate: 23,
        rating: 4.9,
        complexity: "System Architecture",
      },
      {
        type: "coding",
        title: "Real-time Data Processing Pipeline",
        description:
          "Implement a stream processing system handling millions of events per second",
        difficulty: "Advanced",
        duration: 75,
        successRate: 34,
        rating: 4.7,
        complexity: "Data Engineering",
      },
      {
        type: "system-design",
        title: "Global CDN Architecture Design",
        description:
          "Design a content delivery network for worldwide low-latency content serving",
        difficulty: "Expert",
        duration: 60,
        successRate: 18,
        rating: 4.8,
        complexity: "Infrastructure",
      },
    ],
    finance: [
      {
        type: "case-study",
        title: "Portfolio Risk Assessment Model",
        description:
          "Develop a comprehensive risk model for a $1B investment portfolio",
        difficulty: "Expert",
        duration: 120,
        successRate: 15,
        rating: 4.9,
        complexity: "Risk Management",
      },
      {
        type: "quantitative",
        title: "High-Frequency Trading Algorithm",
        description:
          "Design and backtest a market-making algorithm for volatile markets",
        difficulty: "Expert",
        duration: 150,
        successRate: 8,
        rating: 4.8,
        complexity: "Algorithmic Trading",
      },
    ],
    consulting: [
      {
        type: "case-study",
        title: "Digital Transformation Strategy",
        description:
          "Develop a 3-year digital strategy for a traditional manufacturing company",
        difficulty: "Advanced",
        duration: 90,
        successRate: 28,
        rating: 4.6,
        complexity: "Strategy Development",
      },
      {
        type: "case-study",
        title: "M&A Integration Planning",
        description:
          "Plan the integration of two companies in a $5B merger scenario",
        difficulty: "Expert",
        duration: 120,
        successRate: 22,
        rating: 4.8,
        complexity: "Corporate Strategy",
      },
    ],
  };

  // Company-specific customizations
  if (company) {
    const companyCustomizations = {
      Google: [
        {
          type: "coding",
          title: "Google-Scale Search Algorithm",
          description:
            "Optimize search relevance for billions of queries with millisecond latency",
          difficulty: "Expert",
          duration: 120,
          successRate: 12,
          rating: 4.9,
          complexity: "Search & Information Retrieval",
        },
      ],
      "Goldman Sachs": [
        {
          type: "quantitative",
          title: "Prime Brokerage Risk Engine",
          description:
            "Build real-time risk calculation engine for prime brokerage operations",
          difficulty: "Expert",
          duration: 180,
          successRate: 6,
          rating: 4.9,
          complexity: "Financial Engineering",
        },
      ],
      "McKinsey & Company": [
        {
          type: "case-study",
          title: "Fortune 500 Turnaround Strategy",
          description:
            "Develop comprehensive turnaround plan for struggling Fortune 500 company",
          difficulty: "Expert",
          duration: 90,
          successRate: 19,
          rating: 4.8,
          complexity: "Corporate Restructuring",
        },
      ],
    };

    if (companyCustomizations[company]) {
      return [
        ...(baseTemplates[industry] || []),
        ...companyCustomizations[company],
      ];
    }
  }

  return baseTemplates[industry] || [];
};
