import { Link } from 'react-router-dom'; 
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Contribution = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: -50 });
    }
  }, [controls, inView]);
  
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  return (
    <>
      <section
        id="contribution"
        className="bg-no-repeat bg-center bg-cover bg-wave-shape02"
        ref={ref}
      >
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col gap-8 justify-center text-white items-center shadow-2xl p-8"
            variants={contentVariants}
            animate={controls}
          >
            <motion.div variants={contentVariants}> 
              <motion.h1
                className="text-center font-bold text-4xl"
              >
                Contribuição
              </motion.h1>
            </motion.div>
            <motion.div variants={contentVariants}>
              <motion.p
                className="font-light text-xl text-center"
              >
                Para nos ajudar a alavancar o projeto, por favor faça um rápido
                formulário sobre nosso projeto clicando no botão logo abaixo.
              </motion.p>
            </motion.div>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={controls}
            >
              <Link
                to="/contact"
                className="p-2 bg-primary rounded-lg hover:bg-white hover:text-[#000] transform hover:scale-110 transition-transform ease-in delay-100"
              >
                Clique aqui
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contribution;
