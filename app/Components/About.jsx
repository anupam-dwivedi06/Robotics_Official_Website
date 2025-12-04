
const About = () => {
  return (
    
    <section className=" py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* === Header Section === */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-white font-bold tracking-tight">
            About <span className="text-indigo-400">Us</span>
          </h1>
          <div className="w-20 h-1 bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          
          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            {/* 💡 Use a placeholder image source for cleaner code. 
                Apply styling for rounded corners and shadow.
            */}
            <img 
                src="https://via.placeholder.com/600x400.png?text=Our+Team" 
                alt="Image representing the company team or values"
                className="rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] max-w-full h-auto"
            />
          </div>

          {/* Text Content Container */}
          <div className="w-full md:w-1/2 text-white"> 
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
                Our Mission & Vision
            </h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              **Lorem ipsum** dolor sit amet consectetur adipisicing elit. Soluta accusamus ducimus a est voluptas, deleniti culpa quae, pariatur vero magni ut quam sapiente nesciunt nihil facere ea, blanditiis debitis facilis. We are committed to delivering excellence and innovation in all our endeavors.
            </p>
            <p className="leading-relaxed text-gray-300">
              Itaque eum autem illum, nostrum debitis recusandae nemo eveniet ipsam soluta? Amet, doloremque? Pariatur assumenda est obcaecati aut, sapiente fuga atque accusantium? Our vision is to be a leader in the industry, recognized for our quality and dedication to our clients.
            </p>
        
            {/* <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg">
                Learn More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;