'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Users, 
  Settings, 
  Award, 
  ArrowRight, 
  Lightbulb, 
  Code2, 
  Boxes, 
  TrendingUp, 
  Bot, 
  Cpu, 
  Leaf, 
  CheckCircle2, 
  UserCheck, 
  Building2, 
  Phone, 
  Mail, 
  ShieldCheck 
} from 'lucide-react';

export default function SchoolWorkshopPage() {
  return (
    <div className="sw-page-wrapper">
      <style>{`
        .sw-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .sw-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* 1. HERO SECTION */
        .sw-hero-section {
          background: #ffffff;
          padding: 18px 0 22px;
          border-bottom: 1px solid #f1f5f9;
        }

        .sw-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.18fr;
          gap: 28px;
          align-items: center;
        }

        .sw-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .sw-hero-badge {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 6px;
        }

        .sw-hero-title {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 10px 0;
        }

        .sw-hero-desc {
          font-size: 14px;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 18px 0;
          max-width: 500px;
        }

        .sw-hero-pills-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }

        .sw-hero-pill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          text-align: center;
        }

        .sw-hero-pill-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #eef5ff;
          border: 1px solid #d0e1fd;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0056b3;
        }

        .sw-hero-pill-text {
          font-size: 10.5px;
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
        }

        .sw-hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-sw-green {
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

        .btn-sw-green:hover {
          background: #047857;
          transform: translateY(-1px);
        }

        .btn-sw-outline {
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

        .btn-sw-outline:hover {
          border-color: #0056b3;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        /* Hero Image Container: Full natural fit so faces are 100% visible */
        .sw-hero-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .sw-hero-img {
          width: 100%;
          height: auto;
          max-height: 390px;
          object-fit: contain;
          display: block;
          border-radius: 10px;
        }

        /* 2. SKILL EDUCATION FOR A BRIGHTER TOMORROW (4 CARDS) */
        .sw-skills-section {
          padding: 24px 0 26px;
          background: #ffffff;
        }

        .sw-section-header {
          text-align: center;
          margin-bottom: 22px;
        }

        .sw-section-header h2 {
          font-size: 28px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .sw-section-header p {
          font-size: 13.5px;
          color: #64748b;
          margin: 0 auto;
          max-width: 680px;
        }

        .sw-skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .sw-skill-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 22px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }

        .sw-skill-card:hover {
          transform: translateY(-2px);
          border-color: #0056b3;
          box-shadow: 0 4px 14px rgba(0, 86, 179, 0.08);
        }

        .sw-skill-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #eef5ff;
          color: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .sw-skill-card h3 {
          font-size: 16px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 6px 0;
        }

        .sw-skill-card p {
          font-size: 12px;
          line-height: 1.5;
          color: #64748b;
          margin: 0;
        }

        /* 3. OUR WORKSHOP PROGRAMS (4 PROGRAM CARDS WITH IMAGES) */
        .sw-programs-section {
          padding: 24px 0 28px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .sw-programs-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .sw-programs-header-text h2 {
          font-size: 26px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
          letter-spacing: -0.02em;
        }

        .sw-programs-header-text p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        .sw-view-modules-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 700;
          color: #0056b3;
          text-decoration: none;
        }

        .sw-view-modules-link:hover {
          text-decoration: underline;
        }

        .sw-programs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .sw-program-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }

        .sw-program-card:hover {
          border-color: #93c5fd;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 86, 179, 0.08);
        }

        .sw-card-img-wrap {
          position: relative;
          width: 100%;
          height: 145px;
          background: #f1f5f9;
        }

        .sw-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
          display: block;
        }

        .sw-card-content {
          padding: 14px 14px 16px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .sw-card-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 2px;
        }

        .sw-card-icon-badge {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: #eef5ff;
          color: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sw-card-icon-badge.green {
          background: #ecfdf5;
          color: #059669;
        }

        .sw-card-title {
          font-size: 14px;
          font-weight: 800;
          color: #003fa8;
          margin: 0;
          line-height: 1.25;
        }

        .sw-card-grades {
          font-size: 11.5px;
          font-weight: 700;
          color: #0056b3;
          margin: 0 0 10px 0;
          padding-left: 36px;
        }

        .sw-card-desc-box {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 11.5px;
          line-height: 1.45;
          color: #475569;
          margin-top: auto;
        }

        .sw-card-desc-icon {
          color: #059669;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* 4. WHY CHOOSE SKAIMITRA & HOW IT WORKS (2 COLUMNS) */
        .sw-why-works-section {
          padding: 24px 0 26px;
          background: #ffffff;
        }

        .sw-why-works-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.3fr;
          gap: 20px;
        }

        .sw-why-card, .sw-works-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
        }

        .sw-why-card h3, .sw-works-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 16px 0;
        }

        .sw-why-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .sw-why-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 12.5px;
          line-height: 1.4;
          color: #334155;
        }

        .sw-why-item svg {
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* How it works steps */
        .sw-steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          align-items: flex-start;
        }

        .sw-step-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .sw-step-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: #ffffff;
          font-weight: 800;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .sw-step-badge.green {
          background: #059669;
        }

        .sw-step-badge.blue {
          background: #0056b3;
        }

        .sw-step-badge.navy {
          background: #0284c7;
        }

        .sw-step-badge.purple {
          background: #7c3aed;
        }

        .sw-step-col h4 {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .sw-step-col p {
          font-size: 10.5px;
          line-height: 1.35;
          color: #64748b;
          margin: 0;
        }

        /* 5. PARTICIPATE + OUTCOMES + TESTIMONIAL (3 COLUMNS) */
        .sw-bottom-details-section {
          padding: 20px 0 28px;
          background: #ffffff;
        }

        .sw-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr 1fr;
          gap: 18px;
        }

        .sw-part-card, .sw-outcomes-card, .sw-test-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .sw-part-card h3, .sw-outcomes-card h3 {
          font-size: 17px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 16px 0;
        }

        .sw-part-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .sw-part-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 8px 4px;
        }

        .sw-part-icon {
          color: #0056b3;
          margin-bottom: 6px;
        }

        .sw-part-col h4 {
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2px 0;
          line-height: 1.25;
        }

        .sw-part-col span {
          font-size: 10px;
          color: #64748b;
          line-height: 1.25;
        }

        /* Outcomes items */
        .sw-outcomes-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sw-outcomes-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          line-height: 1.4;
          color: #334155;
        }

        .sw-outcomes-item svg {
          color: #059669;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Testimonial card */
        .sw-test-card {
          background: #f0fdf4;
          border: 1.5px solid #bbf7d0;
          justify-content: center;
          position: relative;
        }

        .sw-test-quote-mark {
          font-size: 38px;
          font-weight: 900;
          color: #0056b3;
          line-height: 1;
          margin-bottom: 6px;
        }

        .sw-test-quote-text {
          font-size: 12.5px;
          font-style: italic;
          line-height: 1.5;
          color: #1e293b;
          margin: 0 0 10px 0;
        }

        .sw-test-quote-author {
          font-size: 11.5px;
          font-weight: 700;
          color: #0056b3;
          text-align: right;
          margin: 0;
        }

        /* 6. BOTTOM CTA BANNER */
        .sw-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 30px 20px;
          text-align: center;
          overflow: hidden;
        }

        .sw-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 12% 35%, rgba(0, 140, 255, 0.22) 0%, transparent 42%),
            radial-gradient(circle at 88% 65%, rgba(0, 140, 255, 0.22) 0%, transparent 42%);
          pointer-events: none;
        }

        .sw-cta-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
        }

        .sw-cta-banner h2 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 6px 0;
          color: #ffffff;
          letter-spacing: -0.015em;
        }

        .sw-cta-banner p {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0 0 18px 0;
        }

        .sw-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .btn-cta-green-school {
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

        .btn-cta-green-school:hover {
          background: #10b981;
          transform: translateY(-1px);
        }

        .btn-cta-trans-school {
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

        .btn-cta-trans-school:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #ffffff;
          transform: translateY(-1px);
        }

        .sw-cta-contact-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          font-size: 13px;
          color: #94a3b8;
        }

        .sw-cta-contact-links a {
          color: #cbd5e1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }

        .sw-cta-contact-links a:hover {
          color: #ffffff;
        }

        /* RESPONSIVE BREAKPOINTS (DESKTOP, TABLET, MOBILE) */
        @media (max-width: 1040px) {
          .sw-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .sw-hero-left {
            align-items: center;
          }
          .sw-hero-pills-row, .sw-hero-buttons {
            justify-content: center;
          }
          .sw-skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sw-programs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .sw-why-works-grid {
            grid-template-columns: 1fr;
          }
          .sw-bottom-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .sw-hero-title {
            font-size: 30px;
          }
          .sw-skills-grid {
            grid-template-columns: 1fr;
          }
          .sw-programs-grid {
            grid-template-columns: 1fr;
          }
          .sw-steps-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .sw-part-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/school/schoolworkshop.png (ALL FACES FULLY VISIBLE) */}
      <section className="sw-hero-section">
        <div className="sw-container">
          <div className="sw-hero-grid">
            {/* Left Column */}
            <div className="sw-hero-left">
              <span className="sw-hero-badge">AI &amp; CODING WORKSHOPS FOR SCHOOLS</span>
              <h1 className="sw-hero-title">
                Empower Students<br />
                with Future-Ready Skills
              </h1>
              <p className="sw-hero-desc">
                Hands-on AI and Coding workshops for Grades 6–12 using SkaiMitra LMS. Inspire creativity, critical thinking and real-world problem solving.
              </p>

              {/* 4 Feature Pills */}
              <div className="sw-hero-pills-row">
                <div className="sw-hero-pill-item">
                  <div className="sw-hero-pill-icon">
                    <Calendar size={17} />
                  </div>
                  <span className="sw-hero-pill-text">Grades 6–12</span>
                </div>

                <div className="sw-hero-pill-item">
                  <div className="sw-hero-pill-icon">
                    <Users size={17} />
                  </div>
                  <span className="sw-hero-pill-text">Hands-On Learning</span>
                </div>

                <div className="sw-hero-pill-item">
                  <div className="sw-hero-pill-icon">
                    <Settings size={17} />
                  </div>
                  <span className="sw-hero-pill-text">Industry-Aligned</span>
                </div>

                <div className="sw-hero-pill-item">
                  <div className="sw-hero-pill-icon">
                    <Award size={17} />
                  </div>
                  <span className="sw-hero-pill-text">Certificate of Completion</span>
                </div>
              </div>

              {/* 2 Buttons */}
              <div className="sw-hero-buttons">
                <Link href="/contactus" className="btn-sw-green">
                  <span>Request a Workshop</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contactus" className="btn-sw-outline">
                  <span>Talk to Our Team</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: schoolworkshop.png with uncropped faces */}
            <div className="sw-hero-img-wrap">
              <Image
                src="/images/school/schoolworkshop.png"
                alt="Advaitecs school students and teacher engaged in coding workshop"
                width={850}
                height={480}
                priority
                className="sw-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SKILL EDUCATION FOR A BRIGHTER TOMORROW (4 CARDS) */}
      <section className="sw-skills-section">
        <div className="sw-container">
          <div className="sw-section-header">
            <h2>Skill Education for a Brighter Tomorrow</h2>
            <p>
              Interactive workshops powered by SkaiMitra to build AI and coding skills, aligned with CBSE/ICSE curricula and real-world applications.
            </p>
          </div>

          <div className="sw-skills-grid">
            <div className="sw-skill-card">
              <div className="sw-skill-icon-wrap">
                <Lightbulb size={24} />
              </div>
              <h3>AI Literacy</h3>
              <p>Introduce students to AI concepts, real-world use cases and ethical AI in a fun, hands-on way.</p>
            </div>

            <div className="sw-skill-card">
              <div className="sw-skill-icon-wrap">
                <Code2 size={24} />
              </div>
              <h3>Coding Skills</h3>
              <p>Learn programming through projects using Python, micro:bit and other tools.</p>
            </div>

            <div className="sw-skill-card">
              <div className="sw-skill-icon-wrap">
                <Boxes size={24} />
              </div>
              <h3>Project-Based Learning</h3>
              <p>Build, collaborate and showcase innovative solutions to real-world problems.</p>
            </div>

            <div className="sw-skill-card">
              <div className="sw-skill-icon-wrap">
                <TrendingUp size={24} />
              </div>
              <h3>Future Ready</h3>
              <p>Develop critical thinking, creativity and digital skills for tomorrow&apos;s opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR WORKSHOP PROGRAMS (4 PROGRAM CARDS WITH IMAGES) */}
      <section className="sw-programs-section">
        <div className="sw-container">
          <div className="sw-programs-header">
            <div className="sw-programs-header-text">
              <h2>Our Workshop Programs</h2>
              <p>Choose from our curated workshop modules or customize a program for your school.</p>
            </div>
            <Link href="/contactus" className="sw-view-modules-link">
              <span>View All Modules</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="sw-programs-grid">
            {/* Card 1: Introduction to AI */}
            <div className="sw-program-card">
              <div className="sw-card-img-wrap">
                <Image
                  src="/images/school/Ai.png"
                  alt="Student with friendly AI robot in introductory workshop"
                  width={300}
                  height={180}
                  className="sw-card-img"
                />
              </div>
              <div className="sw-card-content">
                <div className="sw-card-title-row">
                  <div className="sw-card-icon-badge">
                    <Bot size={16} />
                  </div>
                  <h3 className="sw-card-title">Introduction to AI</h3>
                </div>
                <div className="sw-card-grades">Grades 6–8</div>
                <div className="sw-card-desc-box">
                  <ShieldCheck size={16} className="sw-card-desc-icon" />
                  <span>Explore what AI is, how it works, and how it&apos;s used in everyday life.</span>
                </div>
              </div>
            </div>

            {/* Card 2: Coding with Python */}
            <div className="sw-program-card">
              <div className="sw-card-img-wrap">
                <Image
                  src="/images/school/1.png"
                  alt="Students coding with Python on computer screen"
                  width={300}
                  height={180}
                  className="sw-card-img"
                />
              </div>
              <div className="sw-card-content">
                <div className="sw-card-title-row">
                  <div className="sw-card-icon-badge">
                    <Code2 size={16} />
                  </div>
                  <h3 className="sw-card-title">Coding with Python</h3>
                </div>
                <div className="sw-card-grades">Grades 6–12</div>
                <div className="sw-card-desc-box">
                  <ShieldCheck size={16} className="sw-card-desc-icon" />
                  <span>Learn Python programming through interactive exercises and mini projects.</span>
                </div>
              </div>
            </div>

            {/* Card 3: AI & IoT Projects */}
            <div className="sw-program-card">
              <div className="sw-card-img-wrap">
                <Image
                  src="/images/school/2.png"
                  alt="Students collaborating on AI and IoT microbit sensors"
                  width={300}
                  height={180}
                  className="sw-card-img"
                />
              </div>
              <div className="sw-card-content">
                <div className="sw-card-title-row">
                  <div className="sw-card-icon-badge">
                    <Cpu size={16} />
                  </div>
                  <h3 className="sw-card-title">AI &amp; IoT Projects</h3>
                </div>
                <div className="sw-card-grades">Grades 7–10</div>
                <div className="sw-card-desc-box">
                  <ShieldCheck size={16} className="sw-card-desc-icon" />
                  <span>Build hands-on projects using micro:bit/Farmbeats and real-world data.</span>
                </div>
              </div>
            </div>

            {/* Card 4: AI for a Better World */}
            <div className="sw-program-card">
              <div className="sw-card-img-wrap">
                <Image
                  src="/images/school/4.png"
                  alt="Hands holding green planet Earth for AI for a better world"
                  width={300}
                  height={180}
                  className="sw-card-img"
                />
              </div>
              <div className="sw-card-content">
                <div className="sw-card-title-row">
                  <div className="sw-card-icon-badge green">
                    <Leaf size={16} />
                  </div>
                  <h3 className="sw-card-title">AI for a Better World</h3>
                </div>
                <div className="sw-card-grades">Grades 6–12</div>
                <div className="sw-card-desc-box">
                  <ShieldCheck size={16} className="sw-card-desc-icon" />
                  <span>Apply AI and coding to solve societal challenges aligned with UN SDGs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE SKAIMITRA & HOW IT WORKS (2 COLUMNS) */}
      <section className="sw-why-works-section">
        <div className="sw-container">
          <div className="sw-why-works-grid">
            {/* Left: Why Choose SkaiMitra for Your School? */}
            <div className="sw-why-card">
              <h3>Why Choose SkaiMitra for Your School?</h3>
              <ul className="sw-why-bullets">
                <li className="sw-why-item">
                  <CheckCircle2 size={16} />
                  <span>Comprehensive K-12 AI curriculum (CBSE/ICSE aligned)</span>
                </li>
                <li className="sw-why-item">
                  <CheckCircle2 size={16} />
                  <span>Interactive, hands-on learning experiences</span>
                </li>
                <li className="sw-why-item">
                  <CheckCircle2 size={16} />
                  <span>Integrated LMS for content, assignments, quizzes and certificates</span>
                </li>
                <li className="sw-why-item">
                  <CheckCircle2 size={16} />
                  <span>Trained facilitators and teacher enablement</span>
                </li>
                <li className="sw-why-item">
                  <CheckCircle2 size={16} />
                  <span>Flexible delivery – on-site or virtual</span>
                </li>
                <li className="sw-why-item">
                  <CheckCircle2 size={16} />
                  <span>Progress tracking and detailed reports</span>
                </li>
              </ul>
            </div>

            {/* Right: How It Works */}
            <div className="sw-works-card">
              <h3>How It Works</h3>
              <div className="sw-steps-row">
                <div className="sw-step-col">
                  <div className="sw-step-badge green">1</div>
                  <h4>Plan</h4>
                  <p>Discuss your needs and customize the program</p>
                </div>

                <div className="sw-step-col">
                  <div className="sw-step-badge blue">2</div>
                  <h4>Conduct</h4>
                  <p>Interactive on-site or virtual workshops</p>
                </div>

                <div className="sw-step-col">
                  <div className="sw-step-badge navy">3</div>
                  <h4>Engage</h4>
                  <p>Hands-on projects and real-world applications</p>
                </div>

                <div className="sw-step-col">
                  <div className="sw-step-badge purple">4</div>
                  <h4>Grow</h4>
                  <p>Certificates, reports and ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PARTICIPATE + OUTCOMES + TESTIMONIAL (3 COLUMNS) */}
      <section className="sw-bottom-details-section">
        <div className="sw-container">
          <div className="sw-bottom-grid">
            {/* Left: Who Can Participate? */}
            <div className="sw-part-card">
              <h3>Who Can Participate?</h3>
              <div className="sw-part-row">
                <div className="sw-part-col">
                  <Users size={24} className="sw-part-icon" />
                  <h4>Students</h4>
                  <span>(Grades 6–12)</span>
                </div>

                <div className="sw-part-col">
                  <UserCheck size={24} className="sw-part-icon" />
                  <h4>Teachers</h4>
                  <span>&amp; Educators</span>
                </div>

                <div className="sw-part-col">
                  <Building2 size={24} className="sw-part-icon" />
                  <h4>Schools</h4>
                  <span>(Private &amp; Government)</span>
                </div>
              </div>
            </div>

            {/* Middle: Student Outcomes */}
            <div className="sw-outcomes-card">
              <h3>Student Outcomes</h3>
              <ul className="sw-outcomes-list">
                <li className="sw-outcomes-item">
                  <CheckCircle2 size={16} />
                  <span>Understand and apply AI concepts</span>
                </li>
                <li className="sw-outcomes-item">
                  <CheckCircle2 size={16} />
                  <span>Gain practical coding and problem-solving skills</span>
                </li>
                <li className="sw-outcomes-item">
                  <CheckCircle2 size={16} />
                  <span>Build innovative projects</span>
                </li>
                <li className="sw-outcomes-item">
                  <CheckCircle2 size={16} />
                  <span>Develop collaboration and communication skills</span>
                </li>
                <li className="sw-outcomes-item">
                  <CheckCircle2 size={16} />
                  <span>Earn certificates to showcase their learning</span>
                </li>
              </ul>
            </div>

            {/* Right: Testimonial Card */}
            <div className="sw-test-card">
              <div className="sw-test-quote-mark">&ldquo;</div>
              <p className="sw-test-quote-text">
                The workshop was engaging and opened my eyes to how AI can solve real problems!
              </p>
              <p className="sw-test-quote-author">— Student, Grade 8</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="sw-cta-banner">
        <div className="sw-cta-content">
          <h2>Bring AI &amp; Coding Workshops to Your School</h2>
          <p>Let&apos;s work together to inspire the next generation of innovators.</p>

          <div className="sw-cta-buttons">
            <Link href="/contactus" className="btn-cta-green-school">
              <span>Request a Workshop</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/contactus" className="btn-cta-trans-school">
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="sw-cta-contact-links">
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
