'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Handshake, 
  MapPin, 
  Briefcase, 
  Clock, 
  Award, 
  Brain, 
  GraduationCap, 
  Code2, 
  Mail, 
  ArrowRight, 
  Check, 
  FileText, 
  Search, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="careers-page-wrapper">
      <style>{`
        .careers-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .careers-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* 1. HERO SECTION */
        .careers-hero-section {
          background: #ffffff;
          padding: 20px 0 24px;
          border-bottom: 1px solid #f1f5f9;
        }

        .careers-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 24px;
          align-items: center;
        }

        .careers-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .careers-hero-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #059669;
          margin-bottom: 8px;
        }

        .careers-hero-title {
          font-size: 42px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .careers-hero-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: #475569;
          margin: 12px 0 20px 0;
          max-width: 500px;
        }

        .btn-send-resume-hero {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #0056b3;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          border: 1.5px solid #0056b3;
          transition: all 0.2s ease;
        }

        .btn-send-resume-hero:hover {
          background: #0056b3;
          color: #ffffff;
          transform: translateY(-1px);
        }

        /* Hero Image Container: Full natural fit so all 4 faces are completely visible */
        .careers-hero-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .careers-hero-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
          border-radius: 8px;
        }

        /* 2. WHY JOIN ADVAITECS? */
        .careers-why-section {
          padding: 28px 0 32px;
          background: #ffffff;
        }

        .careers-section-header {
          text-align: center;
          margin-bottom: 22px;
        }

        .careers-section-header h2 {
          font-size: 30px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .careers-section-header p {
          font-size: 14px;
          color: #475569;
          max-width: 650px;
          margin: 0 auto;
        }

        .careers-why-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .careers-why-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .careers-why-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
          background: #ffffff;
          border-color: #cbd5e1;
        }

        .why-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .why-icon-blue {
          background: #e1effe;
          color: #0056b3;
        }

        .why-icon-green {
          background: #dcfce7;
          color: #15803d;
        }

        .careers-why-card h3 {
          font-size: 14.5px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px 0;
        }

        .careers-why-card p {
          font-size: 12.5px;
          line-height: 1.45;
          color: #64748b;
          margin: 0;
        }

        /* 3. CURRENT OPENINGS */
        .careers-openings-section {
          padding: 28px 0 34px;
          background: #ffffff;
        }

        .careers-openings-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: stretch;
        }

        .job-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .job-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.05);
          border-color: #cbd5e1;
        }

        .job-header-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 14px;
        }

        .job-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .job-icon-ai {
          background: #ede9fe;
          color: #6d28d9;
        }

        .job-icon-intern {
          background: #dcfce7;
          color: #15803d;
        }

        .job-icon-fs {
          background: #0056b3;
          color: #ffffff;
        }

        .job-title-meta {
          display: flex;
          flex-direction: column;
        }

        .job-title-meta h3 {
          font-size: 16.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }

        .job-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #475569;
          margin-bottom: 3px;
        }

        .job-section-title {
          font-size: 13px;
          font-weight: 700;
          color: #003fa8;
          margin: 14px 0 8px 0;
        }

        .job-bullets-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .job-bullet {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 12.5px;
          line-height: 1.45;
          color: #334155;
        }

        .job-check-icon {
          color: #0056b3;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* 4. HOW TO APPLY BANNER */
        .careers-apply-banner {
          margin: 30px auto 34px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 28px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.025);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .apply-left-col {
          display: flex;
          align-items: center;
          gap: 18px;
          flex: 1.3;
        }

        .apply-mail-circle {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: #0056b3;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .apply-text-wrap h3 {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .apply-text-wrap p {
          font-size: 13px;
          color: #475569;
          line-height: 1.45;
          margin: 0;
        }

        .apply-vert-divider {
          width: 1px;
          height: 60px;
          background: #e2e8f0;
        }

        .apply-mid-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          flex: 1;
        }

        .apply-email-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 14px;
          font-weight: 700;
          color: #003fa8;
          text-decoration: none;
        }

        .apply-email-link:hover {
          color: #0056b3;
        }

        .btn-send-resume-banner {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0052cc;
          color: #ffffff;
          padding: 10px 22px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 13.5px;
          text-decoration: none;
          box-shadow: 0 3px 12px rgba(0, 82, 204, 0.25);
          transition: all 0.2s ease;
        }

        .btn-send-resume-banner:hover {
          background: #0043a8;
          transform: translateY(-1px);
        }

        .apply-right-callout {
          font-family: inherit;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.2;
          color: #003fa8;
          font-style: italic;
          text-align: right;
          border-left: 2px solid #059669;
          padding-left: 14px;
          flex: 0.8;
        }

        /* 5. OUR HIRING PROCESS */
        .careers-process-section {
          padding: 24px 0 36px;
          background: #ffffff;
        }

        .process-pipeline-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-top: 22px;
        }

        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          position: relative;
        }

        .process-icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0056b3;
          margin-bottom: 8px;
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
        }

        .process-step-num {
          position: absolute;
          top: -4px;
          left: -4px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0052cc;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .process-step:hover .process-icon-circle {
          border-color: #0052cc;
          background: #f8fafc;
          transform: translateY(-2px);
        }

        .process-step h4 {
          font-size: 14.5px;
          font-weight: 700;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .process-step p {
          font-size: 12px;
          color: #64748b;
          margin: 0;
          line-height: 1.4;
        }

        .process-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 14px;
          color: #94a3b8;
          flex-shrink: 0;
        }

        /* 6. BOTTOM CTA BANNER */
        .careers-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 30px 20px;
          overflow: hidden;
        }

        .careers-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 12% 35%, rgba(0, 140, 255, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 88% 65%, rgba(0, 140, 255, 0.2) 0%, transparent 40%);
          pointer-events: none;
        }

        .careers-cta-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .careers-cta-left h2 {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .careers-cta-left p {
          font-size: 14px;
          color: #cbd5e1;
          margin: 0;
          max-width: 680px;
        }

        .careers-cta-watermark {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.15;
          color: rgba(255, 255, 255, 0.7);
          text-align: right;
          font-style: italic;
          letter-spacing: 0.02em;
        }

        @media (max-width: 1040px) {
          .careers-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .careers-hero-left {
            align-items: center;
          }
          .careers-why-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .careers-openings-grid {
            grid-template-columns: 1fr;
          }
          .careers-apply-banner {
            flex-direction: column;
            text-align: center;
          }
          .apply-left-col {
            flex-direction: column;
          }
          .apply-vert-divider {
            display: none;
          }
          .apply-mid-col {
            align-items: center;
          }
          .apply-right-callout {
            text-align: center;
            border-left: none;
            border-top: 2px solid #059669;
            padding-top: 10px;
          }
          .process-pipeline-row {
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }
          .process-arrow {
            transform: rotate(90deg);
            padding: 0;
          }
          .careers-cta-content {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
          .careers-cta-watermark {
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .careers-why-grid {
            grid-template-columns: 1fr;
          }
          .careers-hero-title {
            font-size: 32px;
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/careers.png (ALL FACES FULLY IN FRAME) */}
      <section className="careers-hero-section">
        <div className="careers-container">
          <div className="careers-hero-grid">
            {/* Left Hero Content */}
            <div className="careers-hero-left">
              <span className="careers-hero-badge">CAREERS AT ADVAITECS</span>
              <h1 className="careers-hero-title">
                Build Skills.<br />
                Create Impact.<br />
                Grow With Us.
              </h1>
              <p className="careers-hero-desc">
                Join a passionate team working on AI, skill education, training and technology solutions to create a smarter, brighter future.
              </p>
              <a href="#openings" className="btn-send-resume-hero">
                <span>Send Your Resume</span>
              </a>
            </div>

            {/* Right Hero Image (All 4 faces and office background fully visible) */}
            <div className="careers-hero-img-wrap">
              <Image
                src="/images/careers.png"
                alt="Advaitecs team collaborating in the office"
                width={850}
                height={480}
                priority
                className="careers-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY JOIN ADVAITECS? (5 BENEFIT CARDS) */}
      <section className="careers-why-section">
        <div className="careers-container">
          <div className="careers-section-header">
            <h2>Why Join Advaitecs?</h2>
            <p>Be part of a mission to empower learners with future-ready skills through technology and education.</p>
          </div>

          <div className="careers-why-grid">
            {/* Card 1 */}
            <div className="careers-why-card">
              <div className="why-icon-box why-icon-blue">
                <Users size={22} strokeWidth={2.2} />
              </div>
              <h3>Meaningful Work</h3>
              <p>Contribute to real-world solutions in AI, education and technology.</p>
            </div>

            {/* Card 2 */}
            <div className="careers-why-card">
              <div className="why-icon-box why-icon-green">
                <TrendingUp size={22} strokeWidth={2.2} />
              </div>
              <h3>Continuous Learning</h3>
              <p>Work on new technologies and enhance your skills every day.</p>
            </div>

            {/* Card 3 */}
            <div className="careers-why-card">
              <div className="why-icon-box why-icon-blue">
                <Lightbulb size={22} strokeWidth={2.2} />
              </div>
              <h3>Hands-on Innovation</h3>
              <p>Build, experiment and solve interesting problems.</p>
            </div>

            {/* Card 4 */}
            <div className="careers-why-card">
              <div className="why-icon-box why-icon-green">
                <Users size={22} strokeWidth={2.2} />
              </div>
              <h3>Growth Opportunities</h3>
              <p>Advance your career with new challenges and expanded responsibilities.</p>
            </div>

            {/* Card 5 */}
            <div className="careers-why-card">
              <div className="why-icon-box why-icon-blue">
                <Handshake size={22} strokeWidth={2.2} />
              </div>
              <h3>Collaborative Culture</h3>
              <p>Work with a supportive and talented team that values your ideas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURRENT OPENINGS (3 CARDS) */}
      <section id="openings" className="careers-openings-section">
        <div className="careers-container">
          <div className="careers-section-header">
            <h2>Current Openings</h2>
            <p>Explore opportunities to work on exciting projects in AI and Cloud technologies.</p>
          </div>

          <div className="careers-openings-grid">
            {/* Card 1: AI Trainer & Development Support */}
            <div className="job-card">
              <div className="job-header-row">
                <div className="job-icon-box job-icon-ai">
                  <Brain size={24} strokeWidth={2.2} />
                </div>
                <div className="job-title-meta">
                  <h3>AI Trainer &amp; Development Support</h3>
                  <div className="job-meta-item">
                    <MapPin size={13} />
                    <span>Vijayawada / Vizag, Andhra Pradesh</span>
                  </div>
                  <div className="job-meta-item">
                    <Briefcase size={13} />
                    <span>3 – 5 years</span>
                  </div>
                  <div className="job-meta-item">
                    <Clock size={13} />
                    <span>Full-time, Permanent</span>
                  </div>
                </div>
              </div>

              <div className="job-section-title">Key Responsibilities</div>
              <ul className="job-bullets-list">
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Conduct training on Python, Machine Learning and AI tools</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Guide students in workshops and live projects</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Develop course materials and assessments</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Provide support for AI/ML model development</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Research and explore new AI/ML technologies</span>
                </li>
              </ul>

              <div className="job-section-title">Required Skills</div>
              <ul className="job-bullets-list">
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Python, Machine Learning, AI/ML workflows</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Node.js, Angular or React</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Data pipelines and automation</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Strong communication and mentoring skills</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Relevant degree in Computer Science, Data Science or AI</span>
                </li>
              </ul>
            </div>

            {/* Card 2: AI Intern */}
            <div className="job-card">
              <div className="job-header-row">
                <div className="job-icon-box job-icon-intern">
                  <GraduationCap size={24} strokeWidth={2.2} />
                </div>
                <div className="job-title-meta">
                  <h3>AI Intern</h3>
                  <div className="job-meta-item">
                    <MapPin size={13} />
                    <span>Vijayawada, Andhra Pradesh</span>
                  </div>
                  <div className="job-meta-item">
                    <Clock size={13} />
                    <span>6 months (Potential full-time role based on performance)</span>
                  </div>
                  <div className="job-meta-item">
                    <Award size={13} />
                    <span>Internship certificate provided</span>
                  </div>
                </div>
              </div>

              <div className="job-section-title">Key Responsibilities</div>
              <ul className="job-bullets-list">
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Assist with AI/ML model design, development and deployment</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Work on data preprocessing and feature engineering</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Research and test machine learning algorithms</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Evaluate and optimize model performance</span>
                </li>
              </ul>

              <div className="job-section-title">Required Skills</div>
              <ul className="job-bullets-list">
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Final-year or recent graduate in CS, AI, Data Science or related field</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Python, NumPy, Pandas, Scikit-learn</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>TensorFlow or PyTorch (preferred)</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Understanding of ML concepts and statistics</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Strong analytical and team working skills</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Full Stack Trainer */}
            <div className="job-card">
              <div className="job-header-row">
                <div className="job-icon-box job-icon-fs">
                  <Code2 size={24} strokeWidth={2.2} />
                </div>
                <div className="job-title-meta">
                  <h3>Full Stack Trainer</h3>
                  <div className="job-meta-item">
                    <MapPin size={13} />
                    <span>Vijayawada, Andhra Pradesh (On-site only)</span>
                  </div>
                  <div className="job-meta-item">
                    <Briefcase size={13} />
                    <span>3 – 5 years</span>
                  </div>
                  <div className="job-meta-item">
                    <Clock size={13} />
                    <span>Full-time, Permanent</span>
                  </div>
                </div>
              </div>

              <div className="job-section-title">Key Responsibilities</div>
              <ul className="job-bullets-list">
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Conduct training on full-stack development (MERN/MEAN or similar stack)</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Develop training materials, labs and project modules</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Guide students in hands-on projects and assessments</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Update curriculum with latest industry technologies</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Help students with certification and project readiness</span>
                </li>
              </ul>

              <div className="job-section-title">Required Skills</div>
              <ul className="job-bullets-list">
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Strong expertise in React, Node.js, TypeScript/JavaScript</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Databases (PostgreSQL or MongoDB)</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>API development and deployment</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Good communication and mentoring skills</span>
                </li>
                <li className="job-bullet">
                  <Check size={14} className="job-check-icon" />
                  <span>Relevant degree in Computer Science or IT</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4. HOW TO APPLY BANNER */}
          <div className="careers-apply-banner">
            <div className="apply-left-col">
              <div className="apply-mail-circle">
                <Mail size={26} strokeWidth={2.2} />
              </div>
              <div className="apply-text-wrap">
                <h3>How to Apply</h3>
                <p>Send your updated resume to our HR team. Please mention the position you are applying for in the subject line.</p>
              </div>
            </div>

            <div className="apply-vert-divider" />

            <div className="apply-mid-col">
              <a href="mailto:hr@advaitecs.com" className="apply-email-link">
                <Mail size={16} />
                <span>hr@advaitecs.com</span>
              </a>
              <a href="mailto:hr@advaitecs.com?subject=Job Application" className="btn-send-resume-banner">
                <span>Send Your Resume</span>
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="apply-right-callout">
              Great<br />
              People Build<br />
              Extraordinary<br />
              Futures
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR HIRING PROCESS (4 STEPS) */}
      <section className="careers-process-section">
        <div className="careers-container">
          <div className="careers-section-header">
            <h2>Our Hiring Process</h2>
          </div>

          <div className="process-pipeline-row">
            {/* Step 1 */}
            <div className="process-step">
              <div className="process-icon-circle">
                <span className="process-step-num">1</span>
                <FileText size={22} strokeWidth={2} />
              </div>
              <h4>Apply</h4>
              <p>Send your resume</p>
            </div>

            <div className="process-arrow">
              <ChevronRight size={20} />
            </div>

            {/* Step 2 */}
            <div className="process-step">
              <div className="process-icon-circle">
                <span className="process-step-num">2</span>
                <Search size={22} strokeWidth={2} />
              </div>
              <h4>Resume Review</h4>
              <p>We review your profile</p>
            </div>

            <div className="process-arrow">
              <ChevronRight size={20} />
            </div>

            {/* Step 3 */}
            <div className="process-step">
              <div className="process-icon-circle">
                <span className="process-step-num">3</span>
                <Users size={22} strokeWidth={2} />
              </div>
              <h4>Interview</h4>
              <p>Shortlisted candidates will be contacted</p>
            </div>

            <div className="process-arrow">
              <ChevronRight size={20} />
            </div>

            {/* Step 4 */}
            <div className="process-step">
              <div className="process-icon-circle">
                <span className="process-step-num">4</span>
                <CheckCircle2 size={22} strokeWidth={2} />
              </div>
              <h4>Join Our Team</h4>
              <p>Start your journey with Advaitecs</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="careers-cta-banner">
        <div className="careers-cta-content">
          <div className="careers-cta-left">
            <h2>Let&apos;s Build a Smarter, More Inclusive Future</h2>
            <p>Join Advaitecs and be part of a team that believes in the power of education, technology and people.</p>
          </div>
          <div className="careers-cta-watermark">
            Skills<br />
            People<br />
            Better Tomorrow
          </div>
        </div>
      </section>
    </div>
  );
}
