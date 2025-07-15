import Link from 'next/link';
import Image from 'next/image'


export default function Works() {
  const projects = [
    {
      title: "Platform of Developers",
      tech: "React • Node.js • Prisma",
      img: "/images/project1.jpg",
      bg: "bg-blue-600/90",
      link: "https://github.com/JoelFentes/Projeto-Web"
    },
    {
      title: "Sowing E-commerce",
      tech: "React • Node.js • Prisma",
      img: "/images/project2.jpg",
      bg: "bg-blue-600/90",
      link: "https://github.com/JoelFentes/DessertShop"
    },

  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Work</h2>
          <p className="text-xl text-slate-600">Preview of my recent personal projects. Click to see the code</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
                <Link href={project.link}>
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                        src={project.img}
                        alt={project.title}
                        className="w-full h-80 object-fill group-hover:scale-110 transition-transform duration-500 mx-auto rounded-2xl"
                        />
                        <div
                        className={`absolute inset-0 ${project.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
                        >
                        <div className="text-center text-white">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-sm">{project.tech}</p>
                        </div>
                        </div>
                    </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
