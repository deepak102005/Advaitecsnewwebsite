'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="advaitecs-footer-exact">
      <style>{`
        .advaitecs-footer-exact {
          position: relative;
          background: linear-gradient(180deg, #011232 0%, #021a48 45%, #01163c 100%);
          color: #ffffff;
          overflow: hidden;
          padding-top: 50px;
          padding-bottom: 24px;
          font-family: inherit;
        }

        /* Animated Blue Waves Background */
        .footer-waves-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .footer-wave-svg {
          position: absolute;
          bottom: 0;
          left: -5%;
          width: 110%;
          height: 100%;
          min-height: 240px;
        }

        .wave-layer-1 {
          animation: waveDrift1 12s ease-in-out infinite alternate;
        }

        .wave-layer-2 {
          animation: waveDrift2 15s ease-in-out infinite alternate-reverse;
        }

        @keyframes waveDrift1 {
          0% { transform: translateY(0px) scaleY(1); }
          50% { transform: translateY(-10px) scaleY(1.05); }
          100% { transform: translateY(0px) scaleY(1); }
        }

        @keyframes waveDrift2 {
          0% { transform: translateY(0px) scaleY(1); }
          50% { transform: translateY(-6px) scaleY(0.96); }
          100% { transform: translateY(0px) scaleY(1); }
        }

        /* Ambient Glow Ribbon */
        .footer-ambient-ribbon {
          position: absolute;
          bottom: -40px;
          left: 0;
          width: 75%;
          height: 180px;
          background: radial-gradient(ellipse 75% 65% at 25% 100%, rgba(0, 102, 255, 0.42) 0%, rgba(0, 80, 220, 0.2) 40%, transparent 70%);
          filter: blur(32px);
          pointer-events: none;
          animation: ribbonPulse 6s ease-in-out infinite alternate;
          z-index: 1;
        }

        @keyframes ribbonPulse {
          0% { opacity: 0.6; transform: scaleY(0.9); }
          100% { opacity: 1; transform: scaleY(1.15); }
        }

        /* Container */
        .footer-content-wrap {
          position: relative;
          z-index: 2;
          max-width: 1260px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* Main Columns Grid */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.85fr 0.95fr 0.95fr 1.25fr 1.3fr auto 1.35fr auto 1.25fr;
          gap: 18px;
          align-items: flex-start;
        }

        /* Vertical Divider */
        .footer-vert-divider {
          width: 1px;
          height: 100%;
          min-height: 140px;
          background: rgba(255, 255, 255, 0.14);
          align-self: stretch;
        }

        /* Brand Column */
        .footer-col-brand {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-header {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 14px;
        }

        .footer-brand-icon {
          width: 52px;
          height: 52px;
          object-fit: contain;
          flex-shrink: 0;
          filter: drop-shadow(0 2px 8px rgba(0, 140, 255, 0.45));
        }

        .footer-brand-text {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-name {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .footer-brand-tagline {
          font-size: 11px;
          color: #94a3b8;
          letter-spacing: 0.01em;
          margin-top: 2px;
        }

        .footer-empower-text {
          font-size: 13px;
          line-height: 1.5;
          color: #cbd5e1;
          max-width: 240px;
          margin-bottom: 18px;
        }

        .footer-social-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-social-btn {
          width: 32px;
          height: 32px;
          background: #0052a3;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: background 0.2s ease, transform 0.2s ease;
          text-decoration: none;
        }

        .footer-social-btn:hover {
          background: #0066cc;
          transform: translateY(-2px);
        }

        /* Column Headers and Lists */
        .footer-col-title {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
          line-height: 1.25;
        }

        .footer-col-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .footer-col-list li a {
          font-size: 13px;
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.15s ease;
          display: inline-block;
          white-space: nowrap;
        }

        .footer-col-list li a:hover {
          color: #ffffff;
        }

        /* Contact Details */
        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 10px;
        }

        .footer-contact-icon {
          color: #ffffff;
          flex-shrink: 0;
        }

        .footer-contact-link {
          font-size: 13px;
          color: #cbd5e1;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.15s ease;
        }

        .footer-contact-link:hover {
          color: #ffffff;
        }

        /* Offices Column */
        .office-country-row {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 6px;
        }

        .office-pin-badge {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0056b3;
          flex-shrink: 0;
        }

        .office-country-name {
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
        }

        .office-cities-list {
          list-style: none;
          padding: 0 0 0 4px;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .office-cities-list li {
          font-size: 12.5px;
          color: #cbd5e1;
        }

        /* Bottom Sub-bar */
        .footer-divider-line {
          width: 100%;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.15);
          margin-top: 36px;
          margin-bottom: 16px;
        }

        .footer-sub-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: #94a3b8;
        }

        @media (max-width: 1120px) {
          .footer-main-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 26px;
          }
          .footer-vert-divider {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-sub-bar {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>

      {/* Flowing Wave Layers Background */}
      <div className="footer-waves-container">
        <svg className="footer-wave-svg" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveBlueGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0047b3" stopOpacity="0.32" />
              <stop offset="50%" stopColor="#0066ff" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#002b80" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="waveBlueGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066ff" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#0040cc" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#001a66" stopOpacity="0.08" />
            </linearGradient>
          </defs>

          {/* Deep curved background wave */}
          <path
            className="wave-layer-1"
            d="M-50,220 C280,120 480,280 820,170 C1160,60 1340,240 1500,160 L1500,320 L-50,320 Z"
            fill="url(#waveBlueGrad1)"
          />

          {/* Forefront glowing sweep wave */}
          <path
            className="wave-layer-2"
            d="M-50,260 C240,160 540,290 880,210 C1220,130 1380,260 1500,210 L1500,320 L-50,320 Z"
            fill="url(#waveBlueGrad2)"
          />
        </svg>

        {/* Ambient Blue Horizon Glow */}
        <div className="footer-ambient-ribbon" />
      </div>

      <div className="footer-content-wrap">
        <div className="footer-main-grid">
          
          {/* Column 1: Brand / Logo / Social */}
          <div className="footer-col-brand">
            <Link href="/" className="footer-brand-header">
              <Image
                src="/images/logo/advaitecs-icon.png"
                alt="Advaitecs Logo"
                width={52}
                height={52}
                className="footer-brand-icon"
              />
              <div className="footer-brand-text">
                <span className="footer-brand-name">Advaitecs</span>
                <span className="footer-brand-tagline">Training Minds Innovating Solutions</span>
              </div>
            </Link>

            <p className="footer-empower-text">
              Empowering learners with AI and skill education for a smarter, brighter future.
            </p>

            <div className="footer-social-row">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <Linkedin size={16} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                <Youtube size={16} fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                <Instagram size={16} strokeWidth={2} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                <Facebook size={16} fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-col-list">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contactus">Contact Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: SkaiMitra */}
          <div>
            <h4 className="footer-col-title">SkaiMitra</h4>
            <ul className="footer-col-list">
              <li><Link href="/Skaimitra">Overview</Link></li>
              <li><Link href="/Skaimitra">For Schools</Link></li>
              <li><Link href="/Skaimitra">Request Demo</Link></li>
            </ul>
          </div>

          {/* Column 4: Training Programs */}
          <div>
            <h4 className="footer-col-title">Training Programs</h4>
            <ul className="footer-col-list">
              <li><Link href="/trainingprograms">All Programs</Link></li>
              <li><Link href="/Fullstack">Full-Stack Job Ready</Link></li>
              <li><Link href="/AIcareer">AI Career Ready</Link></li>
              <li><Link href="/trainingprograms#career-paths">Custom Programs</Link></li>
            </ul>
          </div>

          {/* Column 5: Workshops */}
          <div>
            <h4 className="footer-col-title">Workshops</h4>
            <ul className="footer-col-list">
              <li><Link href="/workshopmain">All Workshops</Link></li>
              <li><Link href="/schoolworkshop">For Schools</Link></li>
              <li><Link href="/collegesEnterprises">For Colleges &amp; Enterprises</Link></li>
              <li><Link href="/corprateTraining">Corporate Training</Link></li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="footer-vert-divider" />

          {/* Column 6: Contact Us */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-row">
              <Phone size={16} className="footer-contact-icon" />
              <a href="tel:+919603992299" className="footer-contact-link">+91 96039 92299</a>
            </div>
            <div className="footer-contact-row">
              <Mail size={16} className="footer-contact-icon" />
              <a href="mailto:support@advaitecs.com" className="footer-contact-link">support@advaitecs.com</a>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="footer-vert-divider" />

          {/* Column 7: Our Offices */}
          <div>
            <h4 className="footer-col-title">Our Offices</h4>

            {/* India Office */}
            <div>
              <div className="office-country-row">
                <div className="office-pin-badge">
                  <MapPin size={13} strokeWidth={2.5} />
                </div>
                <span className="office-country-name">India</span>
              </div>
              <ul className="office-cities-list">
                <li>• Vijayawada</li>
                <li>• Visakhapatnam</li>
                <li>• Hyderabad</li>
              </ul>
            </div>

            {/* USA Office */}
            <div style={{ marginTop: '14px' }}>
              <div className="office-country-row">
                <div className="office-pin-badge">
                  <MapPin size={13} strokeWidth={2.5} />
                </div>
                <span className="office-country-name">USA</span>
              </div>
              <ul className="office-cities-list">
                <li>• Austin, Texas</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="footer-divider-line" />

        {/* Bottom Sub-bar */}
        <div className="footer-sub-bar">
          <span>© 2026 Advaitecs. All rights reserved.</span>
          <span>Training Minds, Innovating Solutions.</span>
        </div>
      </div>
    </footer>
  );
}
