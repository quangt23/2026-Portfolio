import languageClusteringImg from "../assets/languageClusteringImg.png"
import crateMasterImg from "../assets/crateMasterImg.png"

export const PROJECTS = [
  {
    id: 1,
    title: "Hierarchical Language Clustering",
    desc: "Tested whether multilingual sentence embedding models capture language family relationships. Used agglomerative clustering and dendrogram analysis on 20+ languages.",
    tags: ["Python", "ML", "pandas", "numpy"],
    cat: "machine learning",
    image: languageClusteringImg,
    link: "github.com/tristanmcd130/hlcuse",
  },
  {
    id: 2,
    title: "Crate Master",
    desc: "Sokoban-style warehouse puzzle game. Push crates to designated positions across increasingly complex levels.",
    tags: ["C++", "SFML"],
    cat: "app",
    image: crateMasterImg,
    link: "github.com/quangt23/Crate-Master",
  },
  {
    id: 3,
    title: "SeedScape",
    desc: "Web-based idle garden game. Buy seeds, wait for plants to grow, earn mutations on fruits, and sell for coins.",
    tags: ["React", "JavaScript", "Node.js"],
    cat: "app",
    link: "github.com/quangt23/SeedScape",
  },
  {
    id: 4,
    title: "Solar System Simulation",
    desc: "Dynamic simulation of the solar system using real gravitational physics formulas. Rendered in real-time with SFML.",
    tags: ["C++", "SFML", "Physics"],
    cat: "app",
    link: "github.com/quangt23/Solar-System-Simulation",
  },
  {
    id: 5,
    title: "Classifying Financial News",
    desc: "Support vector machine classifier for financial headline sentiment. Achieved 85%+ accuracy across three sentiment classes.",
    tags: ["Python", "SVM", "pandas", "scikit-learn"],
    cat: "machine learning",
    link: "github.com/tmcdermott02012319/financial-svm",
  },
  {
    id: 6,
    title: "Photo Encrypter",
    desc: "Image encryption tool using a Linear Feedback Shift Register to generate pseudorandom bit streams applied to digital photos.",
    tags: ["C++", "SFML", "Cryptography"],
    cat: "tool",
    link: "github.com/quangt23/photo-encrypter",
  },
];