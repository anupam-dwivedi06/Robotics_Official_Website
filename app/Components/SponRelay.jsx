import React, { useMemo } from 'react';

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

.logo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(20%) brightness(1.2);
  transition: filter 0.3s ease;
}

.logo-img:hover {
  filter: grayscale(0%) brightness(1);
}
`;

// Updated sponsor data using your provided Cloudinary links
const sponsorData = [
  { name: "Dainik Jagran", src: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766738070/dainikjagran_is8k5u.png" },
  { name: "Hitvada", src: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766738071/hitvada_c8yknq.png" },
  { name: "LIC", src: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766738071/lic_riha2j.jpg" },
  { name: "Made Easy", src: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766738072/madeeasy_gkltzv.png" },
  { name: "Nai Dunia", src: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766738071/naidunia_bkdava.png" },
  { name: "Patrika", src: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766738072/patrika_dksgan.png" },
  { name: "Rao Academy", src: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766738072/raoacademy_rnizxa.png" },
  { name: "The Pioneer", src: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766738072/pioneer_ljgw4h.png" },
  { name: "Robonauts", src: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766738074/robonauts_xj5p72.png" },
];

const SponsorMarquee = () => {
  const scrollDurationSeconds = 30; // Slightly faster for 9 items
  
  // Adjusted sizing: 160px width (w-40) + 32px margin (mx-4) = 192px total
  const itemWidthWithMargin = 160 + 32; 
  const totalItems = sponsorData.length;
  const scrollDistance = totalItems * itemWidthWithMargin;

  const duplicatedSponsors = useMemo(() => 
    [...sponsorData, ...sponsorData], 
    []
  );

  return (
    <>
      <style>{customStyles}</style>
      
      <div 
        className="marquee-container w-full overflow-hidden p-8 bg-gray-900 border-t border-b border-gray-800 shadow-2xl"
        style={{
          '--scroll-distance-px': `${scrollDistance}px`,
          '--negative-scroll-distance-px': `-${scrollDistance}px`,
          '--double-content-width-px': `${scrollDistance * 2}px`,
        }}
      >
        <div 
          className="marquee-inner"
          style={{ animationDuration: `${scrollDurationSeconds}s` }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="flex flex-shrink-0 items-center justify-center w-40 h-20 mx-4 bg-white/5 p-3 rounded-xl backdrop-blur-sm border border-white/10 transition duration-300 transform hover:scale-110"
              title={sponsor.name}
            >
              <img 
                src={sponsor.src} 
                alt={sponsor.name} 
                className="logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SponRelay = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
          Our Partners & Sponsors
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">
          Collaborating with industry leaders to drive innovation and excellence.
        </p>
      </header>

      <div className="w-full max-w-7xl">
        <SponsorMarquee />
      </div>
    </div>
  );
};

export default SponRelay;