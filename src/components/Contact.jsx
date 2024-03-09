import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    const { name, email, message } = Object.fromEntries([...formData.entries()].map(([key, value]) => [key, value.trim()]));

    if (!name) {
      toast.error("Por favor, insira seu nome.");
      nameInputRef.current.focus();
      return;
    }

    if (!email) {
      toast.error("Por favor, insira um endereço de e-mail válido.");
      emailInputRef.current.focus();
      return;
    }

    if (!message) {
      toast.error("Por favor, insira uma mensagem.");
      messageInputRef.current.focus();
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mrgnlkkn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success("Obrigado pelo seu feedback!");
        form.reset();
      } else {
        toast.error("Algo deu errado. Por favor, tente novamente mais tarde.");
      }
    } catch (error) {
      toast.error("Algo deu errado. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <>
      <ToastContainer />
      <header className="container mx-auto">
        <div className="items-center justify-between flex">
          <div className="max-w-[70px]">
            <img src="../logo02.svg" alt="Logo" className="rounded-full p-2" />
          </div>
          <nav className="xl:hidden lg:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
            </button>
          </nav>
          <motion.nav
            className={`lg:flex flex-col lg:flex-row items-center justify-end lg:bg-gray-900  ${
              isOpen
                ? "absolute right-5 top-20 bg-[#000] max-w-max font-bold text-white text-xl"
                : " hidden"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="lg:flex lg:items-center lg:gap-4 lg:font-bold lg:text-xl lg:ml-auto lg:pt-0 h-full  p-4 rounded-sm">
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link
                  to="/"
                  className="hover:bg-primary p-2 rounded-lg hover:text-[#fff]"
                >
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link
                  to="/contact"
                  className="hover:bg-primary p-2 rounded-lg hover:text-[#fff]"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        </div>
      </header>

      <main>
        <section
          id="contact"
          className="bg-contact_img bg-no-repeat bg-cover h-[35rem]"
        >
          <div className="container mx-auto flex flex-col items-center justify-center relative xl:top-0 lg:top-0 top-[25rem]">
            <div className="flex items-center text-center text-white">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold xl:text-5xl lg:text-5xl text-4xl text-green text-[#4ade80]">
                  Contacte <span className="text-[#b91c1c]">conosco</span>
                </h1>
                <p className="text-center text-[#4ade80] mb-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  ad odio minima dolorem ipsa debitis.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 relative xl:top-[10rem]">
              <div className="max-w-xl shadow-2xl p-12 bg-white rounded-lg flex items-center ">
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-center font-bold text-2xl">
                    Faça contato por aqui
                  </h3>
                  <div className="flex flex-col gap-4 ">
                    <div className="flex gap-4 bg-primary items-center">
                      <FaUserCircle className="text-4xl text-white pl-4" />
                      <input
                        ref={nameInputRef}
                        type="text"
                        name="name"
                        className="w-full p-3"
                        placeholder="Nome"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 ">
                    <div className="flex gap-4 bg-primary items-center">
                      <MdMarkEmailRead className="text-4xl text-white pl-4" />
                      <input
                        ref={emailInputRef}
                        type="email"
                        name="email"
                        className="w-full p-3"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 ">
                    <div className="flex gap-4 bg-primary items-center">
                      <BiSolidLike className="text-4xl text-white pl-4" />
                      <textarea
                        ref={messageInputRef}
                        name="message"
                        rows="5"
                        cols="33"
                        className="w-full p-3"
                        placeholder="Avaliar projeto aqui"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary hover:bg-[#4ade80] text-white font-bold py-2 px-4 rounded"
                  >
                    Enviar
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-4 bg-white  max-w-md p-6">
                <h3 className="text-2xl font-bold text-center">
                  Meios para contato
                </h3>
                <p className="text-xl font-light text-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur vel quas, veritatis placeat sequi obcaecati!
                </p>
                <div className="flex flex-col gap-4 rounded-lg bg-secondary p-4 text-white ">
                  <div className="flex gap-3 items-center text-xl">
                    <RiInstagramFill />
                    <h4>Instagrem</h4>
                  </div>

                  <div className="flex gap-3 items-center text-xl">
                    <SiFacebook />
                    <h4>Facebook</h4>
                  </div>

                  <div className="flex gap-3 items-center text-xl">
                    <FaSquareXTwitter />
                    <h4>Twitter</h4>
                  </div>
                </div>

                <div className="text-center">
                  <p>Obrigado por comparecer no nosso stand</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
