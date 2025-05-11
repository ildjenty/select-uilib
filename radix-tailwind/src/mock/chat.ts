export type Message = {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
};

export type Thread = Message & {
  replies: Message[];
};

export const threads: Thread[] = [
  {
    id: "1",
    userId: "1", // Michael Smith
    content:
      "Good morning team.\n\nLet's discuss the Q3 marketing strategy.\nJennifer, can you kick us off with the latest analytics?",
    timestamp: "2025-04-01T09:00:00Z",
    replies: [
      {
        id: "2",
        userId: "2", // Jennifer Davis
        content:
          "Certainly, Michael.\nThe data from last quarter shows a significant increase in engagement on our new social media campaign.\nI've prepared a detailed report which I've shared in the drive.",
        timestamp: "2025-04-01T09:05:00Z",
      },
      {
        id: "3",
        userId: "4", // Linda Garcia
        content:
          "Thanks, Jennifer.\nThat's great news.\nI think we should leverage this momentum.\nPerhaps we can explore a targeted ad campaign for the demographics that showed the highest engagement?",
        timestamp: "2025-04-01T09:10:00Z",
      },
      {
        id: "4",
        userId: "1", // Michael Smith
        content:
          "Good point, Linda.\nRobert, what are your thoughts on the budget for a targeted ad spend?",
        timestamp: "2025-04-01T09:12:00Z",
      },
      {
        id: "5",
        userId: "5", // Robert Miller
        content:
          "We have some flexibility.\nI'll review Jennifer's report and Linda's suggestion and propose a budget allocation by EOD.\nWe need to ensure it aligns with our overall Q3 financial goals.",
        timestamp: "2025-04-01T09:18:00Z",
      },
    ],
  },
  {
    id: "6",
    userId: "6", // Patricia Anderson
    content:
      "Hi everyone, I've finalized the agenda for the client presentation next week.\nPlease review it and let me know if you have any feedback by tomorrow afternoon.",
    timestamp: "2025-05-11T14:30:00Z",
    replies: [
      {
        id: "7",
        userId: "3", // James Wilson
        content:
          "Looks comprehensive, Patricia.\nI'll go through it in detail and send my comments.",
        timestamp: "2025-05-11T15:00:00Z",
      },
      {
        id: "8",
        userId: "8", // Elizabeth Jackson
        content:
          "Thanks, Patricia.\nCould we perhaps add a small segment on our sustainability initiatives? I think the client would appreciate that.",
        timestamp: "2025-05-11T15:35:00Z",
      },
      {
        id: "9",
        userId: "6", // Patricia Anderson
        content:
          "Excellent suggestion, Elizabeth.\nI'll incorporate that.\nJames, looking forward to your feedback.",
        timestamp: "2025-05-11T16:00:00Z",
      },
    ],
  },
  {
    id: "10",
    userId: "9", // David White
    content:
      "Team, quick update on the Project Phoenix deployment.\nWe're currently on schedule for the go-live next Monday.\nAll major testing phases have been completed successfully.",
    timestamp: "2025-04-01T10:00:00Z",
    replies: [
      {
        id: "11",
        userId: "7", // John Thomas
        content:
          "That's fantastic news, David! Great work to everyone involved.\nAre there any contingency plans in place, just in case?",
        timestamp: "2025-04-01T10:05:00Z",
      },
      {
        id: "12",
        userId: "10", // Susan Harris
        content:
          "Confirming from the QA side, all critical test cases passed.\nWe have a few minor UI suggestions logged, but nothing that should delay the launch.",
        timestamp: "2025-04-01T10:08:00Z",
      },
      {
        id: "13",
        userId: "9", // David White
        content:
          "Yes, John, we have a rollback plan and a dedicated support team on standby for the first 48 hours post-launch.\nThanks, Susan, we'll address those UI suggestions in the first patch.",
        timestamp: "2025-04-01T10:15:00Z",
      },
    ],
  },
  {
    id: "14",
    userId: "4", // Linda Garcia
    content:
      "Does anyone have the final approved copy for the newsletter? I need to get it to the design team by EOD.",
    timestamp: "2025-04-01T11:00:00Z",
    replies: [
      {
        id: "15",
        userId: "2", // Jennifer Davis
        content:
          "I believe Michael was giving it a final review.\nMichael, any updates?",
        timestamp: "2025-04-01T11:02:00Z",
      },
      {
        id: "16",
        userId: "1", // Michael Smith
        content:
          "Yes, apologies for the delay.\nI've just approved it.\nYou can find the final version in the 'Approved Content' folder.\nThanks, Linda!",
        timestamp: "2025-04-01T11:05:00Z",
      },
      {
        id: "17",
        userId: "4", // Linda Garcia
        content:
          "Perfect, got it! Thanks, Michael.\nSending it over to design now.",
        timestamp: "2025-04-01T11:06:00Z",
      },
    ],
  },
  {
    id: "18",
    userId: "5", // Robert Miller
    content:
      "Reminder: The quarterly budget review meeting is scheduled for this Friday at 10 AM.\nPlease come prepared with your department's preliminary figures.",
    timestamp: "2025-04-01T11:30:00Z",
    replies: [],
  },
  {
    id: "19",
    userId: "8", // Elizabeth Jackson
    content:
      "I'm looking for volunteers to help organize the upcoming team-building event.\nAny ideas or suggestions for activities would be greatly appreciated!",
    timestamp: "2025-04-01T13:00:00Z",
    replies: [
      {
        id: "20",
        userId: "10", // Susan Harris
        content:
          "I'd be happy to help, Elizabeth! How about an escape room challenge? Or maybe a potluck lunch?",
        timestamp: "2025-04-01T13:05:00Z",
      },
      {
        id: "21",
        userId: "3", // James Wilson
        content:
          "Count me in as well.\nA charity run/walk could be a good option too, combining team building with social responsibility.",
        timestamp: "2025-04-01T13:10:00Z",
      },
    ],
  },
  {
    id: "22",
    userId: "7", // John Thomas
    content:
      "Has anyone encountered issues with the new CRM software? I'm having trouble accessing some of the advanced reporting features.",
    timestamp: "2025-04-01T14:00:00Z",
    replies: [
      {
        id: "23",
        userId: "9", // David White
        content:
          "I had a similar issue yesterday, John.\nIt turned out to be a permissions setting.\nI can swing by your desk later to take a look if you'd like.",
        timestamp: "2025-04-01T14:05:00Z",
      },
      {
        id: "24",
        userId: "7", // John Thomas
        content: "That would be great, David.\nThanks!",
        timestamp: "2025-04-01T14:06:00Z",
      },
    ],
  },
  {
    id: "25",
    userId: "2", // Jennifer Davis
    content:
      "The competitor analysis report for Q2 is now available on the shared drive.\nKey takeaway: We need to be more agile in responding to market changes.",
    timestamp: "2025-04-01T14:45:00Z",
    replies: [],
  },
  {
    id: "-26",
    userId: "1", // Michael Smith
    content:
      "Please ensure all timesheets for the previous week are submitted by COB today.\nThis is crucial for payroll processing.",
    timestamp: "2025-04-01T15:00:00Z",
    replies: [
      {
        id: "26",
        userId: "5", // Robert Miller
        content: "Submitted mine just now.\nThanks for the reminder, Michael.",
        timestamp: "2025-04-01T15:02:00Z",
      },
    ],
  },
  {
    id: "27",
    userId: "4", // Linda Garcia
    content:
      "We've received positive feedback from the Alpha client regarding the new feature prototype.\nThey highlighted the improved user interface.",
    timestamp: "2025-04-01T16:00:00Z",
    replies: [],
  },
  {
    id: "28",
    userId: "6", // Patricia Anderson
    content:
      "Just a heads-up, the main conference room will be unavailable tomorrow morning due to scheduled maintenance.",
    timestamp: "2025-04-01T16:30:00Z",
    replies: [],
  },
  {
    id: "29",
    userId: "10", // Susan Harris
    content:
      "I'm working on the test plan for the upcoming mobile app release.\nIf anyone has specific scenarios they'd like me to include, please let me know by Wednesday.",
    timestamp: "2025-05-13T09:30:00Z",
    replies: [
      {
        id: "30",
        userId: "7", // John Thomas
        content:
          "Thanks, Susan.\nCould you please add a test case for offline data synchronization? That's a critical feature for our field agents.",
        timestamp: "2025-05-13T09:45:00Z",
      },
      {
        id: "31",
        userId: "10", // Susan Harris
        content: "Will do, John.\nGood call.",
        timestamp: "2025-05-13T09:47:00Z",
      },
    ],
  },
  {
    id: "32",
    userId: "3", // James Wilson
    content:
      "The latest industry trend report on AI in customer service is quite insightful.\nI recommend everyone take a look when they have a moment.\nLink is in the #general channel.",
    timestamp: "2025-05-13T10:15:00Z",
    replies: [],
  },
  {
    id: "33",
    userId: "8", // Elizabeth Jackson
    content:
      "Update on the team-building event: We're leaning towards an afternoon of volunteering followed by a casual dinner.\nMore details to follow soon!",
    timestamp: "2025-05-13T11:00:00Z",
    replies: [],
  },
  {
    id: "34",
    userId: "9", // David White
    content:
      "The server migration is planned for this Saturday.\nExpect some downtime for internal services between 2 AM and 6 AM.\nPlease plan accordingly.",
    timestamp: "2025-05-13T11:45:00Z",
    replies: [
      {
        id: "35",
        userId: "1", // Michael Smith
        content:
          "Thanks for the heads-up, David.\nPlease send out a calendar invite as well.",
        timestamp: "2025-05-13T11:50:00Z",
      },
    ],
  },
  {
    id: "36",
    userId: "5", // Robert Miller
    content:
      "Reviewing the Q3 budget proposals.\nSome excellent initiatives here.\nLet's schedule a follow-up to discuss prioritization next week.",
    timestamp: "2025-05-13T14:00:00Z",
    replies: [],
  },
  {
    id: "37",
    userId: "2", // Jennifer Davis
    content:
      "The A/B testing results for the new landing page design are in.\nVersion B showed a 15% higher conversion rate.\nWe should proceed with rolling out Version B.",
    timestamp: "2025-05-13T15:30:00Z",
    replies: [
      {
        id: "38",
        userId: "4", // Linda Garcia
        content:
          "That's great to hear, Jennifer! I'll coordinate with the web team to get Version B deployed.",
        timestamp: "2025-05-13T15:35:00Z",
      },
    ],
  },
  {
    id: "39",
    userId: "1", // Michael Smith
    content:
      "Reminder about the all-hands meeting tomorrow at 9 AM.\nWe'll be discussing the annual performance review process.",
    timestamp: "2025-05-13T16:00:00Z",
    replies: [],
  },
  {
    id: "40",
    userId: "6", // Patricia Anderson
    content:
      "The client feedback on the latest project milestone has been overwhelmingly positive.\nThey were particularly impressed with the quick turnaround on their change requests.\nWell done, team!",
    timestamp: "2025-05-14T10:00:00Z",
    replies: [
      {
        id: "41",
        userId: "3", // James Wilson
        content: "Great news, Patricia! Thanks for sharing.",
        timestamp: "2025-05-14T10:05:00Z",
      },
      {
        id: "42",
        userId: "9", // David White
        content: "Excellent work everyone!",
        timestamp: "2025-05-14T10:07:00Z",
      },
    ],
  },
  {
    id: "43",
    userId: "7", // John Thomas
    content:
      "I'll be out of office next Monday and Tuesday for a training session.\nFor urgent matters, please contact David White.",
    timestamp: "2025-05-14T11:00:00Z",
    replies: [],
  },
];
