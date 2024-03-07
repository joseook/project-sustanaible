import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const currentDate = new Date();
    
    return (
        <footer className="bg-gray-800">
            <div className="container mx-auto py-8">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-yellow-400 text-xl">Caminhos</h1>
                        <span><a href="#hero" className="cursor-pointer">Home</a></span>
                        <span><a href="#about" className="cursor-pointer">Sobre</a></span>
                        
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-yellow-400 text-xl">Cinemas</h1>
                        <span><a href="#">Shopping</a></span>
                        <span><a href="#">Teatro</a></span>
                        
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-yellow-400 text-xl">Redes Sociais</h1>
                        <span><a href="#"><FaFacebook /></a> <a href="#">Facebook</a></span>
                        <span><a href="#"><FaInstagram /></a> <a href="#">Instagram</a></span>
                        <span><a href="#"><FaTwitter /></a> <a href="#">Twitter</a></span>
                        <span><a href="#"><FaYoutube /></a> <a href="#">Youtube</a></span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-yellow-400 text-xl">Contato</h1>
                        <span><a href="#">Fale conosco</a></span>
                        <span><a href="#">Contato</a></span>
                       
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
