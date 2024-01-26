import { useEffect } from "react";

interface Props {
  setCurrentPage: (pageName: string) => void;
}

const Home = ({ setCurrentPage }: Props) => {
  useEffect(() => {
    document.title = "Home | God Mode Maker";
  }, []);
  return (
    <div className="w-[90%] md:w-[75%] lg:w-[45%]">
      <div className="h-0 md:h-10"></div>
      <h1 className="text-3xl font-bebasNeue text-center">God Mode Maker</h1>
      <p className="pt-2 text-lg text-justify">
        This is the official website for those Mods that give you Godly Powers
        in those Pokemon Games you like! This project has been started to help
        people only. I never started this for any malicious purposes, some times
        we like when there are no limits on us so leave us alone :')
      </p>
      <div className="h-10"></div>
      <h1 className="text-3xl font-bebasNeue text-center">Where to go next?</h1>
      <p className="pt-2 text-lg text-justify">
        For people coming to my website for the first time, I would suggest
        going to the "Help Area" Page (It has everything you would need to know)
        and people who already know the drill, head on to the God Modes!
      </p>
      <div className="flex justify-center mt-3 md:mt-0 lg:mt-3">
        <button
          onClick={() => setCurrentPage("GodModes")}
          className="mr-8 uppercase bg-secondary text-primary px-5 py-2 rounded-lg"
        >
          God Modes
        </button>
        <button
          onClick={() => setCurrentPage("Help")}
          className="uppercase bg-highlight text-secondary px-5 py-2 rounded-lg"
        >
          Help Area
        </button>
      </div>
      <div className="h-10"></div>
      <h1 className="text-3xl font-bebasNeue text-center">
        Feeling Generous? Like my work?
      </h1>
      <p className="pt-2 text-lg text-justify">
        My work does take a lot of time and I am currently a student so if you
        can, consider donating on my Patreon or Buy me a Coffee from the{" "}
        <a
          onClick={() => setCurrentPage("Links")}
          className="underline hover:cursor-pointer"
        >
          Links Page
        </a>{" "}
        of this website :D
      </p>
    </div>
  );
};

export default Home;
