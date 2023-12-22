import { FaTrashCan } from 'react-icons/fa6';
import useMyTask from '../../Hooks/useMyTask';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const TaskManagement = () => {
    const [myTask, refetch] = useMyTask()
    const axiosPublic = useAxiosPublic()
    console.log(myTask)


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/myTask/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This task has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="font3 text-blue-500">
            <div className="overflow-x-auto lg:overflow-x-hidden">
                <div className="w-11/12 mx-auto p-5 flex justify-between items-center">
                    <h2 className="text-4xl font-semibold">All Task: {myTask.length}</h2>
                    <Link to='/dashboard/taskCreate' className=' border-blue-500 border btn hover:bg-blue-500 bg-white text-center hover:text-white text-blue-500 rounded-lg text-xl font-bold my-4'>Create a new task</Link>
                </div>
                <div className="overflow-x-auto">

                    <table className="table text-base">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Delete Task</th>
                                <th>Update Task</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myTask?.map((task, index) => <tr key={task._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </th>
                                    <td>
                                        {task?.title}
                                    </td>
                                    <td className=" text-base">
                                        {task?.email}
                                    </td>
                                    <td>
                                        {task?.status}
                                    </td>
                                    <th>
                                        <button
                                            onClick={() => { handleDelete(task?._id) }}
                                            className="btn btn-ghost btn-lg text-red-500"><FaTrashCan /></button>
                                    </th>
                                    <th>
                                        <Link
                                        to={`/dashboard/updateTask/${task?._id}`}> 
                                        <button
                                        className="btn btn-ghost btn-lg "><FaEdit /></button>
                                        </Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        </div>
    );
};

export default TaskManagement;