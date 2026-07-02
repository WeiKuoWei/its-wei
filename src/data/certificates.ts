/**
 * Credentials: degrees, awards, certifications
 * Source of truth: latest resume (2026-06)
 */

export interface Credential {
  title: string;
  issuer: string;
  detail: string;
  date: string;
  file?: string; // path under BASE_URL
}

export const credentials: Credential[] = [
  {
    title: "B.S. Computer Science, Minor in Mathematics",
    issuer: "NYU Abu Dhabi",
    detail: "Magna Cum Laude — GPA 3.94/4.00",
    date: "May 2025",
    file: "certificates/diploma.pdf",
  },
  {
    title: "NYU Abu Dhabi Founder's Award",
    issuer: "NYU Abu Dhabi",
    detail: "Highest Honors",
    date: "May 2025",
    file: "certificates/founders-award.pdf",
  },
  {
    title: "Regional Intern Competition — Gold Award",
    issuer: "TSMC",
    detail: "Top 4 of 250 interns, ML research",
    date: "Aug 2024",
  },
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    detail: "9-course specialization — Python, SQL, ML",
    date: "Jan 2024",
    file: "certificates/ibm-data-science.pdf",
  },
  {
    title: "Deep Learning Professional Certificate",
    issuer: "DeepLearning.AI",
    detail: "5-course certificate — neural networks to sequence models",
    date: "Jul 2023",
    file: "certificates/deep-learning.pdf",
  },
  {
    title: "ARML International — 3rd Place",
    issuer: "American Regions Mathematics League",
    detail: "International mathematics competition",
    date: "Jun 2020",
  },
];
