import iconeGitHub from '../assets/img/github-white-icon.svg'
import logo from '../assets/img/logo.png'

export default function Header() {
    return (
        <header className="flex justify-between items-center p-5 h-[10dvh] font-[Fonte_Rosto]">
            <div>
                <img 
                    src={logo} 
                    alt="logo L."
                    width={32}
                    height={32}
                    className='rounded-lg'
                />
            </div>
            
            <ul className='flex items-center gap-3 tracking-wide'>
                <li className='text-blue-300 p-2 rounded-full bg-blue-500/30 hover:bg-sky-700 transition ease-in-out'>
                    <a href="#">Sobre</a>
                </li>
                <li className='text-blue-300 p-2 rounded-full bg-blue-500/30 hover:bg-sky-700 transition ease-in-out'>
                    <a href="#">Projetos</a>
                </li>
                <li className='text-blue-300 p-2 rounded-full bg-blue-500/30 hover:bg-sky-700 transition ease-in-out'>
                    <a href="#">Contato</a>
                </li>
                <li>
                    <a href="https://github.com/LucasLaino" target="_blank" rel="noopener noreferrer">
                    
                        <img src={iconeGitHub}
                            alt="ícone Git Hub"
                            width={42}
                            height={42}
                            className='p-2 rounded-lg bg-blue-500/30 hover:bg-sky-700 transition ease-in-out'
                        />
                    </a>
                </li>
            </ul>
        </header>
    )
}