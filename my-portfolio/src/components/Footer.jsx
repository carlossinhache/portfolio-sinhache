// import React from "react";
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00ff2b]">
          carlossinhache{" "}
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          reiciendis ut sit, odit quod eius maxime accusantium rerum aliquam,
          saepe perspiciatis nihil dolor eligendi.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaLinkedin size={30} />
          <FaDiscord size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className=" py-2 text-sm">Analytics</li>
            <li className=" py-2 text-sm">Analytics</li>
            <li className=" py-2 text-sm">Analytics</li>
            <li className=" py-2 text-sm">Analytics</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
