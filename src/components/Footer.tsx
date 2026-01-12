import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, XIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';


export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');

    if (!email) return;

    // Send email to Astuto
    window.location.href = `mailto:ask@astutosolution.com?subject=New Newsletter Subscription&body=Please add this email to the newsletter list:%0D%0A%0D%0A${email}`;

    setSubscribed(true);
  };



  return (
    <footer className="bg-gray-900 text-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Latest News from
            </h3>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 rounded-lg"
              />
              <Button
                type="submit"
                disabled={subscribed}
                  className={`font-medium rounded-lg mt-2 ${
                    subscribed
                       ? 'bg-green-600 text-white cursor-not-allowed'
                       : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
              >
                {subscribed ? 'Subscribed ✓' : 'Subscribe'}
              </Button>
            </form>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="/Contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2 text-gray-300">
                <MapPinIcon size={20} className="mt-1 flex-shrink-0" />
                <span>3rd Floor, JK Tower, Kottankavu Jn, Vennala PO,
Ernakulam 682028</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <PhoneIcon size={20} className="flex-shrink-0" />
                <span>+91 8089732244</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MailIcon size={20} className="flex-shrink-0" />
                <span>ask@astutosolution.com</span>
              </li>
            </ul>
            <Link to="/contact">
              <Button className="bg-purple-600 text-white hover:bg-purple-700 font-medium w-full rounded-lg">
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={24} />
            </a>
            <a
  href="https://x.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition-colors flex items-center"
  aria-label="X (Twitter)"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="mt-[2px]"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.188 9.47 12.506h-7.41l-5.81-7.59-6.63 7.59H.48l8.6-9.83L.05 1.153h7.59l5.26 6.94 6-6.94zm-1.29 19.52h2.04L6.65 3.25H4.46l13.15 17.42z"/>
  </svg>
</a>

            <a
              href="https://in.linkedin.com/company/astuto-solutions-llp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://www.instagram.com/astuto_solutions_llp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={24} />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-400 text-sm">
              © 2024 Astuto Solutions LLP. All rights reserved.
            </p>
            <span className="text-gray-600"></span>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
