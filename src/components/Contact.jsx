import React, {useState, useRef, useEffect} from "react";
import { ArrowRight, BookOpen, ChevronDown  } from "lucide-react";

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

function Contact(){
    return (
        <>
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 font-serif">
            <div id="contact" className="w-full py-20 md:py-32 bg-gray-900">
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
        </div>
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
        </div>
        </>
    )
}

export default Contact;