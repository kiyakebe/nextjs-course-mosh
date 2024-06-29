"use client";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Navigation = () => {
  const { status, data: session } = useSession();

  // if (status === "loading") return null;

  return (
    <div className="bg-slate-300 p-5 flex space-x-3">
      <p>Navigation</p>
      <Link href="/users?sortOrder=name" className="btn">
        Users
      </Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="btn mx-3">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="btn">
          Signin
        </Link>
      )}
    </div>
  );
};

export default Navigation;
