import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh M.',
      role: 'Managing Director, IT Services Company',
      rating: 5,
      text: 'Astuto Solutions has been a reliable financial partner for our organization. Their guidance on compliance and financial structuring helped us streamline operations and plan growth confidently.',
      avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop',
    },
    {
      name: 'Anita N.',
      role: 'Founder, Startup Business',
      rating: 5,
      text: 'The team at Astuto Solutions provided clear and practical advice on taxation and financial planning. Their professional approach allowed us to stay compliant while focusing on scaling our business.',
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop',
    },
    {
      name: 'Suresh K.',
      role: 'Director, Manufacturing Firm',
      rating: 5,
      text: 'Astuto Solutions stands out for their responsiveness and depth of knowledge. Their audit and advisory support added significant value to our financial decision-making.',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop',
    },
  ];

  /* ✅ AUTO SLIDE EFFECT */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Reviews
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 lg:p-10 bg-white border-none shadow-lg max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        loading="lazy"
                        className="rounded-full w-16 h-16 object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <StarIcon
                          key={i}
                          size={20}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? 'bg-purple-900'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* ARROWS */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="bg-white text-gray-900 border-gray-300 hover:bg-gray-100 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon size={24} />
            </Button>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="bg-white text-gray-900 border-gray-300 hover:bg-gray-100 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
