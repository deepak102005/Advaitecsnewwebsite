'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Cpu,
  BookOpen,
  Cloud,
  BarChart3,
  Target,
  Lightbulb,
  Code2,
  Bot,
  Users,
  FileText,
  HelpCircle,
  Award,
  CalendarDays,
  Megaphone,
  Sparkles,
  FileCheck,
  Smartphone,
  UserCog,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';

export default function SkaiMitraPage() {
  return (
    <div className="skai-page-wrapper">
      <Header />

      <main className="skai-main-content">
        {/* =========================================================================
            SECTION 1: HERO SECTION
        ========================================================================== */}
        <section className="skai-hero-section">
          <div className="skai-container skai-hero-container">
            {/* Left Hero Content */}
            <div className="skai-hero-left">
              <div className="skai-logo-wrap">
                <Image
                  src="/images/SkaiMitra_LogoV2.0.jpg"
                  alt="SkaiMitra - Learn Today. Create Tomorrow."
                  width={210}
                  height={62}
                  priority
                  className="skai-brand-logo"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <span className="skai-hero-badge">
                AI-POWERED LEARNING FOR FUTURE-READY SCHOOLS
              </span>

              <h1 className="skai-hero-title">
                Learn. Create. Grow <br />
                <span className="skai-hero-title-sub">with SkaiMitra.</span>
              </h1>

              <p className="skai-hero-desc">
                SkaiMitra brings AI &amp; Coding skill education, learning resources,
                assignments, assessments, progress tracking and AI-powered
                assistance into one learning platform.
              </p>

              {/* 4 Feature Circles */}
              <div className="skai-hero-features-row">
                <div className="skai-hero-feature-item">
                  <div className="skai-feature-icon-circle">
                    <Cpu size={22} strokeWidth={2} />
                  </div>
                  <span className="skai-feature-label">
                    AI &amp; Coding<br />Skills
                  </span>
                </div>

                <div className="skai-hero-feature-item">
                  <div className="skai-feature-icon-circle">
                    <BookOpen size={22} strokeWidth={2} />
                  </div>
                  <span className="skai-feature-label">
                    Interactive<br />Learning
                  </span>
                </div>

                <div className="skai-hero-feature-item">
                  <div className="skai-feature-icon-circle">
                    <Cloud size={22} strokeWidth={2} />
                  </div>
                  <span className="skai-feature-label">
                    AI-Powered<br />LMS
                  </span>
                </div>

                <div className="skai-hero-feature-item">
                  <div className="skai-feature-icon-circle">
                    <BarChart3 size={22} strokeWidth={2} />
                  </div>
                  <span className="skai-feature-label">
                    Progress<br />Tracking
                  </span>
                </div>
              </div>

              {/* Hero CTA Buttons */}
              <div className="skai-hero-cta-row">
                <Link href="#explore" className="skai-btn-primary">
                  Explore SkaiMitra <ArrowRight size={16} />
                </Link>
                <Link href="#demo" className="skai-btn-outline">
                  Request a Demo <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="skai-hero-right">
              <div className="skai-hero-image-wrapper">
                <Image
                  src="/images/Skaimitra/herosection.png"
                  alt="SkaiMitra Classroom Learning"
                  width={720}
                  height={430}
                  priority
                  className="skai-hero-img"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: ONE PLATFORM. COMPLETE LEARNING EXPERIENCE.
        ========================================================================== */}
        <section className="skai-section skai-platform-section">
          <div className="skai-container">
            <div className="skai-section-header">
              <h2 className="skai-section-title">
                One Platform. Complete Learning Experience.
              </h2>
              <p className="skai-section-subtitle">
                Everything your school needs to deliver AI and Coding education, engage learners, and drive real results.
              </p>
            </div>

            <div className="skai-four-grid">
              {/* Card 1: Learn */}
              <div className="skai-pillar-card">
                <div className="skai-pillar-icon-box">
                  <BookOpen size={30} className="skai-pillar-icon" />
                </div>
                <h3 className="skai-pillar-title">Learn</h3>
                <p className="skai-pillar-desc">
                  Structured AI &amp; Coding curriculum and digital resources.
                </p>
              </div>

              {/* Card 2: Practice */}
              <div className="skai-pillar-card">
                <div className="skai-pillar-icon-box">
                  <Target size={30} className="skai-pillar-icon" />
                </div>
                <h3 className="skai-pillar-title">Practice</h3>
                <p className="skai-pillar-desc">
                  Assignments, exercises, quizzes and guided activities.
                </p>
              </div>

              {/* Card 3: Create */}
              <div className="skai-pillar-card">
                <div className="skai-pillar-icon-box">
                  <Lightbulb size={30} className="skai-pillar-icon" />
                </div>
                <h3 className="skai-pillar-title">Create</h3>
                <p className="skai-pillar-desc">
                  Hands-on coding, AI, IoT and real-world projects.
                </p>
              </div>

              {/* Card 4: Track */}
              <div className="skai-pillar-card">
                <div className="skai-pillar-icon-box">
                  <BarChart3 size={30} className="skai-pillar-icon" />
                </div>
                <h3 className="skai-pillar-title">Track</h3>
                <p className="skai-pillar-desc">
                  Attendance, assessments, grades, progress and actionable insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SKILL EDUCATION WITH SKAIMITRA
        ========================================================================== */}
        <section className="skai-section skai-skill-section">
          <div className="skai-container">
            <div className="skai-section-header">
              <h2 className="skai-section-title">Skill Education with SkaiMitra</h2>
              <p className="skai-section-subtitle">
                CBSE/ICSE-oriented skill learning in AI and Coding for Grades 6-12
              </p>
            </div>

            <div className="skai-four-grid">
              {/* Card 1: Artificial Intelligence */}
              <div className="skai-course-card">
                <div className="skai-card-img-box">
                  <Image
                    src="/images/Skaimitra/ai.png"
                    alt="Artificial Intelligence"
                    width={320}
                    height={160}
                    className="skai-card-img"
                  />
                </div>
                <div className="skai-card-content">
                  <div className="skai-card-title-row">
                    <div className="skai-card-badge-circle">
                      <Cpu size={18} className="skai-card-badge-icon" />
                    </div>
                    <h3 className="skai-card-title">Artificial Intelligence</h3>
                  </div>
                  <ul className="skai-card-bullets">
                    <li>AI foundations and AI domains</li>
                    <li>Prompt engineering</li>
                    <li>Responsible AI</li>
                    <li>Real-world applications</li>
                  </ul>
                  <div className="skai-card-action">
                    <Link href="#ai" className="skai-card-btn">
                      Learn More <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Coding & Computational Thinking */}
              <div className="skai-course-card">
                <div className="skai-card-img-box">
                  <Image
                    src="/images/Skaimitra/coding.png"
                    alt="Coding & Computational Thinking"
                    width={320}
                    height={160}
                    className="skai-card-img"
                  />
                </div>
                <div className="skai-card-content">
                  <div className="skai-card-title-row">
                    <div className="skai-card-badge-circle">
                      <Code2 size={18} className="skai-card-badge-icon" />
                    </div>
                    <h3 className="skai-card-title">
                      Coding &amp; Computational Thinking
                    </h3>
                  </div>
                  <ul className="skai-card-bullets">
                    <li>Programming fundamentals</li>
                    <li>Python and coding activities</li>
                    <li>Problem solving and algorithms</li>
                    <li>Project development</li>
                  </ul>
                  <div className="skai-card-action">
                    <Link href="#coding" className="skai-card-btn">
                      Learn More <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3: Hands-On Projects */}
              <div className="skai-course-card">
                <div className="skai-card-img-box">
                  <Image
                    src="/images/Skaimitra/hands on projects.png"
                    alt="Hands-On Projects"
                    width={320}
                    height={160}
                    className="skai-card-img"
                  />
                </div>
                <div className="skai-card-content">
                  <div className="skai-card-title-row">
                    <div className="skai-card-badge-circle">
                      <Bot size={18} className="skai-card-badge-icon" />
                    </div>
                    <h3 className="skai-card-title">Hands-On Projects</h3>
                  </div>
                  <ul className="skai-card-bullets">
                    <li>Build real-world solutions</li>
                    <li>AI, IoT and creative projects</li>
                    <li>Collaborate and innovate</li>
                    <li>Showcase your learning</li>
                  </ul>
                  <div className="skai-card-action">
                    <Link href="#projects" className="skai-card-btn">
                      Learn More <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 4: Teacher Enablement */}
              <div className="skai-course-card">
                <div className="skai-card-img-box">
                  <Image
                    src="/images/Skaimitra/teacher.png"
                    alt="Teacher Enablement"
                    width={320}
                    height={160}
                    className="skai-card-img"
                  />
                </div>
                <div className="skai-card-content">
                  <div className="skai-card-title-row">
                    <div className="skai-card-badge-circle">
                      <Users size={18} className="skai-card-badge-icon" />
                    </div>
                    <h3 className="skai-card-title">Teacher Enablement</h3>
                  </div>
                  <ul className="skai-card-bullets">
                    <li>Lesson planning and teaching resources</li>
                    <li>Assignments and assessments</li>
                    <li>AI-assisted support</li>
                    <li>Professional development</li>
                  </ul>
                  <div className="skai-card-action">
                    <Link href="#teacher" className="skai-card-btn">
                      Learn More <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: EVERYTHING SCHOOLS NEED IN ONE LMS
        ========================================================================== */}
        <section className="skai-section skai-lms-section">
          <div className="skai-container">
            <div className="skai-section-header">
              <h2 className="skai-section-title">Everything Schools Need in One LMS</h2>
              <p className="skai-section-subtitle">
                A comprehensive platform to manage teaching, learning, and school operations.
              </p>
            </div>

            <div className="skai-lms-grid">
              <div className="skai-lms-tile">
                <BookOpen size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Course &amp; Learning Resources</span>
              </div>

              <div className="skai-lms-tile">
                <FileText size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Lesson Plans</span>
              </div>

              <div className="skai-lms-tile">
                <HelpCircle size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Assignments &amp; Question Bank</span>
              </div>

              <div className="skai-lms-tile">
                <Award size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Assessments &amp; Grading</span>
              </div>

              <div className="skai-lms-tile">
                <CalendarDays size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Attendance</span>
              </div>

              <div className="skai-lms-tile">
                <BarChart3 size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Reports &amp; Analytics</span>
              </div>

              <div className="skai-lms-tile">
                <Megaphone size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Communications</span>
              </div>

              <div className="skai-lms-tile">
                <Users size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Parent Engagement</span>
              </div>

              <div className="skai-lms-tile">
                <Sparkles size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Skai Assistant</span>
              </div>

              <div className="skai-lms-tile">
                <FileCheck size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Rubrics &amp; AI-Assisted Grading</span>
              </div>

              <div className="skai-lms-tile">
                <Smartphone size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">Mobile Application</span>
              </div>

              <div className="skai-lms-tile">
                <UserCog size={24} className="skai-lms-icon" />
                <span className="skai-lms-name">User &amp; Token Management</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: BUILT FOR EVERY USER
        ========================================================================== */}
        <section className="skai-section skai-users-section">
          <div className="skai-container">
            <h2 className="skai-users-heading">Built for Every User</h2>

            <div className="skai-four-grid">
              {/* Student */}
              <div className="skai-user-card">
                <div className="skai-user-avatar-wrap">
                  <Image
                    src="/images/Skaimitra/studentprofile.png"
                    alt="Student Profile"
                    width={72}
                    height={72}
                    className="skai-user-avatar"
                  />
                </div>
                <div className="skai-user-info">
                  <h4 className="skai-user-role">Students</h4>
                  <p className="skai-user-desc">
                    Learn, practice, submit work, take assessments and track progress.
                  </p>
                </div>
              </div>

              {/* Teacher */}
              <div className="skai-user-card">
                <div className="skai-user-avatar-wrap">
                  <Image
                    src="/images/Skaimitra/teacherprofile.png"
                    alt="Teacher Profile"
                    width={72}
                    height={72}
                    className="skai-user-avatar"
                  />
                </div>
                <div className="skai-user-info">
                  <h4 className="skai-user-role">Teachers</h4>
                  <p className="skai-user-desc">
                    Plan lessons, share resources, create assignments and assessments, and monitor learning.
                  </p>
                </div>
              </div>

              {/* School Administrator */}
              <div className="skai-user-card">
                <div className="skai-user-avatar-wrap">
                  <Image
                    src="/images/Skaimitra/schoolAdmin profile.png"
                    alt="School Administrator Profile"
                    width={72}
                    height={72}
                    className="skai-user-avatar"
                  />
                </div>
                <div className="skai-user-info">
                  <h4 className="skai-user-role">School Administrators</h4>
                  <p className="skai-user-desc">
                    Manage users, curriculum, attendance, reports, communications and AI access.
                  </p>
                </div>
              </div>

              {/* Parent */}
              <div className="skai-user-card">
                <div className="skai-user-avatar-wrap">
                  <Image
                    src="/images/Skaimitra/parent profile.png"
                    alt="Parent Profile"
                    width={72}
                    height={72}
                    className="skai-user-avatar"
                  />
                </div>
                <div className="skai-user-info">
                  <h4 className="skai-user-role">Parents</h4>
                  <p className="skai-user-desc">
                    Stay informed about attendance, performance, assignments, events and school communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: THREE-COLUMN DETAILS SECTION
        ========================================================================== */}
        <section className="skai-section skai-details-section">
          <div className="skai-container">
            <div className="skai-three-col-grid">
              {/* Column 1: How SkaiMitra Supports Skill Learning */}
              <div className="skai-detail-col skai-flow-col">
                <h3 className="skai-detail-heading">How SkaiMitra Supports Skill Learning</h3>
                
                <div className="skai-flow-steps">
                  {/* Step 1 */}
                  <div className="skai-flow-step">
                    <div className="skai-step-circle skai-step-1">1</div>
                    <h5 className="skai-step-title">Plan</h5>
                    <p className="skai-step-desc">
                      Configure courses, classes, users and learning resources.
                    </p>
                  </div>

                  <span className="skai-step-arrow">→</span>

                  {/* Step 2 */}
                  <div className="skai-flow-step">
                    <div className="skai-step-circle skai-step-2">2</div>
                    <h5 className="skai-step-title">Teach</h5>
                    <p className="skai-step-desc">
                      Deliver instructor-led learning with digital content and activities.
                    </p>
                  </div>

                  <span className="skai-step-arrow">→</span>

                  {/* Step 3 */}
                  <div className="skai-flow-step">
                    <div className="skai-step-circle skai-step-3">3</div>
                    <h5 className="skai-step-title">Practice &amp; Assess</h5>
                    <p className="skai-step-desc">
                      Assignments, quizzes, projects, rubrics and feedback.
                    </p>
                  </div>

                  <span className="skai-step-arrow">→</span>

                  {/* Step 4 */}
                  <div className="skai-flow-step">
                    <div className="skai-step-circle skai-step-4">4</div>
                    <h5 className="skai-step-title">Improve</h5>
                    <p className="skai-step-desc">
                      Progress reports, analytics, AI insights, and targeted support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2: Why Choose SkaiMitra? */}
              <div className="skai-detail-col skai-why-col">
                <h3 className="skai-detail-heading">Why Choose SkaiMitra?</h3>
                <ul className="skai-check-list">
                  <li>
                    <CheckCircle2 size={16} className="skai-check-icon" />
                    <span>Integrated LMS + AI tools</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="skai-check-icon" />
                    <span>AI &amp; Coding skill education</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="skai-check-icon" />
                    <span>Structured learning resources</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="skai-check-icon" />
                    <span>Hands-on, project-based learning</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="skai-check-icon" />
                    <span>Teacher and administrator workflows</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="skai-check-icon" />
                    <span>Assessments, rubrics and progress reports</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="skai-check-icon" />
                    <span>Parent communication and engagement</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="skai-check-icon" />
                    <span>Flexible school implementation</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Learning Outcomes */}
              <div className="skai-detail-col skai-outcomes-col">
                <h3 className="skai-detail-heading">Learning Outcomes</h3>
                <ul className="skai-outcomes-list">
                  <li>
                    <Sparkles size={15} className="skai-outcome-icon" />
                    <span>Understand AI concepts</span>
                  </li>
                  <li>
                    <Code2 size={15} className="skai-outcome-icon" />
                    <span>Develop coding and problem-solving skills</span>
                  </li>
                  <li>
                    <Cpu size={15} className="skai-outcome-icon" />
                    <span>Build real-world projects</span>
                  </li>
                  <li>
                    <ShieldCheck size={15} className="skai-outcome-icon" />
                    <span>Use AI responsibly</span>
                  </li>
                  <li>
                    <Users size={15} className="skai-outcome-icon" />
                    <span>Collaborate and communicate</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} className="skai-outcome-icon" />
                    <span>Build a portfolio of learning evidence</span>
                  </li>
                </ul>

                {/* For Schools Card Box */}
                <div className="skai-for-schools-box">
                  <Building2 size={26} className="skai-schools-icon" />
                  <div className="skai-schools-info">
                    <h5 className="skai-schools-title">For Schools</h5>
                    <p className="skai-schools-line1">
                      Grades 6–12 | Teachers | Administrators | Parents
                    </p>
                    <p className="skai-schools-line2">
                      A complete solution for AI and Coding skill education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: PRE-FOOTER CTA BANNER
        ========================================================================== */}
        <section className="skai-cta-banner">
          <div className="skai-container skai-cta-content">
            <h2 className="skai-cta-heading">
              Build Future-Ready Skills with SkaiMitra
            </h2>
            <p className="skai-cta-subheading">
              Bring AI, Coding and intelligent learning tools into one connected school experience.
            </p>

            <div className="skai-cta-btn-row">
              <Link href="#demo" className="skai-cta-btn-green">
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link href="#contact" className="skai-cta-btn-trans">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="skai-cta-contact-row">
              <a href="tel:+917358435345" className="skai-cta-contact-item">
                <Phone size={14} className="skai-cta-icon" />
                <span>+91 73584 35345</span>
              </a>
              <a href="mailto:info@advaitecs.com" className="skai-cta-contact-item">
                <Mail size={14} className="skai-cta-icon" />
                <span>info@advaitecs.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* =========================================================================
          STYLES (Strictly scoped, zero hydration mismatch issues)
      ========================================================================== */}
      <style>{`
        .skai-page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          color: #1e293b;
          font-family: inherit;
        }

        .skai-main-content {
          flex: 1;
        }

        .skai-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
        }

        /* Generic Section Headers */
        .skai-section {
          padding: 36px 0;
        }

        .skai-section-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .skai-section-title {
          font-size: 26px;
          font-weight: 800;
          color: #1e3a8a;
          margin: 0 0 6px;
          letter-spacing: -0.02em;
        }

        .skai-section-subtitle {
          font-size: 14px;
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        /* Four Column Grid used across sections */
        .skai-four-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        /* =========================================================================
           HERO SECTION
        ========================================================================= */
        .skai-hero-section {
          background-color: #ffffff;
          padding: 24px 0 32px;
          border-bottom: 1px solid #f1f5f9;
        }

        .skai-hero-container {
          display: grid;
          grid-template-columns: 46% 54%;
          align-items: center;
          gap: 24px;
        }

        .skai-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .skai-logo-wrap {
          margin-bottom: 14px;
        }

        .skai-brand-logo {
          width: auto;
          height: 52px;
        }

        .skai-hero-badge {
          font-size: 11.5px;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .skai-hero-title {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.15;
          color: #0f172a;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }

        .skai-hero-title-sub {
          color: #1d4ed8;
        }

        .skai-hero-desc {
          font-size: 14px;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 20px;
          max-width: 480px;
        }

        .skai-hero-features-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .skai-hero-feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 76px;
        }

        .skai-feature-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #eff6ff;
          border: 1.5px solid #bfdbfe;
          color: #1d4ed8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .skai-hero-feature-item:hover .skai-feature-icon-circle {
          transform: translateY(-2px);
          background: #dbeafe;
        }

        .skai-feature-label {
          font-size: 11px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.25;
        }

        .skai-hero-cta-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skai-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #0d735f;
          color: #ffffff;
          font-weight: 600;
          font-size: 13.5px;
          padding: 9px 18px;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }

        .skai-btn-primary:hover {
          background-color: #0b604f;
        }

        .skai-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #ffffff;
          color: #1d4ed8;
          border: 1.5px solid #2563eb;
          font-weight: 600;
          font-size: 13.5px;
          padding: 8px 18px;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .skai-btn-outline:hover {
          background-color: #eff6ff;
        }

        .skai-hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .skai-hero-image-wrapper {
          position: relative;
          width: 100%;
        }

        .skai-hero-img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* =========================================================================
           ONE PLATFORM PILLARS
        ========================================================================= */
        .skai-platform-section {
          background-color: #ffffff;
          padding-top: 36px;
          padding-bottom: 24px;
        }

        .skai-pillar-card {
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          padding: 22px 18px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .skai-pillar-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.08);
          border-color: #93c5fd;
        }

        .skai-pillar-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .skai-pillar-icon {
          color: #2563eb;
        }

        .skai-pillar-title {
          font-size: 17px;
          font-weight: 800;
          color: #1e3a8a;
          margin: 0 0 6px;
        }

        .skai-pillar-desc {
          font-size: 12.5px;
          line-height: 1.45;
          color: #64748b;
          margin: 0;
        }

        /* =========================================================================
           SKILL EDUCATION CARDS
        ========================================================================= */
        .skai-skill-section {
          background-color: #ffffff;
          padding-top: 24px;
          padding-bottom: 32px;
        }

        .skai-course-card {
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .skai-course-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.08);
        }

        .skai-card-img-box {
          width: 100%;
          height: 145px;
          overflow: hidden;
          background-color: #f8fafc;
        }

        .skai-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .skai-card-content {
          padding: 14px 14px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .skai-card-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .skai-card-badge-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .skai-card-badge-icon {
          color: #2563eb;
        }

        .skai-card-title {
          font-size: 14.5px;
          font-weight: 800;
          color: #1e3a8a;
          line-height: 1.25;
          margin: 0;
        }

        .skai-card-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 14px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          flex: 1;
        }

        .skai-card-bullets li {
          position: relative;
          padding-left: 14px;
          font-size: 12px;
          line-height: 1.35;
          color: #334155;
        }

        .skai-card-bullets li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #2563eb;
        }

        .skai-card-action {
          display: flex;
          justify-content: flex-end;
          margin-top: auto;
        }

        .skai-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
          color: #2563eb;
          background: transparent;
          border: 1.5px solid #2563eb;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .skai-card-btn:hover {
          background-color: #2563eb;
          color: #ffffff;
        }

        /* =========================================================================
           EVERYTHING SCHOOLS NEED IN ONE LMS (12 tiles: 6 cols x 2 rows)
        ========================================================================= */
        .skai-lms-section {
          background-color: #ffffff;
          padding-top: 24px;
          padding-bottom: 30px;
        }

        .skai-lms-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .skai-lms-tile {
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-radius: 10px;
          padding: 16px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 100px;
          box-shadow: 0 1px 4px rgba(37, 99, 235, 0.03);
          transition: all 0.2s ease;
        }

        .skai-lms-tile:hover {
          border-color: #60a5fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08);
        }

        .skai-lms-icon {
          color: #2563eb;
          margin-bottom: 8px;
        }

        .skai-lms-name {
          font-size: 12px;
          font-weight: 700;
          color: #1e3a8a;
          line-height: 1.3;
        }

        /* =========================================================================
           BUILT FOR EVERY USER
        ========================================================================= */
        .skai-users-section {
          background-color: #ffffff;
          padding-top: 24px;
          padding-bottom: 28px;
        }

        .skai-users-heading {
          font-size: 24px;
          font-weight: 800;
          color: #1e3a8a;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
        }

        .skai-user-card {
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          padding: 14px 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 1px 4px rgba(37, 99, 235, 0.03);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .skai-user-card:hover {
          transform: translateY(-2px);
          border-color: #93c5fd;
        }

        .skai-user-avatar-wrap {
          flex-shrink: 0;
        }

        .skai-user-avatar {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #bfdbfe;
          display: block;
        }

        .skai-user-info {
          display: flex;
          flex-direction: column;
        }

        .skai-user-role {
          font-size: 14.5px;
          font-weight: 800;
          color: #1e3a8a;
          margin: 0 0 3px;
        }

        .skai-user-desc {
          font-size: 11.5px;
          line-height: 1.35;
          color: #475569;
          margin: 0;
        }

        /* =========================================================================
           THREE-COLUMN DETAILS SECTION
        ========================================================================= */
        .skai-details-section {
          background-color: #ffffff;
          padding-top: 24px;
          padding-bottom: 40px;
        }

        .skai-three-col-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr 1fr;
          gap: 16px;
        }

        .skai-detail-col {
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-radius: 12px;
          padding: 18px;
          box-shadow: 0 1px 4px rgba(37, 99, 235, 0.03);
          display: flex;
          flex-direction: column;
        }

        .skai-detail-heading {
          font-size: 16px;
          font-weight: 800;
          color: #1e3a8a;
          margin: 0 0 16px;
        }

        /* Column 1 Flow */
        .skai-flow-steps {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 4px;
        }

        .skai-flow-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }

        .skai-step-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .skai-step-1 { background-color: #059669; }
        .skai-step-2 { background-color: #2563eb; }
        .skai-step-3 { background-color: #3b82f6; }
        .skai-step-4 { background-color: #8b5cf6; }

        .skai-step-arrow {
          color: #94a3b8;
          font-size: 16px;
          font-weight: bold;
          margin-top: 6px;
        }

        .skai-step-title {
          font-size: 12.5px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px;
        }

        .skai-step-desc {
          font-size: 10.5px;
          line-height: 1.3;
          color: #64748b;
          margin: 0;
        }

        /* Column 2 Check List */
        .skai-check-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skai-check-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #334155;
          font-weight: 500;
        }

        .skai-check-icon {
          color: #059669;
          flex-shrink: 0;
        }

        /* Column 3 Outcomes List */
        .skai-outcomes-list {
          list-style: none;
          padding: 0;
          margin: 0 0 14px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .skai-outcomes-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #334155;
          font-weight: 500;
        }

        .skai-outcome-icon {
          color: #2563eb;
          flex-shrink: 0;
        }

        .skai-for-schools-box {
          margin-top: auto;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 8px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skai-schools-icon {
          color: #1d4ed8;
          flex-shrink: 0;
        }

        .skai-schools-info {
          display: flex;
          flex-direction: column;
        }

        .skai-schools-title {
          font-size: 12.5px;
          font-weight: 800;
          color: #1e3a8a;
          margin: 0 0 2px;
        }

        .skai-schools-line1 {
          font-size: 10.5px;
          font-weight: 600;
          color: #334155;
          margin: 0;
        }

        .skai-schools-line2 {
          font-size: 10px;
          color: #64748b;
          margin: 0;
        }

        /* =========================================================================
           CTA BANNER (Pre-footer)
        ========================================================================= */
        .skai-cta-banner {
          background: radial-gradient(circle at center, #022259 0%, #011232 100%);
          color: #ffffff;
          padding: 42px 0 36px;
          text-align: center;
        }

        .skai-cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .skai-cta-heading {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }

        .skai-cta-subheading {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0 0 22px;
          max-width: 620px;
          line-height: 1.45;
        }

        .skai-cta-btn-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .skai-cta-btn-green {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #059669;
          color: #ffffff;
          font-weight: 600;
          font-size: 13.5px;
          padding: 9px 20px;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }

        .skai-cta-btn-green:hover {
          background-color: #047857;
        }

        .skai-cta-btn-trans {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: transparent;
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.7);
          font-weight: 600;
          font-size: 13.5px;
          padding: 8px 20px;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .skai-cta-btn-trans:hover {
          border-color: #ffffff;
          background-color: rgba(255, 255, 255, 0.08);
        }

        .skai-cta-contact-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
        }

        .skai-cta-contact-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #cbd5e1;
          font-size: 12.5px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .skai-cta-contact-item:hover {
          color: #ffffff;
        }

        .skai-cta-icon {
          color: #60a5fa;
        }

        /* =========================================================================
           RESPONSIVE BREAKPOINTS
        ========================================================================= */
        @media (max-width: 1024px) {
          .skai-hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .skai-hero-left {
            align-items: center;
          }

          .skai-hero-title {
            font-size: 34px;
          }

          .skai-four-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .skai-lms-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .skai-three-col-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .skai-section {
            padding: 24px 0;
          }

          .skai-hero-title {
            font-size: 28px;
          }

          .skai-hero-features-row {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
          }

          .skai-four-grid {
            grid-template-columns: 1fr;
          }

          .skai-lms-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .skai-flow-steps {
            flex-direction: column;
            gap: 14px;
          }

          .skai-step-arrow {
            transform: rotate(90deg);
            margin: 0;
          }

          .skai-cta-btn-row {
            flex-direction: column;
            width: 100%;
          }

          .skai-cta-btn-green,
          .skai-cta-btn-trans {
            width: 100%;
            justify-content: center;
          }

          .skai-cta-contact-row {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
}
