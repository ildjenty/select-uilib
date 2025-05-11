export type Status =
  | "todo"
  | "progress"
  | "review"
  | "done"
  | "closed"
  | "rejected";

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

export type Priority = "low" | "medium" | "high";

export type Task = {
  id: number;
  title: string;
  description: string;
  status?: Status;
  tags?: Tag[];
  priority?: Priority;
  startDate?: string;
  dueDate?: string;
  assignee?: string;
  createdAt?: string;
  updatedAt?: string;
};

export const tasks: Task[] = [
  {
    id: 1,
    title: "Implement user authentication",
    description:
      "Implement user authentication functionality to allow users to securely log in to the system.",
    status: "todo",
    tags: ["feature", "backend", "security"],
    priority: "high",
    startDate: "2024-01-15",
    dueDate: "2024-01-29",
    assignee: "Tanaka",
    createdAt: "2024-01-10T10:00:00.000Z",
    updatedAt: "2024-01-10T10:00:00.000Z",
  },
  {
    id: 2,
    title: "Integrate payment gateway",
    description:
      "Integrate a payment gateway to enable users to make payments for services.",
    status: "progress",
    tags: ["feature", "backend"],
    priority: "medium",
    startDate: "2024-01-22",
    dueDate: "2024-02-05",
    assignee: "Sato",
    createdAt: "2024-01-17T14:30:00.000Z",
    updatedAt: "2024-01-24T09:15:00.000Z",
  },
  {
    id: 3,
    title: "Design dashboard UI",
    description:
      "Design the user interface for the dashboard to allow users to view key information at a glance.",
    status: "review",
    tags: ["feature", "frontend", "design"],
    priority: "medium",
    startDate: "2024-01-29",
    dueDate: "2024-02-12",
    assignee: "Suzuki",
    createdAt: "2024-01-24T11:00:00.000Z",
    updatedAt: "2024-02-01T16:45:00.000Z",
  },
  {
    id: 4,
    title: "Develop API endpoints",
    description:
      "Develop API endpoints to allow the frontend application to access backend data.",
    status: "done",
    tags: ["feature", "backend"],
    priority: "high",
    startDate: "2024-02-05",
    dueDate: "2024-02-19",
    assignee: "Takahashi",
    createdAt: "2024-01-31T09:00:00.000Z",
    updatedAt: "2024-02-19T17:00:00.000Z",
  },
  {
    id: 5,
    title: "Define data model",
    description:
      "Define the data model to structure the data used by the application.",
    status: "closed",
    tags: ["feature", "backend", "infra"],
    priority: "medium",
    startDate: "2024-02-12",
    dueDate: "2024-02-26",
    assignee: "Watanabe",
    createdAt: "2024-02-07T13:00:00.000Z",
    updatedAt: "2024-02-26T18:00:00.000Z",
  },
  {
    id: 6,
    title: "Implement search functionality",
    description:
      "Implement search functionality to allow users to easily find specific information.",
    status: "todo",
    tags: ["feature", "frontend", "backend"],
    priority: "medium",
    startDate: "2024-02-19",
    dueDate: "2024-03-04",
    assignee: "Ito",
    createdAt: "2024-02-14T10:00:00.000Z",
    updatedAt: "2024-02-14T10:00:00.000Z",
  },
  {
    id: 7,
    title: "Integrate email notifications",
    description:
      "Integrate email notifications to notify users of important events.",
    status: "progress",
    tags: ["feature", "backend"],
    priority: "low",
    startDate: "2024-02-26",
    dueDate: "2024-03-11",
    assignee: "Yamamoto",
    createdAt: "2024-02-21T15:00:00.000Z",
    updatedAt: "2024-03-04T11:30:00.000Z",
  },
  {
    id: 8,
    title: "Develop reporting system",
    description: "Develop a reporting system to allow users to analyze data.",
    status: "review",
    tags: ["feature", "backend", "frontend"],
    priority: "medium",
    startDate: "2024-03-04",
    dueDate: "2024-03-18",
    assignee: "Nakamura",
    createdAt: "2024-02-28T09:30:00.000Z",
    updatedAt: "2024-03-11T14:00:00.000Z",
  },
  {
    id: 9,
    title: "Implement file upload functionality",
    description:
      "Implement file upload functionality to allow users to upload files.",
    status: "done",
    tags: ["feature", "frontend", "backend"],
    priority: "medium",
    startDate: "2024-03-11",
    dueDate: "2024-03-25",
    assignee: "Kobayashi",
    createdAt: "2024-03-06T12:00:00.000Z",
    updatedAt: "2024-03-25T17:00:00.000Z",
  },
  {
    id: 10,
    title: "Design chat interface",
    description:
      "Design a chat interface to allow users to communicate in real-time.",
    status: "closed",
    tags: ["feature", "frontend", "design"],
    priority: "high",
    startDate: "2024-03-18",
    dueDate: "2024-04-01",
    assignee: "Kato",
    createdAt: "2024-03-13T11:00:00.000Z",
    updatedAt: "2024-04-01T18:00:00.000Z",
  },
  {
    id: 11,
    title: "Fix login issue",
    description: "Fix the issue that prevents users from logging in.",
    status: "todo",
    tags: ["bugfix", "frontend", "backend"],
    priority: "high",
    startDate: "2024-03-25",
    dueDate: "2024-04-08",
    assignee: "Yoshida",
    createdAt: "2024-03-20T10:00:00.000Z",
    updatedAt: "2024-03-20T10:00:00.000Z",
  },
  {
    id: 12,
    title: "Resolve performance bottleneck",
    description:
      "Resolve the performance bottleneck to improve application speed.",
    status: "progress",
    tags: ["bugfix", "backend", "infra"],
    priority: "medium",
    startDate: "2024-04-01",
    dueDate: "2024-04-15",
    assignee: "Yamada",
    createdAt: "2024-03-27T14:00:00.000Z",
    updatedAt: "2024-04-08T12:00:00.000Z",
  },
  {
    id: 13,
    title: "Correct UI rendering error",
    description: "Correct the error in the user interface rendering.",
    status: "review",
    tags: ["bugfix", "frontend"],
    priority: "medium",
    startDate: "2024-04-08",
    dueDate: "2024-04-22",
    assignee: "Sasaki",
    createdAt: "2024-04-03T09:00:00.000Z",
    updatedAt: "2024-04-15T15:00:00.000Z",
  },
  {
    id: 14,
    title: "Fix data inconsistency",
    description: "Fix the inconsistency in the database data.",
    status: "done",
    tags: ["bugfix", "backend"],
    priority: "high",
    startDate: "2024-04-15",
    dueDate: "2024-04-29",
    assignee: "Yamaguchi",
    createdAt: "2024-04-10T13:00:00.000Z",
    updatedAt: "2024-04-29T17:00:00.000Z",
  },
  {
    id: 15,
    title: "Address security vulnerability",
    description: "Address the security vulnerability in the application.",
    status: "closed",
    tags: ["bugfix", "security", "backend"],
    priority: "high",
    startDate: "2024-04-22",
    dueDate: "2024-05-06",
    assignee: "Matsumoto",
    createdAt: "2024-04-17T11:00:00.000Z",
    updatedAt: "2024-05-06T18:00:00.000Z",
  },
  {
    id: 16,
    title: "Repair crash on mobile",
    description: "Repair the issue causing the mobile application to crash.",
    status: "todo",
    tags: ["bugfix", "frontend"],
    priority: "high",
    startDate: "2024-04-29",
    dueDate: "2024-05-13",
    assignee: "Inoue",
    createdAt: "2024-04-24T10:00:00.000Z",
    updatedAt: "2024-04-24T10:00:00.000Z",
  },
  {
    id: 17,
    title: "Fix broken link",
    description: "Fix the broken link on the website.",
    status: "progress",
    tags: ["bugfix", "frontend", "documentation"],
    priority: "low",
    startDate: "2024-05-06",
    dueDate: "2024-05-20",
    assignee: "Saito",
    createdAt: "2024-05-02T15:00:00.000Z",
    updatedAt: "2024-05-13T11:00:00.000Z",
  },
  {
    id: 18,
    title: "Correct typo in documentation",
    description: "Correct the typo in the documentation.",
    status: "review",
    tags: ["bugfix", "documentation"],
    priority: "low",
    startDate: "2024-05-13",
    dueDate: "2024-05-27",
    assignee: "Kimura",
    createdAt: "2024-05-09T09:30:00.000Z",
    updatedAt: "2024-05-20T14:00:00.000Z",
  },
  {
    id: 19,
    title: "Repair incorrect calculation",
    description: "Repair the incorrect calculation logic.",
    status: "done",
    tags: ["bugfix", "backend"],
    priority: "medium",
    startDate: "2024-05-20",
    dueDate: "2024-06-03",
    assignee: "Hayashi",
    createdAt: "2024-05-15T12:00:00.000Z",
    updatedAt: "2024-06-03T17:00:00.000Z",
  },
  {
    id: 20,
    title: "Resolve memory leak",
    description: "Resolve the memory leak in the application.",
    status: "closed",
    tags: ["bugfix", "backend", "infra"],
    priority: "high",
    startDate: "2024-05-27",
    dueDate: "2024-06-10",
    assignee: "Shimizu",
    createdAt: "2024-05-22T11:00:00.000Z",
    updatedAt: "2024-06-10T18:00:00.000Z",
  },
  {
    id: 21,
    title: "Improve code readability",
    description: "Improve code readability by refactoring the code.",
    status: "todo",
    tags: ["improvement", "refactoring", "backend"],
    priority: "low",
    startDate: "2024-06-03",
    dueDate: "2024-06-17",
    assignee: "Murata",
    createdAt: "2024-05-29T10:00:00.000Z",
    updatedAt: "2024-05-29T10:00:00.000Z",
  },
  {
    id: 22,
    title: "Enhance error handling",
    description: "Enhance error handling in the application.",
    status: "progress",
    tags: ["improvement", "backend"],
    priority: "medium",
    startDate: "2024-06-10",
    dueDate: "2024-06-24",
    assignee: "Abe",
    createdAt: "2024-06-06T14:00:00.000Z",
    updatedAt: "2024-06-17T12:00:00.000Z",
  },
  {
    id: 23,
    title: "Optimize database queries",
    description: "Optimize database queries to improve performance.",
    status: "review",
    tags: ["improvement", "backend"],
    priority: "medium",
    startDate: "2024-06-17",
    dueDate: "2024-07-01",
    assignee: "Kudo",
    createdAt: "2024-06-12T11:00:00.000Z",
    updatedAt: "2024-06-24T15:00:00.000Z",
  },
  {
    id: 24,
    title: "Refactor authentication module",
    description:
      "Refactor the authentication module to improve maintainability.",
    status: "done",
    tags: ["improvement", "refactoring", "backend"],
    priority: "high",
    startDate: "2024-07-01",
    dueDate: "2024-07-15",
    assignee: "Ishikawa",
    createdAt: "2024-06-26T10:00:00.000Z",
    updatedAt: "2024-07-15T18:00:00.000Z",
  },
  {
    id: 25,
    title: "Improve API documentation",
    description:
      "Improve API documentation to provide better guidance for developers.",
    status: "closed",
    tags: ["improvement", "documentation"],
    priority: "medium",
    startDate: "2024-07-15",
    dueDate: "2024-07-29",
    assignee: "Fujimoto",
    createdAt: "2024-07-10T11:00:00.000Z",
    updatedAt: "2024-07-29T17:00:00.000Z",
  },
  {
    id: 26,
    title: "Enhance logging system",
    description: "Enhance the logging system to provide better insights.",
    status: "todo",
    tags: ["improvement", "monitoring"],
    priority: "low",
    startDate: "2024-07-29",
    dueDate: "2024-08-12",
    assignee: "Okada",
    createdAt: "2024-07-24T10:00:00.000Z",
    updatedAt: "2024-07-24T10:00:00.000Z",
  },
  {
    id: 27,
    title: "Improve test coverage",
    description:
      "Improve test coverage to ensure better reliability of the application.",
    status: "progress",
    tags: ["improvement", "testing"],
    priority: "medium",
    startDate: "2024-08-05",
    dueDate: "2024-08-19",
    assignee: "Miyazaki",
    createdAt: "2024-08-01T14:00:00.000Z",
    updatedAt: "2024-08-12T12:00:00.000Z",
  },
  {
    id: 28,
    title: "Enhance user onboarding process",
    description:
      "Enhance the user onboarding process to improve user experience.",
    status: "review",
    tags: ["improvement", "frontend"],
    priority: "medium",
    startDate: "2024-08-12",
    dueDate: "2024-08-26",
    assignee: "Fujii",
    createdAt: "2024-08-07T11:00:00.000Z",
    updatedAt: "2024-08-19T15:00:00.000Z",
  },
  {
    id: 29,
    title: "Improve application performance",
    description:
      "Improve application performance by optimizing resource usage.",
    status: "done",
    tags: ["improvement", "backend"],
    priority: "high",
    startDate: "2024-08-26",
    dueDate: "2024-09-09",
    assignee: "Hirano",
    createdAt: "2024-08-21T10:00:00.000Z",
    updatedAt: "2024-09-09T18:00:00.000Z",
  },
  {
    id: 30,
    title: "Enhance user feedback system",
    description:
      "Enhance the user feedback system to gather more insights from users.",
    status: "closed",
    tags: ["improvement", "frontend"],
    priority: "medium",
    startDate: "2024-09-09",
    dueDate: "2024-09-23",
    assignee: "Sakurai",
    createdAt: "2024-09-04T11:00:00.000Z",
    updatedAt: "2024-09-23T17:00:00.000Z",
  },
];
