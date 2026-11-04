export const personalInfo = {
  name: "Nandan Sharma",
  role: "AI & Backend Software Engineer",
  tagline: "ECE Undergrad passionate about Generative AI, RAG Systems & Scalable Backends",
  location: "Bengaluru, Karnataka, India",
  email: "ns56488663@gmail.com",
  phone: "+91-8970243018",
  linkedin: "https://linkedin.com/in/nandan-sharma-b4a472288",
  github: "https://github.com/nandan91531",
  college: "Bangalore Institute of Technology",
  degree: "Bachelor of Engineering in Electronics & Communication Engineering",
  graduationYear: "2023 – 2027",
  cgpa: "8.25 / 10.0",
  bio: "Electronics and Communication Engineering undergraduate with hands-on experience building Python-based software, AI automation, and backend applications. Strong foundation in Python, SQL, REST APIs, Data Structures, DBMS, and software engineering, with practical experience developing RAG and LLM-powered solutions.",
  availableForRoles: "Open for AI / Backend / SDE Internships & Opportunities"
};

export const stats = [
  { label: "DSA on LeetCode", value: "170+", highlight: "Algorithmic Problem Solving" },
  { label: "takeUforward Problems", value: "180+", highlight: "Striver's SDE Sheet" },
  { label: "LeetCode SQL 50", value: "50+", highlight: "Complex Queries & Optimization" },
  { label: "Engineering CGPA", value: "8.25", highlight: "Bangalore Institute of Tech" }
];

export const skillCategories = [
  {
    title: "AI & Generative AI",
    icon: "Brain",
    accent: "from-cyan-500 to-blue-600",
    skills: [
      { name: "LLMs & Prompt Engineering", level: "Advanced" },
      { name: "RAG Architectures", level: "Advanced" },
      { name: "Ollama (Local LLMs)", level: "Advanced" },
      { name: "OpenAI Whisper", level: "Proficient" },
      { name: "LangChain", level: "Proficient" },
      { name: "Hugging Face", level: "Proficient" },
      { name: "ChromaDB (Vector Store)", level: "Proficient" },
    ]
  },
  {
    title: "Backend & Systems",
    icon: "Server",
    accent: "from-violet-500 to-purple-600",
    skills: [
      { name: "FastAPI", level: "Advanced" },
      { name: "Flask", level: "Advanced" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Multithreading & Thread Pools", level: "Proficient" },
      { name: "Web Scraping (BeautifulSoup)", level: "Advanced" },
      { name: "Requests & HTTP Automation", level: "Advanced" },
      { name: "Pytest & Test Automation", level: "Proficient" }
    ]
  },
  {
    title: "Programming Languages",
    icon: "Code",
    accent: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Python", level: "Expert / Primary" },
      { name: "C++", level: "Proficient / DSA" },
      { name: "SQL (MySQL, SQLite)", level: "Advanced" },
      { name: "JavaScript / React", level: "Proficient" }
    ]
  },
  {
    title: "Machine Learning & Data",
    icon: "Database",
    accent: "from-amber-500 to-orange-600",
    skills: [
      { name: "Semantic Search & Embeddings", level: "Advanced" },
      { name: "Scikit-Learn", level: "Proficient" },
      { name: "Pandas & NumPy", level: "Advanced" },
      { name: "Matplotlib & Data Viz", level: "Proficient" },
      { name: "Power BI", level: "Proficient" },
      { name: "OpenCV & Tesseract OCR", level: "Proficient" }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: "Cpu",
    accent: "from-pink-500 to-rose-600",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker (Basics)", level: "Certified" },
      { name: "Render & Vercel", level: "Deployment" },
      { name: "Railway", level: "Deployment" },
      { name: "Linux / CLI", level: "Proficient" },
      { name: "Jupyter & VS Code", level: "Workflow" }
    ]
  },
  {
    title: "Core Computer Science",
    icon: "GraduationCap",
    accent: "from-indigo-500 to-blue-600",
    skills: [
      { name: "Data Structures & Algorithms", level: "Core Strength" },
      { name: "Object-Oriented Programming (OOP)", level: "Core Strength" },
      { name: "Database Management Systems (DBMS)", level: "Core Strength" },
      { name: "Computer Networks", level: "Foundations" },
      { name: "Operating Systems", level: "Foundations" }
    ]
  }
];

