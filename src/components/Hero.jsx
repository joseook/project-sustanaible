import { PiPlantDuotone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-5xl w-1/2">Um caminho alternativo para a academia</h1>
                <p className="w-1/2 font-ligh">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                mollitia ut harum accusantium, vitae amet? Officiis culpa id
                sapiente a placeat quae magni, quo consequuntur hic doloribus
                blanditiis doloremque alias?
                </p>

                <div className="flex flex-1 mx-0 gap-4">
                <button className="flex p-2 items-center gap-2 bg-primary text-[#ffff] text-xl hover:bg-[#fff] hover:text-[#000] tranform transition-transform ease-in-out delay-150 hover:scale-110">
                    Download Job <PiPlantDuotone />
                </button>
                <button className="flex p-2 items-center gap-2 bg-secondary text-[#ffff] text-xl hover:bg-[#000] hover:text-[#fff] tranform transition-transform ease-in-out delay-150 hover:scale-110">
                    Formulário <CiLocationArrow1  />
                </button>
                </div>

            </div>
            <div className="flex items-center justify-center">
                <div className="flex ">
                  <img src="./hero/hero-img-removebg-preview.png" className="z-10 " alt="Imagem Home Sustentavel" />
                  <img className="absolute " src="./hero/shape-liquidation02-removebg-preview.png" alt="shapeLiquid" />
                </div>
            </div>
          </div>
  
        </div>
        <div className="absolute left-0 z-[-10]">
          <img src="./hero/hand-flower-removebg-preview.png" alt="hand-flower" />
        </div>
      </section>
    </>
  );
};
export default Hero;
