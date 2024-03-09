import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TbUsersGroup } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiPlantRoots } from "react-icons/gi";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { delay: 0.5 } });
    } else {
      controls.start({ opacity: 0, y: -50 });
    }
  }, [controls, inView]);

  return (
    <>
      <section id="about">
        <div className="container mx-auto mt-12">
          <div className="flex flex-col gap-2 mb-4 justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={controls}
              className="text-4xl font-bold xl:text-left lg:text-left text-center"
            >
              Novos conhecimentos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={controls}
              className="font-light xl:text-left lg:text-left text-center"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              corrupti quibusdam animi a explicabo?
            </motion.p>
          </div>
          <div ref={ref}>
            <motion.div className="xl:flex lg:flex gap-6 justify-center item-center">
              <motion.div
                className="card-box flex justify-start gap-4 xl:flex-row lg:flex-row flex-wrap flex-1 w-full "
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
              >
                {/* Card 1: Programas de Treinamento Especializado */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="card-field flex flex-col gap-3 shadow-2xl max-w-sm transform hover:scale-110 transition-transform delay-100 ease-out p-8 mt-12"
                >
                  <span className="icon-card text-6xl text-secondary">
                    <TbUsersGroup />
                  </span>
                  <h2 className="text-2xl font-bold mb-2">Programas Especializados</h2>
                  <p>
                    Descubra nossos programas de treinamento especializado, incluindo treinamento de força, cardio, ioga e muito mais. Personalizado para atender aos seus objetivos de condicionamento físico.
                  </p>
                  <div className='flex flex-wrap justify-center gap-2  w-full p-3 bg-primary text-white'>
                    <div>
                      <h4 className='font-bold '>Avaliação Gratuita</h4>
                      <span className='font-light'>Agende a sua</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold '>Treinadores Certificados</h4>
                      <span className='font-light text-center text-[13px]'>Experiência Garantida</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold '>Variedade de Opções</h4>
                      <span className='font-light text-center text-[13px]'>Escolha o seu estilo</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Nutrição e Bem-Estar */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="card-field flex flex-col gap-3 shadow-2xl max-w-sm transform hover:scale-110 transition-transform delay-100 ease-out p-8 mt-12"
                >
                  <span className="icon-card text-6xl text-secondary">
                    <GiPlantRoots />
                  </span>
                  <h2 className="text-2xl font-bold mb-2">Nutrição e Bem-Estar</h2>
                  <p>
                    Descubra dicas de nutrição saudável e bem-estar para complementar seu treinamento. Aprenda como uma alimentação balanceada e hábitos saudáveis podem melhorar seu desempenho e bem-estar geral.
                  </p>
                  <div className='flex flex-wrap justify-center gap-3 w-full p-3 bg-primary text-white'>
                    <div>
                      <h4 className='font-bold'>Receitas Saudáveis</h4>
                      <span className='font-light text-center text-[13px]'>Experimente agora</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold '>Dicas de Hidratação</h4>
                      <span className='font-light text-center text-[13px]'>Mantenha-se hidratado</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold '>Gestão do Estresse</h4>
                      <span className='font-light text-center text-[13px]'>Mantenha a mente sã</span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: Depoimentos de Clientes */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="card-field flex flex-col gap-3 shadow-2xl max-w-sm transform hover:scale-110 transition-transform delay-100 ease-out p-8 mt-12"
                >
                  <span className="icon-card text-6xl text-secondary">
                    <MdOutlineAnalytics />
                  </span>
                  <h2 className="text-2xl font-bold mb-2">Depoimentos de Clientes</h2>
                  <p>
                    Leia as histórias inspiradoras de clientes reais que alcançaram sucesso com nosso programa de treinamento. Descubra como eles transformaram suas vidas e alcançaram seus objetivos de fitness.
                  </p>
                  <div className='flex flex-wrap justify-center items-center gap-2 w-full p-5 bg-primary text-white'>
                    <div>
                      <h4 className='font-bold '>Histórias Reais</h4>
                      <span className='font-light text-center text-[13px]'>Inspire-se</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold text-center'>Resultados Tangíveis</h4>
                      <span className='font-light text-center text-[13px]'>Veja por si mesmo</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold text-center'>Transformações Incríveis</h4>
                      <span className='font-light text-center text-[13px]'>Mudança Real</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute right-0 z-[-10] transform xl:flex lg:flex hidden -rotate-180">
          <motion.img
            initial={{ opacity: 1, scale: 1 }}
            animate={controls}
            src="./hero/hand-flower-removebg-preview.png"
            alt="hand-flower"
          />
        </div>
      </section>
    </>
  );
};

export default About;
