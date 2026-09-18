import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Brain, 
  Code2, 
  ArrowRight, 
  BookOpen, 
  Box, 
  CheckCircle2, 
  Rocket, 
  ChevronRight 
} from 'lucide-react';

export default function TrainingProgramsSection() {
  return (
    <section className="training-section-exact">
      <style>{`
        .training-section-exact {
          padding: 24px 0 40px;
          background: #ffffff;
        }

        .training-container-exact {
          max-width: 1240px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        .training-header-exact {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 26px;
        }

        .training-badge-exact {
          display: inline-block;
          background-color: #e0edff;
          color: #0056b3;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }

        .training-header-exact h2 {
          font-size: 32px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin-bottom: 10px;
        }

        .training-header-exact h2 span {
          color: #0062d2;
        }

        .training-header-exact p {
          font-size: 14.5px;
          color: #475569;
          line-height: 1.5;
          margin: 0;
        }

        /* 3-Column Row Format exactly like Image 2 */
        .training-row-grid-exact {
          display: grid;
          grid-template-columns: 1fr 1fr 1.35fr;
          gap: 20px;
          align-items: stretch;
          margin-bottom: 28px;
        }

        .training-card-exact {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 22px 20px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.025);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .training-card-exact:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
        }

        .card-top-row-exact {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .card-icon-wrap-exact {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-title-group-exact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
        }

        .card-title-group-exact h3 {
          font-size: 17px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.25;
        }

        .card-duration-badge-exact {
          display: inline-block;
          background: #e0edff;
          color: #0056b3;
          font-size: 11px;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 9999px;
          line-height: 1.4;
        }

        .card-tags-exact {
          font-size: 12.5px;
          line-height: 1.55;
          color: #334155;
          margin: 0 0 14px 0;
        }

        .card-outcome-exact {
          font-size: 12.5px;
          line-height: 1.5;
          color: #334155;
          margin: 0 0 16px 0;
          flex-grow: 1;
        }

        .card-outcome-exact strong {
          color: #0f172a;
        }

        .card-learn-more-exact {
          font-size: 13.5px;
          font-weight: 700;
          color: #0062d2;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          transition: gap 0.2s ease;
          margin-top: auto;
          width: fit-content;
        }

        .card-learn-more-exact:hover {
          gap: 7px;
        }

        .training-image-column-exact {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          position: relative;
          min-height: 280px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.025);
          display: flex;
        }

        .training-image-column-exact img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* 5-Step Pipeline Bar */
        .pipeline-bar-exact {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          padding: 12px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 860px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
        }

        .pipeline-item-exact {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
        }

        .pipeline-chevron-exact {
          color: #94a3b8;
        }

        .practice-icon-box-exact {
          width: 24px;
          height: 24px;
          border: 2px solid #0062d2;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 990px) {
          .training-row-grid-exact {
            grid-template-columns: 1fr 1fr;
          }
          .training-image-column-exact {
            grid-column: span 2;
            height: 320px;
          }
          .pipeline-bar-exact {
            padding: 12px 20px;
          }
        }

        @media (max-width: 680px) {
          .training-row-grid-exact {
            grid-template-columns: 1fr;
          }
          .training-image-column-exact {
            grid-column: span 1;
            height: 240px;
          }
          .pipeline-bar-exact {
            flex-wrap: wrap;
            border-radius: 16px;
            gap: 12px;
            justify-content: center;
            padding: 16px 20px;
          }
        }
      `}</style>

      <div className="training-container-exact">
        {/* Section Header */}
        <div className="training-header-exact">
          <span className="training-badge-exact">TRAINING PROGRAMS</span>
          <h2>
            Build Skills. Build Projects.{' '}
            <span>Build Your Career.</span>
          </h2>
          <p>
            Industry-focused training for graduates and professionals who want practical skills—not just certificates.
          </p>
        </div>

        {/* 3-Column Grid: AI Career Ready, Full Stack Developer, Classroom Photo */}
        <div className="training-row-grid-exact">
          {/* Column 1: AI Career Ready */}
          <div className="training-card-exact">
            <div className="card-top-row-exact">
              <div className="card-icon-wrap-exact" style={{ background: '#f0f7ff', border: '1.5px solid #bfdbfe' }}>
                <Brain size={26} color="#0062d2" strokeWidth={2} />
              </div>
              <div className="card-title-group-exact">
                <h3>AI Career Ready</h3>
                <span className="card-duration-badge-exact">16 Weeks</span>
              </div>
            </div>
            <p className="card-tags-exact">
              Python • Machine Learning • GenAI • LLMs APIs • RAG • AI Applications • Deployment
            </p>
            <p className="card-outcome-exact">
              <strong>Outcome:</strong> Build and deploy real-world AI applications.
            </p>
            <Link href="/AIcareer" className="card-learn-more-exact">
              <span>Learn More</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Column 2: Full Stack Developer */}
          <div className="training-card-exact">
            <div className="card-top-row-exact">
              <div className="card-icon-wrap-exact" style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0' }}>
                <Code2 size={26} color="#16a34a" strokeWidth={2} />
              </div>
              <div className="card-title-group-exact">
                <h3>Full Stack Developer</h3>
                <span className="card-duration-badge-exact">12 Weeks</span>
              </div>
            </div>
            <p className="card-tags-exact">
              React • Node.js • PostgreSQL • APIs Architecture • AI-Assisted Development Testing • Deployment
            </p>
            <p className="card-outcome-exact">
              <strong>Outcome:</strong> Build a production-ready web application from requirements through deployment.
            </p>
            <Link href="/Fullstack" className="card-learn-more-exact">
              <span>Learn More</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Column 3: Classroom Photo (Instructor & students) */}
          <div className="training-image-column-exact">
            <Image
              src="/images/training/training-classroom.png"
              alt="Interactive hands-on classroom training at Advaitecs"
              width={760}
              height={420}
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

        {/* 5-Step Process Bar: Learn > Practice > Build > Test > Deploy */}
        <div className="pipeline-bar-exact">
          <div className="pipeline-item-exact">
            <BookOpen size={20} color="#0062d2" strokeWidth={2} />
            <span>Learn</span>
          </div>
          <ChevronRight size={16} className="pipeline-chevron-exact" strokeWidth={2} />

          <div className="pipeline-item-exact">
            <div className="practice-icon-box-exact">
              <Code2 size={14} color="#0062d2" strokeWidth={2.5} />
            </div>
            <span>Practice</span>
          </div>
          <ChevronRight size={16} className="pipeline-chevron-exact" strokeWidth={2} />

          <div className="pipeline-item-exact">
            <Box size={22} color="#0062d2" strokeWidth={2} />
            <span>Build</span>
          </div>
          <ChevronRight size={16} className="pipeline-chevron-exact" strokeWidth={2} />

          <div className="pipeline-item-exact">
            <CheckCircle2 size={22} color="#4f46e5" strokeWidth={2} />
            <span>Test</span>
          </div>
          <ChevronRight size={16} className="pipeline-chevron-exact" strokeWidth={2} />

          <div className="pipeline-item-exact">
            <Rocket size={22} color="#0062d2" strokeWidth={2} />
            <span>Deploy</span>
          </div>
        </div>

        {/* View All Training Programs Button matching Image 2 */}
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <Link
            href="/trainingprograms"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#0062d2',
              color: '#ffffff',
              padding: '11px 26px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 3px 12px rgba(0, 98, 210, 0.22)',
            }}
          >
            <span>View All Training Programs</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
