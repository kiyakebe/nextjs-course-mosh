import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
import Loader from "./Loader";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <div className="flex align-middle">
        <h1 className="p-5">User&apos;s</h1>
        <Link href="/users/new" className="btn">
          Add new User
        </Link>
      </div>
      <Suspense fallback={ <Loader /> }>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;
