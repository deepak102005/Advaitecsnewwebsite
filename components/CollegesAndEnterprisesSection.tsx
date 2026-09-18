import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CollegesAndEnterprisesSection() {
  const collegeCol1 = [
    'AI & GenAI Workshops',
    'Faculty Development Programs',
    'Industry-Ready Bootcamps'
  ];

  const collegeCol2 = [
    'Placement Readiness Programs',
    'Innovation & AI Labs'
  ];

  const enterpriseCol1 = [
    'Generative AI for Business',
    'AI for Executives & Managers',
    'AI for Developers',
    'AI Productivity Workshop'
  ];

  const enterpriseCol2 = [
    'Cloud & DevOps Workshops',
    'Cybersecurity Workshops',
    'Custom Workforce Upskilling'
  ];

  return (
    <section className="ce-dual-section-exact">
      <style>{`
        .ce-dual-section-exact {
          padding: 16px 0 48px;
          background: #ffffff;
        }

        .ce-dual-container-exact {
          max-width: 1280px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        .ce-dual-grid-exact {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }

        /* Horizontal Split Card matching Image exactly */
        .ce-card-exact {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.025);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          min-height: 340px;
        }

        .ce-card-exact:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
        }

        .ce-card-content-exact {
          flex: 1.25;
          min-width: 0;
          padding: 24px 12px 20px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 2;
        }

        .ce-badge-exact {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 9999px;
          margin-bottom: 10px;
          width: fit-content;
        }

        .ce-badge-green {
          background-color: #ecfdf5;
          color: #16a34a;
        }

        .ce-badge-purple {
          background-color: #eff6ff;
          color: #2563eb;
        }

        .ce-card-title-exact {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.22;
          letter-spacing: -0.015em;
          margin: 0 0 8px 0;
        }

        .ce-card-desc-exact {
          font-size: 12.5px;
          line-height: 1.45;
          color: #475569;
          margin: 0 0 16px 0;
        }

        .ce-checklist-columns-exact {
          display: flex;
          gap: 16px;
          margin-bottom: 18px;
        }

        .ce-checklist-col-exact {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ce-check-item-exact {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.3;
          white-space: nowrap;
        }

        .ce-check-item-exact svg {
          flex-shrink: 0;
        }

        .ce-link-exact {
          font-size: 13.5px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: gap 0.2s ease;
          margin-top: auto;
          width: fit-content;
          padding-top: 6px;
        }

        .ce-link-exact:hover {
          gap: 9px;
        }

        .ce-card-media-exact {
          flex: 0.95;
          min-width: 0;
          position: relative;
          overflow: hidden;
          display: flex;
          background: #f8fafc;
        }

        .ce-media-fade-exact {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 42px;
          background: linear-gradient(to right, #ffffff, transparent);
          z-index: 1;
          pointer-events: none;
        }

        .ce-card-media-exact img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        @media (max-width: 1024px) {
          .ce-dual-grid-exact {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .ce-card-exact {
            flex-direction: column;
          }
          .ce-card-media-exact {
            height: 220px;
            min-height: 220px;
          }
          .ce-media-fade-exact {
            width: 100%;
            height: 32px;
            background: linear-gradient(to bottom, #ffffff, transparent);
          }
          .ce-checklist-columns-exact {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>

      <div className="ce-dual-container-exact">
        <div className="ce-dual-grid-exact">
          {/* Card 1: FOR COLLEGES */}
          <div className="ce-card-exact">
            <div className="ce-card-content-exact">
              <div>
                <span className="ce-badge-exact ce-badge-green">FOR COLLEGES</span>
                <h3 className="ce-card-title-exact">
                  Prepare Students for an<br />AI-Driven Workplace
                </h3>
                <p className="ce-card-desc-exact">
                  Partner with Advaitecs to supplement academic learning with practical, industry-focused technology programs.
                </p>

                <div className="ce-checklist-columns-exact">
                  <div className="ce-checklist-col-exact">
                    {collegeCol1.map((pt, idx) => (
                      <div key={idx} className="ce-check-item-exact">
                        <CheckCircle2 size={14} color="#16a34a" strokeWidth={2.2} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                  <div className="ce-checklist-col-exact">
                    {collegeCol2.map((pt, idx) => (
                      <div key={idx} className="ce-check-item-exact">
                        <CheckCircle2 size={14} color="#16a34a" strokeWidth={2.2} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/collegesEnterprises#colleges" className="ce-link-exact" style={{ color: '#16a34a' }}>
                <span>Partner With Us</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="ce-card-media-exact">
              <div className="ce-media-fade-exact" />
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
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>

          {/* Card 2: FOR ENTERPRISES */}
          <div className="ce-card-exact">
            <div className="ce-card-content-exact">
              <div>
                <span className="ce-badge-exact ce-badge-purple">FOR ENTERPRISES</span>
                <h3 className="ce-card-title-exact">
                  Transform Your<br />Workforce with AI
                </h3>
                <p className="ce-card-desc-exact">
                  Practical, role-based workshops that help teams use AI and emerging technologies to improve productivity and innovate.
                </p>

                <div className="ce-checklist-columns-exact">
                  <div className="ce-checklist-col-exact">
                    {enterpriseCol1.map((pt, idx) => (
                      <div key={idx} className="ce-check-item-exact">
                        <CheckCircle2 size={14} color="#2563eb" strokeWidth={2.2} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                  <div className="ce-checklist-col-exact">
                    {enterpriseCol2.map((pt, idx) => (
                      <div key={idx} className="ce-check-item-exact">
                        <CheckCircle2 size={14} color="#2563eb" strokeWidth={2.2} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/collegesEnterprises#enterprises" className="ce-link-exact" style={{ color: '#2563eb' }}>
                <span>Schedule an Enterprise Workshop</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="ce-card-media-exact">
              <div className="ce-media-fade-exact" />
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
                  objectPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
