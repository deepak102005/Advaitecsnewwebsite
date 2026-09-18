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
  Settings, 
  FileText, 
  Phone, 
  Mail,
  Bot,
  Brain,
  MessageSquare,
  TrendingUp,
  Share2
} from 'lucide-react';

/* =========================================================================
   EXACT VECTOR ICONS FOR TECHNOLOGIES
   ========================================================================= */

// 1. Python Logo
const PythonIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <path d="M23.5 4C14.7 4 15.2 7.8 15.2 7.8L15.3 11.7H24V13H11.7C6.6 13 4 15.9 4 23.3C4 30.7 7.7 30.6 7.7 30.6H11V26.2C11 21.1 15.3 21 15.3 21H23.9C28.2 21 31.8 17.5 31.8 13.1V7.8C31.8 7.8 32.3 4 23.5 4ZM19.2 6.8C20.1 6.8 20.8 7.5 20.8 8.4C20.8 9.3 20.1 10.1 19.2 10.1C18.3 10.1 17.5 9.3 17.5 8.4C17.5 7.5 18.3 6.8 19.2 6.8Z" fill="#3672A4"/>
    <path d="M24.5 44C33.3 44 32.8 40.2 32.8 40.2L32.7 36.3H24V35H36.3C41.4 35 44 32.1 44 24.7C44 17.3 40.3 17.4 40.3 17.4H37V21.8C37 26.9 32.7 27 32.7 27H24.1C19.8 27 16.2 30.5 16.2 34.9V40.2C16.2 40.2 15.7 44 24.5 44ZM28.8 41.2C27.9 41.2 27.2 40.5 27.2 39.6C27.2 38.7 27.9 37.9 28.8 37.9C29.7 37.9 30.5 38.7 30.5 39.6C30.5 40.5 29.7 41.2 28.8 41.2Z" fill="#FFD43B"/>
  </svg>
);

// 2. Java Logo
const JavaIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <path d="M21.5 8C20 12 24.5 14 26 18C24.5 15.5 22 14.5 21.5 8Z" fill="#EA2D2E"/>
    <path d="M26 6C23 10.5 30 13.5 31 20C30 16 26.5 14.5 26 6Z" fill="#EA2D2E"/>
    <path d="M14 24C14 24 11 25.5 14 27C17 28.5 28.5 28.5 33 27C37.5 25.5 34.5 24 34.5 24C34.5 24 38 27 32.5 29C27 31 16 31 12 29C8 27 14 24 14 24Z" fill="#007396"/>
    <path d="M18 31C18 31 11 32 15 34C19 36 29 36 33 34C37 32 30 31 30 31C30 31 36 33.5 30 35.5C24 37.5 16 37.5 12 35.5C8 33.5 18 31 18 31Z" fill="#007396"/>
    <path d="M23 37.5C18.5 38 12.5 39 16 41C19.5 43 28 43 32 41C36 39 29 38 29 38C29 38 34.5 40 29 42C23.5 44 14 44 11 41.5C8 39 23 37.5 23 37.5Z" fill="#007396"/>
    <path d="M33 22C36 22 39 23 39 25.5C39 28 36.5 29 34 29.5C35 28.5 35.5 27 35.5 25.5C35.5 24 34.5 23 33 22Z" fill="#EA2D2E"/>
  </svg>
);

// 3. NumPy Logo
const NumpyIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <path d="M24 4L7 14V34L24 44L41 34V14L24 4Z" fill="#013243" stroke="#4D77CF" strokeWidth="2"/>
    <path d="M24 4V24L41 14" stroke="#4DABF7" strokeWidth="2.5"/>
    <path d="M24 24L7 14" stroke="#4DABF7" strokeWidth="2.5"/>
    <path d="M24 24V44" stroke="#4DABF7" strokeWidth="2.5"/>
    <path d="M15.5 19L24 14L32.5 19" stroke="#ffffff" strokeWidth="1.5"/>
    <path d="M15.5 29L24 34L32.5 29" stroke="#ffffff" strokeWidth="1.5"/>
    <circle cx="24" cy="24" r="3.5" fill="#4DABF7"/>
  </svg>
);

// 4. Pandas Logo
const PandasIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <rect x="10" y="8" width="6.5" height="32" rx="3" fill="#150458"/>
    <rect x="19" y="14" width="6.5" height="26" rx="3" fill="#FFCA00"/>
    <rect x="28" y="6" width="6.5" height="34" rx="3" fill="#E70488"/>
    <rect x="37" y="18" width="6.5" height="22" rx="3" fill="#00C0FF"/>
  </svg>
);

