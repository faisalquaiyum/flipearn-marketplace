import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/marketplace?search=${input}`);
  };

  return (
    <>
      <div className="pb-8 md:pb-12">
        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-indigo-300 blur-[100px] opacity-30"></div>

          {/* Avatars + Stars */}
          <div className="flex items-center mt-24">
            <div className="flex -space-x-3 pr-3">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user1"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user2"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user5"
                className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]"
              />
            </div>

            <div>
              <div className="flex ">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-transparent fill-indigo-600"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-gray-700">Used by 10,000+ users</p>
            </div>
          </div>

          {/* Headline + Search */}
          <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
            Buy and Sell your socials{" "}
            <span className=" bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent text-nowrap">
              profiles{" "}
            </span>{" "}
            online.
          </h1>

          <p className="max-w-md text-center text-base my-7">
            {" "}
            A secure marketplace to buy and sell Instagram, YouTube, Twitter,
            Telegram and more - fast, safe and hassle-free.
          </p>

          {/* Search Box - Updated */}
          <form
            onSubmit={onSubmitHandler}
            className="w-full max-w-3xl mt-2 px-1 sm:px-0"
          >
            <div className="relative flex flex-col gap-2 bg-white rounded-2xl shadow-lg border border-gray-200 p-2 sm:flex-row sm:items-center sm:gap-0 sm:overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Instagram account"
                className="w-full min-w-0 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-base text-gray-700 placeholder-gray-400 outline-none transition focus:border-indigo-400 focus:bg-white sm:flex-1 sm:border-0 sm:bg-transparent sm:px-6 sm:py-4 sm:text-lg"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition-all duration-200 cursor-pointer hover:bg-indigo-700 sm:mx-1.5 sm:w-auto sm:whitespace-nowrap sm:px-8 sm:py-4"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
