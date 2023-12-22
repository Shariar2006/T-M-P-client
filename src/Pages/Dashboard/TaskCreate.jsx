import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Components/AuthContext/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const TaskCreate = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const taskItem = {
            title: data.title,
            email: user?.email,
            status: 'to-do',
            description: data.description,
            dateline: data.dateline,
            priority: data.priority,
            }
            console.log(taskItem)

            const menuRes = await axiosPublic.post('/createTask', taskItem)
            if (menuRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added a New task",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
    }

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-[700px] mx-auto py-8 px-10 rounded-lg border shadow-md">
                <p className=' text-blue-500 text-4xl text-center font-bold mb-5'>Create a new task</p>

                <div className="md:flex gap-2">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-500 text-xl">Title</span>
                        </label>
                        <input type="text" {...register("title", { required: true })} placeholder="Title" className=" input w-80 input-bordered text-blue-500 text-base" />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-500 text-xl">Description</span>
                        </label>
                        <input type="text" {...register("description", { required: true })} placeholder="Description" className=" input w-80 input-bordered text-blue-500 text-base" />
                        
                    </div>
                </div>


                <div className="md:flex gap-2">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-500 text-xl">Dateline</span>
                        </label>
                        <input type="date" {...register("dateline", { required: true })} placeholder="Dateline" className=" input w-80 input-bordered text-blue-500 text-base" />
                        
                    </div>
                    <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-blue-500 text-xl">Priority</span>
                            </label>
                            <select defaultValue='' {...register("priority")} className="select select-bordered input w-80 text-blue-500 text-base">
                                <option disabled value=''>Select a Priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                </div>


                <div className=" w-52 mx-auto">
                    <input className='wrapper border-blue-500 border btn hover:bg-blue-500 bg-white text-center hover:text-white text-blue-500 py-3 rounded-lg text-xl font-bold  w-52 mx-auto my-4' type="submit" value="Create Task" />
                </div>

            </form>
        </div>
    );
};

export default TaskCreate;