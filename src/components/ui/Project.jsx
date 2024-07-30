function Project({ item }) {
    return (
        <article
            data-aos="fade-up"
            className="outline outline-[#778da9] outline-2 rounded-lg p-[2px] max-w-[400px] mx-auto md:mx-0 md:max-w-[300px] transition group hover:outline-rosa cursor-pointer"
        >
            <div className=" md>h-[200px] group-hover:zoom overflow-hidden">
                <img
                    src={item.img}
                    alt=""
                    className="aspect-video object-cover h-full w-full rounded-t-md overflow-hidden"
                />
            </div>
            <div className="flex justify-between items-center rounded-b-md py-4 px-2 bg-[#FAF5FF] text-black">
                <div>
                    <a
                        href={item.link}
                        className="font-bold flex items-center transition hover:underline"
                    >
                        <span>{item.nombre}</span>
                        <img
                            src="/link.svg"
                            alt="icono de link"
                            className="w-5 ml-1 -translate-x-3 opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100"
                        />
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
                    <img src={item.icon} alt={item.owner} className="w-6" />
                </div>
            </div>
        </article>
    );
}

export default Project;
