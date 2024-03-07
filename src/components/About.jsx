import { TbUsersGroup } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiPlantRoots } from "react-icons/gi";

const About = () => {

  const cardBoxes = document.querySelectorAll('.card-box');
  
  cardBoxes.forEach(cardBox => {
    cardBox.addEventListener('mouseover', () => {
        const icon_card = cardBox.querySelector('.icon-card');
        icon_card.style.color = 'red';
    })

    cardBox.addEventListener('mouseleave', () => {
        const icon_card = cardBox.querySelector('.icon-card');
        icon_card.style.color ='';
    })

  })

  return (
    <>
        <section id='about '>
            <div className='container mx-auto mt-12'>
                <div className="flex flex-col gap-2 mb-4 justify-center items-center">
                    <h1 className="text-4xl font-bold">Novos conhecimentos</h1>
                    <p className="font-light ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum corrupti quibusdam animi a explicabo?</p>
                </div>
                <div className="flex gap-6 justify-center item-center">
                    <div className="card-box flex justify-start gap-4 flex-row flex-1  max-w-sm">
                        <div className="card-field flex flex-col gap-3 shadow-2xl transform hover:scale-110 transition-transform delay-100 ease-out p-8 mt-12">
                            <span className="icon-card text-6xl text-secondary" ><TbUsersGroup /></span>
                            <h2 className='text-2xl font-bold mb-2'>Titulo 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam quas quidem quod quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaer
                            </p>
                        </div>
                    </div>

                    <div className="card-box flex justify-start gap-4 flex-row flex-1  max-w-sm">
                        <div className="card-field flex flex-col gap-3 shadow-2xl transform hover:scale-110 transition-transform bg-secondary text-white delay-100 ease-out p-8 mt-12">
                            <span className="icon-card text-6xl "><MdOutlineAnalytics /></span>
                            <h2 className='text-2xl font-bold mb-2'>Titulo 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam quas quidem quod quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaer
                            </p>
                        </div>
                    </div>

                    <div className="card-box flex justify-start gap-4 flex-row flex-1  max-w-sm">
                        <div className="card-field flex flex-col gap-3 shadow-2xl transform hover:scale-110 transition-transform delay-100 ease-out p-8 mt-12">
                            <span className="icon-card text-6xl text-secondary"><GiPlantRoots /></span>
                            <h2 className='text-2xl font-bold mb-2'>Titulo 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam quas quidem quod quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaer
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    </>
  );
};
export default About;
