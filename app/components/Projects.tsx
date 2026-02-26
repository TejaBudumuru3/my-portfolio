'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const projects = [
    {
        num: "01",
        tag: 'Multi Agents',
        title: "AI Game Builder",
        screenshot: '/Game_builder.png',
        logo:"/Game-builder_logo.png",
        liveUrl: "https://agentic-ai-builder-1-web-uedg.vercel.app/",
        description: "A multi-agent AI orchestration system that autonomously plans, designs, and generates fully playable browser games from simple text prompts. Engineered with a Controller-Agent architecture, the backend routes sequential LLM reasoning (Clarifier, Planner, Coder) while persisting session state via PostgreSQL and Prisma. The system enforces strict parsing constraints to guarantee zero-dependency, executable code without build-step failures, containerized with Docker for seamless deployment.",
        tech: ['Next.js', 'TypeScript', 'Node.js', 'Multi Agents Orchestration', 'PostgreSQL', 'Prisma', 'Docker', 'OpenRouter API']
    },
    {
        num: '02',
        tag: 'Automation Tool',
        title: 'HireHawk',
        description: 'An intelligent job application bot that works while you sleep. Upload your resume once — HireHawk parses it, discovers matching roles, tailors your application for each position, and auto-applies around the clock.',
        screenshot: '/H_Home.png',
        logo: '/HireHawk.jpg',
        liveUrl: 'https://dev-hire-znlr.vercel.app/',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Python', 'FastAPI', 'PostgreSQL', 'Supabase'],
    },
    {
        num: '03',
        tag: 'AI Platform',
        title: 'AInfinity',
        description: 'An AI-driven content engine that transforms a single keyword into polished, publish-ready social media posts. Built for creators and marketers who need quality content at scale without the creative bottleneck.',
        screenshot: '/A_Home.png',
        logo: '/Ainfinity.png',
        liveUrl: 'https://post-generator-iota.vercel.app/',
        tech: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'GroqAPI, Gemini AI'],
    },
]

const Projects = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    // Scroll-based reveal for cards
    const useReveal = () => {
        const ref = useRef<HTMLDivElement>(null)
        const [visible, setVisible] = useState(false)

        useEffect(() => {
            const el = ref.current
            if (!el) return

            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setVisible(true) },
                { threshold: 0.15 }
            )
            observer.observe(el)
            return () => observer.disconnect()
        }, [])

        return { ref, visible }
    }

    // Scroll progress for the timeline
    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const onScroll = () => {
            const rect = section.getBoundingClientRect()
            const windowH = window.innerHeight
            const sectionTop = rect.top
            const sectionHeight = rect.height

            // Progress: 0 when section enters viewport, 1 when it fully leaves
            const start = windowH      // section.top === windowH means top just entered
            const end = -sectionHeight  // section.top === -height means fully scrolled past

            let progress = (start - sectionTop) / (start - end)
            progress = Math.max(0, Math.min(1, progress))
            setScrollProgress(progress)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div id="projects" className="w-full bg-[#050505] border-t border-white/6" ref={sectionRef}>
            
            {/* Section Header */}
            <div className="px-6 md:px-12 lg:px-20 pt-28 pb-16 max-w-6xl mx-auto text-center">
                <p className="text-[#7c3aed] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Portfolio</p>
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Selected Work.</h2>
                <p className="text-[#a0a0a0] text-base max-w-xl mx-auto">
                    Real-world applications built with modern tech stacks, AI integration, and a focus on exceptional user experience.
                </p>
            </div>

            {/* Projects Container */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pb-28 relative">

                {/* Vertical timeline track (left side on desktop) */}
                <div className="hidden lg:block absolute left-[48px] top-0 bottom-0 w-px bg-white/6">
                    <div
                        ref={progressRef}
                        className="w-full bg-linear-to-b from-[#7c3aed] to-[#a78bfa] shadow-[0_0_12px_2px_rgba(124,58,237,0.4)] transition-none rounded-full"
                        style={{ height: `${scrollProgress * 100}%` }}
                    />
                </div>

                <div className="flex flex-col gap-20 lg:gap-28">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} useReveal={useReveal} />
                    ))}
                </div>
            </div>
        </div>
    )
}

interface ProjectCardProps {
    project: typeof projects[0]
    index: number
    useReveal: () => { ref: React.RefObject<HTMLDivElement | null>; visible: boolean }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, useReveal }) => {
    const { ref, visible } = useReveal()

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            {/* Timeline node (desktop only) */}
            <div className="hidden lg:flex absolute left-[28px] items-center z-10" style={{ marginTop: '2rem' }}>
                <div className="w-10 h-10 rounded-full bg-[#0d0d0d] border-2 border-[#7c3aed] flex items-center justify-center shadow-[0_0_20px_4px_rgba(124,58,237,0.25)]">
                    <Image src={project.logo} alt={`${project.title} logo`} width={28} height={28} className="rounded-full" />
                </div>
            </div>

            <div className="lg:ml-20 group">
                {/* Card */}
                <div className="rounded-2xl bg-[#0a0a0a] border border-white/6 overflow-hidden hover:border-[#7c3aed]/30 transition-all duration-500 hover:shadow-[0_0_60px_-12px_rgba(124,58,237,0.15)]">
                    
                    {/* Screenshot Hero */}
                    <div
                        className="relative h-[280px] md:h-[380px] lg:h-[420px] overflow-hidden cursor-pointer"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                        <Image
                            src={project.screenshot}
                            alt={`${project.title} screenshot`}
                            fill
                            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                        
                        {/* Project number watermark */}
                        <span className="absolute top-6 right-8 text-[80px] md:text-[120px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                            {project.num}
                        </span>

                        {/* Live badge */}
                        <div className="absolute top-5 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28c840] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#28c840]"></span>
                            </span>
                            <span className="text-white/80 text-xs font-medium">Live</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 -mt-12 relative z-10">
                        {/* Mobile logo */}
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                            <Image src={project.logo} alt={`${project.title} logo`} width={32} height={32} className="rounded-full" />
                            <span className="text-[#7c3aed] text-xs font-semibold tracking-[0.15em] uppercase">{project.tag}</span>
                        </div>
                        <span className="hidden lg:inline text-[#7c3aed] text-xs font-semibold tracking-[0.15em] uppercase">{project.tag}</span>
                        
                        <h3 className="text-white text-3xl md:text-4xl font-bold mt-2 mb-5">{project.title}</h3>
                        <p className="text-[#a0a0a0] text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map(t => (
                                <span
                                    key={t}
                                    className="text-xs cursor-default font-medium text-[#a0a0a0] bg-white/[0.04] border border-white/8 px-3 py-1.5 rounded-lg hover:border-[#7c3aed]/40 hover:text-white transition-all duration-200"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-[#a78bfa] text-sm font-semibold hover:text-white transition-colors duration-200 group/link"
                        >
                            View Project
                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
