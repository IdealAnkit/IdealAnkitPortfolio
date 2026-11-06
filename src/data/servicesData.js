import {
  Globe,
  Smartphone,
  Server,
  Bot,
  Workflow,
  Database
} from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Business Websites & Landing Pages',
    icon: Globe,
    description: [
      'Responsive React-based websites',
      'Product, portfolio, and business landing pages',
      'Contact forms and third-party integrations',
      'Performance, accessibility, and basic SEO foundations'
    ],
    priceINR: '₹5,000+',
    priceUSD: '$100+',
    whatsappMessage: 'Hi, I am interested in a business website or landing page.'
  },
  {
    id: 2,
    title: 'Full-Stack Web Applications',
    icon: Database,
    description: [
      'Custom dashboards and internal tools',
      'React frontend with Node.js or FastAPI backend',
      'Authentication, roles, and database workflows',
      'API integrations and responsive user experiences'
    ],
    priceINR: '₹12,000+',
    priceUSD: '$250+',
    whatsappMessage: 'Hi, I am interested in a custom full-stack web application.'
  },
  {
    id: 3,
    title: 'AI Assistants & RAG Solutions',
    icon: Bot,
    description: [
      'LLM-powered chatbots and assistants',
      'Chat with PDFs and business documents',
      'RAG pipelines, embeddings, and retrieval',
      'LangChain, LangGraph, and model API integration'
    ],
    priceINR: '₹10,000+',
    priceUSD: '$200+',
    whatsappMessage: 'Hi, I am interested in an AI assistant or RAG solution.'
  },
  {
    id: 4,
    title: 'Backend APIs & Integrations',
    icon: Workflow,
    description: [
      'REST API design and implementation',
      'Node.js, Express.js, and Python/FastAPI',
      'Database design and integration',
      'Authentication and third-party service connections'
    ],
    priceINR: '₹4,000+',
    priceUSD: '$80+',
    whatsappMessage: 'Hi, I am interested in backend API development or integration.'
  },
  {
    id: 5,
    title: 'React Native Mobile Applications',
    icon: Smartphone,
    description: [
      'Cross-platform Android and iOS app development',
      'API integration and local data storage',
      'Offline-first workflows where appropriate',
      'Reusable components and responsive mobile UI'
    ],
    priceINR: '₹15,000+',
    priceUSD: '$300+',
    whatsappMessage: 'Hi, I am interested in React Native mobile app development.'
  },
  {
    id: 6,
    title: 'Deployment & DevOps Support',
    icon: Server,
    description: [
      'Docker and Docker Compose setup',
      'Linux server deployment and configuration',
      'Nginx reverse proxy and domain setup',
      'CI/CD workflows, logs, and basic monitoring'
    ],
    priceINR: '₹3,000+',
    priceUSD: '$60+',
    whatsappMessage: 'Hi, I am interested in deployment or DevOps support.'
  }
];

export default servicesData;
