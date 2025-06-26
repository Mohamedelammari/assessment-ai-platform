import React, { useState, useEffect } from "react";
import {
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  Users,
  Award,
  Clock,
  Target,
  Activity,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  Eye,
  Star,
  CheckCircle,
  AlertTriangle,
  Info,
  Search,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  ArrowDown,
  Zap,
  Brain,
  Globe,
  Building,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  FileText,
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
  Settings,
  MoreHorizontal,
  X,
  Plus,
  Edit,
  Share2,
  Copy,
  Bookmark,
  Flag,
  Home,
  Navigation,
} from "lucide-react";

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("30d");
  const [selectedMetric, setSelectedMetric] = useState("overview");
  const [comparisonMode, setComparisonMode] = useState(false);
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [analyticsData, setAnalyticsData] = useState({
    totalAssessments: 1247,
    totalCandidates: 892,
    completionRate: 87.3,
    averageScore: 74.2,
    averageTime: 78,
    passRate: 68.5,
    topPerformers: 156,
    flaggedSessions: 23,
    industryBreakdown: {
      Technology: 425,
      Healthcare: 234,
      Finance: 198,
      Education: 167,
      Retail: 134,
      Manufacturing: 89,
    },
    monthlyTrends: [
      { month: "Jan", assessments: 89, candidates: 76, avgScore: 72.1 },
      { month: "Feb", assessments: 124, candidates: 98, avgScore: 73.8 },
      { month: "Mar", assessments: 156, candidates: 132, avgScore: 75.2 },
      { month: "Apr", assessments: 189, candidates: 165, avgScore: 74.9 },
      { month: "May", assessments: 234, candidates: 198, avgScore: 76.3 },
      { month: "Jun", assessments: 267, candidates: 223, avgScore: 77.1 },
    ],
    skillsAnalysis: {
      "Technical Skills": { tested: 678, avgScore: 76.8, improvement: 5.2 },
      Communication: { tested: 543, avgScore: 72.4, improvement: -2.1 },
      "Problem Solving": { tested: 489, avgScore: 78.9, improvement: 8.7 },
      Leadership: { tested: 356, avgScore: 71.2, improvement: 3.4 },
      Adaptability: { tested: 298, avgScore: 74.6, improvement: 1.9 },
    },
    positionAnalysis: {
      "Software Engineer": { count: 234, avgScore: 79.3, passRate: 72.4 },
      "Product Manager": { count: 167, avgScore: 76.8, passRate: 69.8 },
      "Data Scientist": { count: 145, avgScore: 81.2, passRate: 78.6 },
      "UX Designer": { count: 123, avgScore: 74.9, passRate: 65.9 },
      "DevOps Engineer": { count: 89, avgScore: 77.5, passRate: 71.9 },
      "Marketing Manager": { count: 78, avgScore: 73.1, passRate: 64.1 },
    },
    securityMetrics: {
      totalIncidents: 67,
      resolvedIncidents: 58,
      flaggedSessions: 23,
      securityScore: 94.2,
      commonViolations: [
        { type: "Tab Switching", count: 18, severity: "medium" },
        { type: "Multiple People", count: 12, severity: "high" },
        { type: "Looking Away", count: 15, severity: "low" },
        { type: "Phone Usage", count: 8, severity: "high" },
        { type: "Audio Issues", count: 14, severity: "low" },
      ],
    },
    performanceMetrics: {
      systemUptime: 99.7,
      avgLoadTime: 1.3,
      concurrentUsers: 45,
      dataProcessingTime: 0.8,
      errorRate: 0.02,
    },
  });

  const [realTimeStats, setRealTimeStats] = useState({
    activeAssessments: 12,
    activeCandidates: 8,
    completedToday: 23,
    avgScoreToday: 76.8,
    newRegistrations: 5,
    systemLoad: 67,
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeStats((prev) => ({
        ...prev,
        activeAssessments: Math.max(
          0,
          prev.activeAssessments + Math.floor(Math.random() * 3) - 1
        ),
        activeCandidates: Math.max(
          0,
          prev.activeCandidates + Math.floor(Math.random() * 3) - 1
        ),
        systemLoad: Math.max(
          20,
          Math.min(100, prev.systemLoad + Math.floor(Math.random() * 10) - 5)
        ),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getTimeRangeLabel = (range) => {
    switch (range) {
      case "7d":
        return "Last 7 Days";
      case "30d":
        return "Last 30 Days";
      case "90d":
        return "Last 90 Days";
      case "1y":
        return "Last Year";
      default:
        return "Last 30 Days";
    }
  };

  const getTrendIcon = (value) => {
    if (value > 0) return <ArrowUp className="w-4 h-4 text-green-500" />;
    if (value < 0) return <ArrowDown className="w-4 h-4 text-red-500" />;
    return <div className="w-4 h-4" />;
  };

  const getTrendColor = (value) => {
    if (value > 0) return "text-green-600";
    if (value < 0) return "text-red-600";
    return "text-gray-600";
  };

  const exportData = () => {
    const data = {
      exported_at: new Date().toISOString(),
      time_range: timeRange,
      analytics: analyticsData,
      real_time_stats: realTimeStats,
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `analytics_report_${Date.now()}.json`;
    link.click();
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Header with Real-time Dashboard */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-gray-200/50">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Analytics Center
                </h1>
                <p className="text-gray-600 text-lg">
                  Comprehensive insights and performance metrics
                </p>
              </div>
            </div>

            {/* Real-time Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium">
                      Live Now
                    </p>
                    <p className="text-2xl font-bold">
                      {realTimeStats.activeAssessments}
                    </p>
                    <p className="text-blue-100 text-xs">Active tests</p>
                  </div>
                  <Activity className="w-8 h-8 text-blue-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium">
                      Candidates
                    </p>
                    <p className="text-2xl font-bold">
                      {realTimeStats.activeCandidates}
                    </p>
                    <p className="text-green-100 text-xs">Online now</p>
                  </div>
                  <Users className="w-8 h-8 text-green-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium">
                      Completed
                    </p>
                    <p className="text-2xl font-bold">
                      {realTimeStats.completedToday}
                    </p>
                    <p className="text-purple-100 text-xs">Today</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-purple-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm font-medium">
                      Avg Score
                    </p>
                    <p className="text-2xl font-bold">
                      {realTimeStats.avgScoreToday}
                    </p>
                    <p className="text-orange-100 text-xs">Today</p>
                  </div>
                  <Target className="w-8 h-8 text-orange-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-indigo-100 text-sm font-medium">
                      New Users
                    </p>
                    <p className="text-2xl font-bold">
                      {realTimeStats.newRegistrations}
                    </p>
                    <p className="text-indigo-100 text-xs">Today</p>
                  </div>
                  <Star className="w-8 h-8 text-indigo-200" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-pink-100 text-sm font-medium">
                      System Load
                    </p>
                    <p className="text-2xl font-bold">
                      {realTimeStats.systemLoad}%
                    </p>
                    <p className="text-pink-100 text-xs">Current</p>
                  </div>
                  <Monitor className="w-8 h-8 text-pink-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 lg:mt-0 lg:ml-8">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-3 border-2 border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors bg-white min-w-[140px]"
            >
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
              <option value="1y">Last Year</option>
            </select>

            <button
              onClick={() => setComparisonMode(!comparisonMode)}
              className={`px-6 py-3 rounded-xl font-semibold transition-colors ${
                comparisonMode
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <TrendingUp className="w-5 h-5 mr-2 inline" />
              Compare
            </button>

            <button
              onClick={exportData}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              <Download className="w-5 h-5 mr-2 inline" />
              Export
            </button>

            <button
              onClick={() => {
                // Refresh data
                window.location.reload();
              }}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="w-5 h-5 mr-2 inline" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="flex items-center text-green-600 text-sm font-medium">
              {getTrendIcon(8.3)}
              8.3%
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-gray-900">
              {analyticsData.totalCandidates.toLocaleString()}
            </p>
            <p className="text-gray-600 font-medium">Total Candidates</p>
            <p className="text-sm text-gray-500">Assessment participants</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <span className="flex items-center text-green-600 text-sm font-medium">
              {getTrendIcon(3.7)}
              3.7%
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-gray-900">
              {analyticsData.completionRate}%
            </p>
            <p className="text-gray-600 font-medium">Completion Rate</p>
            <p className="text-sm text-gray-500">
              Successfully finished assessments
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <span className="flex items-center text-green-600 text-sm font-medium">
              {getTrendIcon(2.1)}
              2.1%
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-gray-900">
              {analyticsData.averageScore}%
            </p>
            <p className="text-gray-600 font-medium">Average Score</p>
            <p className="text-sm text-gray-500">Overall performance metric</p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <span className="flex items-center text-red-600 text-sm font-medium">
              {getTrendIcon(-1.2)}
              1.2%
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-gray-900">
              {analyticsData.averageTime} min
            </p>
            <p className="text-gray-600 font-medium">Average Duration</p>
            <p className="text-sm text-gray-500">
              Time to complete assessments
            </p>
          </div>
        </div>
      </div>

      {/* Charts and Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends Chart */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Monthly Trends</h3>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {analyticsData.monthlyTrends.map((month, idx) => (
              <div
                key={month.month}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 font-bold">
                      {month.month}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {month.assessments} Assessments
                    </p>
                    <p className="text-sm text-gray-600">
                      {month.candidates} Candidates
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    {month.avgScore}%
                  </p>
                  <p className="text-sm text-gray-500">Avg Score</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Breakdown */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Industry Distribution
            </h3>
            <button
              onClick={() => setShowDetailedView(!showDetailedView)}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              {showDetailedView ? "Show Less" : "View Details"}
            </button>
          </div>

          <div className="space-y-4">
            {Object.entries(analyticsData.industryBreakdown)
              .sort(([, a], [, b]) => b - a)
              .map(([industry, count], idx) => {
                const percentage =
                  (count / analyticsData.totalAssessments) * 100;
                const colors = [
                  "bg-blue-500",
                  "bg-green-500",
                  "bg-purple-500",
                  "bg-orange-500",
                  "bg-red-500",
                  "bg-indigo-500",
                ];

                return (
                  <div key={industry} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">
                        {industry}
                      </span>
                      <span className="text-sm text-gray-600">
                        {count} ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          colors[idx % colors.length]
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>

                    {showDetailedView && (
                      <div className="pl-4 text-sm text-gray-600">
                        <p>
                          • Average Score:{" "}
                          {(70 + Math.random() * 15).toFixed(1)}%
                        </p>
                        <p>
                          • Completion Rate:{" "}
                          {(80 + Math.random() * 15).toFixed(1)}%
                        </p>
                        <p>
                          • Top Skill:{" "}
                          {
                            ["Technical", "Communication", "Leadership"][
                              Math.floor(Math.random() * 3)
                            ]
                          }
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Skills Analysis */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            Skills Performance Analysis
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              Based on {getTimeRangeLabel(timeRange)}
            </span>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {Object.entries(analyticsData.skillsAnalysis).map(([skill, data]) => (
            <div
              key={skill}
              className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-blue-600" />
                </div>
                <span
                  className={`flex items-center text-sm font-medium ${getTrendColor(
                    data.improvement
                  )}`}
                >
                  {getTrendIcon(data.improvement)}
                  {Math.abs(data.improvement).toFixed(1)}%
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-sm">{skill}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tested:</span>
                    <span className="font-medium">{data.tested}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg Score:</span>
                    <span className="font-medium">{data.avgScore}%</span>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${(data.avgScore / 100) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Position Analysis */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            Position Performance Breakdown
          </h3>
          <button
            onClick={() => {
              // Toggle detailed position analysis
              alert("Detailed position analysis view");
            }}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-medium"
          >
            <Eye className="w-4 h-4 mr-2 inline" />
            Detailed View
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-xl">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Position
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Candidates
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Avg Score
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Pass Rate
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Performance
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Object.entries(analyticsData.positionAnalysis)
                .sort(([, a], [, b]) => b.count - a.count)
                .map(([position, data], idx) => (
                  <tr
                    key={position}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
                          <Briefcase className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {position}
                          </div>
                          <div className="text-sm text-gray-500">
                            Rank #{idx + 1}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-lg font-bold text-gray-900">
                        {data.count}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="text-lg font-bold text-gray-900 mr-2">
                          {data.avgScore}%
                        </span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-blue-500 rounded-full"
                            style={{ width: `${data.avgScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          data.passRate > 70
                            ? "bg-green-100 text-green-800"
                            : data.passRate > 60
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {data.passRate}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(data.avgScore / 20)
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security & System Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Metrics */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Security Overview
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">Secure</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">
                  {analyticsData.securityMetrics.securityScore}%
                </div>
                <div className="text-sm text-green-700">Security Score</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">
                  {analyticsData.securityMetrics.resolvedIncidents}
                </div>
                <div className="text-sm text-blue-700">Resolved Issues</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Common Security Events
              </h4>
              <div className="space-y-2">
                {analyticsData.securityMetrics.commonViolations.map(
                  (violation, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full mr-3 ${
                            violation.severity === "high"
                              ? "bg-red-500"
                              : violation.severity === "medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }`}
                        ></div>
                        <span className="font-medium text-gray-900">
                          {violation.type}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {violation.count} cases
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* System Performance */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-gray-200/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              System Performance
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-600 font-medium">
                Optimal
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">
                  {analyticsData.performanceMetrics.systemUptime}%
                </div>
                <div className="text-sm text-blue-700">System Uptime</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">
                  {analyticsData.performanceMetrics.avgLoadTime}s
                </div>
                <div className="text-sm text-green-700">Avg Load Time</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Concurrent Users</span>
                  <span className="font-medium">
                    {analyticsData.performanceMetrics.concurrentUsers}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{
                      width: `${
                        (analyticsData.performanceMetrics.concurrentUsers /
                          100) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Data Processing Time</span>
                  <span className="font-medium">
                    {analyticsData.performanceMetrics.dataProcessingTime}s
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 bg-green-500 rounded-full"
                    style={{
                      width: `${
                        (1 -
                          analyticsData.performanceMetrics.dataProcessingTime /
                            5) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Error Rate</span>
                  <span className="font-medium">
                    {analyticsData.performanceMetrics.errorRate}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 bg-red-500 rounded-full"
                    style={{
                      width: `${
                        analyticsData.performanceMetrics.errorRate * 50
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Analytics Footer */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border-2 border-blue-200">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Advanced Analytics & AI Insights
          </h3>
          <p className="text-gray-600">
            Powered by machine learning and predictive analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Predictive Scoring
            </h4>
            <p className="text-sm text-gray-600">
              AI-powered candidate success prediction based on assessment
              patterns
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Trend Analysis</h4>
            <p className="text-sm text-gray-600">
              Advanced pattern recognition to identify hiring trends and
              opportunities
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Recommendation Engine
            </h4>
            <p className="text-sm text-gray-600">
              Intelligent suggestions for improving assessment effectiveness
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => {
              alert("Advanced Analytics Pro features coming soon!");
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Zap className="w-5 h-5 mr-2 inline" />
            Unlock Pro Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
