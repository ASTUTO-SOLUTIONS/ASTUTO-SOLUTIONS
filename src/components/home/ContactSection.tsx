import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export function ContactSection() {
  // Form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  try {
    const res = await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'home',
        name: (form as any).name.value,
        email: (form as any).email.value,
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


  return (
    <section id="contact" className="py-16 lg:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-headline mb-4 text-foreground">Get in Touch</h2>
          <p className="text-muted-foreground">
            Ready to take your business to the next level? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-background border-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-background text-foreground"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background text-foreground"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your needs"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-normal w-full"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-background border-none">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPinIcon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold mb-2 text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    3rd Floor, JK Tower, Kottankavu Jn, Vennala PO
                    <br />
                    Ernakulam 682028
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background border-none">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <PhoneIcon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold mb-2 text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+91 8089732244</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background border-none">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MailIcon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-headline font-semibold mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground">ask@astutosolution.com</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
