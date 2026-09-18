'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Target,
  Lightbulb,
  BarChart3,
  Brain,
  Code2,
  Bot,
  Users,
  Building2,
  CheckCircle2,
  FileText,
  Laptop,
  GraduationCap,
  CalendarDays,
  Megaphone,
  Sparkles,
  ClipboardCheck,
  Smartphone,
  Settings,
  Phone,
  Mail,
  Cpu,
  Presentation,
  Cloud,
  TrendingUp,
  ShieldCheck,
  Award,
  Layers
} from 'lucide-react';

export default function SkaiMitraPage() {
  return (
    <div className="skaimitra-page-wrapper">
      <style>{`
        .skaimitra-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
          overflow-x: hidden;
        }

        .skaimitra-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* Common Section Titles & Spacing */
        .section-header-centered {
          text-align: center;
          margin-bottom: 18px;
        }

        .section-title {
          font-size: 26px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .section-subtitle {
          font-size: 13.5px;
          color: #64748b;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.45;
        }

        /* -------------------------------------------------------------
           1. HERO SECTION
        ------------------------------------------------------------- */
        .hero-section {
          padding-top: 18px;
          padding-bottom: 24px;
          background: #ffffff;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 28px;
          align-items: center;
        }

        .hero-brand-lockup {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .hero-logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 6px;
        }

        .hero-brand-texts {
          display: flex;
          flex-direction: column;
        }

        .hero-brand-name {
          font-size: 26px;
          font-weight: 800;
          line-height: 1.1;
          color: #003fa8;
          letter-spacing: -0.03em;
        }

        .hero-brand-name span {
          color: #0062d2;
        }

        .hero-brand-tagline {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          margin-top: 1px;
        }

        .hero-pill-badge {
          font-size: 11px;
          font-weight: 800;
          color: #0056b3;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }

        .hero-headline {
          font-size: 36px;
          font-weight: 800;
          color: #003fa8;
          line-height: 1.14;
          letter-spacing: -0.025em;
          margin-bottom: 10px;
        }

        .hero-headline span {
          display: block;
        }

        .hero-description {
          font-size: 13.5px;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 18px;
          max-width: 500px;
        }

        .hero-features-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .hero-feat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 5px;
        }

        .hero-feat-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #eef5ff;
          border: 1px solid #d0e1fd;
          color: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .hero-feat-item:hover .hero-feat-icon-wrap {
          transform: translateY(-2px);
          background: #e0edff;
        }

        .hero-feat-label {
          font-size: 11px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.25;
        }

        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-green-primary {
          background-color: #0b6b55;
          color: #ffffff;
          padding: 10px 22px;
          border-radius: 6px;
          font-size: 13.5px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .btn-green-primary:hover {
          background-color: #085544;
          transform: translateY(-1px);
        }

        .btn-blue-outline {
          background-color: #ffffff;
          color: #0056b3;
          border: 1.5px solid #0056b3;
          padding: 9px 22px;
          border-radius: 6px;
          font-size: 13.5px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .btn-blue-outline:hover {
          background-color: #eff6ff;
          transform: translateY(-1px);
        }

        .hero-image-wrap {
          position: relative;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-main-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
        }

        /* -------------------------------------------------------------
           2. ONE PLATFORM. COMPLETE LEARNING EXPERIENCE.
        ------------------------------------------------------------- */
        .pillar-section {
          padding-top: 22px;
          padding-bottom: 24px;
          background-color: #ffffff;
        }

        .pillar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          align-items: stretch;
        }

        .pillar-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 20px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          height: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .pillar-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px -4px rgba(0, 0, 0, 0.05);
          border-color: #cbd5e1;
        }

        .pillar-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #eff6ff;
          color: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px auto;
        }

        .pillar-title {
          font-size: 16px;
          font-weight: 800;
          color: #003fa8;
          margin-bottom: 5px;
        }

        .pillar-desc {
          font-size: 12.5px;
          color: #64748b;
          line-height: 1.45;
        }

        /* -------------------------------------------------------------
           3. SKILL EDUCATION WITH SKAIMITRA
        ------------------------------------------------------------- */
        .skill-education-section {
          padding-top: 22px;
          padding-bottom: 24px;
          background: #ffffff;
        }

        .skill-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          align-items: stretch;
        }

        .skill-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .skill-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.06);
          border-color: #cbd5e1;
        }

        .skill-card-img-wrap {
          position: relative;
          width: 100%;
          height: 155px;
          border-radius: 11px 11px 0 0;
          overflow: hidden;
        }

        .skill-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .skill-badge-floating {
          width: 44px;
          height: 44px;
          background: #ffffff;
          border: 2px solid #0056b3;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0056b3;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
          margin-top: -24px;
          margin-left: 14px;
          margin-bottom: 8px;
          position: relative;
          z-index: 10;
          flex-shrink: 0;
        }

        .skill-card-body {
          padding: 0 16px 16px 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }

        .skill-card-title {
          font-size: 15.5px;
          font-weight: 800;
          color: #003fa8;
          margin-bottom: 8px;
          min-height: 40px;
          line-height: 1.3;
        }

        .skill-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 14px 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .skill-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: #334155;
          line-height: 1.45;
        }

        .skill-bullet-dot {
          width: 5px;
          height: 5px;
          background-color: #0056b3;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .skill-learn-btn {
          border: 1.5px solid #0056b3;
          color: #0056b3;
          background: #ffffff;
          padding: 7px 16px;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 700;
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
          transition: all 0.2s ease;
          width: 100%;
        }

        .skill-learn-btn:hover {
          background-color: #0056b3;
          color: #ffffff;
        }

        /* -------------------------------------------------------------
           4. EVERYTHING SCHOOLS NEED IN ONE LMS
        ------------------------------------------------------------- */
        .lms-section {
          padding-top: 22px;
          padding-bottom: 24px;
          background-color: #ffffff;
        }

        .lms-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
          align-items: stretch;
        }

        .lms-tile {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 10px;
          padding: 14px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 96px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .lms-tile:hover {
          transform: translateY(-2px);
          border-color: #cbd5e1;
          box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.06);
        }

        .lms-tile-icon {
          color: #0056b3;
          margin-bottom: 6px;
        }

        .lms-tile-icon.ai-assistant-icon {
          color: #7c3aed;
        }

        .lms-tile-label {
          font-size: 12px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.35;
        }

        /* -------------------------------------------------------------
           5. BUILT FOR EVERY USER
        ------------------------------------------------------------- */
        .users-section {
          padding-top: 22px;
          padding-bottom: 24px;
          background: #ffffff;
        }

        .users-title {
          font-size: 24px;
          font-weight: 800;
          color: #003fa8;
          margin-bottom: 14px;
        }

        .users-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          align-items: stretch;
        }

        .user-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          height: 100%;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .user-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.06);
          border-color: #cbd5e1;
        }

        .user-avatar-wrap {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          overflow: hidden;
          border: 2.5px solid #93c5fd;
          flex-shrink: 0;
          position: relative;
        }

        .user-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .user-content {
          display: flex;
          flex-direction: column;
        }

        .user-role-name {
          font-size: 14.5px;
          font-weight: 800;
          color: #003fa8;
          margin-bottom: 3px;
        }

        .user-role-desc {
          font-size: 11.5px;
          color: #64748b;
          line-height: 1.4;
        }

        /* -------------------------------------------------------------
           6. THREE-COLUMN DETAILS SECTION
        ------------------------------------------------------------- */
        .tri-section {
          padding-top: 20px;
          padding-bottom: 26px;
          background: #ffffff;
        }

        .tri-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr;
          gap: 16px;
          align-items: stretch;
        }

        .tri-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .tri-card-title {
          font-size: 16.5px;
          font-weight: 800;
          color: #003fa8;
          margin-bottom: 12px;
        }

        /* Column 1: How SkaiMitra Supports Skill Learning */
        .steps-container {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          gap: 4px;
          align-items: flex-start;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: #ffffff;
          font-size: 13.5px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .step-circle-1 { background-color: #059669; }
        .step-circle-2 { background-color: #2563eb; }
        .step-circle-3 { background-color: #4f46e5; }
        .step-circle-4 { background-color: #a855f7; }

        .step-arrow {
          color: #64748b;
          font-size: 15px;
          margin-top: 6px;
          display: flex;
          align-items: center;
        }

        .step-name {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .step-text {
          font-size: 10.5px;
          color: #475569;
          line-height: 1.35;
        }

        /* Column 2: Why Choose SkaiMitra? */
        .why-choose-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .why-choose-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #334155;
          font-weight: 500;
        }

        .check-icon-green {
          color: #059669;
          flex-shrink: 0;
        }

        /* Column 3: Learning Outcomes & For Schools */
        .outcomes-list {
          list-style: none;
          padding: 0;
          margin: 0 0 12px 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .outcome-item {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          font-size: 12px;
          color: #334155;
          font-weight: 500;
        }

        .outcome-icon {
          color: #0056b3;
          margin-top: 1px;
          flex-shrink: 0;
        }

        .for-schools-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
        }

        .for-schools-icon {
          color: #0056b3;
          flex-shrink: 0;
        }

        .for-schools-info {
          display: flex;
          flex-direction: column;
        }

        .for-schools-title {
          font-size: 13.5px;
          font-weight: 800;
          color: #003fa8;
          margin-bottom: 2px;
        }

        .for-schools-grades {
          font-size: 11px;
          color: #64748b;
          margin-bottom: 2px;
        }

        .for-schools-tagline {
          font-size: 11px;
          font-weight: 600;
          color: #0056b3;
        }

        /* -------------------------------------------------------------
           7. PRE-FOOTER BANNER
        ------------------------------------------------------------- */
        .prefooter-banner {
          background: radial-gradient(ellipse at center, #0a2558 0%, #03112c 100%);
          color: #ffffff;
          padding: 32px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .prefooter-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.18) 0%, transparent 60%),
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 100% 100%, 36px 36px, 36px 36px;
          pointer-events: none;
        }

        .prefooter-inner {
          position: relative;
          z-index: 2;
          max-width: 780px;
          margin: 0 auto;
        }

        .prefooter-title {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .prefooter-subtitle {
          font-size: 13.5px;
          color: #cbd5e1;
          margin-bottom: 18px;
        }

        .prefooter-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .prefooter-btn-demo {
          background-color: #059669;
          color: #ffffff;
          padding: 9px 22px;
          border-radius: 6px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .prefooter-btn-demo:hover {
          background-color: #047857;
          transform: translateY(-1px);
        }

        .prefooter-btn-contact {
          background-color: transparent;
          color: #ffffff;
          border: 1.5px solid #3b82f6;
          padding: 8px 22px;
          border-radius: 6px;
          font-size: 13.5px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .prefooter-btn-contact:hover {
          background-color: rgba(59, 130, 246, 0.15);
          transform: translateY(-1px);
        }

        .prefooter-contact-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          font-size: 12.5px;
          color: #94a3b8;
          flex-wrap: wrap;
        }

        .prefooter-contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .prefooter-contact-item:hover {
          color: #60a5fa;
        }

        /* -------------------------------------------------------------
           RESPONSIVE BREAKPOINTS (ALL PORTRAIT & LANDSCAPE SIZES)
        ------------------------------------------------------------- */
        /* Large Tablet / Small Desktop (992px - 1180px) */
        @media (max-width: 1180px) {
          .skaimitra-container {
            padding-left: 18px;
            padding-right: 18px;
          }
          .lms-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
          }
          .tri-grid {
            grid-template-columns: 1.15fr 1fr 1fr;
            gap: 14px;
          }
        }

        /* Tablet Portrait & Small Tablet Landscape (769px - 991px) */
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .hero-headline {
            font-size: 30px;
          }
          .pillar-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .skill-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .users-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .tri-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .steps-container {
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
          }
          .step-arrow {
            display: none;
          }
        }

        /* Mobile Landscape & Large Mobile Portrait (541px - 768px) */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 20px;
          }
          .hero-brand-lockup {
            justify-content: center;
          }
          .hero-cta-buttons {
            justify-content: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .pillar-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .skill-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .lms-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .users-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .tri-grid {
            grid-template-columns: 1fr;
          }
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }

        /* Mobile Portrait (<= 540px) */
        @media (max-width: 540px) {
          .skaimitra-container {
            padding-left: 14px;
            padding-right: 14px;
          }
          .section-title {
            font-size: 22px;
          }
          .hero-headline {
            font-size: 26px;
          }
          .hero-features-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .hero-cta-buttons {
            flex-direction: column;
            width: 100%;
          }
          .btn-green-primary, .btn-blue-outline {
            width: 100%;
            justify-content: center;
          }
          .pillar-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .skill-cards-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .lms-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .users-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .steps-container {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .step-arrow {
            display: none;
          }
          .prefooter-title {
            font-size: 20px;
          }
          .prefooter-actions {
            flex-direction: column;
            width: 100%;
          }
          .prefooter-btn-demo, .prefooter-btn-contact {
            width: 100%;
            justify-content: center;
          }
          .prefooter-contact-info {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>

      {/* -------------------------------------------------------------
          1. HERO SECTION
      ------------------------------------------------------------- */}
      <section className="hero-section">
        <div className="skaimitra-container">
          <div className="hero-grid">
            {/* Left Content Column */}
            <div>
              {/* Brand Lockup */}
              <div className="hero-brand-lockup">
                <Image
                  src="/images/SkaiMitra_LogoV2.0.jpg"
                  alt="SkaiMitra Logo"
                  width={48}
                  height={48}
                  className="hero-logo-img"
                  priority
                />
                <div className="hero-brand-texts">
                  <div className="hero-brand-name">
                    Skai<span>Mitra</span>
                  </div>
                  <div className="hero-brand-tagline">
                    Learn Today. Create Tomorrow.
                  </div>
                </div>
              </div>

              {/* Eyebrow Pill */}
              <div className="hero-pill-badge">
                AI-POWERED LEARNING FOR FUTURE-READY SCHOOLS
              </div>

              {/* Main Headline */}
              <h1 className="hero-headline">
                <span>Learn. Create. Grow</span>
                <span>with SkaiMitra.</span>
              </h1>

              {/* Description */}
              <p className="hero-description">
                SkaiMitra brings AI & Coding skill education, learning resources, assignments, assessments, progress tracking and AI-powered assistance into one learning platform.
              </p>

              {/* 4 Feature Badges */}
              <div className="hero-features-row">
                <div className="hero-feat-item">
                  <div className="hero-feat-icon-wrap">
                    <Cpu size={22} />
                  </div>
                  <span className="hero-feat-label">AI & Coding<br />Skills</span>
                </div>

                <div className="hero-feat-item">
                  <div className="hero-feat-icon-wrap">
                    <Presentation size={22} />
                  </div>
                  <span className="hero-feat-label">Interactive<br />Learning</span>
                </div>

                <div className="hero-feat-item">
                  <div className="hero-feat-icon-wrap">
                    <Cloud size={22} />
                  </div>
                  <span className="hero-feat-label">AI-Powered<br />LMS</span>
                </div>

                <div className="hero-feat-item">
                  <div className="hero-feat-icon-wrap">
                    <TrendingUp size={22} />
                  </div>
                  <span className="hero-feat-label">Progress<br />Tracking</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-cta-buttons">
                <Link href="/contactus" className="btn-green-primary">
                  Explore SkaiMitra <ArrowRight size={16} />
                </Link>
                <Link href="/contactus" className="btn-blue-outline">
                  Request a Demo <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Graphic Column */}
            <div className="hero-image-wrap">
              <Image
                src="/images/Skaimitra/herosection.png"
                alt="Students collaborating with SkaiMitra"
                width={620}
                height={480}
                priority
                className="hero-main-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          2. ONE PLATFORM. COMPLETE LEARNING EXPERIENCE.
      ------------------------------------------------------------- */}
      <section className="pillar-section">
        <div className="skaimitra-container">
          <div className="section-header-centered">
            <h2 className="section-title">One Platform. Complete Learning Experience.</h2>
            <p className="section-subtitle">
              Everything your school needs to deliver AI and Coding education, engage learners, and drive real results.
            </p>
          </div>

          <div className="pillar-grid">
            {/* Card 1: Learn */}
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <BookOpen size={24} />
              </div>
              <h3 className="pillar-title">Learn</h3>
              <p className="pillar-desc">
                Structured AI & Coding curriculum and digital resources.
              </p>
            </div>

            {/* Card 2: Practice */}
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Target size={24} />
              </div>
              <h3 className="pillar-title">Practice</h3>
              <p className="pillar-desc">
                Assignments, exercises, quizzes and guided activities.
              </p>
            </div>

            {/* Card 3: Create */}
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Lightbulb size={24} />
              </div>
              <h3 className="pillar-title">Create</h3>
              <p className="pillar-desc">
                Hands-on coding, AI, IoT and real-world projects.
              </p>
            </div>

            {/* Card 4: Track */}
            <div className="pillar-card">
              <div className="pillar-icon-box">
                <BarChart3 size={24} />
              </div>
              <h3 className="pillar-title">Track</h3>
              <p className="pillar-desc">
                Attendance, assessments, grades, progress and actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          3. SKILL EDUCATION WITH SKAIMITRA
      ------------------------------------------------------------- */}
      <section className="skill-education-section">
        <div className="skaimitra-container">
          <div className="section-header-centered">
            <h2 className="section-title">Skill Education with SkaiMitra</h2>
            <p className="section-subtitle">
              CBSE/ICSE-oriented skill learning in AI and Coding for Grades 6-12
            </p>
          </div>

          <div className="skill-cards-grid">
            {/* Card 1: Artificial Intelligence */}
            <div className="skill-card">
              <div className="skill-card-img-wrap">
                <Image
                  src="/images/Skaimitra/ai.png"
                  alt="Artificial Intelligence"
                  width={340}
                  height={170}
                  className="skill-card-img"
                />
              </div>
              <div className="skill-card-body">
                <div className="skill-badge-floating">
                  <Brain size={22} />
                </div>
                <div>
                  <h3 className="skill-card-title">Artificial Intelligence</h3>
                  <ul className="skill-bullets">
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>AI foundations and AI domains</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Prompt engineering</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Responsible AI</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Real-world applications</span>
                    </li>
                  </ul>
                </div>
                <Link href="/contactus" className="skill-learn-btn">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Coding & Computational Thinking */}
            <div className="skill-card">
              <div className="skill-card-img-wrap">
                <Image
                  src="/images/Skaimitra/coding.png"
                  alt="Coding & Computational Thinking"
                  width={340}
                  height={170}
                  className="skill-card-img"
                />
              </div>
              <div className="skill-card-body">
                <div className="skill-badge-floating">
                  <Code2 size={22} />
                </div>
                <div>
                  <h3 className="skill-card-title">Coding & Computational Thinking</h3>
                  <ul className="skill-bullets">
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Programming fundamentals</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Python and coding activities</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Problem solving and algorithms</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Project development</span>
                    </li>
                  </ul>
                </div>
                <Link href="/contactus" className="skill-learn-btn">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: Hands-On Projects */}
            <div className="skill-card">
              <div className="skill-card-img-wrap">
                <Image
                  src="/images/Skaimitra/hands on projects.png"
                  alt="Hands-On Projects"
                  width={340}
                  height={170}
                  className="skill-card-img"
                />
              </div>
              <div className="skill-card-body">
                <div className="skill-badge-floating">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="skill-card-title">Hands-On Projects</h3>
                  <ul className="skill-bullets">
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Build real-world solutions</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>AI, IoT and creative projects</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Collaborate and innovate</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Showcase your learning</span>
                    </li>
                  </ul>
                </div>
                <Link href="/contactus" className="skill-learn-btn">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 4: Teacher Enablement */}
            <div className="skill-card">
              <div className="skill-card-img-wrap">
                <Image
                  src="/images/Skaimitra/teacher.png"
                  alt="Teacher Enablement"
                  width={340}
                  height={170}
                  className="skill-card-img"
                />
              </div>
              <div className="skill-card-body">
                <div className="skill-badge-floating">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="skill-card-title">Teacher Enablement</h3>
                  <ul className="skill-bullets">
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Lesson planning and teaching resources</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Assignments and assessments</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>AI-assisted support</span>
                    </li>
                    <li className="skill-bullet-item">
                      <span className="skill-bullet-dot"></span>
                      <span>Professional development</span>
                    </li>
                  </ul>
                </div>
                <Link href="/contactus" className="skill-learn-btn">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          4. EVERYTHING SCHOOLS NEED IN ONE LMS
      ------------------------------------------------------------- */}
      <section className="lms-section">
        <div className="skaimitra-container">
          <div className="section-header-centered">
            <h2 className="section-title">Everything Schools Need in One LMS</h2>
            <p className="section-subtitle">
              A comprehensive platform to manage teaching, learning, and school operations.
            </p>
          </div>

          <div className="lms-grid">
            {/* 1 */}
            <div className="lms-tile">
              <BookOpen size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Course & Learning Resources</span>
            </div>

            {/* 2 */}
            <div className="lms-tile">
              <FileText size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Lesson Plans</span>
            </div>

            {/* 3 */}
            <div className="lms-tile">
              <Laptop size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Assignments & Question Bank</span>
            </div>

            {/* 4 */}
            <div className="lms-tile">
              <Award size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Assessments & Grading</span>
            </div>

            {/* 5 */}
            <div className="lms-tile">
              <CalendarDays size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Attendance</span>
            </div>

            {/* 6 */}
            <div className="lms-tile">
              <BarChart3 size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Reports & Analytics</span>
            </div>

            {/* 7 */}
            <div className="lms-tile">
              <Megaphone size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Communications</span>
            </div>

            {/* 8 */}
            <div className="lms-tile">
              <Users size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Parent Engagement</span>
            </div>

            {/* 9 */}
            <div className="lms-tile">
              <Sparkles size={28} className="lms-tile-icon ai-assistant-icon" />
              <span className="lms-tile-label">Skai Assistant</span>
            </div>

            {/* 10 */}
            <div className="lms-tile">
              <ClipboardCheck size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Rubrics & AI-Assisted Grading</span>
            </div>

            {/* 11 */}
            <div className="lms-tile">
              <Smartphone size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">Mobile Application</span>
            </div>

            {/* 12 */}
            <div className="lms-tile">
              <Settings size={28} className="lms-tile-icon" />
              <span className="lms-tile-label">User & Token Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          5. BUILT FOR EVERY USER
      ------------------------------------------------------------- */}
      <section className="users-section">
        <div className="skaimitra-container">
          <h2 className="users-title">Built for Every User</h2>

          <div className="users-grid">
            {/* Student */}
            <div className="user-card">
              <div className="user-avatar-wrap">
                <Image
                  src="/images/Skaimitra/studentprofile.png"
                  alt="Student"
                  width={60}
                  height={60}
                  className="user-avatar-img"
                />
              </div>
              <div className="user-content">
                <h3 className="user-role-name">Students</h3>
                <p className="user-role-desc">
                  Learn, practice, submit work, take assessments and track progress.
                </p>
              </div>
            </div>

            {/* Teacher */}
            <div className="user-card">
              <div className="user-avatar-wrap">
                <Image
                  src="/images/Skaimitra/teacherprofile.png"
                  alt="Teacher"
                  width={60}
                  height={60}
                  className="user-avatar-img"
                />
              </div>
              <div className="user-content">
                <h3 className="user-role-name">Teachers</h3>
                <p className="user-role-desc">
                  Plan lessons, share resources, create assignments and assessments, and monitor learning.
                </p>
              </div>
            </div>

            {/* School Administrator */}
            <div className="user-card">
              <div className="user-avatar-wrap">
                <Image
                  src="/images/Skaimitra/schoolAdmin profile.png"
                  alt="School Administrator"
                  width={60}
                  height={60}
                  className="user-avatar-img"
                />
              </div>
              <div className="user-content">
                <h3 className="user-role-name">School Administrators</h3>
                <p className="user-role-desc">
                  Manage users, curriculum, attendance, reports, communications and AI access.
                </p>
              </div>
            </div>

            {/* Parents */}
            <div className="user-card">
              <div className="user-avatar-wrap">
                <Image
                  src="/images/Skaimitra/parent profile.png"
                  alt="Parent"
                  width={60}
                  height={60}
                  className="user-avatar-img"
                />
              </div>
              <div className="user-content">
                <h3 className="user-role-name">Parents</h3>
                <p className="user-role-desc">
                  Stay informed about attendance, performance, assignments, events and school communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          6. THREE-COLUMN DETAILS SECTION
      ------------------------------------------------------------- */}
      <section className="tri-section">
        <div className="skaimitra-container">
          <div className="tri-grid">
            {/* Col 1: How SkaiMitra Supports Skill Learning */}
            <div className="tri-card">
              <h3 className="tri-card-title">How SkaiMitra Supports Skill Learning</h3>
              <div className="steps-container">
                {/* Step 1 */}
                <div className="step-item">
                  <div className="step-circle step-circle-1">1</div>
                  <div className="step-name">Plan</div>
                  <div className="step-text">Configure courses, classes, users and learning resources.</div>
                </div>

                <div className="step-arrow">→</div>

                {/* Step 2 */}
                <div className="step-item">
                  <div className="step-circle step-circle-2">2</div>
                  <div className="step-name">Teach</div>
                  <div className="step-text">Deliver instructor-led learning with digital content and activities.</div>
                </div>

                <div className="step-arrow">→</div>

                {/* Step 3 */}
                <div className="step-item">
                  <div className="step-circle step-circle-3">3</div>
                  <div className="step-name">Practice &amp; Assess</div>
                  <div className="step-text">Assignments, quizzes, projects, rubrics and feedback.</div>
                </div>

                <div className="step-arrow">→</div>

                {/* Step 4 */}
                <div className="step-item">
                  <div className="step-circle step-circle-4">4</div>
                  <div className="step-name">Improve</div>
                  <div className="step-text">Progress reports, analytics, AI insights, and targeted support.</div>
                </div>
              </div>
            </div>

            {/* Col 2: Why Choose SkaiMitra? */}
            <div className="tri-card">
              <h3 className="tri-card-title">Why Choose SkaiMitra?</h3>
              <ul className="why-choose-list">
                <li className="why-choose-item">
                  <CheckCircle2 size={16} className="check-icon-green" />
                  <span>Integrated LMS + AI tools</span>
                </li>
                <li className="why-choose-item">
                  <CheckCircle2 size={16} className="check-icon-green" />
                  <span>AI &amp; Coding skill education</span>
                </li>
                <li className="why-choose-item">
                  <CheckCircle2 size={16} className="check-icon-green" />
                  <span>Structured learning resources</span>
                </li>
                <li className="why-choose-item">
                  <CheckCircle2 size={16} className="check-icon-green" />
                  <span>Hands-on, project-based learning</span>
                </li>
                <li className="why-choose-item">
                  <CheckCircle2 size={16} className="check-icon-green" />
                  <span>Teacher and administrator workflows</span>
                </li>
                <li className="why-choose-item">
                  <CheckCircle2 size={16} className="check-icon-green" />
                  <span>Assessments, rubrics and progress reports</span>
                </li>
                <li className="why-choose-item">
                  <CheckCircle2 size={16} className="check-icon-green" />
                  <span>Parent communication and engagement</span>
                </li>
                <li className="why-choose-item">
                  <CheckCircle2 size={16} className="check-icon-green" />
                  <span>Flexible school implementation</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Learning Outcomes & For Schools */}
            <div className="tri-card">
              <h3 className="tri-card-title">Learning Outcomes</h3>
              <ul className="outcomes-list">
                <li className="outcome-item">
                  <Brain size={15} className="outcome-icon" />
                  <span>Understand AI concepts</span>
                </li>
                <li className="outcome-item">
                  <Code2 size={15} className="outcome-icon" />
                  <span>Develop coding and problem-solving skills</span>
                </li>
                <li className="outcome-item">
                  <Bot size={15} className="outcome-icon" />
                  <span>Build real-world projects</span>
                </li>
                <li className="outcome-item">
                  <ShieldCheck size={15} className="outcome-icon" />
                  <span>Use AI responsibly</span>
                </li>
                <li className="outcome-item">
                  <Users size={15} className="outcome-icon" />
                  <span>Collaborate and communicate</span>
                </li>
                <li className="outcome-item">
                  <Target size={15} className="outcome-icon" />
                  <span>Build a portfolio of learning evidence</span>
                </li>
              </ul>

              {/* For Schools Box */}
              <div className="for-schools-box">
                <Building2 size={32} className="for-schools-icon" />
                <div className="for-schools-info">
                  <div className="for-schools-title">For Schools</div>
                  <div className="for-schools-grades">Grades 6-12 | Teachers | Administrators | Parents</div>
                  <div className="for-schools-tagline">A complete solution for AI and Coding skill education.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------
          7. PRE-FOOTER CALL TO ACTION BANNER
      ------------------------------------------------------------- */}
      <section className="prefooter-banner">
        <div className="skaimitra-container">
          <div className="prefooter-inner">
            <h2 className="prefooter-title">Build Future-Ready Skills with SkaiMitra</h2>
            <p className="prefooter-subtitle">
              Bring AI, Coding and intelligent learning tools into one connected school experience.
            </p>

            <div className="prefooter-actions">
              <Link href="/contactus" className="prefooter-btn-demo">
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link href="/contactus" className="prefooter-btn-contact">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="prefooter-contact-info">
              <a href="tel:+919603992299" className="prefooter-contact-item">
                <Phone size={15} />
                <span>+91 96039 92299</span>
              </a>
              <a href="mailto:support@advaitecs.com" className="prefooter-contact-item">
                <Mail size={15} />
                <span>support@advaitecs.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
