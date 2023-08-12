import Typed from "react-typed";

const Info = () => {
  return (
    <section className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#ad21cb]">
          Carlos Oz
        </h1>
        <div className="magic flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Computer Engineer,
          </p>
          <Typed
            className="magic-text md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#36ba01]"
            strings={["Programmer", "Student", "Developer", "Dummy"]}
            typeSpeed={100}
            backSpeed={90}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          HTML, CSS, JavaScript, ReactJS, Tailwind.
        </p>

        <a
          className="glowingbtn w-[200px] font-medium my-6 mx-auto py-3 text-black"
          href="#Info"
        >
          <span className="btnText"> Keep reading </span>
        </a>
      </div>
    </section>
  );
};

export default Info;
