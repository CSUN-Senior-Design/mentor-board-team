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
    }

]

export let paymentsColumns = [
    {id: "Course", label: "Course", minWidth: 20, maxWidth: 40, align: "left"},
    {id: "EndDate", label: "Date", minWidth: 75, maxWidth: 100, align: "left"},
    {id: "Amount", label: "Amount", minWidth: 75, maxWidth: 75, align: "left"}
];

export let paymentsMapping = [
    "Course",
    "EndDate",
    "Amount"
]