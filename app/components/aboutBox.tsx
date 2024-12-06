const AboutBox = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="bg-glass max-w-[152px] h-[122px] text-white p-3 rounded-lg shadow-lg border border-lightest-gray">
      <h2 className="text-sm">{title}</h2>
      <p className="font-semibold text-[30px] mt-10">{value}</p>
    </div>
  );
};

export default AboutBox;
