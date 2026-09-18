import React from 'react';
import HeroSection from '@/components/HeroSection';
import TopFeatureCards from '@/components/TopFeatureCards';
import SkaiMitraSection from '@/components/SkaiMitraSection';
import TrainingProgramsSection from '@/components/TrainingProgramsSection';
import CollegesAndEnterprisesSection from '@/components/CollegesAndEnterprisesSection';
import CtaBanner from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Top 3 Feature Cards */}
      <TopFeatureCards />

      {/* 3. SkaiMitra Platform Highlight Grid */}
      <SkaiMitraSection />

      {/* 4. Training Programs & Learning Pipeline */}
      <TrainingProgramsSection />

      {/* 5. Dual Split Section: For Colleges & For Enterprises */}
      <CollegesAndEnterprisesSection />

      {/* 6. Ready to Build AI-Ready Organization CTA */}
      <CtaBanner />
    </>
  );
}
