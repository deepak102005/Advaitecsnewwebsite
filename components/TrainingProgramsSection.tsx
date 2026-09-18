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
    <section className="training-section-enhanced">
      <style>{`
        .training-section-enhanced {
          padding: 16px 0 32px;
          background: #ffffff;
        }

        .training-container-enhanced {
          max-width: 1380px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        .section-header-center-enhanced {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 22px;
        }

        .section-header-center-enhanced h2 {
          font-size: 34px;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-top: 12px;
          margin-bottom: 10px;
        }

        .section-header-center-enhanced p {
          font-size: 15px;
          color: #475569;
          line-height: 1.5;
        }

        .training-cards-grid-enhanced {
          display: grid;
          grid-template-columns: 0.95fr 0.95fr 1.65fr;
          gap: 22px;
          align-items: stretch;
          margin-bottom: 30px;
        }

        .training-program-card-enhanced {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .training-program-card-enhanced:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }

        .program-header-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .program-icon-badge-enhanced {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .program-title-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .program-title-group h3 {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
        }

        .program-tags-enhanced {
          font-size: 13px;
          line-height: 1.55;
          color: #475569;
          margin-bottom: 14px;
        }

        .program-outcome-enhanced {
          font-size: 13px;
          line-height: 1.5;
          color: #334155;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .program-outcome-enhanced strong {
          color: #0f172a;
        }

        .program-learn-more-enhanced {
          font-size: 14px;
          font-weight: 700;
          color: #0062d2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          transition: gap 0.2s ease;
          margin-top: auto;
        }

        .program-learn-more-enhanced:hover {
          gap: 9px;
        }

        .training-image-card-enhanced {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          background: #f1f5f9;
          display: flex;
          position: relative;
          min-height: 290px;
          box-shadow: 0 3px 14px rgba(0, 0, 0, 0.03);
        }

        .training-image-card-enhanced img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .pipeline-container-enhanced {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 14px 28px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 0 auto 28px;
          max-width: 960px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .pipeline-step-enhanced {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
        }

        .pipeline-arrow-enhanced {
          color: #94a3b8;
        }

        @media (max-width: 1100px) {
          .training-cards-grid-enhanced {
            grid-template-columns: 1fr 1fr;
          }
          .training-image-card-enhanced {
            grid-column: span 2;
            height: 320px;
          }
        }

        @media (max-width: 680px) {
          .training-cards-grid-enhanced {
            grid-template-columns: 1fr;
          }
          .training-image-card-enhanced {
            grid-column: span 1;
            height: 250px;
          }
          .pipeline-container-enhanced {
            flex-wrap: wrap;
            gap: 14px;
            justify-content: center;
          }
        }
      `}</style>

      <div className="training-container-enhanced">
        {/* Section Header */}
        <div className="section-header-center-enhanced">
          <span className="badge-pill badge-blue">TRAINING PROGRAMS</span>
          <h2>
            Build Skills. Build Projects.{' '}
            <span style={{ color: '#0062d2' }}>Build Your Career.</span>
          </h2>
          <p>
            Industry-focused training for graduates and professionals who want practical skills—not just certificates.
          </p>
        </div>

        {/* 3 Column Grid: Two Cards + Full Widescreen Classroom Photo */}
        <div className="training-cards-grid-enhanced">
          {/* Card 1: AI Career Ready */}
          <div className="training-program-card-enhanced">
            <div className="program-header-row">
              <div className="program-icon-badge-enhanced" style={{ background: '#edf5ff', border: '1px solid #bfdbfe' }}>
                <Brain size={26} color="#0062d2" />
              </div>
              <div className="program-title-group">
                <h3>AI Career Ready</h3>
                <span className="badge-pill badge-blue">16 Weeks</span>
              </div>
            </div>
            <p className="program-tags-enhanced">
              Python • Machine Learning • GenAI • LLMs APIs • RAG • AI Applications • Deployment
            </p>
            <p className="program-outcome-enhanced">
              <strong>Outcome:</strong> Build and deploy real-world AI applications.
            </p>
            <Link href="/training-programs/ai-career-ready" className="program-learn-more-enhanced">
              <span>Learn More</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Card 2: Full Stack Developer */}
          <div className="training-program-card-enhanced">
            <div className="program-header-row">
              <div className="program-icon-badge-enhanced" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <Code2 size={26} color="#15803d" />
              </div>
              <div className="program-title-group">
                <h3>Full Stack Developer</h3>
                <span className="badge-pill badge-blue">12 Weeks</span>
              </div>
            </div>
            <p className="program-tags-enhanced">
              React • Node.js • PostgreSQL • APIs Architecture • AI-Assisted Development Testing • Deployment
            </p>
            <p className="program-outcome-enhanced">
              <strong>Outcome:</strong> Build a production-ready web application from requirements through deployment.
            </p>
            <Link href="/training-programs/full-stack" className="program-learn-more-enhanced">
              <span>Learn More</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Card 3: Classroom Image Showing Full Classroom & Instructor */}
          <div className="training-image-card-enhanced">
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

        {/* 5-Step Pipeline Bar */}
        <div className="pipeline-container-enhanced">
          <div className="pipeline-step-enhanced">
            <BookOpen size={18} color="#0062d2" />
            <span>Learn</span>
          </div>
          <ChevronRight size={16} className="pipeline-arrow-enhanced" />

          <div className="pipeline-step-enhanced">
            <Code2 size={18} color="#0062d2" />
            <span>Practice</span>
          </div>
          <ChevronRight size={16} className="pipeline-arrow-enhanced" />

          <div className="pipeline-step-enhanced">
            <Box size={18} color="#0062d2" />
            <span>Build</span>
          </div>
          <ChevronRight size={16} className="pipeline-arrow-enhanced" />

          <div className="pipeline-step-enhanced">
            <CheckCircle2 size={18} color="#0062d2" />
            <span>Test</span>
          </div>
          <ChevronRight size={16} className="pipeline-arrow-enhanced" />

          <div className="pipeline-step-enhanced">
            <Rocket size={18} color="#0062d2" />
            <span>Deploy</span>
          </div>
        </div>

        {/* Center CTA Button */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/training-programs" className="btn-primary">
            <span>View All Training Programs</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
