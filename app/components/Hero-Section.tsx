
import NavBar from "./NavBar"
import ScrollingText from "./ScrollingText"
// import { useRouter   } from "next/navigate"
export const HeroSection = () => {
    return (

        <div className="min-h-screen w-full p-6 md:p-12 pt-24 md:pt-32 flex flex-col bg-[url('/hero.svg')] bg-cover bg-no-repeat">
            <div className="flex flex-col items-center my-2 text-center">
                
                {/* 3. Added base size text-5xl and kept md:text-7xl.
                */}
                <h1 className="text-white text-5xl md:text-7xl font-extrabold">I Build Solutions That Think</h1>
                
                {/* 4. Changed text-7xl to text-5xl (for mobile) and md:text-7xl (for medium screens and up).
                */}
                {/* <h1 className="text-white text-5xl md:text-7xl font-extrabold">Simplified.</h1> */}

                {/* 5. Changed text-2xl to text-lg (for mobile) and md:text-2xl (for medium screens and up).
                */}
                <h3 className="m-6 text-lg md:text-2xl text-gray-50">I am a MERN stack & Next.js developer with a certified specialty in Generative AI. </h3>
                <h3 className="text-lg md:text-2xl text-gray-200">I create smart, automated tools—from AI content generators to real-time job application bots.</h3>

                <a href="#projects">
                    <button className="m-8 p-4  rounded-4xl text-white bg-[#5a67d8] cursor-pointer hover:bg-[#667eea] transition-all duration-200 ease-in-out transform hover:scale-120 hover:font-extrabold">
                       Checkout my work 
                    </button>
                </a>
            </div>
            
            <ScrollingText items={[
  'React.js',
  'Next.js',
  'Node.js',
  'TypeScript',
  'Python',
  'Fast API',
  'AI API Integration',
  'MongoDB',
  'Express.js',
  'JavaScript',
  'Git',
  'Java'
]} />
        </div>
    )
}
export default HeroSection