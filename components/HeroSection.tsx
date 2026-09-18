import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section hero-section-enhanced">
      <style>{`
        .hero-section-enhanced {
          padding-top: 36px;
          padding-bottom: 30px;
          background: #ffffff;
          overflow: hidden;
        }
        .hero-container-enhanced {
          max-width: 1380px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;
          padding-right: 24px;
        }
        .hero-grid-enhanced {
          display: grid;
          grid-template-columns: 0.92fr 1.35fr;
          gap: 20px;
          align-items: center;
        }
        .hero-content-enhanced {
          position: relative;
          z-index: 10;
        }
        .hero-content-enhanced h1 {
          font-size: clamp(34px, 3.2vw, 42px);
          font-weight: 700;
          line-height: 1.22;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .hero-title-line {
          display: block;
          white-space: nowrap;
        }
        .hero-description-enhanced {
          font-size: 16px;
          line-height: 1.6;
          color: #475569;
          margin-bottom: 32px;
          max-width: 530px;
        }
        .hero-image-wrapper-enhanced {
          position: relative;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          z-index: 1;
          margin-left: -50px;
        }
        .hero-main-img-enhanced {
          width: 100% !important;
          height: auto !important;
          max-height: none !important;
          max-width: 100% !important;
          border-radius: 0 !important;
          object-fit: contain !important;
          display: block;
        }
        @media (max-width: 1080px) {
          .hero-grid-enhanced {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 32px;
          }
          .hero-title-line {
            white-space: normal;
          }
          .hero-description-enhanced {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-image-wrapper-enhanced {
            justify-content: center;
            margin-left: 0;
          }
        }
      `}</style>

      <div className="hero-container-enhanced">
        <div className="hero-grid-enhanced">
          {/* Left Hero Content */}
          <div className="hero-content hero-content-enhanced">
            <h1>
              <span className="hero-title-line">AI-Powered Learning.</span>
              <span className="hero-title-line">Industry-Ready Skills.</span>
              <span className="hero-title-line hero-highlight">Future-Ready Organizations.</span>
            </h1>
            <p className="hero-description hero-description-enhanced">
              Transforming education and workforce development through AI-powered technology, 
              hands-on training and industry-focused learning experiences.
            </p>
            <div className="hero-buttons">
              <Link href="/solutions" className="btn-primary">
                <span>Explore Our Solutions</span>
                <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                <span>Talk to Us</span>
                <MessageSquare size={17} />
              </Link>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="hero-image-wrapper-enhanced">
            <Image
              src="/images/hero/hero-clean.png"
              alt="SkaiMitra AI-Powered Learning Platform with students and instructors"
              width={880}
              height={560}
              priority
              className="hero-main-img-enhanced"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

