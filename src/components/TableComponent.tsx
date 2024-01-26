import { useState } from "react";
import godModeList from "./data";

interface Props {
  name: string;
  version: string;
  lastUpdated: string;
  linkPrimary: string;
  linkSecondary: string;
}

function sortByLastUpdatedDescending(dataArray: Props[]): Props[] {
  function compareDates(a: Props, b: Props): number {
    const dateA = new Date(a.lastUpdated.split("-").reverse().join("-"));
    const dateB = new Date(b.lastUpdated.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime();
  }
  dataArray.sort(compareDates);
  return dataArray;
}

const TableRow = ({
  name,
  version,
  lastUpdated,
  linkPrimary,
  linkSecondary,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <tr
        className="cursor-pointer hover:bg-highlight even:bg-[#C7D4C2]"
        onClick={openModal}
      >
        <td className="p-2">{name}</td>
        <td className="p-2">{version}</td>
        <td className="p-2">{lastUpdated}</td>
      </tr>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#262626AA]">
          <div className="absolute w-96 bg-white border rounded shadow-lg z-50 bg-primary">
            <div className="flex justify-between bg-secondary text-primary py-2 px-3">
              <span className="uppercase">Download Links</span>
              <button className="text-gray-500" onClick={closeModal}>
                <span className="fa fa-times"></span>
              </button>
            </div>
            <div className="p-3">
              <p>Name: {name}</p>
              <p>Version: {version}</p>
              <p>Last Updated: {lastUpdated}</p>
              <div className="mt-4 flex justify-between">
                <button
                  className="mr-2 px-4 py-2 bg-blue-500 text-white bg-highlight rounded-lg w-full"
                  onClick={() => handleButtonClick(linkPrimary)}
                >
                  Primary
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 text-white bg-highlight rounded-lg w-full"
                  onClick={() => handleButtonClick(linkSecondary)}
                >
                  Secondary
                </button>
              </div>
            </div>
          </div>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
            onClick={closeModal}
          ></div>
        </div>
      )}
    </>
  );
};

const TableComponent = ({ searchInput }: { searchInput: string }) => {
  const jsonData = sortByLastUpdatedDescending(godModeList);
  // Filter the data based on the search input
  const filteredData = jsonData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <table className="table-auto w-full text-lg md:text-xl">
      <thead className="bg-secondary text-primary">
        <tr className="text-left">
          <th className="p-2">Name</th>
          <th className="p-2">Version</th>
          <th className="p-2">Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <TableRow key={index} {...item} />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
