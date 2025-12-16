import React, { useMemo } from 'react';
import { RefreshCcw, Zap, Heart, Star, Cloud, Send } from 'lucide-react';

// Define the custom CSS for the scrolling animation using a <style> tag
const customStyles = `


@keyframes marquee-scroll-ltr {
  from {
    transform: translateX(var(--negative-scroll-distance-px)); 
  }
  to {
    
    transform: translateX(0); 
  }
}


.marquee-inner {
  display: flex;
  
  animation: marquee-scroll-ltr linear infinite;
  animation-play-state: running;
  
  width: var(--double-content-width-px); 
}

.marquee-container:hover .marquee-inner {
  animation-play-state: paused;
}
`;

// Array of placeholder sponsor data (using lucide-react icons instead of image URLs)
const sponsorData = [
  { name: "Apex Dynamics", icon: Zap, color: "text-red-500" },
  { name: "Starlight Corp", icon: Star, color: "text-yellow-500" },
  { name: "Heartland", icon: Heart, color: "text-pink-500" },
  { name: "CloudStream", icon: Cloud, color: "text-blue-500" },
  { name: "Refresh Labs", icon: RefreshCcw, color: "text-green-500" },
  { name: "Messenger Co.", icon: Send, color: "text-indigo-500" },
];


const SponsorMarquee = () => {
  const scrollDurationSeconds = 40; // Controls the speed of the scroll
  
  // CRITICAL: Precise calculation of item width based on Tailwind classes:
  // w-32 = 128px
  // mx-4 = 16px left + 16px right = 32px
  const itemWidthWithMargin = 128 + 32; // 160px
  
  const totalItems = sponsorData.length;
  
  // The exact distance the inner container must travel to complete one seamless loop.
  const scrollDistance = totalItems * itemWidthWithMargin; // 6 * 160 = 960px

  // We duplicate the list to ensure the loop is seamless.
  const duplicatedSponsors = useMemo(() => 
    [...sponsorData, ...sponsorData], 
    []
  );

  return (
    <>
      {/* Inject custom CSS variables for dynamic animation control */}
      <style>{customStyles}</style>
      
      {/* Marquee Container - sets the visible window and overflow: hidden */}
      <div 
        className="marquee-container w-full overflow-hidden p-6 bg-gray-900 border-t border-b border-gray-700 shadow-xl rounded-lg"
        style={{
          // Pass calculated pixel values to CSS
          '--scroll-distance-px': `${scrollDistance}px`,
          '--negative-scroll-distance-px': `-${scrollDistance}px`, // Variable for the LTR start point
          '--double-content-width-px': `${scrollDistance * 2}px`,
        }}
      >
        <div 
          className="marquee-inner"
          style={{
            animationDuration: `${scrollDurationSeconds}s`,
            // animationDirection is omitted (defaults to 'normal') as the keyframes now define the LTR movement perfectly.
          }}
        >
          {/* Render the duplicated list of sponsors */}
          {duplicatedSponsors.map((sponsor, index) => {
            const Icon = sponsor.icon;
            return (
              <div 
                key={index} 
                className="flex flex-shrink-0 items-center justify-center w-32 h-16 mx-4 bg-gray-800/50 rounded-lg transition duration-300 transform hover:scale-105"
                title={sponsor.name}
              >
                <Icon className={`w-8 h-8 ${sponsor.color}`} />
                <span className="text-xs text-gray-400 ml-2 font-medium hidden sm:inline">{sponsor.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// Main App Component
const SponRelay = () => {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-4 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Our Valued Partners
        </h1>
        <p className="text-lg text-gray-400">
          The companies fueling our mission. Hover over the logos to pause the scroll!
        </p>
      </header>

      <div className="w-full max-w-7xl">
        <SponsorMarquee />
      </div>
    </div>
  );
};

export default SponRelay;