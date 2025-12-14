import React from "react";

function Footer() {
  return (
    <div>
      <div className="container mx-auto px-5">
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <a
              href="https://github.com/adiprabowo194"
              target="_blank"
              className="hover:text-blue-400 font-medium px-3 border-r-2 border-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adiprabowo194/"
              target="_blank"
              className="hover:text-blue-400 font-medium px-3 border-r-2 border-gray-300"
            >
              LinkedIn
            </a>
            <span className="text-blue-400 font-medium">adiprabowo194</span>
          </div>
          <div className="px-3">
            <a
              href="https://wa.me/6281219134561"
              target="_blank"
              className="hover:text-blue-400 font-medium"
            >
              WhatsApp : +62 812-1913-4561
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-blue-300 mt-3">
        <div className="container mx-auto px-5 py-2 font-medium text-center">
          Copyright © 2025 Adi'P. All rights reserved.
        </div>
        <div className="container mx-auto px-5 py-2 font-medium text-center">
          With <span className="text-red-500 font-medium">love</span> by Adi'P
        </div>
      </div>
    </div>
  );
}

export default Footer;
