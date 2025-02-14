import React from 'react'
import {FaGithub} from "react-icons/fa";

export default function Footer() {
    return (
            <footer
                className="border justify-center flex mt-auto p-4 bg-emerald-500">
                <FaGithub
                    size={30}
                    className="cursor-pointer duration-200 hover:-translate-y-0.5 "
                    onClick={()=>{window.open("https://github.com/hasancaktar/react-todo-app","_blank")}}/>
        </footer>
    )
}
