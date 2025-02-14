import { useState, useEffect, useRef } from "react";
import NoteCreate from "./components/NoteCreate.jsx";
import NoteList from "./components/NoteList.jsx";
import { createNote, removeNote, updateNote } from "./utils/NoteFunctions.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [notes, setNotes] = useState([]);
    const headerRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem("notes"));
        if (storedNotes) {
            setNotes(storedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <div className="flex flex-col">
            <Header ref={headerRef} />
            <div className="flex flex-col items-center justify-center flex-grow">
                <div className="bg-amber-300 p-4 w-full max-w-xl">
                    <NoteCreate onCreateNote={(newNote) => createNote(notes, setNotes, newNote)} />
                </div>
                <hr className="w-96 border-black my-6" />
                <div className="w-full max-w-xl flex-grow">
                    <NoteList
                        notes={notes}
                        removeNote={(id) => removeNote(notes, setNotes, id)}
                        updateNote={(newText) => updateNote(notes, setNotes, newText)}
                    />
                </div>
            </div>
            <Footer ref={footerRef} />
        </div>
    );
}

export default App;
