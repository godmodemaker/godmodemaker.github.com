interface Props {
  setCurrentPage: (pageName: string) => void;
}

const buttons = [
  { name: "Home", icon: "fa-home" },
  { name: "GodModes", icon: "fa-folder" },
  { name: "Help", icon: "fa-question" },
  { name: "Links", icon: "fa-link" },
  { name: "About", icon: "fa-user" },
];

export default function NavigationBar({ setCurrentPage }: Props) {
  return (
    <>
      <nav className="font-robotoCondensed h-12 bg-secondary w-[100%] md:fixed text-primary grid place-items-center top-0 overflow-x-auto md:overflow-hidden">
        <div className="sm:w=[100%] md:w-[75%] lg:w-[55%] flex">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(button.name)}
              className="uppercase hover:bg-highlight px-3 py-1 rounded-lg hover:text-secondary"
            >
              <i className={`fa ${button.icon} mr-2 hidden md:inline`}></i>
              {button.name}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage("Home")}
            className="ml-auto uppercase hidden md:inline"
          >
            GodModeMaker
          </button>
        </div>
        <div className="hidden md:block w-6 h-full bg-gradient-to-r from-secondary via-secondary to-transparent absolute top-0 right-0"></div>
      </nav>
    </>
  );
}
