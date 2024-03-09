import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Invest = () => {
  return (
    <>
      <AnimatedSection>
        <section className="bg-center bg-cover bg-no-repeat bg-wavy-shape">
          <div className="container mx-auto mt-12">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold xl:text-5xl text-3xl  xl:text-left lg:text-left text-center flex gap-4">
                Investindo em um
                 <span className="text-secondary">mundo mais verde</span>
              </h1>
              <p className="xl:text-left lg:text-left text-center xl:text-xl lg:text-xl mb-8">
                As academias sustentáveis são uma tendência crescente na indústria fitness, e nosso projeto Academia Sustentável está na vanguarda dessa mudança. Ao capturar e armazenar a energia cinética gerada pelos clientes durante seus treinos, podemos não apenas reduzir os custos de energia das academias, mas também promover um estilo de vida mais saudável e sustentável para todos.
              </p>
            </div>
            <div className="card-box xl:flex lg:flex justify-center items-center gap-12">
              <div className="card-field shadow-2xl p-12 gap-4 transform hover:scale-110 delay-150 transition-transform ease-in-out rounded-lg">
                <span>Economia</span>
                <h3 className="text-4xl mb-12 font-bold">Economia Sustentável</h3>
                <p className="font-light xl:text-left lg:text-left text-center mb-16">
                  Ao implementar a energia em movimento, as academias podem economizar significativamente em custos de energia elétrica. Essas economias podem ser reinvestidas em melhorias nas instalações, programas de bem-estar para os clientes ou iniciativas de sustentabilidade adicionais.
                </p>

                <div>
                  <button className="bg-secondary text-white p-2 w-[200px] rounded-md transform hover:scale-110 transition-transform hover:bg-white hover:text-[#000]">
                    <a href="https://blog.natone.com.br/o-que-e-conscientizacao-ambiental-qual-a-importancia-e-como-obte-la/#:~:text=Como%20praticar%20a%20consci%C3%AAncia%20ambiental%20no%20dia%20a,Promova%20a%20conscientiza%C3%A7%C3%A3o%20com%20as%20pessoas%20pr%C3%B3ximas%20" target="_blank">
                      Saiba mais
                    </a>
                  </button>
                </div>
              </div>

              <div className="card-field shadow-2xl p-12 gap-4 md:mt-4 sm:mt-4 xs:mt-4 transform hover:scale-110 delay-150 transition-transform ease-in-out rounded-lg ">
                <span>Consciência</span>
                <h3 className="text-4xl mb-12 font-bold">Consciência Ambiental</h3>
                <p className="font-light mb-16">
                  Além dos benefícios econômicos, a energia em movimento também ajuda a promover a conscientização ambiental entre os frequentadores da academia. Ao demonstrar um compromisso com a sustentabilidade, as academias podem educar e inspirar seus clientes a adotarem hábitos de vida mais sustentáveis.
                </p>

                <div>
                  <button className="bg-secondary text-white p-2 w-[200px] rounded-md transform hover:scale-110 transition-transform hover:bg-white hover:text-[#000]">
                    <a href="https://blog.natone.com.br/o-que-e-conscientizacao-ambiental-qual-a-importancia-e-como-obte-la/#:~:text=Como%20praticar%20a%20consci%C3%AAncia%20ambiental%20no%20dia%20a,Promova%20a%20conscientiza%C3%A7%C3%A3o%20com%20as%20pessoas%20pr%C3%B3ximas%20" target="_blank">
                      Saiba mais
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Invest;
