import Typed from 'react-typed';

const Info = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        {/* <p className="text-[#00ff2b] font-bold p-2">No sé que poner aquí</p> */}
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Carlos Oz</h1>
        <div className='flex justify-center items-center '>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Computer Engineer,</p>
          <Typed 
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          strings={
            [
              'Programmer',
              'Student',
              'Developer',
              'Dummy',
            ]
          } typeSpeed={100} backSpeed={90} loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>HTML, CSS, JavaScript, ReactJS, Tailwind.</p>
        <button className='bg-[#00ff2b] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Info