export const personal = {
  name: "Nandan Sharma",
  title: "Software Engineer",
  subtitle: "AI Automation & Backend Systems",
  location: "Bengaluru, Karnataka, India",
  email: "nandan.sharma.tech@gmail.com",
  phone: "+91-8970243018",
  github: "https://github.com/nandan91531",
  linkedin: "https://linkedin.com/in/nandan-sharma-b4a472288",
  college: "Bangalore Institute of Technology",
  degree: "Bachelor of Engineering in Electronics & Communication",
  period: "2023 – 2027",
  cgpa: "8.25 / 10",
  summary: "Electronics and Communication Engineering undergraduate with hands-on experience building Python-based software, multi-agent AI systems, MCP integrations, and scalable backend applications. Strong foundation in Python, SQL, REST APIs, Data Structures, DBMS, and practical experience developing LangGraph, RAG, and LLM-powered solutions."
};

export const stats = [
  { value: "250+", label: "DSA Questions Solved" },
  { value: "50+", label: "LeetCode SQL 50" },
  { value: "8.25", label: "B.E. CGPA" },
];

export const projects = [
  {
    title: "Lectura AI",
    subtitle: "YouTube & Lecture Study Assistant",
    period: "2026",
    tech: ["Python", "OpenAI Whisper", "LangChain", "ChromaDB", "Hugging Face", "Mistral AI", "FastAPI"],
    description: "AI-powered study assistant converting video and audio into timestamped transcripts, smart summaries, and interactive RAG Q&A.",
    points: [
      "Developed an AI-powered assistant that converts YouTube videos or local audio into timestamped lecture transcripts using OpenAI Whisper.",
      "Built a RAG pipeline using Hugging Face embeddings and ChromaDB to retrieve relevant context for Mistral-powered Q&A.",
      "Validated the pipeline across multiple lecture videos and integrated AI summaries, study questions, interactive Q&A, and PDF/TXT exports.",
      "Exposed the pipeline through FastAPI REST endpoints.",
      "Split long audio into 10-minute chunks and merged section-wise LLM summaries into one final summary."
    ],
    github: "https://github.com/nandan91531",
    featured: true
  },
  {
    title: "TripMate AI",
    subtitle: "MCP-Based Multi-Agent Travel Planning System",
    period: "2026",
    tech: ["Python", "FastAPI", "LangGraph", "LangChain", "Groq", "MCP", "PostgreSQL", "Tavily", "AviationStack", "OpenWeather", "Docker"],
    description: "An AI-powered multi-agent travel planning system using LangGraph and Model Context Protocol (MCP) to autonomously orchestrate flights, hotels, weather, budget, and itineraries.",
    points: [
      "Developed an AI-powered multi-agent travel planning system using LangGraph to coordinate specialized agents for flight information, hotel discovery, weather analysis, budget estimation, and itinerary generation.",
      "Implemented a supervisor-based routing mechanism with input guardrails to dynamically select relevant agents based on user travel requirements.",
      "Integrated external services through MCP (Model Context Protocol), including Tavily for hotel discovery, AviationStack for airport and airline information, and a custom OpenWeather MCP server for weather and forecast data.",
      "Designed a shared workflow state to exchange information between agents and generate context-aware, budget-conscious travel itineraries.",
      "Implemented Human-in-the-Loop approval using LangGraph interrupts, allowing users to review, approve, or request revisions to generated itineraries.",
      "Integrated PostgreSQL checkpointing to persist workflow state and support resumption of interrupted conversations.",
      "Built REST APIs using FastAPI and containerized the application with Docker for cloud deployment."
    ],
    github: "https://github.com/nandan91531/Tripmate-AI",
    liveDemo: "https://tripmate-ai-khiv.onrender.com",
    featured: true
  },
  {
    title: "Regression Guard",
    subtitle: "AI-Assisted Regression Test Generator",
    period: "2026 – Present",
    tech: ["Python", "Git", "Ollama", "pytest", "Prompt Engineering", "Quality Assurance"],
    description: "An AI-assisted tool that analyzes buggy and fixed Git commits to automatically generate regression test suites.",
    points: [
      "Engineered an automated tool that analyzes buggy and fixed Git commits to synthesize targeted regression tests.",
      "Designed constrained LLM prompting and automated validation to ensure tests fail on buggy code and pass on the fixed version, with feedback-based retries.",
      "Generated validation reports and benchmarked workflows on real code changes from the open-source humanize library.",
      "Masked expected values in pytest failure logs before prompting to prevent answer leakage into generated tests.",
      "Built a CLI and a web UI with live log streaming and support for selectable local Ollama models."
    ],
    github: "https://github.com/nandan91531",
    featured: true
  },
  {
    title: "Credit Risk Assessment & Prediction System",
    subtitle: "ML-Based Loan Default Risk Classifier",
    period: "2025 – 2026",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "FastAPI", "SHAP"],
    description: "Machine learning system predicting loan default probability using borrower financial records and interpretability algorithms.",
    points: [
      "Developed an ML-based system to predict loan default probability using borrower financial and credit history data.",
      "Performed data preprocessing, EDA, and feature engineering for model development.",
      "Implemented an optimized classification threshold to categorize applicants into High-Risk and Low-Risk segments.",
      "Built a FastAPI backend with an interactive web interface and deployed it on Render."
    ],
    github: "https://github.com/nandan91531/credit-risk-assessment",
    liveDemo: "https://credit-risk-assessment-w7tp.onrender.com",
    featured: true
  },
  {
    title: "Academic Result Automation System",
    subtitle: "Web Scraping & Analytics Pipeline",
    period: "2025",
    tech: ["Python", "Flask", "Requests", "BeautifulSoup", "OpenCV", "Tesseract OCR", "Power BI"],
    description: "Automated high-throughput scraping suite for university result portals with OCR CAPTCHA solving and Power BI analytics.",
    points: [
      "Developed an automated system to scrape, extract, and structure academic result data from web pages.",
      "Stored extracted result data in Excel and used Power BI to analyze and visualize academic performance.",
      "Automated repeated result retrieval and processing with error handling for inconsistent or unexpected result-page data.",
      "Built a Flask web app that fetches results for multiple USNs in parallel using a thread pool.",
      "Automated CAPTCHA reading with OpenCV preprocessing and Tesseract OCR."
    ],
    github: "https://github.com/nandan91531",
    liveDemo: "https://vtu-scraper-nandan-sharma-1.onrender.com",
    featured: true
  }
];

