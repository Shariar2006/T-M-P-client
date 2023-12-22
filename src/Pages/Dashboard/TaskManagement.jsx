import { FaTrashCan } from 'react-icons/fa6';
import useMyTask from '../../Hooks/useMyTask';

const TaskManagement = () => {
    const [myTask] = useMyTask()
    console.log(myTask)


    // const handleDelete = id => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosPublic.delete(`/users/${id}`)
    //                 .then(res => {
    //                     if (res.data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "This food has been deleted.",
    //                             icon: "success"
    //                         });
    //                         refetch()
    //                     }
    //                 })
    //         }
    //     });
    // }

    return (
        <div>
            <div className="font3 text-blue-500">
            <div className="overflow-x-auto lg:overflow-x-hidden">
                <div className="w-11/12 mx-auto p-5 flex justify-between">
                    <h2 className="text-4xl font-semibold">All Task: {myTask.length}</h2>
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
                                <th>Delete User</th>
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
                                            // onClick={() => { handleDelete(task?._id) }}
                                            className="btn btn-ghost btn-lg text-red-500"><FaTrashCan /></button>
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