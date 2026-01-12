import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[600px] lg:min-h-[700px] pt-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in-up flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
              alt="Professional Businessman"

              width={800}
              height={600}
              
              loading="eager"
              className="rounded-2xl max-w-[800px] max-h-[500px] w-full h-auto object-cover object-[50%_30%] shadow-2xl hover:shadow-3xl transition-shadow duration-500 "
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-white animate-fade-in-up animation-delay-200">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              We handle your numbers, you drive the growth.
            </h1>
            <p className="text-lg lg:text-xl mb-8 font-light leading-relaxed opacity-90">
              Focus on what you do best while we take care of your financial operations.
            </p>
            <Link to="/services">
              <Button className="bg-white text-purple-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                Get Started
                <ArrowRightIcon size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
