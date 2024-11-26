


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
    resource: "Room 101", 
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

// TEMPORARY DATA

export let role = "admin";

export const teachersData = [
  {
    id: 1,
    teacherId: "1234567890",
    name: "Adeyemi Oladipo",
    email: "adeyemi@oladipo.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["1B", "2A", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
  {
    id: 2,
    teacherId: "1234567890",
    name: "Funmi Adebayo",
    email: "funmi@adebayo.com",
    photo:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics", "Chemistry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
  {
    id: 3,
    teacherId: "1234567890",
    name: "Chijioke Okafor",
    email: "chijioke@okafor.com",
    photo:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
  {
    id: 4,
    teacherId: "1234567890",
    name: "Bisi Akinwale",
    email: "bisi@akinwale.com",
    photo:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
  {
    id: 5,
    teacherId: "1234567890",
    name: "Ngozi Nwachukwu",
    email: "ngozi@nwachukwu.com",
    photo:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Music", "History"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
  {
    id: 6,
    teacherId: "1234567890",
    name: "Kunle Ojo",
    email: "kunle@ojo.com",
    photo:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Physics"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
  {
    id: 7,
    teacherId: "1234567890",
    name: "Bola Alabi",
    email: "bola@alabi.com",
    photo:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["English", "Yoruba"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
  {
    id: 8,
    teacherId: "1234567890",
    name: "Amina Suleiman",
    email: "amina@suleiman.com",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Math", "Geometry"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
  {
    id: 9,
    teacherId: "1234567890",
    name: "Tunde Bakare",
    email: "tunde@bakare.com",
    photo:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Literature", "English"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
  {
    id: 10,
    teacherId: "1234567890",
    name: "Ifeoma Uche",
    email: "ifeoma@uche.com",
    photo:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    subjects: ["Biology"],
    classes: ["5A", "4B", "3C"],
    address: "123 Main St, Lagos, Nigeria",
  },
];

export const studentsData = [
  {
    id: 1,
    studentId: "1234567890",
    name: "Chinwe Obiora",
    email: "chinwe.obiora@gmail.com",
    photo:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08012345678",
    grade: 5,
    class: "1B",
    address: "123 Ogunlana St, Lagos, Nigeria",
  },
  {
    id: 2,
    studentId: "1234567890",
    name: "Emeka Nnamdi",
    email: "emeka.nnamdi@yahoo.com",
    photo:
      "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08023456789",
    grade: 5,
    class: "5A",
    address: "456 Ogbomosho Rd, Abuja, Nigeria",
  },
  {
    id: 3,
    studentId: "1234567890",
    name: "Adesuwa Ighodaro",
    email: "adesuwa.ighodaro@gmail.com",
    photo:
      "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08034567890",
    grade: 5,
    class: "5A",
    address: "789 Ikorodu St, Lagos, Nigeria",
  },
  {
    id: 4,
    studentId: "1234567890",
    name: "Folake Adebanjo",
    email: "folake.adebanjo@gmail.com",
    photo:
      "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08045678901",
    grade: 5,
    class: "5A",
    address: "234 Aba St, Enugu, Nigeria",
  },
  {
    id: 5,
    studentId: "1234567890",
    name: "Ifeoma Okoro",
    email: "ifeoma.okoro@gmail.com",
    photo:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08056789012",
    grade: 5,
    class: "5A",
    address: "567 Opebi Rd, Ikeja, Lagos, Nigeria",
  },
  {
    id: 6,
    studentId: "1234567890",
    name: "Chidera Okafor",
    email: "chidera.okafor@yahoo.com",
    photo:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08067890123",
    grade: 5,
    class: "5A",
    address: "678 Garki St, Abuja, Nigeria",
  },
  {
    id: 7,
    studentId: "1234567890",
    name: "Babatunde Alabi",
    email: "babatunde.alabi@hotmail.com",
    photo:
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08078901234",
    grade: 5,
    class: "5A",
    address: "890 Surulere Ave, Lagos, Nigeria",
  },
  {
    id: 8,
    studentId: "1234567890",
    name: "Olakunle Adeoye",
    email: "olakunle.adeoye@gmail.com",
    photo:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08089012345",
    grade: 5,
    class: "5A",
    address: "901 Eleme Rd, Port Harcourt, Nigeria",
  },
  {
    id: 9,
    studentId: "1234567890",
    name: "Titilayo Ogunleye",
    email: "titilayo.ogunleye@gmail.com",
    photo:
      "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08090123456",
    grade: 5,
    class: "5A",
    address: "123 Aba Rd, Onitsha, Nigeria",
  },
  {
    id: 10,
    studentId: "1234567890",
    name: "Tope Akinyemi",
    email: "tope.akinyemi@yahoo.com",
    photo:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "08001234567",
    grade: 5,
    class: "5A",
    address: "456 Marina St, Lagos Island, Nigeria",
  },
];


export const parentsData = [
  {
    id: 1,
    name: "Adekunle Adebayo",
    students: ["Chidera Okafor"],
    email: "adekunle.adebayo@gmail.com",
    phone: "08012345678",
    address: "123 Ogunlana St, Lagos, Nigeria",
  },
  {
    id: 2,
    name: "Chioma Okeke",
    students: ["Adesuwa Ighodaro"],
    email: "chioma.okeke@yahoo.com",
    phone: "08023456789",
    address: "456 Ogbomosho Rd, Abuja, Nigeria",
  },
  {
    id: 3,
    name: "Tunde Alabi",
    students: ["Tope Akinyemi"],
    email: "tunde.alabi@hotmail.com",
    phone: "08034567890",
    address: "789 Ikorodu St, Lagos, Nigeria",
  },
  {
    id: 4,
    name: "Ngozi Nwosu",
    students: ["Emeka Nnamdi", "Chinaza Eze"],
    email: "ngozi.nwosu@gmail.com",
    phone: "08045678901",
    address: "234 Aba St, Enugu, Nigeria",
  },
  {
    id: 5,
    name: "Funke Balogun",
    students: ["Titilayo Ogunleye"],
    email: "funke.balogun@gmail.com",
    phone: "08056789012",
    address: "567 Opebi Rd, Ikeja, Lagos, Nigeria",
  },
  {
    id: 6,
    name: "Kunle Adebayo",
    students: ["Chukwuemeka Obi"],
    email: "kunle.adebayo@yahoo.com",
    phone: "08067890123",
    address: "678 Garki St, Abuja, Nigeria",
  },
  {
    id: 7,
    name: "Bola Akinfenwa",
    students: ["Folake Adebanjo", "Babatunde Alabi"],
    email: "bola.akinfenwa@hotmail.com",
    phone: "08078901234",
    address: "890 Surulere Ave, Lagos, Nigeria",
  },
  {
    id: 8,
    name: "Amara Obi",
    students: ["Ifeoma Okoro"],
    email: "amara.obi@gmail.com",
    phone: "08089012345",
    address: "901 Eleme Rd, Port Harcourt, Nigeria",
  },
  {
    id: 9,
    name: "Ifeanyi Okonkwo",
    students: ["Chinwe Obiora", "Obinna Eze"],
    email: "ifeanyi.okonkwo@gmail.com",
    phone: "08090123456",
    address: "123 Aba Rd, Onitsha, Nigeria",
  },
  {
    id: 10,
    name: "Femi Ojo",
    students: ["Olakunle Adeoye"],
    email: "femi.ojo@yahoo.com",
    phone: "08001234567",
    address: "456 Marina St, Lagos Island, Nigeria",
  },
];

export const subjectsData = [
  {
    id: 1,
    name: "Math",
    teachers: ["Adebayo Ogunleye", "Chinwe Nwosu"],
  },
  {
    id: 2,
    name: "English",
    teachers: ["Ngozi Uche", "Tunde Adewale"],
  },
  {
    id: 3,
    name: "Physics",
    teachers: ["Kunle Okonkwo", "Ijeoma Eze"],
  },
  {
    id: 4,
    name: "Chemistry",
    teachers: ["Femi Adebanjo", "Chidinma Obiora"],
  },
  {
    id: 5,
    name: "Biology",
    teachers: ["Funmi Akinyemi", "Bola Alade"],
  },
  {
    id: 6,
    name: "History",
    teachers: ["Yemi Falade", "Ifeanyi Nduka"],
  },
  {
    id: 7,
    name: "Geography",
    teachers: ["Amara Obi", "Seun Balogun"],
  },
  {
    id: 8,
    name: "Art",
    teachers: ["Tope Onyekachi", "Nkechi Iwu"],
  },
  {
    id: 9,
    name: "Music",
    teachers: ["Adeola Ajayi", "Efe Oladipo"],
  },
  {
    id: 10,
    name: "Literature",
    teachers: ["Chiamaka Okechukwu", "Samuel Anjorin"],
  },
];

export const classesData = [
  {
    id: 1,
    name: "1A",
    capacity: 20,
    grade: 1,
    supervisor: "Adekunle Ogunleye",
  },
  {
    id: 2,
    name: "2B",
    capacity: 22,
    grade: 2,
    supervisor: "Chioma Okeke",
  },
  {
    id: 3,
    name: "3C",
    capacity: 20,
    grade: 3,
    supervisor: "Tunde Alabi",
  },
  {
    id: 4,
    name: "4B",
    capacity: 18,
    grade: 4,
    supervisor: "Ngozi Eze",
  },
  {
    id: 5,
    name: "5A",
    capacity: 16,
    grade: 5,
    supervisor: "Funke Balogun",
  },
  {
    id: 6,
    name: "5B",
    capacity: 20,
    grade: 5,
    supervisor: "Kunle Adebayo",
  },
  {
    id: 7,
    name: "7A",
    capacity: 18,
    grade: 7,
    supervisor: "Bola Akinfenwa",
  },
  {
    id: 8,
    name: "6B",
    capacity: 22,
    grade: 6,
    supervisor: "Ifeoma Nwachukwu",
  },
  {
    id: 9,
    name: "6C",
    capacity: 18,
    grade: 6,
    supervisor: "Femi Ojo",
  },
  {
    id: 10,
    name: "6D",
    capacity: 20,
    grade: 6,
    supervisor: "Amara Obi",
  },
];


export const lessonsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Chinedu Okafor",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Amaka Eze",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Gbenga Ajayi",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Ngozi Nwankwo",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Ireti Adebanjo",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Bola Akinyemi",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Yakubu Suleiman",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Fatima Abdullahi",
  },
  {
    id: 9,
    subject: "Physics",
    class: "6C",
    teacher: "Olumide Babalola",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "4B",
    teacher: "Temitope Owolabi",
  },
];


export const examsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Ngozi Okafor",
    date: "2025-01-01",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Chijioke Nwosu",
    date: "2025-01-01",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Adebayo Adeyemi",
    date: "2025-01-01",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Emeka Ojo",
    date: "2025-01-01",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Olufunmilayo Adebayo",
    date: "2025-01-01",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Chinonso Eze",
    date: "2025-01-01",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Kehinde Bello",
    date: "2025-01-01",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Ayotunde Akinyele",
    date: "2025-01-01",
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "Chukwudi Okoro",
    date: "2025-01-01",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "Temidayo Alabi",
    date: "2025-01-01",
  },
];

export const assignmentsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Chijioke Nwankwo",
    dueDate: "2025-01-01",
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Ngozi Okechukwu",
    dueDate: "2025-01-01",
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Temidayo Akinyele",
    dueDate: "2025-01-01",
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Emeka Nwachukwu",
    dueDate: "2025-01-01",
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Bolanle Ojo",
    dueDate: "2025-01-01",
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Adebayo Fashola",
    dueDate: "2025-01-01",
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Chinonso Obi",
    dueDate: "2025-01-01",
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Oluwaseun Adewale",
    dueDate: "2025-01-01",
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "Ayodele Oluwaseun",
    dueDate: "2025-01-01",
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "Ifeoma Okeke",
    dueDate: "2025-01-01",
  },
];


export const resultsData = [
  {
    id: 1,
    subject: "Math",
    class: "1A",
    teacher: "Chijioke Nwankwo",
    student: "Ngozi Okafor",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 2,
    subject: "English",
    class: "2A",
    teacher: "Ngozi Okechukwu",
    student: "Chijioke Nwankwo",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 3,
    subject: "Science",
    class: "3A",
    teacher: "Temidayo Akinyele",
    student: "Chinonso Obi",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 4,
    subject: "Social Studies",
    class: "1B",
    teacher: "Emeka Nwachukwu",
    student: "Bolanle Ojo",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 5,
    subject: "Art",
    class: "4A",
    teacher: "Adebayo Fashola",
    student: "Temidayo Akinyele",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 6,
    subject: "Music",
    class: "5A",
    teacher: "Kehinde Bello",
    student: "Chinonso Obi",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 7,
    subject: "History",
    class: "6A",
    teacher: "Ayodele Oluwaseun",
    student: "Ifeoma Okeke",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 8,
    subject: "Geography",
    class: "6B",
    teacher: "Oluwaseun Adewale",
    student: "Chijioke Nwankwo",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 9,
    subject: "Physics",
    class: "7A",
    teacher: "Chinonso Eze",
    student: "Temidayo Akinyele",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
  {
    id: 10,
    subject: "Chemistry",
    class: "8A",
    teacher: "Bolanle Ojo",
    student: "Ngozi Okafor",
    date: "2025-01-01",
    type: "exam",
    score: 90,
  },
];


export const eventsData = [
  {
    id: 1,
    title: "Ogun Lake Trip",
    class: "1A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 2,
    title: "Jollof Rice Picnic",
    class: "2A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 3,
    title: "Lagos Beach Trip",
    class: "3A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 4,
    title: "National Museum Trip",
    class: "4A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 5,
    title: "Afrobeats Concert",
    class: "5A",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 6,
    title: "Nigerian Magician Show",
    class: "1B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 7,
    title: "River Niger Lake Trip",
    class: "2B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 8,
    title: "Nigerian Cycling Race",
    class: "3B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 9,
    title: "Nigerian Art Exhibition",
    class: "4B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: 10,
    title: "Nigerian Sports Tournament",
    class: "5B",
    date: "2025-01-01",
    startTime: "10:00",
    endTime: "11:00",
  },
];


export const announcementsData = [
  {
    id: 1,
    title: "About 4A Math Test",
    class: "4A",
    date: "2025-01-01",
  },
  {
    id: 2,
    title: "About 3A Math Test",
    class: "3A",
    date: "2025-01-01",
  },
  {
    id: 3,
    title: "About 3B Math Test",
    class: "3B",
    date: "2025-01-01",
  },
  {
    id: 4,
    title: "About 6A Math Test",
    class: "6A",
    date: "2025-01-01",
  },
  {
    id: 5,
    title: "About 8C Math Test",
    class: "8C",
    date: "2025-01-01",
  },
  {
    id: 6,
    title: "About 2A Math Test",
    class: "2A",
    date: "2025-01-01",
  },
  {
    id: 7,
    title: "About 4C Math Test",
    class: "4C",
    date: "2025-01-01",
  },
  {
    id: 8,
    title: "About 4B Math Test",
    class: "4B",
    date: "2025-01-01",
  },
  {
    id: 9,
    title: "About 3C Math Test",
    class: "3C",
    date: "2025-01-01",
  },
  {
    id: 10,
    title: "About 1C Math Test",
    class: "1C",
    date: "2025-01-01",
  },
];


export const calendarEvents = [
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 7, 12, 8, 0),
    end: new Date(2024, 7, 12, 8, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 7, 12, 9, 0),
    end: new Date(2024, 7, 12, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 7, 12, 10, 0),
    end: new Date(2024, 7, 12, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 7, 12, 11, 0),
    end: new Date(2024, 7, 12, 11, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2024, 7, 12, 13, 0),
    end: new Date(2024, 7, 12, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 12, 14, 0),
    end: new Date(2024, 7, 12, 14, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 7, 13, 9, 0),
    end: new Date(2024, 7, 13, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 7, 13, 10, 0),
    end: new Date(2024, 7, 13, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 7, 13, 11, 0),
    end: new Date(2024, 7, 13, 11, 45),
  },

  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 13, 14, 0),
    end: new Date(2024, 7, 13, 14, 45),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 7, 14, 8, 0),
    end: new Date(2024, 7, 14, 8, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 7, 14, 10, 0),
    end: new Date(2024, 7, 14, 10, 45),
  },

  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2024, 7, 14, 13, 0),
    end: new Date(2024, 7, 14, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 14, 14, 0),
    end: new Date(2024, 7, 13, 14, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 7, 15, 9, 0),
    end: new Date(2024, 7, 15, 9, 45),
  },
  {
    title: "Biology",
    allDay: false,
    start: new Date(2024, 7, 15, 10, 0),
    end: new Date(2024, 7, 15, 10, 45),
  },
  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 7, 15, 11, 0),
    end: new Date(2024, 7, 15, 11, 45),
  },

  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 15, 14, 0),
    end: new Date(2024, 7, 15, 14, 45),
  },
  {
    title: "Math",
    allDay: false,
    start: new Date(2024, 7, 16, 8, 0),
    end: new Date(2024, 7, 16, 8, 45),
  },
  {
    title: "English",
    allDay: false,
    start: new Date(2024, 7, 16, 9, 0),
    end: new Date(2024, 7, 16, 9, 45),
  },

  {
    title: "Physics",
    allDay: false,
    start: new Date(2024, 7, 16, 11, 0),
    end: new Date(2024, 7, 16, 11, 45),
  },
  {
    title: "Chemistry",
    allDay: false,
    start: new Date(2024, 7, 16, 13, 0),
    end: new Date(2024, 7, 16, 13, 45),
  },
  {
    title: "History",
    allDay: false,
    start: new Date(2024, 7, 16, 14, 0),
    end: new Date(2024, 7, 16, 14, 45),
  },
];