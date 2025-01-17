'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation"; // Use Next.js router for redirection
import { auth } from "../../firebaseConfig"; // Import your Firebase configuration

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully');
      router.push('/'); // Redirect to a protected page after login
    } catch (err) {
      setError('Failed to sign in. Please check your email and password.');
    }
  };

  return (
    <section className='h-[100vh] w-full flex justify-center items-center'>
      <div className=''>
        <form onSubmit={handleSubmit} className='space-y-4'>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input 
              type='email' 
              id='email' 
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
            <input 
              type='password' 
              id='password' 
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div>
            <input 
              type="submit" 
              className='mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' 
              value="Sign In"
            />
          </div>
        </form>
      <div className="mt-4">
        <Link href="/auth/signup" className="text-indigo-600 hover:underline">
          CREATE an account
        </Link>
      </div>
      </div>
    </section>
  );
}
