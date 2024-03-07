const Contribution = () => {
  return (
    <>
      <section
        id="contribution"
        className="bg-no-repeat bg-center bg-cover bg-wave-shape02"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 justify-center text-white items-center shadow-2xl p-8">
            <h1 className="text-center font-bold text-4xl">Contruibuição</h1>
            <p className="font-light text-xl text-center">
              Para nos ajudar a elavancar o projeto, por favor faça um rápido
              formulario sobre nosso projeto clicando no botão logo abaixo.
            </p>

            <button className="p-2 bg-primary rounded-lg hover:bg-white hover:text-[#000] transform hover:scale-110 transition-transform ease-in delay-100">
              <a
                href="../Contact.jsx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contribution;
