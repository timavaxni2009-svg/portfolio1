export default function Sidebar() {
  return (
    <aside className="w-full bg-[#202020] flex flex-col">
      
      <div className="w-full h-[215px]">
       
      </div>


      <div className="text-center bg-[#2c2c2c] pt-6 pb-4 px-4">
        <h1 className="text-3xl font-serif text-white mb-2">
          Akshay Handge
        </h1>
        <p className="text-xs text-gray-400">
          <span className="text-[#2CA3FA]">UI/UX Designer</span> in Dewas
        </p>
      </div>

      <div className="flex justify-center gap-3 py-4">
        
      </div>

      <hr className="border-[#333] my-2" />

      <div className="px-6 py-6 text-sm text-gray-400">
        <h3 className="text-white font-bold mb-3 uppercase text-xs">
          What's in my mind
        </h3>
        <p className="text-xs">
          We can develop and design anything beyond your imagination. About our
          work, we don't say anything because our work speaks. For more, you can
          ask our clients and they will tell you how much satisfied they are with
          our services. So, what are you waiting for?
        </p>
      </div>
        <hr className="border-[#333] my-2" />
      <div className="px-6 justify-center flex items-center pb-8 py-8">
        <button className="w-1/2 bg-[#2CA3FA] text-white  font-sm py-3 flex items-center justify-center gap-2">
            <p>💾 Download CV</p>
        </button>
      </div>
    </aside>
  );
}