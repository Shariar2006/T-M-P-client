import { useForm } from "react-hook-form"

const TaskCreate = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)

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
                            <span className="label-text text-blue-500 text-xl">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className=" input w-80 input-bordered text-blue-500 text-base" />
                        
                    </div>
                </div>


                <div className="md:flex gap-2">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-blue-500 text-xl">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className=" input w-80 input-bordered text-blue-500 text-base" />
                        
                    </div>
                    <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-blue-500 text-xl">Category</span>
                            </label>
                            <select defaultValue='' {...register("category")} className="select select-bordered input w-80 text-blue-500 text-base">
                                <option disabled value=''>Select a category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
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