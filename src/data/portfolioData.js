export const personal = {
  name: "Nandan Sharma",
  title: "Software Engineer",
  subtitle: "AI Automation & Backend Systems",
  location: "Bengaluru, Karnataka, India",
  email: "ns56488663@gmail.com",
  phone: "+91-8970243018",
  github: "https://github.com/nandan91531",
  linkedin: "https://linkedin.com/in/nandan-sharma-b4a472288",
  college: "Bangalore Institute of Technology",
  degree: "Bachelor of Engineering in Electronics & Communication",
  period: "2023 – 2027",
  cgpa: "8.25 / 10",
  summary: "Electronics and Communication Engineering undergraduate with hands-on experience building Python-based software, AI automation, and backend applications. Strong foundation in Python, SQL, REST APIs, Data Structures, DBMS, and software engineering, with practical experience developing RAG and LLM-powered solutions."
};

export const stats = [
  { value: "170+", label: "LeetCode DSA" },
  { value: "180+", label: "takeUforward" },
  { value: "50+", label: "LeetCode SQL 50" },
  { value: "8.25", label: "B.E. CGPA" },
];

export const projects = [
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
    featured: true
  }
];

export const skills = {
  "Programming": ["Python", "C++", "SQL"],
  "AI & Generative AI": ["LLMs", "RAG", "Prompt Engineering", "Ollama", "OpenAI Whisper", "Hugging Face", "LangChain"],
  "Backend & APIs": ["FastAPI", "Flask", "REST APIs", "Multithreading"],
  "Machine Learning & Data": ["Scikit-learn", "Pandas", "NumPy", "Text Embeddings", "Semantic Search", "Matplotlib", "Power BI"],
  "Testing & Automation": ["pytest", "Regression Testing", "Requests", "Web Scraping", "BeautifulSoup"],
  "Deployment & Tools": ["Git", "GitHub", "Docker (Basics)", "Railway", "Vercel", "VS Code", "Jupyter Notebook"],
  "Databases & Storage": ["MySQL", "ChromaDB", "SQLite"],
  "Core Computer Science": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
};

export const education = [
  {
    institution: "Bangalore Institute of Technology",
    location: "Bengaluru, Karnataka",
    degree: "Bachelor of Engineering in Electronics & Communication Engineering",
    period: "2023 – 2027",
    score: "CGPA: 8.25 / 10"
  }
];

export const certifications = [
  { title: "Getting Started with Generative AI", issuer: "IBM" },
  { title: "Tata GenAI Powered Data Analytics Job Simulation", issuer: "Tata Group" },
  { title: "Docker Essentials: A Developer Introduction", issuer: "IBM" },
  { title: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry" }
];

export const achievements = [
  "Solved 170+ DSA problems on LeetCode.",
  "Solved 180 DSA problems on takeUforward (Striver's SDE Sheet).",
  "Solved 50 SQL problems from LeetCode SQL 50 study plan."
];
