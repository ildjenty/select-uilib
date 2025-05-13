export type Tag =
  | "feature"
  | "bugfix"
  | "improvement"
  | "chore"
  | "frontend"
  | "backend"
  | "infra"
  | "design"
  | "documentation"
  | "testing"
  | "refactoring"
  | "research"
  | "security"
  | "accessibility"
  | "monitoring"
  | "support";

export const priorities = ["Low", "Medium", "High"] as const;

export type Priority = (typeof priorities)[number];

export const statuses = [
  "todo",
  "progress",
  "review",
  "done",
  "closed",
  "rejected",
] as const;

export type Status = (typeof statuses)[number];

export type Task = {
  id: string;
  title: string;
  description: string;
  status?: Status;
  tags?: Tag[];
  priority?: Priority;
  startDate?: string;
  dueDate?: string;
  assignees: string[];
};

export const tasks: Task[] = [
  {
    id: "1",
    title: "Implement User Authentication Feature",
    description:
      "Develop the user login and registration functionality including UI, API integration, and session management.",
    status: "todo",
    tags: ["feature", "frontend", "backend", "security"],
    priority: "High",
    startDate: "2025-04-01",
    dueDate: "2025-04-15",
    assignees: ["1", "3"],
  },
  {
    id: "2",
    title: "Design Homepage UI Mockups",
    description:
      "Create high-fidelity UI mockups for the new homepage design, considering responsiveness and accessibility.",
    status: "progress",
    tags: ["design", "frontend", "accessibility"],
    priority: "Medium",
    startDate: "2025-04-03",
    dueDate: "2025-04-10",
    assignees: ["7"],
  },
  {
    id: "3",
    title: "Fix API Rate Limiting Bug",
    description:
      "Identify and resolve the bug in the API rate limiting logic that affects enterprise customers.",
    status: "review",
    tags: ["bugfix", "backend", "infra"],
    priority: "High",
    startDate: "2025-04-05",
    assignees: ["2", "8"],
  },
  {
    id: "4",
    title: "Write Documentation for Payment Gateway Integration",
    description:
      "Document the process for integrating the new payment gateway, including API endpoints and example code.",
    status: "done",
    tags: ["documentation", "backend"],
    priority: "Medium",
    startDate: "2025-04-02",
    dueDate: "2025-04-08",
    assignees: ["4"],
  },
  {
    id: "5",
    title: "Refactor User Profile Service",
    description:
      "Refactor the existing user profile service to improve performance and maintainability.",
    status: "todo",
    tags: ["refactoring", "backend", "improvement"],
    priority: "Medium",
    startDate: "2025-04-10",
    dueDate: "2025-04-25",
    assignees: ["5", "1"],
  },
  {
    id: "6",
    title: "Setup CI/CD Pipeline for Frontend",
    description:
      "Configure a continuous integration and continuous deployment pipeline for the main frontend application.",
    status: "progress",
    tags: ["chore", "infra", "frontend"],
    priority: "High",
    dueDate: "2025-04-18",
    assignees: ["9"],
  },
  {
    id: "7",
    title: "Research New Charting Library",
    description:
      "Investigate and compare different charting libraries for the upcoming analytics dashboard feature.",
    status: "done",
    tags: ["research", "frontend", "feature"],
    priority: "Low",
    startDate: "2025-04-12",
    dueDate: "2025-04-22",
    assignees: ["6"],
  },
  {
    id: "8",
    title: "Conduct Security Audit for User Data Storage",
    description:
      "Perform a thorough security audit of how user data is stored and accessed.",
    status: "review",
    tags: ["security", "backend", "infra"],
    priority: "High",
    startDate: "2025-04-15",
    dueDate: "2025-04-30",
    assignees: ["10", "2"],
  },
  {
    id: "9",
    title: "Improve Accessibility of Main Navigation",
    description:
      "Enhance the main navigation component to meet WCAG AA accessibility standards.",
    status: "progress",
    tags: ["accessibility", "frontend", "improvement"],
    priority: "Medium",
    assignees: ["3"],
  },
  {
    id: "10",
    title: "Test Order Checkout Flow E2E",
    description:
      "Perform end-to-end testing for the complete order checkout workflow, covering various scenarios.",
    status: "review",
    tags: ["testing", "frontend", "backend"],
    priority: "High",
    startDate: "2025-04-20",
    dueDate: "2025-05-02",
    assignees: ["4", "7"],
  },
  {
    id: "11",
    title: "Implement Admin Dashboard Feature: User Management",
    description:
      "Add user management capabilities to the admin dashboard (list, edit, delete users).",
    status: "todo",
    tags: ["feature", "backend", "frontend"],
    priority: "High",
    startDate: "2025-04-22",
    dueDate: "2025-05-10",
    assignees: ["1", "5"],
  },
  {
    id: "12",
    title: "Set up Monitoring for API Endpoints",
    description:
      "Configure alerts and dashboards for key API endpoint performance and error rates.",
    status: "progress",
    tags: ["monitoring", "infra", "backend"],
    priority: "Medium",
    startDate: "2025-04-25",
    assignees: ["9"],
  },
  {
    id: "13",
    title: "Update Frontend Dependencies",
    description:
      "Review and update all major frontend dependencies to their latest stable versions.",
    status: "todo",
    tags: ["chore", "frontend"],
    priority: "Low",
    dueDate: "2025-05-05",
    assignees: ["6"],
  },
  {
    id: "14",
    title: "Bugfix: Image Upload Fails on Safari",
    description:
      "Investigate and fix the issue where image uploads are failing for users on Safari browser.",
    status: "review",
    tags: ["bugfix", "frontend"],
    priority: "Medium",
    startDate: "2025-04-28",
    dueDate: "2025-05-03",
    assignees: ["3"],
  },
  {
    id: "15",
    title: "Design Database Schema for New Inventory System",
    description:
      "Create the database schema for the upcoming inventory management system module.",
    status: "todo",
    tags: ["design", "backend", "feature"],
    priority: "High",
    startDate: "2025-05-01",
    dueDate: "2025-05-12",
    assignees: ["8", "2"],
  },
  {
    id: "16",
    title: "Documentation: API Authentication Guide",
    description:
      "Write a comprehensive guide on how to authenticate with our platform's API.",
    status: "progress",
    tags: ["documentation", "security"],
    priority: "Medium",
    assignees: ["4"],
  },
  {
    id: "17",
    title: "Refactor Search Algorithm for Better Relevance",
    description:
      "Improve the search algorithm to provide more relevant results to users.",
    status: "todo",
    tags: ["refactoring", "improvement", "backend"],
    priority: "High",
    startDate: "2025-05-05",
    dueDate: "2025-05-20",
    assignees: ["1", "10"],
  },
  {
    id: "18",
    title: "Support: Investigate High CPU Usage on Server X",
    description:
      "Analyze and identify the cause of unexpectedly high CPU usage on production server X.",
    status: "progress",
    tags: ["support", "infra", "monitoring"],
    priority: "High",
    startDate: "2025-05-02",
    dueDate: "2025-05-07",
    assignees: ["9"],
  },
  {
    id: "19",
    title: "Testing: Automated Tests for User Registration",
    description:
      "Write automated integration tests for the user registration flow.",
    status: "review",
    tags: ["testing", "backend", "frontend"],
    priority: "Medium",
    dueDate: "2025-05-15",
    assignees: ["7"],
  },
  {
    id: "20",
    title: "Feature: Implement Two-Factor Authentication (2FA)",
    description:
      "Add support for Two-Factor Authentication to enhance account security.",
    status: "todo",
    tags: ["feature", "security", "backend", "frontend"],
    priority: "High",
    startDate: "2025-05-10",
    dueDate: "2025-05-28",
    assignees: ["2", "5"],
  },
  {
    id: "21",
    title: "Improvement: Optimize Homepage Load Time",
    description:
      "Analyze and implement optimizations to reduce the load time of the main homepage.",
    status: "progress",
    tags: ["improvement", "frontend"],
    priority: "Medium",
    startDate: "2025-05-08",
    assignees: ["6"],
  },
  {
    id: "22",
    title: "Design: User Interface for Mobile App Settings",
    description:
      "Create UI mockups for the settings screen of the new mobile application.",
    status: "todo",
    tags: ["design", "frontend"],
    priority: "Medium",
    startDate: "2025-05-12",
    dueDate: "2025-05-22",
    assignees: ["7"],
  },
  {
    id: "23",
    title: "Chore: Update Server OS Patches",
    description:
      "Apply the latest OS patches to all production and staging servers.",
    status: "closed",
    tags: ["chore", "infra", "security"],
    priority: "Low",
    startDate: "2025-05-01",
    dueDate: "2025-05-03",
    assignees: ["9"],
  },
  {
    id: "24",
    title: "Bugfix: Incorrect Price Calculation in Cart",
    description:
      "Fix the bug where the shopping cart sometimes shows an incorrect total price.",
    status: "review",
    tags: ["bugfix", "backend", "frontend"],
    priority: "High",
    assignees: ["1", "4"],
  },
  {
    id: "25",
    title: "Documentation: Internal Coding Standards",
    description:
      "Update and expand the internal documentation regarding coding standards and best practices.",
    status: "done",
    tags: ["documentation", "chore"],
    priority: "Low",
    startDate: "2025-04-10",
    dueDate: "2025-04-30",
    assignees: ["10"],
  },
  {
    id: "26",
    title: "Research: Viability of Using WebAssembly for X",
    description:
      "Investigate if WebAssembly can be used to improve performance for a specific computationally intensive frontend task.",
    status: "progress",
    tags: ["research", "frontend", "improvement"],
    priority: "Medium",
    startDate: "2025-05-15",
    dueDate: "2025-05-29",
    assignees: ["6"],
  },
  {
    id: "27",
    title: "Accessibility: Add ARIA Labels to Dynamic Content",
    description:
      "Ensure all dynamically loaded content has appropriate ARIA labels for screen readers.",
    status: "todo",
    tags: ["accessibility", "frontend"],
    priority: "Medium",
    dueDate: "2025-05-25",
    assignees: ["3"],
  },
  {
    id: "28",
    title: "Monitoring: Dashboard for User Activity Trends",
    description:
      "Create a new dashboard to visualize user activity trends over time (signups, logins, key actions).",
    status: "progress",
    tags: ["monitoring", "backend", "feature"],
    priority: "Medium",
    startDate: "2025-05-20",
    assignees: ["8"],
  },
  {
    id: "29",
    title: "Refactor: Consolidate Duplicate Utility Functions",
    description:
      "Identify and refactor duplicated utility functions across different frontend modules.",
    status: "todo",
    tags: ["refactoring", "frontend", "chore"],
    priority: "Low",
    startDate: "2025-05-22",
    dueDate: "2025-05-30",
    assignees: ["5"],
  },
  {
    id: "30",
    title: "Security: Review Third-Party Library Vulnerabilities",
    description:
      "Perform a review of all third-party libraries for known security vulnerabilities and plan updates.",
    status: "rejected",
    tags: ["security", "chore", "infra"],
    priority: "High",
    assignees: ["10", "2"],
  },
];
