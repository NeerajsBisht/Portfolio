"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Home, User, Code2, FolderOpen, Mail } from "lucide-react"; 
import MouseFollower from "./components/MouseFollower";
import DownloadResumeButton from "./components/DownloadResumeButton";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
} from "react-icons/si";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="bg-slate-900 text-slate-100 scroll-smooth relative">
      <MouseFollower/>
      {/* HERO SECTION */}
      <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
>
  {/* BACKGROUND GLOW */}
  {/* SOFT GRADIENT BACKGROUND GLOW */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br 
                  from-slate-900 via-slate-900 to-black" />
  <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px]
                  bg-cyan-500/20 rounded-full blur-[120px]" />
  <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]
                  bg-blue-500/20 rounded-full blur-[120px]" />
  <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px]
                  bg-purple-500/15 rounded-full blur-[140px]" />
</div>


  <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center md:text-left">
      
      {/* ROLE BADGE */}
      <div
        data-aos="fade-down"
        className="inline-block mb-4 px-4 py-1 rounded-full
                   bg-slate-800 border border-slate-700
                   text-sm text-slate-300"
      >
        Full Stack Developer
      </div>

      <h1
        data-aos="fade-up"
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Neeraj Singh
        </span>
      </h1>

      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-lg max-w-xl mb-8 text-slate-300 leading-relaxed"
      >
        I build fast, scalable, and visually refined web applications using{" "}
        <span className="text-cyan-400">Next.js</span>,{" "}
        <span className="text-cyan-400">Tailwind CSS</span>, and modern web
        technologies.
      </p>

      <div data-aos="zoom-in">
        <DownloadResumeButton />
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div
      data-aos="fade-left"
      className="flex justify-center md:justify-end"
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80">

        {/* IMAGE GLOW */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl animate-pulse" />

        <div className="relative rounded-full overflow-hidden
                        border-4 border-cyan-400
                        shadow-[0_0_40px_rgba(34,211,238,0.6)]
                        animate-[float_6s_ease-in-out_infinite]">
          <img
            src="/images/profile.jpeg"
            alt="Neeraj Singh"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>

  </div>
</section>



      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 bg-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            data-aos="fade-up"
            className="text-4xl font-semibold mb-8 text-cyan-400"
          >
            About Me
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            I’m passionate about creating web applications that blend
            functionality and design. My focus is building smooth, fast, and
            reliable user interfaces with clean and efficient code. I love
            solving problems and continuously improving my skills in full-stack
            development.
          </p>
        </div>
      </section>

      {/* SKILLS SECTION */}

<section id="skills" className="py-20 px-6 bg-slate-900">
  <div className="mx-auto text-center w-[90%] md:w-[70%]">

    {/* SECTION HEADING */}
    <h2
      data-aos="fade-up"
      className="text-4xl font-semibold mb-16 text-cyan-400"
    >
      Skills
    </h2>

    {/* SKILLS CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* LANGUAGES */}
      <div
        data-aos="fade-up"
        className="bg-gradient-to-b from-slate-800 to-slate-900
                   rounded-2xl p-8 border border-slate-700
                   hover:border-cyan-400
                   hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                   transition-all duration-300"
      >
        <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
          <span className="w-1 h-6 bg-cyan-400 rounded-full"></span>
          Languages
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
            { name: "Python", icon: <SiPython className="text-yellow-300" /> },
            { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
          ].map((skill, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 80}
              className="flex items-center gap-3 bg-slate-800/70
                         rounded-xl px-4 py-3
                         hover:bg-slate-700 transition-colors"
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="text-sm text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FRAMEWORKS & LIBRARIES */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-gradient-to-b from-slate-800 to-slate-900
                   rounded-2xl p-8 border border-slate-700
                   hover:border-cyan-400
                   hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                   transition-all duration-300"
      >
        <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
          <span className="w-1 h-6 bg-purple-400 rounded-full"></span>
          Frameworks & Libraries
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "React", icon: <SiReact className="text-cyan-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
            { name: "Express", icon: <SiExpress className="text-gray-300" /> },
          ].map((skill, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 80}
              className="flex items-center gap-3 bg-slate-800/70
                         rounded-xl px-4 py-3
                         hover:bg-slate-700 transition-colors"
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="text-sm text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* OTHERS */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-gradient-to-b from-slate-800 to-slate-900
                   rounded-2xl p-8 border border-slate-700
                   hover:border-cyan-400
                   hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
                   transition-all duration-300"
      >
        <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
          <span className="w-1 h-6 bg-pink-400 rounded-full"></span>
          Others
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
            { name: "Git", icon: <SiGit className="text-orange-500" /> },
            { name: "Linux", icon: <SiLinux className="text-yellow-400" /> },
          ].map((skill, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 80}
              className="flex items-center gap-3 bg-slate-800/70
                         rounded-xl px-4 py-3
                         hover:bg-slate-700 transition-colors"
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="text-sm text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>




      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            data-aos="fade-up"
            className="text-4xl font-semibold mb-12 text-cyan-400"
          >
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "travel listing website",
                desc: "A responsive travel listing website that allows users to explore destinations and travel experiences through a clean, intuitive, and user-friendly interface.using ejs templating, Node.js, and MongoDB.",
                image: "/images/project1.png",
              },
              {
                title: "ServeNow Platform",
                desc: "ServeNow is a web-based task and service platform that connects users with trusted service providers, enabling easy service discovery, transparent profiles, and quick, reliable bookings through a secure and user-friendly system.",
                image: "/images/project2.png",
              },
            ].map((proj, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="bg-slate-700 rounded-2xl overflow-hidden hover:scale-105 transition-transform shadow-lg"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-slate-300">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
    <section
  id="contact"
  className="relative py-24 px-6 overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] 
                    bg-purple-500/20 rounded-full blur-[140px]" />
    <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] 
                    bg-cyan-500/20 rounded-full blur-[140px]" />
  </div>

  {/* Card */}
  <div
    data-aos="fade-up"
    className="mx-auto max-w-6xl rounded-3xl
               bg-gradient-to-br from-slate-900/80 to-slate-800/60
               backdrop-blur-xl border border-slate-700
               px-10 py-12
               flex flex-col md:flex-row items-center justify-between
               gap-10 shadow-[0_0_60px_rgba(168,85,247,0.25)]"
  >

    {/* LEFT */}
    <div className="text-center md:text-left">
      <h2 className="text-4xl font-semibold text-purple-400 mb-2">
        Let’s Connect
      </h2>
      <p className="text-slate-400 text-lg">
        Have a project or idea? Let’s connect and bring it to life!
      </p>
    </div>

    {/* RIGHT */}
    <div className="text-center md:text-left">
      <p className="text-white text-xl font-medium mb-1">
        Email
      </p>
      <a
        href="mailto:neerajsb390@gmail.com"
        className="text-slate-300 hover:text-cyan-400 transition-colors text-lg"
      >
        neerajsb390@gmail.com
      </a>
    </div>

  </div>
</section>



      {/* FLOATING BOTTOM NAVBAR */}
      <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-slate-800/20 backdrop-blur-md border border-slate-700 rounded-4xl shadow-lg px-5 py-3 z-50 w-[90%] sm:w-[70%] md:w-[50%] max-w-[90%]">
        <div className="flex justify-around items-center">
          {[
            { id: "home", icon: <Home />, label: "Home" },
            { id: "about", icon: <User />, label: "About" },
            { id: "skills", icon: <Code2 />, label: "Skills" },
            { id: "projects", icon: <FolderOpen />, label: "Work" },
            { id: "contact", icon: <Mail />, label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {item.icon}
              <span className="text-[10px] mt-1">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </main>
  );
}
