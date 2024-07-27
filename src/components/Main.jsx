import skills from "../utils/skills";
import projects from "../utils/projects";

function Main() {
    return (
        <main className="main">
            <section
                id="home"
                className="flex flex-col items-center justify-center text-white h-[75vh] text-center"
            >
                <h3 className="text-3xl">👋 Hola, soy</h3>
                <h1 className="text-7xl">Joaquin Medina</h1>
                <h2 className="text-4xl font-bold mt-6 text-[#fdf0d5]">
                    Desarrollador Fullstack
                </h2>
                <div className="mt-12 flex gap-2 sm:gap-4">
                    <a
                        href="#contact"
                        className="outline outline-pink-600 rounded-md outline-2 py-2 px-4 bg-pink-500/50 flex items-center gap-2 transition hover:-translate-y-1 hover:bg-pink-600 "
                    >
                        <span>Contactame</span>
                        <img
                            src="/message.svg"
                            alt="send me a message"
                            className="w-5"
                        />
                    </a>
                </div>
            </section>
            <section id="about-me" className="text-white px-2 sm:px-8">
                <h2 className="text-4xl font-semibold border-l-[10px] border-[#c1121f]">
                    Sobre mi
                </h2>
                <div className="px-2 my-20 flex flex-col gap-6">
                    <p className="text-lg">
                        ✨¡Hola! Soy <b>Joaquín Medina</b> desarrollador web{" "}
                        <b>fullstack</b>. Tengo experiencia desarrollando
                        proyectos freelance y académicos. Orientado al
                        front-end, tengo sólidos conocimientos en tecnologías
                        como React, JavaScript, HTML, CSS y frameworks como
                        Tailwind y Bootstrap. Además, tengo experiencia en
                        back-end utilizando Node.js, Express, Sequelize y
                        Mongoose. Mi pasión por crear soluciones tecnológicas y
                        mi compromiso con el aprendizaje continuo impulsan mi
                        búsqueda de conocimiento y experiencia.
                    </p>
                    <div className="mt-16 relative">
                        <img
                            src="/banner.png"
                            alt="banner linkedin"
                            className="hidden md:block"
                        />
                        <img
                            src="/profesional.png"
                            alt="profile image"
                            className="rounded-full md:hidden p-[1px] outline outline-[#fdf0d5] mx-auto sm:max-w-[300px]"
                        />
                    </div>
                </div>
            </section>
            <section
                id="skills"
                className="text-white px-2 sm:px-8 h-[70vh] flex flex-col justify-center"
            >
                <h2 className="text-4xl font-semibold border-l-[10px] border-[#c1121f]">
                    Habilidades
                </h2>
                <ul className="flex gap-2 flex-wrap text-md my-20 px-2">
                    {skills.map((item) => {
                        return (
                            <li
                                key={item.nameID}
                                /* md:min-w-[10.5rem] 2xl:min-w-[12rem] navbar-item */
                                className="flex items-center justify-center gap-2 bg-zinc-800 dark:bg-white rounded-md px-4 py-1.5 flex-grow outline-2 outline-zinc-800 dark:outline-white text-white dark:text-zinc-950 outline-offset-2 cursor-pointer transition hover:scale-[1.03] md:min-w-[10.5rem] 2xl:min-w-[12rem] navbar-item"
                                style={{
                                    backgroundColor: `${item.color}`,
                                    color: "#fff",
                                }}
                            >
                                <img
                                    src={item.assets}
                                    alt=""
                                    width="23"
                                    height="23"
                                    className="invert dark:invert-0 w-[23px]"
                                />
                                <h4>{item.name}</h4>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section
                id="projects"
                className="text-white px-2 sm:px-8 min-h-screen"
            >
                <h2 className="text-4xl font-semibold border-l-[10px] border-[#c1121f]">
                    Proyectos
                </h2>
                <div className="my-20 flex flex-col justify-center items-stretch gap-12 md:flex-row md:flex-wrap md:gap-8">
                    {projects.map((item) => {
                        return (
                            <article
                                key={item.projectId}
                                className="outline outline-[#778da9] outline-2 rounded-lg p-[2px] max-w-[400px] mx-auto md:mx-0 md:max-w-[350px] transition group hover:outline-[#FFAA1B]"
                            >
                                <div className="h-[200px] group-hover:zoom overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="object-cover h-full w-full rounded-t-md"
                                    />
                                </div>
                                <div className="flex justify-between items-center rounded-b-md py-4 px-2 bg-[#FAF5FF] text-black">
                                    <div>
                                        <a
                                            href={item.link}
                                            className="font-bold transition hover:underline"
                                        >
                                            {item.nombre}
                                        </a>
                                    </div>
                                    <div
                                        className={`${
                                            item.owner === "Koi Studio"
                                                ? "bg-[#fb5607]"
                                                : "bg-[#6366F1]"
                                        } px-4 py-1 rounded-md text-white font-semibold`}
                                    >
                                        {/* <span className="cursor-pointer">
                                            {item.owner}
                                        </span> */}
                                        <img
                                            src={item.icon}
                                            alt={item.owner}
                                            className="w-8"
                                        />
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
            <section
                id="experience"
                className="text-white px-2 sm:px-8 min-h-[600px]"
            >
                <h2 className="text-4xl font-semibold border-l-[10px] border-[#c1121f]">
                    Experiencia
                </h2>
                <div className="my-20">
                    <img
                        src="/koi/koi-orange.png"
                        alt="koi logo"
                        className="mx-auto transition hover:scale-110 cursor-pointer md:max-w-[600px]"
                    />
                    <h3 className="text-3xl mb-10">
                        Cofundador de{" "}
                        <a
                            href="https://koiwebstudio.com/"
                            className="text-orange-600 font-semibold transition-colors hover:text-orange-400"
                        >
                            Koi Studio
                        </a>
                    </h3>
                    <p className="text-lg">
                        🌟Koi Studio es una agencia de diseño creativo integral
                        ubicada en Tucumán, Argentina. Nuestro objetivo es
                        ayudar a las marcas a destacarse tanto en el mundo
                        digital como en el físico, con una visión fresca y
                        juvenil.
                    </p>
                    <div className="flex justify-center items-center flex-wrap gap-2 my-8">
                        <img
                            src="/koi/recurso1.png"
                            alt="recursos"
                            className="lg:w-30"
                        />
                        <img
                            src="/koi/recurso2.png"
                            alt="recursos"
                            className="lg:w-30"
                        />
                        <img
                            src="/koi/recurso3.png"
                            alt="recursos"
                            className="lg:w-30"
                        />
                        <img
                            src="/koi/recurso4.png"
                            alt="recursos"
                            className="lg:w-30"
                        />
                        <img
                            src="/koi/recurso5.png"
                            alt="recursos"
                            className="lg:w-30"
                        />
                        <img
                            src="/koi/recurso6.png"
                            alt="recursos"
                            className="lg:w-30"
                        />
                        <img
                            src="/koi/recurso7.png"
                            alt="recursos"
                            className="lg:w-30"
                        />
                    </div>
                </div>
            </section>
            <section
                id="contact"
                className="text-white px-2 sm:px-8 min-h-[400px] py-20"
            >
                <h2 className="text-4xl font-semibold border-l-[10px] border-[#c1121f]">
                    Contactame
                </h2>
                <p className="text-lg my-20">
                    🎉💻Estoy siempre en busca de nuevas colaboraciones y
                    oportunidades para llevar la creatividad y el diseño a
                    nuevos niveles. Si estás interesado en saber más sobre cómo
                    puedo ayudarte no dudes en contactarme!
                </p>
                <div className="flex flex-col items-stretch justify-center gap-2 sm:gap-4 max-w-[200px] sm:max-w-[350px] md:max-w-[800px] mx-auto md:flex-row ">
                    <a
                        href="http://www.linkedin.com/in/joaquin-medina22"
                        className="outline outline-pink-600 rounded-md outline-2 py-2 px-4 bg-pink-500/50 flex justify-center items-center gap-2 transition hover:-translate-y-1 hover:bg-pink-600 md:min-w-[200px]"
                    >
                        <img
                            src="/linkedin.svg"
                            alt="Github logo"
                            className="w-5"
                        />
                        <span>Linkedin</span>
                    </a>
                    <a
                        href="https://github.com/cacho-medina"
                        className="outline outline-pink-600 rounded-md outline-2 py-2 px-4 bg-pink-500/50 flex justify-center items-center gap-2 transition hover:-translate-y-1 hover:bg-pink-600 md:min-w-[200px]"
                    >
                        <img
                            src="/github.svg"
                            alt="Github logo"
                            className="w-5"
                        />
                        <span>Github</span>
                    </a>
                    <a
                        href="mailto:zanlorenzocacho10@gmail.com"
                        className="outline outline-pink-600 rounded-md outline-2 py-2 px-4 bg-pink-500/50 flex justify-center items-center gap-2 transition hover:-translate-y-1 hover:bg-pink-600 md:min-w-[200px]"
                    >
                        <img
                            src="/mail.svg"
                            alt="correo logo"
                            className="w-5"
                        />
                        <span>Correo</span>
                    </a>
                </div>
            </section>
        </main>
    );
}

export default Main;
