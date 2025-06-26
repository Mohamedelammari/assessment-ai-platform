import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Camera,
  Shield,
  Activity,
  AlertTriangle,
  Eye,
  Users,
  Clock,
  Monitor,
  Mic,
  Volume2,
  Wifi,
  Signal,
  Battery,
  Settings,
  Play,
  Pause,
  Square,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Bell,
  CheckCircle,
  XCircle,
  MessageSquare,
  Phone,
  Video,
  MapPin,
  Calendar,
  TrendingUp,
  BarChart3,
  PieChart,
  Download,
  Upload,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  RefreshCw,
  X,
  Plus,
  Edit,
  Trash2,
  Flag,
  Star,
  Award,
  Target,
  Zap,
  Lightbulb,
  Flame,
  Circle, // Instead of Record
  StopCircle,
  Minimize,
  Maximize,
  VolumeX,
  MicOff,
  Headphones,
  CameraOff,
  ScreenShare,
  // ScreenShareOff - doesn't exist, use ScreenShare with different styling
  Cast,
  // CastOff - doesn't exist, use Cast with different styling
  Bluetooth,
  // BluetoothOff - doesn't exist, use Bluetooth with different styling
  Globe, // Instead of NetworkIcon
  WifiOff,
  BatteryLow,
  Power, // Instead of PowerOff
  HardDrive,
  Cpu,
  // MemoryStick - doesn't exist, use HardDrive
  Router,
  Smartphone,
  Tablet,
  Laptop,
  // Desktop - doesn't exist, use Monitor
  Server,
  Cloud,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Users2,
  // UserCog - doesn't exist, use Settings
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  // Barcode - doesn't exist, use QrCode
  // CameraIcon - use Camera
  // Webcam - use Camera
  // Microphone - use Mic
  // Speaker - use Volume2
  FileVideo,
  FileAudio,
  FileImage,
  FilePlus,
  FileText,
  FileCheck,
  FolderOpen,
  FolderPlus,
  Archive,
  Package,
  Box,
  // Container - doesn't exist, use Box
  Truck,
  Plane,
  Ship,
  Train,
  Car,
  // Bike - doesn't exist, use Car or different icon
  Bus,
  // Taxi - doesn't exist, use Car
  Fuel,
  Navigation,
  Compass,
  Map,
  // Route - doesn't exist, use Map
  // Road - doesn't exist, use Map
  // Parking - doesn't exist, use MapPin
  AlertOctagon,
  AlertCircle,
  Info,
  HelpCircle,
  CheckSquare,
  MinusSquare,
  PlusSquare,
  Hash,
  AtSign,
  DollarSign,
  Percent,
  Coffee,
  Heart,
  // Smile - doesn't exist, use Heart or different icon
  // Frown - doesn't exist, use Heart or different icon
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Share2,
  Link,
  ExternalLink,
  Copy,
  Paperclip,
  Layers,
  Grid,
  List,
  // ToggleLeft - doesn't exist, use Switch or custom implementation
  // ToggleRight - doesn't exist, use Switch or custom implementation
  Sliders,
  SkipBack,
  SkipForward,
  FastForward,
  Rewind,
  Repeat,
  Shuffle,
  Volume1,
  Volume,
  // Brightness - doesn't exist, use Sun
  // Contrast - doesn't exist, use Sun
  Sun,
  Moon,
  Sunrise,
  Sunset,
  CloudRain,
  CloudSnow,
  // CloudLightning - doesn't exist, use Zap
  Umbrella,
  Thermometer,
  Wind,
  Snowflake,
} from "lucide-react";

// Custom hooks for enhanced functionality
const useWebRTC = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState(new Map()); // FIXED: Added 'new'
  const [connectionState, setConnectionState] = useState("disconnected");
  const peerConnections = useRef(new Map()); // FIXED: Added 'new'

  const startLocalStream = useCallback(
    async (constraints = { video: true, audio: true }) => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        setLocalStream(stream);
        setConnectionState("connected");
        return stream;
      } catch (error) {
        console.error("Error accessing media devices:", error);
        setConnectionState("failed");
        throw error;
      }
    },
    []
  );

  const stopLocalStream = useCallback(() => {
    if (localStream) {
      localStream.getTracks().forEach((track) => track.stop());
      setLocalStream(null);
      setConnectionState("disconnected");
    }
  }, [localStream]);

  return {
    localStream,
    remoteStreams,
    connectionState,
    startLocalStream,
    stopLocalStream,
  };
};
const useSystemMonitoring = () => {
  const [systemInfo, setSystemInfo] = useState({
    battery: { level: 100, charging: false },
    network: { type: "wifi", strength: "excellent", speed: "100 Mbps" },
    performance: { cpu: 45, memory: 60, disk: 30 },
    camera: { active: true, resolution: "1080p", fps: 30 },
    microphone: { active: true, level: 75, quality: "good" },
    display: { resolution: "1920x1080", orientation: "landscape" },
  });

  const [permissions, setPermissions] = useState({
    camera: "granted",
    microphone: "granted",
    screen: "prompt",
    notifications: "granted",
  });

  useEffect(() => {
    const updateSystemInfo = () => {
      // Simulate real system monitoring
      setSystemInfo((prev) => ({
        ...prev,
        battery: {
          level: Math.max(0, prev.battery.level - Math.random() * 0.1),
          charging: Math.random() > 0.7,
        },
        performance: {
          cpu: Math.max(
            0,
            Math.min(100, prev.performance.cpu + (Math.random() - 0.5) * 10)
          ),
          memory: Math.max(
            0,
            Math.min(100, prev.performance.memory + (Math.random() - 0.5) * 5)
          ),
          disk: Math.max(
            0,
            Math.min(100, prev.performance.disk + (Math.random() - 0.5) * 2)
          ),
        },
      }));
    };

    const interval = setInterval(updateSystemInfo, 5000);
    return () => clearInterval(interval);
  }, []);

  return { systemInfo, permissions };
};

const useAIDetection = () => {
  const [detectionResults, setDetectionResults] = useState({
    faceDetection: { confidence: 0, faces: 0, primaryFace: null },
    eyeTracking: { gazeDirection: "center", blinkRate: 15, focusScore: 0.95 },
    audioAnalysis: {
      voiceDetection: false,
      backgroundNoise: "low",
      clarity: "high",
    },
    behaviorAnalysis: {
      suspiciousActivity: false,
      attentionScore: 0.92,
      movementPattern: "normal",
    },
    screenAnalysis: {
      tabSwitching: false,
      windowChanges: 0,
      applicationsOpen: ["browser"],
    },
  });

  const [aiAlerts, setAiAlerts] = useState([]);

  useEffect(() => {
    const performAIAnalysis = () => {
      // Simulate AI detection results
      const newResults = {
        faceDetection: {
          confidence: Math.random() * 0.3 + 0.7, // 70-100%
          faces: Math.random() > 0.95 ? 2 : 1, // Occasionally detect multiple faces
          primaryFace: {
            x: Math.random() * 0.4 + 0.3, // Center of screen
            y: Math.random() * 0.4 + 0.3,
            size: Math.random() * 0.2 + 0.4,
          },
        },
        eyeTracking: {
          gazeDirection: ["center", "left", "right", "up", "down"][
            Math.floor(Math.random() * 5)
          ],
          blinkRate: Math.random() * 10 + 10, // 10-20 blinks per minute
          focusScore: Math.random() * 0.3 + 0.7, // 70-100%
        },
        audioAnalysis: {
          voiceDetection: Math.random() > 0.8, // Occasionally detect voice
          backgroundNoise: ["low", "medium", "high"][
            Math.floor(Math.random() * 3)
          ],
          clarity: ["high", "medium", "low"][Math.floor(Math.random() * 3)],
        },
        behaviorAnalysis: {
          suspiciousActivity: Math.random() < 0.05, // 5% chance of suspicious activity
          attentionScore: Math.random() * 0.4 + 0.6, // 60-100%
          movementPattern: ["normal", "fidgety", "still"][
            Math.floor(Math.random() * 3)
          ],
        },
        screenAnalysis: {
          tabSwitching: Math.random() < 0.02, // 2% chance of tab switching
          windowChanges: Math.floor(Math.random() * 3),
          applicationsOpen: ["browser", "calculator", "notepad"].slice(
            0,
            Math.floor(Math.random() * 3) + 1
          ),
        },
      };

      setDetectionResults(newResults);

      // Generate alerts based on detection results
      const alerts = [];
      if (newResults.faceDetection.faces > 1) {
        alerts.push({
          id: Date.now() + 1,
          type: "face_detection",
          severity: "high",
          message: "Multiple faces detected in camera feed",
          timestamp: new Date(),
          confidence: newResults.faceDetection.confidence,
        });
      }

      if (newResults.screenAnalysis.tabSwitching) {
        alerts.push({
          id: Date.now() + 2,
          type: "tab_switching",
          severity: "high",
          message: "Browser tab switching detected",
          timestamp: new Date(),
          confidence: 0.95,
        });
      }

      if (newResults.eyeTracking.focusScore < 0.7) {
        alerts.push({
          id: Date.now() + 3,
          type: "attention",
          severity: "medium",
          message: "Low attention score detected",
          timestamp: new Date(),
          confidence: 1 - newResults.eyeTracking.focusScore,
        });
      }

      if (alerts.length > 0) {
        setAiAlerts((prev) => [...alerts, ...prev.slice(0, 49)]);
      }
    };

    const interval = setInterval(performAIAnalysis, 3000);
    return () => clearInterval(interval);
  }, []);

  return { detectionResults, aiAlerts };
};

