/**
 * Certificates and awards data
 */

import {
  Award,
  BarChart3,
  Bot,
  Brain,
  Code,
  Database,
  FolderTree,
  GitBranch,
  GraduationCap,
  LineChart,
  LucideIcon,
  Network,
  Rocket,
  Settings,
  Shield,
  Trophy,
  TrendingUp,
  Wrench,
  Lightbulb,
  Heart,
} from "lucide-react";

export type CertificateCategory = 'degree' | 'award' | 'specialization' | 'course' | 'standalone';

export interface Certificate {
  title: string;
  issuer: string;
  achievement: string;
  date: string;
  Icon: LucideIcon;
  certificateFile?: string;
  verifyLink?: string;
  description: string;
  featured?: boolean;
  category: CertificateCategory;
  parentId?: string;
  children?: Certificate[];
}

export const certificates: Certificate[] = [
  {
    title: "Bachelor of Science in Computer Science",
    issuer: "New York University Abu Dhabi",
    achievement: "Magna Cum Laude (GPA 3.94/4.00)",
    date: "May 2025",
    Icon: GraduationCap,
    description: "B.S. in Computer Science with Minor in Mathematics",
    featured: false,
    category: 'degree',
  },
  {
    title: "NYU Founder's Day Award",
    issuer: "New York University",
    achievement: "Highest Bracket of Scholastic Preferment",
    date: "May 2025",
    Icon: Award,
    description: "University recognition for outstanding academic achievement",
    featured: true,
    category: 'award',
  },
  {
    title: "TSMC Regional Intern Competition Gold Award",
    issuer: "Taiwan Semiconductor Manufacturing Company",
    achievement: "Top 4 out of 250 interns - recognized for outstanding ML research",
    date: "Summer 2024",
    Icon: Trophy,
    description: "Gold Award for Machine Learning Innovation in Semiconductor Manufacturing",
    featured: false,
    category: 'award',
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM via Coursera",
    achievement: "Completed 9-course specialization covering data science methodology, Python, SQL, and machine learning",
    date: "2023-2024",
    Icon: Database,
    description: "Comprehensive training in data analysis, visualization, and ML algorithms",
    category: 'specialization',
    children: [
      {
        title: "Tools for Data Science",
        issuer: "IBM",
        achievement: "IBM Data Science Professional Certificate Course",
        date: "July 2023",
        Icon: Wrench, // or Tool
        description: "Jupyter, RStudio, GitHub, and essential data science tools",
        category: 'course',
        parentId: 'ibm-data-science',
      },
      {
        title: "What is Data Science?",
        issuer: "IBM",
        achievement: "IBM Data Science Professional Certificate Course",
        date: "July 2023",
        Icon: Lightbulb, // or BookOpen
        description: "Introduction to data science concepts, roles, and applications",
        category: 'course',
        parentId: 'ibm-data-science',
      },
      {
        title: "Data Science Methodology",
        issuer: "IBM",
        achievement: "IBM Data Science Professional Certificate Course",
        date: "July 2023",
        Icon: GitBranch,
        description: "Structured approach to solving data science problems",
        category: 'course',
        parentId: 'ibm-data-science',
      },
      {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        achievement: "IBM Data Science Professional Certificate Course",
        date: "July 2023",
        Icon: Code,
        description: "Python programming fundamentals for data science and AI",
        category: 'course',
        parentId: 'ibm-data-science',
      },
      {
        title: "Databases and SQL for Data Science with Python",
        issuer: "IBM",
        achievement: "IBM Data Science Professional Certificate Course",
        date: "August 2023",
        Icon: Database,
        description: "SQL and database management for data science applications",
        category: 'course',
        parentId: 'ibm-data-science',
      },
      {
        title: "Data Analysis with Python",
        issuer: "IBM",
        achievement: "IBM Data Science Professional Certificate Course",
        date: "September 2023",
        Icon: LineChart,
        description: "Data manipulation, analysis, and modeling with Python",
        category: 'course',
        parentId: 'ibm-data-science',
      },
      {
        title: "Data Visualization with Python",
        issuer: "IBM",
        achievement: "IBM Data Science Professional Certificate Course",
        date: "January 2024",
        Icon: BarChart3,
        description: "Creating impactful visualizations using Python libraries",
        category: 'course',
        parentId: 'ibm-data-science',
      },
      {
        title: "Machine Learning with Python",
        issuer: "IBM",
        achievement: "IBM Data Science Professional Certificate Course",
        date: "January 2024",
        Icon: Bot,
        description: "Practical machine learning algorithms and implementation in Python",
        category: 'course',
        parentId: 'ibm-data-science',
      },
      {
        title: "Applied Data Science Capstone",
        issuer: "IBM",
        achievement: "IBM Data Science Professional Certificate Course",
        date: "January 2024",
        Icon: Rocket,
        description: "Capstone project applying data science skills to real-world problems",
        category: 'course',
        parentId: 'ibm-data-science',
      },
    ],
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI via Coursera",
    achievement: "5-course specialization by Andrew Ng covering neural networks, CNNs, RNNs, and transformers",
    date: "2023",
    Icon: Brain,
    description: "Advanced deep learning architectures and practical implementation",
    category: 'specialization',
    children: [
      {
        title: "Neural Networks and Deep Learning",
        issuer: "DeepLearning.AI",
        achievement: "Deep Learning Specialization Course",
        date: "February 2023",
        Icon: Network,
        description: "Foundations of neural networks and deep learning architectures",
        category: 'course',
        parentId: 'deep-learning',
      },
      {
        title: "Improving Deep Neural Networks",
        issuer: "DeepLearning.AI",
        achievement: "Hyperparameter Tuning, Regularization and Optimization",
        date: "February 2023",
        Icon: Settings,
        description: "Advanced techniques for optimizing deep learning models",
        category: 'course',
        parentId: 'deep-learning',
      },
      {
        title: "Structuring Machine Learning Projects",
        issuer: "DeepLearning.AI",
        achievement: "Deep Learning Specialization Course",
        date: "March 2023",
        Icon: FolderTree,
        description: "Best practices for building successful ML projects",
        category: 'course',
        parentId: 'deep-learning',
      },
      {
        title: "Convolutional Neural Networks",
        issuer: "DeepLearning.AI",
        achievement: "Deep Learning Specialization Course",
        date: "May 2023",
        Icon: Brain,
        description: "Advanced training in CNNs for computer vision applications",
        category: 'course',
        parentId: 'deep-learning',
      },
      {
        title: "Sequence Models",
        issuer: "DeepLearning.AI",
        achievement: "Deep Learning Specialization Course",
        date: "June 2023",
        Icon: GitBranch,
        description: "RNNs, LSTMs, and attention mechanisms for sequential data",
        category: 'course',
        parentId: 'deep-learning',
      },
    ],
  },
  {
    title: "American Region Mathematics League International",
    issuer: "ARML",
    achievement: "3rd Place in International Mathematics Competition",
    date: "2019",
    Icon: Award,
    description: "Top performance in prestigious high school mathematics competition",
    featured: false,
    category: 'award',
  },
  {
    title: "CITI Program - Investigators Conducting Exempt Research",
    issuer: "CITI Program",
    achievement: "Basic Course Completion",
    date: "March 2024",
    Icon: Shield,
    description: "Research ethics training for conducting exempt human subjects research",
    category: 'standalone',
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    achievement: "Machine Learning Specialization Course",
    date: "July 2023",
    Icon: TrendingUp,
    description: "Foundational supervised learning algorithms and techniques",
    category: 'standalone',
  },
  {
    title: "Adult-to-Adult Mental Health First Aid",
    issuer: "The LightHouse Arabia",
    achievement: "Mental Health First Aid Certification",
    date: "February 2024",
    Icon: Heart, // or HeartHandshake
    description: "Evidence-based training to identify and respond to mental health crises with empathy",
    featured: false,
    category: 'award',
  }
];
