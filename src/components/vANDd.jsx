import { GiPlantsAndAnimals } from "react-icons/gi";
import { SiSimpleanalytics } from "react-icons/si";
import { LiaEnvira } from "react-icons/lia";


import { IoAnalytics } from "react-icons/io5";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

const vANDd = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-center mb-7">
              Vantages e desvantagens
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate enim doloremque sit dolor atque ratione! Perspiciatis
              autem sunt beatae rerum, illum veniam eius deleniti. Suscipit
              incidunt debitis maxime? Placeat, asperiores.
            </p>
          </div>
          <div className="cardBox mx-auto flex justify-center items-center gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl mt-4 text-center underline">Vantagens</h1>

              <div className="flex xl:flex-row flex-col gap-5 w-full">
                <div className="card-field flex flex-col gap-4 max-w-md shadow-2xl p-6 bg-secondary text-white transform hover:scale-110 transition-transform ease-in-out delay-100">
                  <div>
                    <div className="p-3 max-w-max rounded-full bg-[#000] text-3xl mb-3 text-white">
                      <GiPlantsAndAnimals />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      Sustentabilidade
                    </h3>
                    <p className="mb-4">
                      Ao aproveitar a energia cinética gerada durante o
                      exercício, as academias podem reduzir sua dependência de
                      fontes de energia não renováveis, contribuindo para a
                      preservação do meio ambiente.
                    </p>

                    <div className="flex">
                      <button className="p-2 transform hover:scale-110 hover:bg-[#fff] hover:text-[#000] transition-transform ease-in bg-primary rounded-lg text-white">
                        Contribuir
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-field flex flex-col gap-4 max-w-md shadow-2xl p-6 transform hover:scale-110 transition-transform ease-in-out delay-100">
                  <div>
                    <div className="p-3 max-w-max rounded-full bg-secondary text-3xl mb-3 text-white">
                      <SiSimpleanalytics />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      Economia de Custos
                    </h3>
                    <p className="mb-4">
                      A utilização da energia gerada pelos clientes permite que
                      as academias reduzam seus gastos com eletricidade, podendo
                      direcionar essas economias para outras áreas do negócio.
                    </p>

                    <div className="flex">
                      <button className="p-2 transform hover:scale-110 hover:bg-[#fff] hover:text-[#000] transition-transform ease-in bg-primary rounded-lg text-white">
                        Contribuir
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-field flex flex-col gap-4 max-w-md shadow-2xl p-6 bg-secondary text-white transform hover:scale-110 transition-transform ease-in-out delay-100">
                  <div>
                    <div className="p-3 max-w-max rounded-full bg-[#000] text-3xl mb-3 text-white">
                      <LiaEnvira />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      Conscientização Ambiental
                    </h3>
                    <p className="mb-4">
                      {" "}
                      O projeto serve como uma forma eficaz de conscientizar os
                      clientes sobre a importância da energia sustentável e como
                      pequenas ações podem ter um impacto significativo no meio
                      ambiente.
                    </p>

                    <div className="flex">
                      <button className="p-2 transform hover:scale-110 hover:bg-[#fff] hover:text-[#000] transition-transform ease-in bg-primary rounded-lg text-white">
                        Contribuir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="cardBox mx-auto flex justify-center items-center gap-8 mt-16">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl mt-4 text-[#7f1d1d] text-center underline">Desvantagens</h1>

              <div className="flex xl:flex-row flex-col gap-5 w-full">
                <div className="card-field flex flex-col gap-4 max-w-md shadow-2xl p-6 bg-[#7f1d1d] text-white transform hover:scale-110 transition-transform ease-in-out delay-100">
                  <div>
                    <div className="p-3 max-w-max rounded-full bg-[#000] text-3xl mb-3 text-white ">
                      <IoAnalytics  />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                        Investimento Inicial
                    </h3>
                    <p className="mb-4">
                        A instalação dos equipamentos necessários para capturar e armazenar a energia cinética requer um investimento inicial significativo por parte das academias.
                    </p>

                    <div className="flex">
                      <button className="p-2 transform hover:scale-110 hover:bg-[#fff] hover:text-[#000] transition-transform ease-in bg-primary rounded-lg text-white">
                        Contribuir
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-field flex flex-col gap-4 max-w-md shadow-2xl p-6 transform hover:scale-110 transition-transform ease-in-out delay-100">
                  <div>
                    <div className="p-3 max-w-max rounded-full bg-[#7f1d1d] text-3xl mb-3 text-white">
                      <FaMoneyCheckAlt />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                        Manutenção
                    </h3>
                    <p className="mb-4">
                        Os equipamentos de geração e armazenamento de  energia exigirão manutenção regular para garantir seu funcionamento eficiente, o que pode representar custos adicionais para as academias.
                    </p>

                    <div className="flex">
                      <button className="p-2 bg-primary rounded-lg text-white transform hover:scale-110 hover:bg-[#fff] hover:text-[#000] transition-transform ease-in">
                        Contribuir
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card-field flex flex-col gap-4 max-w-md shadow-2xl p-6 bg-[#7f1d1d] text-white transform hover:scale-110 transition-transform ease-in-out delay-100">
                  <div>
                    <div className="p-3 max-w-max rounded-full bg-[#000] text-3xl mb-3 text-white">
                      <FaUserFriends />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                        Adoção do Cliente
                    </h3>
                    <p className="mb-4">
                         A aceitação e participação dos clientes no projeto podem variar, sendo necessário um esforço de conscientização e incentivo por parte das academias para promover sua adesão.
                    </p>

                    <div className="flex">
                      <button className="p-2 transform hover:scale-110 hover:bg-[#fff] hover:text-[#000] transition-transform ease-in bg-primary rounded-lg text-white">
                        Contribuir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default vANDd;
