import { Card } from '@/components/ui/card';
import azharImg from "../../assets/azhar.jpg";
import nidalImg from "../../assets/nidal.jpg";
import safwanImg from "../../assets/safwan.jpg";
import salahImg from "../../assets/salah.jpg";

export function ExpertInsights() {
const experts = [
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm font-medium">OUR TEAM</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Gain insights from experts.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  width={400}
                  height={400}
                  loading="lazy"
                  className={`w-full h-full object-cover ${expert.imagePosition ?? 'object-center'}`}

                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900">
                  {expert.name}
                </h3>
                <p className="text-purple-900 text-sm font-medium mb-3">{expert.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{expert.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
