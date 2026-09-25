
import { use } from "react";
import type { technologiesTypes } from "./types/technologiesTypes";

const Technologies = ({
  techPromise,
  selectedStack,
  onAdd,
}: {
  techPromise: Promise<technologiesTypes[]>;
  selectedStack: technologiesTypes[];
  onAdd: (tech: technologiesTypes) => void;
}) => {
  const allTech = use(techPromise);
  console.log(allTech);

  return (
    <div className="col-span-3 grid grid-cols-3 gap-5">
      {allTech.length === 0 && <p>No tech Found</p>}
      {allTech.map((tech) => {
        const isAdded = selectedStack.some((item) => item.id === tech.id);
        return (
          <div
            key={tech.id}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col gap-4"
          >
            <div className=" flex items-start justify-between">
              <img
                src={tech.icon}
                alt={tech.stackName}
                className="w-10 h-10 object-contain"
              />
              <span className="bg-blue-50 text-blue-500 text-[10px] font-medium px-3 py-1 rounded-full">
                {tech.badge}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-[15px]">
              {tech.stackName}
            </h3>
            <p className="text-[8px] text-gray-500 leading-relaxed">
              {tech.stackDesc}
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-[8px]">
                {tech.category}
              </span>
              <span className="text-gray-500 text-[8px]">
                {tech.difficulty}
              </span>
              <span className="flex items-center gap-1 text-gray-700 ml-auto">
                <span className="text-[10px] font-medium">⭐{tech.rating}</span>
              </span>
            </div>
            <button
              onClick={() => onAdd(tech)}
              disabled={isAdded}
              className={`w-full text-[12px] font-medium py-3 rounded-2xl transition-colors duration-200 ${
                isAdded
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {isAdded ? "Added" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
