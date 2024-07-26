import { useList } from "@/context/ListContext";
import dayUtils from "@/utils/dayUtils";

const ListHeader = () => {
    const { weekday, day, month } = dayUtils();
    const { list } = useList()

    return(
    <div className="border-b-1 px-20 p-10 flex justify-between">
        <div className="flex flex-col">
        <span className="text-25 text-violet-500">{weekday}{day}</span>
        <span className="text-15 text-gray-50">{month}</span>
        </div>
        <span className="mt-20 text-gray-50">{list.length}tasks</span>
    </div>
    )
}

export default ListHeader