export const projects = [
  {
    id: "regression-guard",
    title: "Regression Guard",
    subtitle: "AI-Assisted Regression Test Generator",
    year: "2026 – Present",
    status: "Active Project",
    badge: "AI & DevTools",
    featured: true,
    tagline: "Autonomous test generator that analyzes Git commits to synthesize resilient regression tests with zero test-leakage.",
    summary: "Engineered an AI-assisted tool that inspects buggy and fixed Git commits, leveraging local LLMs (Ollama) to autonomously generate targeted regression tests that fail on bugs and pass on fixes.",
    highlights: [
      "Designed constrained LLM prompting with automated validation loops ensuring generated tests fail on buggy code and succeed on fixed revisions.",
      "Masked expected values inside pytest failure logs before prompting to avoid answer leakage into synthesized assertions.",
      "Tested and validated workflows on real-world regressions from the open-source humanize library.",
      "Built a modern CLI and full web UI with live log streaming and selectable local Ollama models for offline-first privacy."
    ],
    tech: ["Python", "Git", "Ollama", "Requests", "pytest", "Prompt Engineering", "Quality Assurance"],
    interactiveDemo: {
      type: "terminal",
      sampleInput: "regression-guard --repo https://github.com/jmoiron/humanize --commit fix-filesize",
      sampleOutput: "[✓] Analyzing Git Diff\n[✓] Extracted Buggy AST & Failure Trace\n[✓] Masked pytest assertions (zero leakage)\n[✓] Synthesizing tests via Ollama (qwen2.5-coder)\n[✓] Validation: FAILS on Commit A (buggy) -> PASSES on Commit B (fixed)\n[✓] Generated: tests/test_filesize_regression.py"
    },
    github: "https://github.com/nandan91531",
    demo: "#"
  },
  {
    id: "lectura-ai",
    title: "Lectura AI",
    subtitle: "YouTube & Lecture Study Assistant",
    year: "2026",
    status: "Completed",
    badge: "GenAI & RAG",
    featured: true,
    tagline: "End-to-end multimodal study assistant converting hours of lectures into timestamped transcripts, smart summaries, and interactive RAG Q&A.",
    summary: "Built an AI-powered lecture study companion using OpenAI Whisper for timestamped transcription, ChromaDB vector store with Hugging Face embeddings for context retrieval, and Mistral AI for conversational inquiry.",
    highlights: [
      "Converts YouTube video URLs or local audio files into high-accuracy timestamped lecture transcripts with Whisper.",
      "Engineered an efficient RAG pipeline with ChromaDB and Hugging Face embeddings to retrieve exact video moments for Mistral-powered Q&A.",
      "Handled long-form audio by splitting into 10-minute segments and recursively merging section-wise LLM summaries into comprehensive briefs.",
      "Exposed backend via FastAPI REST endpoints with interactive question generation and PDF/TXT export options."
    ],
    tech: ["Python", "OpenAI Whisper", "LangChain", "ChromaDB", "Hugging Face", "Mistral AI", "FastAPI"],
    interactiveDemo: {
      type: "rag-preview",
      sampleQuery: "Explain the Backpropagation algorithm from minute 14:20",
      sampleAnswer: "At 14:20, the lecturer derives the chain rule for weight updates in layer L-1, explaining how gradient errors propagate backwards through activation derivatives."
    },
    github: "https://github.com/nandan91531",
    demo: "#"
  },
  {
    id: "academic-result-automation",
    title: "Academic Result Automation",
    subtitle: "Web Scraping & Analytics Suite",
    year: "2025",
    status: "Production Ready",
    badge: "Automation & Backend",
    featured: true,
    tagline: "High-throughput university result scraping pipeline with multithreaded workers, OCR CAPTCHA bypass, and Power BI dashboards.",
    summary: "Engineered a high-performance scraping and analytics suite that automates bulk academic result retrieval across university USN batches, solving CAPTCHAs and feeding structured metrics into Power BI.",
    highlights: [
      "Engineered a multi-threaded Flask application capable of fetching university results for hundreds of USNs concurrently via worker pools.",
      "Built automated CAPTCHA recognition using OpenCV preprocessing (adaptive thresholding, noise filtering) and Tesseract OCR.",
      "Implemented resilient retry mechanisms and heuristic validation to gracefully handle inconsistent university portal responses.",
      "Exported structured academic datasets to Excel and configured Power BI interactive dashboards for college performance analysis."
    ],
    tech: ["Python", "Flask", "Requests", "BeautifulSoup", "Automation", "OpenCV", "Tesseract OCR", "Power BI"],
    interactiveDemo: {
      type: "stats-preview",
      metrics: [
        { label: "USN Fetching", value: "Multi-Threaded Pool" },
        { label: "CAPTCHA Solving", value: "OpenCV + Tesseract OCR" },
        { label: "Visualization", value: "Power BI Interactive Dashboards" }
      ]
    },
    github: "https://github.com/nandan91531",
    demo: "#"
  }
];

export const education = [
  {
    institution: "Bangalore Institute of Technology",
    location: "Bengaluru, Karnataka",
    degree: "Bachelor of Engineering (B.E.) in Electronics & Communication Engineering",
    period: "2023 – 2027",
    score: "CGPA: 8.25 / 10",
    description: "Focusing on embedded computing, signal processing, core computer systems, and computational intelligence with dedicated focus on modern AI & software engineering."
  }
];

export const certifications = [
  {
    title: "Getting Started with Generative AI",
    issuer: "IBM",
    badge: "GenAI",
    description: "Fundamental architectures of Large Language Models, prompt crafting, and generative application patterns."
  },
  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Group / Forage",
    badge: "Analytics & GenAI",
    description: "Applied generative AI models to business datasets, strategic decision analytics, and automated reporting."
  },
  {
    title: "Docker Essentials: A Developer Introduction",
    issuer: "IBM",
    badge: "DevOps & Containers",
    description: "Containerization principles, multi-stage Dockerfiles, image optimization, and local orchestration."
  },
  {
    title: "The Ultimate Job Ready Data Science Course",
    issuer: "CodeWithHarry",
    badge: "Data Science",
    description: "Comprehensive training in Python, Pandas, NumPy, Machine Learning algorithms, and end-to-end data pipelines."
  }
];

export const achievements = [
  {
    icon: "Trophy",
    title: "170+ LeetCode Problems Solved",
    detail: "Consistently tackling algorithmic challenges covering arrays, dynamic programming, graphs, trees, and system design fundamentals."
  },
  {
    icon: "Target",
    title: "180+ takeUforward Problems Completed",
    detail: "Systematic mastery of Striver's SDE Sheet, strengthening core data structures and optimal time/space complexity analysis."
  },
  {
    icon: "Database",
    title: "LeetCode SQL 50 Study Plan Accomplished",
    detail: "Proficiency in complex SQL queries, window functions, recursive CTEs, indexing, and relational schema optimization."
  }
];
