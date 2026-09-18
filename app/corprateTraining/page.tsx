'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BookOpen, 
  Users, 
  Settings, 
  BarChart2, 
  ArrowRight, 
  Code2, 
  Brain, 
  Check, 
  CheckCircle2, 
  Target, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Monitor, 
  HeartPulse, 
  TrendingUp, 
  Factory, 
  ShoppingCart, 
  GraduationCap, 
  Landmark, 
  MoreHorizontal 
} from 'lucide-react';

export default function CorporateTrainingPage() {
  return (
    <div className="corp-page-wrapper">
      <style>{`
        .corp-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .corp-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* 1. HERO SECTION */
        .corp-hero-section {
          background: #ffffff;
          padding: 20px 0 24px;
          border-bottom: 1px solid #f1f5f9;
        }

        .corp-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 28px;
          align-items: center;
        }

        .corp-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .corp-hero-badge {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 6px;
        }

        .corp-hero-title {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 10px 0;
        }

        .corp-hero-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 18px 0;
          max-width: 520px;
        }

        .corp-hero-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 16px;
          margin-bottom: 22px;
          width: 100%;
          max-width: 500px;
        }

        .corp-hero-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          font-weight: 700;
          color: #1e293b;
        }

        .corp-hero-feature-icon {
          color: #0056b3;
          flex-shrink: 0;
        }

        .corp-hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-corp-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0056b3;
          color: #ffffff;
          padding: 11px 22px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(0, 86, 179, 0.25);
          transition: all 0.2s ease;
        }

        .btn-corp-primary:hover {
          background: #003fa8;
          transform: translateY(-1px);
        }

        .btn-corp-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #0056b3;
          padding: 11px 22px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          border: 1.5px solid #cbd5e1;
          transition: all 0.2s ease;
        }

        .btn-corp-outline:hover {
          border-color: #0056b3;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        /* Hero Image Container: Full natural fit so faces are 100% visible */
        .corp-hero-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .corp-hero-img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
          display: block;
          border-radius: 10px;
        }

        /* 2. PROGRAM CARDS (FULL-STACK & AI DEVELOPER) */
        .corp-programs-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .corp-programs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .corp-program-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }

        .corp-program-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 6px 20px rgba(0, 86, 179, 0.06);
        }

        .corp-prog-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 12px;
        }

        .corp-prog-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          flex-shrink: 0;
        }

        .corp-prog-icon-box.blue {
          background: #0284c7;
        }

        .corp-prog-icon-box.purple {
          background: #7c3aed;
        }

        .corp-prog-title-group h3 {
          font-size: 20px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 2px 0;
        }

        .corp-prog-title-group .tagline {
          font-size: 13.5px;
          font-weight: 700;
          color: #0369a1;
          margin: 0;
        }

        .corp-program-card.purple .corp-prog-title-group .tagline {
          color: #6d28d9;
        }

        .corp-prog-desc {
          font-size: 13px;
          line-height: 1.5;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .corp-topics-box {
          border-radius: 10px;
          padding: 14px 16px;
          margin-top: auto;
        }

        .corp-topics-box.blue-bg {
          background: #f0f9ff;
          border: 1px solid #e0f2fe;
        }

        .corp-topics-box.purple-bg {
          background: #faf5ff;
          border: 1px solid #f3e8ff;
        }

        .corp-topics-box h4 {
          font-size: 12.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .corp-topics-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .corp-topic-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #334155;
        }

        .corp-topic-item svg {
          color: #0284c7;
          flex-shrink: 0;
        }

        .corp-program-card.purple .corp-topic-item svg {
          color: #7c3aed;
        }

        /* 3. WHY CHOOSE ADVAITECS FOR CORPORATE TRAINING (5 COLUMNS) */
        .corp-why-section {
          padding: 24px 0 26px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .corp-section-header {
          text-align: center;
          margin-bottom: 22px;
        }

        .corp-section-header h2 {
          font-size: 28px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .corp-why-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        .corp-why-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }

        .corp-why-card:hover {
          transform: translateY(-2px);
          border-color: #0056b3;
          box-shadow: 0 4px 14px rgba(0, 86, 179, 0.08);
        }

        .corp-why-icon {
          color: #0056b3;
          margin-bottom: 10px;
        }

        .corp-why-card h3 {
          font-size: 13.5px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .corp-why-card p {
          font-size: 11.5px;
          line-height: 1.45;
          color: #64748b;
          margin: 0;
        }

        /* 4. EMPOWER YOUR TEAM FOR WHAT'S NEXT (IMAGE + BULLETS) */
        .corp-empower-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .corp-empower-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 28px;
          align-items: center;
        }

        .corp-empower-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .corp-empower-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
          border-radius: 10px;
        }

        .corp-empower-content {
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .corp-empower-content h2 {
          font-size: 26px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 6px 0;
          letter-spacing: -0.015em;
        }

        .corp-empower-content p.subtitle {
          font-size: 13.5px;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .corp-empower-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 14px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .corp-empower-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          line-height: 1.45;
          color: #334155;
        }

        .corp-empower-item svg {
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .corp-script-badge {
          display: inline-block;
          font-size: 16px;
          font-weight: 800;
          font-style: italic;
          color: #003fa8;
          margin-top: 10px;
          letter-spacing: 0.02em;
          text-align: right;
        }

        /* 5. OUR TRAINING ENGAGEMENT PROCESS (5 STEPS + CONNECTORS) */
        .corp-process-section {
          padding: 24px 0 28px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .corp-process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          align-items: flex-start;
          position: relative;
        }

        .corp-process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px 6px;
          position: relative;
        }

        .corp-step-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #0056b3;
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          box-shadow: 0 2px 8px rgba(0, 86, 179, 0.25);
        }

        .corp-process-step h3 {
          font-size: 14.5px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .corp-process-step p {
          font-size: 11.5px;
          line-height: 1.4;
          color: #64748b;
          margin: 0;
        }

        .corp-process-arrow {
          position: absolute;
          right: -10px;
          top: 16px;
          color: #94a3b8;
          display: none;
        }

        /* 6. INDUSTRIES WE SERVE (8 ITEMS) */
        .corp-industries-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .corp-industries-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 10px;
        }

        .corp-industry-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 14px 4px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.2s ease;
        }

        .corp-industry-card:hover {
          border-color: #0056b3;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 86, 179, 0.08);
        }

        .corp-industry-icon {
          color: #0056b3;
          margin-bottom: 8px;
        }

        .corp-industry-name {
          font-size: 11px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.25;
        }

        /* 7. BOTTOM CTA BANNER */
        .corp-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 30px 20px;
          text-align: center;
          overflow: hidden;
        }

        .corp-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 12% 35%, rgba(0, 140, 255, 0.22) 0%, transparent 42%),
            radial-gradient(circle at 88% 65%, rgba(0, 140, 255, 0.22) 0%, transparent 42%);
          pointer-events: none;
        }

        .corp-cta-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
        }

        .corp-cta-banner h2 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 6px 0;
          color: #ffffff;
          letter-spacing: -0.015em;
        }

        .corp-cta-banner p {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0 0 18px 0;
        }

        .corp-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-cta-green-prop {
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

        .btn-cta-green-prop:hover {
          background: #10b981;
          transform: translateY(-1px);
        }

        .btn-cta-contact-outline {
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

        .btn-cta-contact-outline:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #ffffff;
          transform: translateY(-1px);
        }

        /* RESPONSIVE BREAKPOINTS (DESKTOP, TABLET, MOBILE) */
        @media (max-width: 1040px) {
          .corp-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .corp-hero-left {
            align-items: center;
          }
          .corp-hero-features-grid {
            margin-left: auto;
            margin-right: auto;
          }
          .corp-hero-buttons {
            justify-content: center;
          }
          .corp-programs-grid {
            grid-template-columns: 1fr;
          }
          .corp-why-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .corp-empower-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .corp-empower-content {
            align-items: center;
          }
          .corp-script-badge {
            text-align: center;
          }
          .corp-process-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .corp-industries-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 640px) {
          .corp-hero-title {
            font-size: 30px;
          }
          .corp-hero-features-grid {
            grid-template-columns: 1fr;
          }
          .corp-why-grid {
            grid-template-columns: 1fr;
          }
          .corp-process-grid {
            grid-template-columns: 1fr;
          }
          .corp-industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/careertraining1.png (ALL FACES FULLY VISIBLE) */}
      <section className="corp-hero-section">
        <div className="corp-container">
          <div className="corp-hero-grid">
            {/* Left Column */}
            <div className="corp-hero-left">
              <span className="corp-hero-badge">CORPORATE TRAINING</span>
              <h1 className="corp-hero-title">
                Future-Ready Teams<br />
                for an AI-Driven World
              </h1>
              <p className="corp-hero-desc">
                Customized training programs in Full-Stack Development and Artificial Intelligence to upskill your workforce and accelerate innovation.
              </p>

              {/* 4 Features 2x2 */}
              <div className="corp-hero-features-grid">
                <div className="corp-hero-feature-item">
                  <BookOpen size={18} className="corp-hero-feature-icon" />
                  <span>Industry-Relevant Curriculum</span>
                </div>
                <div className="corp-hero-feature-item">
                  <Users size={18} className="corp-hero-feature-icon" />
                  <span>Flexible Delivery Options</span>
                </div>
                <div className="corp-hero-feature-item">
                  <Settings size={18} className="corp-hero-feature-icon" />
                  <span>Hands-on Project Training</span>
                </div>
                <div className="corp-hero-feature-item">
                  <BarChart2 size={18} className="corp-hero-feature-icon" />
                  <span>Measurable Outcomes</span>
                </div>
              </div>

              {/* 2 Buttons */}
              <div className="corp-hero-buttons">
                <Link href="/contactus" className="btn-corp-primary">
                  <span>Request a Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contactus" className="btn-corp-outline">
                  <span>Schedule a Consultation</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: careertraining1.png with uncropped faces */}
            <div className="corp-hero-img-wrap">
              <Image
                src="/images/careertraining1.png"
                alt="Advaitecs corporate training team collaborating on laptop"
                width={850}
                height={480}
                priority
                className="corp-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM CARDS (FULL-STACK & AI DEVELOPER) */}
      <section className="corp-programs-section">
        <div className="corp-container">
          <div className="corp-programs-grid">
            {/* Card 1: Full-Stack Development Program */}
            <div className="corp-program-card">
              <div className="corp-prog-header">
                <div className="corp-prog-icon-box blue">
                  <Code2 size={24} />
                </div>
                <div className="corp-prog-title-group">
                  <h3>Full-Stack Development Program</h3>
                  <div className="tagline">Build. Deploy. Scale.</div>
                </div>
              </div>

              <p className="corp-prog-desc">
                Equip your teams with modern full-stack development skills to design, build, test and deploy scalable web and mobile applications using industry-leading technologies.
              </p>

              <div className="corp-topics-box blue-bg">
                <h4>Key Topics Include:</h4>
                <ul className="corp-topics-list">
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Frontend Development (React, TypeScript)</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Backend Development (Node.js, APIs)</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Databases (PostgreSQL)</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>DevOps, CI/CD &amp; Cloud Deployment</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Testing, QA and Best Practices</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Real-world Projects</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: AI Developer Program */}
            <div className="corp-program-card purple">
              <div className="corp-prog-header">
                <div className="corp-prog-icon-box purple">
                  <Brain size={24} />
                </div>
                <div className="corp-prog-title-group">
                  <h3>AI Developer Program</h3>
                  <div className="tagline">From Ideas to Intelligent Solutions</div>
                </div>
              </div>

              <p className="corp-prog-desc">
                Help your teams harness the power of Artificial Intelligence to solve real business problems and build next-generation applications.
              </p>

              <div className="corp-topics-box purple-bg">
                <h4>Key Topics Include:</h4>
                <ul className="corp-topics-list">
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>GenAI Concepts and Applications</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Prompt Engineering</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Python for AI/ML</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Data Processing and Model Development</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Building AI Applications (LLMs, APIs, RAG)</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Responsible AI and Ethics</span>
                  </li>
                  <li className="corp-topic-item">
                    <Check size={15} strokeWidth={2.5} />
                    <span>Real-world Projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE ADVAITECS FOR CORPORATE TRAINING (5 CARDS) */}
      <section className="corp-why-section">
        <div className="corp-container">
          <div className="corp-section-header">
            <h2>Why Choose Advaitecs for Corporate Training</h2>
          </div>

          <div className="corp-why-grid">
            <div className="corp-why-card">
              <Users size={28} className="corp-why-icon" />
              <h3>Customized for Your Needs</h3>
              <p>Tailored content, use cases and projects for your industry.</p>
            </div>

            <div className="corp-why-card">
              <Target size={28} className="corp-why-icon" />
              <h3>Practical &amp; Hands-on</h3>
              <p>Learn by building real solutions.</p>
            </div>

            <div className="corp-why-card">
              <TrendingUp size={28} className="corp-why-icon" />
              <h3>Experienced Trainers</h3>
              <p>Industry experts with real-world experience.</p>
            </div>

            <div className="corp-why-card">
              <Clock size={28} className="corp-why-icon" />
              <h3>Flexible Delivery</h3>
              <p>Onsite, online or hybrid – with schedules that work for you.</p>
            </div>

            <div className="corp-why-card">
              <ShieldCheck size={28} className="corp-why-icon" />
              <h3>Measurable Impact</h3>
              <p>Track learning outcomes and business value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMPOWER YOUR TEAM FOR WHAT'S NEXT (IMAGE + BULLETS) */}
      <section className="corp-empower-section">
        <div className="corp-container">
          <div className="corp-empower-grid">
            {/* Left: careertraining2.png */}
            <div className="corp-empower-img-wrap">
              <Image
                src="/images/careertraining2.png"
                alt="Advaitecs corporate instructor delivering interactive training"
                width={850}
                height={480}
                className="corp-empower-img"
              />
            </div>

            {/* Right: Content */}
            <div className="corp-empower-content">
              <h2>Empower Your Team for What&apos;s Next</h2>
              <p className="subtitle">Our corporate training programs are designed to help organizations:</p>

              <ul className="corp-empower-bullets">
                <li className="corp-empower-item">
                  <CheckCircle2 size={18} />
                  <span>Upskill existing teams on modern technologies</span>
                </li>
                <li className="corp-empower-item">
                  <CheckCircle2 size={18} />
                  <span>Drive innovation and improve productivity</span>
                </li>
                <li className="corp-empower-item">
                  <CheckCircle2 size={18} />
                  <span>Build internal capabilities for AI and digital transformation</span>
                </li>
                <li className="corp-empower-item">
                  <CheckCircle2 size={18} />
                  <span>Work on real business use cases and projects</span>
                </li>
                <li className="corp-empower-item">
                  <CheckCircle2 size={18} />
                  <span>Get ongoing support and post-training resources</span>
                </li>
              </ul>

              <div className="corp-script-badge">
                Invest in People Build a Brighter Tomorrow
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR TRAINING ENGAGEMENT PROCESS (5 STEPS) */}
      <section className="corp-process-section">
        <div className="corp-container">
          <div className="corp-section-header">
            <h2>Our Training Engagement Process</h2>
          </div>

          <div className="corp-process-grid">
            <div className="corp-process-step">
              <div className="corp-step-badge">1</div>
              <h3>Understand</h3>
              <p>We assess your goals and training needs.</p>
            </div>

            <div className="corp-process-step">
              <div className="corp-step-badge">2</div>
              <h3>Customize</h3>
              <p>We design a tailored program and plan.</p>
            </div>

            <div className="corp-process-step">
              <div className="corp-step-badge">3</div>
              <h3>Deliver</h3>
              <p>Engaging, hands-on training by experts.</p>
            </div>

            <div className="corp-process-step">
              <div className="corp-step-badge">4</div>
              <h3>Support</h3>
              <p>Ongoing guidance and learning resources.</p>
            </div>

            <div className="corp-process-step">
              <div className="corp-step-badge">5</div>
              <h3>Grow</h3>
              <p>Measure outcomes and plan next steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE (8 ITEMS) */}
      <section className="corp-industries-section">
        <div className="corp-container">
          <div className="corp-section-header">
            <h2>Industries We Serve</h2>
          </div>

          <div className="corp-industries-grid">
            <div className="corp-industry-card">
              <Monitor size={22} className="corp-industry-icon" />
              <span className="corp-industry-name">Technology</span>
            </div>

            <div className="corp-industry-card">
              <HeartPulse size={22} className="corp-industry-icon" />
              <span className="corp-industry-name">Healthcare</span>
            </div>

            <div className="corp-industry-card">
              <TrendingUp size={22} className="corp-industry-icon" />
              <span className="corp-industry-name">Financial Services</span>
            </div>

            <div className="corp-industry-card">
              <Factory size={22} className="corp-industry-icon" />
              <span className="corp-industry-name">Manufacturing</span>
            </div>

            <div className="corp-industry-card">
              <ShoppingCart size={22} className="corp-industry-icon" />
              <span className="corp-industry-name">Retail &amp; E-commerce</span>
            </div>

            <div className="corp-industry-card">
              <GraduationCap size={22} className="corp-industry-icon" />
              <span className="corp-industry-name">Education</span>
            </div>

            <div className="corp-industry-card">
              <Landmark size={22} className="corp-industry-icon" />
              <span className="corp-industry-name">Government</span>
            </div>

            <div className="corp-industry-card">
              <MoreHorizontal size={22} className="corp-industry-icon" />
              <span className="corp-industry-name">and more...</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="corp-cta-banner">
        <div className="corp-cta-content">
          <h2>Let&apos;s Build a Smarter, More Capable Team Together</h2>
          <p>Partner with Advaitecs for customized corporate training in Full-Stack and AI.</p>

          <div className="corp-cta-buttons">
            <Link href="/contactus" className="btn-cta-green-prop">
              <span>Request a Proposal</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/contactus" className="btn-cta-contact-outline">
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
