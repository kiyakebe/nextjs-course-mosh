import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const page = ({ params: { id } }: Props) => {
  if (id > 10) notFound();

  return (
    <div className="p-5">
      <h2>User: {id}</h2>
    </div>
  );
};

export default page;
