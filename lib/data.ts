

// export const scheduledEvents = [
//   // Class schedules
//   {
//     title: "Math Class - Algebra",
//     start: new Date(2024, 9, 15, 9, 0),
//     end: new Date(2024, 9, 15, 10, 30),
//     resource: "Room 101",
//   },
//   {
//     title: "History Class - World War II",
//     start: new Date(2024, 9, 15, 11, 0),
//     end: new Date(2024, 9, 15, 12, 30),
//     resource: "Room 103",
//   },

//   // Exams
//   {
//     title: "Midterm Exam - Math",
//     start: new Date(2024, 9, 16, 9, 0),
//     end: new Date(2024, 9, 16, 12, 0),
//     exam: true,
//     description: "Midterm exam for Math students.",
//   },
//   {
//     title: "Midterm Exam - History",
//     start: new Date(2024, 9, 17, 9, 0),
//     end: new Date(2024, 9, 17, 12, 0),
//     exam: true,
//     description: "Midterm exam for History students.",
//   },

//   // Parent-teacher meetings
//   {
//     title: "Parent-Teacher Meeting - Class A",
//     start: new Date(2024, 9, 20, 15, 0),
//     end: new Date(2024, 9, 20, 17, 0),
//     location: "Room 201",
//     description: "Meet with parents of Class A students.",
//   },

//   // Holidays
//   {
//     title: "School Holiday - National Day",
//     start: new Date(2024, 9, 15),
//     end: new Date(2024, 9, 15),
//     holiday: true,
//     description: "School closed for National Day.",
//   },
//   {
//     title: "School Holiday - Winter Break",
//     start: new Date(2024, 11, 20),
//     end: new Date(2025, 0, 5),
//     holiday: true,
//     description: "Winter break for all students and staff.",
//   },

//   // Extracurricular activities
//   {
//     title: "Soccer Practice - U16 Boys",
//     start: new Date(2024, 9, 16, 16, 30),
//     end: new Date(2024, 9, 16, 18, 0),
//     activity: "Sports",
//     location: "Field A",
//   },
//   {
//     title: "Music Club - Piano Practice",
//     start: new Date(2024, 9, 17, 14, 0),
//     end: new Date(2024, 9, 17, 16, 0),
//     activity: "Music",
//     location: "Room 105",
//   },
//   {
//     title: "Art Club - Painting Class",
//     start: new Date(2024, 9, 18, 13, 30),
//     end: new Date(2024, 9, 18, 15, 30),
//     activity: "Art",
//     location: "Room 106",
//   },
//   {
//     title: "School Play Rehearsal - Romeo & Juliet",
//     start: new Date(2024, 9, 19, 10, 0),
//     end: new Date(2024, 9, 19, 13, 0),
//     activity: "Drama",
//     location: "Auditorium",
//   },

//   // Special events
//   {
//     title: "Annual Sports Day",
//     start: new Date(2024, 9, 22, 8, 0),
//     end: new Date(2024, 9, 22, 15, 0),
//     description: "Annual sports day for all grades.",
//     location: "Sports Complex",
//   },
//   {
//     title: "School Open Day",
//     start: new Date(2024, 9, 23, 9, 0),
//     end: new Date(2024, 9, 23, 12, 0),
//     description: "Prospective students and parents visit the school.",
//     location: "Main Hall",
//   },
// ];

// Helper function to generate events dynamically for subjects
export const generateEvent = (title: string, daysOffset: number, startHour: number, endHour: number) => {
  const currentDate = new Date(); // Current date
  currentDate.setDate(currentDate.getDate() + daysOffset); // Offset by days from current date
  
  // Setting the start time for the event
  const start = new Date(currentDate);
  start.setHours(startHour, 0, 0);
  
  // Setting the end time for the event
  const end = new Date(currentDate);
  end.setHours(endHour, 0, 0);

  return {
    title,
    start,
    end,
    resource: "Room 101", // Classroom or resource
  };
};

// Generate the event data for the week (you can add more events dynamically as needed)
export const scheduledEvents = [
  // Class schedules
  generateEvent("Math Class - Algebra", 0, 9, 10),  // Today, 9 AM - 10 AM
  generateEvent("History Class - Nigeria Civil War", 1, 9, 10),  // Tomorrow, 9 AM - 10 AM
  generateEvent("Biology Class - Cell Structure", 2, 10, 11),  // Day after tomorrow, 10 AM - 11 AM
  generateEvent("Chemistry Class - Organic Compounds", 3, 13, 14),  // In 3 days, 1 PM - 2 PM
  generateEvent("English Class - Literature", 4, 11, 12),  // In 4 days, 11 AM - 12 PM
  
  // Exams
  generateEvent("Midterm Exam - Math", 5, 9, 12),  // In 5 days, 9 AM - 12 PM
  generateEvent("Midterm Exam - History", 6, 9, 12),  // In 6 days, 9 AM - 12 PM
  generateEvent("Final Exam - Chemistry", 10, 14, 17),  // In 10 days, 2 PM - 5 PM
  generateEvent("Final Exam - Biology", 11, 9, 12),  // In 11 days, 9 AM - 12 PM

  // Parent-teacher meetings
  generateEvent("Parent-Teacher Meeting - Class A", 12, 15, 17),  // In 12 days, 3 PM - 5 PM
  generateEvent("Parent-Teacher Meeting - Class B", 14, 15, 17),  // In 14 days, 3 PM - 5 PM
  generateEvent("Parent-Teacher Meeting - Class C", 16, 15, 17),  // In 16 days, 3 PM - 5 PM
  
  // Holidays
  generateEvent("School Holiday - National Day", 7, 0, 0),  // In 7 days
  generateEvent("School Holiday - Winter Break", 20, 0, 0),  // In 20 days
  generateEvent("School Holiday - New Year's Day", 30, 0, 0),  // In 30 days
  
  // Extracurricular activities
  generateEvent("Soccer Practice - U16 Boys", 8, 16, 18),  // In 8 days, 4 PM - 6 PM
  generateEvent("Music Club - Piano Practice", 9, 14, 16),  // In 9 days, 2 PM - 4 PM
  generateEvent("Art Club - Painting Class", 13, 13, 15),  // In 13 days, 1 PM - 3 PM
  generateEvent("Drama Club - Acting Workshop", 15, 10, 12),  // In 15 days, 10 AM - 12 PM
  generateEvent("Photography Club - Nature Photography", 18, 10, 12),  // In 18 days, 10 AM - 12 PM
  
  // Special events
  generateEvent("Annual Sports Day", 19, 8, 15),  // In 19 days, 8 AM - 3 PM
  generateEvent("School Open Day", 20, 9, 12),  // In 20 days, 9 AM - 12 PM
  generateEvent("Talent Show", 22, 18, 20),  // In 22 days, 6 PM - 8 PM
  generateEvent("Graduation Ceremony", 25, 14, 17),  // In 25 days, 2 PM - 5 PM
  generateEvent("Fundraising Event", 27, 10, 13),  // In 27 days, 10 AM - 1 PM
];

