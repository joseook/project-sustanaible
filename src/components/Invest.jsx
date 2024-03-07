const Invest = () => {
  return (
    <>
      <section className="bg-center bg-cover bg-no-repeat bg-wavy-shape">
        <div className="container mx-auto mt-12">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold xl:text-5xl text-3xl  xl:text-left lg:text-left text-center">Investindo em um <span className="text-secondary">mundo mais verde</span></h1>
            <p className="xl:text-left lg:text-left text-center xl:w-1/2 lg:w-1/2 xl:text-xl lg:text-xl mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              tempore omnis molestias nam porro facilis!
            </p>
          </div>
          <div className="card-box xl:flex lg:flex justify-center items-center gap-12">
            <div className="card-field shadow-2xl p-12 gap-4 transform hover:scale-110 delay-150 transition-transform ease-in-out bg-no-repeat bg-cover bg-center bg-body-card h-[400px] rounded-lg text-white">
              <span>Farm</span>
              <h3 className="text-4xl mb-12 font-bold">Title</h3>
              <p className="font-light mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                tempore omnis molestias nam porro facilis!
              </p>

              <div>
                <button className="bg-secondary text-white p-2 w-[200px] rounded-md transform hover:scale-110 transition-transform hover:bg-white hover:text-[#000]">
                    <a href="https://blog.natone.com.br/o-que-e-conscientizacao-ambiental-qual-a-importancia-e-como-obte-la/#:~:text=Como%20praticar%20a%20consci%C3%AAncia%20ambiental%20no%20dia%20a,Promova%20a%20conscientiza%C3%A7%C3%A3o%20com%20as%20pessoas%20pr%C3%B3ximas%20" target="_blank">
                        Saber mais
                    </a>
                </button>
              </div>
            </div>

            <div className="card-field shadow-2xl p-12 gap-4 md:mt-4 sm:mt-4 xs:mt-4 transform hover:scale-110 delay-150 transition-transform ease-in-out  bg-no-repeat bg-cover bg-center h-[400px] bg-body-card02 rounded-lg ">
                <span>Farm</span>
              <h3 className="text-4xl mb-12 font-bold">Title</h3>
              <p className="font-light mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                tempore omnis molestias nam porro facilis!
              </p>

              <div>
                <button className="bg-secondary text-white p-2 w-[200px] rounded-md transform hover:scale-110 transition-transform hover:bg-white hover:text-[#000]">
                    <a href="https://blog.natone.com.br/o-que-e-conscientizacao-ambiental-qual-a-importancia-e-como-obte-la/#:~:text=Como%20praticar%20a%20consci%C3%AAncia%20ambiental%20no%20dia%20a,Promova%20a%20conscientiza%C3%A7%C3%A3o%20com%20as%20pessoas%20pr%C3%B3ximas%20" target="_blank">
                        Saber mais
                    </a>
                </button>
              </div>
            </div>
          </div>
          <div>
          </div>

          <div className="flex justify-center items-center relative  mt-44">
            <div>
                <div className="flex gap-16 justify-center items-center">
                    <img className="max-w-[500px] rounded-lg shadow-2xl hidden xl:flex lg:flex" src="./about/esteira.jpg" alt="Esteira" />
                    <div className="flex flex-col gap-4 xl:text-white lg:text-white">
                        <h1 className="text-4xl font-bold tracking-widest">Project</h1>
                        <p className="font-light text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis alias autem vel aliquid at obcaecati nobis natus, quas quos quia maiores ducimus unde placeat repudiandae est qui! Excepturi, quo.</p>
                    </div>
                </div>

                <div className="flex gap-16 justify-center items-center mt-4">
                    <div className="flex flex-col gap-4 ">
                        <h1 className="text-4xl font-bold tracking-widest md:mt-4 sm:mt-4 xs:mt-4">Project</h1>
                        <p className="font-light text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis debitis alias autem vel aliquid at obcaecati nobis natus, quas quos quia maiores ducimus unde placeat repudiandae est qui! Excepturi, quo.</p>
                    </div>
                    <img className="max-w-[600px] hidden xl:flex lg:flex" src="./about/esteira02.jpg" alt="Esteora" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Invest;
