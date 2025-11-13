import React from 'react'
import { FaStar } from 'react-icons/fa';
import "./Home.css"
import { RiSparkling2Line } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Skills from '../../component/skills/Skills';
import { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const splitText = (text) => {
  return text.split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={fadeIn}
      style={{ display: "inline-block", marginRight: "5px" }}
    >
      {word}
    </motion.span>
  ));
};


function Home() {

  const projects = [
    {
      title: "Portfolio Website",
      category: "Frontend Project",
      description:
        "A personal responsive portfolio built using React, custom CSS, and Framer Motion to showcase my work and skills.",
      image: "Screenshot (10).png",
      link: "#",
    },
    {
      title: "Full Stack E-Commerce Platform",
      category: "Full Stack Project",
      description:
        "A MERN stack e-commerce interface built to practice responsive layouts, state management, and API integration.",
      image: "Screenshot (11).png",
      link: "https://all-birds-fronted.vercel.app/",
    },
    {
      title: "Creative Landing Page",
      category: "UI/UX Concept",
      description:
        "A visually appealing landing page built with smooth animations and clean modern design.",
      image: "https://via.placeholder.com/600x400?text=Landing+Page",
      link: "#",
    },
  ];

  const reviewsData = [
    { id: 1, text: "Navigating the portfolio feels natural. Everything aligned and easy to use." },
    { id: 2, text: "The presentation captured the vision, turning it into a polished showcase." },
    { id: 3, text: "The experience feels smooth, fast, exactly how a modern portfolio should be." },
    { id: 4, text: "Portfolio navigation is intuitive. Everything aligned and highly functional." },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqsData = [
    {
      question: "What can you do for me?",
      answer: "I create custom web applications tailored to your needs, from responsive frontends to robust backend systems. Whether you need an e-commerce platform, real-time chat app, or a complete business solution, I can build it for you."
    },
    {
      question: "Do you provide responsive design?",
      answer: "Yes! All my projects are fully responsive and optimized for all devices - mobile, tablet, and desktop. I follow mobile-first design principles to ensure the best user experience across all screen sizes."
    },
    {
      question: "What is the typical project cost?",
      answer: "Project costs vary based on complexity and requirements. Simple websites start from ₹10,000, while complex applications can range from ₹30,000-₹1,00,000+. Contact me for a detailed quote based on your specific needs."
    },
    {
      question: "How long does a project take?",
      answer: "Timeline depends on project scope. A simple website takes 2-4 weeks, medium complexity apps take 4-8 weeks, and complex applications take 2-3 months. I'll provide a detailed timeline after understanding your requirements."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No hidden costs! I provide transparent pricing with detailed breakdown before starting any project. The quote includes development, testing, and deployment. Additional costs may apply for custom features or third-party services."
    }
  ];

  return (
    <>
      <div className="home-container" id="home">
        <div className="bg-decoration"></div>

        <motion.div
          className="header"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="name" variants={itemVariants}>
            <h1>AZAZ KHAN</h1>
          </motion.div>

          <div className="highlight-container">
            <div className="highlight-wrapper">
              <ul className="highlight">
                <li>#Database Management</li>
                <li>#Server-Side Logic & Routing</li>
                <li>#Error Handling</li>
                <li>#Security & Data Validation</li>
                <li>#Deployment & Environment Setup</li>
                <li>#Database Management</li>
                <li>#Server-Side Logic & Routing</li>
                <li>#Error Handling</li>
                <li>#Security & Data Validation</li>
                <li>#Deployment & Environment Setup</li>
              </ul>
            </div>
          </div>

          <motion.div className="content-section" variants={containerVariants}>
            <motion.div
              className="hero-image"
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
              <img src="port1.png" alt="Azaz Khan Profile" />
            </motion.div>
            <motion.div className="hero-content" variants={containerVariants}>
              <motion.p
                className="hero-text"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {splitText("Welcome to my portfolio! I'm Azaz Khan, a full-stack developer with expertise in building robust server-side applications. I specialize in creating efficient, scalable solutions that deliver exceptional performance and security.")}
              </motion.p>
              <motion.button
                className="btn"
                onClick={() => window.open(
                  "https://wa.me/+916378192135?text=Hello%20Azaz,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20starting%20a%20project.",
                  "_blank"
                )}
                variants={fadeIn}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 215, 0, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project Now <MdArrowOutward style={{ fontSize: "25px" }} />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.section
        className="reviews-section"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="reviews-container">
          <div className="reviews-track">
            {[...reviewsData, ...reviewsData].map((review, index) => (
              <motion.div
                className="review-card"
                key={index}
                whileHover={{ scale: 1.05, rotateZ: 0.5 }}
              >
                <div className="rating">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="star">★</span>
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className='projects-section'
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="recent-projects">
          <motion.h3 variants={itemVariants}><RiSparkling2Line className='spark' /> Recent Projects</motion.h3>
          <motion.h4 variants={itemVariants}>Explore more work <MdArrowOutward style={{ fontSize: "25px" }} /></motion.h4>
        </div>
        <motion.div
          className="projects-container"
          variants={fadeIn}
        >
          <motion.img
            src="laptop-device.jpg"
            className='laptop'
            alt="Featured Project Preview"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.5 }}
          />
          <motion.button
            className='view-project'
            onClick={() => window.open("https://all-birds-fronted.vercel.app")}
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            View Project <MdArrowOutward style={{ fontSize: "25px" }} />
          </motion.button>
        </motion.div>
      </motion.section>

      <motion.div
        className="resume-section"
        id="about"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="detail-resume" variants={containerVariants}>
          <motion.h3 variants={itemVariants}><RiSparkling2Line className='spark' /> About Me</motion.h3>
          <motion.h1 variants={itemVariants}>Passionate & Dedicated <br /> Full-Stack Developer</motion.h1>
          <motion.p variants={itemVariants}>I am a dedicated full-stack web developer with a deep interest in creating functional and visually appealing web applications. I enjoy working with technologies like **React.js, Node.js, Express.js, and MongoDB** to turn ideas into real, working products. As a fresher, I’m actively seeking opportunities for an **internship or a full-time role** where I can learn from experienced professionals, enhance my skills, and make meaningful contributions to the team.</motion.p>
          <motion.button
            className='download-btn'
            onClick={() => window.open("https://drive.google.com/uc?export=download&id=13p0CAnktMyEbxKSPrgblARwu01B0AAee")}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume <MdArrowOutward style={{ fontSize: "25px" }} />
          </motion.button>
        </motion.div>

        <motion.div className="my-social" variants={itemVariants}>
          <motion.div
            className="image-section"
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(255, 215, 0, 0.2)" }}
          >
            <div className="profile-image">
              <img src="port2.png" alt="Azaz Khan Profile" />
            </div>
            <div className="my-info">
              <h5>Azaz Khan</h5>
              <p>Fullstack Developer</p>
            </div>
            <div className="social-links">
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/azaz__wri8s?igsh=eXJ6N200dWVpb3ll" target="_blank"><FaInstagram className='social-icon' /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ijaj-gori-36298338a" target="_blank"><FaLinkedin className='social-icon' /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Azaz-Gori07" target="_blank"><FaGithubSquare className='social-icon' /></motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="exprience-section"
        id="experience"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="exprience" variants={containerVariants}>
          <motion.h2 variants={itemVariants}><RiSparkling2Line style={{ color: "#ffd700", fontSize: "40px" }} /> Key Development Projects</motion.h2>
          <div className="presents-section">
            <motion.div className="presents" variants={itemVariants} whileHover={{ scale: 1.02, backgroundColor: "#181818" }}>
              <h1>Self-Initiated Full-Stack Development <span>2024 – Present</span></h1>
              <p className='yyy'>(Personal Learning Projects)</p>
              <p>Worked on multiple full-stack projects using **React.js, Node.js, Express, and MongoDB**. Focused on building responsive user interfaces, backend APIs, and database integrations. Deployed projects using **Vercel, Render, and Railway**, ensuring performance optimization and uptime.</p>
            </motion.div>
            <motion.div className="presents" variants={itemVariants} whileHover={{ scale: 1.02, backgroundColor: "#181818" }}>
              <h1>E-Commerce Website (MERN Stack) <span>Project Focus</span></h1>
              <p>Developed a fully functional e-commerce website with authentication, product management, and dynamic cart system. Integrated **MongoDB Atlas** for product data and used **JWT authentication** for user security. Implemented frontend design using React + Tailwind CSS.</p>
            </motion.div>
            <motion.div className="presents" variants={itemVariants} whileHover={{ scale: 1.02, backgroundColor: "#181818" }}>
              <h1>Chat App (Real-Time) <span>Using Socket.io</span></h1>
              <p>Created a real-time chat app using **Socket.io** and Node.js. Included login authentication and separate user rooms for messaging. Focused on backend logic, event handling, and live communication features.</p>
            </motion.div>

            <motion.h2 style={{ marginTop: "30px", marginBottom: "30px" }} variants={itemVariants}><RiSparkling2Line className='spark' /> Education</motion.h2>

            <motion.div className="presents" variants={itemVariants} whileHover={{ scale: 1.02, backgroundColor: "#181818" }}>
              <h1>Higher Secondary Education <span>2021 – 2022</span></h1>
              <p>Govt. Higher Secondary School</p>
            </motion.div>

            <motion.div className="presents" variants={itemVariants} whileHover={{ scale: 1.02, backgroundColor: "#181818" }}>
              <h1>Diploma in Web Development <span>2024 – 2025</span></h1>
              <p>CADD Centre Pvt. Ltd. (Sikar, Raj)</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="contact-section" id="contact" variants={containerVariants}>
          <motion.h2 variants={itemVariants}><RiSparkling2Line className='spark' /> Contact Me</motion.h2>
          <motion.span variants={itemVariants} whileHover={{ x: 5 }}>
            <p>Phone</p> <h2>+91 6378192135</h2>
          </motion.span>
          <motion.span variants={itemVariants} whileHover={{ x: 5 }}>
            <p>Email</p> <h2>azazkhan007007@gmail.com</h2>
          </motion.span>
          <motion.span variants={itemVariants} whileHover={{ x: 5 }}>
            <p>Linkedin</p> <motion.a href="https://www.linkedin.com/in/ijaj-gori-36298338a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" whileHover={{ color: "#ffed4e" }}>LinkedIn Profile</motion.a>
          </motion.span>
          <motion.span variants={itemVariants} whileHover={{ x: 5 }}>
            <p>Address</p> <h2>sikar, Raj.</h2>
          </motion.span>
        </motion.div>
      </motion.div>

      <div id="skills-wrapper">
        <Skills />
      </div>

      <motion.section
        className="services-section"
        id="services"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="services-header">
          <motion.h2 variants={itemVariants}><RiSparkling2Line className='spark' /> What I Do</motion.h2>
          <motion.h3 variants={itemVariants}>Services I Offer</motion.h3>
        </div>

        <div className="services-grid">
          <motion.div className="service-card" variants={itemVariants} whileHover={{ scale: 1.05, rotate: 1 }}>
            <div className="service-number">01</div>
            <h4>Web Development</h4>
            <p>Building responsive and scalable web applications using latest technologies and frameworks</p>
          </motion.div>
          <motion.div className="service-card" variants={itemVariants} whileHover={{ scale: 1.05, rotate: 1 }}>
            <div className="service-number">02</div>
            <h4>Backend Development</h4>
            <p>Developing robust server-side logic with Node.js, Express and database management systems</p>
          </motion.div>
          <motion.div className="service-card" variants={itemVariants} whileHover={{ scale: 1.05, rotate: 1 }}>
            <div className="service-number">03</div>
            <h4>Full Stack Solutions</h4>
            <p>End-to-end development from database design to frontend implementation and deployment</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="featured-section"
        id="projects"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="featured-container" variants={containerVariants}>
          <motion.h2 className="featured-title" variants={itemVariants}>Featured Projects</motion.h2>
          <motion.p className="featured-subtitle" variants={itemVariants}>
            Some of my recent self-initiated and learning-based projects that
            reflect my skills and creativity.
          </motion.p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, rotateZ: 0.5 }}
              >
                <div className="project-card-inner">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="overlay">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="view-btn"
                        whileHover={{ scale: 1.1 }}
                      >
                        View Project <FaExternalLinkAlt size={14} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div className="view-all" variants={itemVariants}>
            <motion.a
              href="https://github.com/Azaz-Gori07"
              className="explore-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ffe268" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="faqs-section"
        id="faqs"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="faqs-main-container">
          <motion.div className="faqs-left" variants={containerVariants}>
            <motion.h2 variants={itemVariants}><RiSparkling2Line className='spark' /> FAQs</motion.h2>
            <motion.h3 variants={itemVariants}>Frequently Asked Questions</motion.h3>
            <motion.p variants={itemVariants}>Have questions? Here are some of the most common ones I receive. Click on any question to see the answer.</motion.p>
          </motion.div>

          <motion.div className="faqs-right" variants={containerVariants}>
            <div className="faqs-list">
              {faqsData.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`faq-item ${openFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="faq-question">
                    <h4>{faq.question}</h4>
                    <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                  </div>
                  <div className={`faq-answer ${openFaq === index ? 'show' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Home