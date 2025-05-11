export type Channel = {
  id: string;
  isPublic: boolean;
};

export const channels: Channel[] = [
  {
    id: "general",
    isPublic: true,
  },
  {
    id: "management",
    isPublic: false,
  },
  {
    id: "HR",
    isPublic: false,
  },
  {
    id: "dev",
    isPublic: true,
  },
  {
    id: "sales",
    isPublic: true,
  },
  {
    id: "project-blue-harbor-goods",
    isPublic: false,
  },
  {
    id: "project-apex-innovations",
    isPublic: false,
  },
  {
    id: "project-summit-solutions",
    isPublic: false,
  },
  {
    id: "bot-notifications",
    isPublic: true,
  },
];
