import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'; // Added icons

// This is your SocialIcon component
const SocialIcon = ({ children, href, label }: { children: React.ReactNode; href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
    >
        {children}
    </a>
)

// This is your exported Footer component
export const Footer = () => {
    return (
        // Changed bg-transparent to bg-[#0A0A0A] to match the theme
        <footer className="w-full bg-[#0A0A0A] py-24 px-6 md:px-12" id='contact'>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                
                {/* 1. Headline */}
                <h2 className="text-2xl md:text-5xl h-full font-bold bg-clip-text py-2 text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-6">
                    Let's create something amazing.
                </h2>

                {/* 2. Subheading */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    I'm currently seeking new roles where I can leverage my skills in
                    full-stack development and AI. Whether you have a question or just want
                    to say hi, my inbox is always open.
                </p>
                
                {/* 3. Social Icons */}
                <div className="flex gap-4 my-2 justify-center">

                    <SocialIcon href="mailto:tejabudumuru3@gmail.com" label="Email">
                        {/* Using Lucide icon for consistency */}
                        <Mail size={20} />
                    </SocialIcon>

                    <SocialIcon href="https://github.com/TejaBudumuru3" label="GitHub">
                        {/* Using Lucide icon for consistency */}
                        <Github size={20} />
                    </SocialIcon>

                    <SocialIcon href="https://www.linkedin.com/in/srinivas-sai-saran-teja-budumuru-15123a292/" label="LinkedIn">
                         {/* Using Lucide icon for consistency */}
                        <Linkedin size={20} />
                    </SocialIcon>
                    
                    <SocialIcon href="https://wa.me/7993027519" label="WhatsApp">
                         {/* Using Lucide icon for consistency */}
                        <MessageCircle size={20} />
                    </SocialIcon>

                </div>
                
                {/* 4. Copyright */}
                <p className="text-gray-600 text-sm mt-12">
                  Designed & Built by Srinivas Sai Saran Teja © {new Date().getFullYear()}
                </p>

            </div>
        </footer>
    )
}

export default Footer;

