import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthContext/AuthProvider";

const Register = () => {
    const { createUser, logOut, handleUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                // const userInfo = {
                //     email: data.email,
                //     name: data.name,
                //     photo: data.photo,
                //     badge: 'Bronze'
                // }
                console.log(result.user)
                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         if (res.data.insertedId) {

                //             Swal.fire({
                //                 position: "top-end",
                //                 icon: "success",
                //                 title: "Register successfully",
                //                 showConfirmButton: false,
                //                 timer: 1500
                //             });

                //         }
                //     })
                    logOut()
                    navigate('/login')
                    handleUpdateProfile(data.name, data.photo)

            })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left hidden lg:block">
                        <img src="https://assets-v2.lottiefiles.com/a/567e9d6a-116d-11ee-adcc-c362dfe23881/hrMdhw3flV.gif" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <p className=' text-blue-500 text-4xl text-center  mb-5'>Register now!</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-500 text-xl ">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className=" input input-bordered text-blue-500 text-lg  " />
                                {errors.name && <span className='text-red-600  mt-1'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-500 text-xl ">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className=" input input-bordered text-blue-500 text-lg  " />
                                {errors.email && <span className='text-red-600  mt-1'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-500 text-xl ">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/ })} name='password' placeholder="Password" className="  input text-blue-500 text-lg  input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600  mt-1">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600  mt-1">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600  mt-1">Password maximum 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600  mt-1">Password must be one uppercase, one lowercase,one number and one special characters</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-blue-500 text-xl ">Photo url</span>
                                </label>
                                <input type="url" {...register("photo")} placeholder="Photo URL" className=" input input-bordered text-blue-500 text-lg  " />
                            </div>


                            <div>
                                <input className='btn border-none bg-bltext-blue-500 hover:bg-blue-500 text-center text-blue-500  hover:text-white py-3 rounded-lg text-xl  w-full my-4' type="submit" value="Register" />
                            </div>
                            <p className='text-[#9CA3AF] text-base  text-center mt-4'>Already have an account? Please <Link to='/login' className='text-blue-500 underline'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;