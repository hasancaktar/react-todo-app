import {RiDeleteBin5Fill} from "react-icons/ri";
import {MdOutlineModeEdit} from "react-icons/md";
import {useState} from "react";
import {FaCheck} from "react-icons/fa";

export default function Note({note, removeNote , updateNote}) {

    const [editNote, setEditNote] = useState(false)
    let [text, setText] = useState(note.text);
    const remove = () => {
        console.log("1111")
        removeNote(note.id);
    }

    const handleEdit = () => {
        setEditNote(true);
        setText(note.text);
    };

    const handleUpdate = () => {
        updateNote({ ...note, text });
        setEditNote(false);
    };

    const handleChange = (e) => {
        setText(e.target.value);
        e.target.style.height = "50px"; // İlk başta yüksekliği sıfırlıyoruz
        e.target.style.height = `${e.target.scrollHeight}px`; // İçeriğe göre yüksekliği ayarlıyoruz
    };
    return (
        <div className="flex flex-col border p-5 my-4 rounded-lg shadow-md bg-gray-300">
            {!editNote ? (
                <div className="max-w-full break-words overflow-hidden text-gray-800 p-2 bg-gray-100 rounded-md">
                    {note.text}
                </div>
            ) : (
                <textarea
                    className="border p-2 w-full rounded-md min-h-[50px] bg-green-100 resize-none overflow-hidden"
                    value={text}
                    onChange={handleChange}
                    placeholder="Not gir"
                    rows="5"
                    style={{ overflowY: 'hidden' }}
                />
            )}
            <div className="flex gap-3 mt-3 self-end">
                <RiDeleteBin5Fill size={20} cursor="pointer" onClick={remove} />
                {!editNote ? (
                    <MdOutlineModeEdit size={20} cursor="pointer" onClick={handleEdit} />
                ) : (
                    <FaCheck size={20} cursor="pointer" onClick={handleUpdate} />
                )}
            </div>
        </div>
    );


}
