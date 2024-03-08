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
                className="card-box flex justify-start gap-4 flex-row flex-1  w-full "
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="card-field flex flex-col gap-3 shadow-2xl max-w-sm transform hover:scale-110 transition-transform delay-100 ease-out p-8 mt-12"
                >
                  <span className="icon-card text-6xl text-secondary">
                    <TbUsersGroup />
                  </span>
                  <h2 className="text-2xl font-bold mb-2">Titulo 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam, quod, quaerat, quibusdam quas quidem quod quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaer
                  </p>
                  <div className='flex flex-row gap-2 justify-between w-full p-2 bg-primary text-white'>
                    <div>
                      <h4 className='font-bold text-xl'>200 +</h4>
                      <span className='font-light'>Clientes</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold text-xl'>200 +</h4>
                      <span className='font-light'>Clientes</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold text-xl'>200 +</h4>
                      <span className='font-light'>Clientes</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="card-field flex flex-col gap-3 shadow-2xl max-w-sm transform hover:scale-110 transition-transform delay-100 ease-out p-8 mt-12"
                >
                  <span className="icon-card text-6xl text-secondary">
                    <TbUsersGroup />
                  </span>
                  <h2 className="text-2xl font-bold mb-2">Titulo 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam, quod, quaerat, quibusdam quas quidem quod quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaer
                  </p>
                  <div className='flex flex-row gap-2 justify-between w-full p-2 bg-primary text-white'>
                    <div>
                      <h4 className='font-bold text-xl'>200 +</h4>
                      <span className='font-light'>Clientes</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold text-xl'>200 +</h4>
                      <span className='font-light'>Clientes</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold text-xl'>200 +</h4>
                      <span className='font-light'>Clientes</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="card-field flex flex-col gap-3 shadow-2xl max-w-sm transform hover:scale-110 transition-transform delay-100 ease-out p-8 mt-12"
                >
                  <span className="icon-card text-6xl text-secondary">
                    <TbUsersGroup />
                  </span>
                  <h2 className="text-2xl font-bold mb-2">Titulo 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam, quod, quaerat, quibusdam quas quidem quod quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaerat
                    quaerat quaerat quaerat quaerat quaerat quaerat quaer
                  </p>
                  <div className='flex flex-row gap-2 justify-between w-full p-2 bg-primary text-white'>
                    <div>
                      <h4 className='font-bold text-xl'>200 +</h4>
                      <span className='font-light'>Clientes</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold text-xl'>200 +</h4>
                      <span className='font-light'>Clientes</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <h4 className='font-bold text-xl'>200 +</h4>
                      <span className='font-light'>Clientes</span>
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
