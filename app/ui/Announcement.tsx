import Image from "next/image";

const Announcement = () => {
  const messages = [
    {
      id: 1,
      sender: "Admin",
      avatar: "/avatar.png",
      message: "Reminder: School will be closed tomorrow for a public holiday.",
      date: "2024-05-01",
    },
    {
      id: 2,
      sender: "Principal's Office",
      avatar: "/avatar.png",
      message:
        "Congratulations to all students who passed the recent exams with flying colors! Keep up the great work!",
      date: "2024-04-28",
    },
    {
      id: 3,
      sender: "Class Representative",
      avatar: "/avatar.png",
      message:
        "Don't forget the student council meeting at 3 PM today in Room 204. See you all there!",
      date: "2024-04-30",
    },
    {
      id: 4,
      sender: "Math Department",
      avatar: "/avatar.png",
      message:
        "The next math test is scheduled for May 5th. Please review all topics covered in class so far.",
      date: "2024-04-29",
    },
    {
      id: 5,
      sender: "School Nurse",
      avatar: "/avatar.png",
      message:
        "Flu season is upon us! Please make sure to get your flu shots at the health center this week.",
      date: "2024-04-27",
    },
  ];

  // Array of background colors
  const backgroundColors = [
    "bg-blue-200", 
    "bg-green-200", 
    "bg-yellow-200", 
    "bg-purple-200", 
    "bg-pink-200", 
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Messages</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {/* Loop through messages */}
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`rounded-md p-4 ${
              backgroundColors[index % backgroundColors.length]
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={message.avatar}
                alt="avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <h2 className="text-sm font-semibold ">{message.sender}</h2>
                  <span className="text-xs text-gray-400">{message.date}</span>
                </div>
                <p className="text-gray-600 text-sm leading-4 mt-2 font-mono">
                  {message.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
