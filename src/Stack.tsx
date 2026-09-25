import type { technologiesTypes } from "./types/technologiesTypes";

const Stack = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}: {
  selectedStack: technologiesTypes[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}) => {
  return (
    <div className=" col-span-1 bg-white rounded-2xl border border-gray-100 shadow-md p-5 grid grid-cols-1 h-fit  ">
      <div className="mb-5">
        <h3 className=" text-base font-bold text-gray-900">Your Stack</h3>
        <p className="text-xs text-gray-400 mt-1">
          {selectedStack.length === 0
            ? "No Techology Selected yet"
            : `${selectedStack.length} Technology Selected`}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {selectedStack.length === 0 && (
          <p className="text-xs text-gray-400 text-center py-4 border border-dotted rounded-2xl">
            Your Stack is Empty
          </p>
        )}
        {selectedStack.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-gray-100 rounded-xl px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.icon}
                alt={item.stackName}
                className="w-6 h-6 object-contain"
              />
              <div>
                <p className="text-[8px] font-medium text-gray-900">
                  {item.stackName}
                </p>
                <p className="text-[8px] text-gray-400">{item.category}</p>
              </div>
            </div>

            <button
              onClick={() => onRemove(item.id)}
              className="text-gray-300 hover:text-gray-500 transitions-color duration-200"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => onRemoveAll()}
        className="w-full text-red-500 border mt-5 border-red-100 rounded-2xl py-2.5 text-xs font-medium hover:bg-red-50 transitions-colors duration-200"
      >
        {" "}
        Remove All
      </button>
    </div>
  );
};

export default Stack;