export const skills = {
  "Programming": ["Python", "C++", "SQL"],
  "AI & Generative AI": ["LangGraph", "MCP (Model Context Protocol)", "LLMs", "RAG", "Prompt Engineering", "Ollama", "OpenAI Whisper", "Hugging Face", "LangChain", "Groq"],
  "Machine Learning & Data": ["XGBoost", "SHAP", "Scikit-learn", "Pandas", "NumPy", "Text Embeddings", "Semantic Search", "Matplotlib", "Power BI"],
  "Backend & APIs": ["FastAPI", "Flask", "REST APIs", "Multithreading"],
  "Databases & Storage": ["PostgreSQL", "MySQL", "ChromaDB (Vector DB)", "SQLite"],
  "Testing & Automation": ["pytest", "Regression Testing", "Requests", "Web Scraping", "BeautifulSoup"],
  "Deployment & Tools": ["Docker", "Git", "GitHub", "Render", "Railway", "Vercel", "VS Code", "Jupyter Notebook"],
  "Core Computer Science": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
};

export const education = [
  {
    institution: "Bangalore Institute of Technology",
    location: "Bengaluru, Karnataka",
    degree: "Bachelor of Engineering in Electronics & Communication Engineering",
    period: "2023 – 2027",
    score: "CGPA: 8.25 / 10",
    logo: "/bit-logo.png"
  },
  {
    institution: "Kendriya Vidyalaya",
    location: "Hinoo, Ranchi, Jharkhand – 834002",
    degree: "Senior Secondary (Class XII – CBSE)",
    period: "Completed",
    score: "87.2%",
    logo: "/kvs-logo.svg"
  },
  {
    institution: "Kendriya Vidyalaya",
    location: "Hinoo, Ranchi, Jharkhand – 834002",
    degree: "Secondary School (Class X – CBSE)",
    period: "Completed",
    score: "83.4%",
    logo: "/kvs-logo.svg"
  }
];

export const certifications = [
  { title: "Getting Started with Generative AI", issuer: "IBM" },
  { title: "Tata GenAI Powered Data Analytics Job Simulation", issuer: "Tata Group" },
  { title: "Docker Essentials: A Developer Introduction", issuer: "IBM" },
  { title: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry" }
];

export const achievements = [
  "Solved 250+ DSA problems covering data structures, algorithmic optimization, and problem solving.",
  "Solved 50 SQL problems from LeetCode SQL 50 study plan."
];
