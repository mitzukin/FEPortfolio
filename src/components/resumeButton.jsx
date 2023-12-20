import React from "react";
import { FaPaperclip } from "react-icons/fa6";
import TajorResumePDF from "/Tajor_Resume.pdf"; // Import the PDF file

const resumeButton = () => {
  const handleDownload = () => {
    // Create a Blob containing the file data with the correct MIME type
    fetch(TajorResumePDF)
      .then((response) => response.blob())
      .then((blob) => {
        const pdfBlob = new Blob([blob], { type: "application/pdf" });

        // Create a link element and trigger a click to download the file
        const link = document.createElement("a");
        link.href = URL.createObjectURL(pdfBlob);
        link.download = "Tajor_Resume.pdf";
        link.click();
      })
      .catch((error) => {
        console.error("Error fetching the PDF file:", error);
      });
  };
  return (
    <button
      onClick={handleDownload}
      className="flex flex-row items-center gap-2 px-5 py-2 text-sm font-normal rounded-full dark:text-light-p bg-light-p dark:bg-dark-p text-dark-p "
    >
      <FaPaperclip />
      Resume
    </button>
  );
};

export default resumeButton;
