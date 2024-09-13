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
            Hope it's going well there. Perhaps you might be thinking why the hell i made you read this way. Well, would like to say that some sentences may be fully unfiltered and I hope you don't get this in a wrong way. 

           I have had many friends since childhood and a few of them are very special to me who are still with me. Unlike School, not many became friends during college. But 4 of them are very close to me and you're one of them.
            </FadeParagraph>
            <FadeParagraph>
            So to begin with, one of the regrets i do have from my college life is i couldn't be a good friend with someone,  whom i could've been good with. Always thought to clarify it, but could never. As you know, I was in a relationship with someone back then. On a random day when the colleges went offline, she(A) told me about one of her friends with whom she used to sit in the classroom. I didn't like it, i eventually asked her to maintain a distance with him. Phir mere ek khas dost ne mujhse pucha college me girls me teri koi friend nahi bani kya. Uss point pe i decided that i would not make any new friends among girls and jo hai unse distance maintain karega. So this was the reason i was never the same with you in  as i used to be during online
              <br />
              <br />
              <div className="text-center">
              <FadeParagraph > hello there</FadeParagraph></div>
            </FadeParagraph>
            <FadeParagraph>
            Aur phir aata hai, march'23, life took a roller coaster ride. Ramadan 23 i was moving on. Tab ye sochke restrain kiya ki kahi ye na smjhe sympathy le raha hai. Phir apn aate ghar, semester breaks me. Tab apn deep dive karte sunnato pe. Phir aayi tuaha bin jalil bhai ki ek reel, that a girl and a boy must always have friendship in a respectful manner. Phir aur scholars ko suna malum chala that i had been playing with my akhirah since 2019. 

I decided in final year ki ab final year hai atleast ab to sbse shi se behave karna hai. Even me and SK(one of the muslims in cse b
B) didn't have that great bond, it did so great in CTC and in the following months. 

Well I'm not giving any excuse here, just telling taaki mujhe baad me regret naa rahe ki clear nahi kiya tha. 

But let's get back to you, you know what makes you special is the impact you have had in my life. From namaz to focusing back on career. You even corrected me many times. 
I mean you won't believe, final year me jab bhi text kiya ya call kiya baar baar sochne ke baad kiya. Always used to think text se kahi irritate naa ho jaay. Cheap na smjh le...

Hey, you aren't considering me cheap right? 

Well, so now when you've finally landed in UK. Would like to throw some free advise. Thoda sa aur bore ho jayein bss...
So, you'll be living very very far away from your home, your family. You may tackle many things that might be very new for you. There may come a day when you'll feel low, would want to talk to anyone you know, but you may not let yourself do so. Musalla bichhake sidhe sajda. If you feel like going out to a cafe or restaurant and there's no one available to go with. Go alone.
            </FadeParagraph>

            <FadeParagraph>
            Ky bakwas karne laga mai kaam ki baat chhod ke. Dekho you've gone there for studies so make sure you utilise the time usefully. Agle 4 mahine me DSA karo achhe se. System design karo. Projects hai hi tumhare pass. Internship vagerah karo. 6-7 mahina bss acheh se grind karo khud ko. Phir internships chalu. Masters khtm ho to sidhe 1-2 CR ka package leke nikalna h apne ko.
            </FadeParagraph>
            <FadeParagraph>And one more advice, make sure you aren't missing salah. Never indulge in anything that's forbidden. As far as I've seen you, you're an honorable woman. Please maintain it. Be yourself. 8-10 saal pehle ek quote padha tha paper me abhi yaha chipka deta, " aasaan nahi hota aurat ka kirdar nibhana, safed chadar ki tarah hota hai aur daag paani se bhi lag skte hai"

            </FadeParagraph>
            <FadeParagraph>Try to safeguard your haya. Be in a good company. Bcs aap apne group ke 5 logo ke hi jaise hote ho. 
            And no matter wherever you go, you have very good friend.  Who is the lord of the seven heavens and earth. You are a servant of the lord who is neither overtaken by drowsiness nor by sleep. You are an ummati of Prophet Muhammad (PBUH). You are a Mohammadi.
            </FadeParagraph>
            <FadeParagraph>
            And also don't lose your aqidah. Well, would send you 2 reels. Ek baari check kar lena 

And if you haven't installed twitter yet, to kar lena, indian embassy ka helpline save kar lena will send you the link.
            </FadeParagraph>
            <FadeParagraph>
            So i think i should end writing or else i will keep writing. 

So in the end, i wish Rabb ul Alamin bestows all the blessings to complete the masters successfully. Al Hafeez protects you from all the difficulties and evils. Gives you a healthy body and mind. As Shafee cures your father. 

So, finally ending. Don't know whether i would get a chance to meet that's why i decided to write. But will always be "GRATEFUL" to you for all the impact. In the future also, if you feel like i am going in the wrong way, kindly correct me. 

Stay safe, dhyan rakhna 

Bye Nabzz 
Fi-Amanillah
            </FadeParagraph>
          </div>
            </div>
          </section>
          
        ) : (
          <section className="w-full py-20 md:py-32 lg:py-48 border-b border-gold/20 bg-hero-pattern bg-cover bg-center">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-8 text-gold">
                SN Enterprises
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
