export default function Header() {
    return (
        <header className="flex justify-end p-5 h-[10dvh]">
            <ul className="flex tracking-wide gap-5">
                <li>
                    <a href="#" className="p-2 rounded-full text-white font-medium bg-transparent hover:text-black hover:bg-yellow-300 transition duration-300 ease-in-out active:bg-yellow-400">Sobre mim</a>
                </li>

                <li>
                    <a href="#" className="p-2 rounded-full text-white font-medium bg-transparent hover:text-black hover:bg-yellow-300 transition duration-300 ease-in-out active:bg-yellow-400">Projetos</a>
                </li>

                <li>
                    <a href="#" className="p-2 rounded-full text-white font-medium bg-transparent hover:text-black hover:bg-yellow-300 transition duration-300 ease-in-out active:bg-yellow-400">Contato</a>
                </li>
            </ul>
        </header>
    )
}