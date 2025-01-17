'use client'
import React, { useState } from 'react';
import ProtectedLayout from "./component/protectLayout"
import SignOutButton from "./component/signout"
import { auth } from "./firebaseConfig";

export default function Page() {
  const user = auth.currentUser

  return (
    <ProtectedLayout>
      <section className='flex h-[100vh] w-full justify-center items-center'>
       <div className='flex flex-col'>
          i am logged in {user.email}
          <SignOutButton />
       </div>
      </section>
    </ProtectedLayout>
  );
}
