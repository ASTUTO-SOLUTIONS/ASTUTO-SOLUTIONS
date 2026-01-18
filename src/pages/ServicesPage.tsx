import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ParallaxSection } from '@/components/ParallaxSection';
import {
  TrendingUpIcon,
  BarChart3Icon,
  UsersIcon,
  FileTextIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
} from 'lucide-react';

export function ServicesPage() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <TrendingUpIcon size={32} />,
      title: 'Business Strategy',
      description: 'Comprehensive strategic planning to help your business achieve sustainable growth and competitive advantage in the market.',
      features: ['Market Analysis', 'Growth Planning', 'Competitive Strategy', 'Risk Management'],
      color: 'bg-purple-100 text-purple-900',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
    {
      icon: <BarChart3Icon size={32} />,
      title: 'Financial Planning & Analysis',
      description: 'Expert financial planning and analysis services to optimize your business performance and maximize profitability.',
      features: ['Budget Planning', 'Financial Forecasting', 'Performance Analysis', 'Cost Optimization'],
      color: 'bg-blue-100 text-blue-900',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    },
    {
      icon: <UsersIcon size={32} />,
      title: 'Workforce Optimization',
      description: 'Strategic workforce planning and optimization to help you build efficient, high-performing teams.',
      features: ['Team Structure', 'Resource Planning', 'Talent Strategy', 'Performance Management'],
      color: 'bg-green-100 text-green-900',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    },
    {
      icon: <FileTextIcon size={32} />,
      title: 'Tax & Compliance',
      description: 'Comprehensive tax planning and compliance services to ensure your business meets all regulatory requirements.',
      features: ['Tax Planning', 'Compliance Management', 'Audit Support', 'Regulatory Guidance'],
      color: 'bg-amber-100 text-amber-900',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    },
    {
      icon: <ShieldCheckIcon size={32} />,
      title: 'Risk Management',
      description: 'Proactive risk assessment and management strategies to protect your business and ensure continuity.',
      features: ['Risk Assessment', 'Mitigation Planning', 'Business Continuity', 'Insurance Advisory'],
      color: 'bg-red-100 text-red-900',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop',
    },
    {
      icon: <HeadphonesIcon size={32} />,
      title: 'Ongoing Support',
      description: 'Continuous support and guidance to ensure your business stays on track and adapts to changing conditions.',
      features: ['24/7 Support', 'Regular Check-ins', 'Strategic Advice', 'Performance Monitoring'],
      color: 'bg-pink-100 text-pink-900',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and challenges through in-depth consultation.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a customized strategy tailored to your specific needs and objectives.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We work with you to implement the strategy, providing hands-on support every step of the way.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor and optimize to ensure you achieve the best possible results.',
    },
  ];

    const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <main className="parallax-container">
      <ParallaxSection index={0} speed={0.2}>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[500px] flex items-center pt-20 lg:pt-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">OUR SERVICES</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Comprehensive solutions for your business success
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90 mb-8">
                From strategic planning to ongoing support, we provide everything you need to thrive in today's competitive landscape.
              </p>
              <Button
                onClick={handleGetStarted}
                className="bg-white text-purple-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto rounded-full"
                size="lg"
              >
                Get Started
                <ArrowRightIcon size={20} className="ml-2" />
              </Button>
            </div>
            <div className="relative overflow-hidden rounded-2xl group">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Services overview"
                width={800}
                height={600}
                loading="eager"
                    className="
                      w-full 
                      h-auto 
                      rounded-2xl
                      shadow-2xl
                      transition-all 
                      duration-500 
                      ease-out
                      group-hover:scale-105
                      group-hover:shadow-3xl
                   "
              />
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      <ParallaxSection index={1} speed={0.3}>
      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">WHAT WE OFFER</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored solutions designed to address every aspect of your business needs
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
{/* Image */}
<div className={index % 2 === 1 ? 'lg:order-2' : ''}>
  <div className="relative overflow-hidden rounded-2xl group">
    <img
      src={service.image}
      alt={service.title}
      width={800}
      height={600}
      loading="lazy"
      className="
        rounded-2xl 
        w-full 
        h-auto 
        shadow-lg
        transition-all 
        duration-500 
        ease-out
        group-hover:scale-105
        group-hover:shadow-2xl
      "
    />
  </div>
</div>


                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="p-8 lg:p-10 bg-white border-none shadow-lg">
                    <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-base lg:text-lg mb-6 text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2Icon size={20} className="text-purple-900 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => {
                        const routes = [
                          '/services/business-strategy',
                          '/services/financial-planning',
                          '/services/workforce-optimization',
                          '/services/tax-compliance',
                          '/services/risk-management',
                          '/services/ongoing-support',
                        ];
                        window.location.href = routes[index];
                      }}
                      variant="ghost"
                      className="flex items-center gap-2 text-purple-900 hover:text-purple-700 transition-colors font-semibold p-0 h-auto"
                    >
                      Learn More
                      <ArrowRightIcon size={20} />
                    </Button>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ParallaxSection>

      <ParallaxSection index={2} speed={0.25}>
      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">OUR PROCESS</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How we work with you
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven four-step process ensures successful outcomes for every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card
                key={index}
                className="p-8 bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div className="text-6xl font-bold text-purple-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRightIcon size={24} className="text-purple-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      </ParallaxSection>

      
      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our services can help you achieve your goals. Schedule a free consultation today.
          </p>
          <Button
            onClick={handleGetStarted}
            className="bg-white text-purple-900 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto rounded-full"
            size="lg"
          >
            Schedule Free Consultation
            <ArrowRightIcon size={20} className="ml-2" />
          </Button>
        </div>
      </section>
     
    </main>
  );
}
