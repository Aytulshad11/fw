import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, BookOpen, ChevronDown } from "lucide-react";

const Button = ({ children, className, variant }) => (
  <button className={`px-8 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
    variant === 'outline' 
      ? 'border border-gold text-gold hover:bg-gold hover:text-gray-900' 
      : 'bg-gold text-gray-900 hover:bg-gold-light'
  } ${className}`}>
    {children}
  </button>
);

const FadeParagraph = ({ children }) => {
  const [opacity, setOpacity] = useState(0);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (paragraphRef.current) {
        const rect = paragraphRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setOpacity(1);
        } else {
          const distanceFromCenter = Math.abs(rect.top - windowHeight / 2);
          const fadeDistance = windowHeight / 2;
          setOpacity(Math.max(0, 1 - distanceFromCenter / fadeDistance));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <p ref={paragraphRef} className="text-gray-300 md:text-lg mb-8 leading-relaxed" style={{ opacity }}>
      {children}
    </p>
  );
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 font-serif">
      <header className="px-4 lg:px-6 py-6 border-b border-gold/20">
        <div className="container mx-auto flex justify-between items-center">
          <a className="flex items-center justify-center space-x-2 group" href="#">
            <BookOpen className="h-8 w-8 text-gold group-hover:text-gold-light transition-colors duration-300" />
            <span className="text-2xl font-semibold tracking-wide text-gold">Acme Inc</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a className="text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300" href="#about">About</a>
            <a className="text-sm uppercase tracking-wider hover:text-gold transition-colors duration-300" href="#contact">Contact</a>
            <Button variant="outline">Sign Up</Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-48 border-b border-gold/20 bg-hero-pattern bg-cover bg-center">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-8 text-gold">
              Timeless Elegance
            </h1>
            <p className="text-xl md:text-2xl text-center mb-12 text-gray-300">
              Where classic design meets modern innovation
            </p>
            <div className="flex justify-center space-x-4">
              <Button>Explore Our Services</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <ChevronDown className="w-8 h-8 text-gold animate-bounce" />
          </div>
        </section>
        <section className="w-full py-20 md:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto max-w-3xl">
            <FadeParagraph>
              In the realm of digital innovation, we stand as a beacon of timeless elegance. Our approach marries classic design principles with cutting-edge technology, creating solutions that are both beautiful and functional.
            </FadeParagraph>
            <FadeParagraph>
              We believe in the power of simplicity. Every pixel, every line of code is crafted with purpose. Our designs don't just catch the eye; they captivate the mind and elevate the user experience to new heights.
            </FadeParagraph>
            <FadeParagraph>
              With a deep respect for tradition and an eye towards the future, we create digital experiences that stand the test of time. Our work is not just about following trends, but about setting new standards in design and functionality.
            </FadeParagraph>
          </div>
        </section>
        <section id="about" className="w-full py-20 md:py-32 bg-gray-900 border-t border-b border-gold/20">
          <div className="container px-4 md:px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 text-gold">About Our Craft</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gold">Timeless Design</h3>
                <p className="text-gray-300">Our designs are rooted in classic principles, ensuring they remain elegant and effective for years to come.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gold">Modern Technology</h3>
                <p className="text-gray-300">We leverage the latest technologies to bring our classic designs to life, creating seamless and powerful digital experiences.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gold">Attention to Detail</h3>
                <p className="text-gray-300">Every aspect of our work is meticulously crafted, from the smallest UI element to the overall user journey.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gold">Client-Centric Approach</h3>
                <p className="text-gray-300">We work closely with our clients to understand their unique needs and deliver solutions that exceed expectations.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-20 md:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 text-gold">Contact Us</h2>
            <FadeParagraph>
              We believe in the power of collaboration and are always eager to engage with like-minded individuals and organizations. Whether you have a project in mind or simply want to explore the possibilities, we're here to listen, advise, and create.
            </FadeParagraph>
            <Button className="w-full mt-8">
              Reach Out
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="py-8 border-t border-gold/20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">© 2023 Acme Inc. All rights reserved.</p>
          <nav className="flex gap-6">
            <a className="text-sm text-gray-500 hover:text-gold transition-colors duration-300" href="#">
              Terms of Service
            </a>
            <a className="text-sm text-gray-500 hover:text-gold transition-colors duration-300" href="#">
              Privacy Policy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}