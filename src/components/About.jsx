import React from "react";

function About(){
    return(
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
    )
}
export default About