'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  MessageCircle, 
  Brain, 
  Code2, 
  BookOpen, 
  Code, 
  Box, 
  CheckCircle2, 
  Rocket, 
  ChevronRight, 
  Users, 
  ClipboardCheck, 
  Layers, 
  BarChart3, 
  GraduationCap, 
  Monitor, 
  Building2 
} from 'lucide-react';

export default function TrainingProgramsPage() {
  return (
    <div className="programs-page-wrapper">
      <style>{`
        .programs-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .programs-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* 1. HERO SECTION */
        .tp-hero-section {
          background: #ffffff;
          padding: 16px 0 20px;
          border-bottom: 1px solid #f1f5f9;
        }

        .tp-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.18fr;
          gap: 20px;
          align-items: center;
        }

        .tp-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .tp-hero-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 6px;
        }

        .tp-hero-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .tp-hero-title-highlight {
          color: #0056b3;
        }

        .tp-hero-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: #475569;
          margin: 10px 0 18px 0;
          max-width: 500px;
        }

        .tp-hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-explore-programs {
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
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(0, 82, 204, 0.25);
        }

        .btn-explore-programs:hover {
          background: #0043a8;
          transform: translateY(-1px);
        }

        .btn-talk-advisor {
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

        .btn-talk-advisor:hover {
          border-color: #0056b3;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        /* Hero Image - Natural ratio so all 4 faces are completely visible */
        .tp-hero-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .tp-hero-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
          border-radius: 8px;
        }

        /* 2. CHOOSE YOUR CAREER PATH */
        .tp-paths-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .tp-section-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .tp-section-header h2 {
          font-size: 30px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .tp-section-header h2 span {
          color: #0056b3;
        }

        .tp-section-header p {
          font-size: 14px;
          color: #475569;
          max-width: 650px;
          margin: 0 auto;
        }

        .tp-paths-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .tp-path-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 22px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.025);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .tp-path-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
          border-color: #cbd5e1;
        }

        .tp-path-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .tp-path-icon-title {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .tp-path-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tp-path-icon-ai {
          background: #e1effe;
          color: #0056b3;
        }

        .tp-path-icon-fs {
          background: #dcfce7;
          color: #15803d;
        }

        .tp-path-title-wrap h3 {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .tp-duration-badge {
          font-size: 11.5px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 9999px;
          letter-spacing: 0.02em;
        }

        .badge-ai-duration {
          background: #e0edff;
          color: #0056b3;
        }

        .badge-fs-duration {
          background: #dcfce7;
          color: #15803d;
        }

        .tp-path-subtitle {
          font-size: 14px;
          color: #334155;
          margin-bottom: 12px;
          line-height: 1.45;
        }

        .tp-tech-tags-line {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.55;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .btn-view-program {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #0052cc;
          color: #ffffff;
          padding: 9px 20px;
          border-radius: 7px;
          font-weight: 600;
          font-size: 13.5px;
          text-decoration: none;
          transition: all 0.2s ease;
          align-self: flex-start;
        }

        .btn-view-program:hover {
          background: #0043a8;
          transform: translateY(-1px);
        }

        /* 3. LEARN BY BUILDING (PIPELINE) */
        .tp-pipeline-section {
          padding: 24px 0 28px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .tp-pipeline-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-top: 20px;
        }

        .tp-pipeline-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          max-width: 190px;
        }

        .tp-step-icon-circle {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0056b3;
          margin-bottom: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
        }

        .tp-pipeline-step:hover .tp-step-icon-circle {
          border-color: #0056b3;
          transform: translateY(-2px);
          background: #eef5ff;
        }

        .tp-step-name {
          font-size: 14.5px;
          font-weight: 700;
          color: #003fa8;
          margin-bottom: 4px;
        }

        .tp-step-desc {
          font-size: 12px;
          color: #64748b;
          line-height: 1.45;
        }

        .tp-pipeline-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 12px;
          color: #94a3b8;
          flex-shrink: 0;
        }

        /* 4. PROGRAM COMPARISON TABLE */
        .tp-comparison-section {
          padding: 26px 0 30px;
          background: #ffffff;
        }

        .tp-table-wrap {
          margin-top: 20px;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.02);
        }

        .tp-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .tp-table thead tr {
          border-bottom: 1.5px solid #cbd5e1;
        }

        .tp-table th {
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 700;
        }

        .th-feature {
          width: 22%;
          background: #f8fafc;
          color: #0f172a;
        }

        .th-ai {
          width: 39%;
          background: #eef5ff;
          color: #0056b3;
          border-left: 1px solid #cbd5e1;
        }

        .th-ai-inner {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .th-fs {
          width: 39%;
          background: #ecfdf5;
          color: #047857;
          border-left: 1px solid #cbd5e1;
        }

        .th-fs-inner {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tp-table tbody tr {
          border-bottom: 1px solid #e2e8f0;
        }

        .tp-table tbody tr:last-child {
          border-bottom: none;
        }

        .tp-table td {
          padding: 10px 16px;
          font-size: 13px;
          line-height: 1.5;
          vertical-align: top;
        }

        .td-feature-title {
          font-weight: 700;
          color: #0f172a;
          background: #ffffff;
        }

        .td-ai-val {
          color: #334155;
          background: #ffffff;
          border-left: 1px solid #e2e8f0;
        }

        .td-fs-val {
          color: #334155;
          background: #ffffff;
          border-left: 1px solid #e2e8f0;
        }

        /* 5. WHAT YOU WILL EXPERIENCE (4 CARDS) */
        .tp-experience-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .tp-experience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .tp-exp-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .tp-exp-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
          border-color: #cbd5e1;
        }

        .tp-exp-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .exp-icon-1 {
          background: #e1effe;
          color: #0056b3;
        }

        .exp-icon-2 {
          background: #dcfce7;
          color: #15803d;
        }

        .exp-icon-3 {
          background: #ede9fe;
          color: #6d28d9;
        }

        .exp-icon-4 {
          background: #e0f2fe;
          color: #0284c7;
        }

        .tp-exp-card h3 {
          font-size: 14.5px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .tp-exp-card p {
          font-size: 12.5px;
          line-height: 1.45;
          color: #64748b;
          margin: 0;
        }

        /* 6. FLEXIBLE LEARNING OPTIONS (3 CARDS) */
        .tp-options-section {
          padding: 24px 0 30px;
          background: #ffffff;
        }

        .tp-options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 20px;
        }

        .tp-option-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .tp-option-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
          border-color: #cbd5e1;
        }

        .tp-option-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e1effe;
          color: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .tp-option-card h3 {
          font-size: 15.5px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .tp-option-card p {
          font-size: 13px;
          line-height: 1.45;
          color: #64748b;
          margin: 0;
        }

        /* 7. BOTTOM CTA BANNER */
        .tp-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 28px 20px;
          text-align: center;
          overflow: hidden;
        }

        .tp-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 12% 35%, rgba(0, 140, 255, 0.22) 0%, transparent 42%),
            radial-gradient(circle at 88% 65%, rgba(0, 140, 255, 0.22) 0%, transparent 42%);
          pointer-events: none;
        }

        .tp-cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
        }

        .tp-cta-content h2 {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .tp-cta-content p {
          font-size: 14px;
          color: #cbd5e1;
          margin: 0 0 16px 0;
        }

        .tp-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-cta-green-enroll {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #059669;
          color: #ffffff;
          padding: 11px 26px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
          transition: all 0.2s ease;
        }

        .btn-cta-green-enroll:hover {
          background: #10b981;
          transform: translateY(-1px);
        }

        .btn-cta-request-details {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 11px 26px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 14.5px;
          text-decoration: none;
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
        }

        .btn-cta-request-details:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #ffffff;
          transform: translateY(-1px);
        }

        @media (max-width: 1040px) {
          .tp-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .tp-hero-left {
            align-items: center;
          }
          .tp-hero-buttons {
            justify-content: center;
          }
          .tp-paths-grid {
            grid-template-columns: 1fr;
          }
          .tp-experience-grid {
            grid-template-columns: 1fr 1fr;
          }
          .tp-options-grid {
            grid-template-columns: 1fr;
          }
          .tp-pipeline-row {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .tp-pipeline-arrow {
            transform: rotate(90deg);
            padding: 0;
          }
        }

        @media (max-width: 640px) {
          .tp-hero-title {
            font-size: 32px;
          }
          .tp-experience-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/Trainingprograms (2).png (ALL FACES IN FULL FRAME) */}
      <section className="tp-hero-section">
        <div className="programs-container">
          <div className="tp-hero-grid">
            {/* Left Hero Content */}
            <div className="tp-hero-left">
              <span className="tp-hero-badge">SKILLS TRAINING PROGRAMS</span>
              <h1 className="tp-hero-title">
                Build Skills. Build Projects.<br />
                <span className="tp-hero-title-highlight">Build Your Career.</span>
              </h1>
              <p className="tp-hero-desc">
                Industry-focused, hands-on training programs designed to prepare graduates and professionals for real-world technology careers.
              </p>
              <div className="tp-hero-buttons">
                <a href="#career-paths" className="btn-explore-programs">
                  <span>Explore Programs</span>
                  <ArrowRight size={16} />
                </a>
                <Link href="/contactus" className="btn-talk-advisor">
                  <span>Talk to an Advisor</span>
                  <MessageCircle size={16} />
                </Link>
              </div>
            </div>

            {/* Right Hero Image (All 4 student faces fully visible) */}
            <div className="tp-hero-img-wrap">
              <Image
                src="/images/Trainingprograms (2).png"
                alt="Advaitecs students collaborating around a laptop and learning real-world technology"
                width={850}
                height={480}
                priority
                className="tp-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR CAREER PATH */}
      <section id="career-paths" className="tp-paths-section">
        <div className="programs-container">
          <div className="tp-section-header">
            <h2>Choose Your <span>Career Path</span></h2>
            <p>Two industry-focused programs to help you build in-demand skills and launch your technology career.</p>
          </div>

          <div className="tp-paths-grid">
            {/* Card 1: AI Career Ready */}
            <div className="tp-path-card">
              <div className="tp-path-top-row">
                <div className="tp-path-icon-title">
                  <div className="tp-path-icon-box tp-path-icon-ai">
                    <Brain size={28} strokeWidth={2.2} />
                  </div>
                  <div className="tp-path-title-wrap">
                    <h3>AI Career Ready</h3>
                  </div>
                </div>
                <span className="tp-duration-badge badge-ai-duration">16 Weeks</span>
              </div>

              <div className="tp-path-subtitle">Build and deploy real-world AI applications.</div>

              <div className="tp-tech-tags-line">
                Python &nbsp;•&nbsp; Machine Learning &nbsp;•&nbsp; Generative AI &nbsp;•&nbsp; LLMs &nbsp;•&nbsp; APIs &nbsp;•&nbsp; RAG &nbsp;•&nbsp; AI Applications &nbsp;•&nbsp; Deployment
              </div>

              <Link href="/AIcareer" className="btn-view-program">
                <span>View AI Program</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Card 2: Full Stack Developer */}
            <div className="tp-path-card">
              <div className="tp-path-top-row">
                <div className="tp-path-icon-title">
                  <div className="tp-path-icon-box tp-path-icon-fs">
                    <Code2 size={28} strokeWidth={2.2} />
                  </div>
                  <div className="tp-path-title-wrap">
                    <h3>Full Stack Developer</h3>
                  </div>
                </div>
                <span className="tp-duration-badge badge-fs-duration">12 Weeks</span>
              </div>

              <div className="tp-path-subtitle">
                Build a production-ready web application from requirements through deployment.
              </div>

              <div className="tp-tech-tags-line">
                React &nbsp;•&nbsp; Node.js &nbsp;•&nbsp; PostgreSQL &nbsp;•&nbsp; REST APIs &nbsp;•&nbsp; Architecture &nbsp;•&nbsp; AI-Assisted Development &nbsp;•&nbsp; Testing &nbsp;•&nbsp; Deployment
              </div>

              <Link href="/Fullstack" className="btn-view-program">
                <span>View Full Stack Program</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEARN BY BUILDING (PIPELINE) */}
      <section className="tp-pipeline-section">
        <div className="programs-container">
          <div className="tp-section-header">
            <h2>Learn by <span>Building</span></h2>
            <p>Every program follows the complete project lifecycle—from requirements and design through development, QA and production deployment.</p>
          </div>

          <div className="tp-pipeline-row">
            {/* Step 1: Learn */}
            <div className="tp-pipeline-step">
              <div className="tp-step-icon-circle">
                <BookOpen size={22} strokeWidth={2} />
              </div>
              <div className="tp-step-name">Learn</div>
              <div className="tp-step-desc">Understand concepts and best practices</div>
            </div>

            <div className="tp-pipeline-arrow">
              <ChevronRight size={20} />
            </div>

            {/* Step 2: Practice */}
            <div className="tp-pipeline-step">
              <div className="tp-step-icon-circle">
                <Code size={22} strokeWidth={2} />
              </div>
              <div className="tp-step-name">Practice</div>
              <div className="tp-step-desc">Apply your knowledge with guided exercises</div>
            </div>

            <div className="tp-pipeline-arrow">
              <ChevronRight size={20} />
            </div>

            {/* Step 3: Build */}
            <div className="tp-pipeline-step">
              <div className="tp-step-icon-circle">
                <Box size={22} strokeWidth={2} />
              </div>
              <div className="tp-step-name">Build</div>
              <div className="tp-step-desc">Develop real-world projects</div>
            </div>

            <div className="tp-pipeline-arrow">
              <ChevronRight size={20} />
            </div>

            {/* Step 4: Test */}
            <div className="tp-pipeline-step">
              <div className="tp-step-icon-circle">
                <CheckCircle2 size={22} strokeWidth={2} />
              </div>
              <div className="tp-step-name">Test</div>
              <div className="tp-step-desc">Validate with testing and code reviews</div>
            </div>

            <div className="tp-pipeline-arrow">
              <ChevronRight size={20} />
            </div>

            {/* Step 5: Deploy */}
            <div className="tp-pipeline-step">
              <div className="tp-step-icon-circle">
                <Rocket size={22} strokeWidth={2} />
              </div>
              <div className="tp-step-name">Deploy</div>
              <div className="tp-step-desc">Launch to production and showcase your work</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROGRAM COMPARISON TABLE */}
      <section className="tp-comparison-section">
        <div className="programs-container">
          <div className="tp-section-header">
            <h2>Program <span>Comparison</span></h2>
            <p>Compare the two programs and choose the right path for your goals.</p>
          </div>

          <div className="tp-table-wrap">
            <table className="tp-table">
              <thead>
                <tr>
                  <th className="th-feature">Feature</th>
                  <th className="th-ai">
                    <div className="th-ai-inner">
                      <Brain size={18} />
                      <span>AI Career Ready</span>
                    </div>
                  </th>
                  <th className="th-fs">
                    <div className="th-fs-inner">
                      <Code2 size={18} />
                      <span>Full Stack Developer</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-feature-title">Duration</td>
                  <td className="td-ai-val"><strong>16 Weeks</strong></td>
                  <td className="td-fs-val"><strong>12 Weeks</strong></td>
                </tr>
                <tr>
                  <td className="td-feature-title">Best For</td>
                  <td className="td-ai-val">
                    Graduates and professionals interested in AI and machine learning careers.
                  </td>
                  <td className="td-fs-val">
                    Graduates and professionals who want to build modern web applications.
                  </td>
                </tr>
                <tr>
                  <td className="td-feature-title">Core Technologies</td>
                  <td className="td-ai-val">
                    Python, Machine Learning, Generative AI, LLMs, APIs, RAG, AI Applications, Deployment
                  </td>
                  <td className="td-fs-val">
                    React, Node.js, PostgreSQL, REST APIs, Architecture, AI-Assisted Development, Testing, Deployment
                  </td>
                </tr>
                <tr>
                  <td className="td-feature-title">Hands-On Projects</td>
                  <td className="td-ai-val">
                    Build and deploy real-world AI applications including LLM-based solutions.
                  </td>
                  <td className="td-fs-val">
                    Build a complete full stack web application from requirements through deployment.
                  </td>
                </tr>
                <tr>
                  <td className="td-feature-title">Career Outcomes</td>
                  <td className="td-ai-val">
                    AI Developer, GenAI Developer, Machine Learning Associate
                  </td>
                  <td className="td-fs-val">
                    Full Stack Developer, React Developer, Node.js Developer
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU WILL EXPERIENCE (4 BENEFIT CARDS) */}
      <section className="tp-experience-section">
        <div className="programs-container">
          <div className="tp-section-header">
            <h2>What You Will <span>Experience</span></h2>
            <p>A flexible, practical and supportive learning experience designed for your success.</p>
          </div>

          <div className="tp-experience-grid">
            {/* Card 1 */}
            <div className="tp-exp-card">
              <div className="tp-exp-icon-box exp-icon-1">
                <Users size={22} strokeWidth={2.2} />
              </div>
              <h3>Expert-Led Training</h3>
              <p>Learn from experienced technology professionals.</p>
            </div>

            {/* Card 2 */}
            <div className="tp-exp-card">
              <div className="tp-exp-icon-box exp-icon-2">
                <ClipboardCheck size={22} strokeWidth={2.2} />
              </div>
              <h3>Guided Practice</h3>
              <p>Apply each concept through structured practice.</p>
            </div>

            {/* Card 3 */}
            <div className="tp-exp-card">
              <div className="tp-exp-icon-box exp-icon-3">
                <Layers size={22} strokeWidth={2.2} />
              </div>
              <h3>Real-World Projects</h3>
              <p>Build portfolio-ready applications.</p>
            </div>

            {/* Card 4 */}
            <div className="tp-exp-card">
              <div className="tp-exp-icon-box exp-icon-4">
                <BarChart3 size={22} strokeWidth={2.2} />
              </div>
              <h3>Career Preparation</h3>
              <p>Resume, interview and project presentation support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FLEXIBLE LEARNING OPTIONS (3 CARDS) */}
      <section className="tp-options-section">
        <div className="programs-container">
          <div className="tp-section-header">
            <h2>Flexible <span>Learning Options</span></h2>
            <p>Choose the learning mode that works best for you.</p>
          </div>

          <div className="tp-options-grid">
            {/* Option 1: Classroom */}
            <div className="tp-option-card">
              <div className="tp-option-icon-box">
                <GraduationCap size={22} strokeWidth={2.2} />
              </div>
              <h3>Classroom</h3>
              <p>Learn at our training center with in-person faculty interaction.</p>
            </div>

            {/* Option 2: Live Online */}
            <div className="tp-option-card">
              <div className="tp-option-icon-box">
                <Monitor size={22} strokeWidth={2.2} />
              </div>
              <h3>Live Online</h3>
              <p>Join live interactive sessions from anywhere in India.</p>
            </div>

            {/* Option 3: Hybrid */}
            <div className="tp-option-card">
              <div className="tp-option-icon-box">
                <Users size={22} strokeWidth={2.2} />
              </div>
              <h3>Hybrid</h3>
              <p>Combine classroom and online learning for maximum flexibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="tp-cta-banner">
        <div className="tp-cta-content">
          <h2>Ready to Start Your Technology Career?</h2>
          <p>Speak with our training advisor and choose the program that fits your goals.</p>
          <div className="tp-cta-buttons">
            <Link href="/contactus" className="btn-cta-green-enroll">
              <span>Enroll Now</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/contactus#inquiryType" className="btn-cta-request-details">
              <span>Request Program Details</span>
              <MessageCircle size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
