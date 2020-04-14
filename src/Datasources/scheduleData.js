
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

function addRecurrenceDate(addMonth, addDay){

    return String( year + pad(month + addMonth , 2) + pad(day + addDay, 2) + "T000000Z")
}   

export let activities = [

    {
        id: 1,
        Subject: "Guiter Lessons",
        Description: "Advanced cords and melodies with professor Kobain",
        Location: "1445 Maple, Glendale",
        StartTime: new Date(year, month, day - 7, 9, 30, 0),
        EndTime: new Date(year, month, day - 7, 10, 45, 0),
        IsAllDay: false,
        IsBlock: false,
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR;UNTIL=" +  addRecurrenceDate(3, 0),
        ActivityType: 3,
        Priority: 0
    },

    {
        id: 2,
        Subject: "Discrete Structures",
        Description: "Comp 256 with Richard Lorentz",
        Location: "CSUN, Jacaranda 3105",
        StartTime: new Date(year, month, day - 7, 11, 15, 0),
        EndTime: new Date(year, month, day - 7, 13, 30, 0),
        IsAllDay: false,
        IsBlock: false,
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,TH;UNTIL=" +  addRecurrenceDate(3, 0),
        ActivityType: 1,
        Priority: 0
    },

    {
        id: 3,
        Subject: "Dabbing Lessons",
        Description: "Show the haters whose boss",
        Location: "7575 Dobby, Hollywood",
        StartTime: new Date(year, month, day - 7, 14, 0, 0),
        EndTime: new Date(year, month, day - 7, 17, 0, 0),
        IsAllDay: false,
        IsBlock: false,
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,WE,FR;UNTIL=" +  addRecurrenceDate(3, 0),
        ActivityType: 3,
        Priority: 4
    },

    {
        id: 4,
        Subject: "Linear Algebra Tutoring",
        Description: "I hate linear algebra",
        Location: "8645 Foothill, Sunland",
        StartTime: new Date(year, month, day - 7 + 2, 16, 0, 0),
        EndTime: new Date(year, month, day - 7 + 2, 18, 30, 0),
        IsAllDay: false,
        IsBlock: false,
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU,TH;UNTIL=" +  addRecurrenceDate(3, 0),
        ActivityType: 2,
        Priority: 3
    },

    {
        id: 5,
        Subject: "Break Time",
        Description: "",
        Location: "",
        StartTime: new Date(year, month, day - 7 + 2, 13, 35, 0),
        EndTime: new Date(year, month, day - 7 + 2, 15, 55, 0),
        IsAllDay: false,
        IsBlock: true,
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TU,TH;UNTIL=" +  addRecurrenceDate(3, 0),
        ActivityType: null,
        Priority: 0
    },

    {
        id: 6,
        Subject: "Johns Birthday",
        Description: "I hate him, but i like cake.",
        Location: "646 Maple, Glendale",
        StartTime: new Date(year, month, day, 17, 0, 0),
        EndTime: new Date(year, month, day, 23, 0, 0),
        IsAllDay: false,
        IsBlock: false,
        RecurrenceRule: "FREQ=YEARLY;INTERVAL=1;BYDAY=SA,TH",
        ActivityType: 5,
        Priority: 1
    },

    {
        id: 7,
        Subject: "DnD Sesh",
        Description: "Goin to daves place for some dnd",
        Location: "848 Fischer, Glendale",
        StartTime: new Date(year, month, day - 7, 13, 0, 0),
        EndTime: new Date(year, month, day - 7, 19, 0, 0),
        IsAllDay: false,
        IsBlock: false,
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=SU;UNTIL=" +  addRecurrenceDate(3, 0),
        ActivityType: 5,
        Priority: 2
    },

    {
        id: 8,
        Subject: "Group SCRUM Meeting",
        Description: "Talk about our project",
        Location: "CSUN, 2213 Jacaranda",
        StartTime: new Date(year, month, day - 7, 9, 0, 0),
        EndTime: new Date(year, month, day - 7, 10, 30, 0),
        IsAllDay: false,
        IsBlock: false,
        RecurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;UNTIL=" +  addRecurrenceDate(3, 0),
        ActivityType: 4,
        Priority: 5
    }
]

export let scheduleStudentResource = [
    {ActivityType: 'School', Id: 1, Color: 'red'},
    {ActivityType: 'Tutoring', Id: 2, Color: 'blue'},
    {ActivityType: 'Other Course', Id: 3, Color: 'orange'},
    {ActivityType: 'Meeting', Id: 4, Color: 'purple'},
    {ActivityType: 'Hangout', Id: 5, Color: 'black'}
]

export let scheduleAlertsSortingOptions = [
    { field: 'Priority', direction: 'Descending' },
    { field: 'Subject', direction: 'Ascending' },
    { field: 'StartTime', direction: 'Ascending' }
]