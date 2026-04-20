

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
import Ecommerce from "../Images/Ecommerce.png";
import Apiecommerce from "../Images/Apiecommerce.png";
import OrderFlowImage from "../Images/OrderFlowImage.png";
import Netflix from "../Images/Netflix.png";
import Bookstore from "../Images/Bookstore.png";
import SentimentAnalysis from "../Images/SentimentAnalysis.png";
const projects = [


   {
    title: "OrderFlow Dashboard",
    image: OrderFlowImage,
    description:
      "Built a React + Redux Toolkit dashboard for e-commerce order management. Features async data fetching, CRUD operations, status toggling, and monthly revenue charts with Recharts. Live demo hosted on Vercel.",
    tech: ["React.js", "Redux Toolkit", "Recharts", "JavaScript", "Vercel"],
    github: "https://github.com/Arunimatechy/OrderFlowDashboard",
    live: "https://order-flow-dashboard-mauve.vercel.app/",
  },
{
  title: "AI-Powered Sentiment Analysis App",
  image: SentimentAnalysis,
  description:
    "Built a Django-based AI sentiment analysis web application using Hugging Face models and Django REST Framework. Features include real-time text sentiment prediction, REST API integration, responsive UI, and live deployment on Render.",
  tech: [
    "Django",
    "Django REST Framework",
    "Hugging Face",
    "Python",
    "REST API",
    "HTML",
    "CSS",
    "Render",
  ],
  github: "https://github.com/Arunimatechy/sentiment_analysis",
  live: "https://sentiment-analysis-ve9z.onrender.com/",
},
  {
  title: " Full-Stack Bookstore Web Application",
  image: Bookstore,
  description:
    
"Built a full-stack bookstore web application using React.js and Django REST Framework. Features include JWT authentication, CRUD operations for books, responsive UI, and seamless REST API integration.",
  tech: [
    "React.js",
    "Redux Toolkit",
    "Django REST Framework",
    "JWT Authentication",
    "Tailwind CSS",
    "Vercel",
  ],
  github: "https://github.com/Arunimatechy/mainbookstoreproject",
  live: "https://mainbookstoreproject-pcqq-jvais7sij-arunimas-projects-140d0a2a.vercel.app/",
},
{
    title: "E-Commerce Web App",
    image: Ecommerce,
    description:
      "Built a responsive e-commerce frontend with dynamic product listings, cart management, CRUD operations, and role-based access using Context API. Implemented localStorage persistence for state and smooth user experience.",
    tech: [
      "React.js",
      "Context API",
      "localStorage",
      "React Router",
      "Tailwind CSS",
      "RESTful APIs",
      "React Hot Toast",
    ],
    github: "https://github.com/Arunimatechy/fakestoreapiredux",
    live: "https://reactcoffeeproject.vercel.app/",
  },
  {
    title: "Netflix-Inspired Streaming Platform",
    image: Netflix,
    description:
      "Developed a Netflix-inspired frontend using React.js and Redux Toolkit. Features user authentication, dynamic content display, responsive UI, and integrated RESTful APIs using Axios. Deployed live on Vercel with Framer Motion animations.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Framer Motion",
    ],
    github: "https://github.com/Arunimatechy/netflix-project",
    live: "https://netflix-project-ashy.vercel.app/",
  },
  {
    title: "Coffee Store Web App",
    image: Apiecommerce,
    description:
      "Developed a full-featured React + Redux Toolkit e-commerce app integrating REST APIs. Implemented user authentication, cart management, checkout workflow, and persistent state for seamless user experience.",
    tech: ["React.js", "Redux Toolkit", "Axios", "Tailwind CSS", "React Router"],
    github: "https://github.com/Arunimatechy/REACTCOFFEEPROJECT",
    live: "https://fakestoreapiredux.vercel.app/",
  },
  {
    title: " Currency Converter",
    image: Currency,
    description:
      "Developed a React-based real-time currency converter with automatic conversion, currency swap, and SVG flags. Implemented persistent state with localStorage and a clean responsive UI. Deployed live on Vercel.",
    tech: ["React.js", "Axios", "Tailwind CSS", "REST API", "Vercel"],
    github: "https://github.com/Arunimatechy/currency_converter",
    live: "https://currency-converter-chi-ashen.vercel.app/",
  },
  {
    title: "Weather App",
    image: Weather,
    description:
      "Built a responsive React weather app with city search, current temperature, wind speed, sunrise & sunset times, and 24-hour forecast visualization. Integrated Open-Meteo API and deployed live on Vercel.",
    tech: ["React.js", "Axios", "API(Open-Meteo)", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Arunimatechy/weatherreact",
    live: "https://weatherreact-flame.vercel.app/",
  },
  {
    title: "JavaScript Quiz",
    image: Quiz,
    description:
      "Designed an interactive multiple-choice quiz using HTML, CSS, and JavaScript. Features instant feedback for answers, score tracking, and navigation between questions. Hosted on GitHub Pages.",
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
          <h1 className="text-2xl font-extrabold text-pink-500">Arunima.S</h1>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
              className="text-2xl text-gray-300 focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-10 text-gray-300 absolute md:static top-full left-0 w-full md:w-auto bg-[#020617]/90 backdrop-blur-md md:bg-transparent p-6 md:p-0`}
          >
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative hover:text-pink-400 transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-pink-500 hover:after:w-full after:transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Home */}
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

            <div className="flex gap-4 mt-8 flex-wrap">
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
              <a
                href="https://github.com/Arunimatechy"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:text-pink-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/arunimaSaru"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
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

      {/* Skills */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-[#1e1b4b] to-[#020617]"
      >
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

      {/* Projects */}
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
                  alt={`${project.title} Screenshot`}
                  loading="lazy"
                  className="h-60 w-full object-contain bg-black/5 group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-pink-600 rounded-lg"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 border border-pink-400 rounded-lg"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-pink-400">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-sm bg-pink-600/20 rounded-full">
                      {t}
                    </span>
                  ))}
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
            <h2 className="text-4xl font-bold text-pink-400 mb-4">Let’s Build Something Together</h2>
            <p className="text-gray-300 mb-2">
              I’m a passionate Junior Developer, open to roles and freelance opportunities.
            </p>
            <p className="text-gray-300 mb-6">
              I build web apps with React, Python, Django, and Node.js. Let’s create something amazing!
            </p>

            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-pink-400" />
              <a
                href="mailto:arunima@example.com"
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
                aria-label="GitHub"
                className="hover:text-pink-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/arunimaSaru"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-pink-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
            <form className="space-y-4">
              <input
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
                placeholder="Your Name"
                aria-label="Your Name"
              />
              <input
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
                placeholder="Your Email"
                aria-label="Your Email"
              />
              <textarea
                className="w-full p-4 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:border-pink-500"
                rows="5"
                placeholder="Your Message"
                aria-label="Your Message"
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