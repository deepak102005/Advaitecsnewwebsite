'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Target, 
  Rocket, 
  Diamond, 
  Users, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  Briefcase, 
  Settings, 
  Monitor, 
  Lightbulb, 
  Trophy 
} from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="about-page-wrapper">
      <style>{`
        .about-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .about-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* 1. HERO SECTION */
        .about-hero-section {
          background: #ffffff;
          padding: 18px 0 22px;
          border-bottom: 1px solid #f1f5f9;
        }

        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 24px;
          align-items: center;
        }

        .about-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .about-hero-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 6px;
        }

        .about-hero-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 8px 0;
        }

        .about-hero-subtitle {
          font-size: 15px;
          font-weight: 600;
          color: #334155;
          line-height: 1.45;
          margin-bottom: 12px;
        }

        .about-hero-desc {
          font-size: 13.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 20px 0;
          max-width: 520px;
        }

        .about-hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-about-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0052cc;
          color: #ffffff;
          padding: 10px 22px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 3px 12px rgba(0, 82, 204, 0.25);
          transition: all 0.2s ease;
        }

        .btn-about-primary:hover {
          background: #0043a8;
          transform: translateY(-1px);
        }

        .btn-about-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #0056b3;
          padding: 10px 22px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          border: 1.5px solid #cbd5e1;
          transition: all 0.2s ease;
        }

        .btn-about-secondary:hover {
          border-color: #0056b3;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        /* Hero Image Container: Full natural fit so all 5 faces are completely visible */
        .about-hero-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .about-hero-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
          border-radius: 8px;
        }

        /* 2. PILLARS SECTION (4 CARDS) */
        .about-pillars-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .about-pillar-card {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .about-pillar-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
          background: #ffffff;
          border-color: #cbd5e1;
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #e1effe;
          color: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .about-pillar-card h3 {
          font-size: 16px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 8px 0;
        }

        .about-pillar-card p {
          font-size: 12.5px;
          line-height: 1.5;
          color: #475569;
          margin: 0;
        }

        /* 3. BRIDGING EDUCATION AND REAL-WORLD OPPORTUNITIES */
        .about-bridge-section {
          padding: 26px 0 30px;
          background: #ffffff;
        }

        .about-bridge-grid {
          display: grid;
          grid-template-columns: 1.05fr 1.15fr 1fr;
          gap: 22px;
          align-items: center;
        }

        .about-bridge-left h2 {
          font-size: 28px;
          font-weight: 800;
          line-height: 1.18;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0 0 12px 0;
        }

        .about-bridge-left p {
          font-size: 13.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 20px 0;
        }

        /* Bridge Center Image (Aboutus2.png) */
        .about-bridge-img-wrap {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
          position: relative;
          background: #f1f5f9;
        }

        .about-bridge-img {
          width: 100%;
          height: auto;
          max-height: 300px;
          object-fit: cover;
          object-position: center 25%;
          display: block;
        }

        /* Bridge Right 3 Category Items */
        .about-bridge-right {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .bridge-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .bridge-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #0056b3;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bridge-content h4 {
          font-size: 15px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 3px 0;
        }

        .bridge-content p {
          font-size: 12.5px;
          line-height: 1.45;
          color: #475569;
          margin: 0;
        }

        /* 4. WHAT WE DO (4 CARDS) */
        .about-what-section {
          padding: 26px 0 30px;
          background: #ffffff;
        }

        .about-section-header {
          text-align: center;
          margin-bottom: 22px;
        }

        .about-section-header h2 {
          font-size: 30px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .about-section-header p {
          font-size: 14px;
          color: #475569;
          max-width: 600px;
          margin: 0 auto;
        }

        .about-what-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .about-what-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .about-what-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
          border-color: #cbd5e1;
        }

        .what-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .what-icon-green {
          background: #dcfce7;
          color: #15803d;
        }

        .what-icon-purple {
          background: #ede9fe;
          color: #6d28d9;
        }

        .what-icon-blue {
          background: #e1effe;
          color: #0056b3;
        }

        .what-icon-amber {
          background: #fef3c7;
          color: #b45309;
        }

        .about-what-card h3 {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .about-what-card p {
          font-size: 12.5px;
          line-height: 1.5;
          color: #64748b;
          margin: 0;
        }

        /* 5. OUR IMPACT SECTION */
        .about-impact-section {
          padding: 26px 0 34px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
        }

        .about-impact-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr) auto;
          gap: 16px;
          align-items: center;
          margin-top: 20px;
        }

        .about-impact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .impact-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #0056b3;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          box-shadow: 0 2px 8px rgba(0, 86, 179, 0.2);
          transition: transform 0.2s ease;
        }

        .about-impact-item:hover .impact-icon-circle {
          transform: translateY(-2px);
        }

        .about-impact-item h4 {
          font-size: 14.5px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .about-impact-item p {
          font-size: 12px;
          color: #64748b;
          line-height: 1.4;
          margin: 0;
        }

        .about-impact-slogan {
          font-size: 20px;
          font-weight: 800;
          line-height: 1.15;
          color: #003fa8;
          font-style: italic;
          text-align: right;
          border-left: 2px solid #059669;
          padding-left: 14px;
          margin-left: 8px;
        }

        /* 6. BOTTOM CTA BANNER */
        .about-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 30px 20px;
          text-align: center;
          overflow: hidden;
        }

        .about-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 12% 35%, rgba(0, 140, 255, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 88% 65%, rgba(0, 140, 255, 0.2) 0%, transparent 40%);
          pointer-events: none;
        }

        .about-cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
        }

        .about-cta-content h2 {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .about-cta-content p {
          font-size: 14px;
          color: #cbd5e1;
          margin: 0 0 16px 0;
        }

        .about-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-cta-green-about {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #059669;
          color: #ffffff;
          padding: 10px 24px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
          transition: all 0.2s ease;
        }

        .btn-cta-green-about:hover {
          background: #10b981;
          transform: translateY(-1px);
        }

        .btn-cta-secondary-about {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
        }

        .btn-cta-secondary-about:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #ffffff;
          transform: translateY(-1px);
        }

        /* FULL RESPONSIVENESS: DESKTOP, TABLET (PORTRAIT & LANDSCAPE), MOBILE */
        @media (max-width: 1040px) {
          .about-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-hero-left {
            align-items: center;
          }
          .about-hero-buttons {
            justify-content: center;
          }
          .about-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-bridge-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-bridge-left {
            max-width: 600px;
            margin: 0 auto;
          }
          .about-bridge-right {
            max-width: 500px;
            margin: 0 auto;
            text-align: left;
          }
          .about-what-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-impact-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .about-impact-slogan {
            grid-column: span 2;
            text-align: center;
            border-left: none;
            border-top: 2px solid #059669;
            padding-top: 12px;
            padding-left: 0;
            margin-left: 0;
          }
        }

        @media (max-width: 640px) {
          .about-hero-title {
            font-size: 32px;
          }
          .about-pillars-grid {
            grid-template-columns: 1fr;
          }
          .about-what-grid {
            grid-template-columns: 1fr;
          }
          .about-impact-row {
            grid-template-columns: 1fr;
          }
          .about-impact-slogan {
            grid-column: span 1;
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/Aboutus.png (ALL 5 FACES FULLY IN FRAME) */}
      <section className="about-hero-section">
        <div className="about-container">
          <div className="about-hero-grid">
            {/* Left Hero Content */}
            <div className="about-hero-left">
              <span className="about-hero-badge">ABOUT US</span>
              <h1 className="about-hero-title">
                Training Minds<br />
                Innovating Solutions
              </h1>
              <div className="about-hero-subtitle">
                Empowering learners. Enabling institutions.<br />
                Building a smarter, brighter future.
              </div>
              <p className="about-hero-desc">
                Founded in 2025, Advaitecs is dedicated to providing skill education courses, innovative tools, and training programs for schools, colleges, and enterprises. We prepare students, college graduates, and professionals with the essential skills for the future in AI and emerging technologies.
              </p>
              <div className="about-hero-buttons">
                <Link href="/trainingprograms" className="btn-about-primary">
                  <span>Our Programs</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contactus" className="btn-about-secondary">
                  <span>Contact Us</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Hero Image (All 5 faces, books and slogans in full view) */}
            <div className="about-hero-img-wrap">
              <Image
                src="/images/Aboutus.png"
                alt="Advaitecs team collaborating and learning together"
                width={850}
                height={480}
                priority
                className="about-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PILLARS SECTION (OUR VISION, OUR MISSION, OUR VALUES, OUR PURPOSE) */}
      <section className="about-pillars-section">
        <div className="about-container">
          <div className="about-pillars-grid">
            {/* Card 1: Our Vision */}
            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Target size={22} strokeWidth={2.2} />
              </div>
              <h3>Our Vision</h3>
              <p>To provide skill education courses, tools and training programs for schools, colleges and enterprises.</p>
            </div>

            {/* Card 2: Our Mission */}
            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Rocket size={22} strokeWidth={2.2} />
              </div>
              <h3>Our Mission</h3>
              <p>To empower learners with future-ready skills through innovative education, technology and practical training.</p>
            </div>

            {/* Card 3: Our Values */}
            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Diamond size={22} strokeWidth={2.2} />
              </div>
              <h3>Our Values</h3>
              <p>
                Learner success &nbsp;|&nbsp; Innovation<br />
                Integrity &nbsp;|&nbsp; Inclusivity<br />
                Real-world impact
              </p>
            </div>

            {/* Card 4: Our Purpose */}
            <div className="about-pillar-card">
              <div className="pillar-icon-box">
                <Users size={22} strokeWidth={2.2} />
              </div>
              <h3>Our Purpose</h3>
              <p>To prepare students, college graduates and professionals with the necessary skills to thrive in an AI-driven world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRIDGING EDUCATION AND REAL-WORLD OPPORTUNITIES (WITH Aboutus2.png) */}
      <section className="about-bridge-section">
        <div className="about-container">
          <div className="about-bridge-grid">
            {/* Left Column */}
            <div className="about-bridge-left">
              <h2>
                Bridging Education and<br />
                Real-World Opportunities
              </h2>
              <p>
                We combine industry expertise, modern technologies, and hands-on learning to create programs that are relevant, practical, and impactful for today&apos;s learners and tomorrow&apos;s workforce.
              </p>
              <Link href="/trainingprograms" className="btn-about-primary">
                <span>Our Story</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Middle Column: Aboutus2.png with face fully in frame */}
            <div className="about-bridge-img-wrap">
              <Image
                src="/images/Aboutus2.png"
                alt="A Brighter Future Through Learning - Advaitecs student"
                width={500}
                height={350}
                className="about-bridge-img"
              />
            </div>

            {/* Right Column: 3 Audiences */}
            <div className="about-bridge-right">
              {/* For Schools */}
              <div className="bridge-item">
                <div className="bridge-icon-circle">
                  <GraduationCap size={20} />
                </div>
                <div className="bridge-content">
                  <h4>For Schools</h4>
                  <p>Foundational AI and Coding skills for future-ready students</p>
                </div>
              </div>

              {/* For Colleges */}
              <div className="bridge-item">
                <div className="bridge-icon-circle">
                  <Building2 size={20} />
                </div>
                <div className="bridge-content">
                  <h4>For Colleges</h4>
                  <p>Practical training for engineering and computer science students and educators</p>
                </div>
              </div>

              {/* For Enterprises */}
              <div className="bridge-item">
                <div className="bridge-icon-circle">
                  <Briefcase size={20} />
                </div>
                <div className="bridge-content">
                  <h4>For Enterprises</h4>
                  <p>Customized upskilling programs for professionals and teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO (4 CARDS) */}
      <section className="about-what-section">
        <div className="about-container">
          <div className="about-section-header">
            <h2>What We Do</h2>
            <p>End-to-end solutions for AI and skill education</p>
          </div>

          <div className="about-what-grid">
            {/* Card 1 */}
            <div className="about-what-card">
              <div className="what-icon-box what-icon-green">
                <Settings size={22} strokeWidth={2.2} />
              </div>
              <h3>Skill Education Programs</h3>
              <p>Courses in AI, Coding, Full Stack, Cloud, and more for students, graduates and professionals.</p>
            </div>

            {/* Card 2 */}
            <div className="about-what-card">
              <div className="what-icon-box what-icon-purple">
                <Monitor size={22} strokeWidth={2.2} />
              </div>
              <h3>SkaiMitra LMS Platform</h3>
              <p>A comprehensive learning platform with content, assignments, assessments, progress tracking and AI-powered assistance.</p>
            </div>

            {/* Card 3 */}
            <div className="about-what-card">
              <div className="what-icon-box what-icon-blue">
                <Users size={22} strokeWidth={2.2} />
              </div>
              <h3>Workshops &amp; Training</h3>
              <p>Hands-on, industry-focused workshops for schools, colleges and enterprises.</p>
            </div>

            {/* Card 4 */}
            <div className="about-what-card">
              <div className="what-icon-box what-icon-amber">
                <Lightbulb size={22} strokeWidth={2.2} />
              </div>
              <h3>Innovation &amp; Impact</h3>
              <p>Real-world projects, industry collaboration and continuous learning for lifelong growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR IMPACT (4 AUDIENCES + SLOGAN) */}
      <section className="about-impact-section">
        <div className="about-container">
          <div className="about-section-header">
            <h2>Our Impact</h2>
            <p>Building future-ready learners and professionals</p>
          </div>

          <div className="about-impact-row">
            {/* Students */}
            <div className="about-impact-item">
              <div className="impact-icon-circle">
                <Users size={22} strokeWidth={2.2} />
              </div>
              <h4>Students</h4>
              <p>Future-ready skills for tomorrow</p>
            </div>

            {/* Educators */}
            <div className="about-impact-item">
              <div className="impact-icon-circle">
                <GraduationCap size={22} strokeWidth={2.2} />
              </div>
              <h4>Educators</h4>
              <p>Empowered with modern teaching tools</p>
            </div>

            {/* Institutions */}
            <div className="about-impact-item">
              <div className="impact-icon-circle">
                <Building2 size={22} strokeWidth={2.2} />
              </div>
              <h4>Institutions</h4>
              <p>Schools, colleges and enterprises supported</p>
            </div>

            {/* Opportunities */}
            <div className="about-impact-item">
              <div className="impact-icon-circle">
                <Trophy size={22} strokeWidth={2.2} />
              </div>
              <h4>Opportunities</h4>
              <p>Real-world skills for meaningful careers</p>
            </div>

            {/* Slogan */}
            <div className="about-impact-slogan">
              Learn<br />
              Create<br />
              Belong<br />
              Become
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="about-cta-banner">
        <div className="about-cta-content">
          <h2>Let&apos;s Build a Smarter Future Together</h2>
          <p>Partner with us to bring high-quality AI and skill education to your students, teams and communities.</p>
          <div className="about-cta-buttons">
            <Link href="/contactus" className="btn-cta-green-about">
              <span>Get Started</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/contactus" className="btn-cta-secondary-about">
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
