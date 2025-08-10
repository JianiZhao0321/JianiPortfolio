import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Star,
  Sparkles,
  Code,
  Palette,
  Coffee,
  Music,
  Menu,
  X,
} from "lucide-react";

const RESUME_NAME = "Jiani_Zhao_CV.pdf";

const projects = [
  {
    title: "Impact Evaluation of UN Peacebuilding Fund in Darfur",
    linkLabel: "GitHub",
    linkHref: "https://github.com/your-repo", // <- replace with actual link
    tech: "R, Stata, Causal Inference, Mixed Methods",
    shortDescription:
      "Led a mixed-methods impact evaluation of a UN peacebuilding intervention in Darfur, analyzing 3,500+ survey responses to measure effects on education, disputes, and governance.",
    bullets: [
      <>
        Designed and executed a mixed-methods impact evaluation of a UN
        PBF-funded peacebuilding intervention in East Darfur, using{" "}
        <span className="font-semibold">difference-in-differences</span> and{" "}
        <span className="font-semibold">ANCOVA</span> with clustered standard
        errors.
      </>,
      <>
        Processed and analyzed household survey data from 3,538 respondents
        across 20 villages, leveraging{" "}
        <span className="font-semibold">pseudo-panel cohorts</span>,{" "}
        <span className="font-semibold">gender-disaggregated models</span>, and{" "}
        <span className="font-semibold">Benjamini–Hochberg correction</span> to
        ensure robustness.
      </>,
      <>
        Estimated an <span className="font-semibold">11pp increase</span> in
        school enrollment, a decline in land disputes (12% → 5%), and improved
        satisfaction with sanitation and governance services.
      </>,
      <>
        Applied <span className="font-semibold">causal forest models</span> to
        uncover subgroup-specific effects by gender and household
        characteristics; contextualized findings with qualitative interviews.
      </>,
    ],
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    { name: "R", level: 90, color: "bg-pink-400" },
    { name: "Stata", level: 85, color: "bg-rose-400" },
    { name: "Python", level: 80, color: "bg-blue-400" },
    { name: "SQL", level: 80, color: "bg-indigo-400" },
    { name: "Data Visualization", level: 90, color: "bg-green-400" },

    // { name: "Node.js", level: 70, color: "bg-indigo-400" },
  ];

  const timeline = [
    {
      year: "2023",
      title: "Data Analyst",
      company: "Buisness Data of Georgetown (BDOG)",
      description: "Built responsive websites and mobile-first applications",
    },
    {
      year: "2022",
      title: "McCourt MPP Student",
      company: "Georgetown University",
      description: "Started my journey in public policy and data analysis",
    },
    {
      year: "2021",
      title: "Computer Science Graduate",
      company: "Nanjing Tech University",
      description: "Learned new prespectives and an exchange program in Japan",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br"
      style={{ fontFamily: '"Inter", "Poppins", sans-serif' }}
    >
      {/* Floating Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large gradient circle - top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-radial from-pink-200/20 via-purple-100/10 to-transparent rounded-full blur-3xl"></div>

        {/* Medium gradient circle - bottom left */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-radial from-indigo-200/15 via-blue-100/8 to-transparent rounded-full blur-2xl"></div>

        {/* Small gradient circle - middle right */}
        <div className="absolute top-1/3 -right-20 w-64 h-64 bg-gradient-radial from-purple-200/12 via-pink-100/6 to-transparent rounded-full blur-xl"></div>

        {/* Small gradient circle - top left */}
        <div className="absolute top-20 -left-16 w-48 h-48 bg-gradient-radial from-rose-200/10 via-pink-50/5 to-transparent rounded-full blur-lg"></div>

        {/* Medium gradient circle - bottom right */}
        <div className="absolute bottom-1/4 -right-16 w-72 h-72 bg-gradient-radial from-indigo-150/8 via-purple-50/4 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        {/* Desktop Navigation - Pill Design */}
        <div className="hidden md:block bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-3 py-2 shadow-lg">
          <div className="flex items-center gap-3">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                  activeSection === item.toLowerCase()
                    ? "text-white bg-gradient-to-r from-pink-500 to-purple-600"
                    : "text-gray-700 hover:text-pink-500 hover:bg-white/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Hamburger Menu */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-3 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </motion.button>

          {/* Mobile Menu Popout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={
              mobileMenuOpen
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.8, y: -10 }
            }
            transition={{ duration: 0.2 }}
            className={`absolute top-16 left-1/2 transform -translate-x-1/2 ${
              mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-xl min-w-48">
              <div className="flex flex-col gap-2">
                {["Home", "About", "Skills", "Timeline", "Contact"].map(
                  (item) => (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`px-4 py-3 text-left font-medium tracking-wide transition-all duration-300 rounded-xl ${
                        activeSection === item.toLowerCase()
                          ? "text-white bg-gradient-to-r from-pink-500 to-purple-600"
                          : "text-gray-700 hover:text-pink-500 hover:bg-pink-50"
                      }`}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item}
                    </motion.button>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 pb-16 px-6">
        <div className="w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Image Container */}
            <div className="relative w-80 h-80 mx-auto mb-8">
              <img
                src="/heroImage.png"
                alt="Jiani's portrait"
                className="w-full h-full object-cover rounded-full shadow-2xl transition-transform duration-300 hover:scale-105"
              />
              {/* Sparkles overlay positioned at bottom left */}
              <div className="absolute bottom-0 left-0 w-22 h-22 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-13 h-13 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Jiani
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I’m a Master’s student in Public Policy, passionate about using
              data, design, and collaboration to solve real-world challenges. ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`/${RESUME_NAME}`}
                onClick={() => window.open(`/${RESUME_NAME}`, "_blank")}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>
              {/* 
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button> */}
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/JianiZhao0321",
                  color: "hover:text-gray-800",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/jiani-zhao-380645306/",
                  color: "hover:text-blue-600",
                },
                {
                  Icon: Mail,
                  href: "mailto:jz951@georgetown.edu",
                  color: "hover:text-red-500",
                },
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-600 ${color} transition-all shadow-md hover:shadow-lg`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white/50">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I’m a passionate data analyst and public policy student who
                  uses data to drive meaningful decisions and impact. Outside of
                  work, you’ll find me playing piano, crafting the perfect
                  matcha latte, or enjoying a quiet walk.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I love bringing together research, technology, and people to
                  move us toward a better future 😊
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    Icon: Code,
                    label: "Data Analysis",
                    color: "bg-blue-100 text-blue-600",
                  },
                  {
                    Icon: Palette,
                    label: "Ideas",
                    color: "bg-pink-100 text-pink-600",
                  },
                  {
                    Icon: Coffee,
                    label: "Coffee Lover",
                    color: "bg-amber-100 text-amber-600",
                  },
                  {
                    Icon: Music,
                    label: "Piano Enthusiast",
                    color: "bg-purple-100 text-purple-600",
                  },
                ].map(({ Icon, label, color }, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-2xl text-center ${color}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium">{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Skills Image - Left 1/3 on large screens */}
            <div className="lg:col-span-2">
              <div className="relative ml-15">
                <img
                  src="skillsImage.png"
                  alt="Skills"
                  className="w-full h-auto rounded-2xl"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextElementSibling.style.display = "flex";
                  }}
                />
                {/* Fallback gradient if image doesn't load */}
                <div className="hidden w-full h-64 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl shadow-lg items-center justify-center">
                  <Code className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>

            {/* Skills Bars - Right 2/3 on large screens */}
            <div className="lg:col-span-3 space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg transform transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {skill.name}
                    </h3>
                    <span className="text-gray-600 font-medium text-sm sm:text-base">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{
                        width: `${skill.level}%`,
                        animation: `slideIn 1s ease-out ${index * 0.2}s both`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 bg-white/50">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
              >
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    {p.title} <span className="text-gray-400">|</span>{" "}
                    <a
                      href={p.linkHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 underline decoration-pink-400/60 underline-offset-4"
                    >
                      <Github className="w-5 h-5" />
                      {p.linkLabel}
                    </a>
                  </h3>
                </div>

                {/* Tech line */}
                <p className="italic text-lg text-gray-700 mb-4">{p.tech}</p>

                {/* Bullets */}
                <ul className="list-disc pl-6 space-y-3 text-gray-800 leading-relaxed">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-pink-400" /> and lots of
            coffee ☕
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
