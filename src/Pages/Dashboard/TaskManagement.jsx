import useMyTask from '../../Hooks/useMyTask';

const TaskManagement = () => {
    const [myTask] = useMyTask()
    console.log(myTask)
    return (
        <div>
            
        </div>
    );
};

export default TaskManagement;