import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  BookOpenIcon,
  FileTextIcon,
  VideoIcon,
  DownloadIcon
} from 'lucide-react';

export function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* =======================
     EXTERNAL ARTICLES
     ======================= */
  const blogPosts = [
    {
      title: 'How AI Is Changing Financial Planning',
      excerpt:
        'A deep dive into how artificial intelligence is reshaping financial planning for modern startups.',
      date: 'March 28, 2024',
      readTime: '6 min read',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      url: 'https://www.forbes.com/',
      source: 'Forbes'
    },
    {
      title: 'Building and Managing Remote Teams at Scale',
      excerpt:
        'Insights from global companies on hiring, managing, and scaling remote teams successfully.',
      date: 'March 24, 2024',
      readTime: '7 min read',
      category: 'HR',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      url: 'https://hbr.org/',
      source: 'Harvard Business Review'
    },
    {
      title: 'Essential Tax Strategies for Startups',
      excerpt:
        'Key tax planning techniques every growing startup should understand.',
      date: 'March 20, 2024',
      readTime: '8 min read',
      category: 'Tax',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      url: 'https://www.investopedia.com/',
      source: 'Investopedia'
    },
    {
      title: 'A Practical Guide to Digital Transformation',
      excerpt:
        'Learn how organizations can successfully implement digital transformation initiatives.',
      date: 'March 17, 2024',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      url: 'https://www.mckinsey.com/',
      source: 'McKinsey'
    },
    {
      title: 'Risk Management Strategies in Uncertain Markets',
      excerpt:
        'How businesses can identify, evaluate, and mitigate risks during volatile times.',
      date: 'March 14, 2024',
      readTime: '9 min read',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop',
      url: 'https://www.bcg.com/',
      source: 'BCG'
    },
    {
      title: 'When and How to Scale Your Business',
      excerpt:
        'Understanding the right timing and strategies to scale sustainably.',
      date: 'March 10, 2024',
      readTime: '10 min read',
      category: 'Growth',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      url: 'https://www.ycombinator.com/library',
      source: 'Y Combinator'
    }
  ];

  /* =======================
     EXTERNAL RESOURCES
     ======================= */
  const resources = [
    {
      icon: <FileTextIcon size={32} />,
      title: 'Startup Financial Planning Sheet',
      description:
        'Google Sheets-based financial planning and forecasting template.',
      type: 'Template',
      color: 'bg-blue-100 text-blue-900',
      link: 'https://docs.google.com/spreadsheets'
    },
    {
      icon: <BookOpenIcon size={32} />,
      title: 'Business Strategy Playbook',
      description:
        'A comprehensive external guide to building winning business strategies.',
      type: 'Workbook',
      color: 'bg-purple-100 text-purple-900',
      link: 'https://drive.google.com/'
    },
    {
      icon: <VideoIcon size={32} />,
      title: 'Startup Tax Planning Webinar',
      description:
        'Expert-led webinar covering startup tax planning fundamentals.',
      type: 'Video',
      color: 'bg-green-100 text-green-900',
      link: 'https://www.youtube.com/results?search_query=Expert-led+webinar+covering+startup+tax+planning+fundamentals'
    },
    {
      icon: <FileTextIcon size={32} />,
      title: 'Cash Flow Management Guide',
      description:
        'External practical guide to managing business cash flow effectively.',
      type: 'Guide',
      color: 'bg-amber-100 text-amber-900',
      link: 'https://www.notion.so/'
    }
  ];

  const categories = [
    'All',
    'Finance',
    'HR',
    'Tax',
    'Technology',
    'Strategy',
    'Growth'
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 min-h-[650px] lg:min-h-[750px]
 flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-medium">RESOURCES</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Knowledge hub for business success
              </h1>
              <p className="text-lg lg:text-xl font-light leading-relaxed opacity-90">
                Access expert insights, guides, templates, and tools to help your business thrive.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop"
                alt="Resources"
                width={800}
                height={600}
                loading="eager"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FREE RESOURCES */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${resource.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                  {resource.icon}
                </div>
                <div className="text-xs font-semibold text-purple-900 mb-2 uppercase">
                  {resource.type}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white"
                  >
                    <DownloadIcon size={16} className="mr-2" />
                    Download
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-16 lg:py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <CalendarIcon size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-900 hover:text-purple-700 transition-colors font-semibold"
                  >
                    Read More
                    <ArrowRightIcon size={16} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
