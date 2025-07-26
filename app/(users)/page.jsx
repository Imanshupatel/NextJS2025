"use client"

import Image from "next/image";

const Home = () => {
  return (
    <>
      <h1 className="font-roboto mt-10 ml-13 z-2 relative">
        Welcome, To My BattleGround Mobile Multiplayers Online Game.
      </h1>
      <button
        className="bg-amber-400 text-black p-1 ml-13 my-2 z-2 relative"
        onClick={() => alert("Let's Play BGMI")}
      >
        Click Me
      </button>
      <Image className="absolute top-0 right-0 left-0 bottom-0 z-1" style={{ objectFit: "cover" }} fill={true}
        src="/cover.jpg"
        alt="image"
      />
    </>
  );
};

export default Home;