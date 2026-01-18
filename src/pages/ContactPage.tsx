import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ParallaxSection } from '@/components/ParallaxSection';
import kochiImg from "@/assets/kochi.png";


import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MessageSquareIcon,
  SendIcon,
} from 'lucide-react';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

// Contact Form   

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  try {
    const res = await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'contact',
        name: `${(form as any).firstName?.value ?? ''} ${(form as any).lastName?.value ?? ''}`.trim(),
        email: (form as any).email.value,
        phone: (form as any).phone?.value,
        subject: (form as any).subject?.value ?? 'Contact Form Message',
        message: (form as any).message.value,
      }),
    });

    if (!res.ok) throw new Error('Failed');

    alert('Message sent successfully!');
    form.reset();
  } catch (error) {
    alert('Something went wrong. Please try again.');
  }
};


  const contactInfo = [
    {
      icon: <MapPinIcon size={28} />,
      title: 'Visit Us',
      details: ['3rd Floor, JK Tower', 'Kottankavu Jn, Vennala PO', 'Ernakulam 682028'],
      color: 'bg-purple-100 text-purple-900',
    },
    {
      icon: <PhoneIcon size={28} />,
      title: 'Call Us',
      details: ['Main: +91 8089732244'],
      color: 'bg-blue-100 text-blue-900',
    },
    {
      icon: <MailIcon size={28} />,
      title: 'Email Us',
      details: ['ask@astutosolution.com'],
      color: 'bg-green-100 text-green-900',
    },
    {
      icon: <ClockIcon size={28} />,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9 AM - 5 PM', 'Sunday: Closed'],
      color: 'bg-amber-100 text-amber-900',
    },
  ];

  const offices = [
    {
      city: 'New York',
      address: '123 Business Street, Suite 100',
      phone: '(555) 123-4567',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
    },
    {
      city: 'San Francisco',
      address: '456 Tech Avenue, Floor 5',
      phone: '(555) 234-5678',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
    },
    {
      city: 'London',
      address: '789 Finance Road, Suite 200',
      phone: '+44 20 1234 5678',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
    },
  ];

  return (
    <main className="parallax-container">
      <ParallaxSection index={0} speed={0.2}>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[650px] lg:min-h-[750px] flex items-center pt-20 lg:pt-20">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm font-medium">CONTACT US</span>
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  Let's start a conversation
                </h1>
                <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                  We're here to help you achieve your business goals. Reach out to us and let's discuss how we can work together.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop"
                  alt="Contact us"
                  width={800}
                  height={600}
                  loading="eager"
                  className="rounded-2xl w-full h-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>


{/* Contact Info Cards */}
<section className="py-16 lg:py-24 bg-white ">
  <div className="max-w-7xl mx-auto px-8 lg:px-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

      {contactInfo.map((info, index) => {
        // Determine card click action
        let cardLink = "";

        if (info.title === "Visit Us") {
          cardLink = "https://maps.app.goo.gl/wEJ1bpZrPbaZpGhCA";
        } else if (info.title === "Call Us") {
          cardLink = "tel:+918089732244"; // Main call number
        } else if (info.title === "Email Us") {
          cardLink = "mailto:ask@astutosolution.com"; // Main email
        }

        // Wrapper element becomes <a> or <div>
        const Wrapper: any = cardLink ? "a" : "div";

        return (
          <Wrapper
            key={index}
            {...(cardLink
              ? { href: cardLink, target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="block h-full"

          >
            <Card className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">

              <div className={`${info.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                {info.icon}
              </div>

              <h3 className="text-lg font-bold mb-3 text-gray-900">
                {info.title}
              </h3>

              <div className="space-y-1">
                {/* ↙ YOUR EXISTING DETAIL-LINK CODE GOES HERE */}
                {info.details.map((detail, idx) => {
                  
                  // --- Visit Us (Google Maps) ---
                  if (info.title === "Visit Us") {
                    return (
                      <a
                        key={idx}
                        href="https://maps.app.goo.gl/wEJ1bpZrPbaZpGhCA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-600 hover:text-purple-900 transition"
                      >
                        {detail}
                      </a>
                    );
                  }

                  // --- Call Us ---
                  if (info.title === "Call Us") {
                    const phone = detail.match(/\+?\d[\d\s-]+/);
                    return (
                      <a
                        key={idx}
                        href={phone ? `tel:${phone[0].replace(/\s+/g, "")}` : "#"}
                        className="block text-sm text-gray-600 hover:text-blue-900 transition"
                      >
                        {detail}
                      </a>
                    );
                  }

                  // --- Email Us ---
                  if (info.title === "Email Us") {
                    return (
                      <a
                        key={idx}
                        href={`mailto:${detail}`}
                        className="block text-sm text-gray-600 hover:text-green-900 transition"
                      >
                        {detail}
                      </a>
                    );
                  }

                  // --- Business Hours or Others ---
                  return (
                    <p key={idx} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  );
                })}
              </div>

            </Card>
          </Wrapper>
        );
      })}

    </div>
  </div>
</section>
   

      <ParallaxSection index={2} speed={0.3}>
      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
                <MessageSquareIcon size={16} />
                <span className="text-sm font-medium">GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                Send us a message
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <Card className="p-8 bg-white border-none shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-900">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="bg-white text-gray-900"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-900">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="bg-white text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="bg-white text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-900">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-white text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-900">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      className="bg-white text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more about your needs..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-900 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-purple-900 text-white hover:bg-purple-800 font-medium w-full py-6 h-auto rounded-lg"
                  >
                    <SendIcon size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Additional Info */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium">WHY CHOOSE US</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                We're here to help
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of experts is ready to answer your questions and provide the guidance you need to succeed.
              </p>

              <div className="space-y-6 mb-8">
                <Card className="p-6 bg-white border-none shadow-md">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Free Consultation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Schedule a complimentary consultation to discuss your business needs and explore how we can help.
                  </p>
                </Card>

                <Card className="p-6 bg-white border-none shadow-md">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Quick Response
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </Card>

                <Card className="p-6 bg-white border-none shadow-md">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get personalized advice from our team of experienced professionals.
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-to-r from-purple-900 to-purple-700 border-none shadow-lg text-white">
                <h3 className="font-bold text-xl mb-3">
                  Prefer to talk directly?
                </h3>
                <p className="mb-4 opacity-90">
                  Call us now and speak with one of our consultants.
                </p>
                <a
                  href="tel:5551234567"
                  className="inline-flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <PhoneIcon size={20} />
                  +91 8089732244
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </ParallaxSection>

      <ParallaxSection index={3} speed={0.25}>
{/* Office Location */}
<section className="py-16 lg:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-8 lg:px-16">

    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        <span className="text-sm font-medium">OUR OFFICE</span>
      </div>

      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Visit Our Office
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Feel free to visit us at our Kochi office. We’re here to assist you.
      </p>
    </div>

    {/* Office Card */}
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white max-w-xl mx-auto">
      <div className="relative h-56 overflow-hidden">
        <img
          src={kochiImg}
          alt="Kochi"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="font-bold text-2xl mb-3 text-gray-900">Kochi</h3>

        <div className="space-y-3">
          <div className="flex items-start gap-2 text-gray-600">
            <MapPinIcon size={18} className="mt-1 flex-shrink-0" />
            <span className="text-sm">
              ASTUTO SOLUTION LLP, 3rd Floor, JK Tower, Kottankavu Jn, PO, 
              Vennala, Kochi, Kerala 682028
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <PhoneIcon size={18} className="flex-shrink-0" />
            <span className="text-sm">+91 80897 32244</span>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=ASTUTO+SOLUTION+LLP,+3rd+Floor,+JK+Tower,+Kottankavu+Jn,+PO,+Vennala,+Kochi,+Kerala+682028"
            target="_blank"
            className="inline-block mt-4 bg-purple-900 hover:bg-purple-800 text-white px-6 py-2 rounded-lg transition-all shadow-md"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </Card>

  </div>
</section>
      </ParallaxSection>

      <ParallaxSection index={4} speed={0.3}>
        <section className="py-16 lg:py-24 bg-purple-50">
  <div className="max-w-7xl mx-auto px-8 lg:px-16">
    <Card className="overflow-hidden border-none shadow-lg relative">

      {/* Parent is relative so overlay can capture clicks */}
      <div className="h-96 relative rounded-xl overflow-hidden">

        {/* Correct ASTUTO SOLUTION LLP Google Maps embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4256.733527947175!2d76.31857357537963!3d9.992680790112345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24d1f388247946b9%3A0x6159e73973652d66!2sASTUTO%20SOLUTION%20LLP!5e0!3m2!1sen!2sin!4v1765263095877!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-xl"
        ></iframe>

        {/* Transparent overlay that opens full Google Maps on click */}
        <a
          href="https://maps.app.goo.gl/wEJ1bpZrPbaZpGhCA"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          aria-label="Open ASTUTO SOLUTION LLP in Google Maps"
        />
      </div>

    </Card>
  </div>
</section>







      </ParallaxSection>
    </main>
  );
}
