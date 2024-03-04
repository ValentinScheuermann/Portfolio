import React from 'react'
import whatsapp from '../../assets/whatsapp.png'
import outlook from '../../assets/outlook.png'


const Propuesta = () => {
  return (
    <div>
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl
         lg:w-auto lg:text-left xl:text-7xl dark:text-blue">¿Te gustaría un Portfolio como este? <br className="lg:block hidden" /> 
        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary 
        dark:from-primaryLight dark:to-secondaryLight">¿Tener tu propia Landing Page? ¡Contactame y hablemos!</span></h1>
    <div className="lg:flex">
      <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-center lg:mr-auto lg:w-7/12">
            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              <a aria-label="wsp me" href="https://api.whatsapp.com/send/?phone=%2B5492216164153&text=Hola+Valentin&type=phone_number&app_absent=0" target="_blank" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src={whatsapp} alt="wsp logo" loading="lazy" width="128" height="128" />
                  <span className="hidden font-medium md:block dark:text-white">Whatsapp</span>
                </div>
              </a>
              <a aria-label="Mail" href="mailto:valen.scheuermann@hotmail.com" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                <div className="flex justify-center space-x-4">
                  <img className="w-6 h-6" src={outlook} alt="linkedin logo" loading="lazy" width="128" height="128" />
                  <span className="hidden font-medium md:block dark:text-white">Correo</span>
                </div>
              </a>
            </div>
          </div>
        </div>  
    </div>
  )
}

export default Propuesta