"use client"
import ContentTextbox from '@/components/textbox/ContentTextbox';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import PricingBento from '@/components/bento/PricingBento';
import SimpleFooter from '@/components/footer/SimpleFooter';
import PepeHero from '@/components/sections/layouts/hero/PepeHero';

const featuresItems = [
  { title: "Feature One", content: "Clear description of feature one." },
  { title: "Feature Two", content: "Clear description of feature two." },
  { title: "Feature Three", content: "Clear description of feature three." },
];

const pricingItems = [
  { badge: ["Basic"], price: "$10", features: "Feature A, Feature B" },
  { badge: ["Standard"], price: "$20", features: "Feature A, Feature B, Feature C" },
  { badge: ["Premium"], price: "$30", features: "All features included" },
];

export default function Home() {
  return (
    <div>
      <section id="hero" className="bg-[#F9FBFE]">
        <PepeHero
          style={{
            navbar: { logoSrc: '', className: '', logoClassName: '', buttonBgColor: '', buttonHoverBgColor: '', buttonTextColor: '', buttonHoverTextColor: '', buttonClassName: '', buttonContentClassName: '' },
            section: { className: 'py-16', backgroundColor: '#F9FBFE', backgroundPattern: '', backgroundImage: '', spotlight: { width: '', height: '', left: '', top: '', rotate: '', color: '', blur: '', opacity: 0, mobileWidth: '', mobileHeight: '', mobileLeft: '', mobileTop: '', mobileRotate: '' }, sparkles: { particleColor: '', particleDensity: 0, minSize: 0, maxSize: 0, speed: 0 } },
            heading: { text: 'Welcome to Our Service', className: 'text-5xl font-bold', useRetroText: false, animation: 'none', shadowColor: '', shadowOffset: '', animationProps: { duration: 0, stagger: 0, start: '', end: '', variant: 'trigger' }, gradientColors: { from: '', to: '' } },
            subheading: { text: '', className: '' },
            ctaStyle: { containerClassName: '', addressText: '', addressClassName: '', buttonText: 'Get Started', buttonClassName: 'bg-primary text-white', iconClassName: '' }
          }}
          onMenuClick={() => {}}
          onContactClick={() => {}}
        />
      </section>
      <section id="features" className="bg-white">
        <ContentTextbox
          title={<h2>Features</h2>}
          description={<p>Explore the amazing features we offer.</p>}
          className="mb-8"
        />
        <GalleryBento
          items={featuresItems}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        />
      </section>
      <section id="how-it-works" className="bg-[#F7F9FC]">
        <ContentTextbox
          title={<h2>How It Works</h2>}
          description={<p>Simple steps to get you started.</p>}
          className="mb-8"
        />
        {/* Add components for steps */}
      </section>
      <section id="pricing" className="bg-white">
        <PricingBento
          items={pricingItems}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        />
      </section>
      <section id="about" className="bg-white">
        <ContentTextbox
          title={<h2>About Us</h2>}
          description={<p>Our mission and vision.</p>}
          className="mb-8"
        />
      </section>
      <section id="faq" className="bg-white">
        <ContentTextbox
          title={<h2>Frequently Asked Questions</h2>}
          description={<p>Your questions answered.</p>}
          className="mb-8"
        />
      </section>
      <section id="contact" className="bg-[#F7F9FC]">
        <ContentTextbox
          title={<h2>Contact Us</h2>}
          description={<p>Get in touch with us.</p>}
          className="mb-8"
        />
        {/* Contact form component */}
      </section>
    </div>
  );
}