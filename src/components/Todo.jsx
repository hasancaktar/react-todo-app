import {RiDeleteBin5Fill} from "react-icons/ri";
import {MdOutlineModeEdit} from "react-icons/md";

export default function Todo() {
    return (
        <div className="flex justify-between items-center border p-5">
            <div>İlk not</div>
            <div className="flex gap-3">
                <RiDeleteBin5Fill size={20} cursor="pointer"/>
                <MdOutlineModeEdit size={20} cursor="pointer"/>
            </div>
        </div>
    )
}
