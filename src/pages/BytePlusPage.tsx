import { Link } from "react-router-dom";
import { FadeIn } from "../App";

export default function BytePlusPage() {
  const solutions = [
    {
      number: "01",
      title: "AI Marketing & Personalization",
      desc: "Leverage AI-powered insights, audience understanding, personalization, and intelligent marketing technologies to create more relevant customer experiences and improve marketing performance.",
    },
    {
      number: "02",
      title: "AI Content Creation",
      desc: "Create engaging marketing content using AI-powered image, video, and audio generation technologies. Help businesses streamline creative production and scale their digital campaigns.",
    },
    {
      number: "03",
      title: "Data Intelligence & Analytics",
      desc: "Turn business and customer data into actionable insights through intelligent analytics, data processing, and machine learning solutions.",
    },
    {
      number: "04",
      title: "AI & Cloud Infrastructure",
      desc: "Build and scale digital applications with enterprise-grade cloud infrastructure, AI models, APIs, and computing solutions.",
    },
    {
      number: "05",
      title: "AI-Powered Business Solutions",
      desc: "Integrate AI capabilities into business processes, applications, customer engagement, and digital services to drive innovation and efficiency.",
    },
  ];

  const benefits = [
    {
      title: "Powered by ByteDance Technology",
      desc: "Built on advanced technology and engineering expertise.",
    },
    {
      title: "AI-Driven Innovation",
      desc: "Access to modern AI models and intelligent solutions.",
    },
    {
      title: "Scalable Solutions",
      desc: "Technology designed to support businesses as they grow.",
    },
    {
      title: "Enhanced Customer Experiences",
      desc: "Enable smarter, more personalized digital interactions.",
    },
    {
      title: "Enterprise-Ready Technology",
      desc: "Solutions for business applications, infrastructure, and digital transformation.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="partner-hero">
        <div className="container">
          <FadeIn>
            <div className="partner-hero-content">
              <div className="partner-hero-logo-wrap">
                <img
                  src="/byteplus.png"
                  alt="BytePlus"
                  className="partner-hero-logo"
                />
              </div>
              <h1>
                Powering Business Growth Through{" "}
                <span className="highlight">AI and Innovation.</span>
              </h1>
              <p>
                Advanced AI. Smarter Marketing. Intelligent Business Solutions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section className="section partner-about">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">About BytePlus</span>
              <h2>Enterprise Technology by ByteDance</h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="partner-about-text">
              <p>
                BytePlus is the enterprise technology arm built on ByteDance's
                advanced technology and engineering expertise. It provides
                businesses with innovative AI, cloud computing, data analytics,
                personalization, and digital solutions designed to enhance
                customer experiences, improve operational efficiency, and
                accelerate business growth.
              </p>
              <p>
                Through technologies developed from ByteDance's experience
                powering globally recognized digital platforms, BytePlus helps
                organizations transform the way they engage customers, manage
                data, and deliver digital experiences.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solutions */}
      <section className="section partner-solutions">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">Our BytePlus Solutions</span>
              <h2>AI-Native Cloud for Enterprise Growth</h2>
            </div>
          </FadeIn>
          {solutions.map((sol, i) => (
            <FadeIn key={sol.title} delay={i * 100}>
              <div className="solution-card">
                <div className="solution-number">{sol.number}</div>
                <div className="solution-content">
                  <h3>{sol.title}</h3>
                  <p>{sol.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section partner-benefits">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <span className="section-label">Why BytePlus?</span>
              <h2>Built on Proven Technology</h2>
            </div>
          </FadeIn>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 80}>
                <div className="benefit-card">
                  <div className="benefit-number">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="section partner-cta-section">
        <div className="container">
          <FadeIn>
            <div className="partner-cta-card">
              <h2>Your BytePlus Technology Partner</h2>
              <p>
                Through our partnership with BytePlus,{" "}
                <strong>JP Technology Solutions Inc.</strong> helps Philippine
                businesses explore, adopt, and implement advanced AI and digital
                technologies.
              </p>
              <p>
                From AI-powered marketing and content creation to cloud
                infrastructure, data intelligence, and business automation, we
                work with organizations to identify the right solutions for their
                business goals.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section partner-final-cta">
        <div className="container">
          <FadeIn>
            <div className="cta-content">
              <h2>Ready to Transform Your Business with AI?</h2>
              <p className="cta-tagline">Let's build what's next.</p>
              <p className="cta-desc">
                Discover how BytePlus technologies can help your business
                innovate, operate smarter, and grow faster.
              </p>
              <Link to="/#contact" className="btn btn-lg">
                Contact JP Technology Solutions →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
