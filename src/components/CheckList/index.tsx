import { useList } from "@/context/ListContext";

const CheckList = () => {
  const { list } = useList();

  return (
    <div className="h-400 overflow-auto flex flex-col gap-20 p-50">
      {list.map((item, index) => (
        <label key={index} className="flex justify-between items-center hover:cursor-pointer hover:text-green">
            <input type="checkbox" className="hidden peer" />
            <span className="ml-2 peer-checked:line-through peer-checked:text-gray-500">{item}</span>
            <div className="w-25 h-25 border-1 border-gray-300 rounded-m peer-checked:bg-green"></div>
          </label>
      ))}
    </div>
  );
};

export default CheckList;
