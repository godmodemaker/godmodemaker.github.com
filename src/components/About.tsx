import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About | God Mode Maker";
  }, []);

  return (
    <div className="w-[90%] md:w-[75%] lg:w-[45%]">
      <div className="h-0 md:h-10"></div>
      <h1 className="text-3xl font-bebasNeue text-center mb-2">About Me</h1>
      <p className="text-xl text-justify">
        I am just a student with some knowledge about programming and reverse
        engineering. These Pokemon Fan Games are my favorite and the God Modes I
        create aren't actually for "cheating" but for having fun. There are
        times when we like to break away from our shackles and be free with no
        limits. We don't hurt anyone, we just like to be free of rules. And
        that's why God Modes were created! To simply have fun!
      </p>
    </div>
  );
};

export default About;
