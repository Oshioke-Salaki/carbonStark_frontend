function LandingBanner() {
  return (
    <div className="bg-white50 text-center text-darkPrimary w-full pt-[83px] pb-[31px] flex flex-col items-center px-5">
      <h1 className="text-[70px] font-extrabold mb-[23px]">
        Blockchain, <span className="text-primaryColor">Carbon,</span> Impact
      </h1>
      <p className="text-black text-lg font-bold mb-[32px]">
        Step into the future of carbon offsetting powered by blockchain. Your
        commitment today shapes a cleaner, more resilient planet
      </p>
      <button className="py-[18px] rounded-[50px] px-[134px] inline-block text-white text-sm font-semibold bg-primaryColor">
        Get started
      </button>
    </div>
  );
}

export default LandingBanner;
