// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
// import { updateEmail, updatePassword } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";

// const CompleteProfilePage: React.FC = () => {
//   const [firstName, setFirstName] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");
//   const [schoolName, setSchoolName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [role, setRole] = useState<string>("Student");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [isFetching, setIsFetching] = useState<boolean>(true); // New state for fetching
//   const router = useRouter();

//   // Fetch user profile from Firestore
//   useEffect(() => {
//     const fetchProfile = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         try {
//           const profileQuery = query(
//             collection(db, "profiles"),
//             where("userId", "==", user.uid)
//           );
//           const querySnapshot = await getDocs(profileQuery);

//           if (!querySnapshot.empty) {
//             const profileData = querySnapshot.docs[0].data();
//             setFirstName(profileData.firstName || "");
//             setLastName(profileData.lastName || "");
//             setSchoolName(profileData.schoolName || "");
//             setEmail(profileData.email || "");
//             setRole(profileData.role || "Student");
//           } else {
//             console.error("No profile found for this user.");
//           }
//         } catch (error) {
//           console.error("Error fetching profile:", error);
//         } finally {
//           setIsFetching(false);
//         }
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleSave = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const user = auth.currentUser;

//       if (user) {
//         // Save profile to Firestore, but do not store the password in Firestore
//         await addDoc(collection(db, "profiles"), {
//           userId: user.uid,
//           firstName,
//           lastName,
//           schoolName,
//           email,
//           role,
//         });

//         // If email is changed, update in Firebase Authentication
//         if (email) {
//           await updateEmail(user, email);
//         }

//         // If password is provided, update the password in Firebase Auth
//         if (password) {
//           await updatePassword(user, password);
//         }

//         // After saving, redirect to the desired page
//         router.push(`/${role.toLowerCase()}`);
//       } else {
//         console.error("No authenticated user found");
//         alert("You need to be logged in to complete your profile.");
//       }
//     } catch (error) {
//       console.error("Error saving profile:", error);
//       alert("Profile save failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (isFetching) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//           <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//             Loading your profile...
//           </h1>
//           <div className="text-center">
//             Please wait while we load your data.
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//         <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           Complete Your Profile
//         </h1>
//         <form onSubmit={handleSave}>
//           <div className="mb-4">
//             <label
//               htmlFor="firstName"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               First Name
//             </label>
//             <input
//               id="firstName"
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="lastName"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Last Name
//             </label>
//             <input
//               id="lastName"
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="schoolName"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Name of School
//             </label>
//             <input
//               id="schoolName"
//               type="text"
//               value={schoolName}
//               onChange={(e) => setSchoolName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Leave empty if unchanged"
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="role"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Role
//             </label>
//             <select
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             >
//               <option value="Student">Student</option>
//               <option value="Teacher">Teacher</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-300"
//             >
//               {loading ? "Saving..." : "Save Profile"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CompleteProfilePage;


"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { updateEmail, updatePassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import Menu from "@/app/ui/Menu";


const CompleteProfilePage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("Student");
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true); 
  const router = useRouter();

  // Fetch user profile from Firestore
  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const profileQuery = query(
            collection(db, "profiles"),
            where("userId", "==", user.uid)
          );
          const querySnapshot = await getDocs(profileQuery);

          if (!querySnapshot.empty) {
            const profileData = querySnapshot.docs[0].data();
            setFirstName(profileData.firstName || "");
            setLastName(profileData.lastName || "");
            setSchoolName(profileData.schoolName || "");
            setEmail(profileData.email || "");
            setRole(profileData.role || "Student");
          } else {
            console.error("No profile found for this user.");
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        } finally {
          setIsFetching(false);
        }
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = auth.currentUser;

      if (user) {
        // Save profile to Firestore, but do not store the password in Firestore
        await addDoc(collection(db, "profiles"), {
          userId: user.uid,
          firstName,
          lastName,
          schoolName,
          email,
          role,
          password,
        });

        // If email is changed, update in Firebase Authentication
        if (email) {
          await updateEmail(user, email);
        }

        // If password is provided, update the password in Firebase Auth
        if (password) {
          await updatePassword(user, password);
        }

        // After saving, redirect to the desired page
        router.push(`/${role.toLowerCase()}`);
      } else {
        console.error("No authenticated user found");
        alert("You need to be logged in to complete your profile.");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Profile save failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Loading your profile...
          </h1>
          <div className="text-center">
            Please wait while we load your data.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Complete Your Profile
        </h1>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="schoolName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name of School
            </label>
            <input
              id="schoolName"
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Leave empty if unchanged"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
              <option value="Parent">Parent</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-300"
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </form>
      </div>

      {/* Pass the user role to Menu */}
      <Menu userRole={role} />
    </div>
  );
};

export default CompleteProfilePage;
