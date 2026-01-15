import P1 from '../assets/Project_IMG/P01.jpg';
import P2 from '../assets/Project_IMG/P02.jpg';
import P3 from '../assets/Project_IMG/P03.jpg';
import P4 from '../assets/Project_IMG/P04.jpg';
import P5 from '../assets/Project_IMG/P05.jpg';
import P6 from '../assets/Project_IMG/P06.jpg';

export const projectsData = [
  {
    id: 1,
    title: "Multi-Face Recognition System",
    description: "Developed a real-time multi-face recognition system using deep metric learning, supporting multi-pose enrollment, threshold tuning, and GPU-accelerated inference with high accuracy.",
    tags: ["Python", "PyTorch", "OpenCV", "FaceNet", "MTCNN"],
    image: P1,
    links: {
      demo: "https://github.com/IdealAnkit/Multi-Face-Recognition-System",
      github: "https://github.com/IdealAnkit/Multi-Face-Recognition-System"
    }
  },
  {
    id: 2,
    title: "Aerial Watch – Drone Detection",
    description: "Built a real-time drone surveillance system using YOLOv8 for human detection, optimized for live video streaming, low latency inference, and event-driven alert logging.",
    tags: ["Python", "OpenCV", "YOLOv8", "Flask", "Video Streaming"],
    image: P2,
    links: {
      demo: "https://github.com/IdealAnkit/Aerial-Watch-Drone-Based-Intruder-Detection-System",
      github: "https://github.com/IdealAnkit/Aerial-Watch-Drone-Based-Intruder-Detection-System"
    }
  },
  {
    id: 3,
    title: "Gender-Vision Detection",
    description: "Implemented a real-time gender detection system combining CNNs and Random Forest models, optimized for live camera feeds with high accuracy under practical conditions.",
    tags: ["Python", "OpenCV", "CNN", "RandomForest", "Real-Time"],
    image: P3,
    links: {
      demo: "https://github.com/IdealAnkit/Gender-Vision",
      github: "https://github.com/IdealAnkit/Gender-Vision"
    }
  },
  {
    id: 4,
    title: "Classical ML Projects",
    description: "Developed multiple classical machine learning projects covering classification and regression with feature analysis, evaluation metrics, and real-world predictive modeling.",
    tags: ["Python", "Scikit-learn", "Pandas", "EDA", "Regression"],
    image: P4,
    links: {
      demo: "https://github.com/IdealAnkit/Machine_Learning",
      github: "https://github.com/IdealAnkit/Machine_Learning"
    }
  },
  {
    id: 5,
    title: "Student Management System",
    description: "Engineered a full-stack student management system with authentication, CRUD operations, and database integration to streamline academic record handling across devices.",
    tags: ["React", "PHP", "MySQL", "REST APIs", "Full-Stack"],
    image: P5,
    links: {
      demo: "https://github.com/IdealAnkit/Student_Management_System",
      github: "https://github.com/IdealAnkit/Student_Management_System"
    }
  },
  {
    id: 6,
    title: "TimeKeeper Mobile App",
    description: "Built a cross-platform mobile timer application featuring count-up and count-down modes, theme switching, persistent storage, and smooth performance across devices.",
    tags: ["React Native", "TypeScript", "Mobile App", "UI/UX"],
    image: P6,
    links: {
      demo: "https://github.com/IdealAnkit/Timekeeper",
      github: "https://github.com/IdealAnkit/Timekeeper"
    }
  }
];
