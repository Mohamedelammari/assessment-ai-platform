import React, { useState, useEffect } from "react";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  ScreenShare,
  ScreenShareOff,
  Camera,
  Settings,
  Users,
  MessageSquare,
  Send,
  FileText,
  Clock,
  Calendar,
  User,
  Mail,
  MapPin,
  Building,
  Briefcase,
  Star,
  Award,
  TrendingUp,
  Activity,
  CheckCircle,
  X,
  Plus,
  Edit,
  Download,
  Upload,
  Search,
  Filter,
  Eye,
  EyeOff,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  Share2,
  Copy,
  Link,
  Bookmark,
  Flag,
  AlertTriangle,
  Info,
  Bell,
  RefreshCw,
  PlayCircle,
  PauseCircle,
  Square,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Grid,
  List,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Wifi,
  Battery,
  Signal,
  Bluetooth,
  Headphones,
  MousePointer,
  Keyboard,
  Command,
  Code,
  Terminal,
  Database,
  Server,
  Cloud,
  Lock,
  Key,
  Shield,
  UserCheck,
  Target,
  Zap,
  Lightbulb,
  Brain,
  Heart,
  Smile,
  Frown,
  ThumbsUp,
  ThumbsDown,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Home,
  Navigation,
  Compass,
  Map,
} from "lucide-react";

