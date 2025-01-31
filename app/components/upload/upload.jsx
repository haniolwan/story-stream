"use client";

import FileUploadSvg from "@/app/icons/file-upload";
import { useState, useRef } from "react";

const UploadBook = () => {
  const [file, setFile] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = () => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    // TODO: Implement actual file upload logic
    console.log("Uploading file:", file.name);

    // Simulating upload delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    alert("File uploaded successfully!");
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleVoiceCommand = () => {
    setIsListening(true);

    // TODO: Implement actual voice recognition logic
    setTimeout(() => {
      setIsListening(false);
      handleUpload();
    }, 2000);
  };

  return (
    <div className="md:px-40 flex justify-center ">
      <div className="dark:bg-gray-800 bg-white rounded-lg p-8 w-full">
        <h1 className="dark:text-white text-gray-800 text-3xl font-bold text-center mb-6">
          Upload Your Audiobook
        </h1>

        <form id="upload-form" className="space-y-6">
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="audio/*"
            />
            <label
              for="file-upload"
              className="flex flex-col items-center justify-center w-full h-32 border-2  border-dashed rounded-lg cursor-pointer
              dark:bg-gray-800 bg-gray-50 dark:hover:bg-gray-700 hover:bg-gray-100
dark:text-gray-300 text-gray-900 dark:border-gray-600 border-gray-300"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FileUploadSvg className="w-8 h-8 mb-4 text-gray-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">
                  MP3, WAV, or M4A (MAX. 100MB)
                </p>
              </div>
            </label>
          </div>

          <div
            id="file-name"
            className="text-sm text-gray-500 text-center"
          ></div>

          <button
            type="submit"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadBook;
