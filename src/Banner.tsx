
import toast from "react-hot-toast";
import bannerImg from "./assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center mx-auto px-12">
      <div className="">
        <h1 className="text-6xl font-popins font-black">Build Your Ideal</h1>
        <h1 className="text-6xl font-black font-popins bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Development Stack
        </h1>
        <p className="my-5">
          Explore frontend, backend, database, and tooling options, <br /> compare them
          side by side, and put together the stack that fits your <br /> next project.
        </p>
        <div className="flex gap-4">
          <button className="bg-linear-to-r from-orange-400 to-pink-400 px-3 py-4 rounded-2xl font-bold text-white  " onClick={()=> toast.success('Successfully toasted!')}>Explore Technologies</button>
          <button className="px-10 py-4 border border-gray-400 rounded-2xl font-bold">Learn More</button>
        </div>
      </div>

      <div>
        <img src={bannerImg} alt="BannerImage" />
      </div>
    </div>
  );
};

export default Banner;
