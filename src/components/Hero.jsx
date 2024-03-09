import { motion } from "framer-motion";
import { PiPlantDuotone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bold xl:text-5xl text-2xl  xl:w-1/2 lg:w-1/2 xl:text-left lg:text-left text-center"
              >
                Um caminho alternativo para a academia
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="xl:w-1/2 lg:w-1/2 font-light xl:text-left lg:text-left text-center"
              >
                O projeto Academia Sustentável visa proporcionar uma solução inovadora para academias, promovendo a sustentabilidade energética enquanto os clientes se exercitam. Reconhecendo a importância da adoção de fontes de energia renovável, nossa plataforma integra a geração de energia durante o exercício físico, contribuindo para a redução dos custos de energia das academias e promovendo um estilo de vida mais sustentável.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-1 xl:flex-row lg:flex-row flex-col mx-0 gap-4 xl:justify-start lg:justify-start justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center max-w-max h-[40px] pl-2 rounded-xl gap-2 bg-secondary text-[#ffff] text-xl hover:bg-[#000] hover:text-[#fff] tranform transition-transform ease-in-out delay-150 hover:scale-110"
                >
                  <Link to='/contact' className="flex gap-2 items-center" >
                    Formulário <CiLocationArrow1 />
                  </Link>
                </motion.button>
              </motion.div>
            </div>
            <div className="hidden xl:flex lg:flex items-center justify-center">
              <div className="flex ">
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  src="./public/hero/hero-img-removebg-preview.png"
                  className="z-10 w-[800px]"
                  alt="Imagem Home Sustentavel"
                />
              </div>
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute "
                src="./hero/shape-liquidation02-removebg-preview.png"
                alt="shapeLiquid"
              />
            </div>
          </div>
        </div>
        <div className="absolute xl:flex lg:flex hidden left-0 z-[-10]">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            src="./hero/hand-flower-removebg-preview.png"
            alt="hand-flower"
          />
        </div>
      </section>
    </>
  );
};
export default Hero;
