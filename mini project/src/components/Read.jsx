import { toast } from "react-toastify";

const Read = ({ todos, settodos }) => {
    const DeleteHandler = (id) => {
        const filtered = todos.filter((todo) => todo.id !== id);
        settodos(filtered);
        toast.error("Task deleted!");
    };

    const CompleteHandler = (id) => {
        const filtered = todos.filter((todo) => todo.id !== id);
        settodos(filtered);
        toast.success("Task marked as completed!");
    };

    const rendertodos = todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center p-1 bg-[#63372C] rounded my-2">
            <span className="text-[#F2E5D7] text-xl font-thin">{todo.title}</span>
            <span className="flex gap-2 ml-auto">
                <svg
                    onClick={() => CompleteHandler(todo.id)}
                    className="text-[#FFBCB5] hover:text-pink-400 size-6 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <svg
                    onClick={() => DeleteHandler(todo.id)}
                    className="text-[#FFBCB5] hover:text-pink-400 size-6 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
        </li>
    ));

    return (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] p-1 sm:p-4 md:p-8 lg:p-12">
            <h1 className="m-2 sm:m-4 md:m-8 lg:m-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin">
                Your <span className="text-[#63372C] font-medium">Pending</span> Tasks
            </h1>
            <ol>{rendertodos}</ol>
        </div>
    );
};

export default Read;
