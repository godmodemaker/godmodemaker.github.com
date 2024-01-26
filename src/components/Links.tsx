import { useEffect } from "react";

const Links = () => {
  useEffect(() => {
    document.title = "Contact | God Mode Maker";
  }, []);
  return (
    <div>
      <div className="h-0 md:h-10"></div>
      <h1 className="text-3xl font-bebasNeue text-center mb-2">Contact</h1>
      <div className="flex justify-center">
        <div className="w-[100%]">
          <a href="https://discord.gg/PYmJBmTGYF" target="_blank">
            <button className="bg-secondary w-full text-2xl uppercase text-primary mb-3 p-2 rounded-lg">
              <svg
                className="h-5 inline fill-primary mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 127.14 96.36"
              >
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Discord
            </button>
          </a>
          <a href="https://www.youtube.com/GodModeMaker" target="_blank">
            <button className="bg-secondary w-full text-2xl uppercase text-primary p-2 rounded-lg">
              <span className="fa fa-youtube-play mr-2"></span>YouTube
            </button>
          </a>
        </div>
      </div>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bebasNeue text-center mb-2">Donate</h1>
      <div className="flex justify-center">
        <div className="w-[100%]">
          <a href="https://www.patreon.com/desron" target="_blank">
            <button className="bg-secondary w-full text-2xl uppercase text-primary mb-3 p-2 rounded-lg">
              <svg
                className="h-5 inline fill-primary mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1080 1080"
              >
                <path
                  d="M1033.05,324.45c-0.19-137.9-107.59-250.92-233.6-291.7c-156.48-50.64-362.86-43.3-512.28,27.2
	C106.07,145.41,49.18,332.61,47.06,519.31c-1.74,153.5,13.58,557.79,241.62,560.67c169.44,2.15,194.67-216.18,273.07-321.33
	c55.78-74.81,127.6-95.94,216.01-117.82C929.71,603.22,1033.27,483.3,1033.05,324.45z"
                />
              </svg>
              Patreon
            </button>
          </a>
          <a href="https://www.buymeacoffee.com/clearlyahuman" target="_blank">
            <button className="bg-secondary w-full text-2xl uppercase text-primary p-2 rounded-lg">
              <span className="fa fa-coffee mr-2"></span>Buy Me A Coffee
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