export default function Proctoring() {
  // State management
  const [activeSessionsData, setActiveSessionsData] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [alertHistory, setAlertHistory] = useState([]);
  const [realTimeMetrics, setRealTimeMetrics] = useState({});
  const [proctoringSettings, setProctoringSettings] = useState({
    autoAlerts: true,
    recordingSessions: true,
    faceDetection: true,
    voiceMonitoring: false,
    screenSharing: true,
    chatEnabled: true,
    aiAnalysis: true,
    behaviorTracking: true,
    performanceMonitoring: true,
    autoTermination: false,
    strictMode: false,
  });

  const [viewMode, setViewMode] = useState("grid"); // grid, list, detailed
  const [sortBy, setSortBy] = useState("priority");
  const [filterBy, setFilterBy] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showSessionDetails, setShowSessionDetails] = useState(false);
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [systemStatus, setSystemStatus] = useState("optimal");
  const [networkStatus, setNetworkStatus] = useState("excellent");
  const [serverLoad, setServerLoad] = useState(45);

  // Custom hooks
  const { localStream, connectionState, startLocalStream, stopLocalStream } =
    useWebRTC();
  const { systemInfo, permissions } = useSystemMonitoring();
  const { detectionResults, aiAlerts } = useAIDetection();

  // Refs
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const recordingRef = useRef(null);

  // Enhanced session data generator
  const generateEnhancedSessionData = useCallback(() => {
    const positions = [
      "Senior Software Engineer",
      "Data Scientist",
      "Product Manager",
      "Investment Banking Analyst",
      "Management Consultant",
      "UX Designer",
      "DevOps Engineer",
      "Quantitative Analyst",
      "Marketing Specialist",
      "Business Analyst",
      "Solutions Architect",
      "Research Scientist",
    ];

    const companies = [
      "Google",
      "Meta",
      "Apple",
      "Microsoft",
      "Amazon",
      "Netflix",
      "Goldman Sachs",
      "Morgan Stanley",
      "JP Morgan Chase",
      "BlackRock",
      "McKinsey & Company",
      "Boston Consulting Group",
      "Bain & Company",
      "Deloitte",
      "PwC",
      "EY",
      "KPMG",
      "Accenture",
      "IBM",
      "Oracle",
    ];

    const locations = [
      "San Francisco, CA",
      "New York, NY",
      "Seattle, WA",
      "Austin, TX",
      "Boston, MA",
      "Chicago, IL",
      "Los Angeles, CA",
      "Denver, CO",
      "London, UK",
      "Toronto, CA",
      "Singapore",
      "Tokyo, JP",
      "Sydney, AU",
      "Berlin, DE",
      "Amsterdam, NL",
      "Dublin, IE",
    ];

    const generateSessionId = () =>
      `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const generateAISuspicionScore = () => {
      const baseScore = Math.random() * 100;
      const factors = [
        Math.random() * 20, // Eye tracking
        Math.random() * 15, // Face detection
        Math.random() * 25, // Screen activity
        Math.random() * 20, // Audio analysis
        Math.random() * 20, // Behavior patterns
      ];
      return Math.min(
        100,
        Math.max(0, baseScore - factors.reduce((a, b) => a + b, 0))
      );
    };

    return Array.from({ length: Math.floor(Math.random() * 8) + 3 }, (_, i) => {
      const startTime = new Date(Date.now() - Math.random() * 7200000); // Within last 2 hours
      const duration = Math.floor(Math.random() * 120) + 60; // 60-180 minutes
      const progress = Math.floor(Math.random() * 100);
      const totalQuestions = Math.floor(Math.random() * 30) + 10;
      const currentQuestion = Math.floor((progress / 100) * totalQuestions);
      const securityScore = generateAISuspicionScore();
      const alertCount = Math.floor(Math.random() * 8);

      const status =
        securityScore < 30
          ? "flagged"
          : securityScore < 60
          ? "warning"
          : alertCount > 5
          ? "attention"
          : "active";

      return {
        id: generateSessionId(),
        candidateName: `Candidate ${String.fromCharCode(65 + i)} ${Math.random()
          .toString(36)
          .substr(2, 6)}`,
        candidateEmail: `candidate${i}@email.com`,
        position: positions[Math.floor(Math.random() * positions.length)],
        company: companies[Math.floor(Math.random() * companies.length)],
        startTime,
        duration,
        progress,
        currentQuestion,
        totalQuestions,
        securityScore: Math.round(securityScore),
        alertCount,
        status,
        location: locations[Math.floor(Math.random() * locations.length)],
        device: [
          "MacBook Pro",
          "Dell Laptop",
          "Surface Pro",
          "HP Pavilion",
          "ThinkPad",
        ][Math.floor(Math.random() * 5)],
        browser: ["Chrome 120.0", "Safari 17.0", "Firefox 119.0", "Edge 119.0"][
          Math.floor(Math.random() * 4)
        ],
        connection: ["excellent", "good", "fair", "poor"][
          Math.floor(Math.random() * 4)
        ],
        proctoringLevel: ["strict", "enhanced", "standard", "basic"][
          Math.floor(Math.random() * 4)
        ],
        lastActivity: [
          "typing code",
          "reviewing case study",
          "answering questions",
          "reading instructions",
          "solving problem",
          "taking notes",
          "thinking",
          "calculating",
          "drawing diagram",
        ][Math.floor(Math.random() * 9)],
        webcamStatus: Math.random() > 0.1 ? "active" : "inactive",
        micStatus: Math.random() > 0.3 ? "active" : "muted",
        screenShare: Math.random() > 0.2,
        suspiciousActivity: status === "flagged",
        aiConfidenceScore: Math.round(Math.random() * 30 + 70),
        biometricMatch: Math.round(Math.random() * 20 + 80),

        // Enhanced monitoring data
        eyeTracking: {
          gazePattern: Math.random() > 0.8 ? "irregular" : "normal",
          focusTime: Math.round(Math.random() * 40 + 60), // 60-100%
          distractionCount: Math.floor(Math.random() * 5),
          blinkRate: Math.round(Math.random() * 10 + 15), // 15-25 per minute
        },

        behaviorMetrics: {
          keyboardActivity: Math.round(Math.random() * 200 + 50), // Keystrokes per minute
          mouseMovement: Math.random() > 0.5 ? "active" : "minimal",
          postureChanges: Math.floor(Math.random() * 20),
          facialExpressions: {
            concentration: Math.round(Math.random() * 40 + 60),
            stress: Math.round(Math.random() * 30),
            confusion: Math.round(Math.random() * 25),
          },
        },

        environmentalFactors: {
          lightingCondition: ["optimal", "dim", "bright", "inconsistent"][
            Math.floor(Math.random() * 4)
          ],
          backgroundNoise: ["quiet", "moderate", "noisy"][
            Math.floor(Math.random() * 3)
          ],
          backgroundMovement: Math.random() > 0.8,
          roomOccupancy: Math.random() > 0.9 ? "multiple" : "single",
        },

        technicalMetrics: {
          latency: Math.round(Math.random() * 100 + 20), // 20-120ms
          frameRate: Math.round(Math.random() * 10 + 25), // 25-35 FPS
          resolution: ["1080p", "720p", "480p"][Math.floor(Math.random() * 3)],
          bandwidth: Math.round(Math.random() * 50 + 10), // 10-60 Mbps
          packetLoss: Math.round(Math.random() * 5 * 100) / 100, // 0-5%
        },

        assessmentData: {
          timeSpentPerQuestion: Array.from(
            { length: currentQuestion },
            () => Math.round(Math.random() * 300 + 60) // 1-6 minutes per question
          ),
          questionDifficulty: Array.from(
            { length: totalQuestions },
            () => ["easy", "medium", "hard"][Math.floor(Math.random() * 3)]
          ),
          answeredQuestions: currentQuestion,
          skippedQuestions: Math.floor(Math.random() * 3),
          flaggedQuestions: Math.floor(Math.random() * 2),
        },

        violations: Array.from({ length: alertCount }, (_, j) => ({
          id: `violation_${j}`,
          type: [
            "face_not_visible",
            "multiple_faces",
            "tab_switching",
            "external_application",
            "suspicious_audio",
            "irregular_behavior",
            "connection_lost",
          ][Math.floor(Math.random() * 7)],
          timestamp: new Date(Date.now() - Math.random() * 3600000),
          severity: ["low", "medium", "high"][Math.floor(Math.random() * 3)],
          resolved: Math.random() > 0.3,
          aiConfidence: Math.round(Math.random() * 40 + 60),
        })),

        sessionRecording: {
          videoSize: Math.round(Math.random() * 500 + 100), // MB
          audioSize: Math.round(Math.random() * 100 + 20), // MB
          screenSize: Math.round(Math.random() * 800 + 200), // MB
          totalSize: 0, // Will be calculated
          recordingQuality: ["high", "medium", "low"][
            Math.floor(Math.random() * 3)
          ],
          compressionRatio: Math.round(Math.random() * 30 + 70), // 70-100%
        },
      };
    }).map((session) => {
      // Calculate total recording size
      session.sessionRecording.totalSize =
        session.sessionRecording.videoSize +
        session.sessionRecording.audioSize +
        session.sessionRecording.screenSize;
      return session;
    });
  }, []);

  // Initialize and update data
  useEffect(() => {
    const updateData = () => {
      setActiveSessionsData(generateEnhancedSessionData());
      setRealTimeMetrics({
        totalActiveSessions: Math.floor(Math.random() * 20) + 15,
        totalCandidatesOnline: Math.floor(Math.random() * 100) + 150,
        averageSecurityScore: Math.round(Math.random() * 15 + 85),
        totalAlertsToday: Math.floor(Math.random() * 50) + 25,
        successfulVerifications:
          Math.round((Math.random() * 5 + 95) * 100) / 100,
        systemUptime: Math.round((Math.random() * 2 + 98) * 100) / 100,
        averageSessionDuration: Math.floor(Math.random() * 30) + 85,
        completionRate: Math.round((Math.random() * 15 + 80) * 100) / 100,
        serverResponseTime: Math.round(Math.random() * 50) + 25,
        bandwidthUsage: Math.round(Math.random() * 40) + 60,
        storagePressure: Math.round(Math.random() * 30) + 20,
        aiAccuracy: Math.round((Math.random() * 5 + 94) * 100) / 100,
      });

      // Update system status based on metrics
      const metrics = realTimeMetrics;
      if (metrics.systemUptime < 99 || metrics.serverResponseTime > 100) {
        setSystemStatus("degraded");
      } else if (metrics.bandwidthUsage > 90 || metrics.storagePressure > 80) {
        setSystemStatus("warning");
      } else {
        setSystemStatus("optimal");
      }
    };

    updateData();
    const interval = setInterval(updateData, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, [generateEnhancedSessionData, realTimeMetrics]);

  // Recording management
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    } else {
      setRecordingDuration(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // Filter and sort sessions
  const filteredAndSortedSessions = useMemo(() => {
    let filtered = activeSessionsData.filter((session) => {
      if (filterBy !== "all") {
        if (filterBy === "flagged" && session.status !== "flagged")
          return false;
        if (filterBy === "warning" && session.status !== "warning")
          return false;
        if (filterBy === "active" && session.status !== "active") return false;
        if (filterBy === "attention" && session.status !== "attention")
          return false;
      }

      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          session.candidateName.toLowerCase().includes(searchLower) ||
          session.position.toLowerCase().includes(searchLower) ||
          session.company.toLowerCase().includes(searchLower) ||
          session.location.toLowerCase().includes(searchLower)
        );
      }

      return true;
    });

    // Sort sessions
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "priority":
          const priorityOrder = {
            flagged: 4,
            warning: 3,
            attention: 2,
            active: 1,
          };
          return priorityOrder[b.status] - priorityOrder[a.status];
        case "security":
          return a.securityScore - b.securityScore;
        case "alerts":
          return b.alertCount - a.alertCount;
        case "duration":
          return b.duration - a.duration;
        case "progress":
          return b.progress - a.progress;
        case "name":
          return a.candidateName.localeCompare(b.candidateName);
        case "company":
          return a.company.localeCompare(b.company);
        case "startTime":
          return new Date(b.startTime) - new Date(a.startTime);
        default:
          return 0;
      }
    });

    return filtered;
  }, [activeSessionsData, filterBy, searchTerm, sortBy]);

  // Event handlers
  const handleSessionSelect = useCallback((sessionId) => {
    setSelectedSessions((prev) =>
      prev.includes(sessionId)
        ? prev.filter((id) => id !== sessionId)
        : [...prev, sessionId]
    );
  }, []);

  const handleBulkAction = useCallback(
    (action) => {
      switch (action) {
        case "flag":
          console.log("Flagging sessions:", selectedSessions);
          break;
        case "terminate":
          if (
            window.confirm(
              `Are you sure you want to terminate ${selectedSessions.length} sessions?`
            )
          ) {
            console.log("Terminating sessions:", selectedSessions);
            setSelectedSessions([]);
          }
          break;
        case "message":
          setShowBroadcastModal(true);
          break;
        case "export":
          console.log("Exporting sessions:", selectedSessions);
          break;
        case "review":
          console.log("Marking for review:", selectedSessions);
          break;
      }
    },
    [selectedSessions]
  );

  const startRecording = useCallback(async () => {
    try {
      const stream = await startLocalStream({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsRecording(true);
    } catch (error) {
      console.error("Failed to start recording:", error);
    }
  }, [startLocalStream]);

  const stopRecording = useCallback(() => {
    stopLocalStream();
    setIsRecording(false);
    setRecordingDuration(0);
  }, [stopLocalStream]);

  const getStatusColor = (status) => {
    switch (status) {
      case "flagged":
        return "bg-red-100 text-red-800 border-red-200";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "attention":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "active":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getConnectionIcon = (connection) => {
    switch (connection) {
      case "excellent":
        return <Signal className="w-4 h-4 text-green-600" />;
      case "good":
        return <Wifi className="w-4 h-4 text-blue-600" />;
      case "fair":
        return <Wifi className="w-4 h-4 text-yellow-600" />;
      case "poor":
        return <WifiOff className="w-4 h-4 text-red-600" />;
      default:
        return <NetworkIcon className="w-4 h-4 text-gray-600" />;
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Header with Real-time System Status */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Advanced AI Proctoring Center
              </h1>
              <p className="text-blue-100 text-lg">
                Real-time monitoring, AI detection, and automated security
                analysis
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-blue-200">System Status</div>
              <div
                className={`text-lg font-semibold flex items-center ${
                  systemStatus === "optimal"
                    ? "text-green-300"
                    : systemStatus === "warning"
                    ? "text-yellow-300"
                    : "text-red-300"
                }`}
              >
                {systemStatus === "optimal" && (
                  <CheckCircle className="w-5 h-5 mr-1" />
                )}
                {systemStatus === "warning" && (
                  <AlertTriangle className="w-5 h-5 mr-1" />
                )}
                {systemStatus === "degraded" && (
                  <XCircle className="w-5 h-5 mr-1" />
                )}
                {systemStatus.charAt(0).toUpperCase() + systemStatus.slice(1)}
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-blue-200">Server Load</div>
              <div className="text-lg font-semibold">{serverLoad}%</div>
            </div>

            <div className="text-right">
              <div className="text-sm text-blue-200">Current Time</div>
              <div className="text-lg font-semibold">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5 text-blue-200" />
              <span className="text-green-300 text-sm">
                +{Math.floor(Math.random() * 5) + 1}
              </span>
            </div>
            <div className="text-2xl font-bold">
              {realTimeMetrics.totalActiveSessions || 0}
            </div>
            <div className="text-xs text-blue-200">Active Sessions</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-5 h-5 text-blue-200" />
              <span className="text-green-300 text-sm">
                {realTimeMetrics.averageSecurityScore >= 85 ? "↗" : "↘"}
              </span>
            </div>
            <div className="text-2xl font-bold">
              {realTimeMetrics.averageSecurityScore || 0}%
            </div>
            <div className="text-xs text-blue-200">Security Score</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <Bell className="w-5 h-5 text-blue-200" />
              <span className="text-red-300 text-sm">
                {realTimeMetrics.totalAlertsToday > 30 ? "⚠" : "✓"}
              </span>
            </div>
            <div className="text-2xl font-bold">
              {realTimeMetrics.totalAlertsToday || 0}
            </div>
            <div className="text-xs text-blue-200">Alerts Today</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-blue-200" />
              <span className="text-blue-300 text-sm">avg</span>
            </div>
            <div className="text-2xl font-bold">
              {realTimeMetrics.averageSessionDuration || 0}m
            </div>
            <div className="text-xs text-blue-200">Session Duration</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-5 h-5 text-blue-200" />
              <span className="text-green-300 text-sm">
                {realTimeMetrics.aiAccuracy >= 95 ? "★" : "○"}
              </span>
            </div>
            <div className="text-2xl font-bold">
              {realTimeMetrics.aiAccuracy || 0}%
            </div>
            <div className="text-xs text-blue-200">AI Accuracy</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-5 h-5 text-blue-200" />
              <span className="text-green-300 text-sm">
                {realTimeMetrics.systemUptime >= 99 ? "✓" : "!"}
              </span>
            </div>
            <div className="text-2xl font-bold">
              {realTimeMetrics.systemUptime || 0}%
            </div>
            <div className="text-xs text-blue-200">Uptime</div>
          </div>
        </div>
      </div>

      {/* Advanced Control Panel */}
      <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search and Filters */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search candidates, positions, companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Sessions</option>
                <option value="flagged">🚨 Flagged</option>
                <option value="warning">⚠️ Warning</option>
                <option value="attention">👁️ Attention</option>
                <option value="active">✅ Active</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500"
              >
                <option value="priority">Priority</option>
                <option value="security">Security Score</option>
                <option value="alerts">Alert Count</option>
                <option value="duration">Duration</option>
                <option value="progress">Progress</option>
                <option value="name">Name</option>
                <option value="company">Company</option>
                <option value="startTime">Start Time</option>
              </select>

              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-xl transition-colors ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-xl transition-colors ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("detailed")}
                  className={`p-3 rounded-xl transition-colors ${
                    viewMode === "detailed"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Monitor className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Bulk Actions */}
            {selectedSessions.length > 0 && (
              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-800 font-medium">
                    {selectedSessions.length} sessions selected
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleBulkAction("message")}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 mr-1 inline" />
                    Message
                  </button>
                  <button
                    onClick={() => handleBulkAction("flag")}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    <Flag className="w-4 h-4 mr-1 inline" />
                    Flag
                  </button>
                  <button
                    onClick={() => handleBulkAction("review")}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-1 inline" />
                    Review
                  </button>
                  <button
                    onClick={() => handleBulkAction("terminate")}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <XCircle className="w-4 h-4 mr-1 inline" />
                    Terminate
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                isRecording
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {isRecording ? (
                <>
                  <StopCircle className="w-5 h-5 mr-2 inline" />
                  Stop ({formatTime(recordingDuration)})
                </>
              ) : (
                <>
                  <Record className="w-5 h-5 mr-2 inline" />
                  Record Session
                </>
              )}
            </button>

            <button
              onClick={() => setShowAnalytics(true)}
              className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-semibold"
            >
              <BarChart3 className="w-5 h-5 mr-2 inline" />
              Analytics
            </button>

            <button
              onClick={() => setShowSettings(true)}
              className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors font-semibold"
            >
              <Settings className="w-5 h-5 mr-2 inline" />
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Sessions Display */}
      <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Active Proctoring Sessions ({filteredAndSortedSessions.length})
          </h2>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>
                Normal (
                {
                  filteredAndSortedSessions.filter((s) => s.status === "active")
                    .length
                }
                )
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>
                Warning (
                {
                  filteredAndSortedSessions.filter(
                    (s) => s.status === "warning"
                  ).length
                }
                )
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>
                Flagged (
                {
                  filteredAndSortedSessions.filter(
                    (s) => s.status === "flagged"
                  ).length
                }
                )
              </span>
            </div>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedSessions.map((session) => (
              <EnhancedSessionCard
                key={session.id}
                session={session}
                isSelected={selectedSessions.includes(session.id)}
                onSelect={() => handleSessionSelect(session.id)}
                onViewDetails={() => {
                  setSelectedSession(session);
                  setShowSessionDetails(true);
                }}
                getStatusColor={getStatusColor}
                getConnectionIcon={getConnectionIcon}
              />
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {filteredAndSortedSessions.map((session) => (
              <EnhancedSessionListItem
                key={session.id}
                session={session}
                isSelected={selectedSessions.includes(session.id)}
                onSelect={() => handleSessionSelect(session.id)}
                onViewDetails={() => {
                  setSelectedSession(session);
                  setShowSessionDetails(true);
                }}
                getStatusColor={getStatusColor}
                getConnectionIcon={getConnectionIcon}
              />
            ))}
          </div>
        )}

        {/* Detailed View */}
        {viewMode === "detailed" && (
          <div className="space-y-6">
            {filteredAndSortedSessions.map((session) => (
              <DetailedSessionCard
                key={session.id}
                session={session}
                isSelected={selectedSessions.includes(session.id)}
                onSelect={() => handleSessionSelect(session.id)}
                onViewDetails={() => {
                  setSelectedSession(session);
                  setShowSessionDetails(true);
                }}
                getStatusColor={getStatusColor}
                getConnectionIcon={getConnectionIcon}
              />
            ))}
          </div>
        )}

        {filteredAndSortedSessions.length === 0 && (
          <div className="text-center py-12">
            <Monitor className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No sessions found
            </h3>
            <p className="text-gray-600">
              {searchTerm || filterBy !== "all"
                ? "Try adjusting your search criteria or filters."
                : "No active proctoring sessions at the moment."}
            </p>
          </div>
        )}
      </div>

      {/* AI Detection Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real-time AI Detection */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  AI Detection Engine
                </h3>
                <p className="text-gray-600">Real-time behavioral analysis</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">Active</span>
            </div>
          </div>

          <div className="space-y-4">
            {/* Face Detection */}
            <div className="bg-white p-4 rounded-xl border border-purple-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">
                  Face Detection
                </span>
                <span className="text-sm text-gray-500">
                  {Math.round(detectionResults.faceDetection.confidence * 100)}%
                  confidence
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full"
                    style={{
                      width: `${
                        detectionResults.faceDetection.confidence * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium">
                  {detectionResults.faceDetection.faces}{" "}
                  {detectionResults.faceDetection.faces === 1
                    ? "face"
                    : "faces"}
                </span>
              </div>
            </div>

            {/* Eye Tracking */}
            <div className="bg-white p-4 rounded-xl border border-purple-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Eye Tracking</span>
                <span className="text-sm text-gray-500">
                  Focus:{" "}
                  {Math.round(detectionResults.eyeTracking.focusScore * 100)}%
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Gaze Direction:</span>
                  <span className="ml-2 font-medium capitalize">
                    {detectionResults.eyeTracking.gazeDirection}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Blink Rate:</span>
                  <span className="ml-2 font-medium">
                    {detectionResults.eyeTracking.blinkRate}/min
                  </span>
                </div>
              </div>
            </div>

            {/* Audio Analysis */}
            <div className="bg-white p-4 rounded-xl border border-purple-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">
                  Audio Analysis
                </span>
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    detectionResults.audioAnalysis.voiceDetection
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {detectionResults.audioAnalysis.voiceDetection
                    ? "Voice Detected"
                    : "Silent"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Background:</span>
                  <span className="ml-2 font-medium capitalize">
                    {detectionResults.audioAnalysis.backgroundNoise}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Clarity:</span>
                  <span className="ml-2 font-medium capitalize">
                    {detectionResults.audioAnalysis.clarity}
                  </span>
                </div>
              </div>
            </div>

            {/* Behavior Analysis */}
            <div className="bg-white p-4 rounded-xl border border-purple-100">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">
                  Behavior Analysis
                </span>
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    detectionResults.behaviorAnalysis.suspiciousActivity
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {detectionResults.behaviorAnalysis.suspiciousActivity
                    ? "Suspicious"
                    : "Normal"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Attention:</span>
                  <span className="ml-2 font-medium">
                    {Math.round(
                      detectionResults.behaviorAnalysis.attentionScore * 100
                    )}
                    %
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Movement:</span>
                  <span className="ml-2 font-medium capitalize">
                    {detectionResults.behaviorAnalysis.movementPattern}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent AI Alerts */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  AI Security Alerts
                </h3>
                <p className="text-gray-600">Recent detection events</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">
              {aiAlerts.length} alerts in last hour
            </span>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {aiAlerts.length > 0 ? (
              aiAlerts.slice(0, 10).map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-xl border-l-4 ${
                    alert.severity === "high"
                      ? "bg-red-50 border-red-500"
                      : alert.severity === "medium"
                      ? "bg-yellow-50 border-yellow-500"
                      : "bg-blue-50 border-blue-500"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          alert.severity === "high"
                            ? "bg-red-100 text-red-800"
                            : alert.severity === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {alert.severity.toUpperCase()}
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        {alert.type.replace("_", " ").toUpperCase()}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {alert.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{alert.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      Confidence: {Math.round(alert.confidence * 100)}%
                    </span>
                    <div className="flex space-x-2">
                      <button className="text-xs text-blue-600 hover:text-blue-800">
                        Investigate
                      </button>
                      <button className="text-xs text-green-600 hover:text-green-800">
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-medium text-gray-900 mb-1">All Clear</h4>
                <p className="text-gray-600 text-sm">
                  No security alerts detected
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* System Performance Monitor */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                System Performance
              </h3>
              <p className="text-gray-600">
                Real-time infrastructure monitoring
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Last updated</div>
            <div className="text-sm font-medium">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CPU Usage */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">CPU Usage</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">
                {systemInfo.performance.cpu}%
              </span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${systemInfo.performance.cpu}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-600 mt-2">
              {systemInfo.performance.cpu < 70
                ? "Optimal"
                : systemInfo.performance.cpu < 85
                ? "Moderate"
                : "High"}
            </div>
          </div>

          {/* Memory Usage */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <MemoryStick className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-900">Memory</span>
              </div>
              <span className="text-2xl font-bold text-purple-600">
                {systemInfo.performance.memory}%
              </span>
            </div>
            <div className="w-full bg-purple-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${systemInfo.performance.memory}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-600 mt-2">
              {systemInfo.performance.memory < 70
                ? "Optimal"
                : systemInfo.performance.memory < 85
                ? "Moderate"
                : "High"}
            </div>
          </div>

          {/* Storage Usage */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <HardDrive className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-gray-900">Storage</span>
              </div>
              <span className="text-2xl font-bold text-orange-600">
                {systemInfo.performance.disk}%
              </span>
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${systemInfo.performance.disk}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-600 mt-2">
              {systemInfo.performance.disk < 70
                ? "Optimal"
                : systemInfo.performance.disk < 85
                ? "Moderate"
                : "High"}
            </div>
          </div>

          {/* Network Status */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">Network</span>
              </div>
              <span className="text-lg font-bold text-green-600 capitalize">
                {systemInfo.network.type}
              </span>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              {systemInfo.network.speed}
            </div>
            <div className="text-xs text-gray-600">
              Connection: {systemInfo.network.strength}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showSessionDetails && selectedSession && (
        <SessionDetailsModal
          session={selectedSession}
          onClose={() => {
            setShowSessionDetails(false);
            setSelectedSession(null);
          }}
        />
      )}

      {showSettings && (
        <ProctoringSettingsModal
          settings={proctoringSettings}
          onSave={(newSettings) => {
            setProctoringSettings(newSettings);
            setShowSettings(false);
          }}
          onClose={() => setShowSettings(false)}
        />
      )}

      {showAnalytics && (
        <ProctoringAnalyticsModal
          sessions={activeSessionsData}
          metrics={realTimeMetrics}
          onClose={() => setShowAnalytics(false)}
        />
      )}

      {showBroadcastModal && (
        <BroadcastMessageModal
          selectedSessions={selectedSessions}
          sessions={activeSessionsData}
          onClose={() => setShowBroadcastModal(false)}
          onSend={(message) => {
            console.log(
              "Broadcasting message:",
              message,
              "to sessions:",
              selectedSessions
            );
            setShowBroadcastModal(false);
          }}
        />
      )}
    </div>
  );
}

// Enhanced Session Card Component
const EnhancedSessionCard = ({
  session,
  isSelected,
  onSelect,
  onViewDetails,
  getStatusColor,
  getConnectionIcon,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-6 border-2 rounded-2xl transition-all duration-200 cursor-pointer ${
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-lg"
          : "border-gray-200 hover:border-blue-300 hover:shadow-lg"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onViewDetails}
    >
      {/* Selection Checkbox */}
      <div className="absolute top-4 right-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      </div>

      {/* Status Indicator */}
      <div className="absolute top-4 left-4">
        <div
          className={`w-3 h-3 rounded-full ${
            session.status === "flagged"
              ? "bg-red-500"
              : session.status === "warning"
              ? "bg-yellow-500"
              : session.status === "attention"
              ? "bg-orange-500"
              : "bg-green-500"
          }`}
        ></div>
      </div>

      {/* Session Header */}
      <div className="mt-6 mb-4">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
            {session.candidateName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 line-clamp-1">
              {session.candidateName}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-1">
              {session.position}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{session.company}</span>
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
              session.status
            )}`}
          >
            {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium">{session.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${session.progress}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Question {session.currentQuestion} of {session.totalQuestions}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div
            className={`text-lg font-bold ${
              session.securityScore >= 80
                ? "text-green-600"
                : session.securityScore >= 60
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {session.securityScore}%
          </div>
          <div className="text-xs text-gray-600">Security Score</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div
            className={`text-lg font-bold ${
              session.alertCount === 0
                ? "text-green-600"
                : session.alertCount <= 2
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {session.alertCount}
          </div>
          <div className="text-xs text-gray-600">Alerts</div>
        </div>
      </div>

      {/* Session Info */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Duration:</span>
          <span className="font-medium">{session.duration} min</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Connection:</span>
          <div className="flex items-center space-x-1">
            {getConnectionIcon(session.connection)}
            <span className="font-medium capitalize">{session.connection}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Activity:</span>
          <span className="font-medium line-clamp-1">
            {session.lastActivity}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/5 rounded-2xl flex items-center justify-center space-x-2 transition-all duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
            className="px-4 py-2 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
          >
            <Eye className="w-4 h-4 mr-1 inline" />
            View Details
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle direct message
            }}
            className="px-4 py-2 bg-white text-green-600 rounded-lg shadow-lg hover:bg-green-50 transition-colors"
          >
            <MessageSquare className="w-4 h-4 mr-1 inline" />
            Message
          </button>
        </div>
      )}

      {/* AI Confidence Indicator */}
      {session.aiConfidenceScore && (
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center space-x-1 text-xs">
            <Zap className="w-3 h-3 text-purple-500" />
            <span className="text-purple-600 font-medium">
              {session.aiConfidenceScore}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Session List Item Component
const EnhancedSessionListItem = ({
  session,
  isSelected,
  onSelect,
  onViewDetails,
  getStatusColor,
  getConnectionIcon,
}) => {
  return (
    <div
      className={`p-6 border-2 rounded-xl transition-all duration-200 cursor-pointer ${
        isSelected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 hover:border-blue-300"
      }`}
      onClick={onViewDetails}
    >
      <div className="flex items-center space-x-6">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />

        {/* Status Indicator */}
        <div
          className={`w-4 h-4 rounded-full ${
            session.status === "flagged"
              ? "bg-red-500"
              : session.status === "warning"
              ? "bg-yellow-500"
              : session.status === "attention"
              ? "bg-orange-500"
              : "bg-green-500"
          }`}
        ></div>

        {/* Candidate Info */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {session.candidateName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {session.candidateName}
                </h3>
                <p className="text-sm text-gray-600">{session.company}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-900">
              {session.position}
            </div>
            <div className="text-xs text-gray-500">{session.location}</div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  style={{ width: `${session.progress}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium">{session.progress}%</span>
            </div>
          </div>

          <div className="text-center">
            <div
              className={`text-lg font-bold ${
                session.securityScore >= 80
                  ? "text-green-600"
                  : session.securityScore >= 60
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {session.securityScore}%
            </div>
            <div className="text-xs text-gray-600">Security</div>
          </div>

          <div className="text-center">
            <div
              className={`text-lg font-bold ${
                session.alertCount === 0
                  ? "text-green-600"
                  : session.alertCount <= 2
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {session.alertCount}
            </div>
            <div className="text-xs text-gray-600">Alerts</div>
          </div>

          <div className="text-center">
            <div className="text-sm font-medium text-gray-900">
              {session.duration} min
            </div>
            <div className="flex items-center justify-center space-x-1">
              {getConnectionIcon(session.connection)}
              <span className="text-xs text-gray-600 capitalize">
                {session.connection}
              </span>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails();
              }}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="View Details"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle message
              }}
              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              title="Send Message"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle more actions
              }}
              className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              title="More Actions"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Detailed Session Card Component
const DetailedSessionCard = ({
  session,
  isSelected,
  onSelect,
  onViewDetails,
  getStatusColor,
  getConnectionIcon,
}) => {
  const [expandedSection, setExpandedSection] = useState("overview");

  return (
    <div
      className={`border-2 rounded-2xl transition-all duration-200 ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white rounded-t-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={onSelect}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
              {session.candidateName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {session.candidateName}
              </h3>
              <p className="text-gray-600">
                {session.position} at {session.company}
              </p>
              <p className="text-sm text-gray-500">{session.location}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div
                className={`text-2xl font-bold ${
                  session.securityScore >= 80
                    ? "text-green-600"
                    : session.securityScore >= 60
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {session.securityScore}%
              </div>
              <div className="text-sm text-gray-600">Security Score</div>
            </div>

            <span
              className={`px-4 py-2 text-sm font-medium rounded-full border ${getStatusColor(
                session.status
              )}`}
            >
              {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
            </span>

            <button
              onClick={onViewDetails}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Eye className="w-5 h-5 mr-2 inline" />
              Full Details
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex space-x-6 px-6">
          {[
            { id: "overview", name: "Overview", icon: Monitor },
            { id: "behavior", name: "Behavior", icon: Activity },
            { id: "technical", name: "Technical", icon: Settings },
            { id: "violations", name: "Violations", icon: AlertTriangle },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setExpandedSection(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  expandedSection === tab.id
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
      <div className="p-6">
        {expandedSection === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Session Progress</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Questions Completed</span>
                    <span>
                      {session.currentQuestion}/{session.totalQuestions}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${session.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Duration: {session.duration} minutes
                </div>
                <div className="text-sm text-gray-600">
                  Started: {session.startTime.toLocaleTimeString()}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">
                Device Information
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Device:</span>
                  <span>{session.device}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Browser:</span>
                  <span>{session.browser}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Connection:</span>
                  <div className="flex items-center space-x-1">
                    {getConnectionIcon(session.connection)}
                    <span className="capitalize">{session.connection}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Monitoring Status</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Webcam:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      session.webcamStatus === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {session.webcamStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Microphone:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      session.micStatus === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {session.micStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Screen Share:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      session.screenShare
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {session.screenShare ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">AI Analysis</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Confidence:</span>
                  <span className="font-medium">
                    {session.aiConfidenceScore}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Biometric Match:</span>
                  <span className="font-medium">{session.biometricMatch}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Alerts:</span>
                  <span
                    className={`font-medium ${
                      session.alertCount === 0
                        ? "text-green-600"
                        : session.alertCount <= 2
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {session.alertCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedSection === "behavior" && session.behaviorMetrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Activity Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Keyboard Activity:</span>
                  <span className="font-medium">
                    {session.behaviorMetrics.keyboardActivity} kpm
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mouse Movement:</span>
                  <span className="font-medium capitalize">
                    {session.behaviorMetrics.mouseMovement}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Posture Changes:</span>
                  <span className="font-medium">
                    {session.behaviorMetrics.postureChanges}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">
                Facial Expression Analysis
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Concentration</span>
                    <span>
                      {session.behaviorMetrics.facialExpressions.concentration}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: `${session.behaviorMetrics.facialExpressions.concentration}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Stress Level</span>
                    <span>
                      {session.behaviorMetrics.facialExpressions.stress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{
                        width: `${session.behaviorMetrics.facialExpressions.stress}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Confusion</span>
                    <span>
                      {session.behaviorMetrics.facialExpressions.confusion}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{
                        width: `${session.behaviorMetrics.facialExpressions.confusion}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedSection === "technical" && session.technicalMetrics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">
                Network Performance
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Latency:</span>
                  <span
                    className={`font-medium ${
                      session.technicalMetrics.latency < 50
                        ? "text-green-600"
                        : session.technicalMetrics.latency < 100
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {session.technicalMetrics.latency}ms
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Bandwidth:</span>
                  <span className="font-medium">
                    {session.technicalMetrics.bandwidth} Mbps
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Packet Loss:</span>
                  <span
                    className={`font-medium ${
                      session.technicalMetrics.packetLoss < 1
                        ? "text-green-600"
                        : session.technicalMetrics.packetLoss < 3
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {session.technicalMetrics.packetLoss}%
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Video Quality</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Resolution:</span>
                  <span className="font-medium">
                    {session.technicalMetrics.resolution}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Frame Rate:</span>
                  <span
                    className={`font-medium ${
                      session.technicalMetrics.frameRate >= 30
                        ? "text-green-600"
                        : session.technicalMetrics.frameRate >= 20
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {session.technicalMetrics.frameRate} FPS
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Environmental</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lighting:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      session.environmentalFactors.lightingCondition ===
                      "optimal"
                        ? "bg-green-100 text-green-800"
                        : session.environmentalFactors.lightingCondition ===
                            "dim" ||
                          session.environmentalFactors.lightingCondition ===
                            "bright"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {session.environmentalFactors.lightingCondition}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Background Noise:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      session.environmentalFactors.backgroundNoise === "quiet"
                        ? "bg-green-100 text-green-800"
                        : session.environmentalFactors.backgroundNoise ===
                          "moderate"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {session.environmentalFactors.backgroundNoise}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Room Occupancy:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      session.environmentalFactors.roomOccupancy === "single"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {session.environmentalFactors.roomOccupancy}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {expandedSection === "violations" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900">
                Security Violations ({session.violations.length})
              </h4>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                  {
                    session.violations.filter((v) => v.severity === "high")
                      .length
                  }{" "}
                  High
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                  {
                    session.violations.filter((v) => v.severity === "medium")
                      .length
                  }{" "}
                  Medium
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {
                    session.violations.filter((v) => v.severity === "low")
                      .length
                  }{" "}
                  Low
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {session.violations.length > 0 ? (
                session.violations.map((violation) => (
                  <div
                    key={violation.id}
                    className={`p-4 rounded-xl border-l-4 ${
                      violation.severity === "high"
                        ? "bg-red-50 border-red-500"
                        : violation.severity === "medium"
                        ? "bg-yellow-50 border-yellow-500"
                        : "bg-blue-50 border-blue-500"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            violation.severity === "high"
                              ? "bg-red-100 text-red-800"
                              : violation.severity === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {violation.severity.toUpperCase()}
                        </span>
                        <span className="font-medium text-gray-900">
                          {violation.type
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            violation.resolved
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {violation.resolved ? "Resolved" : "Pending"}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {violation.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 mb-2">
                      AI Confidence: {violation.aiConfidence}%
                    </div>
                    <div className="flex space-x-2">
                      {!violation.resolved && (
                        <>
                          <button className="text-xs text-green-600 hover:text-green-800 px-2 py-1 bg-green-50 rounded">
                            Mark Resolved
                          </button>
                          <button className="text-xs text-blue-600 hover:text-blue-800 px-2 py-1 bg-blue-50 rounded">
                            Investigate
                          </button>
                        </>
                      )}
                      <button className="text-xs text-gray-600 hover:text-gray-800 px-2 py-1 bg-gray-50 rounded">
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <h4 className="font-medium text-gray-900 mb-1">
                    No Violations Detected
                  </h4>
                  <p className="text-gray-600 text-sm">
                    This session has maintained security standards
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Session Details Modal Component
const SessionDetailsModal = ({ session, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isRecordingPlayback, setIsRecordingPlayback] = useState(false);

  const tabs = [
    { id: "overview", name: "Overview", icon: Monitor },
    { id: "timeline", name: "Timeline", icon: Clock },
    { id: "recordings", name: "Recordings", icon: Video },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "reports", name: "Reports", icon: FileText },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl font-bold">
                {session.candidateName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h2 className="text-3xl font-bold">{session.candidateName}</h2>
                <p className="text-blue-100 text-lg">
                  {session.position} at {session.company}
                </p>
                <p className="text-blue-200 text-sm">{session.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-blue-200">Security Score</div>
                <div
                  className={`text-3xl font-bold ${
                    session.securityScore >= 80
                      ? "text-green-300"
                      : session.securityScore >= 60
                      ? "text-yellow-300"
                      : "text-red-300"
                  }`}
                >
                  {session.securityScore}%
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
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
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 max-h-[calc(95vh-200px)]">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Live Feed */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-black rounded-2xl p-4 aspect-video relative">
                  <div className="absolute inset-4 bg-gray-800 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">Live Camera Feed</p>
                      <p className="text-gray-400">Candidate Video Stream</p>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 flex space-x-2">
                    <span className="px-3 py-1 bg-red-500 text-white text-sm rounded-full flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      LIVE
                    </span>
                    <span className="px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                      1080p • 30fps
                    </span>
                  </div>
                </div>

                {/* Screen Share */}
                <div className="bg-gray-100 rounded-2xl p-4 aspect-video relative">
                  <div className="absolute inset-4 bg-white rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Monitor className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">Screen Share</p>
                      <p className="text-gray-400">Candidate Screen Activity</p>
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                      Screen Recording Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Real-time Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Real-time Statistics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Session Duration</span>
                      <span className="font-bold text-lg">
                        {session.duration} min
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-bold text-lg">
                        {session.progress}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Questions</span>
                      <span className="font-bold text-lg">
                        {session.currentQuestion}/{session.totalQuestions}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Alerts</span>
                      <span
                        className={`font-bold text-lg ${
                          session.alertCount === 0
                            ? "text-green-600"
                            : session.alertCount <= 2
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {session.alertCount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Eye Tracking */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Eye Tracking</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Focus Score</span>
                        <span>{session.eyeTracking?.focusTime || 85}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{
                            width: `${session.eyeTracking?.focusTime || 85}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Gaze Pattern:{" "}
                      {session.eyeTracking?.gazePattern || "Normal"}
                    </div>
                    <div className="text-sm text-gray-600">
                      Blink Rate: {session.eyeTracking?.blinkRate || 18}/min
                    </div>
                    <div className="text-sm text-gray-600">
                      Distractions: {session.eyeTracking?.distractionCount || 2}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                      <MessageSquare className="w-5 h-5 mr-2 inline" />
                      Send Message
                    </button>
                    <button className="w-full px-4 py-3 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition-colors">
                      <Flag className="w-5 h-5 mr-2 inline" />
                      Flag Session
                    </button>
                    <button className="w-full px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
                      <XCircle className="w-5 h-5 mr-2 inline" />
                      Terminate Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "timeline" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Session Timeline
              </h3>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

                <div className="space-y-6">
                  {[
                    {
                      time: "09:00:00",
                      event: "Session Started",
                      type: "info",
                      description: "Candidate joined the assessment",
                    },
                    {
                      time: "09:02:15",
                      event: "Identity Verified",
                      type: "success",
                      description: "Biometric verification successful",
                    },
                    {
                      time: "09:05:30",
                      event: "Started Question 1",
                      type: "info",
                      description:
                        "Multiple choice question - JavaScript fundamentals",
                    },
                    {
                      time: "09:12:45",
                      event: "Attention Alert",
                      type: "warning",
                      description:
                        "Candidate looked away from screen for 15 seconds",
                    },
                    {
                      time: "09:15:20",
                      event: "Question Completed",
                      type: "success",
                      description: "Question 1 answered correctly",
                    },
                    {
                      time: "09:16:00",
                      event: "Started Question 2",
                      type: "info",
                      description: "Coding challenge - Algorithm optimization",
                    },
                    {
                      time: "09:25:30",
                      event: "Voice Detected",
                      type: "warning",
                      description: "Unauthorized speech detected",
                    },
                    {
                      time: "09:30:15",
                      event: "Multiple Faces",
                      type: "error",
                      description: "Additional person detected in camera feed",
                    },
                  ].map((event, index) => (
                    <div
                      key={index}
                      className="relative flex items-start space-x-4"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                          event.type === "success"
                            ? "bg-green-100 text-green-600"
                            : event.type === "warning"
                            ? "bg-yellow-100 text-yellow-600"
                            : event.type === "error"
                            ? "bg-red-100 text-red-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {event.type === "success" && (
                          <CheckCircle className="w-4 h-4" />
                        )}
                        {event.type === "warning" && (
                          <AlertTriangle className="w-4 h-4" />
                        )}
                        {event.type === "error" && (
                          <XCircle className="w-4 h-4" />
                        )}
                        {event.type === "info" && <Info className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">
                            {event.event}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {event.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "recordings" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Session Recordings
                </h3>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download All
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4 mr-2 inline" />
                    Share
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Video Recording */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Video className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">
                        Video Recording
                      </h4>
                    </div>
                    <span className="text-sm text-gray-500">
                      {session.sessionRecording?.videoSize} MB
                    </span>
                  </div>

                  <div
                    className="bg-black rounded-xl aspect-video mb-4 relative cursor-pointer"
                    onClick={() => setIsRecordingPlayback(!isRecordingPlayback)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      {isRecordingPlayback ? (
                        <Pause className="w-12 h-12 text-white opacity-80" />
                      ) : (
                        <Play className="w-12 h-12 text-white opacity-80" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span>{session.duration} minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality:</span>
                      <span className="capitalize">
                        {session.sessionRecording?.recordingQuality}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span>MP4</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download Video
                  </button>
                </div>

                {/* Audio Recording */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Mic className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900">
                        Audio Recording
                      </h4>
                    </div>
                    <span className="text-sm text-gray-500">
                      {session.sessionRecording?.audioSize} MB
                    </span>
                  </div>

                  <div className="bg-green-50 rounded-xl p-8 mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <Headphones className="w-12 h-12 text-green-600 mx-auto mb-2" />
                      <p className="text-green-800 font-medium">Audio Track</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span>{session.duration} minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality:</span>
                      <span>High (44.1kHz)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span>WAV</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download Audio
                  </button>
                </div>

                {/* Screen Recording */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Monitor className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-gray-900">
                        Screen Recording
                      </h4>
                    </div>
                    <span className="text-sm text-gray-500">
                      {session.sessionRecording?.screenSize} MB
                    </span>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-8 mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <ScreenShare className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <p className="text-purple-800 font-medium">
                        Screen Capture
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span>{session.duration} minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Resolution:</span>
                      <span>1920x1080</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span>MP4</span>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                    <Download className="w-4 h-4 mr-2 inline" />
                    Download Screen
                  </button>
                </div>
              </div>

              {/* Recording Summary */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Recording Summary
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {session.sessionRecording?.totalSize} MB
                    </div>
                    <div className="text-sm text-gray-600">Total Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {session.sessionRecording?.compressionRatio}%
                    </div>
                    <div className="text-sm text-gray-600">Compression</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">File Count</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">✓</div>
                    <div className="text-sm text-gray-600">Integrity Check</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Session Analytics
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Performance Chart */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Performance Over Time
                  </h4>
                  <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                      <p>Performance Chart</p>
                      <p className="text-sm">
                        Chart visualization would be here
                      </p>
                    </div>
                  </div>
                </div>

                {/* Attention Heatmap */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Attention Heatmap
                  </h4>
                  <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Eye className="w-12 h-12 mx-auto mb-2" />
                      <p>Attention Heatmap</p>
                      <p className="text-sm">Gaze tracking visualization</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Cognitive Load
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Average Load</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-blue-800">
                      Peak load during coding challenges
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-semibold text-green-900 mb-3">
                    Engagement Level
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Engagement</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-green-800">
                      Highly engaged throughout session
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h4 className="font-semibold text-purple-900 mb-3">
                    Stress Indicators
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Stress Level</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: "28%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-purple-800">
                      Low stress, good composure
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Session Reports
                </h3>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  <Download className="w-5 h-5 mr-2 inline" />
                  Generate Full Report
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Security Report */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                    <h4 className="font-semibold text-gray-900">
                      Security Report
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">
                        Overall Security Score
                      </span>
                      <span
                        className={`text-xl font-bold ${
                          session.securityScore >= 80
                            ? "text-green-600"
                            : session.securityScore >= 60
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {session.securityScore}%
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Face Detection</span>
                        <span className="text-green-600">✓ Passed</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Identity Verification</span>
                        <span className="text-green-600">✓ Verified</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Environment Check</span>
                        <span className="text-yellow-600">⚠ Warnings</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Behavior Analysis</span>
                        <span className="text-green-600">✓ Normal</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
                    <FileText className="w-4 h-4 mr-2 inline" />
                    Download Security Report
                  </button>
                </div>

                {/* Performance Report */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">
                      Performance Report
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Overall Performance</span>
                      <span className="text-xl font-bold text-blue-600">
                        85%
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Question Accuracy</span>
                        <span className="text-green-600">88%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Time Management</span>
                        <span className="text-blue-600">82%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Technical Skills</span>
                        <span className="text-green-600">90%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Problem Solving</span>
                        <span className="text-blue-600">87%</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                    <FileText className="w-4 h-4 mr-2 inline" />
                    Download Performance Report
                  </button>
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Detailed Analysis
                </h4>

                <div className="prose max-w-none">
                  <h5 className="text-lg font-medium text-gray-900 mb-3">
                    Executive Summary
                  </h5>
                  <p className="text-gray-700 mb-4">
                    The candidate demonstrated strong technical competency
                    throughout the assessment with a security score of{" "}
                    {session.securityScore}%. The session was conducted under
                    controlled conditions with minimal security violations
                    detected.
                  </p>

                  <h5 className="text-lg font-medium text-gray-900 mb-3">
                    Key Findings
                  </h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      • Maintained consistent eye contact and attention
                      throughout the assessment
                    </li>
                    <li>
                      • Demonstrated excellent problem-solving methodology and
                      code structure
                    </li>
                    <li>
                      • Successfully completed {session.currentQuestion} out of{" "}
                      {session.totalQuestions} questions
                    </li>
                    <li>
                      • No evidence of unauthorized assistance or cheating
                      detected
                    </li>
                    <li>
                      • Technical setup and environment met all security
                      requirements
                    </li>
                  </ul>

                  <h5 className="text-lg font-medium text-gray-900 mb-3">
                    Recommendations
                  </h5>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      • Candidate is recommended for the next round of
                      interviews
                    </li>
                    <li>
                      • Strong technical foundation suitable for{" "}
                      {session.position} role
                    </li>
                    <li>
                      • Consider additional system design questions for senior
                      positions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Session ID: {session.id} • Started:{" "}
            {session.startTime.toLocaleString()}
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

// Proctoring Settings Modal Component
const ProctoringSettingsModal = ({ settings, onSave, onClose }) => {
  const [localSettings, setLocalSettings] = useState(settings);
  const [activeSection, setActiveSection] = useState("monitoring");

  const sections = [
    { id: "monitoring", name: "Monitoring", icon: Camera },
    { id: "detection", name: "AI Detection", icon: Zap },
    { id: "security", name: "Security", icon: Shield },
    { id: "notifications", name: "Notifications", icon: Bell },
    { id: "recording", name: "Recording", icon: Video },
    { id: "advanced", name: "Advanced", icon: Settings },
  ];

  const handleSettingChange = (key, value) => {
    setLocalSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onSave(localSettings);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Proctoring Settings
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200">
            <div className="p-4 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                      activeSection === section.id
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {activeSection === "monitoring" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Monitoring Settings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Face Detection
                      </h4>
                      <p className="text-sm text-gray-600">
                        Monitor candidate's face throughout the session
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.faceDetection}
                        onChange={(e) =>
                          handleSettingChange("faceDetection", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Voice Monitoring
                      </h4>
                      <p className="text-sm text-gray-600">
                        Detect unauthorized speech during assessment
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.voiceMonitoring}
                        onChange={(e) =>
                          handleSettingChange(
                            "voiceMonitoring",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Screen Sharing
                      </h4>
                      <p className="text-sm text-gray-600">
                        Record candidate's screen activity
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.screenSharing}
                        onChange={(e) =>
                          handleSettingChange("screenSharing", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Performance Monitoring
                      </h4>
                      <p className="text-sm text-gray-600">
                        Track system performance and connectivity
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.performanceMonitoring}
                        onChange={(e) =>
                          handleSettingChange(
                            "performanceMonitoring",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "detection" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  AI Detection Settings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">AI Analysis</h4>
                      <p className="text-sm text-gray-600">
                        Enable advanced AI-powered behavior analysis
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.aiAnalysis}
                        onChange={(e) =>
                          handleSettingChange("aiAnalysis", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Behavior Tracking
                      </h4>
                      <p className="text-sm text-gray-600">
                        Track suspicious behavior patterns
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.behaviorTracking}
                        onChange={(e) =>
                          handleSettingChange(
                            "behaviorTracking",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Detection Sensitivity
                      </h4>
                      <p className="text-sm text-gray-600">
                        Adjust AI detection sensitivity level
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Low</span>
                        <span>Medium</span>
                        <span>High</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="3"
                        defaultValue="2"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "security" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Security Settings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Auto-termination
                      </h4>
                      <p className="text-sm text-gray-600">
                        Automatically terminate sessions with high violation
                        scores
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.autoTermination}
                        onChange={(e) =>
                          handleSettingChange(
                            "autoTermination",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">Strict Mode</h4>
                      <p className="text-sm text-gray-600">
                        Enable enhanced security measures and stricter
                        monitoring
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.strictMode}
                        onChange={(e) =>
                          handleSettingChange("strictMode", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Security Threshold
                      </h4>
                      <p className="text-sm text-gray-600">
                        Set minimum security score for session continuation
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>30%</span>
                        <span>60%</span>
                        <span>90%</span>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="90"
                        defaultValue="60"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Alert Threshold
                      </h4>
                      <p className="text-sm text-gray-600">
                        Number of violations before triggering alerts
                      </p>
                    </div>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                      <option value="3">3 violations</option>
                      <option value="5">5 violations</option>
                      <option value="10">10 violations</option>
                      <option value="unlimited">Unlimited</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "notifications" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Notification Settings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">Auto Alerts</h4>
                      <p className="text-sm text-gray-600">
                        Automatically send alerts for security violations
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.autoAlerts}
                        onChange={(e) =>
                          handleSettingChange("autoAlerts", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Email Notifications
                      </h4>
                      <p className="text-sm text-gray-600">
                        Configure email alert preferences
                      </p>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">
                          High priority violations
                        </span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Session terminations</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Daily summary reports</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">
                          System performance alerts
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Notification Recipients
                      </h4>
                      <p className="text-sm text-gray-600">
                        Add email addresses for notifications
                      </p>
                    </div>
                    <div className="space-y-2">
                      <input
                        type="email"
                        placeholder="admin@company.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <button className="text-sm text-blue-600 hover:text-blue-800">
                        + Add another recipient
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "recording" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Recording Settings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Recording Sessions
                      </h4>
                      <p className="text-sm text-gray-600">
                        Record all proctoring sessions
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.recordingSessions}
                        onChange={(e) =>
                          handleSettingChange(
                            "recordingSessions",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Video Quality
                      </h4>
                      <p className="text-sm text-gray-600">
                        Set recording quality and compression
                      </p>
                    </div>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                      <option value="high">High Quality (1080p)</option>
                      <option value="medium">Medium Quality (720p)</option>
                      <option value="low">Low Quality (480p)</option>
                    </select>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Recording Components
                      </h4>
                      <p className="text-sm text-gray-600">
                        Select what to record during sessions
                      </p>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Webcam video</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Microphone audio</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Screen activity</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">System logs</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Storage Settings
                      </h4>
                      <p className="text-sm text-gray-600">
                        Configure recording storage and retention
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Retention Period
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                          <option value="30">30 days</option>
                          <option value="90">90 days</option>
                          <option value="365">1 year</option>
                          <option value="forever">Forever</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Storage Location
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                          <option value="local">Local Storage</option>
                          <option value="cloud">Cloud Storage</option>
                          <option value="hybrid">Hybrid</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "advanced" && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Advanced Settings
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Chat Enabled
                      </h4>
                      <p className="text-sm text-gray-600">
                        Allow proctors to chat with candidates
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localSettings.chatEnabled}
                        onChange={(e) =>
                          handleSettingChange("chatEnabled", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Browser Restrictions
                      </h4>
                      <p className="text-sm text-gray-600">
                        Configure browser-level security restrictions
                      </p>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Block tab switching</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Disable copy/paste</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Prevent right-click</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Block developer tools</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        Network Monitoring
                      </h4>
                      <p className="text-sm text-gray-600">
                        Monitor network activity during assessments
                      </p>
                    </div>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Track bandwidth usage</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">
                          Monitor connection stability
                        </span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600"
                        />
                        <span className="text-sm">Log network requests</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-xl">
                    <div className="mb-3">
                      <h4 className="font-medium text-gray-900">
                        API Integration
                      </h4>
                      <p className="text-sm text-gray-600">
                        Configure external API integrations
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Webhook URL
                        </label>
                        <input
                          type="url"
                          placeholder="https://api.example.com/webhook"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          API Key
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••••••••••"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Last updated: {new Date().toLocaleString()}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Proctoring Analytics Modal Component
const ProctoringAnalyticsModal = ({ sessions, metrics, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState("7d");

  const tabs = [
    { id: "overview", name: "Overview", icon: BarChart3 },
    { id: "security", name: "Security", icon: Shield },
    { id: "performance", name: "Performance", icon: TrendingUp },
    { id: "violations", name: "Violations", icon: AlertTriangle },
    { id: "trends", name: "Trends", icon: Activity },
  ];

  const generateAnalyticsData = () => {
    return {
      totalSessions: sessions.length,
      averageSecurityScore: Math.round(
        sessions.reduce((acc, s) => acc + s.securityScore, 0) / sessions.length
      ),
      totalViolations: sessions.reduce((acc, s) => acc + s.alertCount, 0),
      successfulSessions: sessions.filter((s) => s.securityScore >= 80).length,
      flaggedSessions: sessions.filter((s) => s.status === "flagged").length,
      averageDuration: Math.round(
        sessions.reduce((acc, s) => acc + s.duration, 0) / sessions.length
      ),
      mostCommonViolations: [
        { type: "Face Not Visible", count: 23, percentage: 35 },
        { type: "Multiple Faces", count: 18, percentage: 27 },
        { type: "Tab Switching", count: 15, percentage: 23 },
        { type: "Suspicious Audio", count: 10, percentage: 15 },
      ],
      hourlyActivity: Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        sessions: Math.floor(Math.random() * 10) + 1,
      })),
      securityTrends: Array.from({ length: 7 }, (_, i) => ({
        day: new Date(
          Date.now() - (6 - i) * 24 * 60 * 60 * 1000
        ).toLocaleDateString(),
        score: Math.round(Math.random() * 20 + 80),
      })),
    };
  };

  const analyticsData = generateAnalyticsData();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Proctoring Analytics</h2>
              <p className="text-purple-100 text-lg">
                Comprehensive insights and performance metrics
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:outline-none"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
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
                      ? "border-purple-500 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 max-h-[calc(95vh-200px)]">
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                    <span className="text-sm text-green-600 font-medium">
                      +12%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {analyticsData.totalSessions}
                  </div>
                  <div className="text-gray-600">Total Sessions</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                    <span className="text-sm text-green-600 font-medium">
                      +3%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {analyticsData.averageSecurityScore}%
                  </div>
                  <div className="text-gray-600">Avg Security Score</div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    <span className="text-sm text-red-600 font-medium">
                      -8%
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {analyticsData.totalViolations}
                  </div>
                  <div className="text-gray-600">Total Violations</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                    <span className="text-sm text-blue-600 font-medium">
                      avg
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {analyticsData.averageDuration}m
                  </div>
                  <div className="text-gray-600">Avg Duration</div>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Session Activity Chart */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Session Activity by Hour
                  </h3>
                  <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                      <p>Hourly Activity Chart</p>
                      <p className="text-sm">
                        Chart visualization would be here
                      </p>
                    </div>
                  </div>
                </div>

                {/* Security Trends Chart */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Security Score Trends
                  </h3>
                  <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                      <p>Security Trends Chart</p>
                      <p className="text-sm">
                        Line chart visualization would be here
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Session Status
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Successful</span>
                      <span className="text-green-600 font-medium">
                        {analyticsData.successfulSessions}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Flagged</span>
                      <span className="text-red-600 font-medium">
                        {analyticsData.flaggedSessions}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">In Progress</span>
                      <span className="text-blue-600 font-medium">
                        {sessions.filter((s) => s.status === "active").length}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    AI Detection
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Accuracy</span>
                      <span className="text-green-600 font-medium">94.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">False Positives</span>
                      <span className="text-yellow-600 font-medium">2.1%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Confidence</span>
                      <span className="text-blue-600 font-medium">87.3%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    System Health
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Uptime</span>
                      <span className="text-green-600 font-medium">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Response Time</span>
                      <span className="text-blue-600 font-medium">45ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Error Rate</span>
                      <span className="text-green-600 font-medium">0.02%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Security Analytics
              </h3>

              {/* Security Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6 text-center">
                  <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-red-600">
                    {analyticsData.flaggedSessions}
                  </div>
                  <div className="text-gray-600">Flagged Sessions</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 text-center">
                  <Flag className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-yellow-600">15</div>
                  <div className="text-gray-600">Under Review</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-600">
                    {analyticsData.successfulSessions}
                  </div>
                  <div className="text-gray-600">Clean Sessions</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600">
                    {analyticsData.averageSecurityScore}%
                  </div>
                  <div className="text-gray-600">Avg Security Score</div>
                </div>
              </div>

              {/* Violation Breakdown */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Most Common Violations
                </h3>
                <div className="space-y-4">
                  {analyticsData.mostCommonViolations.map(
                    (violation, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              index === 0
                                ? "bg-red-100"
                                : index === 1
                                ? "bg-orange-100"
                                : index === 2
                                ? "bg-yellow-100"
                                : "bg-gray-100"
                            }`}
                          >
                            <span className="font-bold text-lg">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {violation.type}
                            </div>
                            <div className="text-sm text-gray-600">
                              {violation.count} occurrences
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${
                                index === 0
                                  ? "bg-red-500"
                                  : index === 1
                                  ? "bg-orange-500"
                                  : index === 2
                                  ? "bg-yellow-500"
                                  : "bg-gray-500"
                              }`}
                              style={{ width: `${violation.percentage}%` }}
                            ></div>
                          </div>
                          <span className="font-medium text-gray-900 w-12 text-right">
                            {violation.percentage}%
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "performance" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Performance Analytics
              </h3>

              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Performance Analytics
                </h4>
                <p className="text-gray-600">
                  Detailed performance metrics and system health monitoring
                </p>
              </div>
            </div>
          )}

          {activeTab === "violations" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Violation Analytics
              </h3>

              <div className="text-center py-12">
                <AlertTriangle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Violation Analytics
                </h4>
                <p className="text-gray-600">
                  Comprehensive analysis of security violations and patterns
                </p>
              </div>
            </div>
          )}

          {activeTab === "trends" && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Trend Analysis
              </h3>

              <div className="text-center py-12">
                <Activity className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Trend Analysis
                </h4>
                <p className="text-gray-600">
                  Historical trends and predictive analytics for proctoring data
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200">
          <div className="text-sm text-gray-600">
            Generated on {new Date().toLocaleString()} •{" "}
            {analyticsData.totalSessions} sessions analyzed
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 mr-2 inline" />
              Export Report
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Broadcast Message Modal Component
const BroadcastMessageModal = ({
  selectedSessions,
  sessions,
  onClose,
  onSend,
}) => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");
  const [priority, setPriority] = useState("normal");

  const selectedSessionsData = sessions.filter((s) =>
    selectedSessions.includes(s.id)
  );

  const messageTypes = [
    { value: "info", label: "Information", icon: Info, color: "blue" },
    {
      value: "warning",
      label: "Warning",
      icon: AlertTriangle,
      color: "yellow",
    },
    { value: "critical", label: "Critical", icon: AlertCircle, color: "red" },
  ];

  const handleSend = () => {
    if (message.trim()) {
      onSend({
        message: message.trim(),
        type: messageType,
        priority,
        recipients: selectedSessions,
        timestamp: new Date().toISOString(),
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Broadcast Message
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            Send a message to {selectedSessions.length} selected sessions
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Recipients */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">
              Recipients ({selectedSessions.length})
            </h3>
            <div className="max-h-32 overflow-y-auto space-y-2">
              {selectedSessionsData.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    {session.candidateName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {session.candidateName}
                    </div>
                    <div className="text-sm text-gray-600">
                      {session.position}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Type */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Message Type</h3>
            <div className="grid grid-cols-3 gap-3">
              {messageTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.value}
                    onClick={() => setMessageType(type.value)}
                    className={`p-4 border-2 rounded-xl transition-colors ${
                      messageType === type.value
                        ? `border-${type.color}-500 bg-${type.color}-50`
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 mx-auto mb-2 ${
                        messageType === type.value
                          ? `text-${type.color}-600`
                          : "text-gray-400"
                      }`}
                    />
                    <div
                      className={`text-sm font-medium ${
                        messageType === type.value
                          ? `text-${type.color}-900`
                          : "text-gray-600"
                      }`}
                    >
                      {type.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Priority */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Priority</h3>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            >
              <option value="low">Low Priority</option>
              <option value="normal">Normal Priority</option>
              <option value="high">High Priority</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Message</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 resize-none"
            />
            <div className="text-sm text-gray-500 mt-2">
              {message.length}/500 characters
            </div>
          </div>

          {/* Preview */}
          {message && (
            <div className="p-4 bg-gray-50 rounded-xl">
              <h3 className="font-medium text-gray-900 mb-2">Preview</h3>
              <div
                className={`p-3 rounded-lg border-l-4 ${
                  messageType === "info"
                    ? "bg-blue-50 border-blue-500"
                    : messageType === "warning"
                    ? "bg-yellow-50 border-yellow-500"
                    : "bg-red-50 border-red-500"
                }`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  {messageTypes.find((t) => t.value === messageType) && (
                    <>
                      {React.createElement(
                        messageTypes.find((t) => t.value === messageType).icon,
                        {
                          className: `w-4 h-4 text-${
                            messageTypes.find((t) => t.value === messageType)
                              .color
                          }-600`,
                        }
                      )}
                      <span
                        className={`text-sm font-medium text-${
                          messageTypes.find((t) => t.value === messageType)
                            .color
                        }-900`}
                      >
                        {
                          messageTypes.find((t) => t.value === messageType)
                            .label
                        }
                      </span>
                    </>
                  )}
                  <span className="text-xs text-gray-500 capitalize">
                    • {priority} priority
                  </span>
                </div>
                <p className="text-sm text-gray-700">{message}</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t border-gray-200 rounded-b-3xl">
          <div className="text-sm text-gray-600">
            Message will be sent to {selectedSessions.length} recipients
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MessageSquare className="w-4 h-4 mr-2 inline" />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