// 5. Matplotlib Logo
const MatplotlibIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke="#11557c" strokeWidth="2" fill="#ffffff"/>
    <path d="M24 6A18 18 0 0 1 42 24" stroke="#e24a33" strokeWidth="4.5"/>
    <path d="M42 24A18 18 0 0 1 24 42" stroke="#348abd" strokeWidth="4.5"/>
    <path d="M24 42A18 18 0 0 1 6 24" stroke="#988ed5" strokeWidth="4.5"/>
    <path d="M6 24A18 18 0 0 1 24 6" stroke="#8eba42" strokeWidth="4.5"/>
    <circle cx="24" cy="24" r="5" fill="#11557c"/>
    <line x1="24" y1="24" x2="33" y2="15" stroke="#11557c" strokeWidth="2.5"/>
  </svg>
);

// 6. Git Logo
const GitIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <rect x="7" y="7" width="34" height="34" rx="6" transform="rotate(45 24 24)" fill="#F05032"/>
    <circle cx="18" cy="24" r="3.2" fill="#ffffff"/>
    <circle cx="28" cy="18" r="3.2" fill="#ffffff"/>
    <circle cx="28" cy="30" r="3.2" fill="#ffffff"/>
    <path d="M18 24H25C26.6 24 28 22.6 28 21V18" stroke="#ffffff" strokeWidth="2.8"/>
    <path d="M28 21V30" stroke="#ffffff" strokeWidth="2.8"/>
  </svg>
);

// 7. GitHub Logo
const GithubIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.95 4 4 12.95 4 24C4 32.84 9.73 40.34 17.68 42.99C18.68 43.17 19.04 42.56 19.04 42.03C19.04 41.56 19.02 40.07 19.01 38.41C13.45 39.62 12.27 35.97 12.27 35.97C11.36 33.66 10.05 33.04 10.05 33.04C8.23 31.8 10.19 31.83 10.19 31.83C12.2 31.97 13.26 33.9 13.26 33.9C15.05 36.96 17.95 36.08 19.09 35.56C19.27 34.26 19.79 33.37 20.37 32.87C15.93 32.37 11.26 30.65 11.26 22.98C11.26 20.79 12.04 19.01 13.32 17.61C13.11 17.11 12.43 15.07 13.52 12.32C13.52 12.32 15.2 11.78 19.02 14.37C20.62 13.93 22.32 13.71 24.01 13.7C25.7 13.71 27.4 13.93 29 14.37C32.82 11.78 34.5 12.32 34.5 12.32C35.59 15.07 34.91 17.11 34.7 17.61C35.98 19.01 36.75 20.79 36.75 22.98C36.75 30.67 32.07 32.36 27.61 32.85C28.32 33.46 28.96 34.67 28.96 36.52C28.96 39.19 28.93 41.34 28.93 42.03C28.93 42.57 29.29 43.19 30.31 42.99C38.27 40.33 44 32.84 44 24C44 12.95 35.05 4 24 4Z" fill="#181717"/>
  </svg>
);

// 8. Docker Logo
const DockerIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <path d="M44.5 22C43 21 40 21 38.5 22C37.5 20 35 19 33 19C33 18 31 16 29 16V19H25V15H21V19H17V15H13V19H9V23H5V27H3C2 28.5 2 30 3 32C7 39 16 41 24 41C34 41 42 36 45 28C46 25 46 23 44.5 22Z" fill="#2496ED"/>
    <rect x="13" y="19" width="3.5" height="3.5" fill="#ffffff" rx="0.5"/>
    <rect x="17" y="19" width="3.5" height="3.5" fill="#ffffff" rx="0.5"/>
    <rect x="21" y="19" width="3.5" height="3.5" fill="#ffffff" rx="0.5"/>
    <rect x="17" y="15" width="3.5" height="3.5" fill="#ffffff" rx="0.5"/>
    <rect x="21" y="15" width="3.5" height="3.5" fill="#ffffff" rx="0.5"/>
    <rect x="25" y="19" width="3.5" height="3.5" fill="#ffffff" rx="0.5"/>
    <circle cx="10" cy="30" r="1.5" fill="#ffffff"/>
  </svg>
);

