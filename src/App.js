import React, { useState, useEffect } from "react";
import {
  BarChart3,
  FileText,
  Users,
  Video,
  Camera,
  Database,
  Settings,
  Menu,
  X,
  Home,
  Search,
  Bell,
  User,
  LogOut,
  Moon,
  Sun,
  Globe,
  Shield,
  Activity,
  TrendingUp,
} from "lucide-react";

// Import your components
import TestCreation from "./components/TestCreation";
import ContentManagement from "./components/ContentManagement";
import Analytics from "./components/Analytics";
import Interview from "./components/Interview";
import Proctoring from "./components/Proctoring";
import { getCurrentUser, getCurrentDateTime } from "./data/constants";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      message: "New assessment template available",
      timestamp: new Date(Date.now() - 5 * 60000),
      read: false,
    },
    {
      id: 2,
      type: "warning",
      message: "Security incident detected in session #1247",
      timestamp: new Date(Date.now() - 15 * 60000),
      read: false,
    },
    {
      id: 3,
      type: "success",
      message: "System backup completed successfully",
      timestamp: new Date(Date.now() - 30 * 60000),
      read: true,
    },
  ]);

  const [currentUser] = useState(getCurrentUser());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const navigation = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: Home,
      description: "Overview and quick actions",
    },
    {
      id: "test-creation",
      name: "Test Creation",
      icon: FileText,
      description: "Create and manage assessments",
    },
    {
      id: "content-management",
      name: "Content Hub",
      icon: Database,
      description: "Question bank and templates",
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: BarChart3,
      description: "Performance insights and reports",
    },
    {
      id: "interview",
      name: "Interview Studio",
      icon: Video,
      description: "Video interviews and collaboration",
    },
    {
      id: "proctoring",
      name: "Live Proctoring",
      icon: Camera,
      description: "Real-time monitoring and security",
    },
  ];

  const getActiveComponent = () => {
    switch (activeTab) {
      case "test-creation":
        return <TestCreation />;
      case "content-management":
        return <ContentManagement />;
      case "analytics":
        return <Analytics />;
      case "interview":
        return <Interview />;
      case "proctoring":
        return <Proctoring />;
      default:
        return <Dashboard />;
    }
  };

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {currentUser}! 👋
            </h1>
            <p className="text-gray-600 text-lg">
              {currentTime.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              •{" "}
              {currentTime.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Current Session</div>
            <div className="text-2xl font-bold text-indigo-600">
              {Math.floor(Math.random() * 50) + 10} Active
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Assessments Today
              </p>
              <p className="text-3xl font-bold text-gray-900">47</p>
              <p className="text-green-600 text-sm flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12% from yesterday
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Active Candidates
              </p>
              <p className="text-3xl font-bold text-gray-900">23</p>
              <p className="text-blue-600 text-sm flex items-center mt-1">
                <Activity className="w-4 h-4 mr-1" />
                Live sessions
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Avg Score</p>
              <p className="text-3xl font-bold text-gray-900">84.7%</p>
              <p className="text-green-600 text-sm flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +2.3% this week
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Security Score
              </p>
              <p className="text-3xl font-bold text-gray-900">98.1%</p>
              <p className="text-green-600 text-sm flex items-center mt-1">
                <Shield className="w-4 h-4 mr-1" />
                Excellent
              </p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {navigation.slice(1).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-left group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 group-hover:bg-blue-100 rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-900">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 group-hover:text-blue-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[
            {
              action: "Assessment created",
              details: "Software Engineer Technical Test",
              time: "2 minutes ago",
              type: "create",
            },
            {
              action: "Candidate completed",
              details: "John Doe - Product Manager Interview",
              time: "15 minutes ago",
              type: "complete",
            },
            {
              action: "Security alert",
              details: "Suspicious activity detected in session #1247",
              time: "1 hour ago",
              type: "alert",
            },
            {
              action: "Report generated",
              details: "Monthly Analytics Report",
              time: "3 hours ago",
              type: "report",
            },
          ].map((activity, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  activity.type === "create"
                    ? "bg-green-500"
                    : activity.type === "complete"
                    ? "bg-blue-500"
                    : activity.type === "alert"
                    ? "bg-red-500"
                    : "bg-purple-500"
                }`}
              ></div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.details}</p>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode
          ? "dark bg-gray-900"
          : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Brand */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  AssessmentAI
                </h1>
                <p className="text-xs text-gray-500">Enterprise Platform</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{currentUser}</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex-1 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
              <button className="flex-1 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              <button className="flex-1 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "lg:ml-72" : "ml-0"
        }`}
      >
        {/* Top Header */}
        <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search assessments, candidates, or questions..."
                    className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center text-sm text-gray-500">
                <Globe className="w-4 h-4 mr-1" />
                UTC {getCurrentDateTime()}
              </div>

              <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                {notifications.filter((n) => !n.read).length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications.filter((n) => !n.read).length}
                  </span>
                )}
              </button>

              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{getActiveComponent()}</main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
