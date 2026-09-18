import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Calendar } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-banner-content">
          <h2>Ready to Build Your AI-Ready Organization?</h2>
          <p>
            Whether you&apos;re preparing students for future careers, transforming your workforce, 
            or modernizing learning with SkaiMitra, Advaitecs can help.
          </p>

          <div className="cta-banner-buttons">
            <a 
              href="https://edu.skaimitra.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cta-outlined"
            >
              <span>Explore SkaiMitra</span>
              <ExternalLink size={16} />
            </a>

            <Link href="/training-programs" className="btn-cta-green">
              <span>Start a Training Programs</span>
              <ArrowRight size={16} />
            </Link>

            <Link href="/workshops/schedule" className="btn-cta-purple">
              <span>Schedule a Workshop</span>
              <Calendar size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
