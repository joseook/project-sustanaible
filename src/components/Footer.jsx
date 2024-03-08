import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const currentDate = new Date();

    const handleLinkClick = (event) => {
        if (event.target.getAttribute("href") === "#") {
            alert("Não possui um caminho no momento");
            event.preventDefault(); 
        } else {
            window.location.href = event.target.getAttribute("href");
        }
    };

    return (
        <footer className="bg-gray-800">
            <div className="container mx-auto py-8">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-yellow-400 text-xl">Caminhos</h1>
                        <span><a href="#hero" className="cursor-pointer" onClick={handleLinkClick}>Home</a></span>
                        <span><a href="#about" className="cursor-pointer" onClick={handleLinkClick}>Sobre</a></span>
                        <span><a href="#advantage" className="cursor-pointer" onClick={handleLinkClick}>Vantagens</a></span>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <h1 className="font-bold text-yellow-400 text-xl">Redes Sociais</h1>
                        <span className='flex items-center gap-2' ><a href="#" onClick={handleLinkClick}><FaFacebook /></a> <a href="#" onClick={handleLinkClick}>Facebook</a></span>
                        <span className='flex items-center gap-2'><a href="https://www.instagram.com/gympro_3e/" target='_blank' onClick={handleLinkClick}><FaInstagram /></a> <a href="https://www.instagram.com/gympro_3e/" target='_blank' onClick={handleLinkClick}>Instagram</a></span>
                        <span className='flex items-center gap-2'><a href="#" onClick={handleLinkClick}><FaTwitter /></a> <a href="#" onClick={handleLinkClick}>Twitter</a></span>
                        <span className='flex items-center gap-2'><a href="#" onClick={handleLinkClick}><FaYoutube /></a> <a href="#" onClick={handleLinkClick}>Youtube</a></span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-yellow-400 text-xl">Contato</h1>
                        <span><a href="../contact">Fale conosco</a></span>
                        <span><a href="../contact">Contato</a></span>
                    </div>
                </div>
                <div className="flex justify-center gap-4 mt-8">
                    <a href="#"><FaInstagram className="text-2xl hover:text-purple-400 transition-all delay-100 transform hover:scale-110" /></a>
                    <a href="#"><FaFacebook className="text-2xl hover:text-blue-300 transition-all delay-100 transform hover:scale-110" /></a>
                    <a href="#"><FaTwitter className="text-2xl hover:text-black transition-all delay-100 transform hover:scale-110" /></a>
                    <a href="#"><FaYoutube className="text-2xl hover:text-red-500 transition-all delay-100 transform hover:scale-110" /></a>
                </div>
            </div>
            <p className="text-center py-2">@ Todos os direitos reservados - Academia Sustentável {currentDate.getFullYear()}</p>
        </footer>
    );
};

export default Footer;
