import React, { useState } from 'react';

export default function NoteCreate({ onCreateNote }) {
    const [text, setText] = useState('');

    const createNote = () => {
        if (!text) return;
        const request = {
            id: Math.random().toString(36).substr(2, 16),
            text: text,
        };
        onCreateNote(request);
        setText(''); // Note added, reset input field
    };

    return (
        <div className="flex flex-col items-center w-full">
            <textarea
                onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder="Not gir"
                className="border-2 outline-none rounded-lg px-4 py-3 w-full max-w-xl bg-gray-100 resize-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ease-in-out"
                rows="3"  // Başlangıçta 3 satır
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        createNote();
                    }
                }}
            />

            <div className="w-full flex justify-end mt-6">
                <button
                    className="border border-cyan-950 bg-cyan-950 text-amber-50 px-6 py-2 rounded-full hover:bg-cyan-700 hover:border-cyan-700 transition-all duration-300 ease-in-out"
                    onClick={createNote}
                >
                    Notu Ekle
                </button>
            </div>
        </div>
    );
}
