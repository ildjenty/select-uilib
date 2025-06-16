export type User = {
  id: string;
  name: string;
  email: string;
  online: boolean;
  avatarSrc: string;
};

export const users: User[] = [
  {
    id: "1",
    name: "Michael Smith",
    email: "m.smith@example.com",
    online: true,
    avatarSrc: "/cat-1.jpg",
  },
  {
    id: "2",
    name: "Jennifer Davis",
    email: "j.davis@example.com",
    online: false,
    avatarSrc: "/cat-2.jpg",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "j.wilson@example.com",
    online: false,
    avatarSrc: "/cat-3.jpg",
  },
  {
    id: "4",
    name: "Linda Garcia",
    email: "l.garcia@example.com",
    online: true,
    avatarSrc: "/cat-4.jpg",
  },
  {
    id: "5",
    name: "Robert Miller",
    email: "r.miller@example.com",
    online: true,
    avatarSrc: "/cat-5.jpg",
  },
  {
    id: "6",
    name: "Patricia Anderson",
    email: "p.anderson@example.com",
    online: true,
    avatarSrc: "/cat-6.jpg",
  },
  {
    id: "7",
    name: "John Thomas",
    email: "j.thomas@example.com",
    online: false,
    avatarSrc: "/cat-7.jpg",
  },
  {
    id: "8",
    name: "Elizabeth Jackson",
    email: "e.jackson@example.com",
    online: true,
    avatarSrc: "/cat-8.jpg",
  },
  {
    id: "9",
    name: "David White",
    email: "d.white@example.com",
    online: true,
    avatarSrc: "/cat-9.jpg",
  },
  {
    id: "10",
    name: "Susan Harris",
    email: "s.harris@example.com",
    online: false,
    avatarSrc: "/cat-10.jpg",
  },
];