"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Popup {
  id: string;
  x: number;
  y: number;
}

export default function Testimonialmap() {
  const [popups, setPopups] = useState<Popup[]>([]);

  const isOverlapping = (
    x: number,
    y: number,
    existingPopups: Popup[]
  ): boolean => {
    const threshold = 10; // Minimum distance between popups in percentage
    return existingPopups.some((popup) => {
      const distance = Math.sqrt((popup.x - x) ** 2 + (popup.y - y) ** 2);
      return distance < threshold;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let randomX, randomY;

      // Generate random positions until there is no overlap
      do {
        randomX = Math.random() * (20 + 40); // Random X position in %
        randomY = Math.random() * (30 + 40); // Random Y position in %
      } while (isOverlapping(randomX, randomY, popups));

      const id = Math.random().toString(36).substring(2, 9); // Unique ID for popup

      setPopups((prevPopups) => [
        ...prevPopups,
        { id, x: randomX, y: randomY },
      ]);

      // Remove popup after 5 seconds
      setTimeout(() => {
        setPopups((prevPopups) =>
          prevPopups.filter((popup) => popup.id !== id)
        );
      }, 5000);
    }, 1500); // New popup every 1.5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [popups]);

  const popupContent = [
    {
      name: "John Doe",
      title: "CEO of InnovateX",
      description:
        "InnovateX is revolutionizing tech solutions for businesses.",
    },
    {
      name: "Sara Smith",
      title: "Founder of GreenTech",
      description: "GreenTech leads the way in sustainable energy solutions.",
    },
    {
      name: "Tom Harris",
      title: "Co-Founder of Healthify",
      description: "Healthify empowers people to take control of their health.",
    },
    // Add more content as needed
  ];
  return (
    <>
      <div className="text-center">
        <h1 className="text-fs-54">Over 1000+ people trust us</h1>
        <p className="text-fs-16 mt-1">
          Clarity gives you the blocks & components you need to create a truly
          professional <br className="sm:hidden lg:block" /> website, landing
          page, or admin panel for your SaaS.
        </p>
      </div>
      <div className="flex items-center justify-center  bg-black">
        {/* Map Container */}
        <div className="relative w-[90%] max-w-5xl aspect-video mt-20">
          {/* Map Image */}
          <Image
            src="/homepage/map.svg"
            alt="World Map"
            className="w-full h-full object-contain"
            width={100}
            height={100}
          />
          <div
            className="absolute w-[100%] inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(230,_57,_70,_0.24)_0%,_rgba(128,_32,_39,_0)_100%)]"
            style={{
              zIndex: "1", // Make sure it’s behind the map
            }}
          ></div>
          {/* Popups */}
          {popups.map((popup, index) => {
            const { name, title, description } =
              popupContent[index % popupContent.length]; // Cycle through the content array

            return (
              <div
                key={popup.id}
                className="absolute flex w-[225px] h-[149px] flex-col items-center bg-glass text-white p-3 shadow-lg text-xs animate-pop border-0.4 border-light-gray"
                style={{
                  left: `${popup.x}%`,
                  top: `${popup.y}%`,
                  transform: "translate(-50%, -50%)",
                  backdropFilter: "blur(2px)", // Apply background blur
                  WebkitBackdropFilter: "blur(2px)", // Support for Safari
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <p className="font-semibold">{name}</p>
                <p className="text-[10px]">{title}</p>
                <p className="mt-1 text-gray-300">{description}</p>
                {/* Add small circle at the lower-right corner */}
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "18px",
                    height: "18px",
                    bottom: "0", // Align with the bottom of the popup
                    right: "0", // Align with the right of the popup
                    background: "#E63946",
                    border: "2px solid #FBCACE",
                    zIndex: "-1", // Place it behind the popup
                    transform: "translate(50%, 50%)", // Move half outside the popup
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
