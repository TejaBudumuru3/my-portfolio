import Image from "next/image"
import Link from "next/link"

export const NavBar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-999">
            <div className="flex justify-between items-center bg-[#050505]/80 backdrop-blur-xl border-b border-white/6 px-6 md:px-12 lg:px-20 py-4">
                
                {/* Logo / Name */}
                <a href="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-[#7c3aed] flex items-center justify-center text-sm font-black text-white group-hover:shadow-lg group-hover:shadow-[#7c3aed]/40 transition-all duration-300">
                        T
                    </div>
                    <span className="text-white font-semibold text-lg tracking-tight hidden md:inline">
                        Srinivas Sai Saran Teja
                    </span>
                </a>

                {/* Nav Links */}
                <div className="flex items-center gap-8">
                    <a href="/#projects" className="text-[#a0a0a0] hover:text-white text-sm font-medium transition-colors duration-200 hidden md:inline">
                        Projects
                    </a>
                    {/* <Link href="/analytics" className="text-[#a0a0a0] hover:text-white text-sm font-medium transition-colors duration-200 hidden md:inline">
                        Analytics
                    </Link> */}
                    <a href="/#contact" rel="noopener noreferrer">
                        <button className="text-white text-sm font-semibold cursor-pointer px-5 py-2.5 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] transition-all duration-200 hover:shadow-lg hover:shadow-[#7c3aed]/30">
                            Contact
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default NavBar
