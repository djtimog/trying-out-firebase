'use client';

import React from 'react';
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../firebaseConfig"; // Import your Firebase configuration

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
      router.push('/auth/signin'); // Redirect to the login page
    } catch (err) {
      console.error('Error signing out:', err.message);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="mt-4 px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
