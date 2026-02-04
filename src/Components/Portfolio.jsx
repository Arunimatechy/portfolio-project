import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaPython,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaDatabase,
  FaKey,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostman,
  SiPostgresql,
  SiRedux,
} from "react-icons/si";

import Currency from "../Images/Currency.png";
import Weather from "../Images/Weather.png";
import Quiz from "../Images/Quiz.png";
import Ecommerce from "../Images/Ecommerce.png"
import Apiecommerce from "../Images/Apiecommerce.png";

import Netflix from "../Images/Netflix.png"
const projects = [
  {
    title: "Real-Time Currency Converter",
    image: Currency,
    description:
      "React real-time currency converter with auto-conversion, currency swap, SVG flags, and persistent state via localStorage. Clean UI and deployed on Vercel.",
    tech: ["React.js", "Axios", "Tailwind CSS", "REST API", "Vercel"],
    github: "https://github.com/Arunimatechy/currency_converter",
    live: "https://currency-converter-chi-ashen.vercel.app/",
  },
  {
    title: "🌤 Weather App",
    image: Weather,
    description:
      "React real-time weather app with city search, current temperature, wind, sunrise & sunset, 24-hour forecast, and interactive geo-map. Responsive, modern UI.",
    tech: ["React.js", "Axios", "API(Open-Meteo)", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Arunimatechy/weatherreact",
    live: "https://weatherreact-flame.vercel.app/",
  },
  {
    title: "JavaScript Quiz",
    image: Quiz,
    description:
      "An interactive multiple-choice quiz built with HTML, CSS, and JavaScript. Users can navigate questions, get instant correct/wrong feedback, and see their final score.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arunimatechy/QUIZAPP",
    live: "https://arunimatechy.github.io/QUIZAPP/",
  },
   {
    title: "E-Commerce Web Application",
    image: Ecommerce,
    description:"Responsive e-commerce app with dynamic product listings, cart & order management, CRUD operations, role-based access, and state management via Context API with localStorage persistence.",
      
    tech: ["React.js", "Context API", "localStorage", "React Router", "Tailwind CSS", "RESTful APIs", "React Hot Toast"],

    github: "https://github.com/Arunimatechy/fakestoreapiredux",
    live: "https://reactcoffeeproject.vercel.app/",
  },
  {
  title: "API-Based E-Commerce Web Application",
  image: Apiecommerce,
  description: "Built a responsive React.js e-commerce app with Redux Toolkit, integrating REST APIs, user authentication, cart management, checkout workflow, and state persistence.",
  tech: ["React.js", "Redux Toolkit", "Axios", "Tailwind CSS", "React Router"],
  github: "https://github.com/Arunimatechy/REACTCOFFEEPROJECT",
  live: "https://fakestoreapiredux.vercel.app/",
},
{
  title: "Netflix-Inspired Streaming Platform",
  image:Netflix,
  description: "Developed a full-featured e-commerce frontend with React.js and Redux Toolkit, supporting user authentication, dynamic cart operations, and a seamless checkout experience. Integrated RESTful APIs using Axios and ensured responsive, modern UI with Tailwind CSS.",
  tech: ["React.js", "Redux Toolkit", "React Router", "Tailwind CSS", "JavaScript (ES6+)","Framer Motion"],
  github: "https://github.com/Arunimatechy/netflix-project",
  live: "https://netflix-project-ashy.vercel.app/",
},


];

export default function Portfolio() {
  return (
    <div className="bg-[#020617] text-white scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-[#020617]/60 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-pink-500">Arunima.dev</h1>
          <div className="hidden md:flex gap-10 text-gray-300">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative hover:text-pink-400 transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-pink-500 hover:after:w-full after:transition-all"
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================= HOME ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-8 overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 px-4 py-1 text-sm bg-pink-600/20 rounded-full">
              Available for work
            </span>

            <h1 className="text-6xl font-extrabold leading-tight">
              Hi, I’m <span className="text-pink-500">Arunima</span>
            </h1>

            <h2 className="text-3xl mt-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Junior Software Developer
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              I build scalable, user-friendly web applications using React,
              Python, Django, and Node.js with clean and maintainable code.
            </p>

            <div className="flex gap-4 mt-8">
              <a href="#contact">
                <button className="bg-pink-600 px-6 py-3 rounded-xl hover:bg-pink-700 transition">
                  Hire Me
                </button>
              </a>
              <a href="/Arunima_Resume.pdf" download>
                <button className="border border-pink-500 px-6 py-3 rounded-xl hover:bg-pink-600 transition">
                  Download CV
                </button>
              </a>
            </div>

            <div className="flex gap-6 mt-10 text-2xl">
              <a href="https://github.com/Arunimatechy" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/arunimaSaru" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-pink-400 mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Python Full Stack Developer passionate about building scalable and
          secure web applications using React.js, Python, and Django. My experience
          includes developing RESTful APIs, implementing CRUD operations, integrating
          JWT authentication, and designing responsive user interfaces. I thrive in
          Agile environments and follow best practices in version control using Git to
          deliver reliable, maintainable software solutions.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
     <section id="skills" className="py-24 bg-gradient-to-br from-[#1e1b4b] to-[#020617]">
  <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">Skills</h2>

  <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
    {[
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiRedux />, name: "Redux Toolkit" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <FaDatabase />, name: "RESTful APIs" },
      { icon: <FaKey />, name: "JWT Authentication" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaBootstrap />, name: "Bootstrap" },
    ].map((skill) => (
      <motion.div
        key={skill.name}
        whileHover={{ scale: 1.12, rotate: 2 }}
        className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl flex flex-col items-center border border-white/10 shadow-xl hover:shadow-pink-500/30 transition"
      >
        <div className="text-4xl text-pink-400 mb-4">{skill.icon}</div>
        <p className="text-lg font-semibold">{skill.name}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24">
        <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="group bg-[#020617] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-contain bg-black/5 group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a href={project.github} target="_blank" className="px-4 py-2 bg-pink-600 rounded-lg">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" className="px-4 py-2 border border-pink-400 rounded-lg">
                    Live
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-400">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-sm bg-pink-600/20 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT / HIRE ME ================= */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[#1a0010] via-[#2a0017] to-[#0b0f19]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Info */}
          <div>
            <h2 className="text-4xl font-bold text-pink-400 mb-4">Let’s Build Something Together</h2>
            <p className="text-gray-300 mb-2">
              I’m a passionate Junior Developer, open to roles and freelance opportunities.
            </p>
            <p className="text-gray-300 mb-6">
              I build web apps with React, Python, Django, and Node.js. Let’s create something amazing!
            </p>

            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-pink-400" />
              <a href="mailto:arunima@example.com" className="hover:text-pink-400 transition">arunima@example.com</a>
            </p>

            <div className="flex gap-6 text-2xl mt-6">
              <a href="https://github.com/Arunimatechy" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/arunimaSaru" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaLinkedin /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaInstagram /></a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
            <form className="space-y-4">
              <input
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
                placeholder="Your Name"
              />
              <input
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
                placeholder="Your Email"
              />
              <textarea
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
                rows="5"
                placeholder="Your Message"
              />
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

