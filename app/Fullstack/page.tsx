'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  BarChart2, 
  ArrowRight, 
  Lightbulb, 
  Code2, 
  ClipboardCheck, 
  Rocket, 
  ChevronRight, 
  CheckCircle2, 
  Laptop, 
  Server, 
  Database, 
  Users, 
  FileText, 
  Settings, 
  Smartphone, 
  GitBranch, 
  Cloud, 
  Phone, 
  Mail, 
  Code,
  Layers,
  Cpu
} from 'lucide-react';

export default function FullstackPage() {
  return (
    <div className="fullstack-page-wrapper">
      <style>{`
        .fullstack-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .fs-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* 1. HERO SECTION */
        .fs-hero-section {
          background: #ffffff;
          padding: 18px 0 22px;
          border-bottom: 1px solid #f1f5f9;
        }

        .fs-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 24px;
          align-items: center;
        }

        .fs-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .fs-hero-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 6px;
        }

        .fs-hero-title {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 10px 0;
        }

        .fs-hero-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 16px 0;
          max-width: 500px;
        }

        .fs-meta-pills-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .fs-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: #eef5ff;
          border: 1px solid #d0e1fd;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          color: #0056b3;
        }

        .fs-hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-subscribe-course {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #059669;
          color: #ffffff;
          padding: 10px 22px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(5, 150, 105, 0.25);
          transition: all 0.2s ease;
        }

        .btn-subscribe-course:hover {
          background: #047857;
          transform: translateY(-1px);
        }

        .btn-contact-advisor {
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

        .btn-contact-advisor:hover {
          border-color: #0056b3;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        /* Hero Image Container: Full natural fit so all 5 faces are completely visible */
        .fs-hero-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .fs-hero-img {
          width: 100%;
          height: auto;
          max-height: 380px;
          object-fit: contain;
          display: block;
          border-radius: 8px;
        }

        /* 2. BECOME A PRODUCTION-READY FULL-STACK DEVELOPER (4 CARDS) */
        .fs-pillars-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .fs-section-header {
          text-align: center;
          margin-bottom: 22px;
        }

        .fs-section-header h2 {
          font-size: 30px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .fs-section-header p {
          font-size: 14px;
          color: #475569;
          max-width: 650px;
          margin: 0 auto;
        }

        .fs-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .fs-pillar-card {
          background: #ffffff;
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

        .fs-pillar-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
          border-color: #cbd5e1;
        }

        .fs-pillar-icon-circle {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #e1effe;
          color: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .fs-pillar-card h3 {
          font-size: 16px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 6px 0;
        }

        .fs-pillar-card p {
          font-size: 12.5px;
          line-height: 1.5;
          color: #64748b;
          margin: 0;
        }

        /* 3. 12-WEEK DEVELOPMENT ROADMAP (4 PHASES) */
        .fs-roadmap-section {
          padding: 24px 0 28px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .fs-roadmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 20px;
        }

        .fs-roadmap-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .fs-roadmap-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .fs-phase-number {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #0052cc;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fs-phase-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #003fa8;
          line-height: 1.3;
        }

        .fs-roadmap-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .fs-roadmap-bullets li {
          font-size: 12px;
          color: #475569;
          line-height: 1.45;
          position: relative;
          padding-left: 14px;
        }

        .fs-roadmap-bullets li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #0056b3;
          font-weight: bold;
        }

        /* 4. TECHNOLOGIES YOU WILL LEARN */
        .fs-tech-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .fs-tech-pills-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .fs-tech-pill-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 96px;
          height: 72px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .fs-tech-pill-box:hover {
          transform: translateY(-2px);
          border-color: #0056b3;
        }

        .fs-tech-name {
          font-size: 11px;
          font-weight: 700;
          color: #334155;
          margin-top: 6px;
          text-align: center;
        }

        /* 5. BATCHES & SCHEDULE (2 COLUMNS) */
        .fs-batches-schedule-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .fs-batches-schedule-grid {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 20px;
        }

        .fs-batch-card {
          background: #ffffff;
          border: 1.5px solid #0052cc;
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 3px 14px rgba(0, 82, 204, 0.06);
          display: flex;
          flex-direction: column;
        }

        .fs-batch-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .fs-batch-card p {
          font-size: 12.5px;
          color: #64748b;
          margin: 0 0 16px 0;
        }

        .fs-batches-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .fs-batch-tile {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 8px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          color: #003fa8;
        }

        .fs-schedule-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .fs-schedule-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .fs-schedule-header h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0;
        }

        .fs-schedule-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .fs-schedule-bullets li {
          font-size: 12.5px;
          color: #334155;
          line-height: 1.45;
          position: relative;
          padding-left: 14px;
        }

        .fs-schedule-bullets li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #0056b3;
          font-weight: bold;
        }

        /* 6. BUILD APP & CAREER ROLES (2 COLUMNS) */
        .fs-app-career-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .fs-app-career-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 20px;
        }

        .fs-app-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .fs-app-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .fs-app-card p {
          font-size: 12.5px;
          color: #64748b;
          margin: 0 0 16px 0;
        }

        .fs-app-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .fs-app-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          line-height: 1.4;
          color: #334155;
        }

        .fs-check-icon {
          color: #059669;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .fs-career-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .fs-career-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .fs-career-card p {
          font-size: 12.5px;
          color: #64748b;
          margin: 0 0 16px 0;
        }

        .fs-career-roles-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          margin-bottom: 16px;
        }

        .fs-career-role-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px 4px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }

        .fs-career-role-box span {
          font-size: 10px;
          font-weight: 700;
          color: #0f172a;
          margin-top: 6px;
          line-height: 1.25;
        }

        .fs-prep-banner {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .fs-prep-text h4 {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2px 0;
        }

        .fs-prep-text span {
          font-size: 11.5px;
          color: #64748b;
        }

        /* 7. WHO SHOULD ENROLL & PREREQUISITES (2 COLUMNS) */
        .fs-enroll-prereq-section {
          padding: 24px 0 30px;
          background: #ffffff;
        }

        .fs-enroll-prereq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .fs-enroll-card, .fs-prereq-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.02);
        }

        .fs-enroll-card h3, .fs-prereq-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 12px 0;
        }

        .fs-enroll-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .fs-enroll-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          line-height: 1.45;
          color: #334155;
        }

        .fs-prereq-card p {
          font-size: 13px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        /* 8. BOTTOM CTA BANNER */
        .fs-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 30px 20px;
          text-align: center;
          overflow: hidden;
        }

        .fs-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 12% 35%, rgba(0, 140, 255, 0.22) 0%, transparent 42%),
            radial-gradient(circle at 88% 65%, rgba(0, 140, 255, 0.22) 0%, transparent 42%);
          pointer-events: none;
        }

        .fs-cta-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
        }

        .fs-cta-content h2 {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .fs-cta-content p {
          font-size: 14px;
          color: #cbd5e1;
          margin: 0 0 16px 0;
        }

        .fs-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }

        .btn-cta-green-subscribe {
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

        .btn-cta-green-subscribe:hover {
          background: #10b981;
          transform: translateY(-1px);
        }

        .btn-cta-contact-advisor {
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

        .btn-cta-contact-advisor:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #ffffff;
          transform: translateY(-1px);
        }

        .fs-cta-contact-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          font-size: 13px;
          color: #94a3b8;
        }

        .fs-cta-contact-links a {
          color: #cbd5e1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }

        .fs-cta-contact-links a:hover {
          color: #ffffff;
        }

        /* RESPONSIVE BREAKPOINTS (DESKTOP, TABLET, MOBILE) */
        @media (max-width: 1040px) {
          .fs-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .fs-hero-left {
            align-items: center;
          }
          .fs-meta-pills-row, .fs-hero-buttons {
            justify-content: center;
          }
          .fs-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fs-roadmap-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fs-batches-schedule-grid {
            grid-template-columns: 1fr;
          }
          .fs-app-career-grid {
            grid-template-columns: 1fr;
          }
          .fs-enroll-prereq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .fs-hero-title {
            font-size: 30px;
          }
          .fs-pillars-grid {
            grid-template-columns: 1fr;
          }
          .fs-roadmap-grid {
            grid-template-columns: 1fr;
          }
          .fs-batches-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
          .fs-app-features-grid {
            grid-template-columns: 1fr;
          }
          .fs-career-roles-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/fullstack.png (ALL FACES FULLY VISIBLE) */}
      <section className="fs-hero-section">
        <div className="fs-container">
          <div className="fs-hero-grid">
            {/* Left Column */}
            <div className="fs-hero-left">
              <span className="fs-hero-badge">FULL-STACK JOB READY PROGRAM</span>
              <h1 className="fs-hero-title">
                Build, Test and Deploy<br />
                Complete Web and Mobile Applications.
              </h1>
              <p className="fs-hero-desc">
                A 12-week intensive program focused on building a production-ready application with React, Node.js, PostgreSQL and React Native.
              </p>

              {/* 3 Meta Pills */}
              <div className="fs-meta-pills-row">
                <span className="fs-meta-pill">
                  <Calendar size={13} />
                  <span>12 Weeks</span>
                </span>
                <span className="fs-meta-pill">
                  <Clock size={13} />
                  <span>Approximately 400 Hours</span>
                </span>
                <span className="fs-meta-pill">
                  <BarChart2 size={13} />
                  <span>75% Development &amp; Labs</span>
                </span>
              </div>

              {/* 2 Buttons */}
              <div className="fs-hero-buttons">
                <Link href="/contactus" className="btn-subscribe-course">
                  <span>Subscribe for the Course</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contactus" className="btn-contact-advisor">
                  <span>Contact a Training Advisor</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: fullstack.png */}
            <div className="fs-hero-img-wrap">
              <Image
                src="/images/fullstack.png"
                alt="Advaitecs full stack developers learning and building applications"
                width={850}
                height={480}
                priority
                className="fs-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BECOME A PRODUCTION-READY FULL-STACK DEVELOPER (4 CARDS) */}
      <section className="fs-pillars-section">
        <div className="fs-container">
          <div className="fs-section-header">
            <h2>Become a Production-Ready Full-Stack Developer</h2>
            <p>Gain practical, end-to-end skills to design, develop, test and deploy real-world applications.</p>
          </div>

          <div className="fs-pillars-grid">
            {/* Card 1: Design */}
            <div className="fs-pillar-card">
              <div className="fs-pillar-icon-circle">
                <Lightbulb size={22} strokeWidth={2.2} />
              </div>
              <h3>Design</h3>
              <p>Requirements, UX workflows, architecture, API contracts and relational data models.</p>
            </div>

            {/* Card 2: Develop */}
            <div className="fs-pillar-card">
              <div className="fs-pillar-icon-circle">
                <Code2 size={22} strokeWidth={2.2} />
              </div>
              <h3>Develop</h3>
              <p>React web, React Native mobile, Node.js, Express and PostgreSQL.</p>
            </div>

            {/* Card 3: Test */}
            <div className="fs-pillar-card">
              <div className="fs-pillar-icon-circle">
                <ClipboardCheck size={22} strokeWidth={2.2} />
              </div>
              <h3>Test</h3>
              <p>Unit, API, integration, end-to-end, security and performance testing.</p>
            </div>

            {/* Card 4: Deploy */}
            <div className="fs-pillar-card">
              <div className="fs-pillar-icon-circle">
                <Rocket size={22} strokeWidth={2.2} />
              </div>
              <h3>Deploy</h3>
              <p>Docker, CI/CD, cloud environments, monitoring, backups and rollback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 12-WEEK DEVELOPMENT ROADMAP (4 PHASES) */}
      <section className="fs-roadmap-section">
        <div className="fs-container">
          <div className="fs-section-header">
            <h2>12-Week Development Roadmap</h2>
            <p>A structured, hands-on program with real-world projects and expert guidance.</p>
          </div>

          <div className="fs-roadmap-grid">
            {/* Phase 1 */}
            <div className="fs-roadmap-card">
              <div className="fs-roadmap-card-header">
                <span className="fs-phase-number">1</span>
                <span className="fs-phase-title">Weeks 1-3 - Foundation &amp; Design</span>
              </div>
              <ul className="fs-roadmap-bullets">
                <li>Setup, Git workflow, Docker</li>
                <li>Requirements, architecture</li>
                <li>PostgreSQL schema, SQL and indexes</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="fs-roadmap-card">
              <div className="fs-roadmap-card-header">
                <span className="fs-phase-number">2</span>
                <span className="fs-phase-title">Weeks 4-6 - Backend &amp; Web</span>
              </div>
              <ul className="fs-roadmap-bullets">
                <li>Node.js, Express, layered APIs</li>
                <li>Authentication, RBAC, audit history</li>
                <li>React web application</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="fs-roadmap-card">
              <div className="fs-roadmap-card-header">
                <span className="fs-phase-number">3</span>
                <span className="fs-phase-title">Weeks 7-9 - Features, Mobile &amp; Testing</span>
              </div>
              <ul className="fs-roadmap-bullets">
                <li>Integrations, reports, file upload</li>
                <li>React Native, AI-assisted development</li>
                <li>Unit/API/database testing</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="fs-roadmap-card">
              <div className="fs-roadmap-card-header">
                <span className="fs-phase-number">4</span>
                <span className="fs-phase-title">Weeks 10-12 - QA, DevOps &amp; Release</span>
              </div>
              <ul className="fs-roadmap-bullets">
                <li>E2E testing, accessibility, security</li>
                <li>Performance, CI/CD, staging</li>
                <li>Backup/restore and production launch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGIES YOU WILL LEARN */}
      <section className="fs-tech-section">
        <div className="fs-container">
          <div className="fs-section-header">
            <h2>Technologies You Will Learn</h2>
          </div>

          <div className="fs-tech-pills-row">
            {/* 1. React */}
            <div className="fs-tech-pill-box">
              <Cpu size={22} color="#0062d2" />
              <span className="fs-tech-name">React</span>
            </div>

            {/* 2. React Native */}
            <div className="fs-tech-pill-box">
              <Smartphone size={22} color="#0056b3" />
              <span className="fs-tech-name">React Native</span>
            </div>

            {/* 3. Node.js */}
            <div className="fs-tech-pill-box">
              <Server size={22} color="#15803d" />
              <span className="fs-tech-name">Node.js</span>
            </div>

            {/* 4. Express */}
            <div className="fs-tech-pill-box">
              <Code size={22} color="#475569" />
              <span className="fs-tech-name">Express</span>
            </div>

            {/* 5. PostgreSQL */}
            <div className="fs-tech-pill-box">
              <Database size={22} color="#0047ba" />
              <span className="fs-tech-name">PostgreSQL</span>
            </div>

            {/* 6. REST APIs */}
            <div className="fs-tech-pill-box">
              <Settings size={22} color="#0284c7" />
              <span className="fs-tech-name">REST APIs</span>
            </div>

            {/* 7. Docker */}
            <div className="fs-tech-pill-box">
              <Layers size={22} color="#0284c7" />
              <span className="fs-tech-name">Docker</span>
            </div>

            {/* 8. GitHub */}
            <div className="fs-tech-pill-box">
              <GitBranch size={22} color="#0f172a" />
              <span className="fs-tech-name">GitHub</span>
            </div>

            {/* 9. CI/CD */}
            <div className="fs-tech-pill-box">
              <Code2 size={22} color="#6d28d9" />
              <span className="fs-tech-name">CI/CD</span>
            </div>

            {/* 10. Cloud Deployment */}
            <div className="fs-tech-pill-box">
              <Cloud size={22} color="#0056b3" />
              <span className="fs-tech-name">Cloud Deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BATCHES & SCHEDULE (2 COLUMNS) */}
      <section className="fs-batches-schedule-section">
        <div className="fs-container">
          <div className="fs-batches-schedule-grid">
            {/* Left Card: Upcoming Batches */}
            <div className="fs-batch-card">
              <h3>Upcoming Batches</h3>
              <p>Quarterly intakes • Limited cohort size</p>
              <div className="fs-batches-grid-4">
                <div className="fs-batch-tile">
                  <Calendar size={14} />
                  <span>Nov 1</span>
                </div>
                <div className="fs-batch-tile">
                  <Calendar size={14} />
                  <span>Feb 1</span>
                </div>
                <div className="fs-batch-tile">
                  <Calendar size={14} />
                  <span>May 1</span>
                </div>
                <div className="fs-batch-tile">
                  <Calendar size={14} />
                  <span>Aug 1</span>
                </div>
              </div>
            </div>

            {/* Right Card: Weekday Schedule */}
            <div className="fs-schedule-card">
              <div className="fs-schedule-header">
                <Clock size={20} color="#0056b3" />
                <h3>Weekday Schedule</h3>
              </div>
              <ul className="fs-schedule-bullets">
                <li>Monday – Friday</li>
                <li>2:00 PM – 5:00 PM</li>
                <li>Instructor-led training and guided practice</li>
                <li>Additional capstone and team project work</li>
                <li>Weekly commitment: 30–35 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BUILD APPLICATION & CAREER ROLES (2 COLUMNS) */}
      <section className="fs-app-career-section">
        <div className="fs-container">
          <div className="fs-app-career-grid">
            {/* Left Card */}
            <div className="fs-app-card">
              <h3>Build a Complete Production Application</h3>
              <p>Work in teams to build a real-world application with the following capabilities.</p>
              <div className="fs-app-features-grid">
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>At least three user roles</span>
                </div>
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>PostgreSQL with eight or more related entities</span>
                </div>
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>Secure registration and login</span>
                </div>
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>Search, filtering and reports</span>
                </div>
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>Responsive React web app</span>
                </div>
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>Notifications or third-party integration</span>
                </div>
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>React Native mobile app</span>
                </div>
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>Automated tests</span>
                </div>
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>Node.js and Express REST APIs</span>
                </div>
                <div className="fs-app-feature-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>Staging and production deployment</span>
                </div>
              </div>
            </div>

            {/* Right Card: Career Opportunities */}
            <div className="fs-career-card">
              <h3>Career Opportunities</h3>
              <p>Launch your career as a full-stack developer with in-demand skills.</p>

              <div className="fs-career-roles-row">
                <div className="fs-career-role-box">
                  <Laptop size={20} color="#0056b3" />
                  <span>Full-Stack Developer</span>
                </div>
                <div className="fs-career-role-box">
                  <Cpu size={20} color="#0062d2" />
                  <span>React Developer</span>
                </div>
                <div className="fs-career-role-box">
                  <Server size={20} color="#15803d" />
                  <span>Node.js Developer</span>
                </div>
                <div className="fs-career-role-box">
                  <Database size={20} color="#0047ba" />
                  <span>Backend Developer</span>
                </div>
                <div className="fs-career-role-box">
                  <Users size={20} color="#6d28d9" />
                  <span>Junior Software Engineer</span>
                </div>
              </div>

              <div className="fs-prep-banner">
                <FileText size={22} color="#059669" />
                <div className="fs-prep-text">
                  <h4>Career Preparation</h4>
                  <span>GitHub portfolio &nbsp;•&nbsp; Resume review &nbsp;•&nbsp; Mock interviews &nbsp;•&nbsp; Technical presentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO SHOULD ENROLL & PREREQUISITES (2 COLUMNS) */}
      <section className="fs-enroll-prereq-section">
        <div className="fs-container">
          <div className="fs-enroll-prereq-grid">
            {/* Left: Who Should Enroll? */}
            <div className="fs-enroll-card">
              <h3>Who Should Enroll?</h3>
              <ul className="fs-enroll-bullets">
                <li className="fs-enroll-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>Recent graduates with programming fundamentals</span>
                </li>
                <li className="fs-enroll-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>React or Node.js learners seeking job-ready experience</span>
                </li>
                <li className="fs-enroll-item">
                  <CheckCircle2 size={16} className="fs-check-icon" />
                  <span>Developers wanting PostgreSQL and production deployment skills</span>
                </li>
              </ul>
            </div>

            {/* Right: Prerequisites */}
            <div className="fs-prereq-card">
              <h3>Prerequisites</h3>
              <p>
                JavaScript ES6+, HTML/CSS, React basics, Node/Express basics, REST APIs, basic SQL, Git/GitHub and command-line skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="fs-cta-banner">
        <div className="fs-cta-content">
          <h2>Ready to Build Your Full-Stack Career?</h2>
          <p>Join the next cohort and build a complete application from requirements through production.</p>

          <div className="fs-cta-buttons">
            <Link href="/contactus" className="btn-cta-green-subscribe">
              <span>Subscribe for the Course</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/contactus" className="btn-cta-contact-advisor">
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="fs-cta-contact-links">
            <a href="tel:+919603992299">
              <Phone size={14} />
              <span>+91 96039 92299</span>
            </a>
            <span>•</span>
            <a href="mailto:support@advaitecs.com">
              <Mail size={14} />
              <span>support@advaitecs.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