// 9. VS Code Logo
const VsCodeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <path d="M36 6L28 13.5L14 2L6 8V40L14 46L28 34.5L36 42L44 38V10L36 6Z" fill="#007ACC"/>
    <path d="M36 6L14 26L6 20V8L14 2L36 6Z" fill="#0065A9"/>
    <path d="M36 42L14 22L6 28V40L14 46L36 42Z" fill="#007ACC"/>
    <path d="M36 6V42L44 38V10L36 6Z" fill="#1F9CF0"/>
  </svg>
);

// 10. PyCharm Logo
const PyCharmIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <rect x="4" y="4" width="40" height="40" rx="8" fill="#21D789"/>
    <rect x="7" y="7" width="34" height="34" rx="6" fill="#000000"/>
    <path d="M12 14H21C24 14 26 16 26 19C26 22 24 24 21 24H16V28H12V14ZM16 17.5V20.5H20.5C21.8 20.5 22.5 19.8 22.5 19C22.5 18.2 21.8 17.5 20.5 17.5H16Z" fill="#ffffff"/>
    <path d="M33.5 24.5C32.5 23.5 31 23 29 23C26 23 24 25.5 24 28.5C24 31.5 26 34 29 34C31 34 32.5 33.5 33.5 32.5L35.5 35C34 36.8 31.8 37.8 29 37.8C23.8 37.8 20 33.8 20 28.5C20 23.2 23.8 19.2 29 19.2C31.8 19.2 34 20.2 35.5 22L33.5 24.5Z" fill="#21D789"/>
    <rect x="12" y="32" width="8" height="2.5" fill="#ffffff"/>
  </svg>
);

