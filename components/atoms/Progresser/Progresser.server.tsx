import next from "next";

const Progresser = ({ progress }: { progress: number }) => {
  return (
    <div
      className="bg-[#3D3D3F] rounded-lg h-2 w-full"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
    >
      <div
        style={{ width: `${progress}%` }}
        className="bg-gradient h-2 rounded-l-lg transition-all duration-300"
      ></div>
    </div>
  );
};

export default Progresser;
