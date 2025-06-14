import type { FeaturedProject } from "@/lib/types"

// Transform coder projects into featured projects with enhanced details
export const featuredProjects: FeaturedProject[] = [
  {
    id: "proj-1",
    name: "Spirited Away Dashboard",
    description: "Full-stack admin dashboard with magical animations and Studio Ghibli-inspired design.",
    longDescription:
      "A comprehensive admin dashboard that brings the magic of Studio Ghibli to data visualization. Features real-time data updates, interactive charts, and smooth animations that make managing complex data feel like an adventure. Built with modern React patterns and optimized for performance, this dashboard handles thousands of data points while maintaining buttery-smooth 60fps animations.",
    tech: ["React", "Node.js", "TypeScript", "Framer Motion", "D3.js", "PostgreSQL", "Redis"],
    category: "Web Application",
    duration: "3 months",
    role: "Lead Developer",
    teamSize: "Solo project",
    outcome: "Increased user engagement by 150% and reduced bounce rate by 40%",
    metrics: [
      "150% increase in user engagement",
      "40% reduction in bounce rate",
      "60fps smooth animations",
      "99.9% uptime",
    ],
    images: [
      "/project-images/spirited-dashboard-1.png",
      "/project-images/spirited-dashboard-2.png",
      "/project-images/spirited-dashboard-3.png",
    ],
    liveUrl: "https://spirited-dashboard.demo.com",
    githubUrl: "https://github.com/miyazaki-coder/spirited-dashboard",
    featured: true,
    createdAt: "2024-01-15",
    coderId: "1",
    coderName: "Miyazaki Coder",
    coderAvatar: "/images/miyazaki_coder.jpeg",
    coderVibe: "Whimsical Studio Ghibli",
    coderRating: 4.9,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-purple-200",
      titleText: "text-purple-700",
      descText: "text-purple-600",
      badgeBg: "bg-purple-100",
      badgeText: "text-purple-700",
      primaryButton: "bg-purple-600 hover:bg-purple-700 text-white",
      accentColor: "purple",
      pattern: "bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.1)_0%,transparent_40%)]",
    },
  },
  {
    id: "proj-2",
    name: "Cyberpunk Chat App",
    description: "Real-time messaging app with neon UI, custom themes, and end-to-end encryption.",
    longDescription:
      "A cutting-edge messaging application that brings cyberpunk aesthetics to secure communication. Features include real-time messaging with WebSocket connections, end-to-end encryption for privacy, custom neon themes, group chat functionality, and file sharing capabilities. The app handles thousands of concurrent users while maintaining sub-100ms message delivery times.",
    tech: ["React Native", "Node.js", "Socket.io", "MongoDB", "Expo", "WebRTC", "Crypto-JS"],
    category: "Mobile Application",
    duration: "4 months",
    role: "Lead Mobile Developer",
    teamSize: "4 person team",
    outcome: "50k+ downloads and 4.8 App Store rating",
    metrics: ["50k+ downloads", "4.8/5 App Store rating", "Sub-100ms message delivery", "99.5% message delivery rate"],
    images: [
      "/project-images/cyberpunk-chat-1.png",
      "/project-images/cyberpunk-chat-2.png",
      "/project-images/cyberpunk-chat-3.png",
    ],
    liveUrl: "https://apps.apple.com/cyberpunk-chat",
    githubUrl: "https://github.com/neonsynth/cyberpunk-chat",
    featured: true,
    createdAt: "2024-02-01",
    coderId: "2",
    coderName: "Neon Synthwave",
    coderAvatar: "/images/neon_synthwave.jpeg",
    coderVibe: "Cyberpunk Retro",
    coderRating: 4.8,
    coderStatus: "Busy",
    theme: {
      cardBg: "bg-white",
      border: "border-green-200",
      titleText: "text-green-700",
      descText: "text-green-600",
      badgeBg: "bg-green-100",
      badgeText: "text-green-700",
      primaryButton: "bg-green-600 hover:bg-green-700 text-white",
      accentColor: "green",
      pattern: "bg-[linear-gradient(45deg,rgba(34,197,94,0.05)_25%,transparent_25%)]",
    },
  },
  {
    id: "proj-3",
    name: "Celestial E-commerce",
    description: "Full-stack e-commerce platform with real-time inventory and cosmic-themed UI.",
    longDescription:
      "A mystical e-commerce platform that transforms online shopping into a cosmic journey. Features include real-time inventory management, secure payment processing with Stripe, personalized product recommendations, and a stunning cosmic-themed interface. The platform handles high-traffic loads with advanced caching strategies and provides detailed analytics for store owners.",
    tech: ["Next.js", "Node.js", "MongoDB", "GraphQL", "Stripe", "Redis", "AWS S3"],
    category: "E-commerce Platform",
    duration: "6 months",
    role: "Full-Stack Architect",
    teamSize: "5 person team",
    outcome: "Increased conversion rate by 85% and reduced cart abandonment by 50%",
    metrics: [
      "85% increase in conversion rate",
      "50% reduction in cart abandonment",
      "$2M+ in transactions",
      "Sub-2s page load times",
    ],
    images: [
      "/project-images/celestial-ecommerce-1.png",
      "/project-images/celestial-ecommerce-2.png",
      "/project-images/celestial-ecommerce-3.png",
    ],
    liveUrl: "https://celestial-store.demo.com",
    caseStudyUrl: "https://luna-codes.space/case-studies/celestial-ecommerce",
    featured: true,
    createdAt: "2023-12-10",
    coderId: "3",
    coderName: "Luna Starweaver",
    coderAvatar: "/images/luna_starweaver.jpeg",
    coderVibe: "Celestial Mystical",
    coderRating: 4.9,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-indigo-200",
      titleText: "text-indigo-700",
      descText: "text-indigo-600",
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-700",
      primaryButton: "bg-indigo-600 hover:bg-indigo-700 text-white",
      accentColor: "indigo",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-4",
    name: "Pixel Quest RPG",
    description: "Retro-style mobile RPG with modern architecture and engaging gameplay.",
    longDescription:
      "A nostalgic mobile RPG that combines classic 16-bit aesthetics with modern game development techniques. Features include turn-based combat system, branching narrative with multiple endings, character progression, inventory management, and beautiful pixel art animations. Built with React Native for cross-platform compatibility and includes cloud save functionality.",
    tech: ["React Native", "Node.js", "Redux", "Firebase", "Aseprite", "Unity Audio"],
    category: "Mobile Game",
    duration: "7 months",
    role: "Lead Developer",
    teamSize: "3 person team",
    outcome: "100k+ downloads and featured in Google Play Indie Corner",
    metrics: ["100k+ downloads", "Featured in Google Play", "4.7/5 user rating", "85% completion rate"],
    images: [
      "/project-images/pixel-quest-1.png",
      "/project-images/pixel-quest-2.png",
      "/project-images/pixel-quest-3.png",
    ],
    liveUrl: "https://play.google.com/pixel-quest-rpg",
    featured: true,
    createdAt: "2023-10-20",
    coderId: "4",
    coderName: "Retro Phoenix",
    coderAvatar: "/images/retro_phoenix.jpeg",
    coderVibe: "80s Arcade Nostalgia",
    coderRating: 4.7,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-pink-200",
      titleText: "text-pink-700",
      descText: "text-pink-600",
      badgeBg: "bg-pink-100",
      badgeText: "text-pink-700",
      primaryButton: "bg-pink-600 hover:bg-pink-700 text-white",
      accentColor: "pink",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-5",
    name: "Tidal Music Platform",
    description: "Music streaming platform with fluid animations and high-fidelity audio.",
    longDescription:
      "An immersive music streaming platform that flows like ocean waves. Features include high-fidelity audio streaming, personalized playlist generation using machine learning, social music sharing, artist discovery algorithms, and stunning fluid animations. The platform supports millions of tracks with advanced audio processing and real-time lyrics synchronization.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Framer Motion", "Web Audio API", "TensorFlow.js"],
    category: "Streaming Platform",
    duration: "5 months",
    role: "Full-Stack Developer",
    teamSize: "4 person team",
    outcome: "Launched with 15k+ subscribers in first month",
    metrics: ["15k+ subscribers in month 1", "99.9% audio uptime", "Sub-3s track loading", "4.6/5 user rating"],
    images: [
      "/project-images/tidal-music-1.png",
      "/project-images/tidal-music-2.png",
      "/project-images/tidal-music-3.png",
    ],
    liveUrl: "https://tidal-music.demo.com",
    featured: true,
    createdAt: "2023-11-15",
    coderId: "5",
    coderName: "Ocean Dreamer",
    coderAvatar: "/images/ocean_dreamer.jpeg",
    coderVibe: "Aquatic Serenity",
    coderRating: 4.9,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-blue-200",
      titleText: "text-blue-700",
      descText: "text-blue-600",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
      primaryButton: "bg-blue-600 hover:bg-blue-700 text-white",
      accentColor: "blue",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-6",
    name: "EcoTracker Mobile",
    description: "Sustainability tracking app with natural design and community features.",
    longDescription:
      "A comprehensive sustainability tracking application that helps users monitor and reduce their environmental impact. Features include carbon footprint calculation, eco-friendly product recommendations, community challenges, progress visualization, and integration with IoT devices. The app uses machine learning to provide personalized sustainability tips and connects users with local environmental initiatives.",
    tech: ["React Native", "Node.js", "MongoDB", "GraphQL", "Expo", "TensorFlow Lite", "Mapbox"],
    category: "Lifestyle App",
    duration: "4 months",
    role: "Lead Developer",
    teamSize: "2 person team",
    outcome: "30k+ downloads and 4.7 star rating",
    metrics: ["30k+ downloads", "4.7/5 star rating", "65% daily active users", "Featured in Earth Day collection"],
    images: [
      "/project-images/ecotracker-1.png",
      "/project-images/ecotracker-2.png",
      "/project-images/ecotracker-3.png",
    ],
    liveUrl: "https://apps.apple.com/ecotracker",
    featured: true,
    createdAt: "2023-09-05",
    coderId: "6",
    coderName: "Forest Sage",
    coderAvatar: "/images/forest_sage.jpeg",
    coderVibe: "Natural Earthy",
    coderRating: 4.8,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-emerald-200",
      titleText: "text-emerald-700",
      descText: "text-emerald-600",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-700",
      primaryButton: "bg-emerald-600 hover:bg-emerald-700 text-white",
      accentColor: "emerald",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-7",
    name: "Brew Journal",
    description: "Minimalist coffee tracking app with discovery and review features.",
    longDescription:
      "A beautifully crafted coffee tracking application for enthusiasts and professionals. Features include detailed brew logging with extraction parameters, coffee bean database with origin information, brewing method guides, taste note tracking, and social sharing capabilities. The app connects coffee lovers with local roasters and provides personalized brewing recommendations based on taste preferences.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel", "Stripe", "Mapbox"],
    category: "Lifestyle App",
    duration: "3 months",
    role: "Full-Stack Developer",
    teamSize: "Solo project",
    outcome: "Featured in coffee community blogs and 5k+ active users",
    metrics: ["5k+ active users", "Featured in 12 coffee blogs", "4.8/5 user rating", "2k+ coffee reviews logged"],
    images: [
      "/project-images/brew-journal-1.png",
      "/project-images/brew-journal-2.png",
      "/project-images/brew-journal-3.png",
    ],
    liveUrl: "https://brew-journal.demo.com",
    githubUrl: "https://github.com/minimalcoder/brew-journal",
    featured: false,
    createdAt: "2023-08-10",
    coderId: "7",
    coderName: "Café Minimalist",
    coderAvatar: "/images/cafe_minimalist.jpeg",
    coderVibe: "Cozy Coffee Shop",
    coderRating: 4.9,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-amber-200",
      titleText: "text-amber-700",
      descText: "text-amber-600",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-700",
      primaryButton: "bg-amber-600 hover:bg-amber-700 text-white",
      accentColor: "amber",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1)_0%,transparent_50%)]",
    },
  },
  // NEW PROJECTS
  {
    id: "proj-8",
    name: "Quantum Finance Dashboard",
    description: "Advanced financial analytics platform with quantum-inspired algorithms and real-time market data.",
    longDescription:
      "A revolutionary financial analytics platform that leverages quantum-inspired algorithms for market prediction and portfolio optimization. Features include real-time market data visualization, advanced risk assessment tools, automated trading strategies, and comprehensive portfolio management. The platform processes millions of data points per second and provides institutional-grade analytics for retail investors.",
    tech: ["React", "Python", "TensorFlow", "WebSocket", "Redis", "PostgreSQL", "D3.js", "Docker"],
    category: "Financial Platform",
    duration: "8 months",
    role: "Lead Architect",
    teamSize: "6 person team",
    outcome: "Achieved 23% better returns than market average and $50M+ assets under management",
    metrics: ["23% above market returns", "$50M+ AUM", "Sub-50ms data latency", "99.99% uptime"],
    images: [
      "/project-images/quantum-finance-1.png",
      "/project-images/quantum-finance-2.png",
      "/project-images/quantum-finance-3.png",
    ],
    liveUrl: "https://quantum-finance.demo.com",
    featured: true,
    createdAt: "2024-03-01",
    coderId: "8",
    coderName: "Quantum Coder",
    coderAvatar: "",
    coderVibe: "Futuristic Quantum",
    coderRating: 4.9,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-violet-200",
      titleText: "text-violet-700",
      descText: "text-violet-600",
      badgeBg: "bg-violet-100",
      badgeText: "text-violet-700",
      primaryButton: "bg-violet-600 hover:bg-violet-700 text-white",
      accentColor: "violet",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-9",
    name: "Carbon Tracker Pro",
    description: "Enterprise sustainability platform with AI-powered carbon footprint analysis and reporting.",
    longDescription:
      "A comprehensive enterprise sustainability platform that helps organizations track, analyze, and reduce their carbon footprint. Features include AI-powered emissions analysis, automated ESG reporting, supply chain carbon tracking, and predictive sustainability modeling. The platform integrates with existing enterprise systems and provides actionable insights for achieving net-zero goals.",
    tech: ["Vue.js", "Node.js", "Python", "TensorFlow", "PostgreSQL", "Kubernetes", "AWS", "Tableau"],
    category: "Enterprise Platform",
    duration: "10 months",
    role: "Sustainability Tech Lead",
    teamSize: "8 person team",
    outcome: "Helped 200+ companies reduce emissions by 35% and achieve carbon neutrality",
    metrics: [
      "200+ enterprise clients",
      "35% average emission reduction",
      "ISO 14001 certified",
      "Carbon neutral operations",
    ],
    images: [
      "/project-images/carbon-tracker-1.png",
      "/project-images/carbon-tracker-2.png",
      "/project-images/carbon-tracker-3.png",
    ],
    liveUrl: "https://carbon-tracker-pro.demo.com",
    featured: true,
    createdAt: "2024-01-20",
    coderId: "9",
    coderName: "Eco Tech Developer",
    coderAvatar: "",
    coderVibe: "Sustainable Green Tech",
    coderRating: 4.8,
    coderStatus: "Busy",
    theme: {
      cardBg: "bg-white",
      border: "border-green-200",
      titleText: "text-green-700",
      descText: "text-green-600",
      badgeBg: "bg-green-100",
      badgeText: "text-green-700",
      primaryButton: "bg-green-600 hover:bg-green-700 text-white",
      accentColor: "green",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-10",
    name: "Accessible Learning Hub",
    description: "Inclusive e-learning platform with advanced accessibility features and adaptive learning paths.",
    longDescription:
      "An innovative e-learning platform designed with accessibility at its core. Features include screen reader optimization, voice navigation, adaptive learning algorithms, multi-sensory content delivery, and personalized accessibility profiles. The platform supports learners with diverse abilities and provides comprehensive analytics for educators to track inclusive learning outcomes.",
    tech: ["React", "Node.js", "MongoDB", "WebRTC", "Speech API", "TensorFlow", "ARIA", "WCAG 2.1"],
    category: "Education Platform",
    duration: "7 months",
    role: "Accessibility Lead Developer",
    teamSize: "5 person team",
    outcome: "Achieved WCAG 2.1 AAA compliance and improved learning outcomes by 45% for students with disabilities",
    metrics: ["WCAG 2.1 AAA compliant", "45% improved outcomes", "10k+ diverse learners", "98% accessibility score"],
    images: [
      "/project-images/accessible-learning-1.png",
      "/project-images/accessible-learning-2.png",
      "/project-images/accessible-learning-3.png",
    ],
    liveUrl: "https://accessible-learning.demo.com",
    featured: true,
    createdAt: "2023-12-05",
    coderId: "10",
    coderName: "Accessibility Advocate",
    coderAvatar: "",
    coderVibe: "Inclusive Design Champion",
    coderRating: 4.9,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-blue-200",
      titleText: "text-blue-700",
      descText: "text-blue-600",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
      primaryButton: "bg-blue-600 hover:bg-blue-700 text-white",
      accentColor: "blue",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-11",
    name: "Neon Arcade Emulator",
    description: "Web-based retro gaming platform with authentic 80s arcade experience and social features.",
    longDescription:
      "A nostalgic web-based arcade emulator that brings classic 80s gaming to modern browsers. Features include pixel-perfect emulation, multiplayer support, leaderboards, tournament modes, and social gaming features. The platform preserves gaming history while adding modern conveniences like cloud saves, achievements, and streaming capabilities.",
    tech: ["JavaScript", "WebAssembly", "Canvas API", "WebRTC", "Node.js", "Redis", "Socket.io"],
    category: "Gaming Platform",
    duration: "5 months",
    role: "Emulation Engineer",
    teamSize: "4 person team",
    outcome: "Revived 500+ classic games and built community of 75k+ retro gaming enthusiasts",
    metrics: ["500+ games emulated", "75k+ active users", "99.9% emulation accuracy", "Featured in gaming press"],
    images: [
      "/project-images/neon-arcade-1.png",
      "/project-images/neon-arcade-2.png",
      "/project-images/neon-arcade-3.png",
    ],
    liveUrl: "https://neon-arcade.demo.com",
    githubUrl: "https://github.com/synthwave-dev/neon-arcade",
    featured: false,
    createdAt: "2023-11-30",
    coderId: "11",
    coderName: "Synthwave Dev",
    coderAvatar: "",
    coderVibe: "Neon Synthwave",
    coderRating: 4.7,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-pink-200",
      titleText: "text-pink-700",
      descText: "text-pink-600",
      badgeBg: "bg-pink-100",
      badgeText: "text-pink-700",
      primaryButton: "bg-pink-600 hover:bg-pink-700 text-white",
      accentColor: "pink",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-12",
    name: "Zen Meditation App",
    description: "Mindfulness and meditation platform with biometric integration and personalized wellness journeys.",
    longDescription:
      "A holistic meditation and mindfulness platform that combines ancient wisdom with modern technology. Features include guided meditations, breathing exercises, biometric monitoring integration, personalized wellness journeys, and community support groups. The app uses AI to adapt meditation practices based on user stress levels and preferences.",
    tech: ["React Native", "Node.js", "TensorFlow", "HealthKit", "Firebase", "WebRTC", "Stripe"],
    category: "Wellness App",
    duration: "6 months",
    role: "Wellness Tech Developer",
    teamSize: "3 person team",
    outcome: "Improved user stress levels by 40% and achieved 4.9 star rating with 25k+ downloads",
    metrics: ["40% stress reduction", "4.9/5 star rating", "25k+ downloads", "Featured in wellness category"],
    images: [
      "/project-images/zen-meditation-1.png",
      "/project-images/zen-meditation-2.png",
      "/project-images/zen-meditation-3.png",
    ],
    liveUrl: "https://apps.apple.com/zen-meditation",
    featured: false,
    createdAt: "2023-10-15",
    coderId: "12",
    coderName: "Zen Master",
    coderAvatar: "",
    coderVibe: "Peaceful Minimalist",
    coderRating: 4.8,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-slate-200",
      titleText: "text-slate-700",
      descText: "text-slate-600",
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-700",
      primaryButton: "bg-slate-600 hover:bg-slate-700 text-white",
      accentColor: "slate",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(100,116,139,0.1)_0%,transparent_50%)]",
    },
  },
  // NEW PROJECTS FOR NEW CODERS
  {
    id: "proj-13",
    name: "DeFi Yield Optimizer",
    description: "Advanced DeFi protocol with automated yield farming strategies and risk management.",
    longDescription:
      "A sophisticated decentralized finance platform that automatically optimizes yield farming strategies across multiple protocols. Features include smart contract automation, risk assessment algorithms, and real-time portfolio rebalancing. The platform has processed over $100M in transactions with industry-leading security measures.",
    tech: ["Solidity", "Web3.js", "React", "Node.js", "Chainlink", "IPFS", "TypeScript"],
    category: "DeFi Platform",
    duration: "8 months",
    role: "Lead Blockchain Developer",
    teamSize: "6 person team",
    outcome: "Processed $100M+ in transactions with zero security incidents",
    metrics: ["$100M+ TVL", "Zero security incidents", "15% average APY", "50k+ active users"],
    images: [
      "/project-images/defi-optimizer-1.png",
      "/project-images/defi-optimizer-2.png",
      "/project-images/defi-optimizer-3.png",
    ],
    liveUrl: "https://defi-optimizer.demo.com",
    githubUrl: "https://github.com/blockchainsage/defi-optimizer",
    featured: true,
    createdAt: "2024-02-15",
    coderId: "13",
    coderName: "Blockchain Sage",
    coderAvatar: "",
    coderVibe: "Decentralized Future",
    coderRating: 4.8,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-yellow-200",
      titleText: "text-yellow-700",
      descText: "text-yellow-600",
      badgeBg: "bg-yellow-100",
      badgeText: "text-yellow-700",
      primaryButton: "bg-yellow-600 hover:bg-yellow-700 text-white",
      accentColor: "yellow",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-14",
    name: "Predictive Analytics Engine",
    description: "AI-powered analytics platform that predicts market trends and customer behavior.",
    longDescription:
      "A comprehensive machine learning platform that analyzes vast datasets to predict market trends, customer behavior, and business outcomes. Features include real-time data processing, custom ML model training, and interactive visualization dashboards. The platform has improved decision-making accuracy by 300% for enterprise clients.",
    tech: ["Python", "TensorFlow", "React", "Apache Spark", "PostgreSQL", "Docker", "Kubernetes"],
    category: "Analytics Platform",
    duration: "10 months",
    role: "Lead Data Scientist",
    teamSize: "8 person team",
    outcome: "Improved prediction accuracy by 300% and reduced analysis time by 80%",
    metrics: ["300% accuracy improvement", "80% faster analysis", "50+ enterprise clients", "99.9% uptime"],
    images: [
      "/project-images/analytics-engine-1.png",
      "/project-images/analytics-engine-2.png",
      "/project-images/analytics-engine-3.png",
    ],
    liveUrl: "https://analytics-engine.demo.com",
    featured: true,
    createdAt: "2024-01-10",
    coderId: "14",
    coderName: "Data Wizard",
    coderAvatar: "",
    coderVibe: "Analytics Sorcerer",
    coderRating: 4.9,
    coderStatus: "Busy",
    theme: {
      cardBg: "bg-white",
      border: "border-indigo-200",
      titleText: "text-indigo-700",
      descText: "text-indigo-600",
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-700",
      primaryButton: "bg-indigo-600 hover:bg-indigo-700 text-white",
      accentColor: "indigo",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]",
    },
  },
  {
    id: "proj-15",
    name: "Cloud-Native Microservices",
    description: "Scalable microservices architecture with auto-scaling and monitoring.",
    longDescription:
      "A cloud-native microservices platform built for enterprise scale. Features include automatic scaling, comprehensive monitoring, CI/CD pipelines, and disaster recovery. The platform handles millions of requests per day with 99.99% uptime and has reduced infrastructure costs by 60% while improving performance.",
    tech: ["Node.js", "Docker", "Kubernetes", "AWS", "Terraform", "Prometheus", "Grafana"],
    category: "Cloud Platform",
    duration: "12 months",
    role: "Principal Cloud Architect",
    teamSize: "10 person team",
    outcome: "Achieved 99.99% uptime and reduced infrastructure costs by 60%",
    metrics: ["99.99% uptime", "60% cost reduction", "10M+ daily requests", "Sub-100ms latency"],
    images: [
      "/project-images/microservices-1.png",
      "/project-images/microservices-2.png",
      "/project-images/microservices-3.png",
    ],
    liveUrl: "https://cloud-platform.demo.com",
    featured: true,
    createdAt: "2023-12-20",
    coderId: "15",
    coderName: "Cloud Architect",
    coderAvatar: "",
    coderVibe: "Infrastructure Maestro",
    coderRating: 4.8,
    coderStatus: "Available",
    theme: {
      cardBg: "bg-white",
      border: "border-sky-200",
      titleText: "text-sky-700",
      descText: "text-sky-600",
      badgeBg: "bg-sky-100",
      badgeText: "text-sky-700",
      primaryButton: "bg-sky-600 hover:bg-sky-700 text-white",
      accentColor: "sky",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1)_0%,transparent_50%)]",
    },
  },
  // Continue with more projects...
]

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
  if (category === "all") return featuredProjects
  return featuredProjects.filter((project) => project.category.toLowerCase().includes(category.toLowerCase()))
}

// Helper function to get featured projects only
export const getFeaturedProjects = () => {
  return featuredProjects.filter((project) => project.featured)
}

// Helper function to search projects
export const searchProjects = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return featuredProjects.filter(
    (project) =>
      project.name.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.tech.some((tech) => tech.toLowerCase().includes(lowercaseQuery)) ||
      project.coderName.toLowerCase().includes(lowercaseQuery) ||
      project.coderVibe.toLowerCase().includes(lowercaseQuery),
  )
}
