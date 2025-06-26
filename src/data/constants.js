export const INDUSTRIES = {
  technology: {
    name: "Technology",
    icon: "💻",
    description: "Software development, IT services, and technology companies",
    departments: {
      engineering: {
        name: "Engineering",
        skills: [
          "Programming",
          "System Design",
          "Problem Solving",
          "Algorithm Design",
          "Code Review",
        ],
      },
      product: {
        name: "Product Management",
        skills: [
          "Product Strategy",
          "Market Analysis",
          "User Research",
          "Roadmap Planning",
          "Stakeholder Management",
        ],
      },
      design: {
        name: "Design",
        skills: [
          "UI/UX Design",
          "User Research",
          "Prototyping",
          "Design Systems",
          "Visual Design",
        ],
      },
      data: {
        name: "Data Science",
        skills: [
          "Data Analysis",
          "Machine Learning",
          "Statistics",
          "Python",
          "SQL",
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
        skills: [
          "Patient Care",
          "Clinical Protocols",
          "Medical Knowledge",
          "Communication",
          "Emergency Response",
        ],
      },
      administration: {
        name: "Healthcare Administration",
        skills: [
          "Healthcare Management",
          "Regulatory Compliance",
          "Budget Management",
          "Policy Development",
          "Quality Assurance",
        ],
      },
      research: {
        name: "Medical Research",
        skills: [
          "Research Methodology",
          "Data Analysis",
          "Clinical Trials",
          "Scientific Writing",
          "Regulatory Affairs",
        ],
      },
    },
  },
  finance: {
    name: "Financial Services",
    icon: "🏦",
    description: "Banking, investment, insurance, and financial technology",
    departments: {
      investment: {
        name: "Investment Management",
        skills: [
          "Financial Analysis",
          "Portfolio Management",
          "Risk Assessment",
          "Market Research",
          "Investment Strategy",
        ],
      },
      banking: {
        name: "Banking Operations",
        skills: [
          "Credit Analysis",
          "Customer Service",
          "Regulatory Compliance",
          "Financial Products",
          "Risk Management",
        ],
      },
      fintech: {
        name: "Financial Technology",
        skills: [
          "Financial Modeling",
          "Technology Integration",
          "Product Development",
          "Data Analytics",
          "Compliance",
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
        skills: [
          "Curriculum Development",
          "Teaching Methods",
          "Assessment Design",
          "Educational Technology",
          "Student Engagement",
        ],
      },
      administration: {
        name: "Educational Administration",
        skills: [
          "Educational Leadership",
          "Budget Management",
          "Policy Development",
          "Staff Management",
          "Strategic Planning",
        ],
      },
      technology: {
        name: "Educational Technology",
        skills: [
          "Learning Management Systems",
          "Educational Software",
          "Digital Content",
          "Technology Integration",
          "User Experience",
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
        skills: [
          "Inventory Management",
          "Customer Service",
          "Sales Techniques",
          "Visual Merchandising",
          "Supply Chain",
        ],
      },
      ecommerce: {
        name: "E-commerce",
        skills: [
          "Digital Marketing",
          "Online Sales",
          "Customer Analytics",
          "Platform Management",
          "Conversion Optimization",
        ],
      },
      merchandising: {
        name: "Merchandising",
        skills: [
          "Product Selection",
          "Market Trends",
          "Pricing Strategy",
          "Vendor Relations",
          "Category Management",
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
        skills: [
          "Production Planning",
          "Quality Control",
          "Process Optimization",
          "Safety Management",
          "Equipment Maintenance",
        ],
      },
      quality: {
        name: "Quality Assurance",
        skills: [
          "Quality Standards",
          "Testing Procedures",
          "Compliance",
          "Process Improvement",
          "Documentation",
        ],
      },
      engineering: {
        name: "Manufacturing Engineering",
        skills: [
          "Process Engineering",
          "Automation",
          "Technical Design",
          "Problem Solving",
          "Project Management",
        ],
      },
    },
  },
};

export const QUESTION_TYPES = {
  "multiple-choice": {
    name: "Multiple Choice",
    description: "Single or multiple correct answers",
    timeAllocation: 2,
  },
  "case-study": {
    name: "Case Study",
    description: "Real-world scenario analysis",
    timeAllocation: 15,
  },
  coding: {
    name: "Coding Challenge",
    description: "Programming and technical skills",
    timeAllocation: 30,
  },
  video: {
    name: "Video Response",
    description: "Recorded video answers",
    timeAllocation: 5,
  },
  essay: {
    name: "Written Essay",
    description: "Long-form written responses",
    timeAllocation: 20,
  },
  simulation: {
    name: "Interactive Simulation",
    description: "Hands-on practical exercises",
    timeAllocation: 25,
  },
};

export const SKILL_CATEGORIES = {
  technical: {
    name: "Technical Skills",
    icon: "Settings",
    description: "Job-specific technical competencies",
  },
  cognitive: {
    name: "Cognitive Abilities",
    icon: "Brain",
    description: "Mental processes and reasoning",
  },
  behavioral: {
    name: "Behavioral Traits",
    icon: "Users",
    description: "Personality and work style",
  },
  domain: {
    name: "Domain Knowledge",
    icon: "GraduationCap",
    description: "Industry-specific expertise",
  },
  language: {
    name: "Language Skills",
    icon: "Globe",
    description: "Communication and language proficiency",
  },
  software: {
    name: "Software Proficiency",
    icon: "Monitor",
    description: "Specific software and tool expertise",
  },
};

export const generateQuestions = () => {
  const questions = [];
  let id = 1;

  // Generate questions for each industry and department
  Object.entries(INDUSTRIES).forEach(([industryKey, industry]) => {
    Object.entries(industry.departments).forEach(([deptKey, dept]) => {
      dept.skills.forEach((skill, skillIndex) => {
        // Generate multiple questions per skill
        for (let i = 0; i < 3; i++) {
          const questionTypes = Object.keys(QUESTION_TYPES);
          const randomType =
            questionTypes[Math.floor(Math.random() * questionTypes.length)];

          questions.push({
            id: id++,
            industry: industryKey,
            department: deptKey,
            skill: skill,
            type: randomType,
            difficulty: Math.floor(Math.random() * 10) + 1,
            question: generateQuestionText(skill, randomType, i + 1),
            options:
              randomType === "multiple-choice" ? generateOptions(skill) : null,
            correctAnswer:
              randomType === "multiple-choice"
                ? generateCorrectAnswer(skill)
                : null,
            scenario:
              randomType === "case-study" ? generateScenario(skill) : null,
            testCases:
              randomType === "coding" ? generateTestCases(skill) : null,
            timeAllocation:
              QUESTION_TYPES[randomType].timeAllocation +
              Math.floor(Math.random() * 5),
            qualityScore: Math.floor(Math.random() * 2) + 4, // 4-5 stars
            usageCount: Math.floor(Math.random() * 1000) + 50,
            expertNote: generateExpertNote(skill, randomType),
            lastUpdated: new Date(
              Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000
            ), // Random date within last 90 days
          });
        }
      });
    });
  });

  return questions;
};

const generateQuestionText = (skill, type, variant) => {
  const templates = {
    "multiple-choice": [
      `Which of the following best demonstrates proficiency in ${skill}?`,
      `What is the most important aspect of ${skill} in a professional environment?`,
      `How would you prioritize ${skill} tasks in a typical workday?`,
    ],
    "case-study": [
      `You are working on a project that requires extensive ${skill}. Describe your approach to a challenging scenario.`,
      `A client has expressed concerns about ${skill} implementation. How would you address their concerns?`,
      `Your team is struggling with ${skill} optimization. What steps would you take to improve the situation?`,
    ],
    coding: [
      `Implement a solution that demonstrates your ${skill} expertise.`,
      `Write code that efficiently handles ${skill} requirements.`,
      `Develop a ${skill} algorithm that scales with increasing data volume.`,
    ],
    video: [
      `Record a 3-minute explanation of how you would apply ${skill} in your daily work.`,
      `Demonstrate your understanding of ${skill} through a practical example.`,
      `Explain a challenging ${skill} problem you've solved and your approach.`,
    ],
    essay: [
      `Write a detailed analysis of best practices in ${skill}.`,
      `Discuss the evolution of ${skill} and its future implications.`,
      `Compare different approaches to ${skill} and recommend the most effective method.`,
    ],
    simulation: [
      `Complete this interactive ${skill} simulation to demonstrate your practical abilities.`,
      `Navigate through this ${skill} scenario and make appropriate decisions.`,
      `Use this virtual environment to showcase your ${skill} competencies.`,
    ],
  };

  return templates[type][variant - 1] || templates[type][0];
};

const generateOptions = (skill) => {
  const baseOptions = [
    `Comprehensive understanding and practical application of ${skill}`,
    `Basic knowledge with limited practical experience in ${skill}`,
    `Advanced expertise with teaching and mentoring capabilities in ${skill}`,
    `Intermediate skills with room for improvement in ${skill}`,
  ];

  return baseOptions.sort(() => Math.random() - 0.5); // Randomize order
};

const generateCorrectAnswer = (skill) => {
  return `Comprehensive understanding and practical application of ${skill}`;
};

const generateScenario = (skill) => {
  return `You are leading a cross-functional team working on a critical project that heavily relies on ${skill}. The project has tight deadlines, limited resources, and high stakeholder expectations. Your team includes members with varying levels of ${skill} expertise, and you need to ensure successful delivery while maintaining quality standards.`;
};

const generateTestCases = (skill) => {
  return [
    `Input: Basic ${skill} requirements | Expected Output: Optimized solution`,
    `Input: Complex ${skill} scenario | Expected Output: Scalable implementation`,
    `Input: Edge case handling | Expected Output: Robust error management`,
  ];
};

// ... (continuing from generateExpertNote function)

const generateExpertNote = (skill, type) => {
  const notes = {
    "multiple-choice": `Look for candidates who demonstrate not just theoretical knowledge of ${skill}, but also practical application and real-world experience. Pay attention to their reasoning process and ability to justify their choices.`,
    "case-study": `Evaluate the candidate's problem-solving approach, consideration of multiple factors, and ability to provide actionable solutions related to ${skill}. Look for structured thinking and practical feasibility.`,
    coding: `Focus on code quality, efficiency, and best practices in ${skill}. Consider not just the final solution but also the thought process, error handling, and scalability considerations.`,
    video: `Assess communication clarity, confidence level, and depth of understanding of ${skill}. Look for specific examples and practical insights that demonstrate real experience.`,
    essay: `Evaluate depth of analysis, critical thinking, and ability to articulate complex concepts related to ${skill}. Look for original insights and evidence-based reasoning.`,
    simulation: `Observe decision-making process, adaptability, and practical application of ${skill} in realistic scenarios. Pay attention to how they handle unexpected challenges.`,
  };

  return (
    notes[type] ||
    `Assess the candidate's overall competency and practical understanding of ${skill}.`
  );
};

// Assessment Templates
export const ASSESSMENT_TEMPLATES = {
  "software-engineer": {
    name: "Software Engineer Assessment",
    industry: "technology",
    department: "engineering",
    duration: 90,
    questionCount: 25,
    skillWeights: {
      Programming: 0.4,
      "System Design": 0.3,
      "Problem Solving": 0.2,
      "Code Review": 0.1,
    },
    passingScore: 70,
  },
  "product-manager": {
    name: "Product Manager Evaluation",
    industry: "technology",
    department: "product",
    duration: 120,
    questionCount: 30,
    skillWeights: {
      "Product Strategy": 0.35,
      "Market Analysis": 0.25,
      "User Research": 0.2,
      "Stakeholder Management": 0.2,
    },
    passingScore: 75,
  },
  "data-scientist": {
    name: "Data Scientist Challenge",
    industry: "technology",
    department: "data",
    duration: 150,
    questionCount: 35,
    skillWeights: {
      "Data Analysis": 0.3,
      "Machine Learning": 0.3,
      Statistics: 0.2,
      Python: 0.1,
      SQL: 0.1,
    },
    passingScore: 80,
  },
};

// Security incident types and severity levels
export const SECURITY_INCIDENTS = {
  "tab-switching": {
    name: "Tab Switching",
    severity: "medium",
    description: "Candidate attempted to switch browser tabs",
    autoFlag: true,
    actionRequired: "warning",
  },
  "multiple-people": {
    name: "Multiple People Detected",
    severity: "high",
    description: "AI detected multiple faces in video feed",
    autoFlag: true,
    actionRequired: "immediate_intervention",
  },
  "looking-away": {
    name: "Looking Away",
    severity: "low",
    description: "Candidate looked away from screen for extended period",
    autoFlag: false,
    actionRequired: "log_only",
  },
  "phone-usage": {
    name: "Phone Usage",
    severity: "high",
    description: "Mobile device detected in assessment area",
    autoFlag: true,
    actionRequired: "immediate_intervention",
  },
  "copy-paste": {
    name: "Copy/Paste Detected",
    severity: "medium",
    description: "Unauthorized copy/paste activity detected",
    autoFlag: true,
    actionRequired: "warning",
  },
  "screen-sharing": {
    name: "Screen Sharing",
    severity: "high",
    description: "Screen sharing software detected",
    autoFlag: true,
    actionRequired: "immediate_intervention",
  },
  "browser-extension": {
    name: "Unauthorized Browser Extension",
    severity: "medium",
    description: "Potentially harmful browser extension detected",
    autoFlag: true,
    actionRequired: "warning",
  },
  "network-anomaly": {
    name: "Network Anomaly",
    severity: "medium",
    description: "Unusual network activity detected",
    autoFlag: false,
    actionRequired: "monitor",
  },
};

// Performance benchmarks by industry
export const INDUSTRY_BENCHMARKS = {
  technology: {
    avgCompletionTime: 75,
    avgScore: 76.8,
    passRate: 68.2,
    topSkills: ["Programming", "Problem Solving", "System Design"],
  },
  healthcare: {
    avgCompletionTime: 85,
    avgScore: 78.4,
    passRate: 71.5,
    topSkills: ["Patient Care", "Medical Knowledge", "Communication"],
  },
  finance: {
    avgCompletionTime: 82,
    avgScore: 74.9,
    passRate: 66.8,
    topSkills: [
      "Financial Analysis",
      "Risk Assessment",
      "Regulatory Compliance",
    ],
  },
  education: {
    avgCompletionTime: 88,
    avgScore: 79.2,
    passRate: 73.1,
    topSkills: [
      "Teaching Methods",
      "Curriculum Development",
      "Student Engagement",
    ],
  },
  retail: {
    avgCompletionTime: 65,
    avgScore: 71.6,
    passRate: 64.3,
    topSkills: ["Customer Service", "Sales Techniques", "Inventory Management"],
  },
  manufacturing: {
    avgCompletionTime: 78,
    avgScore: 73.7,
    passRate: 67.9,
    topSkills: ["Production Planning", "Quality Control", "Safety Management"],
  },
};

// AI-powered insights and recommendations
export const AI_INSIGHTS = {
  recommendations: [
    {
      type: "skill_gap",
      priority: "high",
      message:
        "Consider adding more Problem Solving questions to better assess candidate capabilities",
      action: "Add 3-5 additional problem-solving scenarios",
    },
    {
      type: "time_optimization",
      priority: "medium",
      message:
        "Assessment duration could be reduced by 15% without impacting quality",
      action: "Review question time allocations and remove redundant items",
    },
    {
      type: "difficulty_balance",
      priority: "medium",
      message:
        "Question difficulty distribution is skewed toward intermediate level",
      action:
        "Add more beginner and expert level questions for better differentiation",
    },
    {
      type: "industry_alignment",
      priority: "low",
      message:
        "Questions align well with current industry standards and trends",
      action: "Continue current approach with minor updates",
    },
  ],
  predictions: {
    candidateSuccess: {
      highPerformers: 156,
      averagePerformers: 548,
      needsDevelopment: 188,
    },
    trendAnalysis: {
      growingSkills: ["AI/ML", "Cloud Computing", "Data Analysis"],
      decliningSkills: ["Legacy Systems", "Manual Processes"],
      emergingSkills: [
        "Quantum Computing",
        "Edge Computing",
        "Sustainable Technology",
      ],
    },
  },
};

// Default system settings
export const DEFAULT_SETTINGS = {
  assessment: {
    maxDuration: 180, // minutes
    autoSubmit: true,
    allowPause: false,
    randomizeQuestions: true,
    showProgress: true,
    questionTimer: false,
  },
  security: {
    webcamRequired: true,
    screenRecording: false,
    lockdownBrowser: false,
    plagiarismCheck: true,
    maxAttempts: 1,
    ipRestriction: false,
  },
  proctoring: {
    aiMonitoring: true,
    humanProctor: false,
    recordSession: true,
    flagSuspiciousActivity: true,
    realTimeAlerts: true,
  },
  results: {
    showResults: "after-completion",
    generateCertificate: false,
    candidateFeedback: true,
    detailedAnalytics: true,
    emailNotifications: true,
  },
};

// Notification templates
export const NOTIFICATION_TEMPLATES = {
  assessment_invite: {
    subject: "Assessment Invitation - {{position}} at {{company}}",
    template: `Dear {{candidateName}},

You have been invited to complete an assessment for the {{position}} position at {{company}}.

Assessment Details:
- Duration: {{duration}} minutes
- Questions: {{questionCount}}
- Due Date: {{dueDate}}

Please click the link below to begin your assessment:
{{assessmentLink}}

If you have any questions, please contact us at {{supportEmail}}.

Best regards,
{{recruiterName}}
{{company}} Recruitment Team`,
  },
  assessment_reminder: {
    subject: "Reminder: Complete Your Assessment for {{position}}",
    template: `Dear {{candidateName}},

This is a friendly reminder that your assessment for the {{position}} position is due in {{timeRemaining}}.

Assessment Link: {{assessmentLink}}

Please complete the assessment at your earliest convenience.

Best regards,
{{company}} Recruitment Team`,
  },
  assessment_completed: {
    subject: "Assessment Completed - Next Steps",
    template: `Dear {{candidateName}},

Thank you for completing the assessment for the {{position}} position.

Your submission has been received and our team will review your responses. We will contact you within {{reviewTime}} with the next steps.

{{#if showScore}}
Your Score: {{score}}%
{{/if}}

Thank you for your interest in joining {{company}}.

Best regards,
{{recruiterName}}`,
  },
};

// Export utility functions
export const getIndustrySkills = (industryKey) => {
  const industry = INDUSTRIES[industryKey];
  if (!industry) return [];

  return Object.values(industry.departments).flatMap((dept) => dept.skills);
};

export const getDifficultyLabel = (difficulty) => {
  if (difficulty <= 2) return "Beginner";
  if (difficulty <= 4) return "Basic";
  if (difficulty <= 6) return "Intermediate";
  if (difficulty <= 8) return "Advanced";
  return "Expert";
};

export const getSkillProficiencyLevel = (score) => {
  if (score >= 90) return "Expert";
  if (score >= 80) return "Advanced";
  if (score >= 70) return "Proficient";
  if (score >= 60) return "Competent";
  if (score >= 50) return "Developing";
  return "Novice";
};

export const calculateAssessmentComplexity = (questions) => {
  if (!questions || questions.length === 0) return "Low";

  const avgDifficulty =
    questions.reduce((sum, q) => sum + q.difficulty, 0) / questions.length;
  const totalTime = questions.reduce((sum, q) => sum + q.timeAllocation, 0);

  if (avgDifficulty >= 8 || totalTime >= 120) return "High";
  if (avgDifficulty >= 5 || totalTime >= 60) return "Medium";
  return "Low";
};

export const generateAssessmentId = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `ASS_${timestamp}_${random}`.toUpperCase();
};

export const formatDuration = (minutes) => {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) return `${hours}h`;
  return `${hours}h ${remainingMinutes}m`;
};

export const getTimeRemaining = (startTime, duration) => {
  const now = new Date();
  const endTime = new Date(startTime.getTime() + duration * 60000);
  const remaining = Math.max(0, endTime - now);
  return Math.floor(remaining / 60000); // minutes
};

export const isAssessmentExpired = (createdAt, validityDays = 7) => {
  const now = new Date();
  const expiryDate = new Date(
    createdAt.getTime() + validityDays * 24 * 60 * 60 * 1000
  );
  return now > expiryDate;
};

// Current date and time utilities
export const getCurrentDateTime = () => {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
};

export const getCurrentUser = () => {
  return "Mohamedelammari";
};

export const getFormattedDate = (date = new Date()) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