// 11. IntelliJ IDEA Logo
const IntelliJIcon = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
    <rect x="4" y="4" width="40" height="40" rx="8" fill="url(#ijGradient)"/>
    <rect x="7" y="7" width="34" height="34" rx="6" fill="#000000"/>
    <path d="M14 14H18V28H14V14Z" fill="#ffffff"/>
    <path d="M22 14H26V24C26 26.5 24.5 28 22 28H20V24.5H21.5C22.5 24.5 23 24 23 23V14H22Z" fill="#ffffff"/>
    <rect x="14" y="32" width="8" height="2.5" fill="#FE2857"/>
    <defs>
      <linearGradient id="ijGradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FE2857"/>
        <stop offset="0.5" stopColor="#9B30FF"/>
        <stop offset="1" stopColor="#087CFA"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function AICareerPage() {
  return (
    <div className="ai-page-wrapper">
      <style>{`
        .ai-page-wrapper {
          background-color: #ffffff;
          color: #0f172a;
          font-family: inherit;
        }

        .ai-container {
          max-width: 1220px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* 1. HERO SECTION */
        .ai-hero-section {
          background: #ffffff;
          padding: 18px 0 22px;
          border-bottom: 1px solid #f1f5f9;
        }

        .ai-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 28px;
          align-items: center;
        }

        .ai-hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ai-hero-badge {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0056b3;
          margin-bottom: 6px;
        }

        .ai-hero-title {
          font-size: 38px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #003fa8;
          margin: 0 0 4px 0;
        }

        .ai-hero-subtitle {
          font-size: 20px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 10px 0;
          letter-spacing: -0.015em;
        }

        .ai-hero-desc {
          font-size: 14.5px;
          line-height: 1.55;
          color: #475569;
          margin: 0 0 16px 0;
          max-width: 520px;
        }

        .ai-meta-pills-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .ai-meta-pill {
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

        .ai-hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-enroll-now {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #059669;
          color: #ffffff;
          padding: 10px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(5, 150, 105, 0.25);
          transition: all 0.2s ease;
        }

        .btn-enroll-now:hover {
          background: #047857;
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

        /* Hero Image Container: Full natural fit so faces are 100% visible */
        .ai-hero-img-wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ai-hero-img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
          display: block;
          border-radius: 8px;
        }

        /* 2. BECOME AN AI-READY PROFESSIONAL (4 CARDS) */
        .ai-pillars-section {
          padding: 24px 0 28px;
          background: #ffffff;
        }

        .ai-section-header {
          text-align: center;
          margin-bottom: 22px;
        }

        .ai-section-header h2 {
          font-size: 30px;
          font-weight: 800;
          color: #003fa8;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .ai-section-header p {
          font-size: 14.5px;
          color: #64748b;
          margin: 0;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
        }

        .ai-pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .ai-pillar-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 22px 18px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ai-pillar-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 86, 179, 0.08);
          border-color: #cbd5e1;
        }

        .ai-pillar-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #eef5ff;
          color: #0056b3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .ai-pillar-card h3 {
          font-size: 17px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 6px 0;
        }

        .ai-pillar-card p {
          font-size: 12.5px;
          line-height: 1.5;
          color: #64748b;
          margin: 0;
        }

        /* 3. 16-WEEK LEARNING ROADMAP (4 CARDS + CONNECTORS) */
        .ai-roadmap-section {
          padding: 22px 0 26px;
          background: #f8fafc;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
        }

        .ai-roadmap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          position: relative;
        }

        .ai-roadmap-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 16px;
          position: relative;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .ai-roadmap-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .ai-roadmap-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #eef5ff;
          color: #0056b3;
          font-weight: 800;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ai-roadmap-title-group h4 {
          font-size: 13.5px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 1px 0;
          line-height: 1.25;
        }

        .ai-roadmap-title-group h4.production-capstone {
          color: #d97706;
        }

        .ai-roadmap-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ai-roadmap-bullet {
          font-size: 12px;
          line-height: 1.45;
          color: #475569;
          display: flex;
          align-items: flex-start;
          gap: 6px;
        }

        .ai-roadmap-bullet::before {
          content: '•';
          color: #0056b3;
          font-weight: bold;
          font-size: 14px;
          line-height: 1;
        }

        .ai-connector-arrow {
          display: none;
        }

        /* 4. TECHNOLOGIES YOU WILL LEARN (11 TECH BADGES) */
        .ai-technologies-section {
          padding: 24px 0 26px;
          background: #ffffff;
        }

        .ai-technologies-grid {
          display: grid;
          grid-template-columns: repeat(11, 1fr);
          gap: 10px;
        }

        .ai-tech-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px 4px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: all 0.2s ease;
        }

        .ai-tech-card:hover {
          transform: translateY(-2px);
          border-color: #0056b3;
          box-shadow: 0 4px 12px rgba(0, 86, 179, 0.08);
        }

        .ai-tech-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 38px;
          margin-bottom: 6px;
        }

        .ai-tech-name {
          font-size: 11px;
          font-weight: 700;
          color: #1e293b;
          white-space: nowrap;
        }

        /* 5. UPCOMING BATCHES & WEEKDAY SCHEDULE (2 COLUMNS) */
        .ai-batches-schedule-section {
          padding: 20px 0 24px;
          background: #ffffff;
        }

        .ai-batches-schedule-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* Batches Card */
        .ai-batches-card {
          background: #ffffff;
          border: 1.5px solid #bfdbfe;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 3px 12px rgba(0, 86, 179, 0.04);
        }

        .ai-batches-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 2px 0;
        }

        .ai-batches-card p.subtitle {
          font-size: 12.5px;
          color: #64748b;
          margin: 0 0 16px 0;
        }

        .ai-batches-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .ai-batch-box {
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 10px 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
        }

        .ai-batch-box-icon {
          color: #0056b3;
          flex-shrink: 0;
        }

        .ai-batch-box-info {
          display: flex;
          flex-direction: column;
        }

        .ai-batch-box-date {
          font-size: 12px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .ai-batch-box-type {
          font-size: 10.5px;
          color: #64748b;
        }

        /* Schedule Card */
        .ai-schedule-card {
          background: #f0fdf4;
          border: 1.5px solid #86efac;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 3px 12px rgba(16, 185, 129, 0.04);
        }

        .ai-schedule-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .ai-schedule-header h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0;
        }

        .ai-schedule-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ai-schedule-item {
          font-size: 12.5px;
          line-height: 1.45;
          color: #334155;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .ai-schedule-item::before {
          content: '•';
          color: #0056b3;
          font-weight: bold;
          font-size: 15px;
          line-height: 1;
        }

        /* 6. PROGRAM HIGHLIGHTS & CAREER OPPORTUNITIES (2 COLUMNS) */
        .ai-app-career-section {
          padding: 20px 0 24px;
          background: #ffffff;
        }

        .ai-app-career-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* Program Highlights Card */
        .ai-app-card {
          background: #ffffff;
          border: 1.5px solid #bfdbfe;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 3px 12px rgba(0, 86, 179, 0.04);
        }

        .ai-app-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 16px 0;
        }

        .ai-app-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 14px;
        }

        .ai-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          line-height: 1.4;
          color: #334155;
        }

        .ai-check-icon {
          color: #059669;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Career Opportunities Card */
        .ai-career-card {
          background: #ffffff;
          border: 1.5px solid #bfdbfe;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 3px 12px rgba(0, 86, 179, 0.04);
        }

        .ai-career-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 2px 0;
        }

        .ai-career-card p.subtitle {
          font-size: 12.5px;
          color: #64748b;
          margin: 0 0 14px 0;
        }

        .ai-career-roles-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          margin-bottom: 14px;
        }

        .ai-career-role-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px 4px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .ai-career-role-box:hover {
          border-color: #0056b3;
          background: #f0f7ff;
        }

        .ai-career-role-box svg {
          color: #0056b3;
        }

        .ai-career-role-box span {
          font-size: 10px;
          font-weight: 700;
          color: #0f172a;
          margin-top: 6px;
          line-height: 1.25;
        }

        .ai-prep-banner {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-prep-text h4 {
          font-size: 13px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 2px 0;
        }

        .ai-prep-text span {
          font-size: 11.5px;
          color: #64748b;
        }

        /* 7. WHO SHOULD ENROLL & PREREQUISITES (2 COLUMNS) */
        .ai-enroll-prereq-section {
          padding: 20px 0 28px;
          background: #ffffff;
        }

        .ai-enroll-prereq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .ai-enroll-card, .ai-prereq-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 20px;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.02);
        }

        .ai-enroll-card h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0 0 12px 0;
        }

        .ai-prereq-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .ai-prereq-header h3 {
          font-size: 18px;
          font-weight: 800;
          color: #003fa8;
          margin: 0;
        }

        .ai-enroll-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ai-enroll-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12.5px;
          line-height: 1.45;
          color: #334155;
        }

        .ai-prereq-card p {
          font-size: 13px;
          line-height: 1.55;
          color: #475569;
          margin: 0;
        }

        /* 8. BOTTOM CTA BANNER */
        .ai-cta-banner {
          position: relative;
          background: linear-gradient(180deg, #010d24 0%, #021a48 50%, #001f5c 100%);
          color: #ffffff;
          padding: 30px 20px;
          text-align: center;
          overflow: hidden;
        }

        .ai-cta-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 12% 35%, rgba(0, 140, 255, 0.22) 0%, transparent 42%),
            radial-gradient(circle at 88% 65%, rgba(0, 140, 255, 0.22) 0%, transparent 42%);
          pointer-events: none;
        }

        .ai-cta-content {
          position: relative;
          z-index: 1;
          max-width: 680px;
          margin: 0 auto;
        }

        .ai-cta-banner h2 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 6px 0;
          color: #ffffff;
          letter-spacing: -0.015em;
        }

        .ai-cta-banner p {
          font-size: 13.5px;
          color: #cbd5e1;
          margin: 0 0 18px 0;
        }

        .ai-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .btn-cta-green-enroll {
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

        .btn-cta-green-enroll:hover {
          background: #10b981;
          transform: translateY(-1px);
        }

        .btn-cta-contact-us {
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

        .btn-cta-contact-us:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: #ffffff;
          transform: translateY(-1px);
        }

        .ai-cta-contact-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          font-size: 13px;
          color: #94a3b8;
        }

        .ai-cta-contact-links a {
          color: #cbd5e1;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
        }

        .ai-cta-contact-links a:hover {
          color: #ffffff;
        }

        /* RESPONSIVE BREAKPOINTS (DESKTOP, TABLET, MOBILE) */
        @media (max-width: 1040px) {
          .ai-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .ai-hero-left {
            align-items: center;
          }
          .ai-meta-pills-row, .ai-hero-buttons {
            justify-content: center;
          }
          .ai-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ai-roadmap-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ai-technologies-grid {
            grid-template-columns: repeat(6, 1fr);
          }
          .ai-batches-schedule-grid {
            grid-template-columns: 1fr;
          }
          .ai-app-career-grid {
            grid-template-columns: 1fr;
          }
          .ai-enroll-prereq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .ai-hero-title {
            font-size: 30px;
          }
          .ai-hero-subtitle {
            font-size: 17px;
          }
          .ai-pillars-grid {
            grid-template-columns: 1fr;
          }
          .ai-roadmap-grid {
            grid-template-columns: 1fr;
          }
          .ai-technologies-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .ai-batches-grid-3 {
            grid-template-columns: 1fr;
          }
          .ai-app-features-grid {
            grid-template-columns: 1fr;
          }
          .ai-career-roles-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      {/* 1. HERO SECTION WITH /images/AIcareer.png (ALL FACES FULLY VISIBLE) */}
      <section className="ai-hero-section">
        <div className="ai-container">
          <div className="ai-hero-grid">
            {/* Left Column */}
            <div className="ai-hero-left">
              <span className="ai-hero-badge">AI SKILLS FOR A BRIGHTER TOMORROW</span>
              <h1 className="ai-hero-title">AI Career Ready Program</h1>
              <h2 className="ai-hero-subtitle">Learn. Build. Innovate. Lead.</h2>
              <p className="ai-hero-desc">
                A 16-week intensive program to help you master AI development from fundamentals to real-world applications. Gain the practical skills, tools and confidence to build and deploy AI solutions.
              </p>

              {/* 3 Meta Pills */}
              <div className="ai-meta-pills-row">
                <span className="ai-meta-pill">
                  <Calendar size={13} />
                  <span>16 Weeks</span>
                </span>
                <span className="ai-meta-pill">
                  <Clock size={13} />
                  <span>Approximately 400 Hours</span>
                </span>
                <span className="ai-meta-pill">
                  <BarChart2 size={13} />
                  <span>70% Hands-on Practice</span>
                </span>
              </div>

              {/* 2 Buttons */}
              <div className="ai-hero-buttons">
                <Link href="/contactus" className="btn-enroll-now">
                  <span>Enroll Now</span>
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contactus" className="btn-talk-advisor">
                  <span>Talk to a Training Advisor</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Column: AIcareer.png with uncropped faces */}
            <div className="ai-hero-img-wrap">
              <Image
                src="/images/AIcareer.png"
                alt="Advaitecs AI career ready students learning intelligent solutions"
                width={850}
                height={480}
                priority
                className="ai-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BECOME AN AI-READY PROFESSIONAL (4 CARDS) */}
      <section className="ai-pillars-section">
        <div className="ai-container">
          <div className="ai-section-header">
            <h2>Become an AI-Ready Professional</h2>
            <p>Gain practical, end-to-end skills to design, develop and deploy AI solutions for real-world problems.</p>
          </div>

          <div className="ai-pillars-grid">
            {/* Card 1: Learn */}
            <div className="ai-pillar-card">
              <div className="ai-pillar-icon-wrap">
                <Lightbulb size={24} />
              </div>
              <h3>Learn</h3>
              <p>Python, Java, AI concepts, prompt engineering and industry tools.</p>
            </div>

            {/* Card 2: Build */}
            <div className="ai-pillar-card">
              <div className="ai-pillar-icon-wrap">
                <Code2 size={24} />
              </div>
              <h3>Build</h3>
              <p>Develop AI agents and real-world applications with hands-on projects.</p>
            </div>

            {/* Card 3: Apply */}
            <div className="ai-pillar-card">
              <div className="ai-pillar-icon-wrap">
                <ClipboardCheck size={24} />
              </div>
              <h3>Apply</h3>
              <p>Use modern tools, best practices and responsible AI principles.</p>
            </div>

            {/* Card 4: Advance */}
            <div className="ai-pillar-card">
              <div className="ai-pillar-icon-wrap">
                <Rocket size={24} />
              </div>
              <h3>Advance</h3>
              <p>Be job-ready for AI roles across industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 16-WEEK LEARNING ROADMAP (4 CARDS) */}
      <section className="ai-roadmap-section">
        <div className="ai-container">
          <div className="ai-section-header">
            <h2>16-Week Learning Roadmap</h2>
            <p>A structured, hands-on program with real-world projects and expert guidance.</p>
          </div>

          <div className="ai-roadmap-grid">
            {/* Phase 1 */}
            <div className="ai-roadmap-card">
              <div className="ai-roadmap-header">
                <span className="ai-roadmap-badge">1</span>
                <div className="ai-roadmap-title-group">
                  <h4>Weeks 1 – 4</h4>
                  <h4>Foundations</h4>
                </div>
              </div>
              <ul className="ai-roadmap-bullets">
                <li className="ai-roadmap-bullet">Python programming</li>
                <li className="ai-roadmap-bullet">Data structures &amp; algorithms</li>
                <li className="ai-roadmap-bullet">NumPy, Pandas, Matplotlib</li>
                <li className="ai-roadmap-bullet">Introduction to AI &amp; ML concepts</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="ai-roadmap-card">
              <div className="ai-roadmap-header">
                <span className="ai-roadmap-badge">2</span>
                <div className="ai-roadmap-title-group">
                  <h4>Weeks 5 – 8</h4>
                  <h4>Applied ML</h4>
                </div>
              </div>
              <ul className="ai-roadmap-bullets">
                <li className="ai-roadmap-bullet">Java for AI &amp; enterprise solutions</li>
                <li className="ai-roadmap-bullet">ML model development</li>
                <li className="ai-roadmap-bullet">APIs and model deployment</li>
                <li className="ai-roadmap-bullet">Testing and live demonstration</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="ai-roadmap-card">
              <div className="ai-roadmap-header">
                <span className="ai-roadmap-badge">3</span>
                <div className="ai-roadmap-title-group">
                  <h4>Weeks 9 – 12</h4>
                  <h4>GenAI Systems</h4>
                </div>
              </div>
              <ul className="ai-roadmap-bullets">
                <li className="ai-roadmap-bullet">Prompt engineering &amp; LLMs</li>
                <li className="ai-roadmap-bullet">AI agents and intelligent systems</li>
                <li className="ai-roadmap-bullet">RAG and advanced prompting</li>
                <li className="ai-roadmap-bullet">Safety, bias mitigation and responsible AI</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div className="ai-roadmap-card">
              <div className="ai-roadmap-header">
                <span className="ai-roadmap-badge">4</span>
                <div className="ai-roadmap-title-group">
                  <h4>Weeks 13 – 16</h4>
                  <h4 className="production-capstone">Production Capstone</h4>
                </div>
              </div>
              <ul className="ai-roadmap-bullets">
                <li className="ai-roadmap-bullet">End-to-end AI application</li>
                <li className="ai-roadmap-bullet">Docker and cloud deployment</li>
                <li className="ai-roadmap-bullet">CI/CD, monitoring and runbook</li>
                <li className="ai-roadmap-bullet">Final project presentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGIES YOU WILL LEARN (11 TECH BADGES) */}
      <section className="ai-technologies-section">
        <div className="ai-container">
          <div className="ai-section-header">
            <h2>Technologies You Will Learn</h2>
          </div>

          <div className="ai-technologies-grid">
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><PythonIcon /></div>
              <span className="ai-tech-name">Python</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><JavaIcon /></div>
              <span className="ai-tech-name">Java</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><NumpyIcon /></div>
              <span className="ai-tech-name">NumPy</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><PandasIcon /></div>
              <span className="ai-tech-name">Pandas</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><MatplotlibIcon /></div>
              <span className="ai-tech-name">Matplotlib</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><GitIcon /></div>
              <span className="ai-tech-name">Git</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><GithubIcon /></div>
              <span className="ai-tech-name">GitHub</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><DockerIcon /></div>
              <span className="ai-tech-name">Docker</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><VsCodeIcon /></div>
              <span className="ai-tech-name">VS Code</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><PyCharmIcon /></div>
              <span className="ai-tech-name">PyCharm</span>
            </div>
            <div className="ai-tech-card">
              <div className="ai-tech-icon"><IntelliJIcon /></div>
              <span className="ai-tech-name">IntelliJ IDEA</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UPCOMING BATCHES & WEEKDAY SCHEDULE (2 COLUMNS) */}
      <section className="ai-batches-schedule-section">
        <div className="ai-container">
          <div className="ai-batches-schedule-grid">
            {/* Left: Upcoming Batches */}
            <div className="ai-batches-card">
              <h3>Upcoming Batches</h3>
              <p className="subtitle">Limited seats for focused learning</p>

              <div className="ai-batches-grid-3">
                <div className="ai-batch-box">
                  <Calendar size={22} className="ai-batch-box-icon" />
                  <div className="ai-batch-box-info">
                    <span className="ai-batch-box-date">Dec 1, 2026</span>
                    <span className="ai-batch-box-type">(Weekday Batch)</span>
                  </div>
                </div>

                <div className="ai-batch-box">
                  <Calendar size={22} className="ai-batch-box-icon" />
                  <div className="ai-batch-box-info">
                    <span className="ai-batch-box-date">Apr 1, 2027</span>
                    <span className="ai-batch-box-type">(Weekday Batch)</span>
                  </div>
                </div>

                <div className="ai-batch-box">
                  <Calendar size={22} className="ai-batch-box-icon" />
                  <div className="ai-batch-box-info">
                    <span className="ai-batch-box-date">Aug 1, 2027</span>
                    <span className="ai-batch-box-type">(Weekday Batch)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Weekday Schedule */}
            <div className="ai-schedule-card">
              <div className="ai-schedule-header">
                <Clock size={20} color="#003fa8" />
                <h3>Weekday Schedule</h3>
              </div>

              <ul className="ai-schedule-bullets">
                <li className="ai-schedule-item">Monday – Friday</li>
                <li className="ai-schedule-item">9:00 AM – 12:00 PM (3 hours per day)</li>
                <li className="ai-schedule-item">Instructor-led and guided practice</li>
                <li className="ai-schedule-item">Additional capstone and project work</li>
                <li className="ai-schedule-item">Total Duration: 16 weeks (Approximately 400 hours)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROGRAM HIGHLIGHTS & CAREER OPPORTUNITIES (2 COLUMNS) */}
      <section className="ai-app-career-section">
        <div className="ai-container">
          <div className="ai-app-career-grid">
            {/* Left: Program Highlights */}
            <div className="ai-app-card">
              <h3>Program Highlights</h3>

              <div className="ai-app-features-grid">
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Hands-on, project-based learning</span>
                </div>
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>AI agents and generative AI</span>
                </div>
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Real-world applications and use cases</span>
                </div>
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Prompt engineering and LLMs</span>
                </div>
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Expert mentors and industry guidance</span>
                </div>
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Docker and cloud deployment</span>
                </div>
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Access to complete learning resources</span>
                </div>
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Capstone project and demo day</span>
                </div>
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Collaborative learning environment</span>
                </div>
                <div className="ai-feature-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Career support and interview preparation</span>
                </div>
              </div>
            </div>

            {/* Right: Career Opportunities */}
            <div className="ai-career-card">
              <h3>Career Opportunities</h3>
              <p className="subtitle">Launch your career as an AI professional with in-demand skills.</p>

              <div className="ai-career-roles-row">
                <div className="ai-career-role-box">
                  <Brain size={22} />
                  <span>AI Engineer</span>
                </div>
                <div className="ai-career-role-box">
                  <Bot size={22} />
                  <span>Machine Learning Engineer</span>
                </div>
                <div className="ai-career-role-box">
                  <MessageSquare size={22} />
                  <span>Prompt Engineer</span>
                </div>
                <div className="ai-career-role-box">
                  <TrendingUp size={22} />
                  <span>Data Scientist</span>
                </div>
                <div className="ai-career-role-box">
                  <Share2 size={22} />
                  <span>AI Solutions Developer</span>
                </div>
              </div>

              {/* Career Preparation Banner */}
              <div className="ai-prep-banner">
                <FileText size={20} color="#059669" />
                <div className="ai-prep-text">
                  <h4>Career Preparation</h4>
                  <span>Resume review &nbsp;•&nbsp; Mock interviews &nbsp;•&nbsp; GitHub portfolio &nbsp;•&nbsp; Placement support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHO SHOULD ENROLL & PREREQUISITES (2 COLUMNS) */}
      <section className="ai-enroll-prereq-section">
        <div className="ai-container">
          <div className="ai-enroll-prereq-grid">
            {/* Left: Who Should Enroll? */}
            <div className="ai-enroll-card">
              <h3>Who Should Enroll?</h3>
              <ul className="ai-enroll-bullets">
                <li className="ai-enroll-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Students looking to build a career in AI and technology</span>
                </li>
                <li className="ai-enroll-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Educators who want to integrate AI into teaching and research</span>
                </li>
                <li className="ai-enroll-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Working professionals seeking to upskill or transition to AI roles</span>
                </li>
                <li className="ai-enroll-item">
                  <CheckCircle2 size={16} className="ai-check-icon" />
                  <span>Anyone passionate about building real-world AI solutions</span>
                </li>
              </ul>
            </div>

            {/* Right: Prerequisites */}
            <div className="ai-prereq-card">
              <div className="ai-prereq-header">
                <Settings size={20} color="#0056b3" />
                <h3>Prerequisites</h3>
              </div>
              <p>
                Basic programming knowledge (any language), logical thinking, and a strong interest in AI. Prior experience with Python or Java is helpful but not required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="ai-cta-banner">
        <div className="ai-cta-content">
          <h2>Ready to Start Your AI Career?</h2>
          <p>Join the next batch and gain the skills to build a smarter tomorrow.</p>

          <div className="ai-cta-buttons">
            <Link href="/contactus" className="btn-cta-green-enroll">
              <span>Enroll Now</span>
              <ArrowRight size={15} />
            </Link>
            <Link href="/contactus" className="btn-cta-contact-us">
              <span>Contact Us</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="ai-cta-contact-links">
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
