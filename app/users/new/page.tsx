"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AddNewUser = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="p-5">
      <h1>Add New User</h1>
      <button className="btn" onClick={() => router.push("/users")}>
        Create
      </button>
    </div>
  );
};

export default AddNewUser;
