function MenuOverlay({ menuList }) {
  return (
    <div className="absolute left-0 mt-7 min-h-full w-full text-center backdrop-blur-lg">
      {menuList.map((item, index) => (
        <h1
          key={index}
          className="mb-6 mt-10 cursor-pointer justify-center text-[24px]
             text-white transition-all duration-300 ease-in-out hover:scale-110"
        >
          {item.title}
        </h1>
      ))}
    </div>
  );
}

export default MenuOverlay;
