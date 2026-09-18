'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Lightbulb, 
  Calendar, 
  ArrowRight, 
  Laptop, 
  Settings, 
  Code2, 
  Brain, 
  TrendingUp, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

export default function CollegesEnterprisesPage() {
  return (
    <div className="ce-page-wrapper">
      <style>{`
        .ce-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .ce-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* 1. HERO SECTION */
        .ce-hero-section {
          background: #ffffff;
          padding: 18px 0 22px;
          border-bottom: 1px solid #f1f5f9;
        }

        .ce-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.18fr;
          gap: 28px;
          align-items: center;
        }

        .ce-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ce-hero-badge {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 6px;
        }

        .ce-hero-title {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .ce-hero-subtitle {
          font-size: 19px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 10px 0;
          letter-spacing: -0.015em;
        }

        .ce-hero-desc {
          font-size: 14px;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 18px 0;
          max-width: 500px;
        }

        .ce-hero-features-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }

        .ce-hero-feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          text-align: center;
        }

        .ce-hero-feature-icon {
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

        .ce-hero-feature-text {
          font-size: 10.5px;
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
        }

        .ce-hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-ce-green {
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

        .btn-ce-green:hover {
          background: #047857;
          transform: translateY(-1px);
        }

        .btn-ce-outline {
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

        .btn-ce-outline:hover {
          border-color: #0056b3;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        /* Hero Image Container: Full natural fit so faces are 100% visible */
        .ce-hero-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ce-hero-img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
          display: block;
          border-radius: 10px;
        }

        /* 2. TRANSFORM LEARNING AND CAREERS (4 CARDS) */
        .ce-transform-section {
          padding: 24px 0 26px;
          background: #ffffff;
        }

        .ce-section-header {
          text-align: center;
          margin-bottom: 22px;
        }

        .ce-section-header h2 {
          font-size: 28px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .ce-section-header p {
          font-size: 13.5px;
          color: #64748b;
          margin: 0 auto;
          max-width: 700px;
        }

        .ce-transform-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .ce-transform-card {
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

        .ce-transform-card:hover {
          transform: translateY(-2px);
          border-color: #0056b3;
          box-shadow: 0 4px 14px rgba(0, 86, 179, 0.08);
        }

        .ce-transform-icon-wrap {
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

        .ce-transform-card h3 {
          font-size: 16px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 6px 0;
        }

        .ce-transform-card p {
          font-size: 12px;
          line-height: 1.5;
          color: #64748b;
          margin: 0;
        }

        /* 3. OUR WORKSHOP PROGRAMS (2 BIG CARDS WITH IMAGES) */
        .ce-programs-section {
          padding: 24px 0 28px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .ce-programs-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .ce-programs-header-text h2 {
          font-size: 26px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
          letter-spacing: -0.02em;
        }

        .ce-programs-header-text p {
          font-size: 13px;
          color: #64748b;
          margin: 0;
        }

        .ce-view-training-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 700;
          color: #0056b3;
          text-decoration: none;
        }

        .ce-view-training-link:hover {
          text-decoration: underline;
        }

        .ce-programs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .ce-program-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }

        .ce-program-card:hover {
          border-color: #93c5fd;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 86, 179, 0.08);
        }

        .ce-card-img-wrap {
          position: relative;
          width: 100%;
          height: 180px;
          background: #f1f5f9;
        }

        .ce-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
          display: block;
        }

        .ce-card-content {
          padding: 18px 20px 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .ce-card-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .ce-card-icon-badge {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #eef5ff;
          border: 1px solid #d0e1fd;
          color: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ce-card-title {
          font-size: 16px;
          font-weight: 800;
          color: #003fa8;
          margin: 0;
          line-height: 1.25;
        }

        .ce-card-subtitle {
          font-size: 13px;
          font-weight: 700;
          color: #0056b3;
          margin: 0 0 12px 0;
          padding-left: 42px;
        }

        .ce-card-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 18px 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .ce-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          line-height: 1.4;
          color: #334155;
        }

        .ce-bullet-item::before {
          content: '•';
          color: #0056b3;
          font-size: 16px;
          font-weight: bold;
          line-height: 1;
        }

        .btn-ce-card-more {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          align-self: flex-end;
          padding: 7px 18px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          color: #0056b3;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-ce-card-more:hover {
          border-color: #0056b3;
          background: #f8fafc;
        }

        /* 4. WHO CAN PARTICIPATE & WHY CHOOSE ADVAITECS (2 COLUMNS) */
        .ce-part-why-section {
          padding: 24px 0 26px;
          background: #ffffff;
        }

        .ce-part-why-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 20px;
        }

        .ce-part-box, .ce-why-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .ce-part-box h3, .ce-why-box h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .ce-part-box p.subtitle {
          font-size: 12.5px;
          color: #64748b;
          margin: 0 0 16px 0;
        }

        .ce-part-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .ce-part-pillar {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px 4px;
        }

        .ce-part-icon {
          color: #0056b3;
          margin-bottom: 8px;
        }

        .ce-part-pillar h4 {
          font-size: 12px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
          line-height: 1.25;
        }

        .ce-part-pillar p {
          font-size: 11px;
          line-height: 1.35;
          color: #64748b;
          margin: 0;
        }

        /* Why Choose Advaitecs 7 bullets */
        .ce-why-bullets {
          list-style: none;
          padding: 0;
          margin: 12px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .ce-why-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 12.5px;
          line-height: 1.4;
          color: #334155;
        }

        .ce-why-item svg {
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* 5. HOW IT WORKS & POPULAR DELIVERY OPTIONS (2 COLUMNS) */
        .ce-works-delivery-section {
          padding: 20px 0 28px;
          background: #ffffff;
        }

        .ce-works-delivery-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 20px;
        }

        .ce-works-box, .ce-delivery-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .ce-works-box h3, .ce-delivery-box h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 16px 0;
        }

        /* How it works 4 steps */
        .ce-steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          align-items: flex-start;
        }

        .ce-step-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .ce-step-badge {
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

        .ce-step-badge.green {
          background: #059669;
        }

        .ce-step-badge.blue {
          background: #0056b3;
        }

        .ce-step-badge.navy {
          background: #0284c7;
        }

        .ce-step-badge.purple {
          background: #7c3aed;
        }

        .ce-step-col h4 {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .ce-step-col p {
          font-size: 10.5px;
          line-height: 1.35;
          color: #64748b;
          margin: 0;
        }

        /* Popular delivery options 4 items */
        .ce-delivery-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .ce-delivery-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 8px 4px;
        }

        .ce-delivery-icon {
          color: #0056b3;
          margin-bottom: 6px;
        }

        .ce-delivery-col h4 {
          font-size: 12px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2px 0;
        }

        .ce-delivery-col span {
          font-size: 10px;
          color: #64748b;
          line-height: 1.25;
        }

        /* 6. BOTTOM CTA BANNER */
        .ce-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 30px 20px;
          text-align: center;
          overflow: hidden;
        }

        .ce-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 12% 35%, rgba(0, 140, 255, 0.22) 0%, transparent 42%),
            radial-gradient(circle at 88% 65%, rgba(0, 140, 255, 0.22) 0%, transparent 42%);
          pointer-events: none;
        }

        .ce-cta-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
        }

        .ce-cta-banner h2 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 6px 0;
          color: #ffffff;
          letter-spacing: -0.015em;
        }

        .ce-cta-banner p {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0 0 18px 0;
        }

        .ce-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .btn-cta-green-ce {
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

        .btn-cta-green-ce:hover {
          background: #10b981;
          transform: translateY(-1px);
        }

        .btn-cta-trans-ce {
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

        .btn-cta-trans-ce:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #ffffff;
          transform: translateY(-1px);
        }

        .ce-cta-contact-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          font-size: 13px;
          color: #94a3b8;
        }

        .ce-cta-contact-links a {
          color: #cbd5e1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }

        .ce-cta-contact-links a:hover {
          color: #ffffff;
        }

        /* RESPONSIVE BREAKPOINTS (DESKTOP, TABLET, MOBILE) */
        @media (max-width: 1040px) {
          .ce-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .ce-hero-left {
            align-items: center;
          }
          .ce-hero-features-row, .ce-hero-buttons {
            justify-content: center;
          }
          .ce-transform-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ce-programs-grid {
            grid-template-columns: 1fr;
          }
          .ce-part-why-grid {
            grid-template-columns: 1fr;
          }
          .ce-works-delivery-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .ce-hero-title {
            font-size: 30px;
          }
          .ce-hero-subtitle {
            font-size: 17px;
          }
          .ce-transform-grid {
            grid-template-columns: 1fr;
          }
          .ce-part-pillars-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .ce-steps-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .ce-delivery-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/collegemain.png (ALL FACES FULLY VISIBLE) */}
      <section className="ce-hero-section">
        <div className="ce-container">
          <div className="ce-hero-grid">
            {/* Left Column */}
            <div className="ce-hero-left">
              <span className="ce-hero-badge">COLLEGE &amp; ENTERPRISE WORKSHOPS</span>
              <h1 className="ce-hero-title">
                Build Skills for<br />
                What&apos;s Next
              </h1>
              <h2 className="ce-hero-subtitle">Full Stack. AI. Real-World Impact.</h2>
              <p className="ce-hero-desc">
                Hands-on workshops for engineering and computer science students, college educators, and enterprise professionals. Learn, practice and apply modern technologies with expert guidance.
              </p>

              {/* 4 Feature Pills */}
              <div className="ce-hero-features-row">
                <div className="ce-hero-feature-item">
                  <div className="ce-hero-feature-icon">
                    <Users size={17} />
                  </div>
                  <span className="ce-hero-feature-text">Hands-On Learning</span>
                </div>

                <div className="ce-hero-feature-item">
                  <div className="ce-hero-feature-icon">
                    <Users size={17} />
                  </div>
                  <span className="ce-hero-feature-text">Industry Experts</span>
                </div>

                <div className="ce-hero-feature-item">
                  <div className="ce-hero-feature-icon">
                    <Lightbulb size={17} />
                  </div>
                  <span className="ce-hero-feature-text">Real-World Projects</span>
                </div>

                <div className="ce-hero-feature-item">
                  <div className="ce-hero-feature-icon">
                    <Clock size={17} />
                  </div>
                  <span className="ce-hero-feature-text">Flexible Delivery</span>
                </div>
              </div>

              {/* 2 Buttons */}
              <div className="ce-hero-buttons">
                <Link href="/contactus" className="btn-ce-green">
                  <span>Request a Workshop</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contactus" className="btn-ce-outline">
                  <span>Talk to Our Team</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: collegemain.png with uncropped faces */}
            <div className="ce-hero-img-wrap">
              <Image
                src="/images/collegemain.png"
                alt="Advaitecs college and enterprise learners in collaborative workshop"
                width={850}
                height={480}
                priority
                className="ce-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRANSFORM LEARNING AND CAREERS (4 CARDS) */}
      <section className="ce-transform-section">
        <div className="ce-container">
          <div className="ce-section-header">
            <h2>Transform Learning and Careers</h2>
            <p>
              Practical, industry-relevant workshops to build skills, explore AI, and leverage SkaiMitra for training and education.
            </p>
          </div>

          <div className="ce-transform-grid">
            <div className="ce-transform-card">
              <div className="ce-transform-icon-wrap">
                <Laptop size={24} />
              </div>
              <h3>Learn</h3>
              <p>Hands-on training in Full Stack, AI and modern technologies.</p>
            </div>

            <div className="ce-transform-card">
              <div className="ce-transform-icon-wrap">
                <Settings size={24} />
              </div>
              <h3>Practice</h3>
              <p>Work on real-world projects with expert guidance.</p>
            </div>

            <div className="ce-transform-card">
              <div className="ce-transform-icon-wrap">
                <Users size={24} />
              </div>
              <h3>Implement</h3>
              <p>Use modern tools and frameworks to solve real business problems.</p>
            </div>

            <div className="ce-transform-card">
              <div className="ce-transform-icon-wrap">
                <TrendingUp size={24} />
              </div>
              <h3>Advance</h3>
              <p>Gain career-ready skills and drive digital transformation in your organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR WORKSHOP PROGRAMS (2 BIG CARDS WITH IMAGES) */}
      <section className="ce-programs-section">
        <div className="ce-container">
          <div className="ce-programs-header">
            <div className="ce-programs-header-text">
              <h2>Our Workshop Programs</h2>
              <p>Choose from our popular workshop modules or customize a program for your institution or organization.</p>
            </div>
            <Link href="/trainingprograms" className="ce-view-training-link">
              <span>View Training Programs</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="ce-programs-grid">
            {/* Card 1: Full Stack Development Workshop */}
            <div className="ce-program-card">
              <div className="ce-card-img-wrap">
                <Image
                  src="/images/collegemain2.png "
                  alt="Students working on Full Stack Development web and mobile project"
                  width={600}
                  height={220}
                  className="ce-card-img"
                />
              </div>

              <div className="ce-card-content">
                <div className="ce-card-title-row">
                  <div className="ce-card-icon-badge">
                    <Code2 size={18} />
                  </div>
                  <h3 className="ce-card-title">Full Stack Development Workshop</h3>
                </div>
                <div className="ce-card-subtitle">Build Complete Web &amp; Mobile Applications</div>

                <ul className="ce-card-bullets">
                  <li className="ce-bullet-item">Modern web technologies (React, Node.js)</li>
                  <li className="ce-bullet-item">Database design with PostgreSQL</li>
                  <li className="ce-bullet-item">Hands-on projects, testing and deployment</li>
                  <li className="ce-bullet-item">Best practices and industry workflows</li>
                </ul>

                <Link href="/contactus" className="btn-ce-card-more">
                  <span>Learn More</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Card 2: AI & Generative AI Workshop */}
            <div className="ce-program-card">
              <div className="ce-card-img-wrap">
                <Image
                  src="/images/collegemain1.png"
                  alt="Learners exploring AI and Generative AI neural models"
                  width={600}
                  height={220}
                  className="ce-card-img"
                />
              </div>

              <div className="ce-card-content">
                <div className="ce-card-title-row">
                  <div className="ce-card-icon-badge">
                    <Brain size={18} />
                  </div>
                  <h3 className="ce-card-title">AI &amp; Generative AI Workshop</h3>
                </div>
                <div className="ce-card-subtitle">From Concepts to Real-World Applications</div>

                <ul className="ce-card-bullets">
                  <li className="ce-bullet-item">Python for AI and machine learning</li>
                  <li className="ce-bullet-item">Prompt engineering and LLMs</li>
                  <li className="ce-bullet-item">Build AI agents and applications</li>
                  <li className="ce-bullet-item">Responsible AI and ethical use cases</li>
                </ul>

                <Link href="/contactus" className="btn-ce-card-more">
                  <span>Learn More</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO CAN PARTICIPATE & WHY CHOOSE ADVAITECS (2 COLUMNS) */}
      <section className="ce-part-why-section">
        <div className="ce-container">
          <div className="ce-part-why-grid">
            {/* Left: Who Can Participate? */}
            <div className="ce-part-box">
              <h3>Who Can Participate?</h3>
              <p className="subtitle">Our workshops are designed for a wide range of learners and organizations.</p>

              <div className="ce-part-pillars-grid">
                <div className="ce-part-pillar">
                  <GraduationCap size={26} className="ce-part-icon" />
                  <h4>Engineering &amp; Computer Science Students</h4>
                  <p>Gain practical, job-ready skills and build your portfolio.</p>
                </div>

                <div className="ce-part-pillar">
                  <Users size={26} className="ce-part-icon" />
                  <h4>College Educators &amp; Faculty</h4>
                  <p>Learn to integrate modern technologies and SkaiMitra into teaching and research.</p>
                </div>

                <div className="ce-part-pillar">
                  <Building2 size={26} className="ce-part-icon" />
                  <h4>Enterprise Professionals</h4>
                  <p>Upskill teams, drive innovation and accelerate digital transformation.</p>
                </div>
              </div>
            </div>

            {/* Right: Why Choose Advaitecs? */}
            <div className="ce-why-box">
              <h3>Why Choose Advaitecs?</h3>
              <ul className="ce-why-bullets">
                <li className="ce-why-item">
                  <CheckCircle2 size={16} />
                  <span>Industry-aligned, hands-on curriculum</span>
                </li>
                <li className="ce-why-item">
                  <CheckCircle2 size={16} />
                  <span>Experienced trainers and AI practitioners</span>
                </li>
                <li className="ce-why-item">
                  <CheckCircle2 size={16} />
                  <span>Real-world projects and use cases</span>
                </li>
                <li className="ce-why-item">
                  <CheckCircle2 size={16} />
                  <span>Flexible delivery – on-site or virtual</span>
                </li>
                <li className="ce-why-item">
                  <CheckCircle2 size={16} />
                  <span>Customized workshops for your needs</span>
                </li>
                <li className="ce-why-item">
                  <CheckCircle2 size={16} />
                  <span>Post-workshop support and learning resources</span>
                </li>
                <li className="ce-why-item">
                  <CheckCircle2 size={16} />
                  <span>Certificate of participation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS & POPULAR DELIVERY OPTIONS (2 COLUMNS) */}
      <section className="ce-works-delivery-section">
        <div className="ce-container">
          <div className="ce-works-delivery-grid">
            {/* Left: How It Works */}
            <div className="ce-works-box">
              <h3>How It Works</h3>
              <div className="ce-steps-row">
                <div className="ce-step-col">
                  <div className="ce-step-badge green">1</div>
                  <h4>Discuss</h4>
                  <p>Share your goals and requirements</p>
                </div>

                <div className="ce-step-col">
                  <div className="ce-step-badge blue">2</div>
                  <h4>Customize</h4>
                  <p>We design a program for your needs</p>
                </div>

                <div className="ce-step-col">
                  <div className="ce-step-badge navy">3</div>
                  <h4>Conduct</h4>
                  <p>Interactive, hands-on workshops</p>
                </div>

                <div className="ce-step-col">
                  <div className="ce-step-badge purple">4</div>
                  <h4>Achieve</h4>
                  <p>Build skills, certify and create impact</p>
                </div>
              </div>
            </div>

            {/* Right: Popular Delivery Options */}
            <div className="ce-delivery-box">
              <h3>Popular Delivery Options</h3>
              <div className="ce-delivery-row">
                <div className="ce-delivery-col">
                  <Building2 size={24} className="ce-delivery-icon" />
                  <h4>On-Site</h4>
                  <span>at Your Campus/Organization</span>
                </div>

                <div className="ce-delivery-col">
                  <Laptop size={24} className="ce-delivery-icon" />
                  <h4>Virtual</h4>
                  <span>Live Online Workshops</span>
                </div>

                <div className="ce-delivery-col">
                  <Users size={24} className="ce-delivery-icon" />
                  <h4>Hybrid</h4>
                  <span>Flexible Combination</span>
                </div>

                <div className="ce-delivery-col">
                  <Settings size={24} className="ce-delivery-icon" />
                  <h4>Custom</h4>
                  <span>Tailored to Your Needs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA BANNER */}
      <section className="ce-cta-banner">
        <div className="ce-cta-content">
          <h2>Let&apos;s Build a Smarter Future Together</h2>
          <p>Bring our workshops to your campus or organization and empower your learners and teams.</p>

          <div className="ce-cta-buttons">
            <Link href="/contactus" className="btn-cta-green-ce">
              <span>Request a Workshop</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/contactus" className="btn-cta-trans-ce">
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="ce-cta-contact-links">
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
