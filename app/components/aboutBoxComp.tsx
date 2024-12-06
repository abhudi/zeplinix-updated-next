import AboutBox from "./aboutBox";

const AboutBoxComp = () => {
  const data = [
    { title: "Trusted clients", value: "24+" },
    { title: "Happy users", value: "50+" },
    { title: "Global Reach", value: "12+" },
    { title: "Projects Delivered", value: "100+" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left Column with Boxes */}
      <div className="flex flex-col gap-6 w-full md:w-1/3">
        {data.slice(0, 2).map((item, index) => (
          <AboutBox key={index} title={item.title} value={item.value} />
        ))}
        <div className="flex flex-col gap-6">
          {data.slice(2).map((item, index) => (
            <AboutBox key={index} title={item.title} value={item.value} />
          ))}
        </div>
      </div>

      {/* Right Column with Content */}
      <div className="w-full md:w-2/3">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Some Content Here</h2>
          <p className="mt-4 text-gray-700">
            This is a placeholder for the content that will go on the right side
            of the layout. You can replace this with any content such as text,
            images, or even another component.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBoxComp;
