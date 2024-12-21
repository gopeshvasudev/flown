const Home = () => {
  document.title = "Flown | Homepage";

  return (
    <>
      <main className="w-full h-screen bg-zinc-950 text-white flex">
        <div className="w-full xl:w-[60%] h-full flex flex-col justify-center xl:justify-end pb-16 items-center xl:items-start px-2 xl:pl-10">
          <h1 className="font-semibold text-5xl lg:text-[12vh] tracking-tighter text-center lg:text-start mb-2">
            From Strangers
          </h1>
          <h1 className="font-semibold text-5xl lg:text-[12vh] tracking-tighter text-center lg:text-start mb-2">
            to Soaring
          </h1>
          <h1 className="font-semibold text-5xl lg:text-[12vh] tracking-tighter text-center lg:text-start mb-2">
            Connections
          </h1>

          <button className="bg-fuchsia-500 rounded-full px-10 py-5 text-black font-bold mt-10">
            Send letter
          </button>
        </div>

        <div className="hidden xl:flex w-[40%] h-full bg-fuchsia-500"></div>
      </main>
    </>
  );
};

export default Home;
