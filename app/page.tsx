// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signInWithGoogle } from "@/lib/auth";
// import { motion } from "framer-motion";

// const GoogleLoginButton: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");
//   const router = useRouter();

//   const handleLogin = async (): Promise<void> => {
//     setLoading(true);
//     setError("");

//     try {
//       const userCredential = await signInWithGoogle();
//       const user = userCredential.user;
//       console.log("User authenticated:", user);
//       router.push("completeProfile");
//     } catch (error) {
//       console.error("Login failed", error);
//       setError(
//         error instanceof Error
//           ? error.message
//           : "Failed to sign in with Google. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen  flex items-center justify-center p-4 bg-blue-400">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-md"
//       >
//         <div className="bg-white p-8 rounded-2xl shadow-xl">
//           <motion.div
//             initial={{ scale: 0.9 }}
//             animate={{ scale: 1 }}
//             transition={{
//               type: "spring",
//               stiffness: 260,
//               damping: 20,
//             }}
//             className="text-center mb-8"
//           >
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//               Welcome to Edu_care
//             </h1>
//             <p className="text-gray-600">
//               The ultimate platform for students and educators to connect,
//               learn, and grow together. Sign in to unlock personalized learning
//               experiences and more.
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="flex flex-col items-center gap-4"
//           >
//             <button
//               onClick={handleLogin}
//               disabled={loading}
//               className={`
//                 w-full flex items-center justify-center gap-3 px-6 py-3
//                 text-sm font-medium text-gray-700
//                 bg-white border border-gray-300 rounded-lg shadow-sm
//                 hover:bg-gray-50 focus:outline-none focus:ring-2
//                 focus:ring-blue-500 focus:ring-offset-2
//                 disabled:opacity-50 disabled:cursor-not-allowed
//                 transition-all duration-200 ease-in-out
//                 ${loading ? "cursor-not-allowed" : "hover:shadow-md"}
//               `}
//             >
//               {loading ? (
//                 <>
//                   <motion.div
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 1,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="w-5 h-5"
//                   >
//                     <svg
//                       className="text-gray-600"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       />
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                       />
//                     </svg>
//                   </motion.div>
//                   <span>Signing in...</span>
//                 </>
//               ) : (
//                 <>
//                   <svg
//                     className="w-5 h-5"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 48 48"
//                   >
//                     <path
//                       fill="#FFC107"
//                       d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
//                     />
//                     <path
//                       fill="#FF3D00"
//                       d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
//                     />
//                     <path
//                       fill="#4CAF50"
//                       d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
//                     />
//                     <path
//                       fill="#1976D2"
//                       d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
//                     />
//                   </svg>
//                   <span>Continue with Google</span>
//                 </>
//               )}
//             </button>

//             {error && (
//               <motion.p
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-sm text-red-600 text-center"
//               >
//                 {error}
//               </motion.p>
//             )}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mt-8 text-center"
//           >
//             <p className="text-sm text-gray-500">
//               By signing in, you agree to our{" "}
//               <a href="#" className="text-blue-600 hover:underline">
//                 Terms of Service
//               </a>{" "}
//               and{" "}
//               <a href="#" className="text-blue-600 hover:underline">
//                 Privacy Policy
//               </a>
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default GoogleLoginButton;

import React from 'react'
import GoogleLoginButton from './ui/GoogleLoginButton'

const page = () => {
  return (
    <div>
      <GoogleLoginButton/>
    </div>
  )
}

export default page