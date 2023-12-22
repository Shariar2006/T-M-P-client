import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateTask = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()
    // const { id } = useParams()
    const { _id,
        title,
        status,
        description,
        dateline,
        priority
    } = useLoaderData()

    const onSubmit = async (data) => {

        const taskItem = {
            title: data.title,
            status: data.status,
            description: data.description,
            dateline: data.dateline,
            priority: data.priority,
            }
            console.log(taskItem)
        
        const menuRes = await axiosPublic.patch(`/myTask/${_id}`, taskItem)
        console.log(menuRes)
        console.log(menuRes.data)
        if (menuRes.data.modifiedCount > 0) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Update and save your task',
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="md:w-[700px] mx-auto py-8 px-10 rounded-lg border shadow-md">
                <p className=' text-blue-500 text-4xl text-center font-bold mb-5'>Change something</p>

                <div className="md:flex gap-2">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-500 text-xl">Title</span>
                        </label>
                        <input defaultValue={title} type="text" {...register("title", { required: true })} placeholder="Title" className=" input w-80 input-bordered text-blue-500 text-base" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-500 text-xl">Description</span>
                        </label>
                        <input defaultValue={description} type="text" {...register("description", { required: true })} placeholder="Description" className=" input w-80 input-bordered text-blue-500 text-base" />

                    </div>
                </div>


                <div className="md:flex gap-2">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-500 text-xl">Dateline</span>
                        </label>
                        <input defaultValue={dateline} type="date" {...register("dateline", { required: true })} placeholder="Dateline" className=" input w-80 input-bordered text-blue-500 text-base" />

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-blue-500 text-xl">Priority</span>
                        </label>
                        <select defaultValue={priority} {...register("priority")} className="select select-bordered input w-80 text-blue-500 text-base">
                            <option disabled value=''>{priority}</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>
                <div className="md:flex gap-2">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-blue-500 text-xl">Status</span>
                        </label>
                        <select defaultValue={status} {...register("status")} className="select select-bordered input w-80 text-blue-500 text-base">
                            <option disabled value=''>{status}</option>
                            <option value="to-do">to-do</option>
                            <option value="ongoing">ongoing</option>
                            <option value="completed ">completed </option>
                        </select>
                    </div>
                </div>


                <div className=" w-52 mx-auto">
                    <input className='wrapper border-blue-500 border btn hover:bg-blue-500 bg-white text-center hover:text-white text-blue-500 py-3 rounded-lg text-xl font-bold  w-52 mx-auto my-4' type="submit" value="Save Change" />
                </div>

            </form>
        </div>
    );
};

export default UpdateTask;