import React from 'react'


export default function TodoCreate() {
    return (
        <div className="flex flex-col items-center w-full">
            <input
                placeholder="Not gir"
                className="border-b-1 outline-0 rounded-lg px-4 py-2 w-full max-w-md"
            />

            <div className="w-full flex justify-end mt-5">
                <button
                    className="border bg-cyan-950 text-amber-50 cursor-pointer px-4 py-2"
                    onClick={() => console.log("asdasd")}
                >
                    Notu Ekle
                </button>
            </div>
        </div>
    )
}
