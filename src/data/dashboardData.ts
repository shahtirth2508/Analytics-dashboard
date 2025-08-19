// Types
export interface StatItem {
  label: string;
  count: number;
  bgColor: string;
  textColor: string;
}

export interface StatsCard {
  icon: string;
  iconBg?: string;
  title: string;
  stats: StatItem[];
}

export interface WorkTask {
  id: string;
  title: string;
  date: string;
  time: string;
  comments: number;
  status: string;
  category: string;
  isHighlighted: boolean;
}

export interface Employee {
  name: string;
  department: string;
  assigned: number;
  ongoing: number;
  overdue: number;
  completed: string;
}

export interface OverdueTask {
  task: string;
  assignedTo: string;
  status: string;
  dueDate: string;
}

export interface Workflow {
  title: string;
  responses: number;
  tasks: number;
}

export interface NotepadItem {
  title: string;
  description: string;
}

// Stats Cards Data
export const statsCards: StatsCard[] = [
  {
    icon: "https://c.animaapp.com/mehdckjb0AcQbl/img/frame-1410090830.svg",
    title: "22 Ai Review",
    stats: [
      {
        label: "Manually Approve",
        count: 2,
        bgColor: "bg-errorbg",
        textColor: "text-errorcontent",
      },
      {
        label: "Completed",
        count: 10,
        bgColor: "bg-successbg",
        textColor: "text-successcontent",
      },
      {
        label: "Rejected by Ai",
        count: 10,
        bgColor: "bg-warningbg",
        textColor: "text-warningcontent",
      },
    ],
  },
  {
    icon: "https://c.animaapp.com/mehdckjb0AcQbl/img/task.svg",
    iconBg: "bg-[#e7f1ff]",
    title: "22 Tasks",
    stats: [
      {
        label: "Ongoing",
        count: 10,
        bgColor: "bg-warningbg",
        textColor: "text-warningcontent",
      },
      {
        label: "Overdue",
        count: 2,
        bgColor: "bg-errorbg",
        textColor: "text-errorcontent",
      },
      {
        label: "Completed",
        count: 10,
        bgColor: "bg-successbg",
        textColor: "text-successcontent",
      },
      {
        label: "Scheduled",
        count: 0,
        bgColor: "bg-scheduledbg",
        textColor: "text-scheduledcontent",
      },
    ],
  },
  {
    icon: "https://c.animaapp.com/mehdckjb0AcQbl/img/alert-circle.svg",
    iconBg: "bg-issuebg",
    title: "22 Issues",
    stats: [
      {
        label: "Ignored",
        count: 2,
        bgColor: "bg-errorbg",
        textColor: "text-errorcontent",
      },
      {
        label: "Resolved",
        count: 10,
        bgColor: "bg-successbg",
        textColor: "text-successcontent",
      },
      {
        label: "Open",
        count: 10,
        bgColor: "bg-warningbg",
        textColor: "text-warningcontent",
      },
    ],
  },
  {
    icon: "https://c.animaapp.com/mehdckjb0AcQbl/img/layout-alt-02-1.svg",
    iconBg: "bg-scheduledbg",
    title: "20 Forms",
    stats: [
      {
        label: "Open Responses",
        count: 0,
        bgColor: "bg-scheduledbg",
        textColor: "text-scheduledcontent",
      },
      {
        label: "Submitted Responses",
        count: 10,
        bgColor: "bg-successbg",
        textColor: "text-successcontent",
      },
      {
        label: "Ongoing Tasks",
        count: 10,
        bgColor: "bg-warningbg",
        textColor: "text-warningcontent",
      },
    ],
  },
];

// Work Tasks Data
export const workTasks: WorkTask[] = [
  {
    id: "#3789",
    title: "How to Manage Stock",
    date: "22 June, 2024",
    time: "11:00 am",
    comments: 14,
    status: "Ongoing",
    category: "Inventory",
    isHighlighted: false,
  },
  {
    id: "#3789",
    title: "How to Manage Stock",
    date: "3 April, 2025",
    time: "11:00 am",
    comments: 14,
    status: "Ongoing",
    category: "Inventory",
    isHighlighted: true,
  },
  {
    id: "#7182",
    title: "Tracking Daily Earnings",
    date: "12 October, 2024",
    time: "11:00 am",
    comments: 18,
    status: "Ongoing",
    category: "Inventory",
    isHighlighted: false,
  },
  {
    id: "#6047",
    title: "Tool for Managing Reservations",
    date: "5 September, 2025",
    time: "11:00 am",
    comments: 17,
    status: "Ongoing",
    category: "Inventory",
    isHighlighted: false,
  },
  {
    id: "#6047",
    title: "Tool for Managing Reservations",
    date: "5 September, 2025",
    time: "11:00 am",
    comments: 17,
    status: "Ongoing",
    category: "Inventory",
    isHighlighted: false,
  },
  {
    id: "#4820",
    title: "Coordinating Employee Shifts",
    date: "10 July, 2025",
    time: "11:00 am",
    comments: 15,
    status: "Ongoing",
    category: "Inventory",
    isHighlighted: false,
  },
  {
    id: "#5913",
    title: "Reviewing Client Happiness",
    date: "1 August, 2024",
    time: "11:00 am",
    comments: 16,
    status: "Ongoing",
    category: "Inventory",
    isHighlighted: false,
  },
  {
    id: "#2456",
    title: "Ways to Prepare Meals",
    date: "15 May, 2024",
    time: "11:00 am",
    comments: 13,
    status: "Ongoing",
    category: "Inventory",
    isHighlighted: false,
  },
];

