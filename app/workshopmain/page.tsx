'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Lightbulb, 
  Settings, 
  Award, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  UserCheck, 
  Laptop, 
  BarChart3, 
  Phone, 
  Mail,
  ChevronRight,
  Quote
} from 'lucide-react';

export default function WorkshopMainPage() {
  return (
    <div className="wm-page-wrapper">
      <style>{`
        .wm-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .wm-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* 1. HERO SECTION */
        .wm-hero-section {
          background: #ffffff;
          padding: 18px 0 22px;
          border-bottom: 1px solid #f1f5f9;
        }

        .wm-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.18fr;
          gap: 28px;
          align-items: center;
        }

        .wm-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .wm-hero-badge {
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 6px;
        }

        .wm-hero-title {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 10px 0;
        }

        .wm-hero-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 18px 0;
          max-width: 500px;
        }

        .wm-hero-features-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }

        .wm-hero-feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-align: center;
        }

        .wm-hero-feature-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #eef5ff;
          border: 1px solid #d0e1fd;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0056b3;
        }

        .wm-hero-feature-text {
          font-size: 11px;
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
        }

        .wm-hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-wm-explore {
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

        .btn-wm-explore:hover {
          background: #047857;
          transform: translateY(-1px);
        }

        .btn-wm-talk {
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

        .btn-wm-talk:hover {
          border-color: #0056b3;
          background: #f8fafc;
          transform: translateY(-1px);
        }

        /* Hero Image Container: Full natural fit so faces are 100% visible */
        .wm-hero-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .wm-hero-img {
          width: 100%;
          height: auto;
          max-height: 390px;
          object-fit: contain;
          display: block;
          border-radius: 10px;
        }

        /* 2. WORKSHOPS FOR EVERY LEARNER (3 LARGE CARDS) */
        .wm-learners-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .wm-learners-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .wm-learners-header-text h2 {
          font-size: 28px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
          letter-spacing: -0.02em;
        }

        .wm-learners-header-text p {
          font-size: 13.5px;
          color: #64748b;
          margin: 0;
        }

        .wm-view-programs-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13.5px;
          font-weight: 700;
          color: #0056b3;
          text-decoration: none;
        }

        .wm-view-programs-link:hover {
          text-decoration: underline;
        }

        .wm-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .wm-program-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }

        .wm-program-card:hover {
          border-color: #93c5fd;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 86, 179, 0.08);
        }

        .wm-card-img-wrap {
          position: relative;
          width: 100%;
          height: 185px;
          background: #f1f5f9;
        }

        .wm-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }

        .wm-card-badge-icon {
          position: absolute;
          bottom: -18px;
          left: 20px;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #0284c7;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(2, 132, 199, 0.3);
          z-index: 2;
        }

        .wm-card-body {
          padding: 26px 20px 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .wm-card-title {
          font-size: 19px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 2px 0;
        }

        .wm-card-subtitle {
          font-size: 13px;
          font-weight: 700;
          color: #0284c7;
          margin: 0 0 10px 0;
        }

        .wm-card-desc {
          font-size: 12.5px;
          line-height: 1.5;
          color: #475569;
          margin: 0 0 14px 0;
          min-height: 56px;
        }

        .wm-card-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 18px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .wm-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          line-height: 1.4;
          color: #334155;
        }

        .wm-bullet-item svg {
          color: #059669;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .btn-card-action {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          width: 100%;
          padding: 9px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          color: #0056b3;
          background: #ffffff;
          border: 1.5px solid #0056b3;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-card-action:hover {
          background: #0056b3;
          color: #ffffff;
        }

        /* 3. WHY CHOOSE ADVAITECS WORKSHOPS? (6 CARDS) */
        .wm-why-section {
          padding: 24px 0 28px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .wm-section-header {
          text-align: center;
          margin-bottom: 22px;
        }

        .wm-section-header h2 {
          font-size: 28px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0 0 4px 0;
        }

        .wm-section-header p {
          font-size: 13.5px;
          color: #64748b;
          margin: 0;
        }

        .wm-why-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
        }

        .wm-why-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 10px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }

        .wm-why-card:hover {
          transform: translateY(-2px);
          border-color: #0056b3;
          box-shadow: 0 4px 14px rgba(0, 86, 179, 0.08);
        }

        .wm-why-icon {
          color: #0056b3;
          margin-bottom: 10px;
        }

        .wm-why-card h3 {
          font-size: 13px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .wm-why-card p {
          font-size: 11px;
          line-height: 1.45;
          color: #64748b;
          margin: 0;
        }

        /* 4. HOW IT WORKS + OUTCOMES + TESTIMONIAL (3 COLUMNS) */
        .wm-details-section {
          padding: 24px 0 30px;
          background: #ffffff;
        }

        .wm-details-grid {
          display: grid;
          grid-template-columns: 1.4fr 1.3fr 1fr;
          gap: 18px;
        }

        .wm-how-card, .wm-outcomes-card, .wm-testimonial-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .wm-how-card h3, .wm-outcomes-card h3 {
          font-size: 17px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 16px 0;
        }

        .wm-steps-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          align-items: flex-start;
          position: relative;
        }

        .wm-step-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
        }

        .wm-step-badge {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #059669;
          color: #ffffff;
          font-weight: 800;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .wm-step-badge.blue {
          background: #0056b3;
        }

        .wm-step-badge.purple {
          background: #7c3aed;
        }

        .wm-step-col h4 {
          font-size: 12.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
        }

        .wm-step-col p {
          font-size: 10.5px;
          line-height: 1.35;
          color: #64748b;
          margin: 0;
        }

        /* Outcomes Bullets */
        .wm-outcomes-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .wm-outcome-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          line-height: 1.4;
          color: #334155;
        }

        .wm-outcome-item svg {
          color: #059669;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Testimonial Card */
        .wm-testimonial-card {
          background: #f0fdf4;
          border: 1.5px solid #bbf7d0;
          justify-content: center;
          position: relative;
        }

        .wm-quote-mark {
          font-size: 38px;
          font-weight: 900;
          color: #0056b3;
          line-height: 1;
          margin-bottom: 6px;
        }

        .wm-quote-text {
          font-size: 13px;
          font-style: italic;
          line-height: 1.5;
          color: #1e293b;
          margin: 0 0 12px 0;
        }

        .wm-quote-author {
          font-size: 11.5px;
          font-weight: 700;
          color: #0056b3;
          text-align: right;
          margin: 0;
        }

        /* 5. BOTTOM CTA BANNER */
        .wm-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 30px 20px;
          text-align: center;
          overflow: hidden;
        }

        .wm-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 12% 35%, rgba(0, 140, 255, 0.22) 0%, transparent 42%),
            radial-gradient(circle at 88% 65%, rgba(0, 140, 255, 0.22) 0%, transparent 42%);
          pointer-events: none;
        }

        .wm-cta-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
        }

        .wm-cta-banner h2 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 6px 0;
          color: #ffffff;
          letter-spacing: -0.015em;
        }

        .wm-cta-banner p {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0 0 18px 0;
        }

        .wm-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }

        .btn-cta-green-req {
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

        .btn-cta-green-req:hover {
          background: #10b981;
          transform: translateY(-1px);
        }

        .btn-cta-contact-trans {
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

        .btn-cta-contact-trans:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #ffffff;
          transform: translateY(-1px);
        }

        .wm-cta-contact-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          font-size: 13px;
          color: #94a3b8;
        }

        .wm-cta-contact-links a {
          color: #cbd5e1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }

        .wm-cta-contact-links a:hover {
          color: #ffffff;
        }

        /* RESPONSIVE BREAKPOINTS (DESKTOP, TABLET, MOBILE) */
        @media (max-width: 1040px) {
          .wm-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .wm-hero-left {
            align-items: center;
          }
          .wm-hero-features-row, .wm-hero-buttons {
            justify-content: center;
          }
          .wm-cards-grid {
            grid-template-columns: 1fr;
          }
          .wm-why-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .wm-details-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .wm-hero-title {
            font-size: 30px;
          }
          .wm-why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .wm-steps-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/workshopsmain.png (ALL FACES FULLY VISIBLE) */}
      <section className="wm-hero-section">
        <div className="wm-container">
          <div className="wm-hero-grid">
            {/* Left Column */}
            <div className="wm-hero-left">
              <span className="wm-hero-badge">WORKSHOPS &amp; TRAINING</span>
              <h1 className="wm-hero-title">
                Learn Today.<br />
                Build Tomorrow.
              </h1>
              <p className="wm-hero-desc">
                Hands-on, practical workshops for schools, colleges and enterprises to build real-world skills in AI, coding and modern technologies.
              </p>

              {/* 4 Feature Pills */}
              <div className="wm-hero-features-row">
                <div className="wm-hero-feature-item">
                  <div className="wm-hero-feature-icon">
                    <Users size={18} />
                  </div>
                  <span className="wm-hero-feature-text">Hands-On Learning</span>
                </div>

                <div className="wm-hero-feature-item">
                  <div className="wm-hero-feature-icon">
                    <Lightbulb size={18} />
                  </div>
                  <span className="wm-hero-feature-text">Industry Experts</span>
                </div>

                <div className="wm-hero-feature-item">
                  <div className="wm-hero-feature-icon">
                    <Settings size={18} />
                  </div>
                  <span className="wm-hero-feature-text">Real-World Projects</span>
                </div>

                <div className="wm-hero-feature-item">
                  <div className="wm-hero-feature-icon">
                    <Award size={18} />
                  </div>
                  <span className="wm-hero-feature-text">Certificates</span>
                </div>
              </div>

              {/* 2 Buttons */}
              <div className="wm-hero-buttons">
                <Link href="#workshops-catalog" className="btn-wm-explore">
                  <span>Explore Workshops</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contactus" className="btn-wm-talk">
                  <span>Talk to Our Team</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: workshopsmain.png with uncropped faces */}
            <div className="wm-hero-img-wrap">
              <Image
                src="/images/workshopsmain.png"
                alt="Advaitecs workshops team learning together"
                width={850}
                height={480}
                priority
                className="wm-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WORKSHOPS FOR EVERY LEARNER (3 LARGE CARDS) */}
      <section className="wm-learners-section" id="workshops-catalog">
        <div className="wm-container">
          <div className="wm-learners-header">
            <div className="wm-learners-header-text">
              <h2>Workshops for Every Learner</h2>
              <p>Tailored programs for schools, colleges and enterprises to build future-ready skills.</p>
            </div>
            <Link href="/trainingprograms" className="wm-view-programs-link">
              <span>View Training Programs</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="wm-cards-grid">
            {/* Card 1: For Schools */}
            <div className="wm-program-card">
              <div className="wm-card-img-wrap">
                <Image
                  src="/images/schools1.png"
                  alt="Students in AI and coding workshop for schools"
                  width={400}
                  height={220}
                  className="wm-card-img"
                />
                <div className="wm-card-badge-icon">
                  <GraduationCap size={22} />
                </div>
              </div>

              <div className="wm-card-body">
                <h3 className="wm-card-title">For Schools</h3>
                <div className="wm-card-subtitle">AI &amp; Coding Workshops</div>
                <p className="wm-card-desc">
                  Hands-on AI and coding workshops for Grades 6-12 using SkaiMitra LMS. Inspire creativity, critical thinking and real-world problem solving.
                </p>

                <ul className="wm-card-bullets">
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Aligned with CBSE/ICSE curricula</span>
                  </li>
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Interactive, age-appropriate content</span>
                  </li>
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Projects and activity-based learning</span>
                  </li>
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Certificates for Trained Teachers</span>
                  </li>
                </ul>

                <Link href="/workshops/schools" className="btn-card-action">
                  <span>View School Workshops</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: For Colleges */}
            <div className="wm-program-card">
              <div className="wm-card-img-wrap">
                <Image
                  src="/images/colleges1.png"
                  alt="College students engaged in full stack and AI engineering workshop"
                  width={400}
                  height={220}
                  className="wm-card-img"
                />
                <div className="wm-card-badge-icon">
                  <Building2 size={22} />
                </div>
              </div>

              <div className="wm-card-body">
                <h3 className="wm-card-title">For Colleges</h3>
                <div className="wm-card-subtitle">Full Stack, AI &amp; SkaiMitra</div>
                <p className="wm-card-desc">
                  Practical workshops for engineering and computer science students and faculty. Learn modern technologies and build real-world projects.
                </p>

                <ul className="wm-card-bullets">
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Full Stack Development</span>
                  </li>
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>AI &amp; Generative AI applications</span>
                  </li>
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Faculty enablement programs</span>
                  </li>
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Projects, assessments and certificates</span>
                  </li>
                </ul>

                <Link href="/workshops/colleges-enterprises" className="btn-card-action">
                  <span>View College Workshops</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: For Enterprises */}
            <div className="wm-program-card">
              <div className="wm-card-img-wrap">
                <Image
                  src="/images/enterprises.png"
                  alt="Corporate teams collaborating in enterprise AI and tech workshop"
                  width={400}
                  height={220}
                  className="wm-card-img"
                />
                <div className="wm-card-badge-icon">
                  <Users size={22} />
                </div>
              </div>

              <div className="wm-card-body">
                <h3 className="wm-card-title">For Enterprises</h3>
                <div className="wm-card-subtitle">Upskill Teams for the AI Era</div>
                <p className="wm-card-desc">
                  Customized, industry-focused workshops for professionals and teams. Drive innovation, improve productivity and accelerate digital transformation.
                </p>

                <ul className="wm-card-bullets">
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Role-based and customized content</span>
                  </li>
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Hands-on, project-based learning</span>
                  </li>
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Flexible delivery (on-site/virtual/hybrid)</span>
                  </li>
                  <li className="wm-bullet-item">
                    <CheckCircle2 size={15} />
                    <span>Completion certificates</span>
                  </li>
                </ul>

                <Link href="/corprateTraining" className="btn-card-action">
                  <span>View Enterprise Workshops</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE ADVAITECS WORKSHOPS? (6 CARDS) */}
      <section className="wm-why-section">
        <div className="wm-container">
          <div className="wm-section-header">
            <h2>Why Choose Advaitecs Workshops?</h2>
            <p>Practical. Flexible. Impactful.</p>
          </div>

          <div className="wm-why-grid">
            <div className="wm-why-card">
              <Users size={26} className="wm-why-icon" />
              <h3>Industry-Aligned Curriculum</h3>
              <p>Designed with real-world skills and current industry trends.</p>
            </div>

            <div className="wm-why-card">
              <UserCheck size={26} className="wm-why-icon" />
              <h3>Expert Instructors</h3>
              <p>Learn from experienced practitioners and industry experts.</p>
            </div>

            <div className="wm-why-card">
              <Settings size={26} className="wm-why-icon" />
              <h3>Hands-On Practice</h3>
              <p>Work on real projects and use cases.</p>
            </div>

            <div className="wm-why-card">
              <Laptop size={26} className="wm-why-icon" />
              <h3>Flexible Delivery</h3>
              <p>On-site, virtual or hybrid formats to suit your needs.</p>
            </div>

            <div className="wm-why-card">
              <Award size={26} className="wm-why-icon" />
              <h3>Certificates</h3>
              <p>Earn certificates to showcase your learning.</p>
            </div>

            <div className="wm-why-card">
              <BarChart3 size={26} className="wm-why-icon" />
              <h3>Measurable Impact</h3>
              <p>Build skills that drive academic and business outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS + OUTCOMES + TESTIMONIAL (3 CARDS) */}
      <section className="wm-details-section">
        <div className="wm-container">
          <div className="wm-details-grid">
            {/* Left: How It Works */}
            <div className="wm-how-card">
              <h3>How It Works</h3>
              <div className="wm-steps-row">
                <div className="wm-step-col">
                  <div className="wm-step-badge">1</div>
                  <h4>Discuss</h4>
                  <p>Share your goals and requirements</p>
                </div>

                <div className="wm-step-col">
                  <div className="wm-step-badge blue">2</div>
                  <h4>Customize</h4>
                  <p>We design a program for your needs</p>
                </div>

                <div className="wm-step-col">
                  <div className="wm-step-badge purple">3</div>
                  <h4>Conduct</h4>
                  <p>Interactive, hands-on workshops</p>
                </div>

                <div className="wm-step-col">
                  <div className="wm-step-badge">4</div>
                  <h4>Achieve</h4>
                  <p>Build skills, certify and create impact</p>
                </div>
              </div>
            </div>

            {/* Middle: Outcomes You Can Expect */}
            <div className="wm-outcomes-card">
              <h3>Outcomes You Can Expect</h3>
              <ul className="wm-outcomes-bullets">
                <li className="wm-outcome-item">
                  <CheckCircle2 size={16} />
                  <span>Practical, job-ready skills</span>
                </li>
                <li className="wm-outcome-item">
                  <CheckCircle2 size={16} />
                  <span>Increased confidence and creativity</span>
                </li>
                <li className="wm-outcome-item">
                  <CheckCircle2 size={16} />
                  <span>Real-world project experience</span>
                </li>
                <li className="wm-outcome-item">
                  <CheckCircle2 size={16} />
                  <span>Improved academic and professional performance</span>
                </li>
                <li className="wm-outcome-item">
                  <CheckCircle2 size={16} />
                  <span>Long-term support and learning resources</span>
                </li>
              </ul>
            </div>

            {/* Right: Testimonial Card */}
            <div className="wm-testimonial-card">
              <div className="wm-quote-mark">&ldquo;</div>
              <p className="wm-quote-text">
                The workshop was engaging, practical and exactly what we needed to prepare for the future.
              </p>
              <p className="wm-quote-author">— Workshop Participant</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="wm-cta-banner">
        <div className="wm-cta-content">
          <h2>Ready to Build a Brighter Future?</h2>
          <p>Let&apos;s create a customized workshop program for your school, college or organization.</p>

          <div className="wm-cta-buttons">
            <Link href="/contactus" className="btn-cta-green-req">
              <span>Request a Workshop</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/contactus" className="btn-cta-contact-trans">
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="wm-cta-contact-links">
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
