function TechSkill({ item }) {
    return (
        <li
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
}

export default TechSkill;
