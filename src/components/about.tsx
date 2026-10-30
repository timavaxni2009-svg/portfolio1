export default function AboutSection() {
  return (
    <section id="about" className="bg-[#202020] p-14 relative overflow-hidden">
      
      <div className="absolute top-4 text-8xl font-black select-none text-white/[0.03]">
        ABOUT ME
      </div>

      <div className="relative z-10">
        
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">👤 About Me</h2> 
        </div>

        <p className="text-gray-400 text-sm md:text-base mb-10 max-w-4xl">
          Hello, I'm Akshay Handge Creative Graphic Designer & User Experience
          Designer based in Website, I create digital Products a more Beautiful
          and usable place. This is Photoshop's version of Lorem Ipsum. Proin
          gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
          bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
          elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">
              Personal Details
            </h3>
            
            <ul className="text-sm text-gray-400 space-y-3">
              <li className="flex items-center">
                <span className="w-28 font-medium">Full Name</span>
                <span className="text-gray-300">: Akshay Handge</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}