import React from 'react'
import { FaStar } from 'react-icons/fa';
import "./Home.css"
import { RiSparkling2Line } from "react-icons/ri";
import { MdArrowOutward } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Skills from '../../component/skills/Skills';
import { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

function Home() {

  const projects = [
    {
      title: "Portfolio Website",
      category: "Frontend Project",
      description:
        "A personal responsive portfolio built using React, custom CSS, and Framer Motion to showcase my work and skills.",
      image: "https://via.placeholder.com/600x400?text=Portfolio+Preview",
      link: "#",
    },
    {
      title: "Full Stack E-Commerce Platform",
      category: "Full Stack Project",
      description:
        "A MERN stack e-commerce interface built to practice responsive layouts, state management, and API integration.",
      image: "https://via.placeholder.com/600x400?text=E-Commerce+UI",
      link: "#",
    },
    {
      title: "To-Do Web App (MERN)",
      category: "Full Stack Project",
      description:
        "A CRUD-based task manager built using Node.js, Express, and MongoDB with a responsive frontend.",
      image: "https://via.placeholder.com/600x400?text=To-Do+App",
      link: "#",
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
        <div className="header">
          <div className="name">
            <h1>AZAZ KHAN</h1>
          </div>

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

          <div className="content-section">
            <div className="hero-image">
              <img src="port1.png" alt="Azaz Khan Profile" />
            </div>
            <div className="hero-content">
              <p className="hero-text">
                Welcome to my portfolio! I'm Azaz Khan, a **full-stack
                developer** with expertise in building robust server-side
                applications. I specialize in creating efficient, scalable
                solutions that deliver exceptional performance and security.
              </p>
              <button className="btn" onClick={() => window.open(
                "https://wa.me/+916378192135?text=Hello%20Azaz,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20starting%20a%20project.",
                "_blank"
              )}>Start a Project Now <MdArrowOutward style={{ fontSize: "25px" }} /></button>
            </div>
          </div>
        </div>
      </div>

      <section className="reviews-section">
        <div className="reviews-container">
          <div className="reviews-track">
            {[...reviewsData, ...reviewsData].map((review, index) => (
              <div className="review-card" key={index}>
                <div className="rating">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="star">★</span>
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='projects-section'>
        <div className="recent-projects">
          <h3><RiSparkling2Line className='spark'/> Recent Projects</h3>
          <h4>Explore more work <MdArrowOutward style={{ fontSize: "25px" }} /></h4>
        </div>
        <div className="projects-container">
          <img src="laptop-device.jpg" className='laptop' alt="Featured Project Preview" />
          <button className='view-project' onClick={ () => window.open("https://all-birds-fronted.vercel.app")}>View Project <MdArrowOutward style={{ fontSize: "25px" }} /></button>
        </div>
      </section>

      <div className="resume-section" id="about">
        <div className="detail-resume">
          <h3><RiSparkling2Line className='spark' /> About Me</h3>
          <h1>Passionate & Dedicated <br /> Full-Stack Developer</h1>
          <p>I am a dedicated full-stack web developer with a deep interest in creating functional and visually appealing web applications. I enjoy working with technologies like **React.js, Node.js, Express.js, and MongoDB** to turn ideas into real, working products. As a fresher, I’m actively seeking opportunities for an **internship or a full-time role** where I can learn from experienced professionals, enhance my skills, and make meaningful contributions to the team.</p>
          <button className='download-btn' onClick={() => window.open("https://drive.google.com/uc?export=download&id=13p0CAnktMyEbxKSPrgblARwu01B0AAee")}>Download Resume <MdArrowOutward style={{ fontSize: "25px" }} /></button>
        </div>

        <div className="my-social">
          <div className="image-section">
            <div className="profile-image">
              <img src="port2.png" alt="Azaz Khan Profile" />
            </div>
            <div className="my-info">
              <h5>Azaz Khan</h5>
              <p>Fullstack Developer</p>
            </div>
            <div className="social-links">
              <FaInstagram className='social-icon' onClick={()=> window.open("https://www.instagram.com/azaz__wri8s?igsh=eXJ6N200dWVpb3ll")}/>
              <FaLinkedin className='social-icon' onClick={()=> window.open("https://www.linkedin.com/in/ijaj-gori-36298338a")}/>
              <FaGithubSquare className='social-icon' onClick={() => window.open("https://github.com/Azaz-Gori07")}/>
            </div>
          </div>
        </div>
      </div>

      <div className="exprience-section" id="experience">
        <div className="exprience">
          <h2><RiSparkling2Line style={{ color: "#ffd700", fontSize: "40px" }} /> Key Development Projects</h2>
          <div className="presents-section">
            <div className="presents">
              <h1>Self-Initiated Full-Stack Development
                <span>2024 – Present</span></h1>
              <p className='yyy'>(Personal Learning Projects)</p>
              <p>Worked on multiple full-stack projects using **React.js, Node.js, Express, and MongoDB**.
                Focused on building responsive user interfaces, backend APIs, and database integrations.
                Deployed projects using **Vercel, Render, and Railway**, ensuring performance optimization and uptime.</p>
            </div>
            <div className="presents">
              <h1>E-Commerce Website (MERN Stack)
                <span>Project Focus</span></h1>
              <p>Developed a fully functional e-commerce website with authentication, product management, and dynamic cart system.
                Integrated **MongoDB Atlas** for product data and used **JWT authentication** for user security.
                Implemented frontend design using React + Tailwind CSS.</p>
            </div>
            <div className="presents">
              <h1>Chat App (Real-Time)
                <span>Using Socket.io</span></h1>
              <p>Created a real-time chat app using **Socket.io** and Node.js.
                Included login authentication and separate user rooms for messaging.
                Focused on backend logic, event handling, and live communication features.</p>
            </div>

            <h2 style={{ marginTop: "30px", marginBottom: "30px" }}><RiSparkling2Line className='spark' /> Education</h2>
            <div className="presents">
              <h1>Higher Secondary Education
                <span>2021 – 2022</span></h1>
              <p>Govt. Higher Secondary School</p>
            </div>

            <div className="presents">
              <h1>Diploma in Web Development
                <span>2024 – 2025</span></h1>
              <p>CADD Centre Pvt. Ltd. (Sikar, Raj)</p>
            </div>

          </div>
        </div>

        <div className="contact-section" id="contact">
          <h2><RiSparkling2Line className='spark' /> Contact Me</h2>
          <span><p>Phone</p> <h2>+91 6378192135</h2></span>
          <span><p>Email</p> <h2>azazkhan007007@gmail.com</h2></span>
          <span><p>Linkedin</p> <a href="https://www.linkedin.com/in/ijaj-gori-36298338a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn Profile</a></span>
          <span><p>Address</p> <h2>sikar, Raj.</h2></span>
        </div>
      </div>

      <div id="skills-wrapper">
        <Skills />
      </div>

      <section className="services-section" id="services">
        <div className="services-header">
          <h2><RiSparkling2Line className='spark' /> What I Do</h2>
          <h3>Services I Offer</h3>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-number">01</div>
            <h4>Web Development</h4>
            <p>Building responsive and scalable web applications using latest technologies and frameworks</p>
          </div>
          <div className="service-card">
            <div className="service-number">02</div>
            <h4>Backend Development</h4>
            <p>Developing robust server-side logic with Node.js, Express and database management systems</p>
          </div>
          <div className="service-card">
            <div className="service-number">03</div>
            <h4>Full Stack Solutions</h4>
            <p>End-to-end development from database design to frontend implementation and deployment</p>
          </div>
        </div>
      </section>

      <section className="featured-section" id="projects">
        <div className="featured-container">
          <h2 className="featured-title">Featured Projects</h2>
          <p className="featured-subtitle">
            Some of my recent self-initiated and learning-based projects that
            reflect my skills and creativity.
          </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="view-btn"
                    >
                      View Project <FaExternalLinkAlt size={14} />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <a href="https://github.com/Azaz-Gori07" className="explore-btn">
              Explore All Projects
            </a>
          </div>
        </div>
      </section>

      <section className="faqs-section" id="faqs">
        <div className="faqs-main-container">
          <div className="faqs-left">
            <h2><RiSparkling2Line className='spark' /> FAQs</h2>
            <h3>Frequently Asked Questions</h3>
            <p>Have questions? Here are some of the most common ones I receive. Click on any question to see the answer.</p>
          </div>

          <div className="faqs-right">
            <div className="faqs-list">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaq === index ? 'active' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question">
                    <h4>{faq.question}</h4>
                    <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                  </div>
                  <div className={`faq-answer ${openFaq === index ? 'show' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home