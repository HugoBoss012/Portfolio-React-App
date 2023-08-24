import React from 'react'

const About = () => {


    return (
      <div name='about' className='w-full h-screen bg-[#e4e4e4] text-black-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='sm:items-center text-4xl font-bold inline border-b-4 border-red-600'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Hugo Goncalves, It's awesome to meet you. Please take a look around.</p>
              </div>
              <div>
                <p>My passion lies in crafting exceptional software solutions that enhance the quality of life 
                    for those in my vicinity. My expertise lies in developing software catering to a diverse 
                    clientele, including individuals, small businesses, and even large enterprises.</p>  
              </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default About