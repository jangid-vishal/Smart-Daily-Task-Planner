import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const SubmitHandler = (data) => {
        data.isCompleted = false;
        data.id = nanoid();

        const copytodos = [...todos];
        copytodos.push(data);
        settodos(copytodos);

        toast.success("Task created!");

        reset();
    };
    return (
        <div className=" w-full sm:w-[90%] md:w-[70%] lg:w-[60%] p-1 sm:p-4 md:p-8 lg:p-12 ">
            <h1 className="m-2 sm:m-4 md:m-8 lg:m-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin">
                Plan Your Day with Smart <span className="text-[#C97D60] font-medium">Reminders</span><br />{" "}
            </h1>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <input
                    {...register("title", {
                        required: "title can not be empty",
                    })}
                    className="p-2 border-b w-full text-2xl font-thin outline-0"
                    type="text"
                    placeholder="title"
                />

                <small className="font-thin text-red-400">
                    {errors?.title?.message}
                </small>

                <br />
                <br />
                <button className="mt-4 sm:mt-6 lg:mt-10 px-6 py-2 bg-gradient-to-r from-[#63372C] to-[#262322] text-[#F2E5D7] text-lg rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                    Create Task
                </button>
            </form>
        </div>
    );
};

export default Create;