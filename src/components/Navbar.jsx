function Navbar() {
    return (
        <header className="sticky top-0 z-10">
            <div className="bg-[#1d3557] pt-3"></div>
            <input
                type="checkbox"
                id="sidebar-active"
                className="hidden peer"
            />
            <div className="flex justify-end px-4 py-2 md:hidden">
                <label
                    htmlFor="sidebar-active"
                    className="inline-block md:hidden"
                >
                    <img src="/menu.svg" alt="" className="w-10" />
                </label>
            </div>
            <nav className="peer-checked:right-0 transition-all duration-300 ease-out fixed top-0 bottom-0 -right-full z-50 w-[90%] sm:w-1/2 sm:shadow bg-[#1d3557] py-6 pl-4 md:hidden">
                <label htmlFor="sidebar-active" className="md:hidden">
                    <img src="/close.svg" alt="" className="w-8" />
                </label>
                <ul className="flex flex-col items-start justify-center gap-8 text-white font-semibold pt-10 pl-8 text-xl">
                    <li className="transition hover:-translate-y-1">
                        <a href="#home">Inicio</a>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <a href="#about-me">Sobre mi</a>
                    </li>
                    <li>
                        <a href="#skills">Habilidades</a>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="bg-[#00091D]/50 px-4 py-2 rounded-md outline outline-2 outline-[#778da9] transition-colors hover:bg-[#778da9]"
                        >
                            Contactame
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="hidden nav py-4 bg-[#1d3557] md:flex justify-center items-center w-[95%] md:w-[70%] lg:w-1/2 xl:w-[40%]">
                <ul className="flex items-center justify-center gap-4 md:gap-6 text-white font-semibold">
                    <li className="transition hover:-translate-y-1">
                        <a href="#home">Inicio</a>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <a href="#about-me">Sobre mi</a>
                    </li>
                    {/* <li>
                        <a href="#skills">Habilidades</a>
                    </li> */}
                    <li className="transition hover:-translate-y-1">
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="bg-[#00091D]/50 px-4 py-2 rounded-md outline outline-2 outline-[#778da9] transition-colors hover:bg-[#778da9]"
                        >
                            Contactame
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

{
    /* <nav className="nav py-4 bg-[#1d3557] flex justify-center items-center w-[95%] md:w-[70%] lg:w-1/2 xl:w-[40%]">
                <ul className="flex items-center justify-center gap-4 md:gap-6 text-white font-semibold">
                    <li className="transition hover:-translate-y-1">
                        <a href="#home">Inicio</a>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <a href="#about-me">Sobre mi</a>
                    </li>
                    {/* <li>
                        <a href="#skills">Habilidades</a>
                    </li> 
                    <li className="transition hover:-translate-y-1">
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li className="transition hover:-translate-y-1">
                        <a href="#experience">Experiencia</a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="bg-[#00091D]/50 px-4 py-2 rounded-md outline outline-2 outline-[#778da9] transition-colors hover:bg-[#778da9]"
                        >
                            Contactame
                        </a>
                    </li>
                </ul>
            </nav> */
}
export default Navbar;
