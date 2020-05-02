const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();

export let payments = [

    {
        id: 0,
        Course: "guitar lessons",
        EndDate: new Date(year, month + 2, day),
        Amount: "$27.50"
    },

    {
        id: 1,
        Course: "dabbing lessons",
        EndDate: new Date(year, month + 1, day + 7),
        Amount: "$289.99"
    },

    {
        id: 2,
        Course: "other lessons",
        EndDate: new Date(year, month + 1, day + 9),
        Amount: "$79.99"
    },

    {
        id: 3,
        Course: "other lessons",
        EndDate: new Date(year, month + 1, day + 3),
        Amount: "$39.99"
    },

    {
        id: 4,
        Course: "dummy data",
        EndDate: null,
        Amount: null
    },

    {
        id: 5,
        Course: "dummy data",
        EndDate: null,
        Amount: null
    },

    {
        id: 6,
        Course: "dummy data",
        EndDate: null,
        Amount: null
    },

    {
        id: 7,
        Course: "dummy data",
        EndDate: null,
        Amount: null
    }

]

export let paymentsColumns = [
    {id: "Course", label: "Course", minWidth: 25, maxWidth: 75, align: "left"},
    {id: "EndDate", label: "Date", minWidth: 75, maxWidth: 100, align: "left"},
    {id: "Amount", label: "Amount", minWidth: 35, maxWidth: 75, align: "left"}
];

export let paymentsMapping = [
    "Course",
    "EndDate",
    "Amount"
]

export let schoolEvents = [

    {
        id: 0,
        Course: "Discrete Structures",
        Task: "Homework #5 Due",
        StartDate: new Date(year, month, day + 7),
        DueDate: new Date(year, month, day + 14),
        Description: "Do review questions on chapters 5-7.",
        Points: 100
    },

    {
        id: 1,
        Course: "Discrete Structures",
        Task: "Project 3 Due",
        StartDate: null,
        DueDate: new Date(year, month, day + 21),
        Description: "Do something with structures of the discrete type.",
        Points: 500
    },

    {
        id: 2,
        Course: "Discrete Structures",
        Task: "Homework #6",
        StartDate: new Date(year, month, day + 14),
        DueDate: new Date(year, month, day + 22),
        Description: "Do review questions from chapter 8-9.",
        Points: 150
    },

    {
        id: 3,
        Course: "Dabbing Lessons",
        Task: "Dabbing Presentation",
        StartDate: null,
        DueDate: new Date(year, month, day + 3),
        Description: "Demonstrate the proper angles",
        Points: 250
    },

    {
        id: 4,
        Course: "Dabbing Lessons",
        Task: "Homework #6 Due",
        StartDate: null,
        DueDate: new Date(year, month, day + 11),
        Description: "Review problems from chapters 6-9",
        Points: 50
    },

    {
        id: 5,
        Course: "Guitar Lessons",
        Task: "Basic Chord Demonstration",
        StartDate: null,
        DueDate: new Date(year, month, day + 10),
        Description: "Play hotel california",
        Points: 500
    },

    {
        id: 6,
        Course: "Discrete Structures",
        Task: "Exam 2",
        StartDate: new Date(year, month + 1, day),
        DueDate: new Date(year, month + 1, day),
        Description: "Exam on chapters 5-9",
        Points: 1000
    },

    {
        id: 7,
        Course: "Random Class",
        Task: "Project #2 Due",
        StartDate: null,
        DueDate: new Date(year, month + 1, day),
        Description: "something",
        Points: 1000
    },

    {
        id: 8,
        Course: "Random Class",
        Task: "Homework #6 Due",
        StartDate: null,
        DueDate: new Date(year, month + 1, day),
        Description: "something",
        Points: 1000
    },

    {
        id: 9,
        Course: "Dummy Data",
        Task: null,
        StartDate: null,
        DueDate: new Date(year, month + 1, day),
        Description: null,
        Points: null
    },

    {
        id: 10,
        Course: "Dummy Data",
        Task: null,
        StartDate: null,
        DueDate: new Date(year, month + 1, day),
        Description: null,
        Points: null
    }
]

export let eventsSchoolColumns = [
    {id: "Course", label: "Course", minWidth: 20, maxWidth: 40, align: "left"},
    {id: "Task", label: "Task", minWidth: 150, maxWidth: 350, align: "left"},
    {id: "StartDate", label: "StartDate", minWidth: 75, maxWidth: 100, align: "left"},
    {id: "DueDate", label: "DueDate", minWidth: 75, maxWidth: 100, align: "left"},
    {id: "Description", label: "Description", minWidth: 200, maxWidth: 500, align: "left"},
    {id: "Points", label: "Points", minWidth: 35, maxWidth: 100, align: "left"}
];

export let eventsSchoolMapping = [
    "Course",
    "Task",
    "StartDate",
    "DueDate",
    "Description",
    "Points"
]

export let courseProgress = [
    {
        id: 1,
        Course: "Guitar Lessons", 
        OverallProgress: 50, 
        Performance: 87
    },

    {
        id: 2,
        Course: "Dabbing Lessons", 
        OverallProgress: 72, 
        Performance: 62
    },

    {
        id: 3,
        Course: "Random Lessons", 
        OverallProgress: 68, 
        Performance: 77
    },

    {
        id: 4,
        Course: "Discrete Structures", 
        OverallProgress: 90, 
        Performance: 42
    }

]

export let progressColumns = [
    {id: "id", label: "Course", minWidth: 20, maxWidth: 40, align: "left"},
    {id: "OverallProgress", label: "Progress", minWidth: 50, maxWidth: 100, align: "left"},
    {id: "Performance", label: "Performance", minWidth: 50, maxWidth: 100, align: "left"}
];

export let progressMapping = [
    "Course",
    "OverallProgress",
    "Performance"
]