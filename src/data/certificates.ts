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
  ExternalLink,
  FileText,
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
} from "lucide-react";

export interface Certificate {
  title: string;
  issuer: string;
  achievement: string;
  date: string;
  Icon: LucideIcon;
  certificateFile?: string;
  verifyLink?: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    title: "NYU Founder's Day Award",
    issuer: "New York University",
    achievement: "Highest Bracket of Scholastic Preferment",
    date: "April 2025",
    Icon: GraduationCap,
    description: "University recognition for outstanding academic achievement"
  },
  {
    title: "TSMC Regional Intern Competition Gold Award",
    issuer: "Taiwan Semiconductor Manufacturing Company",
    achievement: "Top 4 out of 250 interns - recognized for outstanding ML research",
    date: "Summer 2023",
    Icon: Trophy,
    description: "Gold Award for Machine Learning Innovation in Semiconductor Manufacturing",
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM via Coursera",
    achievement:
      "Completed 9-course specialization covering data science methodology, Python, SQL, and machine learning",
    date: "2023",
    Icon: GraduationCap,
    description: "Comprehensive training in data analysis, visualization, and ML algorithms",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI via Coursera",
    achievement: "5-course specialization by Andrew Ng covering neural networks, CNNs, RNNs, and transformers",
    date: "2023",
    Icon: Brain,
    description: "Advanced deep learning architectures and practical implementation",
  },
  {
  title: "CITI Program - Investigators Conducting Exempt Research",
  issuer: "CITI Program",
  achievement: "Basic Course Completion",
  date: "March 2024",
  Icon: Shield, // or FileCheck
  description: "Research ethics training for conducting exempt human subjects research"
  },
  {
    title: "American Region Mathematics League International",
    issuer: "ARML",
    achievement: "3rd Place in International Mathematics Competition",
    date: "2019",
    Icon: Award,
    description: "Top performance in prestigious high school mathematics competition",
  },
  {
    title: "Convolutional Neural Networks",
    issuer: "DeepLearning.AI",
    achievement: "Deep Learning Specialization Course",
    date: "May 2023",
    Icon: Brain,
    description: "Advanced training in CNNs for computer vision applications"
  },
  {
    title: "Improving Deep Neural Networks",
    issuer: "DeepLearning.AI",
    achievement: "Hyperparameter Tuning, Regularization and Optimization",
    date: "February 2023",
    Icon: Settings,
    description: "Advanced techniques for optimizing deep learning models"
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    achievement: "Deep Learning Specialization Course",
    date: "February 2023",
    Icon: Network,
    description: "Foundations of neural networks and deep learning architectures"
  },
  {
    title: "Sequence Models",
    issuer: "DeepLearning.AI",
    achievement: "Deep Learning Specialization Course",
    date: "June 2023",
    Icon: GitBranch, // or Workflow
    description: "RNNs, LSTMs, and attention mechanisms for sequential data"
  },
  {
    title: "Structuring Machine Learning Projects",
    issuer: "DeepLearning.AI",
    achievement: "Deep Learning Specialization Course",
    date: "March 2023",
    Icon: FolderTree,
    description: "Best practices for building successful ML projects"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    achievement: "Machine Learning Specialization Course",
    date: "July 2023",
    Icon: TrendingUp,
    description: "Foundational supervised learning algorithms and techniques"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    issuer: "IBM",
    achievement: "IBM Data Science Professional Certificate Course",
    date: "August 2023",
    Icon: Database,
    description: "SQL and database management for data science applications"
  },
  {
    title: "Applied Data Science Capstone",
    issuer: "IBM",
    achievement: "IBM Data Science Professional Certificate Course",
    date: "January 2024",
    Icon: Rocket,
    description: "Capstone project applying data science skills to real-world problems"
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    achievement: "IBM Data Science Professional Certificate Course",
    date: "January 2024",
    Icon: Bot,
    description: "Practical machine learning algorithms and implementation in Python"
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM",
    achievement: "IBM Data Science Professional Certificate Course",
    date: "January 2024",
    Icon: BarChart3,
    description: "Creating impactful visualizations using Python libraries"
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    achievement: "IBM Data Science Professional Certificate Course",
    date: "September 2023",
    Icon: LineChart,
    description: "Data manipulation, analysis, and modeling with Python"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    achievement: "IBM Data Science Professional Certificate Course",
    date: "July 2023",
    Icon: Code,
    description: "Python programming fundamentals for data science and AI"
  },
  {
    title: "Data Science Methodology",
    issuer: "IBM",
    achievement: "IBM Data Science Professional Certificate Course",
    date: "July 2023",
    Icon: GitBranch,
    description: "Structured approach to solving data science problems"
  }
];
