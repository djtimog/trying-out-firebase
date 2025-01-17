'use client'
import React, { useState } from 'react';
import ProtectedLayout from "./component/protectLayout"
import SignOutButton from "./component/signout"

export default function Page() {

  return (
    <ProtectedLayout>
      <section className='flex h-[100vh] w-full justify-center items-center'>
       <div className='flex flex-col'>
          i am logged in
          <SignOutButton />
       </div>
      </section>
    </ProtectedLayout>
  );
}
