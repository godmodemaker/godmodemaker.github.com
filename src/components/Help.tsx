import { useEffect } from "react";

const featuresLeft = [
  "Warp to Map",
  "Heal Pokemons",
  "Get any/all Items",
  "Empty Bag",
  "Get any/all pkmns",
  "Fill Storage Boxes",
  "Clear storage boxes",
  "Use PC anywhere",
  "Set player Character",
  "Set Player ID",
  "Set Player Online ID",
];

const featuresRight = [
  "Change Player Outfit*",
  "Set Player Money",
  "Set Player Coins",
  "Set Player Badges",
  "Give a Demo Party",
  "Quick Hatch Eggs",
  "Test Wild Pokemon",
  "Double Wild Pokemon",
  "Test Trainer Battle",
  "Double Trainer Battle",
  "God Speed",
];

const Help = () => {
  useEffect(() => {
    document.title = "Help | God Mode Maker";
  }, []);
  return (
    <div className="w-[90%] md:w-[75%] lg:w-[45%]">
      <div className="h-0 md:h-10"></div>
      <h1 className="text-3xl font-bebasNeue text-center mb-2">Help Area</h1>
      <p className="text-xl text-justify">
        Hi there, this is the Help Area and here you will find help related to
        the God Modes, including What is the God Mode, Why are the links like
        the way they are (and how to get away with them), and Things you must
        not forget before using these Mods!
      </p>
      <h1 className="text-3xl font-bebasNeue text-center mt-8 mb-3">
        What is God Mode?
      </h1>
      <p className="text-xl text-justify mb-4">
        God Mode is the modified version of various pokemon games (like
        Insurgence and Reborn) in which I add a lot of new features which will
        basically allow you to become a God in game. Being a God comes with some
        limits though. You can't do 'everything' you wish but there's a LOT you
        can do with it.
      </p>
      <p className="text-xl text-justify mb-4">
        Here's a brief list of options that the God Mode will allow you to
        perform on the Game (Note: Not all of the God Modes have the Same
        Features but most of them do. Make sure to read the README provided with
        each God Mode):
      </p>
      <div className="flex justify-center">
        <div className="flex justify-center w-full md:w-[70%] lg:w-[90%] xl:w-[70%] 2xl:w-[60%] text-base md:text-lg lg:text-xl">
          <div>
            <ul>
              {featuresLeft.map((item, index) => (
                <li
                  key={index}
                  className="p-2 text-center bg-secondary text-primary m-2 rounded-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {featuresRight.map((item, index) => (
                <li
                  key={index}
                  className="p-2 text-center bg-secondary text-primary m-2 rounded-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bebasNeue text-center mt-8 mb-3">
        What's up with the obnoxious links?
      </h1>
      <p className="text-xl text-justify mb-4">
        The links to download these mods are very shady and I accept that. The
        thing is, I have no other means of getting something out of making these
        God Modes. I have been making it since the time I was in school and now
        I am a college student. I don't get much time nowadays so I basically am
        using my time on these. The links provide me some incentive to keep
        working. Also, they make sure the Mods are free of cost.
      </p>
      <h2 className="text-2xl font-bebasNeue text-center mt-5 mb-3">
        How to deal with those links?
      </h2>
      <p className="text-xl text-justify mb-3">
        While they are usually pretty harmless, I would like to mention some
        things. Make sure you DON'T install any Extension(s) the website offers
        you, Make sure you DON'T accept any Notification Permissions the website
        requests for. And most of all, if the website takes you to some other
        website than the one it is supposed to, use the previous button on your
        browser to go back to the previous page and then try again. The website
        is bad but it works in 3-4 tries at max. If you get stuck at any point,
        feel free to contact me!
      </p>
      <h2 className="text-2xl font-bebasNeue text-center mt-5 mb-3">
        Alternative Solution to Links
      </h2>
      <p className="text-xl text-justify mb-4">
        I have found that using Brave Browser seems to be pretty useful while
        opening these links. I would suggest giving Brave Browser a shot with
        the links to download!
      </p>
      <h1 className="text-3xl font-bebasNeue text-center mt-8 mb-2">
        Most Important Stuff
      </h1>
      <ul className="text-xl text-justify list-disc p-3">
        <li>
          I use 7zip to compress the files and sometimes uncompressing those
          files cannot be done by other software so please use 7zip (it is free
          and fast).
        </li>
        <li>
          Reading the README file provided along the Games files is a MUST DO.
          You actually won't be able to use the God Mode if you don't read the
          README. So, do it.
        </li>
        <li>
          If you find errors, get stuck somewhere (not in a washing machine
          though) or just want to talk to me about the mod, contact me using the
          Contacts section of this web page.
        </li>
        <li>
          Make sure you share this content with other people! It's not easy to
          bring people here :")
        </li>
      </ul>
    </div>
  );
};

export default Help;
