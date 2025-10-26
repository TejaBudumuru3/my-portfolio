import Image from "next/image"

export const NavBar = () => {
    return (
        <div className="fixed top-2 left-8 right-8 z-999">

            {/* This inner div has the background, padding, and rounded corners.
                `flex` and `justify-between` are now on this element. */}
            <div className="flex justify-between items-center bg-black rounded-4xl p-4 px-2 px-8">
                
                {/* Your content (no changes needed) */}
                <div className="text-white font-bold flex items-center gap-3">
                    <h1 className="md:text-2xl lg:text-3xl text-md">Srinivas Sai Saran Teja</h1>
                </div>
                <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <button className="text-white text-sm font-bold cursor-pointer p-2 rounded-xl md:rounded-4xl bg-[#5a67d8] px-4 hover:bg-[#667eea] transition-colors duration-300 ease-in-out transform hover:scale-105">
                            Contact us
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default NavBar
