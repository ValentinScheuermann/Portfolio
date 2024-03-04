import React, { useState } from 'react';
import valen2 from '../../assets/valen2.jpeg';
import valen5 from '../../assets/valen5.jpeg';
import './Perfil.css';

const Perfil = () => {
  const [translated, setTranslated] = useState(false);

  const handleTranslate = () => {
    setTranslated(!translated);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="contenedor">
        <div className="perfil">
          <div className="group space-y-4 text-center">
            <div className="mx-auto h-56 w-56 rotate-45 overflow-hidden rounded-[4rem] md:h-40 md:w-40 lg:h-56 lg:w-56">
              <img
                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                src={valen5}
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
            </div>
            <div className="perfil-info">
              <h4 className="text-2xl text-gray-700 dark:text-white">Valentin Scheuermann</h4>
              <span className="block text-sm text-gray-500">Full-Stack Developer</span>
            </div>
            <div className="redes-sociales">
              <a href="https://api.whatsapp.com/send/?phone=%2B5492216164153&text=Hola+Valentin&type=phone_number&app_absent=0" target="_blank" aria-label="outlook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-10 hover:text-primary"
                  fill="currentColor"
                  viewBox="-10 5 38 34"
                >
                  <path
                    d= " M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/valenscheuermann/" target="_blank" aria-label="instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  />
                </svg>
              </a>
              <a href="mailto:valen.scheuermann@hotmail.com" target="_blank" aria-label="instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 hover:text-primary"
                  fill="currentColor"
                  viewBox="0 4 22 30"
                >
                  <path
                    d="M 12.402344 17.347656 C 11.871094 18.03125 11.203125 18.382812 10.410156 18.414062 C 9.640625 18.375 8.984375 18.015625 8.453125 17.34375 C 7.925781 16.664062 7.648438 15.816406 7.632812 14.796875 C 7.648438 13.765625 7.910156 12.910156 8.441406 12.234375 C 8.972656 11.558594 9.628906 11.203125 10.394531 11.171875 C 11.191406 11.203125 11.859375 11.558594 12.375 12.234375 C 12.902344 12.910156 13.175781 13.765625 13.195312 14.796875 L 13.226562 14.796875 C 13.214844 15.816406 12.933594 16.667969 12.402344 17.347656 Z M 16.957031 4.609375 L 4.492188 6.777344 L 4.492188 22.796875 L 16.957031 24.90625 Z M 18.105469 8.710938 L 18.105469 13.296875 L 19.933594 14.707031 L 26.789062 9.351562 C 26.773438 9.160156 26.699219 9.003906 26.558594 8.886719 C 26.417969 8.769531 26.246094 8.710938 26.050781 8.710938 L 18.105469 8.710938 "
                  />  
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/valentin-scheuermann-b85995246/" target="_blank" aria-label="instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="descripcion">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">{translated ? "Valentin Scheuermann" : "Valentín Scheuermann"}</h1>
            <p className="text-start text-2xl text-gray-500 dark:text-gray-500 lg:mx-auto lg:w-8/12">
              {translated ? (
                "Full Stack Developer specialized in Front-End. I've always been passionate about technology in all its aspects. Since I started programming, my main goal has been to use creativity and problem-solving skills to build projects and provide solutions. I've always been self-taught and easily acquire new knowledge, which has often allowed me to adapt and be flexible in any job."
              ) : (
                "Full Stack Developer especializado en Front-End. Siempre me ha apasionado la tecnología en todos sus aspectos. Desde que empecé a programar, mi principal objetivo fue poder utilizar la creatividad y la identificación de un problema o necesidad, para construir un proyecto y darle solución. Siempre me caractericé por ser autodidacta, y aprendo muy fácilmente nuevos conocimientos, lo que me ha permitido muchas veces amoldarme y ser flexible a cualquier trabajo."
              )}
            </p>
          </div>
          <button className="btn btn-primary" onClick={handleTranslate}>{translated ? "Traducir" : "Translate"}</button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
