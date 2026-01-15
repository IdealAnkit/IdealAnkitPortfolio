import { 
  Globe, 
  Smartphone, 
  Database, 
  Server, 
  Bot, 
  Zap, 
  ShoppingBag,
  Brain,
  Eye,
  MessageSquareText,
  Workflow,
  Cloud
} from 'lucide-react';

const servicesData = [
  // --- Web & Mobile Development ---
  {
    id: 11, // SaaS
    title: 'SaaS Application Development',
    icon: Cloud,
    description: [
      'Multi-Tenant Architecture',
      'Role-Based Access Control (RBAC)',
      'Subscription & Billing Systems',
      'Analytics Dashboards & Admin Panels'
    ],
    priceINR: '₹60,000+',
    priceUSD: '$750+',
    whatsappMessage: 'Hi, I am interested in SaaS Application Development.'
  },
  {
    id: 1,
    title: 'Custom Web Development',
    icon: Globe,
    description: [
      'Responsive & High-Performance Websites',
      'React, Next.js, MERN Stack',
      'SEO Friendly Architecture',
      'Modern UI/UX Design'
    ],
    priceINR: '₹25,000+',
    priceUSD: '$300+',
    whatsappMessage: 'Hi, I am interested in Custom Web Development services.'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    icon: Smartphone,
    description: [
      'Cross-Platform Apps (React Native)',
      'iOS & Android Support',
      'Smooth Animations & Performance',
      'API Integration & Offline Mode'
    ],
    priceINR: '₹40,000+',
    priceUSD: '$500+',
    whatsappMessage: 'Hi, I am interested in Mobile App Development.'
  },
  {
    id: 7,
    title: 'E-commerce Solutions',
    icon: ShoppingBag,
    description: [
      'Custom Storefronts & Dashboards',
      'Payment Gateway Integration',
      'Inventory Management Systems',
      'Secure Checkout Flows'
    ],
    priceINR: '₹45,000+',
    priceUSD: '$550+',
    whatsappMessage: 'Hi, I am interested in E-commerce Solutions.'
  },

  // --- AI & Machine Learning ---
  {
    id: 5,
    title: 'Generative AI Solutions',
    icon: Bot,
    description: [
      'Custom LLM Integration',
      'Chatbots & AI Assistants',
      'RAG Implementation',
      'AI-Powered Automation'
    ],
    priceINR: '₹50,000+',
    priceUSD: '$600+',
    whatsappMessage: 'Hi, I am interested in Generative AI Implementation.'
  },
  {
    id: 8,
    title: 'Machine Learning Models',
    icon: Brain,
    description: [
      'Predictive Analytics & Forecasting',
      'Classification & Regression Models',
      'Data Mining & Pattern Recognition',
      'TensorFlow & PyTorch Solutions'
    ],
    priceINR: '₹45,000+',
    priceUSD: '$550+',
    whatsappMessage: 'Hi, I need assistance with Custom Machine Learning Models.'
  },
  {
    id: 9,
    title: 'Computer Vision',
    icon: Eye,
    description: [
      'Object Detection & Recognition',
      'Face Recognition Systems',
      'Image Segmentation & Processing',
      'Video Analytics Pipelines'
    ],
    priceINR: '₹55,000+',
    priceUSD: '$650+',
    whatsappMessage: 'Hi, I am interested in Computer Vision Solutions.'
  },
  {
    id: 10,
    title: 'NLP & Text Analysis',
    icon: MessageSquareText,
    description: [
      'Sentiment Analysis & Categorization',
      'Document Summarization',
      'Named Entity Recognition (NER)',
      'Language Translation Systems'
    ],
    priceINR: '₹40,000+',
    priceUSD: '$480+',
    whatsappMessage: 'Hi, I need NLP & Text Analysis services.'
  },

  // --- Infrastructure & Optimization ---
  {
    id: 12, // API
    title: 'API Development & Integration',
    icon: Workflow,
    description: [
      'REST & GraphQL API Design',
      'Third-Party API Integration',
      'Secure Authentication (JWT, OAuth)',
      'Microservices-Ready Architecture'
    ],
    priceINR: '₹20,000+',
    priceUSD: '$250+',
    whatsappMessage: 'Hi, I am interested in API Development & Integration.'
  },
  {
    id: 4,
    title: 'DevOps Implementation',
    icon: Server,
    description: [
      'CI/CD Pipeline Setup',
      'Cloud Deployment (AWS/Azure)',
      'Docker & Kubernetes',
      'Automated Testing Workflows'
    ],
    priceINR: '₹30,000+',
    priceUSD: '$400+',
    whatsappMessage: 'Hi, I am looking for DevOps Implementation services.'
  },
  {
    id: 3,
    title: 'Database Design',
    icon: Database,
    description: [
      'SQL & NoSQL Architectures',
      'Schema Optimization & Indexing',
      'Data Security & Backups',
      'Scalable Data Models'
    ],
    priceINR: '₹15,000+',
    priceUSD: '$200+',
    whatsappMessage: 'Hi, I need assistance with Database Design & Optimization.'
  },
  {
    id: 6,
    title: 'Performance Optimization',
    icon: Zap,
    description: [
      'Core Web Vitals Improvement',
      'Backend Latency Reduction',
      'Code Refactoring & Cleanup',
      'Faster Load Times'
    ],
    priceINR: '₹10,000+',
    priceUSD: '$120+',
    whatsappMessage: 'Hi, I need Performance Optimization for my website/app.'
  }
];

export default servicesData;
