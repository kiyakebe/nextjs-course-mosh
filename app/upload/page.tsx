"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  // const [publicId, setPublicId] = useState([]);
  // [] for multiple image upload

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={170}
          alt="Cloudinary Image"
        />
      )}

      <CldUploadWidget
        uploadPreset="hes37opj"
        onSuccess={(result, { widget }) => {
          console.log("Result : ", result);
          
          if (result.event !== "success") return;

          const info = result.info as CloudinaryResult;
          console.log("info : ", info)
          setPublicId(info.public_id); // { public_id, secure_url, etc }
          widget.close();
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
