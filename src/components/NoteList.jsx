import { useEffect, useRef } from "react";
import Note from './Note';

export default function NoteList({ notes, removeNote, updateNote }) {

    const sortedNotes = [...notes].reverse((a, b) => b.index - a.index);
    const listRef = useRef(null);
    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = 0;
        }
    }, [notes]);

    return (
        <div
            className="overflow-y-auto h-svh mb-5 "  ref={listRef}
        >
            {sortedNotes.map((note) => (
                <Note key={note.id} note={note} removeNote={removeNote} updateNote={updateNote} />
            ))}
        </div>
    );
}
