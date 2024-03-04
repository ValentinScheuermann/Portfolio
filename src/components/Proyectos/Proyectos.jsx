import React, { useEffect, useState } from 'react';
import './Proyectos.css';
import logopc from '../../assets/logopc.jpeg';
import games from '../../assets/games.jpeg';
import hotel from '../../assets/hotel.jpeg';
import pcfoto1 from '../../assets/pcfoto1.png'

const Proyecto = ({ imageUrl, title, subtitle, description, linkUrl }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <div className="group relative rounded-3xl space-y-6 overflow-hidden">
        <img
          className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 
          group-hover:grayscale-0"
          src={imageUrl}
          alt={title}
          loading="lazy"
          width="640"
          height="805"
        />
        <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white 
          translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div>
            <h4 className="text-xl font-semibold dark:text-gray-700 text-white">{title}</h4>
            <span className="block text-sm text-gray-500">{subtitle}</span>
          </div>
          <p className="mt-8 text-gray-300 dark:text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
};

const Proyectos = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const proyectos = [
    {
      imageUrl: pcfoto1,
      title: 'E-Commerce - MakeMyPc',
      subtitle: 'Componentes de computacion',
      description: 'Ecommerce desarrollado para la venta de componentes informáticos',
      linkUrl: 'https://p-final-p-ccorp-front.vercel.app',
    },
    {
      imageUrl: games,
      title: 'Videogames App',
      subtitle: 'Largest API website',
      description: 'Mira un recorrido por la app de información mas grande de Videogames',
      linkUrl: 'https://vimeo.com/905643198',
    },
    {
      imageUrl: hotel,
      title: 'Serena - Hotel',
      subtitle: 'Hoteleria',
      description: 'Alquiler de las mejores Suits ubicadas en en el corazon de un precioso Bosque',
      linkUrl: 'https://serena-hotel.vercel.app',
    }
  ];

  return (
    <div className={`py-20 ${isMobileView ? 'mobile-view' : ''}`}>
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-blue">
            Mira algunos de mis  <br className="lg:block hidden" /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-primaryLight dark:to-secondaryLight">Proyectos</span>
          </h1>
        </div>
        <div className="proy">
          {proyectos.map((proyecto, index) => (
            <Proyecto key={index} {...proyecto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
