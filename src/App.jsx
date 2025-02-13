import TodoCreate from "./components/TodoCreate.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-w-screen">
                <div className="border p-4 w-full max-w-md">
                    <TodoCreate />
                </div>
                <div className="w-full max-w-md mt-4">
                    <TodoList />
                </div>
            </div>

        </>
    )
}

export default App
