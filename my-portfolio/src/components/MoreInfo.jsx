// import React from "react";
import Pepe from "../assets/pepe.png";

const MoreInfo = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Pepe} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00ff2b] font-bold">DATA ABOUT ME </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Test, test and test again.
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            dignissimos dicta illo aliquam voluptas facere quia ea sapiente
            necessitatibus minima laudantium ullam, saepe, nisi perferendis
            ratione! Voluptates voluptatem voluptatibus dignissimos?
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00ff2b]">
            Click here
          </button>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
