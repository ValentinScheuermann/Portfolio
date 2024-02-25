import React from 'react';
import linkedin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
import CV from '../../assets/CV.jpeg'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'

const Contacto = () => {
  return (
    <div className="relative pt-40 pb-20 lg:pt-44">
      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">¿Queres trabajar conmigo? <br className="lg:block hidden" /> 
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">Aca abajo te dejo mi contacto y Curriculum</span></h1>
        <div className="lg:flex">
          <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              <a aria-label="linkedin" href="https://www.linkedin.com/in/valentin-scheuermann-b85995246/" target="_blank" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src={linkedin} alt="linkedin logo" loading="lazy" width="128" height="128" />
                  <span className="hidden font-medium md:block dark:text-white">Linkedin</span>
                </div>
              </a>
              <a aria-label="wsp me" href="https://api.whatsapp.com/send/?phone=%2B5492216164153&text=Hola+Valentin&type=phone_number&app_absent=0" target="_blank" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src={whatsapp} alt="wsp logo" loading="lazy" width="128" height="128" />
                  <span className="hidden font-medium md:block dark:text-white">Whatsapp</span>
                </div>
              </a>
              <a aria-label="Github" href="https://github.com/ValentinScheuermann"  target="_blank" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src={github} alt="github logo" loading="lazy" width="128" height="128" />
                  <span className="hidden font-medium md:block dark:text-white">Github</span>
                </div>
              </a>
              <a aria-label="CV" href="https://drive.google.com/file/d/10kcHOj4WxXkei5Dur0Qltx0SECG2ymJ5/view?usp=sharing"  target="_blank" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-blue-300/30">
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src={CV} alt="CV logo" loading="lazy" width="128" height="128" />
                  <span className="hidden font-medium md:block dark:text-white">Curriculum Vitae</span>
                </div>
              </a>
            </div>

            <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
              <img src="./images/clients/airbnb.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
              <img src="./images/clients/ge.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
              <img src="./images/clients/coty.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
              <img src="./images/clients/microsoft.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
