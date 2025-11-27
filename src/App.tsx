import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { ContactPage } from '@/pages/ContactPage';
import { useEffect } from 'react';

export default function App() {

  // ─────────────────────────────────────────────
  // Typewriter Logic
  // ─────────────────────────────────────────────
  const messages = [
    "BUSINESS MANAGEMENT CONSULTANT",
    "Accounts | Audit | Tax | Assurance"
  ];

  const typeWriterEffect = () => {
    const element = document.querySelector(".typewriter-text") as HTMLElement;
    if (!element) return;

    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentMessage = messages[messageIndex];

      if (!isDeleting) {
        element.textContent = currentMessage.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentMessage.length) {
          setTimeout(() => (isDeleting = true), 1500);
        }
      } else {
        element.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          messageIndex = (messageIndex + 1) % messages.length;
        }
      }

      setTimeout(type, isDeleting ? 40 : 60);
    };

    type();
  };

  useEffect(() => {
    typeWriterEffect();
  }, []);

  // ─────────────────────────────────────────────

  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        {/* Navbar - Fixed Header */}
        <Navbar />

        {/* Typing Banner (Below Navbar) */}
        <div className="w-full bg-purple-900 text-white py-3 text-center mt-[80px] shadow-md">
          <span className="typewriter-text text-lg lg:text-xl font-semibold tracking-wide"></span>
        </div>

        {/* Main Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
