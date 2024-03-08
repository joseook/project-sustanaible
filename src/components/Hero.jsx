import { motion } from "framer-motion";
import { PiPlantDuotone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                mollitia ut harum accusantium, vitae amet? Officiis culpa id
                sapiente a placeat quae magni, quo consequuntur hic doloribus
                blanditiis doloremque alias?
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-1 xl:flex-row lg:flex-row flex-col mx-0 gap-4 xl:justify-start lg:justify-start justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex max-w-max pl-2 h-[40px] rounded-xl items-center gap-2 bg-primary text-[#ffff] text-xl hover:bg-[#fff] hover:text-[#000] tranform transition-transform ease-in-out delay-150 hover:scale-110"
                >
                  Download Job <PiPlantDuotone />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center max-w-max h-[40px] pl-2 rounded-xl gap-2 bg-secondary text-[#ffff] text-xl hover:bg-[#000] hover:text-[#fff] tranform transition-transform ease-in-out delay-150 hover:scale-110"
                >
                  Formulário <CiLocationArrow1 />
                </motion.button>
              </motion.div>
            </div>
            <div className="hidden xl:flex lg:flex items-center justify-center">
              <div className="flex ">
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  src="./hero/hero-img-removebg-preview.png"
                  className="z-10 "
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
        <div className="absolute left-0 z-[-10]">
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
