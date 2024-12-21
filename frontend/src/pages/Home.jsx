import { IoIosPaperPlane } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Flown | Homepage";

  return (
    <>
      <main className="w-full h-screen bg-zinc-950 text-white flex items-center justify-center xl:justify-end flex-col pb-10">
        <div>
          <h1 className="font-semibold text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-center mb-1">
            From Strangers
          </h1>

          <h1 className="font-semibold text-5xl sm:text-7xl lg:text-8xl tracking-tighter mb-1 flex items-center gap-6 justify-center">
            to Soaring
            <span>
              <img
                src="../assets/drone_3d.webp"
                alt="drone"
                className="h-[12vw] md:h-[8vw]"
              />
            </span>
          </h1>

          <h1 className="font-semibold text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-center mb-1">
            Connections
          </h1>
        </div>

        <Link
          to="/letter/send"
          className="bg-fuchsia-500 rounded-2xl px-10 py-5 border border-fuchsia-500 text-black font-bold mt-10 flex items-center gap-2 hover:bg-transparent hover:text-fuchsia-400 duration-300"
        >
          <span>
            <IoIosPaperPlane />
          </span>
          Send letter
        </Link>
      </main>
    </>
  );
};

export default Home;
