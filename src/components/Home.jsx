import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, BookOpen, ChevronDown, Import } from "lucide-react";

// Button Component
const Button = ({ children, onClick, className, variant }) => (
  <button
    onClick={onClick}
    className={`px-8 py-3 text-sm uppercase tracking-wider transition-all duration-300 ${
      variant === 'outline'
        ? 'border border-gold text-gold hover:bg-gold hover:text-gray-900'
        : 'bg-gold text-gray-900 hover:bg-gold-light'
    } ${className}`}
  >
    {children}
  </button>
);

// Fade-in Paragraph Component
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

export default function Home() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignInClick = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validEmail = import.meta.env.VITE_APP_LOGIN_EMAIL;
    const validPassword = import.meta.env.VITE_APP_LOGIN_PASSWORD;

    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 font-serif">
      <header className="px-4 lg:px-6 py-6 border-b border-gold/20">
        <div className="container mx-auto flex justify-between items-center">
          <a className="flex items-center justify-center space-x-2 group" href="#">
            <BookOpen className="h-8 w-8 text-gold group-hover:text-gold-light transition-colors duration-300" />
            <span className="text-2xl font-semibold tracking-wide text-gold">SN</span>
          </a>
          <nav className=" md:flex space-x-8">
            
            <Button variant="outline" onClick={handleSignInClick}>Log In</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Show login form if the button is clicked and not logged in */}
        {isLoginFormVisible && !isLoggedIn ? (
          <div className="flex justify-center items-center py-20">
            <form onSubmit={handleLogin} className="p-8 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-md">
              <h2 className="text-2xl mb-4">Login</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 p-2 w-full bg-white dark:bg-gray-700 text-black dark:text-white rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 p-2 w-full bg-white dark:bg-gray-700 text-black dark:text-white rounded-md"
              />
              <button type="submit" className="p-2 bg-blue-500 text-white rounded-md w-full">
                Login
              </button>
              {error && <p className="mt-4 text-red-500">{error}</p>}
            </form>
          </div>
        ) : isLoggedIn ? (
          // Content After Successful Login
          <section className="w-full py-20 md:py-32 lg:py-48 border-b border-gold/20 bg-hero-pattern bg-cover bg-center">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-8 text-gold">
              As-salamu alaykum!
              </h1>
              <div className="container px-4 md:px-6 mx-auto max-w-3xl text-justify">
            <FadeParagraph>
              In the realm of digital innovation, we stand as a beacon of timeless elegance. Our approach marries classic design principles with cutting-edge technology, creating solutions that are both beautiful and functional.
            </FadeParagraph>
            <FadeParagraph>
              We believe in the power of simplicity. Every pixel, every line of code is crafted with purpose. Our designs don't just catch the eye; they captivate the mind and elevate the user experience to new heights.
              <br />
              <br />
              <div className="text-center">
              <FadeParagraph > hello there</FadeParagraph></div>
            </FadeParagraph>
            <FadeParagraph>
              With a deep respect for tradition and an eye towards the future, we create digital experiences that stand the test of time. Our work is not just about following trends, but about setting new standards in design and functionality.
            </FadeParagraph>
          </div>
            </div>
          </section>
          
        ) : (
          <section className="w-full py-20 md:py-32 lg:py-48 border-b border-gold/20 bg-hero-pattern bg-cover bg-center">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-8 text-gold">
                Timeless Elegance
              </h1>
              <p className="text-xl md:text-2xl text-center mb-12 text-gray-300">
                You need to login to see the content...
              </p>
              <div className="flex justify-center space-x-4">
                <p></p>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="flex justify-center mt-16">
              <ChevronDown className="w-8 h-8 text-gold animate-bounce" />
            </div>
          </section>
        )}
      </main>

      
    </div>
  );
}
