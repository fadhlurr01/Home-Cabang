import React from 'react';
import BackgroundCanvas from './components/common/BackgroundCanvas';
import ScrollProgress from './components/common/ScrollProgress';
import Navbar from './components/layout/Navbar';

import HeroSection from './components/hero/HeroSection';
import SolutionsSection from './components/sections/SolutionsSection';
import PillarsSection from './components/sections/PillarsSection';
import PricingSection from './components/sections/PricingSection';
import WorkflowSection from './components/sections/WorkflowSection';
import WhyUsSection from './components/sections/WhyUsSection';
import FeaturesMatrixSection from './components/sections/FeaturesMatrixSection';
import WidgetsSection from './components/sections/WidgetsSection';
import PortfolioSection from './components/sections/PortfolioSection';
import BrochureSection from './components/sections/BrochureSection';
import AddonsSection from './components/sections/AddonsSection';
import ClientsSection from './components/sections/ClientsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FaqSection from './components/sections/FaqSection';
import FinalCtaSection from './components/sections/FinalCtaSection';

import Footer from './components/layout/Footer';
import FloatingActions from './components/common/FloatingActions';
import ConsultationModal from './components/modals/ConsultationModal';
import PortfolioModal from './components/modals/PortfolioModal';
import ToastContainer from './components/common/ToastContainer';

export default function App() {
  return (
    <div className="app-root">
      {/* Background Animated Futuristic Network Canvas */}
      <BackgroundCanvas />

      {/* Top Scroll Progress Bar */}
      <ScrollProgress />

      {/* Modern Desktop & Mobile Navbar with Royal Blue Brand Identity */}
      <Navbar />

      {/* Modular Sections Faithfully Converted from cabang-home.html */}
      <main id="main-content">
        <HeroSection />
        <SolutionsSection />
        <PillarsSection />
        <PricingSection />
        <WorkflowSection />
        <WhyUsSection />
        <FeaturesMatrixSection />
        <WidgetsSection />
        <PortfolioSection />
        <BrochureSection />
        <AddonsSection />
        <ClientsSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      {/* Full Footer with Live Status Chip */}
      <Footer />

      {/* Floating Action Buttons: WhatsApp Router & Scroll to Top */}
      <FloatingActions />

      {/* Modals: Clean White, Crisp Dark Text, Soft Gray Borders, Royal Blue Button, Translucent Backdrop */}
      <ConsultationModal />
      <PortfolioModal />

      {/* Notifications */}
      <ToastContainer />
    </div>
  );
}
