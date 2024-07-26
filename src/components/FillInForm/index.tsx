import { KeyboardEvent, MouseEvent, useState } from "react";
import { useList } from "@/context/ListContext";

const FillInForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { addToList } = useList();

  const handleAddToList = () => {
    if (inputValue.trim() !== "") {
      addToList(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e:KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddToList();
    }
  };

  return (
    <div className="absolute bottom-10 left-80 flex gap-20 justify-center mt-30">
      <input
        placeholder="할 일 입력"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="focus:border-green border-1 rounded-s p-5"
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleAddToList}
        className="p-5 rounded-s border-1 text-gray-50 hover:border-green hover:text-green"
      >
        등록
      </button>
    </div>
  );
};

export default FillInForm;