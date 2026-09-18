import React from 'react';
import Link from 'next/link';
import { Bot, GraduationCap, Users, ArrowRight } from 'lucide-react';

export default function TopFeatureCards() {
  const cards = [
    {
      title: 'SkaiMitra',
      description: 'AI-powered education and learning platform for schools, colleges and training organizations.',
      linkText: 'Explore SkaiMitra',
      href: '/Skaimitra',
      icon: <Bot size={24} color="#0062d2" />,
      iconBg: '#e0edff',
      linkColor: '#0062d2'
    },
    {
      title: 'Skills Training',
      description: 'Industry-aligned, hands-on programs designed to build in-demand technical skills and real-world expertise.',
      linkText: 'View Programs',
      href: '/training-programs',
      icon: <GraduationCap size={24} color="#059669" />,
      iconBg: '#dcfce7',
      linkColor: '#059669'
    },
    {
      title: 'Enterprise & Workshops',
      description: 'Focused AI, Cloud, Cybersecurity and emerging-technology programs for organizations, faculty and students.',
      linkText: 'Explore Workshops',
      href: '/workshops',
      icon: <Users size={24} color="#6d28d9" />,
      iconBg: '#ede9fe',
      linkColor: '#6d28d9'
    }
  ];

  return (
    <section className="features-row-section">
      <div className="container">
        <div className="features-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-card-icon" style={{ backgroundColor: card.iconBg }}>
                {card.icon}
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link href={card.href} className="feature-card-link" style={{ color: card.linkColor }}>
                <span>{card.linkText}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
