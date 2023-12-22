import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Components/AuthContext/AuthProvider";
import { useQuery } from '@tanstack/react-query';



const useMyTask = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
    const { refetch, data: myTask = []}= useQuery({
        queryKey: ['myTask', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/createTask?email=${user.email}`);
            return res.data
        }
    })

    return [myTask, refetch]
};

export default useMyTask;