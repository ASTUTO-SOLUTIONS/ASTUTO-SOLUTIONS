import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Resources', path: '/resources' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={handleNavClick}>
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Astuto Solutions Logo" 
                className="h-12 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              />
              <span className="text-xl font-bold text-gray-900 group-hover:text-purple-900 transition-colors">
                Astuto Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.path}
                        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                          isActive(item.path)
                            ? 'text-purple-900 bg-purple-50'
                            : 'text-gray-700 hover:text-purple-900 hover:bg-purple-50/50'
                        }`}
                      >
                        {item.label}
                        {isActive(item.path) && (
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-900 rounded-full"></span>
                        )}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/contact">
              <Button className="ml-4 bg-gradient-to-r from-purple-900 to-purple-700 text-white hover:from-purple-800 hover:to-purple-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900 p-2 rounded-lg hover:bg-purple-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-purple-900 bg-purple-50'
                    : 'text-gray-700 hover:text-purple-900 hover:bg-purple-50/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={handleNavClick} className="block pt-2">
              <Button className="w-full bg-gradient-to-r from-purple-900 to-purple-700 text-white hover:from-purple-800 hover:to-purple-600 font-medium rounded-lg shadow-md">
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>   
  );
}
