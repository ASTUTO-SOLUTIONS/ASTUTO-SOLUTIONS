import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[600px] lg:min-h-[700px] flex lg:block pt-20 lg:pt-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
<div className="order-2 lg:order-1 animate-fade-in-up flex justify-center">
  <div className="group w-full max-w-[800px] h-[500px] overflow-hidden rounded-2xl shadow-2xl">
    <img
      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1200&q=80&auto=format"
      alt="Professional Businessman"
      loading="eager"
      decoding="async"
      className="
        w-full 
        h-full 
        object-cover 
        object-[50%_35%]
        transition-transform 
        duration-500 
        ease-out
        group-hover:scale-105
      "
    />
  </div>
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
