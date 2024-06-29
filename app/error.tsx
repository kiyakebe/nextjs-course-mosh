"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <div className="p-5">
      <h1>An Error Has Occured</h1>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
