import React from 'react'
import bootstrap from '../../assets/bootstrap.png'
import react from '../../assets/react.png'
import './Tecnologias.css'


const Tecnologias = () => {
  return (

    <div class="relative flex flex-col items-center overflow-hidden py-20 md:py-40 bg-gray-100 dark:bg-gray-800">
    <div class="container relative z-[1] m-auto px-6 md:px-12">
      <div class="m-auto text-center md:w-8/12 lg:w-6/12">
        <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Trabajo con las siguiente <span class="text-primary">Tecnologias</span>
        </h2>
      </div>
      <div class="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
        <div class="flex flex-wrap justify-center gap-6">
          <div
            class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
          >
            <img
              src={bootstrap}
              class="contrast-0 transition group-hover:contrast-100 size"
              loading="lazy"
              alt="logo airbnb"
            />
          </div>
          <div
            class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
          >
            <img
              src={react}
              class="contrast-0 transition group-hover:contrast-100"
              loading="lazy"
              alt="logo microsoft"
            />
          </div>
          <div
            class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
          >
            <img
              src={bootstrap}
              class="contrast-0 transition group-hover:contrast-100"
              loading="lazy"
              alt="logo ge"
            />
          </div>
          <div
            class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
          >
            <img
              src={react}
              class="contrast-0 transition group-hover:contrast-100"
              loading="lazy"
              alt="logo bissell"
            />
          </div>
          <div
            class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
          >
            <img
              src={bootstrap}
              class="contrast-0 transition group-hover:contrast-100"
              loading="lazy"
              alt="logo bissell"
            />
          </div>
          <div
            class="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10"
          >
            <img
              src={react}
              class="contrast-0 transition group-hover:contrast-100"
              loading="lazy"
              alt="logo automatic"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
                                      
  )
}

export default Tecnologias