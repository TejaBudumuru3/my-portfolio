import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import VisitorCounter from './VisitorCounter';

const SocialIcon = ({ children, href, label }: { children: React.ReactNode; href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-11 h-11 rounded-lg bg-[#0d0d0d] border border-white/6 flex items-center justify-center text-[#a0a0a0] hover:text-white hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/10 transition-all duration-200"
    >
        {children}
    </a>
)

export const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] border-t border-white/6 py-24 px-6 md:px-12 lg:px-20" id='contact'>
            <div className="max-w-5xl mx-auto">
                
                <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                    {/* Left */}
                    <div>
                        <p className="text-[#7c3aed] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                            Let's build something remarkable.
                        </h2>
                    </div>
                    {/* Right */}
                    <div>
                        <p className="text-[#a0a0a0] text-base leading-relaxed mb-8">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. Whether you have a question or just want to say hello—drop me a line.
                        </p>
                        <a href="mailto:tejabudumuru3@gmail.com" className="inline-block px-6 py-3 rounded-lg bg-[#7c3aed] text-white font-semibold text-sm hover:bg-[#6d28d9] transition-all duration-200 hover:shadow-lg hover:shadow-[#7c3aed]/30">
                            tejabudumuru3@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/6">
                    <div className="flex gap-3">
                        <SocialIcon href="mailto:tejabudumuru3@gmail.com" label="Email">
                            <Mail size={18} />
                        </SocialIcon>
                        <SocialIcon href="https://github.com/TejaBudumuru3" label="GitHub">
                            <Github size={18} />
                        </SocialIcon>
                        <SocialIcon href="https://www.linkedin.com/in/srinivas-sai-saran-teja-budumuru-15123a292/" label="LinkedIn">
                            <Linkedin size={18} />
                        </SocialIcon>
                        <SocialIcon href="https://wa.me/7993027519" label="WhatsApp">
                            <MessageCircle size={18} />
                        </SocialIcon>
                    </div>
                    <div className="flex items-center gap-6">
                        <VisitorCounter />
                        <p className="text-[#525252] text-xs tracking-wide">
                            Designed & Built by Srinivas Sai Saran Teja © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;

