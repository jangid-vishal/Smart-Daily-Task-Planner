import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
    const [todos, settodos] = useState([
        { id:0, title:"example of task" , isCompleted:false},
    ]);

    return (
        <div className="text-[#262322] flex flex-col md:flex-row w-screen h-screen bg-[#F2E5D7] p-2 sm:p-4 md:p-8 lg:p-12">
            <Create todos={todos} settodos={settodos} />
            <Read todos={todos} settodos={settodos} />
        </div>
    );
};

export default App;



