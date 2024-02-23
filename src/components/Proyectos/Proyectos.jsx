import React from 'react';
import logopc from '../../assets/logopc.webp';
import games from '../../assets/games.jpeg';

const Proyecto = ({ imageUrl, title, subtitle, description, linkUrl }) => {

  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
    <div className="group relative rounded-3xl space-y-6 overflow-hidden">
      <img
        className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        src={imageUrl}
        alt="woman"
        loading="lazy"
        width="640"
        height="805"
      />
      <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
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
  const proyectos = [
    {
      imageUrl: logopc,
      title: 'E-Commerce - MakeMyPc',
      subtitle: 'Componentes de computacion',
      description: 'Ecommerce desarrollado para venta de componentes informaticos',
      linkUrl: 'https://p-final-p-ccorp-front.vercel.app',
    },
    {
      imageUrl: games,
      title: 'Videogames App',
      subtitle: 'Largest API website',
      description: 'Mira un recorrido por la app de informacion mas grande de Videogames',
      linkUrl: 'https://p-final-p-ccorp-front.vercel.app',
    },  {
      imageUrl: logopc,
      title: 'E-Commerce - MakeMyPc',
      subtitle: 'Componentes de computacion',
      description: 'Ecommerce desarrollado para venta de componentes informaticos',
      linkUrl: 'https://p-final-p-ccorp-front.vercel.app',
    },  {
      imageUrl: logopc,
      title: 'E-Commerce - MakeMyPc',
      subtitle: 'Componentes de computacion',
      description: 'Ecommerce desarrollado para venta de componentes informaticos',
      linkUrl: 'https://p-final-p-ccorp-front.vercel.app',
    },
  ];

  return (
    <div className="py-20">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3 lg:w-1/2">
        <h1 class="mb-4 text-start text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            PROYECTOS
          </h1>
        </div>
        <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {proyectos.map((proyecto, index) => (
            <Proyecto key={index} {...proyecto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
