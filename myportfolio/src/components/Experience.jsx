import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "Advanced analytics platform for social media metrics with data visualization, automated reporting, and performance insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: true
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing creative design and smooth animations with optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Three.js", "GSAP"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: false
    },
    {
      id: 6,
      title: "AI Chat Assistant",
      description: "An intelligent chatbot with natural language processing, context awareness, and integration with multiple AI models.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      technologies: ["React", "OpenAI API", "WebSocket"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
      featured: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const ProjectCard = ({ project, index }) => {
    const isVisible = visibleProjects.has(project.id);
    const isEven = index % 2 === 0;
    
    return (
      <div
        ref={el => projectRefs.current[index] = el}
        data-project-id={project.id}
        className={`project-card ${isVisible ? 'visible' : ''} ${isEven ? 'slide-left' : 'slide-right'} ${project.featured ? 'featured' : ''}`}
      >
        <div className="project-content">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <div className="project-links">
                <a href={project.liveLink} className="project-link live-link">
                  <ExternalLink size={20} />
                </a>
                <a href={project.githubLink} className="project-link github-link">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="project-info">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-actions">
              <a href={project.liveLink} className="action-btn primary">
                View Live <ArrowRight size={16} />
              </a>
              <a href={project.githubLink} className="action-btn secondary">
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-accent">Featured</span> Projects
          </h2>
          <p className="section-subtitle">
            A collection of my recent work showcasing various technologies and creative solutions
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .projects-section {
          min-height: 100vh;
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
        }

        .projects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .projects-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.2s forwards;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-accent {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          gap: 3rem;
          margin-top: 2rem;
        }

        .project-card {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, opacity;
        }

        .project-card.slide-right {
          transform: translateX(100px);
        }

        .project-card.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .project-card.featured {
          transform: scale(1.02);
        }

        .project-card.featured.visible {
          transform: scale(1.02) translateX(0);
        }

        .project-content {
          background: rgba(30, 41, 59, 0.8);
          border: 1px solid rgba(51, 65, 85, 0.6);
          border-radius: 1.5rem;
          overflow: hidden;
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 400px;
          position: relative;
        }

        .project-card:nth-child(even) .project-content {
          grid-template-columns: 1fr 1fr;
          direction: rtl;
        }

        .project-card:nth-child(even) .project-info {
          direction: ltr;
        }

        .project-content:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .project-card.featured .project-content {
          border: 1px solid rgba(147, 51, 234, 0.4);
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.2);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-content:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(147, 51, 234, 0.9));
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-content:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          transform: translateY(20px);
        }

        .project-overlay:hover .project-link {
          transform: translateY(0);
        }

        .project-link:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .project-info {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .project-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .featured-badge {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-description {
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #93c5fd;
          padding: 0.375rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .action-btn.primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .action-btn.primary:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }

        .action-btn.secondary {
          background: rgba(51, 65, 85, 0.8);
          color: #e2e8f0;
          border: 1px solid rgba(71, 85, 105, 0.8);
        }

        .action-btn.secondary:hover {
          background: rgba(71, 85, 105, 0.9);
          transform: translateY(-2px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .project-content {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          
          .project-card:nth-child(even) .project-content {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          
          .project-image {
            height: 250px;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 3rem 1rem;
          }
          
          .projects-grid {
            gap: 2rem;
          }
          
          .project-info {
            padding: 1.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .project-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;