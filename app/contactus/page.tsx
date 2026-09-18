'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  HelpCircle, 
  FileText, 
  Rocket, 
  GitFork, 
  GraduationCap, 
  School, 
  Users, 
  Handshake, 
  ChevronRight, 
  ChevronDown, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Linkedin,
  Youtube,
  Instagram,
  Facebook
} from 'lucide-react';

export default function ContactUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqData = [
    {
      q: 'What training programs do you offer?',
      a: 'We provide practical, industry-focused programs including Full-Stack Web Development (React, Next.js, Node.js, PostgreSQL), AI Career Ready (GenAI, LLMs, RAG, Python), and specialized workforce bootcamps.'
    },
    {
      q: 'Do you offer online classes?',
      a: 'Yes! All of our training programs and workshops feature interactive live online sessions with dedicated mentor support, hands-on coding labs, and lifetime access to recorded materials.'
    },
    {
      q: 'How can schools partner with Advaitecs?',
      a: 'Schools can partner with us to deploy SkaiMitra—our intelligent AI-powered school education platform—set up hands-on tech labs, and integrate futuristic AI literacy curricula.'
    },
    {
      q: 'Where are you located?',
      a: 'Our main office is located in Vijayawada, Andhra Pradesh, India. We also maintain learning hubs in Visakhapatnam and Hyderabad, alongside our global US presence in Austin, Texas.'
    },
    {
      q: 'How can I contact support?',
      a: 'You can email support@advaitecs.com or call our direct helpline at +91 96039 92299 Monday through Saturday from 9:00 AM to 6:00 PM IST.'
    }
  ];

  return (
    <div className="contact-page-wrapper">
      <style>{`
        .contact-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .contact-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* 1. HERO SECTION */
        .contact-hero-section {
          background: #ffffff;
          padding: 24px 0 32px;
          border-bottom: 1px solid #f1f5f9;
        }

        .contact-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.12fr;
          gap: 28px;
          align-items: center;
        }

        .contact-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .contact-hero-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 10px;
        }

        .contact-hero-title {
          font-size: 46px;
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 6px 0;
        }

        .contact-hero-subtitle {
          font-size: 32px;
          font-weight: 700;
          color: #0056b3;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .contact-hero-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 28px;
          max-width: 520px;
        }

        /* 4 Vertical Action Columns */
        .contact-quick-actions {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          width: 100%;
          max-width: 540px;
        }

        .quick-action-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          text-decoration: none;
        }

        .quick-action-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #e1effe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0062d2;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .quick-action-item:hover .quick-action-icon-circle {
          transform: translateY(-2px);
          background: #cee5ff;
        }

        .quick-action-label {
          font-size: 12px;
          font-weight: 600;
          color: #0056b3;
          line-height: 1.3;
        }

        /* Hero Image Container: Full natural fit so face is completely visible */
        .contact-hero-image-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .contact-hero-img {
          width: 100%;
          height: auto;
          max-height: 460px;
          object-fit: contain;
          display: block;
        }

        /* 2. GET IN TOUCH SECTION */
        .get-in-touch-section {
          padding: 44px 0 48px;
          background: #ffffff;
        }

        .section-center-heading {
          text-align: center;
          margin-bottom: 34px;
        }

        .section-center-heading h2 {
          font-size: 32px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .section-center-heading p {
          font-size: 15px;
          color: #475569;
        }

        .get-in-touch-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 28px;
          align-items: stretch;
        }

        /* Form Card */
        .contact-form-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 30px 28px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.025);
          display: flex;
          flex-direction: column;
        }

        .form-row-dual {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-group label {
          font-size: 13.5px;
          font-weight: 600;
          color: #1e293b;
        }

        .form-group label span {
          color: #ef4444;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 10px 14px;
          font-size: 14px;
          color: #1e293b;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          font-family: inherit;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: #0062d2;
          box-shadow: 0 0 0 3px rgba(0, 98, 210, 0.12);
        }

        .form-textarea {
          resize: vertical;
          min-height: 110px;
        }

        .form-submit-row {
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }

        .btn-send-message {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #059669;
          color: #ffffff;
          padding: 11px 28px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(5, 150, 105, 0.25);
        }

        .btn-send-message:hover {
          background: #047857;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(5, 150, 105, 0.35);
        }

        /* Info Card */
        .contact-info-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 30px 28px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.025);
        }

        .contact-info-card h3 {
          font-size: 20px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .contact-info-card-sub {
          font-size: 13.5px;
          color: #64748b;
          margin-bottom: 22px;
          line-height: 1.4;
        }

        .info-channels-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .info-channel-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .info-channel-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #e1effe;
          color: #0062d2;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-channel-content {
          display: flex;
          flex-direction: column;
        }

        .info-channel-label {
          font-size: 12px;
          font-weight: 700;
          color: #0056b3;
          margin-bottom: 2px;
        }

        .info-channel-value {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
          text-decoration: none;
        }

        .info-channel-value:hover {
          color: #0062d2;
        }

        .info-channel-detail {
          font-size: 12.5px;
          color: #64748b;
          margin-top: 1px;
        }

        .follow-us-title {
          font-size: 15px;
          font-weight: 800;
          color: #003fa8;
          margin-bottom: 4px;
        }

        .follow-us-sub {
          font-size: 12.5px;
          color: #64748b;
          margin-bottom: 12px;
        }

        .contact-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .contact-social-box {
          width: 34px;
          height: 34px;
          background: #0056b3;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: background 0.2s ease, transform 0.2s ease;
          text-decoration: none;
        }

        .contact-social-box:hover {
          background: #006ee6;
          transform: translateY(-2px);
        }

        /* 3. HOW CAN WE HELP YOU SECTION */
        .help-categories-section {
          padding: 42px 0 48px;
          background: #ffffff;
        }

        .help-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .help-card-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .help-card-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          border-color: #cbd5e1;
        }

        .help-card-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #0056b3;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .help-card-item h3 {
          font-size: 16px;
          font-weight: 700;
          color: #003fa8;
          margin: 0 0 8px 0;
        }

        .help-card-item p {
          font-size: 13px;
          line-height: 1.5;
          color: #64748b;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .help-card-link {
          font-size: 13.5px;
          font-weight: 700;
          color: #0062d2;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .help-card-link:hover {
          gap: 8px;
        }

        /* 4. LOCATION & FAQ SECTION */
        .location-faq-section {
          padding: 44px 0 54px;
          background: #ffffff;
        }

        .location-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .location-box-card {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 26px 24px;
          background: #ffffff;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.025);
          display: flex;
          flex-direction: column;
        }

        .location-box-card h3 {
          font-size: 20px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .location-box-card p {
          font-size: 13.5px;
          color: #64748b;
          margin-bottom: 18px;
        }

        .map-interactive-wrapper {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #cbd5e1;
          height: 310px;
          position: relative;
          background: #eef2f6;
        }

        .faq-box-card {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 26px 24px;
          background: #ffffff;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.025);
          display: flex;
          flex-direction: column;
        }

        .faq-box-card h3 {
          font-size: 20px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .faq-box-card p {
          font-size: 13.5px;
          color: #64748b;
          margin-bottom: 18px;
        }

        .faq-items-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .faq-item-button {
          width: 100%;
          text-align: left;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13.5px;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .faq-item-button:hover {
          border-color: #93c5fd;
          background: #f8fafc;
        }

        .faq-item-content {
          padding: 10px 16px 14px;
          font-size: 13px;
          line-height: 1.6;
          color: #475569;
          background: #f8fafc;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          margin-top: -3px;
          border: 1px solid #e2e8f0;
          border-top: none;
        }

        /* 5. BOTTOM BANNER */
        .contact-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 38px 24px;
          text-align: center;
          overflow: hidden;
        }

        /* Subtle constellation nodes overlay */
        .contact-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 10% 30%, rgba(0, 140, 255, 0.22) 0%, transparent 40%),
            radial-gradient(circle at 90% 70%, rgba(0, 140, 255, 0.22) 0%, transparent 40%);
          pointer-events: none;
        }

        .contact-cta-banner-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
        }

        .contact-cta-banner h2 {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 8px 0;
        }

        .contact-cta-banner p {
          font-size: 14.5px;
          color: #cbd5e1;
          margin: 0 0 20px 0;
        }

        .contact-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-cta-green-contact {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #059669;
          color: #ffffff;
          padding: 11px 24px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
          transition: all 0.2s ease;
        }

        .btn-cta-green-contact:hover {
          background: #10b981;
          transform: translateY(-1px);
        }

        .btn-cta-call-contact {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          padding: 11px 24px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
        }

        .btn-cta-call-contact:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #ffffff;
          transform: translateY(-1px);
        }

        @media (max-width: 1040px) {
          .contact-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .contact-hero-left {
            align-items: center;
          }
          .contact-quick-actions {
            margin: 0 auto;
          }
          .get-in-touch-grid {
            grid-template-columns: 1fr;
          }
          .help-grid-4 {
            grid-template-columns: 1fr 1fr;
          }
          .location-faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .help-grid-4 {
            grid-template-columns: 1fr;
          }
          .form-row-dual {
            grid-template-columns: 1fr;
          }
          .contact-hero-title {
            font-size: 34px;
          }
          .contact-hero-subtitle {
            font-size: 24px;
          }
          .contact-quick-actions {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/contacus.png (HUMAN FACE FULLY VISIBLE) */}
      <section className="contact-hero-section">
        <div className="contact-container">
          <div className="contact-hero-grid">
            {/* Left Hero Content */}
            <div className="contact-hero-left">
              <span className="contact-hero-badge">LET&apos;S CONNECT</span>
              <h1 className="contact-hero-title">Contact Us</h1>
              <div className="contact-hero-subtitle">We&apos;re here to help.</div>
              <p className="contact-hero-desc">
                Have questions about our training programs, SkaiMitra, workshops or partnerships? 
                Reach out to us, and our team will get back to you soon.
              </p>

              {/* 4 Feature Columns with circular icons & labels below */}
              <div className="contact-quick-actions">
                <a href="#inquiryType" className="quick-action-item">
                  <div className="quick-action-icon-circle">
                    <HelpCircle size={22} strokeWidth={2} />
                  </div>
                  <span className="quick-action-label">Ask Questions</span>
                </a>

                <Link href="/training-programs" className="quick-action-item">
                  <div className="quick-action-icon-circle">
                    <FileText size={22} strokeWidth={2} />
                  </div>
                  <span className="quick-action-label">Get Program Details</span>
                </Link>

                <Link href="/about" className="quick-action-item">
                  <div className="quick-action-icon-circle">
                    <Rocket size={22} strokeWidth={2} />
                  </div>
                  <span className="quick-action-label">Explore Partnerships</span>
                </Link>

                <a href="#inquiryType" className="quick-action-item">
                  <div className="quick-action-icon-circle">
                    <GitFork size={22} strokeWidth={2} />
                  </div>
                  <span className="quick-action-label">Find the Right Solution</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image (contacus.png: full aspect ratio preserving face & slogans) */}
            <div className="contact-hero-image-wrap">
              <Image
                src="/images/contacus.png"
                alt="Advaitecs customer support specialist assisting students and partners"
                width={800}
                height={480}
                priority
                className="contact-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. GET IN TOUCH (FORM + CONTACT INFORMATION) */}
      <section className="get-in-touch-section">
        <div className="contact-container">
          <div className="section-center-heading">
            <h2>Get in Touch</h2>
            <p>Fill out the form and we&apos;ll get back to you as soon as possible.</p>
          </div>

          <div className="get-in-touch-grid">
            {/* Left: Contact Form */}
            <div className="contact-form-card">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', margin: 'auto' }}>
                  <CheckCircle2 size={52} color="#16a34a" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    Thank you! Your message has been sent.
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '15px' }}>
                    Our representative will review your inquiry and reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-row-dual">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name <span>*</span></label>
                      <input 
                        id="fullName" 
                        type="text" 
                        required 
                        placeholder="Enter your full name" 
                        className="form-input" 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="emailAddress">Email Address <span>*</span></label>
                      <input 
                        id="emailAddress" 
                        type="email" 
                        required 
                        placeholder="Enter your email address" 
                        className="form-input" 
                      />
                    </div>
                  </div>

                  <div className="form-row-dual">
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input 
                        id="phoneNumber" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="form-input" 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inquiryType">Inquiry Type <span>*</span></label>
                      <select id="inquiryType" required className="form-select" defaultValue="">
                        <option value="" disabled>Select an option</option>
                        <option value="training">Training Programs</option>
                        <option value="skaimitra">SkaiMitra for Schools</option>
                        <option value="workshops">Workshops &amp; Corporate Training</option>
                        <option value="partnerships">Partnerships &amp; Collaborations</option>
                        <option value="general">General Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message <span>*</span></label>
                    <textarea 
                      id="message" 
                      required 
                      rows={4} 
                      placeholder="Tell us how we can help you..." 
                      className="form-textarea" 
                    />
                  </div>

                  <div className="form-submit-row">
                    <button type="submit" className="btn-send-message">
                      <span>Send Message</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Contact Information */}
            <div className="contact-info-card">
              <h3>Contact Information</h3>
              <p className="contact-info-card-sub">
                Reach out to us directly through any of the following channels.
              </p>

              <div className="info-channels-list">
                {/* Phone */}
                <div className="info-channel-row">
                  <div className="info-channel-icon-circle">
                    <Phone size={18} strokeWidth={2.2} />
                  </div>
                  <div className="info-channel-content">
                    <span className="info-channel-label">Phone</span>
                    <a href="tel:+919603992299" className="info-channel-value">+91 96039 92299</a>
                  </div>
                </div>

                {/* Email */}
                <div className="info-channel-row">
                  <div className="info-channel-icon-circle">
                    <Mail size={18} strokeWidth={2.2} />
                  </div>
                  <div className="info-channel-content">
                    <span className="info-channel-label">Email</span>
                    <a href="mailto:support@advaitecs.com" className="info-channel-value">support@advaitecs.com</a>
                  </div>
                </div>

                {/* Address */}
                <div className="info-channel-row">
                  <div className="info-channel-icon-circle">
                    <MapPin size={18} strokeWidth={2.2} />
                  </div>
                  <div className="info-channel-content">
                    <span className="info-channel-label">Address</span>
                    <span className="info-channel-value">Advaitecs Private Limited</span>
                    <span className="info-channel-detail">Vijayawada, Andhra Pradesh, India</span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="info-channel-row">
                  <div className="info-channel-icon-circle">
                    <Clock size={18} strokeWidth={2.2} />
                  </div>
                  <div className="info-channel-content">
                    <span className="info-channel-label">Business Hours</span>
                    <span className="info-channel-value">Mon – Sat: 9:00 AM – 6:00 PM</span>
                    <span className="info-channel-detail">(India Standard Time)</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="follow-us-title">Follow Us</div>
                <p className="follow-us-sub">Stay updated with our latest news, programs and events.</p>
                <div className="contact-social-row">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-social-box" aria-label="LinkedIn">
                    <Linkedin size={16} fill="currentColor" strokeWidth={0} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-social-box" aria-label="YouTube">
                    <Youtube size={16} fill="currentColor" strokeWidth={0} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-box" aria-label="Instagram">
                    <Instagram size={16} strokeWidth={2} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social-box" aria-label="Facebook">
                    <Facebook size={16} fill="currentColor" strokeWidth={0} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW CAN WE HELP YOU? (4 CARDS) */}
      <section className="help-categories-section">
        <div className="contact-container">
          <div className="section-center-heading">
            <h2>How Can We Help You?</h2>
            <p>Whether you&apos;re a student, educator, school or enterprise, we&apos;re ready to support you.</p>
          </div>

          <div className="help-grid-4">
            {/* Card 1 */}
            <div className="help-card-item">
              <div className="help-card-icon-circle">
                <GraduationCap size={24} />
              </div>
              <h3>Training Programs</h3>
              <p>Get details about upcoming batches, curriculum and fees.</p>
              <Link href="/training-programs" className="help-card-link">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="help-card-item">
              <div className="help-card-icon-circle">
                <School size={24} />
              </div>
              <h3>SkaiMitra for Schools</h3>
              <p>Explore how SkaiMitra can transform learning at your school.</p>
              <Link href="/skaimitra" className="help-card-link">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="help-card-item">
              <div className="help-card-icon-circle">
                <Users size={24} />
              </div>
              <h3>Workshops &amp; Corporate Training</h3>
              <p>Customized programs for colleges and enterprises.</p>
              <Link href="/workshops" className="help-card-link">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 4 */}
            <div className="help-card-item">
              <div className="help-card-icon-circle">
                <Handshake size={24} />
              </div>
              <h3>Partnerships &amp; Collaborations</h3>
              <p>Let&apos;s work together to create greater impact.</p>
              <Link href="/about" className="help-card-link">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR LOCATION (MAP) & FREQUENTLY ASKED QUESTIONS */}
      <section className="location-faq-section">
        <div className="contact-container">
          <div className="location-faq-grid">
            {/* Left: Our Location Map */}
            <div className="location-box-card">
              <h3>Our Location</h3>
              <p>Visit us at our office in Vijayawada, Andhra Pradesh.</p>
              <div className="map-interactive-wrapper">
                <iframe
                  title="Advaitecs Office Location in Vijayawada"
                  src="https://maps.google.com/maps?q=Vijayawada%2C%20Andhra%20Pradesh%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: FAQ Accordion */}
            <div className="faq-box-card">
              <h3>Frequently Asked Questions</h3>
              <p>Quick answers to common questions.</p>

              <div className="faq-items-list">
                {faqData.map((item, idx) => (
                  <div key={idx}>
                    <button 
                      type="button" 
                      className="faq-item-button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openFaq === idx}
                    >
                      <span>{item.q}</span>
                      {openFaq === idx ? (
                        <ChevronDown size={17} color="#0056b3" />
                      ) : (
                        <ChevronRight size={17} color="#0056b3" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <div className="faq-item-content">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM BANNER */}
      <section className="contact-cta-banner">
        <div className="contact-cta-banner-content">
          <h2>Let&apos;s Build a Brighter Future Together</h2>
          <p>Have a question or ready to get started? We&apos;d love to hear from you.</p>
          <div className="contact-cta-buttons">
            <a href="#fullName" className="btn-cta-green-contact">
              <span>Send Us a Message</span>
              <ArrowRight size={15} />
            </a>
            <a href="tel:+919603992299" className="btn-cta-call-contact">
              <Phone size={15} />
              <span>Call Us &nbsp;+91 96039 92299</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
