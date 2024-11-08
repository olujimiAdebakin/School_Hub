// // ui/GoogleLoginButton.tsx
// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import { signInWithGoogle } from "@/lib/auth";

// const GoogleLoginButton: React.FC = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const router = useRouter();

//   const handleLogin = async (): Promise<void> => {
//     setLoading(true);
//     try {
//       const userCredential = await signInWithGoogle();
//       const user = userCredential.user;
//       console.log("User authenticated:", user);

//       // Redirect to the profile completion page
//       router.push("/auth/complete-profile");
//     } catch (error) {
//       console.error("Login failed", error);
//       alert("Login failed, please try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button onClick={handleLogin} disabled={loading}>
//       {loading ? "Logging in..." : "Sign in with Google"}
//     </button>
//   );
// };

// export default GoogleLoginButton;
