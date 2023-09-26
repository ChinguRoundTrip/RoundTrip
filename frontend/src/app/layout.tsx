import React from 'react';
import '../style/globals.css'
import TestingSidebar from "../components/TestingSidebar"
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import TestingLogin from "../components/TestingLogin";

export default async function LandingPage({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <TestingLogin />
          ) : (
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <TestingSidebar />
          </div>

          <div className="bg-[#343541] flex-1">{children}</div>
          </div>
          )}
          </SessionProvider>
      </body>
    </html>
  );
};
