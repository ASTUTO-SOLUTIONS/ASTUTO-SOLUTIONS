import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2Icon, UsersIcon, TrendingUpIcon, AwardIcon, HeartIcon } from 'lucide-react';
import azharImg from "../assets/azhar.jpg";
import nidalImg from "../assets/nidal.jpg";
import safwanImg from "../assets/safwan.jpg";
import salahImg from "../assets/salah.jpg";




export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' },
    { number: '50+', label: 'Team Members' },
  ];

  const values = [
    {
      icon: <CheckCircle2Icon size={32} />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results that exceed expectations.',
      color: 'bg-purple-100 text-purple-900',
    },
    {
      icon: <UsersIcon size={32} />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership, working closely with our clients to achieve shared success.',
      color: 'bg-blue-100 text-blue-900',
    },
    {
      icon: <TrendingUpIcon size={32} />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously seek new ways to solve problems and create value for our clients.',
      color: 'bg-green-100 text-green-900',
    },
    {
      icon: <AwardIcon size={32} />,
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity and ethics in all our business dealings and relationships.',
      color: 'bg-amber-100 text-amber-900',
    },
    {
      icon: <HeartIcon size={32} />,
      title: 'Commitment',
      description: 'We are deeply committed to our clients success and dedicated to building long-lasting partnerships.',
      color: 'bg-pink-100 text-pink-900',
    },
  ];

const team = [
  {
    name: 'CA Azhar Naseef',
    role: 'Chartered Accountant',
    imagePosition: 'object-[50%_60%]',
    image: azharImg,
    bio: 'Chartered Accountant with Big 4 experience specializing in audit, compliance, and strategic financial advisory.',
  },
  {
    name: 'CA Muhammed Safwan M P',
    role: 'Financial Auditor & Faculty',
    
    imagePosition: 'object-[50%_15%]', 
    image: safwanImg,
    bio: 'Financial Auditor | Faculty for CA, ACCA, CMA | Expert in Financial Reporting, Taxation and Audit with more than 4 years of experience.',
  },
  {
    name: 'Salah Saman KP',
    role: 'Law & Audit Faculty',
    image: salahImg,
    bio: 'An experienced Law & Audit faculty with around 6 years of expertise in corporate laws, secretarial practice, and compliance management within the Company Secretary domain.',
  },
  {
    name: 'Ahammed Nidal TK',
    role: 'Cost & Management Accounting Expert',
    imagePosition: 'object-[50%_1%]',
    image: nidalImg,
    bio: 'An expert in Cost & Management Accounting and Financial Management, with over 7 years of experience in taxation, audit, accounts, and regulatory compliances.',
  },
];



  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[650px] lg:min-h-[750px]
 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">ABOUT US</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Empowering businesses to reach their full potential
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                We are a team of passionate professionals dedicated to helping businesses thrive through expert guidance and innovative solutions.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                width={800}
                height={600}
                loading="eager"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-purple-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- UPDATED ABOUT US SECTION --- */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="About Astuto"
                width={800}
                height={600}
                loading="lazy"
                className="rounded-2xl w-full h-auto shadow-lg"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium">ABOUT US</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Driving Financial Excellence for Sustainable Growth
              </h2>

              <p className="text-base lg:text-lg mb-6 text-gray-600 leading-relaxed">
                At Astuto Solutions, we empower businesses to make informed financial decisions,
                strengthen governance, and create sustainable long-term value. Our experienced consultants
                merge technical expertise with industry-specific insight to deliver measurable improvements.
              </p>

              <p className="text-base lg:text-lg mb-6 text-gray-600 leading-relaxed">
                We work closely with organizations to elevate financial performance, streamline operational
                processes, and apply data-driven strategies that support confident and strategic decision-making.
              </p>

              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                Whether you are a growing business building structure or an established company preparing to
                scale, we provide tailored financial advisory solutions designed to meet your unique goals.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* --- NEW SECTION BELOW ABOUT US --- */}
<section className="py-16 lg:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-8 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Text Content */}
      <div>
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-sm font-medium">OUR APPROACH</span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
          Strategic Financial Guidance That Moves Your Business Forward
        </h2>

        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          Astuto Solutions helps organizations improve financial clarity, reduce risk,
          and enhance performance through expert advisory and innovative, data-driven
          solutions. We turn complex financial challenges into clear opportunities for growth.
        </p>
      </div>

      {/* Image */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1709715357549-f2d587846ee1?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Financial Strategy"
          width={800}
          height={600}
          loading="lazy"
          className="rounded-2xl w-full h-auto shadow-lg"
        />
      </div>

    </div>
  </div>
</section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">OUR VALUES</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What drives us forward
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do and shape the way we work with our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium">OUR TEAM</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet the experts behind our success
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience and a passion for helping businesses succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    loading="lazy"
                    className={`w-full h-full object-cover ${member.imagePosition ?? 'object-center'} hover:scale-105 transition-transform duration-300`}


                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-purple-900 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 lg:p-10 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To empower businesses with the financial expertise and strategic guidance they need to achieve sustainable growth and lasting success. We are committed to being more than consultants—we are partners in your journey.
              </p>
            </Card>
            <Card className="p-8 lg:p-10 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed opacity-90">
                To be the most trusted and innovative financial consulting firm, recognized for transforming businesses and creating lasting value. We envision a future where every business has access to world-class expertise.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
