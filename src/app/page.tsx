"use client"
import { useState } from 'react';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import PricingBento from '@/components/bento/PricingBento';
import MomoCoinAbout from '@/components/sections/layouts/about/Momocoinabout';
import ArrowButton from '@/components/buttons/ArrowButton';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault(); // Mock submit action
    console.log(formData);
  };

  return (
    <>
      <section id="hero" className="bg-white py-18">
        <ContentTextbox
          title={<h1 className="text-4xl font-bold">Welcome to NimbusFlow</h1>}
          description={<p className="text-lg">The future of SaaS solutions.</p>}
          className="text-center"
        >
          <ArrowButton text="Get Started" onClick={() => alert('Navigating to sign-up')} className="mt-4 bg-blue-600 text-white" />
        </ContentTextbox>
      </section>

      <section id="features" className="bg-gradient-to-b from-white to-[#F7FBFF] py-18">
        <GalleryBento
          items={[
            { title: 'Feature 1', image: '/images/placeholder1.avif' },
            { title: 'Feature 2', image: '/images/placeholder2.avif' },
            { title: 'Feature 3', image: '/images/placeholder3.avif' }
          ]}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        />
      </section>

      <section id="pricing" className="bg-white py-18">
        <PricingBento
          items={[
            { badge: ['Basic'], price: '$19', features: 'Feature 1, Feature 2', subtitle: 'Perfect for beginners' },
            { badge: ['Pro'], price: '$49', features: 'Feature 1, Feature 2, Feature 3', subtitle: 'For the growing business' }
          ]}
          className="container"
        />
      </section>

      <section id="about" className="bg-white py-18">
        <MomoCoinAbout
          style={{ section: { className: 'text-center' } }}
        />
      </section>

      <section id="contact" className="bg-white py-18">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">Send</button>
        </form>
      </section>

    </>
  );
}
