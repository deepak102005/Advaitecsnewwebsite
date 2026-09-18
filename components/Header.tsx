'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isHome = pathname === '/';
  const isSkaiMitra = pathname?.toLowerCase().includes('skaimitra');

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="header-wrapper">
      <div className="container header-container">
        {/* Logo */}
        <Link href="/" className="header-brand-link">
          <Image
            src="/images/logo/advaitecs-icon.png"
            alt="Advaitecs Icon"
            width={52}
            height={52}
            priority
            className="header-brand-icon"
          />
          <div className="header-brand-text">
            <span className="header-brand-title">Advaitecs</span>
            <span className="header-brand-tagline">Training Minds, Innovating Solutions</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          <Link href="/" className={`nav-item ${isHome ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/Skaimitra" className={`nav-item ${isSkaiMitra ? 'active' : ''}`}>
            SkaiMitra
          </Link>

          {/* Training Programs Dropdown */}
          <div className="nav-item nav-dropdown-group">
            <Link 
              href="/trainingprograms" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'inherit', textDecoration: 'none' }}
            >
              <span>Training Programs</span>
              <ChevronDown className="nav-chevron" />
            </Link>
            <div className="dropdown-menu">
              <Link href="/Fullstack" className="dropdown-item">
                Full-Stack Job Ready
              </Link>
              <Link href="/AIcareer" className="dropdown-item">
                AI Career Ready
              </Link>
              <Link href="/trainingprograms#career-paths" className="dropdown-item">
                Custom Programs
              </Link>
            </div>
          </div>

          {/* Workshops Dropdown */}
          <div className="nav-item nav-dropdown-group">
            <Link 
              href="/workshopmain" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'inherit', textDecoration: 'none' }}
            >
              <span>Workshops</span>
              <ChevronDown className="nav-chevron" />
            </Link>
            <div className="dropdown-menu">
              <Link href="/workshopmain" className="dropdown-item">
                All Workshops
              </Link>
              <Link href="/schoolworkshop" className="dropdown-item">
                For Schools
              </Link>
              <Link href="/collegesEnterprises" className="dropdown-item">
                For Colleges & Enterprises
              </Link>
              <Link href="/corprateTraining" className="dropdown-item">
                Corporate Training
              </Link>
            </div>
          </div>

          <Link href="/about" className="nav-item">
            About Us
          </Link>
          <Link href="/careers" className="nav-item">
            Careers
          </Link>
          <Link href="/contactus" className="nav-item">
            Contact
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="header-right">
          <div className="header-divider"></div>
          <a href="tel:+917358435345" className="phone-cta">
            <div className="phone-icon-circle">
              <Phone size={17} />
            </div>
            <span className="phone-number-text">+91 73584 35345</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <Link href="/" className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/Skaimitra" className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            SkaiMitra
          </Link>

          <div>
            <div
              className="nav-item"
              style={{ justifyContent: 'space-between' }}
            >
              <Link 
                href="/trainingprograms" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
              >
                <span>Training Programs</span>
              </Link>
              <span 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown('training');
                }}
                style={{ padding: '4px 8px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
              >
                <ChevronDown className="nav-chevron" style={{ transform: openDropdown === 'training' ? 'rotate(180deg)' : 'none' }} />
              </span>
            </div>
            {openDropdown === 'training' && (
              <div style={{ paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <Link href="/Fullstack" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                  Full-Stack Job Ready
                </Link>
                <Link href="/AIcareer" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                  AI Career Ready
                </Link>
                <Link href="/trainingprograms#career-paths" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                  Custom Programs
                </Link>
              </div>
            )}
          </div>

          <div>
            <div
              className="nav-item"
              style={{ justifyContent: 'space-between' }}
            >
              <Link 
                href="/workshopmain" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}
              >
                <span>Workshops</span>
              </Link>
              <span 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown('workshops');
                }}
                style={{ padding: '4px 8px', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
              >
                <ChevronDown className="nav-chevron" style={{ transform: openDropdown === 'workshops' ? 'rotate(180deg)' : 'none' }} />
              </span>
            </div>
            {openDropdown === 'workshops' && (
              <div style={{ paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
                <Link href="/workshopmain" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                  All Workshops
                </Link>
                <Link href="/schoolworkshop" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                  For Schools
                </Link>
                <Link href="/collegesEnterprises" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                  For Colleges & Enterprises
                </Link>
                <Link href="/corprateTraining" className="dropdown-item" onClick={() => setMobileMenuOpen(false)}>
                  Corporate Training
                </Link>
              </div>
            )}
          </div>

          <Link href="/about" className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/careers" className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            Careers
          </Link>
          <Link href="/contactus" className="nav-item" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>

          <div style={{ paddingTop: '12px', borderTop: '1px solid #edf2f7' }}>
            <a href="tel:+919603992299" className="phone-cta">
              <div className="phone-icon-circle">
                <Phone size={17} />
              </div>
              <span className="phone-number-text">+91 96039 92299</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
