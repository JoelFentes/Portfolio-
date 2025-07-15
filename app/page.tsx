import Contact from "@/components/Contact";
import HeroTyping from "@/components/HeroTyping";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Works from "@/components/Works";
import {
  Code2,
  LayoutDashboard,
  Server,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiDocker,
  SiFigma,
  SiVercel,
  SiGit,
  SiNodedotjs,
} from "react-icons/si";
import Link from 'next/link';
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-10 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            <div className="space-y-8">
              <div>
                <p className="text-blue-600 font-medium text-lg">Hello, I'm</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Joel Fentes 
                </h1>
                <HeroTyping />
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                I create functional websites and applications that deliver exceptional user experiences. 
                With expertise in modern web technologies and design principles, I bring ideas to life. 😄
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#portfolio" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  View My Work
                </Link>
              </div>
              <div className="flex space-x-6">
                {/* LinkedIn */}
                <Link href="https://www.linkedin.com/in/joel-fentes/" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </Link>
                {/* GitHub */}
                <Link href="https://github.com/JoelFentes" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-gray-500 rounded-full blur-2xl opacity-30"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <h3 className="text-2xl text-slate-600 leading-relaxed">
                  My passion lies in solving complex problems through innovative
                solutions, always keeping the user at the center of every decision.
                I believe great design is invisible – it just works.
              </h3>
            </div>
            <div className="space-y-6">
            
              <p className="text-lg text-slate-600 leading-relaxed">
              
              </p>
             <div className="grid grid-cols-2 gap-4 pt-4">
                {/* Frontend */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
                  <Code2 className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Frontend</h3>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <SiReact className="text-cyan-500" /> React
                      <SiTypescript className="text-blue-600 ml-3" /> TypeScript
                    </div>
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
                  <Server className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Backend</h3>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <SiNodedotjs className="text-green-600" /> Node.js
                      <span className="ml-3">APIs</span>
                    </div>
                  </div>
                </div>

                {/* Design */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
                  <LayoutDashboard className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Design</h3>
                    <div className="flex items-center gap-2 text-slate-600 text-sm">
                      <SiFigma className="text-pink-600" /> Figma
                      <span className="ml-3">UI/UX</span>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-blue-50 w-68 p-4 rounded-lg flex items-start space-x-3">
                  <LayoutDashboard className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Tools</h3>
                    <div className="flex items-center gap-2 text-slate-600 text-sm flex-wrap">
                      <SiGit className="text-red-600" /> Git
                      <SiDocker className="text-blue-500 ml-1" /> Docker
                      <SiVercel className="text-black ml-1" /> Vercel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Works />
      <Contact />

    </div>
  );
}
