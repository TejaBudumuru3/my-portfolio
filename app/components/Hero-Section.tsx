
import NavBar from "./NavBar"
// import { useRouter   } from "next/navigate"
export const HeroSection = () => {

    const skills = [
        {
            category: 'Frontend',
            icon: '💻',
            items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS']
        }, 
        {
            category: 'Backend',
            icon: '⚙️',
            items: ['Node.js', 'Express', 'Python', 'Fast API', 'Java', 'REST APIs']
        },
        {
            category: 'Algorithms & AI',
            icon: '🤖',
            items: ['AI Integration', 'Data Structures', 'Algorithms']
        },
        {
            category: 'Tools & Others',
            icon: '🛠️',
            items: ['Git', 'MongoDB', 'PostgreSQL']
        }
    ]
    return (

        <div className="min-h-screen w-full p-6 md:p-12 pt-24 md:pt-32 flex flex-col bg-[url('/hero.svg')] bg-cover bg-no-repeat">
            <div className="flex flex-col items-center my-2 text-center">
                
                <h1 className="text-white text-5xl md:text-7xl font-extrabold">I Build Solutions That Think</h1>

                <h3 className="m-6 text-lg md:text-2xl text-gray-50">I am a MERN stack & Next.js developer with a certified specialty in Generative AI. </h3>
                <h3 className="text-lg md:text-2xl text-gray-200">I create smart, automated tools—from AI content generators to real-time job application bots.</h3>
                
                <div className="inline-flex hover:gap-2">
                    <a href="https://drive.google.com/file/d/1FXsoVeOb44oEKhUQy8GQ_18k8fDg_yEf/view?usp=sharing" target="_blank">
                    <button className="mt-8 m-2 p-4  rounded-4xl text-white border-2 hover:border-none border-[#5a67d8] cursor-pointer hover:bg-[#667eea] transition-all duration-200 ease-in-out transform hover:scale-120 hover:font-extrabold">
                        My Resume &#8599;
                    </button>
                </a>
                <a href="#projects">
                    <button className="mt-8 m-2 p-4  rounded-4xl text-white bg-[#5a67d8] cursor-pointer hover:bg-[#667eea] transition-all duration-200 ease-in-out transform hover:scale-120 hover:font-extrabold">
                       Checkout my work 
                    </button>
                </a>
                </div>
            </div>
            
            {/* <ScrollingText /> */}

             <div className="grid lg:grid-cols- gap-12 items-center mb-20">
                    {/* Left: Bio */}
                    <div className={`space-y-6 transition-all duration-1000 delay-200`
                    }>
                        <div className="glass p-8 rounded-2xl hover-lift">
                            <h3 className="text-2xl font-bold text-white mb-4 font-display">
                                Hi, I'm Teja 👋
                            </h3>
                            <div className="space-y-4 text-gray-300 text-xl leading-relaxed">
                                <p>
                                    I'm an <span className="text-[#6366f1] font-semibold">innovative developer</span> and <span className="text-[#06b6d4] font-semibold">tech enthusiast</span> who loves building creative solutions with modern web technologies.
                                </p>
                                <p>
                                    I dive deep into cutting-edge tech stacks, experimenting with AI integration, full-stack development, and creating applications that push boundaries. My projects reflect my passion for learning and building.
                                </p>
                                <p>
                                    Currently exploring the intersection of AI and web development, I'm driven by curiosity and the desire to create impactful digital experiences.
                                </p>
                            </div>
                        </div>
                    <h3 className="text-3xl text-white font-bold font-display text-center mb-12">
                        My Skills
                    </h3>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-6">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={skillGroup.category}
                                className="glass p-6 rounded-2xl hover-lift group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div 
                                className="text-4xl mb-4 group-hover:scale-110 transition-transform"
                                >
                                    {skillGroup.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-4 font-display">
                                    {skillGroup.category}
                                </h4>
                                <ul className="space-y-2">
                                    {skillGroup.items.map((skill) => (
                                        <li 
                                            key={skill}
                                            className="text-gray-300 text-sm flex items-center gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                    
            </div>

        </div>
    )
}
export default HeroSection