const Footer = () => {
  return (
    // Use <section> or <footer> for semantic HTML
    <footer className=" py-16 md:py-24">
      {/* Container for Centering and Max Width */}
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Contact Us Header */}
        <div className="text-white text-center text-3xl md:text-5xl font-extrabold mb-12 md:mb-16">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Get In Touch
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          
          {/* Left Section: Contact Form */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 p-0">
            <form action="Submit" className="flex flex-col gap-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="text-gray-300 block mb-2 text-lg font-medium">Full Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  // Enhanced Input Styling: Dark background, border, padding, full width, hover effect
                  className="bg-gray-800 text-white w-full py-3 px-4 rounded-xl 
                             border border-gray-700 focus:border-indigo-500 focus:ring-1 
                             focus:ring-indigo-500 transition duration-200 placeholder-gray-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* E-mail Input */}
              <div>
                <label htmlFor="email" className="text-gray-300 block mb-2 text-lg font-medium">Email Address</label>
                <input 
                  id="email"
                  name="email"
                  type="email" // Changed type to email for better mobile keyboard and validation
                  className="bg-gray-800 text-white w-full py-3 px-4 rounded-xl 
                             border border-gray-700 focus:border-indigo-500 focus:ring-1 
                             focus:ring-indigo-500 transition duration-200 placeholder-gray-500"
                  placeholder="name@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="msg" className="text-gray-300 block mb-2 text-lg font-medium">Message</label>
                <textarea // Changed <input type="text"> to <textarea> for multi-line input
                  id="msg"
                  name="msg"
                  rows="4" // Set initial height using rows
                  className="bg-gray-800 text-white w-full py-3 px-4 rounded-xl 
                             border border-gray-700 focus:border-indigo-500 focus:ring-1 
                             focus:ring-indigo-500 transition duration-200 resize-none placeholder-gray-500"
                  placeholder="Tell us about your query..."
                />
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" // Set type to submit
                className="
                  text-white bg-gradient-to-r from-purple-600 to-indigo-500 
                  px-2 py-3 w-40 rounded-xl font-bold text-lg mt-4 
                  hover:shadow-lg hover:shadow-indigo-500/50 
                  transition duration-300 transform hover:scale-[1.02]"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Right Section: Map */}
          <div className="w-full md:w-1/2 shadow-2xl rounded-xl overflow-hidden">
            <iframe
              // Note: This URL must be changed to your actual campus location map embed URL
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117764.55018658822!2d77.34680872856525!3d23.23595217436034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4587c4854f3b%3A0x6b42b662df94d6c4!2sMANIT!5e0!3m2!1sen!2sin!4v1703610991978!5m2!1sen!2sin"
              className="w-full h-[400px] md:h-full min-h-[400px]" // Ensure full height on desktop
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        
        {/* Footer Bottom Line (Optional) */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Robotics Club MANIT. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;