export default function Interview() {
  const [activeCall, setActiveCall] = useState(null);
  const [upcomingInterviews, setUpcomingInterviews] = useState([
    {
      id: 1,
      candidateName: "Sarah Johnson",
      candidateEmail: "sarah.johnson@email.com",
      position: "Senior React Developer",
      interviewDate: new Date(2025, 4, 27, 16, 0), // May 27, 2025 at 4:00 PM
      duration: 60,
      type: "technical",
      interviewer: "Mohamedelammari",
      status: "scheduled",
      candidateAvatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face&auto=format",
      location: "San Francisco, CA",
      experience: "5 years",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      notes:
        "Strong background in frontend development with excellent problem-solving skills",
      resumeUrl: "#",
      portfolioUrl: "https://sarahjohnson.dev",
      linkedinUrl: "https://linkedin.com/in/sarahjohnson",
      timezone: "PST",
      preparationMaterials: [
        "React coding challenge",
        "System design questions",
        "Behavioral questions",
      ],
    },
    {
      id: 2,
      candidateName: "Michael Chen",
      candidateEmail: "michael.chen@email.com",
      position: "Product Manager",
      interviewDate: new Date(2025, 4, 27, 18, 30), // May 27, 2025 at 6:30 PM
      duration: 45,
      type: "behavioral",
      interviewer: "Mohamedelammari",
      status: "scheduled",
      candidateAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
      location: "New York, NY",
      experience: "7 years",
      skills: ["Product Strategy", "Agile", "Data Analysis", "Leadership"],
      notes: "Experienced PM with strong analytical background",
      resumeUrl: "#",
      portfolioUrl: "https://michaelchen.com",
      linkedinUrl: "https://linkedin.com/in/michaelchen",
      timezone: "EST",
      preparationMaterials: [
        "Product case study",
        "Leadership scenarios",
        "Market analysis questions",
      ],
    },
    {
      id: 3,
      candidateName: "Emily Rodriguez",
      candidateEmail: "emily.rodriguez@email.com",
      position: "UX Designer",
      interviewDate: new Date(2025, 4, 28, 10, 0), // May 28, 2025 at 10:00 AM
      duration: 90,
      type: "portfolio-review",
      interviewer: "Mohamedelammari",
      status: "scheduled",
      candidateAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format",
      location: "Austin, TX",
      experience: "4 years",
      skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      notes: "Creative designer with strong user-centered design approach",
      resumeUrl: "#",
      portfolioUrl: "https://emilyrodriguez.design",
      linkedinUrl: "https://linkedin.com/in/emilyrodriguez",
      timezone: "CST",
      preparationMaterials: [
        "Portfolio presentation",
        "Design challenge",
        "User research discussion",
      ],
    },
  ]);

  const [completedInterviews, setCompletedInterviews] = useState([
    {
      id: 4,
      candidateName: "David Kim",
      candidateEmail: "david.kim@email.com",
      position: "DevOps Engineer",
      interviewDate: new Date(2025, 4, 26, 14, 0),
      duration: 75,
      type: "technical",
      interviewer: "Mohamedelammari",
      status: "completed",
      rating: 4.5,
      outcome: "recommended",
      candidateAvatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format",
      feedback:
        "Excellent technical knowledge and problem-solving abilities. Strong communication skills.",
      strengths: ["Technical expertise", "Communication", "Problem-solving"],
      improvements: ["Could improve on system design patterns"],
      nextSteps: "Move to final round with CTO",
      recordingUrl: "#",
      transcriptUrl: "#",
      notesUrl: "#",
    },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [callSettings, setCallSettings] = useState({
    video: true,
    audio: true,
    screenShare: false,
    recording: false,
    transcription: true,
    aiInsights: true,
    backgroundBlur: false,
    noiseReduction: true,
  });

  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showCandidateInfo, setShowCandidateInfo] = useState(true);
  const [showInterviewGuide, setShowInterviewGuide] = useState(false);
  const [viewMode, setViewMode] = useState("upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [showNotes, setShowNotes] = useState(false);
  const [interviewNotes, setInterviewNotes] = useState("");

  // Real-time clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const startCall = (interview) => {
    setActiveCall({
      ...interview,
      startTime: new Date(),
      participants: [
        {
          id: 1,
          name: "Mohamedelammari",
          role: "interviewer",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format",
          video: true,
          audio: true,
          status: "connected",
        },
        {
          id: 2,
          name: interview.candidateName,
          role: "candidate",
          avatar: interview.candidateAvatar,
          video: true,
          audio: true,
          status: "connected",
        },
      ],
    });

    // Initialize chat with welcome message
    setChatMessages([
      {
        id: 1,
        sender: "system",
        message: `Interview started with ${interview.candidateName}`,
        timestamp: new Date(),
        type: "system",
      },
    ]);
  };

  const endCall = () => {
    if (activeCall) {
      const duration = Math.round(
        (new Date() - activeCall.startTime) / 1000 / 60
      );

      // Move to completed interviews
      const completedInterview = {
        ...activeCall,
        status: "completed",
        actualDuration: duration,
        rating: null,
        outcome: "pending",
        feedback: "",
        recordingUrl: "#",
        transcriptUrl: "#",
      };

      setCompletedInterviews((prev) => [completedInterview, ...prev]);
      setUpcomingInterviews((prev) =>
        prev.filter((i) => i.id !== activeCall.id)
      );
    }

    setActiveCall(null);
    setChatMessages([]);
    setInterviewNotes("");
  };

  const toggleSetting = (setting) => {
    setCallSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        sender: "Mohamedelammari",
        message: newMessage,
        timestamp: new Date(),
        type: "user",
      };
      setChatMessages((prev) => [...prev, message]);
      setNewMessage("");
    }
  };

  const scheduleInterview = () => {
    // Mock function for scheduling new interview
    alert("Interview scheduling feature would open here");
  };

  const getInterviewTypeColor = (type) => {
    switch (type) {
      case "technical":
        return "bg-blue-100 text-blue-800";
      case "behavioral":
        return "bg-green-100 text-green-800";
      case "portfolio-review":
        return "bg-purple-100 text-purple-800";
      case "cultural-fit":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const isInterviewSoon = (date) => {
    const diffMinutes = (date - currentTime) / (1000 * 60);
    return diffMinutes > 0 && diffMinutes <= 15;
  };

  const filteredInterviews = upcomingInterviews.filter((interview) => {
    if (filterType !== "all" && interview.type !== filterType) return false;
    if (
      searchTerm &&
      !interview.candidateName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      !interview.position.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    return true;
  });

  const filteredCompletedInterviews = completedInterviews.filter(
    (interview) => {
      if (
        searchTerm &&
        !interview.candidateName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        !interview.position.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return false;
      return true;
    }
  );

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200/50">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                <Video className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Interview Studio
                </h1>
                <p className="text-gray-600 text-lg">
                  Conduct seamless video interviews with AI-powered insights
                </p>
              </div>
            </div>

            {/* Real-time Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">Today</p>
                    <p className="text-2xl font-bold">
                      {
                        upcomingInterviews.filter(
                          (i) =>
                            i.interviewDate.toDateString() ===
                            currentTime.toDateString()
                        ).length
                      }
                    </p>
                    <p className="text-blue-100 text-xs">Scheduled</p>
                  </div>
                  <Calendar className="w-8 h-8 text-blue-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">
                      Completed
                    </p>
                    <p className="text-2xl font-bold">
                      {completedInterviews.length}
                    </p>
                    <p className="text-green-100 text-xs">This week</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">
                      Avg Rating
                    </p>
                    <p className="text-2xl font-bold">
                      {completedInterviews.length > 0
                        ? (
                            completedInterviews.reduce(
                              (sum, i) => sum + (i.rating || 0),
                              0
                            ) / completedInterviews.length
                          ).toFixed(1)
                        : "N/A"}
                    </p>
                    <p className="text-purple-100 text-xs">Out of 5</p>
                  </div>
                  <Star className="w-8 h-8 text-purple-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm font-medium">Next</p>
                    <p className="text-2xl font-bold">
                      {upcomingInterviews.length > 0
                        ? Math.round(
                            (upcomingInterviews[0].interviewDate -
                              currentTime) /
                              (1000 * 60)
                          )
                        : "0"}
                    </p>
                    <p className="text-orange-100 text-xs">Minutes</p>
                  </div>
                  <Clock className="w-8 h-8 text-orange-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-indigo-100 text-sm font-medium">
                      Success Rate
                    </p>
                    <p className="text-2xl font-bold">
                      {completedInterviews.length > 0
                        ? Math.round(
                            (completedInterviews.filter(
                              (i) => i.outcome === "recommended"
                            ).length /
                              completedInterviews.length) *
                              100
                          )
                        : 0}
                      %
                    </p>
                    <p className="text-indigo-100 text-xs">Recommended</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-indigo-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-pink-100 text-sm font-medium">
                      Live Time
                    </p>
                    <p className="text-2xl font-bold">
                      {currentTime.toLocaleTimeString("en-US", {
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <p className="text-pink-100 text-xs">UTC</p>
                  </div>
                  <Activity className="w-8 h-8 text-pink-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 lg:mt-0 lg:ml-8">
            <button
              onClick={scheduleInterview}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              Schedule Interview
            </button>

            <button
              onClick={() => setShowInterviewGuide(!showInterviewGuide)}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Interview Guide
            </button>

            <button
              onClick={() => {
                // Download interview reports
                alert("Generating interview reports...");
              }}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Export Reports
            </button>
          </div>
        </div>
      </div>

      {/* Active Call Interface */}
      {activeCall && (
        <div className="fixed inset-0 bg-black z-50">
          {/* Call Header */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-md text-white p-6 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={activeCall.candidateAvatar}
                  alt={activeCall.candidateName}
                  className="w-12 h-12 rounded-full border-2 border-white/30"
                />
                <div>
                  <h2 className="text-xl font-bold">
                    {activeCall.candidateName}
                  </h2>
                  <p className="text-gray-300">{activeCall.position}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {Math.round(
                        (currentTime - activeCall.startTime) / 1000 / 60
                      )}{" "}
                      min
                    </span>
                    <span
                      className={`flex items-center ${
                        callSettings.recording
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          callSettings.recording
                            ? "bg-red-500 animate-pulse"
                            : "bg-gray-500"
                        }`}
                      ></div>
                      {callSettings.recording ? "REC" : "NOT RECORDING"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowNotes(!showNotes)}
                  className={`p-3 rounded-full transition-colors ${
                    showNotes
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                >
                  <FileText className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setShowCandidateInfo(!showCandidateInfo)}
                  className={`p-3 rounded-full transition-colors ${
                    showCandidateInfo
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                >
                  <User className="w-5 h-5" />
                </button>

                <button
                  onClick={endCall}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition-colors flex items-center"
                >
                  <PhoneOff className="w-5 h-5 mr-2" />
                  End Interview
                </button>
              </div>
            </div>
          </div>

          {/* Main Call Area */}
          <div className="flex h-full pt-24">
            {/* Video Grid */}
            <div className="flex-1 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                {/* Interviewer Video */}
                <div className="bg-gray-900 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="w-16 h-16" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Mohamedelammari
                      </h3>
                      <p className="text-gray-400">Interviewer</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="px-3 py-1 bg-black/50 rounded-full text-white text-sm">
                      You (Interviewer)
                    </div>
                    {!callSettings.video && (
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <VideoOff className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {!callSettings.audio && (
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <MicOff className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Candidate Video */}
                <div className="bg-gray-900 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-white">
                      <img
                        src={activeCall.candidateAvatar}
                        alt={activeCall.candidateName}
                        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white/20"
                      />
                      <h3 className="text-xl font-semibold mb-2">
                        {activeCall.candidateName}
                      </h3>
                      <p className="text-gray-400">Candidate</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="px-3 py-1 bg-black/50 rounded-full text-white text-sm">
                      {activeCall.candidateName}
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Call Controls */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-4 bg-black/80 backdrop-blur-md rounded-2xl p-4">
                  <button
                    onClick={() => toggleSetting("audio")}
                    className={`p-4 rounded-full transition-colors ${
                      callSettings.audio
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-red-600 hover:bg-red-700 text-white"
                    }`}
                    title={
                      callSettings.audio
                        ? "Mute Microphone"
                        : "Unmute Microphone"
                    }
                  >
                    {callSettings.audio ? (
                      <Mic className="w-6 h-6" />
                    ) : (
                      <MicOff className="w-6 h-6" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleSetting("video")}
                    className={`p-4 rounded-full transition-colors ${
                      callSettings.video
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-red-600 hover:bg-red-700 text-white"
                    }`}
                    title={
                      callSettings.video ? "Turn Off Camera" : "Turn On Camera"
                    }
                  >
                    {callSettings.video ? (
                      <Video className="w-6 h-6" />
                    ) : (
                      <VideoOff className="w-6 h-6" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleSetting("screenShare")}
                    className={`p-4 rounded-full transition-colors ${
                      callSettings.screenShare
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                    }`}
                    title={
                      callSettings.screenShare
                        ? "Stop Screen Share"
                        : "Share Screen"
                    }
                  >
                    {callSettings.screenShare ? (
                      <ScreenShareOff className="w-6 h-6" />
                    ) : (
                      <ScreenShare className="w-6 h-6" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleSetting("recording")}
                    className={`p-4 rounded-full transition-colors ${
                      callSettings.recording
                        ? "bg-red-600 hover:bg-red-700 text-white animate-pulse"
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                    }`}
                    title={
                      callSettings.recording
                        ? "Stop Recording"
                        : "Start Recording"
                    }
                  >
                    {callSettings.recording ? (
                      <Square className="w-6 h-6" />
                    ) : (
                      <Video className="w-6 h-6" />
                    )}
                  </button>

                  <div className="w-px h-8 bg-gray-600"></div>

                  <button
                    onClick={() => {
                      // Chat toggle
                      alert("Chat panel toggle");
                    }}
                    className="p-4 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors"
                    title="Toggle Chat"
                  >
                    <MessageSquare className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() => {
                      // Settings menu
                      alert("Call settings");
                    }}
                    className="p-4 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors"
                    title="Call Settings"
                  >
                    <Settings className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Panels */}
            <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
              {/* Panel Tabs */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setShowCandidateInfo(true)}
                  className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
                    showCandidateInfo
                      ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <User className="w-4 h-4 mr-2 inline" />
                  Candidate
                </button>
                <button
                  onClick={() => setShowNotes(true)}
                  className={`flex-1 py-4 px-6 text-sm font-medium transition-colors ${
                    showNotes
                      ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <FileText className="w-4 h-4 mr-2 inline" />
                  Notes
                </button>
              </div>

              {/* Candidate Info Panel */}
              {showCandidateInfo && (
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="text-center">
                      <img
                        src={activeCall.candidateAvatar}
                        alt={activeCall.candidateName}
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold text-gray-900">
                        {activeCall.candidateName}
                      </h3>
                      <p className="text-gray-600">{activeCall.position}</p>
                      <p className="text-sm text-gray-500">
                        {activeCall.candidateEmail}
                      </p>
                    </div>

                    {/* Experience & Location */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {activeCall.experience}
                        </div>
                        <div className="text-sm text-gray-600">Experience</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-gray-900">
                          {activeCall.timezone}
                        </div>
                        <div className="text-sm text-gray-600">Timezone</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeCall.skills?.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Pre-Interview Notes
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {activeCall.notes}
                      </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Quick Links
                      </h4>
                      <div className="space-y-2">
                        <a
                          href={activeCall.resumeUrl}
                          className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          View Resume
                        </a>
                        <a
                          href={activeCall.portfolioUrl}
                          className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Portfolio
                        </a>
                        <a
                          href={activeCall.linkedinUrl}
                          className="flex items-center text-sm text-blue-600 hover:text-blue-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Users className="w-4 h-4 mr-2" />
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    {/* Preparation Materials */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Interview Preparation
                      </h4>
                      <div className="space-y-2">
                        {activeCall.preparationMaterials?.map(
                          (material, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-gray-700"
                            >
                              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                              {material}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notes Panel */}
              {showNotes && (
                <div className="flex-1 flex flex-col p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Interview Notes
                  </h3>
                  <textarea
                    value={interviewNotes}
                    onChange={(e) => setInterviewNotes(e.target.value)}
                    placeholder="Take notes during the interview..."
                    className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 resize-none"
                  />

                  {/* Quick Note Templates */}
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700">
                      Quick Templates:
                    </h4>
                    {[
                      "Strong technical knowledge demonstrated",
                      "Excellent communication skills",
                      "Good problem-solving approach",
                      "Needs improvement in [area]",
                      "Cultural fit assessment: positive",
                      "Recommend for next round",
                    ].map((template, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setInterviewNotes((prev) =>
                            prev ? `${prev}\n• ${template}` : `• ${template}`
                          );
                        }}
                        className="block w-full text-left text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2 rounded transition-colors"
                      >
                        + {template}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      // Save notes
                      alert("Notes saved successfully!");
                    }}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Notes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Dashboard (when not in call) */}
      {!activeCall && (
        <>
          {/* Search and Filter Controls */}
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by candidate name or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors bg-white/80"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Type Filter */}
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 bg-white/80 min-w-[180px]"
              >
                <option value="all">All Interview Types</option>
                <option value="technical">Technical</option>
                <option value="behavioral">Behavioral</option>
                <option value="portfolio-review">Portfolio Review</option>
                <option value="cultural-fit">Cultural Fit</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden bg-white/80">
                <button
                  onClick={() => setViewMode("upcoming")}
                  className={`px-6 py-3 transition-colors ${
                    viewMode === "upcoming"
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setViewMode("completed")}
                  className={`px-6 py-3 transition-colors ${
                    viewMode === "completed"
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>

          {/* Upcoming Interviews */}
          {viewMode === "upcoming" && (
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-gray-200/50">
              <div className="p-6 border-b border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Upcoming Interviews
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Scheduled interviews and meetings
                    </p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium">
                    {filteredInterviews.length} interviews
                  </span>
                </div>
              </div>

              {filteredInterviews.length === 0 ? (
                <div className="text-center py-16">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No upcoming interviews
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Schedule your first interview to get started
                  </p>
                  <button
                    onClick={scheduleInterview}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Schedule Interview
                  </button>
                </div>
              ) : (
                <div className="p-6">
                  <div className="space-y-6">
                    {filteredInterviews
                      .sort((a, b) => a.interviewDate - b.interviewDate)
                      .map((interview) => (
                        <div
                          key={interview.id}
                          className={`p-6 border-2 rounded-2xl transition-all duration-200 hover:shadow-lg ${
                            isInterviewSoon(interview.interviewDate)
                              ? "border-orange-300 bg-orange-50"
                              : "border-gray-200 bg-white hover:border-indigo-300"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4 flex-1">
                              <img
                                src={interview.candidateAvatar}
                                alt={interview.candidateName}
                                className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200"
                              />

                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-xl font-bold text-gray-900">
                                    {interview.candidateName}
                                  </h3>
                                  <span
                                    className={`px-3 py-1 text-xs font-medium rounded-full ${getInterviewTypeColor(
                                      interview.type
                                    )}`}
                                  >
                                    {interview.type
                                      .replace("-", " ")
                                      .toUpperCase()}
                                  </span>
                                  {isInterviewSoon(interview.interviewDate) && (
                                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full animate-pulse">
                                      STARTING SOON
                                    </span>
                                  )}
                                </div>

                                <p className="text-lg text-gray-700 mb-3">
                                  {interview.position}
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                  <div className="flex items-center text-gray-600">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {interview.interviewDate.toLocaleDateString()}
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {interview.interviewDate.toLocaleTimeString(
                                      "en-US",
                                      { hour: "2-digit", minute: "2-digit" }
                                    )}
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <Users className="w-4 h-4 mr-2" />
                                    {interview.duration} minutes
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {interview.location}
                                  </div>
                                </div>

                                <div className="mt-4">
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {interview.notes}
                                  </p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                  {interview.skills
                                    ?.slice(0, 4)
                                    .map((skill, idx) => (
                                      <span
                                        key={idx}
                                        className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                                      >
                                        {skill}
                                      </span>
                                    ))}
                                  {interview.skills?.length > 4 && (
                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                      +{interview.skills.length - 4} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col items-end space-y-3 ml-6">
                              <div className="text-right">
                                <div className="text-lg font-bold text-indigo-600">
                                  {Math.round(
                                    (interview.interviewDate - currentTime) /
                                      (1000 * 60)
                                  )}{" "}
                                  min
                                </div>
                                <div className="text-sm text-gray-500">
                                  until start
                                </div>
                              </div>

                              <div className="flex space-x-2">
                                <button
                                  onClick={() => startCall(interview)}
                                  disabled={
                                    !isInterviewSoon(interview.interviewDate) &&
                                    interview.interviewDate > currentTime
                                  }
                                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    isInterviewSoon(interview.interviewDate) ||
                                    interview.interviewDate <= currentTime
                                      ? "bg-green-600 text-white hover:bg-green-700"
                                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                  }`}
                                >
                                  <Video className="w-4 h-4 mr-2 inline" />
                                  Start Interview
                                </button>

                                <button
                                  onClick={() => {
                                    // Reschedule interview
                                    alert(
                                      `Reschedule interview with ${interview.candidateName}`
                                    );
                                  }}
                                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>

                                <button
                                  onClick={() => {
                                    // Send reminder
                                    alert(
                                      `Reminder sent to ${interview.candidateName}`
                                    );
                                  }}
                                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                  <Bell className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Completed Interviews */}
          {viewMode === "completed" && (
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-gray-200/50">
              <div className="p-6 border-b border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Completed Interviews
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Interview history and feedback
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                    {filteredCompletedInterviews.length} completed
                  </span>
                </div>
              </div>

              {filteredCompletedInterviews.length === 0 ? (
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No completed interviews
                  </h3>
                  <p className="text-gray-600">
                    Completed interviews will appear here
                  </p>
                </div>
              ) : (
                <div className="p-6">
                  <div className="space-y-6">
                    {filteredCompletedInterviews
                      .sort((a, b) => b.interviewDate - a.interviewDate)
                      .map((interview) => (
                        <div
                          key={interview.id}
                          className="p-6 border-2 border-gray-200 bg-white rounded-2xl hover:border-green-300 hover:shadow-lg transition-all duration-200"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4 flex-1">
                              <img
                                src={interview.candidateAvatar}
                                alt={interview.candidateName}
                                className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200"
                              />

                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="text-xl font-bold text-gray-900">
                                    {interview.candidateName}
                                  </h3>
                                  <span
                                    className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                      interview.status
                                    )}`}
                                  >
                                    {interview.status.toUpperCase()}
                                  </span>
                                  {interview.outcome && (
                                    <span
                                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                                        interview.outcome === "recommended"
                                          ? "bg-green-100 text-green-800"
                                          : interview.outcome === "rejected"
                                          ? "bg-red-100 text-red-800"
                                          : "bg-yellow-100 text-yellow-800"
                                      }`}
                                    >
                                      {interview.outcome.toUpperCase()}
                                    </span>
                                  )}
                                </div>

                                <p className="text-lg text-gray-700 mb-3">
                                  {interview.position}
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                                  <div className="flex items-center text-gray-600">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {interview.interviewDate.toLocaleDateString()}
                                  </div>
                                  <div className="flex items-center text-gray-600">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {interview.actualDuration ||
                                      interview.duration}{" "}
                                    minutes
                                  </div>
                                  {interview.rating && (
                                    <div className="flex items-center text-gray-600">
                                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                                      {interview.rating}/5.0
                                    </div>
                                  )}
                                  <div className="flex items-center text-gray-600">
                                    <User className="w-4 h-4 mr-2" />
                                    {interview.interviewer}
                                  </div>
                                </div>

                                {interview.feedback && (
                                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                      Feedback
                                    </h4>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                      {interview.feedback}
                                    </p>
                                  </div>
                                )}

                                {interview.strengths &&
                                  interview.strengths.length > 0 && (
                                    <div className="mt-4">
                                      <h4 className="font-semibold text-gray-900 mb-2">
                                        Strengths
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {interview.strengths.map(
                                          (strength, idx) => (
                                            <span
                                              key={idx}
                                              className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                                            >
                                              {strength}
                                            </span>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  )}
                              </div>
                            </div>

                            <div className="flex flex-col items-end space-y-3 ml-6">
                              {interview.rating && (
                                <div className="text-right">
                                  <div className="flex items-center text-yellow-500 mb-1">
                                    {"★".repeat(Math.floor(interview.rating))}
                                    {"☆".repeat(
                                      5 - Math.floor(interview.rating)
                                    )}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    Overall Rating
                                  </div>
                                </div>
                              )}

                              <div className="flex space-x-2">
                                <button
                                  onClick={() => {
                                    // View detailed feedback
                                    alert(
                                      `View detailed feedback for ${interview.candidateName}`
                                    );
                                  }}
                                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-medium"
                                >
                                  <Eye className="w-4 h-4 mr-2 inline" />
                                  View Details
                                </button>

                                <button
                                  onClick={() => {
                                    // Download recording
                                    alert(
                                      `Download recording for ${interview.candidateName}`
                                    );
                                  }}
                                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                  <Download className="w-4 h-4" />
                                </button>

                                <button
                                  onClick={() => {
                                    // Share feedback
                                    alert(
                                      `Share feedback for ${interview.candidateName}`
                                    );
                                  }}
                                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                  <Share2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Interview Guide Modal */}
          {showInterviewGuide && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-gray-200 rounded-t-3xl">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Interview Guide & Best Practices
                    </h3>
                    <button
                      onClick={() => setShowInterviewGuide(false)}
                      className="p-2 text-gray-500 hover:text-gray-700 hover:bg-white rounded-xl transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-8">
                    {/* Pre-Interview Preparation */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
                        Pre-Interview Preparation
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <p className="text-gray-700">
                            Review candidate's resume, portfolio, and
                            application materials thoroughly
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <p className="text-gray-700">
                            Prepare role-specific questions based on job
                            requirements
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <p className="text-gray-700">
                            Set up a quiet, professional environment with good
                            lighting
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                          <p className="text-gray-700">
                            Test your audio/video equipment and internet
                            connection
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Interview Structure */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Clock className="w-6 h-6 mr-2 text-blue-600" />
                        Recommended Interview Structure
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-blue-50 rounded-xl">
                          <h5 className="font-semibold text-blue-900 mb-2">
                            Opening (5 min)
                          </h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Welcome & introductions</li>
                            <li>• Agenda overview</li>
                            <li>• Ice breaker question</li>
                          </ul>
                        </div>
                        // ... (continuing from the Interview Structure section
                        in the modal)
                        <div className="p-4 bg-green-50 rounded-xl">
                          <h5 className="font-semibold text-green-900 mb-2">
                            Experience (20 min)
                          </h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• Background questions</li>
                            <li>• Previous role discussions</li>
                            <li>• Achievement highlights</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-xl">
                          <h5 className="font-semibold text-purple-900 mb-2">
                            Technical (25 min)
                          </h5>
                          <ul className="text-sm text-purple-800 space-y-1">
                            <li>• Role-specific questions</li>
                            <li>• Problem-solving scenarios</li>
                            <li>• Skills demonstration</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-xl">
                          <h5 className="font-semibold text-orange-900 mb-2">
                            Closing (10 min)
                          </h5>
                          <ul className="text-sm text-orange-800 space-y-1">
                            <li>• Candidate questions</li>
                            <li>• Next steps explanation</li>
                            <li>• Thank you & follow-up</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Question Categories */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <MessageSquare className="w-6 h-6 mr-2 text-purple-600" />
                        Sample Questions by Category
                      </h4>

                      <div className="space-y-6">
                        <div className="p-6 border-2 border-blue-200 rounded-xl bg-blue-50">
                          <h5 className="font-semibold text-blue-900 mb-3">
                            Technical Questions
                          </h5>
                          <div className="space-y-2 text-sm text-blue-800">
                            <p>
                              • "Walk me through your approach to solving
                              [specific technical challenge]"
                            </p>
                            <p>
                              • "How would you optimize this code/process for
                              better performance?"
                            </p>
                            <p>
                              • "Explain a complex project you've worked on and
                              your role in it"
                            </p>
                            <p>
                              • "What technologies do you use to stay current in
                              your field?"
                            </p>
                          </div>
                        </div>

                        <div className="p-6 border-2 border-green-200 rounded-xl bg-green-50">
                          <h5 className="font-semibold text-green-900 mb-3">
                            Behavioral Questions
                          </h5>
                          <div className="space-y-2 text-sm text-green-800">
                            <p>
                              • "Tell me about a time when you faced a
                              significant challenge at work"
                            </p>
                            <p>
                              • "Describe a situation where you had to work with
                              a difficult team member"
                            </p>
                            <p>
                              • "Give an example of when you took initiative to
                              improve something"
                            </p>
                            <p>
                              • "How do you handle competing priorities and
                              tight deadlines?"
                            </p>
                          </div>
                        </div>

                        <div className="p-6 border-2 border-purple-200 rounded-xl bg-purple-50">
                          <h5 className="font-semibold text-purple-900 mb-3">
                            Cultural Fit Questions
                          </h5>
                          <div className="space-y-2 text-sm text-purple-800">
                            <p>
                              • "What type of work environment helps you be most
                              productive?"
                            </p>
                            <p>
                              • "How do you prefer to receive feedback and
                              recognition?"
                            </p>
                            <p>
                              • "What motivates you in your day-to-day work?"
                            </p>
                            <p>
                              • "Where do you see yourself professionally in the
                              next few years?"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Best Practices */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Star className="w-6 h-6 mr-2 text-yellow-600" />
                        Interview Best Practices
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-900 mb-3">
                            ✅ Do's
                          </h5>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>• Maintain eye contact and active listening</p>
                            <p>• Ask follow-up questions for clarity</p>
                            <p>• Take notes during the conversation</p>
                            <p>• Provide clear information about the role</p>
                            <p>• Allow time for candidate questions</p>
                            <p>• Be punctual and professional</p>
                            <p>• Focus on job-relevant topics</p>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-red-900 mb-3">
                            ❌ Don'ts
                          </h5>
                          <div className="space-y-2 text-sm text-gray-700">
                            <p>• Ask personal or discriminatory questions</p>
                            <p>• Interrupt or rush the candidate</p>
                            <p>• Make promises about outcomes</p>
                            <p>• Discuss salary unless authorized</p>
                            <p>• Show bias or make assumptions</p>
                            <p>• Use your phone during the interview</p>
                            <p>• Forget to explain next steps</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Evaluation Criteria */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Target className="w-6 h-6 mr-2 text-red-600" />
                        Evaluation Criteria
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-50 rounded-xl">
                          <h5 className="font-semibold text-gray-900 mb-2">
                            Technical Skills
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Required technical competencies</li>
                            <li>• Problem-solving approach</li>
                            <li>• Learning agility</li>
                            <li>• Industry knowledge</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl">
                          <h5 className="font-semibold text-gray-900 mb-2">
                            Soft Skills
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Communication effectiveness</li>
                            <li>• Team collaboration</li>
                            <li>• Leadership potential</li>
                            <li>• Adaptability</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl">
                          <h5 className="font-semibold text-gray-900 mb-2">
                            Cultural Fit
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Company values alignment</li>
                            <li>• Work style compatibility</li>
                            <li>• Growth mindset</li>
                            <li>• Team dynamics fit</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => setShowInterviewGuide(false)}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                    >
                      Got It, Thanks!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