// Employee Data
export const employeeData: Employee[] = [
  {
    name: "Anita",
    department: "IT Services",
    assigned: 90,
    ongoing: 90,
    overdue: 90,
    completed: "90%",
  },
  {
    name: "Rahul",
    department: "Human Resources",
    assigned: 31,
    ongoing: 31,
    overdue: 31,
    completed: "31%",
  },
  {
    name: "Priya",
    department: "Sales Division",
    assigned: 45,
    ongoing: 45,
    overdue: 45,
    completed: "45%",
  },
  {
    name: "Vikram",
    department: "Research and Development",
    assigned: 79,
    ongoing: 65,
    overdue: 14,
    completed: "79%",
  },
  {
    name: "Sita",
    department: "Marketing Team",
    assigned: 52,
    ongoing: 42,
    overdue: 10,
    completed: "52%",
  },
  {
    name: "Ravi",
    department: "Finance Department",
    assigned: 64,
    ongoing: 50,
    overdue: 14,
    completed: "64%",
  },
  {
    name: "Kiran",
    department: "Customer Support",
    assigned: 87,
    ongoing: 70,
    overdue: 17,
    completed: "87%",
  },
  {
    name: "Neha",
    department: "Quality Assurance",
    assigned: 42,
    ongoing: 35,
    overdue: 7,
    completed: "83%",
  },
  {
    name: "Amit",
    department: "Operations",
    assigned: 65,
    ongoing: 48,
    overdue: 17,
    completed: "74%",
  },
  {
    name: "Pooja",
    department: "Design Team",
    assigned: 33,
    ongoing: 25,
    overdue: 8,
    completed: "76%",
  },
  {
    name: "Rajesh",
    department: "Product Management",
    assigned: 58,
    ongoing: 40,
    overdue: 18,
    completed: "69%",
  },
  {
    name: "Deepika",
    department: "Business Development",
    assigned: 71,
    ongoing: 55,
    overdue: 16,
    completed: "77%",
  },
  {
    name: "Arjun",
    department: "Data Analytics",
    assigned: 39,
    ongoing: 30,
    overdue: 9,
    completed: "77%",
  },
  {
    name: "Kavya",
    department: "Content Strategy",
    assigned: 46,
    ongoing: 35,
    overdue: 11,
    completed: "76%",
  },
  {
    name: "Rohit",
    department: "DevOps",
    assigned: 82,
    ongoing: 60,
    overdue: 22,
    completed: "73%",
  },
  {
    name: "Sneha",
    department: "UX Research",
    assigned: 29,
    ongoing: 22,
    overdue: 7,
    completed: "76%",
  },
  {
    name: "Manoj",
    department: "Security",
    assigned: 54,
    ongoing: 38,
    overdue: 16,
    completed: "70%",
  },
  {
    name: "Priyanka",
    department: "Legal Affairs",
    assigned: 18,
    ongoing: 14,
    overdue: 4,
    completed: "78%",
  },
];

// Overdue Tasks Data
export const overdueTasksData: OverdueTask[] = [
  {
    task: "Menu Planning",
    assignedTo: "Ajay",
    status: "Overdue",
    dueDate: "12-07-2024",
  },
  {
    task: "Staff Scheduling",
    assignedTo: "Niraj",
    status: "Overdue",
    dueDate: "01-08-2023",
  },
  {
    task: "Inventory management",
    assignedTo: "Vijay",
    status: "Overdue",
    dueDate: "02-09-2022",
  },
  {
    task: "Customer Feedback Analysis",
    assignedTo: "Arvind",
    status: "Overdue",
    dueDate: "11-06-2025",
  },
  {
    task: "Budget Forecasting",
    assignedTo: "Priya",
    status: "Overdue",
    dueDate: "04-11-2020",
  },
  {
    task: "Marketing Strategy Development",
    assignedTo: "Suresh",
    status: "Overdue",
    dueDate: "10-05-2026",
  },
  {
    task: "Quality Assurance Testing",
    assignedTo: "Fatima",
    status: "Overdue",
    dueDate: "03-10-2021",
  },
];

// Workflows Data
export const workflowsData: Workflow[] = [
  { title: "Stock Control Strategies", responses: 47, tasks: 22 },
  { title: "How to Handle Inventory", responses: 23, tasks: 15 },
  { title: "Inventory Management Tips", responses: 56, tasks: 30 },
  { title: "Managing Your Stock Effectively", responses: 89, tasks: 5 },
  { title: "Optimizing Your Inventory", responses: 78, tasks: 12 },
  { title: "Stock Management Techniques", responses: 34, tasks: 8 },
];

// Notepad Items Data
export const notepadItems: NotepadItem[] = [
  {
    title: "Make shift & assign",
    description:
      "Assign individuals to specific shifts based on availability and role requirements",
  },
  {
    title: "Menu correction",
    description:
      "Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options.",
  },
];
