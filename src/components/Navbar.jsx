const Navbar = () => {


  return (
    <>
        <header className="container">
            <div className="items-center justify-between flex">
                <div className="max-w-[70px] ">
                    <img src="../logo02.svg" alt="Logo" className='rounded-full p-2' />
                </div>
                <nav>
                    <ul className="flex items-center gap-4 font-bold text-xl">
                        <li><a href="#hero" className="hover:bg-primary p-2 rounded-lg hover:text-[#fff]">Home</a></li>
                        <li><a href="#about" className="hover:bg-primary p-2 rounded-lg hover:text-[#fff]">About</a></li>
                        <li><a href="#contact" className="hover:bg-primary p-2 rounded-lg hover:text-[#fff]">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </>

  );
};
export default Navbar;
