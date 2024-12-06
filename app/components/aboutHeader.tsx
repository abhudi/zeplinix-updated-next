import React from "react";

const Aboutheader = () => {
  return (
    <div>
      <div className="relative mx-9">
        <h1 className="p-4 text-fs-54 text-left  text-white">
          A <span className="text-primary"> passionate </span> team committed to{" "}
          <br />
          crafting stunning creations
        </h1>
        <div className="absolute top-[15px] z-[-1] right-[20%]">
          <video
            className="w-[371px] h-[209px] object-cover"
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
