/**
 * Certificates and awards data
 */

import { Award, ExternalLink, FileText, GraduationCap, Brain, Trophy, LucideIcon } from "lucide-react";

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
    title: "TSMC Regional Intern Competition Gold Award",
    issuer: "Taiwan Semiconductor Manufacturing Company",
    achievement: "Top 4 out of 250 regional interns - recognized for outstanding ML research",
    date: "Summer 2023",
    Icon: Trophy,
    // verifyLink: "/certificates/founders-award.pdf",
    description: "Gold Award for Machine Learning Innovation in Semiconductor Manufacturing",
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM via Coursera",
    achievement:
      "Completed 9-course specialization covering data science methodology, Python, SQL, and machine learning",
    date: "2023",
    Icon: GraduationCap,
    // certificateFile: "/certificates/ibm-data-science.pdf",
    // verifyLink: "https://www.coursera.org/account/accomplishments/professional-cert/",
    description: "Comprehensive training in data analysis, visualization, and ML algorithms",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI via Coursera",
    achievement: "5-course specialization by Andrew Ng covering neural networks, CNNs, RNNs, and transformers",
    date: "2023",
    Icon: Brain,
    // certificateFile: "/certificates/deep-learning.pdf",
    // verifyLink: "https://www.coursera.org/account/accomplishments/specialization/",
    description: "Advanced deep learning architectures and practical implementation",
  },
  {
    title: "American Region Mathematics League International",
    issuer: "ARML",
    achievement: "3rd Place in International Mathematics Competition",
    date: "2019",
    Icon: Award,
    description: "Top performance in prestigious high school mathematics competition",
  },
];
