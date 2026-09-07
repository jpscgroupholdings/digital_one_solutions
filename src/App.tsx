import { useState, useEffect, useRef } from "react";
import "./App.css";

// Scroll-into-view hook
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`${className} fade-in ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── NAVBAR ───
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const about = document.getElementById("about");
      if (about) {
        setScrolled(window.scrollY >= about.offsetTop - 80);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <img src="/digitalsolutionlogo.png" alt="Digital One Solutions" />
        </a>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// ─── HERO ───
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="hero-content">
        <FadeIn>
          <h1>
            Cloud. <span className="highlight">AI.</span> Digital Business.
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="hero-sub">
            Digital One Solutions Philippines is the digital technology arm of{" "}
            <strong>JP Group</strong>, helping businesses modernize their IT
            infrastructure, move to the cloud, and adopt intelligent digital
            solutions.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
        </FadeIn>
      </div>
      <div className="hero-visual">
        <svg
          viewBox="0 0 800 400"
          className="hero-illustration"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0080c6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#013271" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="serverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00a3e0" />
              <stop offset="100%" stopColor="#013271" />
            </linearGradient>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0080c6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g transform="translate(120, 140)">
            <rect
              x="0"
              y="0"
              width="120"
              height="30"
              rx="4"
              fill="url(#serverGrad)"
            />
            <rect
              x="8"
              y="6"
              width="16"
              height="18"
              rx="2"
              fill="#00d4ff"
              opacity="0.8"
            />
            <circle cx="32" cy="15" r="3" fill="#00ff88" />
            <circle cx="44" cy="15" r="3" fill="#00ff88" />
            <rect x="60" y="8" width="40" height="3" rx="1" fill="#ffffff33" />
            <rect x="60" y="16" width="30" height="3" rx="1" fill="#ffffff33" />
          </g>
          <g transform="translate(120, 175)">
            <rect
              x="0"
              y="0"
              width="120"
              height="30"
              rx="4"
              fill="url(#serverGrad)"
            />
            <rect
              x="8"
              y="6"
              width="16"
              height="18"
              rx="2"
              fill="#00d4ff"
              opacity="0.6"
            />
            <circle cx="32" cy="15" r="3" fill="#00ff88" />
            <circle cx="44" cy="15" r="3" fill="#ffaa00" />
            <rect x="60" y="8" width="35" height="3" rx="1" fill="#ffffff33" />
            <rect x="60" y="16" width="25" height="3" rx="1" fill="#ffffff33" />
          </g>
          <g transform="translate(120, 210)">
            <rect
              x="0"
              y="0"
              width="120"
              height="30"
              rx="4"
              fill="url(#serverGrad)"
            />
            <rect
              x="8"
              y="6"
              width="16"
              height="18"
              rx="2"
              fill="#00d4ff"
              opacity="0.4"
            />
            <circle cx="32" cy="15" r="3" fill="#00ff88" />
            <circle cx="44" cy="15" r="3" fill="#00ff88" />
            <rect x="60" y="8" width="45" height="3" rx="1" fill="#ffffff33" />
            <rect x="60" y="16" width="35" height="3" rx="1" fill="#ffffff33" />
          </g>
          <g transform="translate(320, 100)">
            <rect
              x="0"
              y="0"
              width="160"
              height="140"
              rx="12"
              fill="url(#serverGrad)"
            />
            <circle cx="80" cy="50" r="30" fill="url(#glowGrad)">
              <animate
                attributeName="r"
                values="25;35;25"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="80" cy="50" r="15" fill="#ffffff" opacity="0.9">
              <animate
                attributeName="r"
                values="12;18;12"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <rect x="20" y="90" width="50" height="4" rx="2" fill="#ffffff44" />
            <rect
              x="20"
              y="100"
              width="35"
              height="4"
              rx="2"
              fill="#ffffff44"
            />
            <rect
              x="20"
              y="110"
              width="60"
              height="4"
              rx="2"
              fill="#ffffff44"
            />
            <rect
              x="20"
              y="120"
              width="45"
              height="4"
              rx="2"
              fill="#ffffff44"
            />
            <circle cx="130" cy="95" r="5" fill="#00ff88" />
            <circle cx="130" cy="115" r="5" fill="#00d4ff" />
            <text
              x="80"
              y="78"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
              opacity="0.7"
            >
              CLOUD
            </text>
            <text
              x="80"
              y="90"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="bold"
              opacity="0.7"
            >
              SERVICES
            </text>
          </g>
          <g transform="translate(540, 160)">
            <rect x="0" y="0" width="140" height="90" rx="6" fill="#1a1a2e" />
            <rect x="6" y="6" width="128" height="72" rx="3" fill="#0d1b2a" />
            <g transform="translate(45, 20)">
              <path
                d="M25 0 L50 10 L50 30 C50 45 25 55 25 55 C25 55 0 45 0 30 L0 10 Z"
                fill="#00ff88"
                opacity="0.8"
              />
              <path
                d="M25 8 L42 16 L42 30 C42 40 25 48 25 48 C25 48 8 40 8 30 L8 16 Z"
                fill="#1a1a2e"
              />
              <path
                d="M20 28 L24 32 L32 22"
                stroke="#00ff88"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </g>
            <polygon points="0,90 140,90 160,110 -20,110" fill="#2a2a3e" />
            <rect x="10" y="95" width="120" height="8" rx="2" fill="#3a3a4e" />
          </g>
          <line
            x1="240"
            y1="175"
            x2="320"
            y2="170"
            stroke="#00d4ff"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-20"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="480"
            y1="170"
            x2="540"
            y2="200"
            stroke="#00d4ff"
            strokeWidth="2"
            opacity="0.4"
            strokeDasharray="5,5"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-20"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>
          <circle cx="200" cy="100" r="4" fill="#00d4ff" opacity="0.6">
            <animate
              attributeName="cy"
              values="100;80;100"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="500" cy="120" r="3" fill="#00ff88" opacity="0.5">
            <animate
              attributeName="cy"
              values="120;100;120"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="300" cy="280" r="4" fill="#00d4ff" opacity="0.4">
            <animate
              attributeName="cy"
              values="280;260;280"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
          <path
            d="M50 380 Q80 340 120 360 Q150 330 190 355 Q220 340 250 365 L250 400 L50 400 Z"
            fill="#ffffff08"
          />
          <path
            d="M550 380 Q580 340 620 360 Q650 330 690 355 Q720 340 750 365 L750 400 L550 400 Z"
            fill="#ffffff08"
          />
        </svg>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z"
            fill="var(--bg-primary)"
          />
        </svg>
      </div>
    </section>
  );
}

// ─── ABOUT ───
function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">About Us</span>
            <h2>Your Trusted Digital Technology Partner</h2>
          </div>
        </FadeIn>
        <div className="about-content">
          <FadeIn delay={100}>
            <div className="about-text">
              <p>
                <strong>Digital One Solutions Philippines</strong> is the
                digital technology arm of <strong>JP Group</strong>, helping
                businesses modernize their IT infrastructure, move to the cloud,
                and adopt intelligent digital solutions.
              </p>
              <p>
                We provide <strong>cloud infrastructure</strong>,{" "}
                <strong>productivity platforms</strong>,{" "}
                <strong>AI-powered marketing solutions</strong>, and{" "}
                <strong>managed technology services</strong> designed to make
                businesses more agile, connected, and scalable.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ───
function Services() {
  const services = [
    {
      number: "01",
      category: "Cloud Solutions",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 32c-4.4 0-8-3.6-8-8 0-3.7 2.5-6.8 6-7.7C13.2 10.5 18.3 6 24.5 6c6.7 0 12.2 5.1 12.9 11.6C41.3 18.2 44 21.3 44 25c0 4.4-3.6 8-8 8H14z"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>
      ),
      description:
        "Build and run your business on secure, scalable, and reliable cloud infrastructure.",
      platforms: ["Alibaba Cloud", "AWS", "Other Cloud Environments"],
      items: [
        "Cloud Infrastructure",
        "Cloud Migration",
        "Cloud Deployment & Configuration",
        "Cloud Computing & Storage",
        "Database & Application Hosting",
        "Backup & Disaster Recovery",
        "Cloud Cost & Performance Optimization",
        "Multi-Cloud Solutions",
        "Managed Cloud Services",
      ],
    },
    {
      number: "02",
      category: "Lark Business Solutions",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="8"
            y="8"
            width="32"
            height="32"
            rx="6"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M16 20h16M16 28h10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="36"
            cy="12"
            r="6"
            fill="#00ff88"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M34 12l1.5 1.5L38 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description:
        "Transform workplace collaboration and business operations with Lark, an integrated productivity and collaboration platform.",
      platforms: [],
      items: [
        "Lark Workspace Deployment",
        "Company & Team Setup",
        "Workflow & Approval Automation",
        "Document & Knowledge Management",
        "Employee Collaboration",
        "Business Process Digitalization",
        "Lark Training & Support",
        "Lark Integration",
      ],
      footer:
        "From communication and collaboration to workflow automation, we help businesses maximize their Lark environment.",
    },
    {
      number: "03",
      category: "AI & Marketing Technology",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="24"
            cy="24"
            r="16"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M24 14v10l7 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 34l-4 4M30 34l4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      description:
        "Use AI and data to better understand customers, automate marketing, and improve business performance.",
      platforms: [],
      items: [
        "AI-Powered Marketing Solutions",
        "Customer Data & Analytics",
        "Marketing Automation",
        "Customer Segmentation",
        "AI Customer Engagement",
        "Data-Driven Campaigns",
        "AI Integration",
        "Digital Marketing Technology",
      ],
    },
    {
      number: "04",
      category: "Managed Cloud & IT Services",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="10"
            y="6"
            width="28"
            height="36"
            rx="4"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <circle cx="24" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M16 28h16M16 34h10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M36 18l4 4-4 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      description:
        "Keep your technology environment reliable, secure, and optimized with ongoing technical support.",
      platforms: [],
      items: [
        "Cloud Monitoring & Management",
        "Infrastructure Support",
        "Server Management",
        "Security & Access Management",
        "System Maintenance",
        "Technical Support",
        "Performance Optimization",
        "IT Consulting",
      ],
    },
    {
      number: "05",
      category: "Digital Transformation",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 24C8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M24 8v16l12 8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="36" r="4" fill="#00d4ff" opacity="0.6" />
        </svg>
      ),
      description:
        "We help businesses move from traditional processes to connected, cloud-based operations.",
      platforms: [],
      items: [
        "Digital Workplace Solutions",
        "Business Process Automation",
        "Cloud-Based Business Systems",
        "System & Platform Integration",
        "Data & Application Modernization",
        "Technology Strategy & Consulting",
      ],
    },
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2>Comprehensive Digital Solutions</h2>
          </div>
        </FadeIn>
        {services.map((svc, si) => (
          <FadeIn key={svc.category} delay={si * 100}>
            <div className="service-block">
              <div className="service-header">
                <div className="service-number">{svc.number}</div>
                <div className="service-title">
                  <div className="service-icon">{svc.icon}</div>
                  <div>
                    <h3>{svc.category}</h3>
                    <p>{svc.description}</p>
                  </div>
                </div>
              </div>
              <div className="service-body">
                <ul className="service-list">
                  {svc.items.map((item) => (
                    <li key={item}>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="check-icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                {svc.footer && <p className="service-footer">{svc.footer}</p>}
                {svc.platforms.length > 0 && (
                  <div className="service-platforms">
                    <span className="platforms-label">Cloud Platforms:</span>
                    {svc.platforms.map((p) => (
                      <span key={p} className="platform-tag">
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ─── TECHNOLOGY PARTNERS ──
function Partners() {
  const partners = [
    {
      name: "Alibaba Cloud",
      logo: "/alibabacloud.png",
      desc: "Cloud computing, infrastructure, databases, security, and AI services for businesses of all sizes.",
    },
    {
      name: "AWS",
      logo: "/aws.webp",
      desc: "Scalable cloud infrastructure, computing, storage, databases, and application services.",
    },
    {
      name: "Lark",
      logo: "/lark.png",
      desc: "Integrated workplace collaboration, communication, productivity, and workflow automation.",
    },
    {
      name: "ByteDance",
      logo: "/bytedance.png",
      desc: "Technology and digital solutions supporting AI, data, content, marketing, and customer engagement.",
    },
  ];

  return (
    <section id="partners" className="section partners">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">Our Technology Partners</span>
            <h2>Leading Global Technology Platforms</h2>
            <p className="section-sub">
              We work with leading global technology platforms to provide
              businesses with scalable cloud, productivity, AI, and digital
              solutions.
            </p>
          </div>
        </FadeIn>
        <div className="partners-grid">
          {partners.map((p, i) => (
            <FadeIn key={p.name} delay={i * 100}>
              <div className="partner-card">
                <div className="partner-logo">
                  <img src={p.logo} alt={p.name} />
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY DIGITAL ONE SOLUTIONS ───
function WhyDigitalOne() {
  const reasons = [
    {
      title: "Cloud-First",
      desc: "We help businesses build a stronger and more scalable technology foundation in the cloud.",
    },
    {
      title: "Business-Focused",
      desc: "Technology should improve the way your business operates—not create unnecessary complexity.",
    },
    {
      title: "Multi-Cloud Capability",
      desc: "We work across leading cloud environments to help businesses select and manage the right infrastructure.",
    },
    {
      title: "AI-Ready",
      desc: "We help organizations explore practical AI applications that create measurable business value.",
    },
    {
      title: "End-to-End Support",
      desc: "From cloud deployment and migration to ongoing management and optimization, we support your technology environment throughout its lifecycle.",
    },
  ];

  return (
    <section className="section why-dos">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">Why Digital One Solutions?</span>
            <h2>Built for Modern Business</h2>
          </div>
        </FadeIn>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <FadeIn key={r.title} delay={i * 100}>
              <div className="why-card">
                <div className="why-card-number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── OUR APPROACH ───
function Approach() {
  const steps = ["Assess", "Plan", "Deploy", "Integrate", "Manage", "Optimize"];

  return (
    <section className="section approach">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">Our Approach</span>
            <h2>A Proven Process for Success</h2>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="approach-steps">
            {steps.map((step, i) => (
              <div key={step} className="approach-step">
                <div className="approach-step-number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="approach-step-content">
                  <h4>{step}</h4>
                  {i < steps.length - 1 && (
                    <div className="approach-arrow">→</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="approach-desc">
            We start by understanding your business and technology requirements,
            then design and implement solutions that can scale as your
            organization grows.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── CTA BANNER ───
function CtaBanner() {
  return (
    <section className="section cta-banner">
      <div className="container">
        <FadeIn>
          <div className="cta-content">
            <h2>Powering Businesses in the Digital Cloud</h2>
            <p className="cta-tagline">
              Build smarter. Scale faster. Work better.
            </p>
            <p className="cta-desc">
              From cloud infrastructure and Lark collaboration to AI and digital
              transformation, Digital One Solutions helps businesses adopt the
              technology they need to compete and grow.
            </p>
            <a href="#contact" className="btn btn-primary btn-lg">
              Talk to Our Technology Team →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── CONTACT ───
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <FadeIn>
          <div className="section-header">
            <span className="section-label">Contact Us</span>
            <h2>Let's Build Something Great</h2>
            <p className="section-sub">
              Ready to modernize your infrastructure? Get in touch with our
              team.
            </p>
          </div>
        </FadeIn>
        <div className="contact-grid">
          <FadeIn delay={100}>
            <div className="contact-info">
              <div className="contact-card">
                <h3>Digital One Solutions Philippines</h3>
                <p className="contact-subtitle">
                  The digital technology arm of JP Group
                </p>
              </div>
              <div className="contact-methods">
                <div className="contact-method">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div>
                    <span>Email Us</span>
                    <a href="mailto:info@digitalonesolutions.ph">
                      info@digitalonesolutions.ph
                    </a>
                  </div>
                </div>
                <div className="contact-method">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <span>Visit Us</span>
                    <span>Philippines</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Juan" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Dela Cruz" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="juan@company.com" />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" placeholder="Your company name" />
              </div>
              <div className="form-group">
                <label>Interested In</label>
                <select>
                  <option value="">Select a service</option>
                  <option>Cloud Solutions</option>
                  <option>Lark Business Solutions</option>
                  <option>AI & Marketing Technology</option>
                  <option>Managed Cloud & IT Services</option>
                  <option>Digital Transformation</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/digitalsolutionlogo.png" alt="Digital One Solutions" />
            <p>Cloud. AI. Digital Business.</p>
            <p className="footer-tagline">
              The digital technology arm of JP Group.
            </p>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Cloud Solutions</a>
              </li>
              <li>
                <a href="#services">Lark Business Solutions</a>
              </li>
              <li>
                <a href="#services">AI & Marketing Technology</a>
              </li>
              <li>
                <a href="#services">Managed Cloud & IT Services</a>
              </li>
              <li>
                <a href="#services">Digital Transformation</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#partners">Partners</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Cloud Platforms</h4>
            <ul>
              <li>Alibaba Cloud</li>
              <li>AWS</li>
              <li>Lark</li>
              <li>ByteDance</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Digital One Solutions Philippines.
            All rights reserved.
          </p>
          <p>
            A member of the <strong>JP Group</strong> family.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ───
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <WhyDigitalOne />
      <Approach />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}
