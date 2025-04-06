import React from "react";

const NotFound = () => {
  return (
    <div class="flex justify-center font-primary items-center h-screen bg-background-dark">
      <div class="text-center">
        <h1 class="text-xl font-Accent text-teal font-bold">404</h1>
        <p class="text-2xl text-dark-p font-medium m-6">Page not Found</p>
        <div className="h-[2px] mx-auto min-w-[50px] bg-DarkBlue"></div>
        <p className="m-6 text-xl text-dark-p">
          Don't worry, you can go back to and explore KinFolio's Again.
        </p>
        <a
            href="/"
            class="bg-blue-500 hover:bg-blue-600 text-dark-p bg-DarkBlue py-2 px-4 rounded"
          >
            Back to Home
          </a>
      </div>
    </div>
  );
};

export default NotFound;
