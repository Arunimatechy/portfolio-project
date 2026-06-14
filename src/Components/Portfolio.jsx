


import React, { useState } from "react";
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
  FaBars,
  FaTimes,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostman,
  SiPostgresql,
  SiRedux,
  SiMongodb,
} from "react-icons/si";

import Currency from "../Images/Currency.png";
import Weather from "../Images/Weather.png";
import Quiz from "../Images/Quiz.png";
import Ecommerce from "../Images/Ecommerce.png";
import Apiecommerce from "../Images/Apiecommerce.png";
import OrderFlowImage from "../Images/OrderFlowImage.png";
import Netflix from "../Images/Netflix.png";
import Bookstore from "../Images/Bookstore.png";
import AISocialAnalyticsImage from "../Images/AISocialAnalyticsImage.png";
import Ecommerce1 from "../Images/Ecommerce1.png";
import NexaAIWorkspace from "../Images/NexaAIWorkspace.png";

const projects = [
  {
    title: "Multi-Vendor Ecommerce Platform",
    image: Ecommerce1,
    description:
      "Developed a full-stack multi-vendor ecommerce marketplace with vendor dashboards, product management, cart, secure authentication, order handling, and responsive UI.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Django REST Framework",
      "JWT Authentication",
      "Tailwind CSS",
      "Axios",
      "Vercel",
    ],
    github: "https://github.com/Arunimatechy/multi-vendor-ecommerce",
    live: "https://multi-vendor-ecommerce-hazel.vercel.app/",
  },

  {
  title: "AI Social Analytics Platform",
  image: AISocialAnalyticsImage,
  description:
    "Built a SaaS-style social media analytics platform using React and Django with AI-driven sentiment analysis, emotion detection, historical analytics dashboards, JWT authentication, and REST APIs for real-time insights.",
  tech: [
    "React.js",
    "Redux Toolkit",
    "Django",
    "Django REST Framework",
    "Python",
    "PostgreSQL",
    "JWT Authentication",
    "Chart.js",
    "Machine Learning",
    "Vercel"
  ],
  github: "https://github.com/Arunimatechy/ai-social-analytics",
  live: "https://ai-social-analytics-wine.vercel.app/",
}
  {
    title: "Nexa AI Workspace",
    image: NexaAIWorkspace,
    description:
      "Built a modern AI-powered productivity dashboard using React.js, Redux Toolkit, Tailwind CSS, and OpenRouter AI.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "OpenRouter API",
      "React Router",
      "Framer Motion",
      "React Markdown",
      "Vercel",
    ],
    github: "https://github.com/Arunimatechy/nexa-ai-workspace",
    live: "https://nexa-ai-workspace.vercel.app  ",
  },

  

  {
    title: "OrderFlow Dashboard",
    image: OrderFlowImage,
    description:
      "Built a React + Redux Toolkit dashboard for e-commerce order management with charts and CRUD operations.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Recharts",
      "JavaScript",
      "Vercel",
    ],
    github: "https://github.com/Arunimatechy/OrderFlowDashboard",
    live: "https://order-flow-dashboard-mauve.vercel.app/",
  },

  {
    title: "Full-Stack Bookstore Web Application",
    image: Bookstore,
    description:
      "Built a full-stack bookstore web application using React.js and Django REST Framework.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Django REST Framework",
      "JWT Authentication",
      "Tailwind CSS",
      "Vercel",
    ],
    github: "https://github.com/Arunimatechy/mainbookstoreproject",
    live:
      "https://mainbookstoreproject-pcqq-jvais7sij-arunimas-projects-140d0a2a.vercel.app/",
  },

  {
    title: "Netflix-Inspired Streaming Platform",
    image: Netflix,
    description:
      "Developed a Netflix-inspired frontend using React.js and Redux Toolkit.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "JavaScript",
      "Framer Motion",
    ],
    github: "https://github.com/Arunimatechy/netflix-project",
    live: "https://netflix-project-ashy.vercel.app/",
  },

  {
    title: "Coffee Store Web App! ☕🛒",
    image: Ecommerce,
    description:
      "Built a responsive e-commerce frontend with dynamic product listings and cart management.",
    tech: [
      "React.js",
      "Context API",
      "localStorage",
      "React Router",
      "Tailwind CSS",
    ],
   github: "https://github.com/Arunimatechy/REACTCOFFEEPROJECT",
    live: "https://reactcoffeeproject.vercel.app/",
  },

  {
    title: "FakeStore E-Commerce Web App! 🛒💻",
    image: Apiecommerce,
    description:
      "Developed a full-featured React + Redux Toolkit e-commerce app integrating REST APIs.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
      "React Router",
    ],
     github: "https://github.com/Arunimatechy/fakestoreapiredux",
    live: "https://fakestoreapiredux.vercel.app/",
    
  },

  {
    title: "Currency Converter",
    image: Currency,
    description:
      "Developed a React-based real-time currency converter with automatic conversion.",
    tech: ["React.js", "Axios", "Tailwind CSS", "REST API", "Vercel"],
    github: "https://github.com/Arunimatechy/currency_converter",
    live: "https://currency-converter-chi-ashen.vercel.app/",
  },

  {
    title: "Weather App",
    image: Weather,
    description:
      "Built a responsive React weather app with forecast visualization.",
    tech: ["React.js", "Axios", "Open-Meteo API", "Tailwind CSS"],
    github: "https://github.com/Arunimatechy/weatherreact",
    live: "https://weatherreact-flame.vercel.app/",
  },

  {
    title: "JavaScript Quiz",
    image: Quiz,
    description:
      "Designed an interactive multiple-choice quiz using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Arunimatechy/QUIZAPP",
    live: "https://arunimatechy.github.io/QUIZAPP/",
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#020617] text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-pink-500">
            Arunima.S
          </h1>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-300"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-[#020617]/95 md:bg-transparent p-6 md:p-0`}
          >
            {["home", "about", "skills", "projects", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-pink-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.toUpperCase()}
                </a>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 px-4 py-1 text-sm bg-pink-600/20 rounded-full">
              Available for Work
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m <span className="text-pink-500">Arunima</span>
            </h1>

            <h2 className="text-3xl mt-4 text-pink-400">
              Full Stack Developer
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Full-Stack Developer specializing in React.js, Django REST
              Framework, and modern web applications. Passionate about building
              scalable and responsive digital experiences.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="#contact">
                <button className="bg-pink-600 px-6 py-3 rounded-xl hover:bg-pink-700 transition cursor-pointer">
                  Hire Me
                </button>
              </a>

              <a
                href="/Arunima_Resume.pdf"
                download
                target="_blank"
                rel="noreferrer"
              >
                <button className="border border-pink-500 px-6 py-3 rounded-xl hover:bg-pink-600 transition cursor-pointer">
                  Download CV
                </button>
              </a>
            </div>

            <div className="flex gap-6 mt-10 text-2xl">
              <a
                href="https://github.com/Arunimatechy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/arunimaSaru"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-pink-400 mb-6">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I am a Python Full Stack Developer passionate about building scalable
          and secure web applications using React.js, Python, Django, and
          Node.js. I have experience developing REST APIs, implementing CRUD
          operations, JWT authentication, and responsive UI design.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-[#1e1b4b] to-[#020617]"
      >
        <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
          {[
            { icon: <FaHtml5 />, name: "HTML5" },
            { icon: <FaCss3Alt />, name: "CSS3" },
            { icon: <FaJs />, name: "JavaScript" },
            { icon: <FaReact />, name: "React.js" },
            { icon: <SiRedux />, name: "Redux Toolkit" },
            { icon: <FaPython />, name: "Python" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiPostgresql />, name: "PostgreSQL" },
            { icon: <FaDatabase />, name: "REST APIs" },
            { icon: <FaKey />, name: "JWT Authentication" },
            { icon: <SiPostman />, name: "Postman" },
            { icon: <FaGitAlt />, name: "Git" },
            { icon: <FaGithub />, name: "GitHub" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <FaBootstrap />, name: "Bootstrap" },
          ].map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.08 }}
              className="bg-white/10 p-8 rounded-2xl flex flex-col items-center border border-white/10"
            >
              <div className="text-4xl text-pink-400 mb-4">
                {skill.icon}
              </div>

              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="bg-[#020617] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-contain bg-black/10"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-pink-600/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-pink-400 rounded-lg hover:bg-pink-500 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-[#1a0010] via-[#2a0017] to-[#0b0f19]"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-pink-400 mb-4">
              Let’s Build Something Together
            </h2>

            <p className="text-gray-300 mb-6">
              I’m open to internships, freelance work, and junior developer
              opportunities.
            </p>

            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-pink-400" />

              <a
                href="mailto:sarunima225@gmail.com"
                className="hover:text-pink-400 transition"
              >
                sarunima225@gmail.com
              </a>
            </p>

            <div className="flex gap-6 text-2xl mt-6">
              <a
                href="https://github.com/Arunimatechy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/arunimaSaru"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 py-3 rounded-xl font-semibold hover:scale-105 transition cursor-pointer"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}