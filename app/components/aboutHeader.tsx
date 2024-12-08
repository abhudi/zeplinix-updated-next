import React from "react";

const Aboutheader = () => {
  return (
    <div>
      <div className="relative lg:mx-9 mx-4">
        <h1 className="p-4 lg:text-fs-54 text-fs-30 lg:text-left text-justify-center  text-white">
          A <span className="text-primary"> passionate </span> team committed to{" "}
          <br className="hidden lg:block" />
          crafting stunning creations
        </h1>
        <div className="absolute lg:top-[15px] top-[100px] z-[-1] lg:right-[20%] right-[5%]">
          <video
            className="lg:w-[371px] lg:h-[209px] w-[100px] h-[80px] object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/icon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Aboutheader;
