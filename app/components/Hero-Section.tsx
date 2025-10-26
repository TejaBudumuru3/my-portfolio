
import NavBar from "./NavBar"
import ScrollingText from "./ScrollingText"
// import { useRouter   } from "next/navigate"
export const HeroSection = () => {
    return (

        <div className="min-h-screen w-full p-6 md:p-12 pt-24 md:pt-32 flex flex-col bg-[url('/hero.svg')] bg-cover bg-no-repeat">
            <div className="flex flex-col items-center my-2 text-center">
                
                {/* 3. Added base size text-5xl and kept md:text-7xl.
                */}
                <h1 className="text-white text-5xl md:text-7xl font-extrabold">From Idea to Scale.</h1>
                
                {/* 4. Changed text-7xl to text-5xl (for mobile) and md:text-7xl (for medium screens and up).
                */}
                <h1 className="text-white text-5xl md:text-7xl font-extrabold">Simplified.</h1>

                {/* 5. Changed text-2xl to text-lg (for mobile) and md:text-2xl (for medium screens and up).
                */}
                <h3 className="m-4 text-lg md:text-2xl text-gray-50">Ship at lightning speed, and scale to a global audience.</h3>
                <h3 className="text-lg md:text-2xl text-gray-200">Effortlessly with our next-gen Ai Integration .</h3>

                <a href="https://x.com/vamsi__0" target="_black">
                    <button className="m-8 p-4  rounded-2xl text-white bg-[#5a67d8] cursor-pointer hover:bg-[#667eea] transition-colors duration-300 ease-in-out transform hover:scale-120 hover:font-extrabold">
                        Contact us
                    </button>
                </a>
            </div>
            
            <ScrollingText items={['Java', 'React', 'Nextjs', 'Ai ', 'Nodejs' , 'Express' , 'Python' , 'Data structures' , 'Machine Learning']} />
        </div>
    )
}
export default HeroSection