// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import { getAuth, onAuthStateChanged, User } from "firebase/auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

// interface UserContextType {
//   user: User | null;
//   role: string;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
//   setRole: React.Dispatch<React.SetStateAction<string>>;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };

// export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [role, setRole] = useState<string>("Student"); // default role, change as needed

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       setUser(user);
//       if (user) {
//         // Fetch the role from Firestore
//         const db = getFirestore();
//         const userDocRef = doc(db, "users", user.uid);
//         const userDoc = await getDoc(userDocRef);
//         if (userDoc.exists()) {
//           setRole(userDoc.data().role);
//         } else {
//           // Set a default role if the user document is not found
//           setRole("Student");
//           console.log(
//             "User document not found in Firestore, setting default role to 'Student'"
//           );
//         }
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, role, setUser, setRole }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
