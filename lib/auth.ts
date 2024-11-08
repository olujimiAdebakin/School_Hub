// lib/auth.ts
import {
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebase";

export const signInWithGoogle = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();

  try {
    const result: UserCredential = await signInWithPopup(auth, provider);
    return result; // This will contain user info (e.g., displayName, email, etc.)
  } catch (error) {
    console.error("Error during Google sign-in", error);
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};
