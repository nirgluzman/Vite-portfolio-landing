function Hero() {
  return (
    <div className="grid grid-cols-1 items-center pt-10 md:grid-cols-2">
      <div className="mb-10">
        <p className="text-[13px] text-white">
          HELLO THERE, WELCOME TO MY SITE
        </p>
        <p className="text-[40px] font-bold text-white">I'm Nir Gluzman</p>
        <p className="text-[40px] font-bold text-red-500">
          I'm Full Stack Developer
        </p>
        <p className="text-[40px] font-bold text-white">
          & Expert Cloud Architect
        </p>
        <div className="mt-4 flex gap-4">
          <button
            className="rounded-full border-[2px] bg-red-500 px-3 py-2
             pb-2 text-[12px] text-white hover:border-white"
          >
            SEE PORTFOLIO
          </button>
          <button
            className="rounded-full border-[2px] bg-red-500 px-3 py-2
             pb-2 text-[12px] text-white hover:border-white"
          >
            CONTACT ME
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="h-[320px] w-[250px] rounded-[20px] bg-gradient-to-b from-[#FF004D] to-[#2A26B8]  p-2">
          <img
            src="https://media.istockphoto.com/id/1167772639/photo/handsome-man-smiling-cheerful-with-a-big-smile-on-face-showing-teeth-positive-and-happy.jpg?s=170667a&w=0&k=20&c=x0y3nZ8G7mSOg5LYx_GWOxnzijCBLGj8h_aGIRe16fk="
            className="h-full w-[250px] rounded-[20px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
