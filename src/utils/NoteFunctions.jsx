export const createNote = (notes, setNotes, newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
};

export const removeNote = (notes, setNotes, id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
};

export const updateNote = (notes, setNotes, newText) => {
    const updatedList = notes.map((note) =>
        note.id !== newText.id ? note : newText
    );
    setNotes(updatedList);
    localStorage.setItem("notes", JSON.stringify(updatedList));
};
