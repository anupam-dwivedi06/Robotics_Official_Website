"use client";

import { motion } from "framer-motion";

const PastEvent = () => {
  const events = [
    {
      id: 1,
      name: "AUTOMAX 4.0",
      des: "A hands-on workshop expanding beyond fundamentals with AI and ML, where participants built gesture-controlled cars blending robotics with intelligent systems.",
      imgSrc: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766763554/automax4_f2amhx.jpg",
    },
    {
      id: 2,
      name: "ROBOFIESTA 2025",
      des: "A technical showcase where students compete in high-stakes challenges like RoboRace, MazeRush, Cadathon, and Barricade Breakers.",
      imgSrc: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766763554/robofiesta25_uokgyw.webp",
    },
    {
      id: 3,
      name: "CYBERPUNK",
      des: "A robotics sports showdown combining soccer, archery, and sumo bot battles in a high-pressure arena demanding smart engineering.",
      imgSrc: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766763553/cyberpunk_cp8ktq.jpg",
    },
    {
      id: 4,
      name: "MAKE-a-THON",
      des: "A rapid prototyping contest where teams used robotics kits and countdown timers to solve real-world problems through creative collaboration.",
      imgSrc: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766763553/makeathon_awvrsb.jpg",
    },
    {
      id: 5,
      name: "AUTOMAX 3.0",
      des: "A massive workshop and competition for 500+ students from Bhopal, focusing on hands-on electronics and mechanics challenges.",
      imgSrc: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766763553/automax3_bsi98x.webp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden" id="pastevent">
      <div className="container mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-30"
        >
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Past Events</span>
          </h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center
    gap-x-10 gap-y-28"
        >
          {events.map((eventItem, index) => {
            // Determine if the index is even (0, 2, 4) or odd (1, 3)
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={eventItem.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-800/60 p-5 rounded-xl flex flex-col w-full max-w-sm relative min-h-[400px] shadow-2xl backdrop-blur-sm border border-indigo-500/30 transition-shadow duration-300 mt-10 hover:shadow-indigo-500/20 hover:border-indigo-400"
              >
                {/* Image Visual with Alternating Scroll Directions */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="bg-gray-700 w-[85%] absolute aspect-video rounded-lg overflow-hidden top-[-60px] left-1/2 transform -translate-x-1/2 shadow-[10px_-10px_40px_10px_rgba(144,83,232,0.4)] z-10 border border-white/10"
                >
                  <motion.img
                    src={eventItem.imgSrc}
                    alt={eventItem.name}
                    // Use object-top for even and object-bottom for odd to start at opposite ends
                    className={`w-full h-auto absolute left-0 ${isEven ? 'top-0' : 'bottom-0'}`}
                    animate={{
                      // If even: starts at top (0) moves to bottom (-50%)
                      // If odd: starts at bottom (0) moves to top (50% because it's bottom-aligned)
                      y: isEven ? ["0%", "-50%", "0%"] : ["0%", "50%", "0%"]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Text Content */}
                <div className="mt-[130px] text-white flex flex-col space-y-3">
                  <h4 className="text-2xl font-bold text-indigo-400">{eventItem.name}</h4>
                  <p className="p-2 text-gray-300 text-sm md:text-base leading-relaxed">{eventItem.des}</p>
                  <a href={`/events/${eventItem.id}`} className="group text-sm text-purple-400 font-medium hover:text-purple-300 transition mt-2 inline-flex items-center">
                    View Gallery
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PastEvent;