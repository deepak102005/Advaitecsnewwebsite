import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CollegesAndEnterprisesSection() {
  const collegePoints = [
    'AI & GenAI Workshops',
    'Placement Readiness Programs',
    'Faculty Development Programs',
    'Innovation & AI Labs',
    'Industry-Ready Bootcamps'
  ];

  const enterprisePoints = [
    'Generative AI for Business',
    'Cloud & DevOps Workshops',
    'AI for Executives & Managers',
    'Cybersecurity Workshops',
    'AI for Developers',
    'Custom Workforce Upskilling',
    'AI Productivity Workshop'
  ];

  return (
    <section className="split-sections-enhanced">
      <style>{`
        .split-sections-enhanced {
          padding: 24px 0 46px;
          background: #ffffff;
        }
        .split-container-enhanced {
          max-width: 1380px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;
          padding-right: 24px;
        }
        .split-grid-enhanced {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
        }
        .split-card-enhanced {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          min-height: 380px;
        }
        .split-card-enhanced:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }
        .split-card-text {
          flex: 1.18;
          padding: 28px 20px 24px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 2;
        }
        .split-card-text h3 {
          font-size: 21px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.015em;
          line-height: 1.25;
          margin-top: 12px;
          margin-bottom: 8px;
        }
        .split-card-sub-enhanced {
          font-size: 13px;
          line-height: 1.5;
          color: #475569;
          margin-bottom: 16px;
        }
        .split-checklist-grid-enhanced {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px 12px;
          margin-bottom: 18px;
        }
        .check-item-enhanced {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          color: #1e293b;
          line-height: 1.3;
        }
        .check-item-enhanced svg {
          flex-shrink: 0;
        }
        .split-link-enhanced {
          font-size: 13.5px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: gap 0.2s ease;
          margin-top: auto;
          padding-top: 4px;
        }
        .split-link-enhanced:hover {
          gap: 9px;
        }
        .split-card-media {
          flex: 0.82;
          position: relative;
          min-height: 100%;
          overflow: hidden;
          display: flex;
        }
        .split-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .split-card-media-fade {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 48px;
          background: linear-gradient(to right, #ffffff, transparent);
          z-index: 1;
          pointer-events: none;
        }
        @media (max-width: 1100px) {
          .split-grid-enhanced {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
        @media (max-width: 680px) {
          .split-card-enhanced {
            flex-direction: column;
          }
          .split-card-media {
            height: 240px;
            min-height: 240px;
          }
          .split-card-media-fade {
            width: 100%;
            height: 36px;
            background: linear-gradient(to bottom, #ffffff, transparent);
          }
          .split-card-text {
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="split-container-enhanced">
        <div className="split-grid-enhanced">
          {/* Card 1: FOR COLLEGES */}
          <div className="split-card-enhanced">
            <div className="split-card-text">
              <div>
                <span className="badge-pill badge-green">FOR COLLEGES</span>
                <h3>Prepare Students for an AI-Driven Workplace</h3>
                <p className="split-card-sub-enhanced">
                  Partner with Advaitecs to supplement academic learning with practical, industry-focused technology programs.
                </p>

                <div className="split-checklist-grid-enhanced">
                  {collegePoints.map((pt, idx) => (
                    <div key={idx} className="check-item-enhanced">
                      <CheckCircle2 size={15} color="#16a34a" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/for-colleges" className="split-link-enhanced" style={{ color: '#16a34a' }}>
                <span>Partner With Us</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="split-card-media">
              <div className="split-card-media-fade" />
              <Image
                src="/images/college/college-students.png"
                alt="College students learning and collaborating"
                width={600}
                height={500}
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>
          </div>

          {/* Card 2: FOR ENTERPRISES */}
          <div className="split-card-enhanced">
            <div className="split-card-text">
              <div>
                <span className="badge-pill badge-purple">FOR ENTERPRISES</span>
                <h3>Transform Your Workforce with AI</h3>
                <p className="split-card-sub-enhanced">
                  Practical, role-based workshops that help teams use AI and emerging technologies to improve productivity and innovate.
                </p>

                <div className="split-checklist-grid-enhanced">
                  {enterprisePoints.map((pt, idx) => (
                    <div key={idx} className="check-item-enhanced">
                      <CheckCircle2 size={15} color="#0062d2" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/for-enterprises" className="split-link-enhanced" style={{ color: '#0062d2' }}>
                <span>Schedule an Enterprise Workshop</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="split-card-media">
              <div className="split-card-media-fade" />
              <Image
                src="/images/enterprise/enterprise-team.png"
                alt="Corporate enterprise team collaborating on AI transformation"
                width={600}
                height={500}
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
