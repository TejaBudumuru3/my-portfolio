
'use client'
import { useEffect, useRef, useState } from "react"

export const HeroSection = () => {

    const skills = [
        {
            category: 'Frontend',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            gradient: 'from-[#7c3aed]/20 to-[#7c3aed]/5',
            items: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'HTML/CSS']
        }, 
        {
            category: 'Backend',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            gradient: 'from-[#a78bfa]/20 to-[#a78bfa]/5',
            items: ['Node.js', 'Express', 'Python', 'Fast API', 'Java', 'REST APIs']
        },
        {
            category: 'AI & Algorithms',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            gradient: 'from-[#c4b5fd]/20 to-[#c4b5fd]/5',
            items: ['AI Integration', 'Agentic AI', 'Agent Orchestration', 'Data Structures', 'Algorithms']
        },
        {
            category: 'DevOps & Tools',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            gradient: 'from-[#7c3aed]/20 to-[#a78bfa]/5',
            items: ['Kafka', 'Websockets', 'Microservices', 'Git', 'MongoDB', 'PostgreSQL']
        }
    ]

    // Animated terminal typing effect
    const codeLines = [
        { prefix: 'const ', keyword: 'developer', text: ' = {' },
        { prefix: '  name: ', keyword: '', text: '"Srinivas Sai Saran Teja",' },
        { prefix: '  stack: ', keyword: '', text: '["React", "Next.js", "Python"],' },
        { prefix: '  loves: ', keyword: '', text: '"Building AI Products",' },
        { prefix: '  open_to_work: ', keyword: '', text: 'true,' },
        { prefix: '};', keyword: '', text: '' },
        { prefix: '', keyword: '', text: '' },
        { prefix: 'developer', keyword: '.build', text: '("something amazing");' },
    ]
    
    const [visibleLines, setVisibleLines] = useState(0)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const heroRef = useRef<HTMLElement>(null)
    
    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleLines(prev => {
                if (prev >= codeLines.length) {
                    clearInterval(timer)
                    return prev
                }
                return prev + 1
            })
        }, 350)
        return () => clearInterval(timer)
    }, [])

    // Subtle mouse parallax
    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            if (!heroRef.current) return
            const rect = heroRef.current.getBoundingClientRect()
            const x = (e.clientX - rect.left) / rect.width - 0.5
            const y = (e.clientY - rect.top) / rect.height - 0.5
            setMousePos({ x, y })
        }
        window.addEventListener('mousemove', handleMouse)
        return () => window.removeEventListener('mousemove', handleMouse)
    }, [])

    return (
        <div className="min-h-screen w-full bg-[#050505] pt-20">

            {/* ── HERO ── */}
            <section ref={heroRef} className="relative px-6 md:px-12 lg:px-20 py-28 md:py-40 overflow-hidden min-h-[90vh] flex items-center">
                
                {/* Background effects */}
                {/* Dot grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }} />

                {/* Animated gradient orbs */}
                <div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
                        top: '20%',
                        right: '10%',
                        transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
                        transition: 'transform 0.3s ease-out',
                    }}
                />
                <div
                    className="absolute w-[400px] h-[400px] rounded-full blur-[130px] pointer-events-none opacity-10"
                    style={{
                        background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
                        bottom: '10%',
                        left: '5%',
                        transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
                        transition: 'transform 0.3s ease-out',
                    }}
                />

                {/* Floating geometric shapes */}
                <div className="absolute top-[15%] right-[20%] w-3 h-3 border border-[#7c3aed]/30 rotate-45 animate-float-slow pointer-events-none" />
                <div className="absolute bottom-[25%] left-[15%] w-2 h-2 bg-[#7c3aed]/20 rounded-full animate-float pointer-events-none" />
                <div className="absolute top-[40%] right-[8%] w-4 h-4 border border-[#a78bfa]/20 rounded-full animate-float-reverse pointer-events-none" />
                <div className="absolute bottom-[15%] right-[30%] w-2 h-2 border border-[#7c3aed]/25 rotate-45 animate-float-slow pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    
                    {/* Left - Text Content */}
                    <div className="flex-1 max-w-2xl">
                        {/* Availability badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28c840] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28c840]"></span>
                            </span>
                            <span className="text-[#a78bfa] text-xs font-medium tracking-wide">Available for opportunities</span>
                        </div>

                        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
                            Crafting
                            <span className="relative inline-block mx-3">
                                <span className="relative z-10 text-[#7c3aed]">intelligent</span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#7c3aed]/15 -skew-x-6 rounded-sm"></span>
                            </span>
                            <br/>digital experiences.
                        </h1>
                        
                        <p className="text-[#a0a0a0] text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                            Full-Stack Developer & AI Specialist building high-performance applications that push boundaries. From concept to deployment — I make ideas real.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href="https://drive.google.com/file/d/1MF1tbbZRi_SBJzAhrds52dE71b3cAv7z/view?usp=sharing" target="_blank">
                                <button className="group px-7 py-3.5 rounded-xl text-white font-semibold border border-white/12 bg-transparent cursor-pointer hover:border-[#7c3aed] hover:text-[#a78bfa] transition-all duration-300 flex items-center gap-2">
                                    Resume
                                    <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </button>
                            </a>
                            <a href="#projects">
                                <button className="px-7 py-3.5 rounded-xl text-white font-semibold bg-[#7c3aed] cursor-pointer hover:bg-[#6d28d9] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(124,58,237,0.4)] flex items-center gap-2">
                                    View Projects
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </button>
                            </a>
                        </div>

                        {/* Quick stats */}
                        <div className="flex gap-8 md:gap-12">
                            <div>
                                <p className="text-white text-2xl md:text-3xl font-bold">2+</p>
                                <p className="text-[#525252] text-xs mt-1 uppercase tracking-wider">Projects Shipped</p>
                            </div>
                            <div className="w-px bg-white/6"></div>
                            <div>
                                <p className="text-white text-2xl md:text-3xl font-bold">15+</p>
                                <p className="text-[#525252] text-xs mt-1 uppercase tracking-wider">Technologies</p>
                            </div>
                            <div className="w-px bg-white/6"></div>
                            <div>
                                <p className="text-white text-2xl md:text-3xl font-bold">AI</p>
                                <p className="text-[#525252] text-xs mt-1 uppercase tracking-wider">Focused</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Interactive Terminal + Floating Elements */}
                    <div className="flex-1 max-w-lg w-full hidden lg:block">
                        <div
                            className="relative"
                            style={{
                                transform: `perspective(1000px) rotateY(${mousePos.x * -3}deg) rotateX(${mousePos.y * 3}deg)`,
                                transition: 'transform 0.3s ease-out',
                            }}
                        >
                            {/* Glow behind terminal */}
                            <div className="absolute -inset-4 bg-[#7c3aed]/5 rounded-2xl blur-xl" />
                            
                            <div className="relative rounded-2xl border border-white/8 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                                {/* Terminal header */}
                                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/6 bg-[#0d0d0d]">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
                                        <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
                                        <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
                                    </div>
                                    <span className="text-[#525252] text-xs font-mono">~/developer.ts</span>
                                    <div className="w-14"></div>
                                </div>
                                
                                {/* Terminal body */}
                                <div className="p-6 font-mono text-[13px] leading-7 min-h-[260px]">
                                    {/* Line numbers + code */}
                                    {codeLines.map((line, i) => (
                                        <div
                                            key={i}
                                            className={`flex transition-all duration-500 ${i < visibleLines ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        >
                                            <span className="text-white/10 w-8 text-right mr-4 select-none text-xs leading-7">{i + 1}</span>
                                            <div>
                                                <span className="text-[#c4b5fd]">{line.prefix}</span>
                                                <span className="text-[#7c3aed] font-semibold">{line.keyword}</span>
                                                <span className="text-[#a0a0a0]">{line.text}</span>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Blinking cursor */}
                                    <div className="flex">
                                        <span className="w-8 mr-4"></span>
                                        <span className="inline-block w-[10px] h-5 bg-[#7c3aed] rounded-sm animate-blink mt-1"></span>
                                    </div>
                                </div>

                                {/* Terminal footer */}
                                <div className="px-5 py-2.5 border-t border-white/6 bg-[#0d0d0d] flex items-center justify-between">
                                    <span className="text-[#525252] text-[10px] font-mono">TypeScript</span>
                                    <span className="text-[#525252] text-[10px] font-mono">UTF-8</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating tech badges around terminal */}
                        <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-[#0d0d0d] border border-white/8 text-xs text-[#a78bfa] font-medium animate-float shadow-lg shadow-black/20">
                            React
                        </div>
                        <div className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-lg bg-[#0d0d0d] border border-white/8 text-xs text-[#a78bfa] font-medium animate-float-reverse shadow-lg shadow-black/20">
                            Next.js
                        </div>
                        <div className="absolute top-1/2 -right-6 px-3 py-1.5 rounded-lg bg-[#0d0d0d] border border-white/8 text-xs text-[#a78bfa] font-medium animate-float-slow shadow-lg shadow-black/20">
                            AI
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
                    <span className="text-[#a0a0a0] text-xs tracking-widest uppercase">Scroll</span>
                    <svg className="w-4 h-4 text-[#a0a0a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
                    </svg>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-white/6">
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="text-[#7c3aed] text-sm font-semibold tracking-[0.2em] uppercase mb-4">About</p>
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                            Crafting digital experiences that leave a mark.
                        </h2>
                    </div>
                    <div className="space-y-5 text-[#a0a0a0] text-base leading-relaxed">
                        <p>
                            I'm an <span className="text-white font-medium">innovative full-stack developer</span> driven by a relentless curiosity for building things that matter. I specialize in creating intelligent systems — from AI-powered automation tools to real-time collaborative platforms.
                        </p>
                        <p>
                            My approach blends <span className="text-white font-medium">clean architecture</span> with <span className="text-white font-medium">creative problem-solving</span>, ensuring every product I ship is fast, scalable, and delightful to use. I thrive at the intersection of design and engineering.
                        </p>
                        <p>
                            Currently deep into Generative AI, exploring how intelligent systems can transform everyday workflows into seamless, automated experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SKILLS ── */}
            <section className="relative px-6 md:px-12 lg:px-20 py-28 border-t border-white/6 overflow-hidden">
                {/* Background accents */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7c3aed]/[0.03] rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#a78bfa]/[0.03] rounded-full blur-[100px]"></div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <p className="text-[#7c3aed] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Expertise</p>
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                            Technologies I work with
                        </h2>
                        <div className="w-12 h-[2px] bg-linear-to-r from-transparent via-[#7c3aed] to-transparent mx-auto"></div>
                    </div>

                    {/* Skills grid - bento style  */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {skills.map((skillGroup, groupIndex) => (
                            <div
                                key={skillGroup.category}
                                className="group relative rounded-2xl overflow-hidden"
                            >
                                {/* Gradient border effect */}
                                <div className="absolute -inset-[1px] bg-linear-to-br from-[#7c3aed]/20 via-transparent to-[#a78bfa]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className={`relative bg-[#0a0a0a] rounded-2xl p-7 h-full border border-white/[0.04] group-hover:border-transparent transition-all duration-500`}>
                                    {/* Background gradient on hover */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${skillGroup.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                                    
                                    {/* Large faded number watermark */}
                                    <div className="absolute top-4 right-6 text-[80px] font-black text-white/[0.02] leading-none select-none group-hover:text-white/[0.04] transition-colors duration-500">
                                        0{groupIndex + 1}
                                    </div>

                                    <div className="relative">
                                        {/* Category header */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#a78bfa] group-hover:bg-[#7c3aed]/20 group-hover:border-[#7c3aed]/40 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_-4px_rgba(124,58,237,0.4)]">
                                                {skillGroup.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold text-lg group-hover:text-[#e4d4ff] transition-colors duration-300">
                                                    {skillGroup.category}
                                                </h4>
                                                <p className="text-[#525252] text-xs">{skillGroup.items.length} technologies</p>
                                            </div>
                                        </div>

                                        {/* Skill pills */}
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, skillIndex) => (
                                                <span
                                                    key={skill}
                                                    className="px-3.5 py-1.5 text-sm rounded-lg bg-white/[0.03] border border-white/[0.06] text-[#a0a0a0] 
                                                    hover:bg-[#7c3aed]/10 hover:border-[#7c3aed]/30 hover:text-[#c4b5fd] 
                                                    transition-all duration-300 cursor-default"
                                                    style={{ transitionDelay: `${skillIndex * 30}ms` }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom accent line */}
                    <div className="mt-14 flex items-center justify-center gap-4">
                        <div className="h-[1px] w-16 bg-linear-to-r from-transparent to-[#7c3aed]/30"></div>
                        <span className="text-[#525252] text-xs tracking-widest uppercase">Always Learning</span>
                        <div className="h-[1px] w-16 bg-linear-to-l from-transparent to-[#7c3aed]/30"></div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default HeroSection
