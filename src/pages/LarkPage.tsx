import { Link } from "react-router-dom";
import { FadeIn } from "../App";

export default function LarkPage() {
  const solutions = [
    {
      number: "01",
      title: "Lark Messenger",
      desc: "Centralize team communication through instant messaging, group chats, announcements, and integrated collaboration tools.",
    },
    {
      number: "02",
      title: "Lark Docs & Drive",
      desc: "Create, share, manage, and collaborate on documents, spreadsheets, and files in one secure digital workspace.",
    },
    {
      number: "03",
      title: "Lark Base",
      desc: "Build customized business applications, databases, project trackers, CRM systems, and automated workflows without complex coding.",
    },
    {
      number: "04",
      title: "Workflow & HR Management",
      desc: "Streamline employee attendance, leave applications, approvals, requests, and other business processes through digital workflows.",
    },
  ];

  const benefits = [
    {
      title: "All-in-One Workspace",
      desc: "Essential business tools in one integrated platform.",
    },
    {
      title: "Improved Productivity",
      desc: "Reduce time spent switching between applications.",
    },
    {
      title: "Seamless Collaboration",
      desc: "Connect employees, teams, and departments.",
    },
    {
      title: "Workflow Automation",
      desc: "Minimize repetitive manual tasks.",
    },
    {
      title: "Flexible & Scalable",
      desc: "Adapt the platform to your organization's needs.",
    },
    {
      title: "AI-Powered Productivity",
      desc: "Enhance everyday work with intelligent features.",
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
                <img src="/lark.png" alt="Lark" className="partner-hero-logo" />
              </div>
              <h1>
                One Platform. Smarter Collaboration.{" "}
                <span className="highlight">Greater Productivity.</span>
              </h1>
              <p>
                Bring your entire workplace together with Lark, an all-in-one
                digital workspace that connects people, processes, and
                information in one integrated platform.
              </p>
              <p>
                From team messaging and video conferencing to document
                management, project tracking, and workflow automation, Lark gives
                businesses the tools they need to work smarter, collaborate
                seamlessly, and get more done.
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
              <span className="section-label">About Lark</span>
              <h2>A Modern Workplace Platform</h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="partner-about-text">
              <p>
                Lark is a modern workplace collaboration platform designed to
                simplify business operations and improve organizational
                productivity. By combining essential workplace tools into a
                single ecosystem, Lark eliminates fragmented communication,
                reduces manual processes, and helps teams stay connected wherever
                they work.
              </p>
              <p>
                Whether you're managing a growing team, coordinating projects, or
                streamlining company-wide operations, Lark provides a centralized
                workspace to keep everyone aligned and productive.
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
              <span className="section-label">Our Lark Solutions</span>
              <h2>Everything You Need in One Platform</h2>
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
              <span className="section-label">Why Choose Lark?</span>
              <h2>Built for Modern Teams</h2>
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
              <h2>Your Lark Solutions Partner</h2>
              <p>
                Through <strong>Digital One Solutions Philippines Inc.</strong>,
                we help businesses modernize workplace collaboration and digital
                operations through Lark.
              </p>
              <p>
                Our services include solution consultation, platform
                implementation, workspace configuration, workflow customization,
                employee onboarding, and ongoing support. We help organizations
                move beyond disconnected tools and create a more connected,
                efficient, and productive digital workplace.
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
              <h2>Ready to Transform the Way Your Team Works?</h2>
              <p className="cta-tagline">
                Work smarter. Collaborate better. Grow together.
              </p>
              <p className="cta-desc">
                Discover how Lark can simplify collaboration, automate workflows,
                and improve productivity across your organization.
              </p>
              <Link to="/#contact" className="btn btn-lg">
                Contact Us for a Lark Demo →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
