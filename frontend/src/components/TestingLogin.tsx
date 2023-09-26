'use client';

import React from 'react';
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="bg-[#231f20] h-screen flex flex-col items-center justify-center">
      <Image
        src="https://i.imgur.com/az8hzqu.png"
        width={400}
        height={400}
        alt="logo"
        className="mb-10"
        />
        <button
          onClick={() => signIn("google")}
          className="text-white font-bold text-3xl animate-pulse "
        >
          Sign In to use RoundTrip
        </button>
    </div>
  )
};

export default Login;
