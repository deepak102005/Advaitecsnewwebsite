import React from 'react';
import Link from 'next/link';
import { 
  ExternalLink, 
  Calendar, 
  Sparkles, 
  ClipboardCheck, 
  BookOpen, 
  Bot, 
  BarChart2, 
  MessageCircle 
} from 'lucide-react';

export default function SkaiMitraSection() {
  const features = [
    {
      title: 'AI Teaching Assistant',
      description: 'Lesson plans, assessments, practice activities and teaching resources.',
      icon: <Sparkles size={20} />
    },
    {
      title: 'Assignments & Assessments',
      description: 'Create, distribute, grade and analyze student work effortlessly.',
      icon: <ClipboardCheck size={20} />
    },
    {
      title: 'Learning & Study Materials',
      description: 'Centralized access to curriculum-aligned learning resources anytime.',
      icon: <BookOpen size={20} />
    },
    {
      title: 'SkaiAssistant',
      description: 'Your AI-powered assistant for lesson planning, content creation, insights and more.',
      icon: <Bot size={20} />
    },
    {
      title: 'Student Progress Insights',
      description: 'Understand performance, learning progress and students needing additional support.',
      icon: <BarChart2 size={20} />
    },
    {
      title: 'Communication & Engagement',
      description: 'Notifications, messaging, events and parent/student communication.',
      icon: <MessageCircle size={20} />
    }
  ];

  return (
    <section className="skaimitra-section">
      <div className="container">
        <div className="skaimitra-card-wrapper">
          {/* Left Column */}
          <div className="skaimitra-left">
            <span className="badge-pill badge-blue">OUR PLATFORM</span>
            <h2>
              Transform Teaching &amp; Learning with{' '}
              <span style={{ color: '#0062d2' }}>SkaiMitra</span>
            </h2>
            <p className="skaimitra-lead">
              One intelligent platform for learning, teaching and academic management.
            </p>
            <p className="skaimitra-body">
              SkaiMitra brings educators, learners and administrators together through AI-assisted tools 
              that simplify teaching, improve engagement and provide actionable insights.
            </p>

            <div className="skaimitra-buttons">
              <a 
                href="https://edu.skaimitra.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                <span>Explore SkaiMitra</span>
                <ExternalLink size={16} />
              </a>
              <Link href="/request-demo" className="btn-secondary">
                <span>Request a Demo</span>
                <Calendar size={16} />
              </Link>
            </div>

            <a 
              href="https://edu.skaimitra.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="skaimitra-url"
            >
              edu.skaimitra.com
            </a>
          </div>

          {/* Right Column: 6 Features Grid */}
          <div className="skaimitra-features-grid">
            {features.map((item, idx) => (
              <div key={idx} className="skaimitra-feature-item">
                <div className="skaimitra-item-icon">
                  {item.icon}
                </div>
                <div className="skaimitra-item-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
