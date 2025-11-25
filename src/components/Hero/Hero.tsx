const Hero = () => {
  return (
    <section className="h-screen relative">
      <img
        className="h-full w-full object-cover rounded-b-[16px]"
        alt="hero-page"
        src="./images/hero.png"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-[40px] flex-col">
        <h1 className="text-krub text-[50px] leading-normal tracking-[-0.01em] font-light">
          Portraits that tell <span className="font-bold">your</span> story
        </h1>
        <h3 className="text-krub font-light text-[32px] tracking-[-0.01em] leading-normal">
          Handmade Only
        </h3>

        <button className="blue-btn px-[27px] py-[18px] text-mont text-[22px]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
